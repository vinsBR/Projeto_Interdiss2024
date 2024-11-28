document.addEventListener('DOMContentLoaded', function() {
    let currentSection = 0;
    const sections = ['depression-questions', 'anxiety-questions', 'stress-questions'];
    const nextButton = document.getElementById('next-button');
    const submitButton = document.getElementById('submit-button');
    const resultContainer = document.getElementById('result');
    const resultOutput = document.getElementById('result-output');
    const speedometer = document.getElementById('speedometer');
    const ctx = speedometer.getContext('2d');

    function showSection(index) {
        for (let i = 0; i < sections.length; i++) {
            const section = document.getElementById(sections[i]);
            if (i === index) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        }
    }

    nextButton.addEventListener('click', function() {
        currentSection++;
        if (currentSection < sections.length) {
            showSection(currentSection);
        }
        if (currentSection === sections.length) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'block';
        }
    });

    submitButton.addEventListener('click', function() {
        let score = 0;
        for (let i = 1; i <= 15; i++) {
            score += parseInt(document.querySelector(`#q${i}`).value);
        }

        let interpretation = '';
        if (score <= 15) {
            interpretation = 'Seu estado emocional é excelente.';
        } else if (score <= 30) {
            interpretation = 'Seu estado emocional é moderado. Leve atenção pode ser necessária.';
        } else if (score <= 45) {
            interpretation = 'Seu estado emocional está preocupante. Considere buscar suporte.';
        } else {
            interpretation = 'Seu estado emocional é grave. É altamente recomendável procurar ajuda especializada.';
        }

        resultContainer.style.display = 'block';
        resultOutput.innerHTML = `
            <p>Sua pontuação total foi: <strong>${score}</strong></p>
            <p>${interpretation}</p>
        `;

        drawSpeedometer(score);
    });

    function drawSpeedometer(score) {
        const maxScore = 60;
        const minScore = 0;
        const percentage = (score - minScore) / (maxScore - minScore);

        ctx.clearRect(0, 0, speedometer.width, speedometer.height);

        const centerX = speedometer.width / 2;
        const centerY = speedometer.height / 2;
        const radius = 100;
        const startAngle = Math.PI;
        const endAngle = 0;
        const currentAngle = startAngle + (percentage * (startAngle - endAngle));

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
        ctx.lineWidth = 20;
        ctx.strokeStyle = '#ddd';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, currentAngle, false);
        ctx.lineWidth = 20;
        ctx.strokeStyle = getColorForScore(score);
        ctx.stroke();

        const pointerX = centerX + radius * Math.cos(currentAngle);
        const pointerY = centerY + radius * Math.sin(currentAngle);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(pointerX, pointerY);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#000';
        ctx.stroke();

        const step = (maxScore - minScore) / 5;
        const labelRadius = radius + 15;
        ctx.font = '12px Arial';
        ctx.fillStyle = '#000';

        for (let i = 0; i <= 5; i++) {
            const angle = startAngle + (i * (Math.PI / 5));
            const labelX = centerX + labelRadius * Math.cos(angle);
            const labelY = centerY + labelRadius * Math.sin(angle);
            ctx.fillText(minScore + step * i, labelX - 5, labelY - 5);
        }
    }

    function getColorForScore(score) {
        if (score <= 15) {
            return '#28a745';
        } else if (score <= 30) {
            return '#ffc107';
        } else if (score <= 45) {
            return '#fd7e14';
        } else {
            return '#dc3545';
        }
    }

    showSection(currentSection);
});
