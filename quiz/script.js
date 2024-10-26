// Elementos da DOM 
const startBtn = document.getElementById('start-btn');
const quizPage = document.getElementById('quiz-page');
const welcomePage = document.getElementById('welcome-page');
const questionText = document.getElementById('question-text');
const option1Btn = document.getElementById('option1');
const option2Btn = document.getElementById('option2');
const resultPage = document.getElementById('result-page');
const resultCharacter = document.getElementById('result-character');
const resultDescription = document.getElementById('result-description');
const resultImage = document.getElementById('result-image');
const resetBtn = document.getElementById('reset-btn');

// Perguntas e Pontuações
const questions = [
    {
        question: "Qual é a sua atividade favorita em um dia livre?",
        options: [
            { text: "Assistir a filmes e séries", points: { joey: 3, monica: 1 } },
            { text: "Organizar a casa", points: { joey: 1, monica: 3 } }
        ]
    },
    {
        question: "Como você lida com problemas pessoais?",
        options: [
            { text: "Com humor e uma piada", points: { chandler: 3, ross: 1 } },
            { text: "Analisando a situação", points: { chandler: 1, ross: 3 } }
        ]
    },
    {
        question: "Qual é a sua comida favorita?",
        options: [
            { text: "Pizza", points: { joey: 3, phoebe: 1 } },
            { text: "Salada", points: { joey: 1, phoebe: 3 } }
        ]
    },
    {
        question: "Como você descreveria seu estilo?",
        options: [
            { text: "Elegante e na moda", points: { rachel: 3, monica: 1 } },
            { text: "Descontraído e casual", points: { rachel: 1, monica: 3 } }
        ]
    },
    {
        question: "Qual é a sua visão sobre amor?",
        options: [
            { text: "Amo aventuras e paixões", points: { phoebe: 3, ross: 1 } },
            { text: "Prefiro relacionamentos estáveis", points: { phoebe: 1, ross: 3 } }
        ]
    },
    {
        question: "Qual é o seu animal favorito?",
        options: [
            { text: "Cachorro", points: { joey: 3, rachel: 2 } },
            { text: "Gato", points: { joey: 1, rachel: 3 } }
        ]
    },
    {
        question: "O que você prefere fazer à noite?",
        options: [
            { text: "Sair para festas", points: { joey: 3, chandler: 1 } },
            { text: "Assistir a um filme em casa", points: { joey: 1, chandler: 3 } }
        ]
    },
    {
        question: "Qual é sua abordagem para desafios?",
        options: [
            { text: "Encaro de frente", points: { ross: 3, chandler: 1 } },
            { text: "Evito conflitos", points: { ross: 1, chandler: 3 } }
        ]
    },
    {
        question: "Como você se sente sobre organização?",
        options: [
            { text: "Eu sou super organizado", points: { monica: 3, phoebe: 1 } },
            { text: "Sou mais espontâneo", points: { monica: 1, phoebe: 3 } }
        ]
    },
    {
        question: "Qual dessas atividades você mais gosta?",
        options: [
            { text: "Cozinhar", points: { monica: 3, joey: 1 } },
            { text: "Cantar e tocar violão", points: { monica: 1, phoebe: 3 } }
        ]
    }
];

// Pontuação Inicial
let currentQuestionIndex = 0;
let score = { joey: 0, monica: 0, chandler: 0, ross: 0, phoebe: 0, rachel: 0 };

// Função para mostrar a pergunta
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    option1Btn.textContent = currentQuestion.options[0].text;
    option2Btn.textContent = currentQuestion.options[1].text;
}

// Função para lidar com a seleção de opções
function selectOption(optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    for (let character in score) {
        score[character] += currentQuestion.options[optionIndex].points[character] || 0;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Função para mostrar o resultado
function showResult() {
    quizPage.classList.add('hidden');
    resultPage.classList.remove('hidden');
    
    // Determinar o personagem com maior pontuação
    const winner = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    displayResult(winner);
}

// Função para exibir o resultado do personagem
function displayResult(winner) {
    switch (winner) {
        case 'joey':
            resultCharacter.textContent = "Você é Joey Tribbiani!";
            resultDescription.textContent = "Você ama comer, é engraçado e adora relaxar.";
            resultImage.src = "/fotos/joey.jpg";
            break;
        case 'monica':
            resultCharacter.textContent = "Você é Monica Geller!";
            resultDescription.textContent = "Você é organizado, competitivo e ama cozinhar.";
            resultImage.src = "/fotos/monica.jpg";
            break;
        case 'chandler':
            resultCharacter.textContent = "Você é Chandler Bing!";
            resultDescription.textContent = "Você é sarcástico e usa o humor para lidar com as situações.";
            resultImage.src = "/fotos/chandler.jpg";
            break;
        case 'ross':
            resultCharacter.textContent = "Você é Ross Geller!";
            resultDescription.textContent = "Você é inteligente e ama analisar as coisas logicamente.";
            resultImage.src = "/fotos/ross.jpg";
            break;
        case 'phoebe':
            resultCharacter.textContent = "Você é Phoebe Buffay!";
            resultDescription.textContent = "Você é criativo e ama sua liberdade.";
            resultImage.src = "/fotos/phoebe.jpg";
            break;
        case 'rachel':
            resultCharacter.textContent = "Você é Rachel Green!";
            resultDescription.textContent = "Você é estiloso, ambicioso e sempre antenado nas tendências.";
            resultImage.src = "/fotos/rachel.jpg";
            break;
        default:
            resultCharacter.textContent = "Erro!";
            resultDescription.textContent = "Algo deu errado.";
            resultImage.src = "";
            break;
    }
}

// Event Listeners
startBtn.addEventListener('click', function () {
    welcomePage.classList.add('hidden');
    quizPage.classList.remove('hidden');
    showQuestion();
});

option1Btn.addEventListener('click', function () {
    selectOption(0);
});

option2Btn.addEventListener('click', function () {
    selectOption(1);
});

resetBtn.addEventListener('click', function () {
    // Reiniciar o quiz
    currentQuestionIndex = 0;
    score = { joey: 0, monica: 0, chandler: 0, ross: 0, phoebe: 0, rachel: 0 };
    resultPage.classList.add('hidden'); // Oculta a página de resultados
    quizPage.classList.remove('hidden'); // Exibe a página do quiz
    showQuestion(); // Mostra a primeira pergunta
});
