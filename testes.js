document.addEventListener('DOMContentLoaded', function() {
    let currentSection = 0; // Começa na primeira seção
    const sections = ['depression-questions', 'anxiety-questions', 'stress-questions'];
    const nextButton = document.getElementById('next-button');
    const submitButton = document.getElementById('submit-button');
    const resultContainer = document.getElementById('result');
    const resultOutput = document.getElementById('result-output');
    const speedometer = document.getElementById('speedometer');
    const ctx = speedometer.getContext('2d'); // Contexto para desenhar no canvas

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

        // Define as faixas de gravidade
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

        // Exibe o resultado e interpretação
        resultContainer.style.display = 'block';
        resultOutput.innerHTML = `
            <p>Sua pontuação total foi: <strong>${score}</strong></p>
            <p>${interpretation}</p>
        `;

        // Desenha o velocímetro (opcional)
        drawSpeedometer(score);
    });

    // Função para desenhar o velocímetro com base na pontuação
    function drawSpeedometer(score) {
        const maxScore = 60; // A pontuação máxima
        const minScore = 0;  // A pontuação mínima
        const percentage = (score - minScore) / (maxScore - minScore); // Calcula a porcentagem

        // Limpeza do canvas
        ctx.clearRect(0, 0, speedometer.width, speedometer.height);

        // Desenho básico do velocímetro (arco)
        const centerX = speedometer.width / 2;
        const centerY = speedometer.height / 2;
        const radius = 100;
        const startAngle = Math.PI;  // Posição inicial do arco (começando da esquerda)
        const endAngle = 0;  // Posição final do arco
        const currentAngle = startAngle + (percentage * (startAngle - endAngle));  // Ajusta a posição do ponteiro

        // Desenha o arco de fundo
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
        ctx.lineWidth = 20;
        ctx.strokeStyle = '#ddd';
        ctx.stroke();

        // Desenha o arco de pontuação
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, currentAngle, false);
        ctx.lineWidth = 20;
        ctx.strokeStyle = getColorForScore(score);
        ctx.stroke();

        // Desenha o ponteiro (indicador)
        const pointerX = centerX + radius * Math.cos(currentAngle);
        const pointerY = centerY + radius * Math.sin(currentAngle);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(pointerX, pointerY);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#000';
        ctx.stroke();

        // Adiciona as marcações de pontuação em cima do velocímetro
        const step = (maxScore - minScore) / 5; // Passo para as marcações
        const labelRadius = radius + 15; // Distância das marcações do centro
        ctx.font = '12px Arial';
        ctx.fillStyle = '#000';

        for (let i = 0; i <= 5; i++) {
            const angle = startAngle + (i * (Math.PI / 5)); // Calcula o ângulo de cada marcação
            const labelX = centerX + labelRadius * Math.cos(angle);
            const labelY = centerY + labelRadius * Math.sin(angle);
            ctx.fillText(minScore + step * i, labelX - 5, labelY - 5); // Ajuste para centralizar o texto acima
        }
    }

    // Função para obter a cor baseada na pontuação
    function getColorForScore(score) {
        if (score <= 15) {
            return '#28a745'; // Verde
        } else if (score <= 30) {
            return '#ffc107'; // Amarelo
        } else if (score <= 45) {
            return '#fd7e14'; // Laranja
        } else {
            return '#dc3545'; // Vermelho
        }
    }

    // Inicializa a exibição da primeira seção
    showSection(currentSection);
});
