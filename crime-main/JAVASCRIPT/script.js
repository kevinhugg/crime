document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        "Conhecia a vítima?",
        "Teve alguma relação com a vítima?",
        "Estudou com a vítima?",
        "Já brigou com a vítima?",
        "Foi agredido pela vítima?",
        "Telefonou para a vítima?",
        "Esteve no local da ocorrência?",
        "Mora perto da vítima?",
        "Já trabalhou com a vítima?",
        "Devia para a vítima?"
    ];

    let currentQuestion = 0;
    let yesCount = 0;

    const spnqtd = document.querySelector('.spnqtd');
    const questionElem = document.querySelector('.question');
    const answersElem = document.querySelector('.answers');
    const finishElem = document.querySelector('.finish');

    function updateQuestion() {
        spnqtd.textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
        questionElem.textContent = questions[currentQuestion];
        answersElem.innerHTML = `
            <button onclick="answer('Sim')">Sim</button>
            <button onclick="answer('Não')">Não</button>
        `;
    }

    window.answer = function(response) {
        if (response === 'Sim') yesCount++;
        currentQuestion++;
        if (currentQuestion < questions.length) {
            updateQuestion();
        } else {
            finishQuiz();
        }
    }

    function finishQuiz() {
        let result;
        if (yesCount >= 9) {
            result = "Você é culpado!";
        } else if (yesCount >= 6) {
            result = "Você é cúmplice!";
        } else if (yesCount >= 5) {
            result = "Você é suspeito!";
        } else {
            result = "Você é inocente!";
        }
        finishElem.querySelector('span').textContent = result;
        finishElem.style.display = 'flex';
        document.querySelector('.content').style.display = 'none';
    }

    window.restart = function() {
        currentQuestion = 0;
        yesCount = 0;
        finishElem.style.display = 'none';
        document.querySelector('.content').style.display = 'flex';
        updateQuestion();
    }

    updateQuestion();
});
