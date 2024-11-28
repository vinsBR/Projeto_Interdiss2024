function cuidados() { 
    document.getElementById("tituloPrinc").innerHTML =
    "Cuidados Mentais";
    document.getElementById("texPincipal").innerHTML = 
    "Cuidar da saúde mental é tão essencial quanto cuidar do corpo. Ansiedade, estresse e depressão afetam milhões de pessoas, muitas vezes em silêncio. Reconhecer esses sinais e buscar ajuda não é fraqueza, mas um ato de coragem e autocuidado. Priorize a sua mente, pois ela é a chave para viver com equilíbrio e bem-estar.";
}
function ansiedade() { 
     document.getElementById("tituloPrinc").innerHTML =
    "Ansiedade";
    document.getElementById("texPincipal").innerHTML = 
    "A ansiedade é uma sensação persistente de medo e preocupação, que muitas vezes surge sem motivo aparente. Ela pode causar sintomas como palpitações, falta de ar e pensamentos negativos, dificultando atividades do dia a dia. Não se trata apenas de 'nervosismo'; é uma condição séria que merece atenção. Reconhecer os sinais e buscar apoio psicológico é fundamental para entender suas causas e aprender estratégias de controle. Você não precisa enfrentar isso sozinho — pedir ajuda é um passo importante para uma vida mais tranquila e equilibrada.";
}
function depressao() { 
    document.getElementById("tituloPrinc").innerHTML = 
    "Depressão";
    document.getElementById("texPincipal").innerHTML = 
    "A depressão é mais do que tristeza; é uma condição profunda que pode causar desânimo, falta de energia e perda de interesse pela vida. Afeta o corpo e a mente, tornando tarefas simples difíceis. Buscar ajuda é essencial, pois a depressão tem tratamento e não precisa ser enfrentada sozinha.";
}
function estresse() { 
    document.getElementById("tituloPrinc").innerHTML = 
    "Estresse";
    document.getElementById("texPincipal").innerHTML = 
    "O estresse é a resposta do corpo a pressões diárias, seja no trabalho, estudos ou relações pessoais. Em excesso, ele pode causar sintomas como dores de cabeça, cansaço e irritabilidade, afetando tanto a saúde física quanto mental. Aprender a reconhecer os sinais e encontrar maneiras de relaxar é essencial para evitar o desgaste e manter o equilíbrio. Cuidar do estresse é cuidar de si mesmo.";
}

const iniciarBtn = document.getElementById('iniciarBtn');
const circle = document.querySelector('.circle');


iniciarBtn.addEventListener('click', function() {
    circle.style.display = 'block'; 
    circle.classList.add('animar'); 
});

document.getElementById('submit-btn').addEventListener('click', function () {
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    let depressionScore = 0;
    let anxietyScore = 0;
    let stressScore = 0;

    for (let [key, value] of formData.entries()) {
        const questionNumber = parseInt(key.substring(1));
        const score = parseInt(value);

        if (questionNumber <= 5) {
            depressionScore += score;
        } else if (questionNumber <= 10) {
            anxietyScore += score;
        } else {
            stressScore += score;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Resultados:</h2>
        <p>Depressão: ${depressionScore}</p>
        <p>Ansiedade: ${anxietyScore}</p>
        <p>Estresse: ${stressScore}</p>
    `;
});
