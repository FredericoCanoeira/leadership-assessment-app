let currentQuestionIndex = 0;
const questions = [
    "Como você avalia sua capacidade de comunicação?",
    "Como você avalia sua capacidade de liderança?",
    "Como você avalia sua capacidade de trabalho em equipe?"
];
const responses = [];

// Função para selecionar a classificação
function selectRating(rating) {
    responses[currentQuestionIndex] = rating;
    document.getElementById('progress').style.width = `${(currentQuestionIndex + 1) / questions.length * 100}%`;
}

// Função para ir para a próxima pergunta
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateQuestion();
    } else {
        alert("Você completou a autoavaliação!");
        console.log("Respostas:", responses);
    }
}

// Função para voltar à pergunta anterior
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestion();
    }
}

// Função para atualizar a pergunta exibida
function updateQuestion() {
    document.getElementById('question').innerText = questions[currentQuestionIndex];
}