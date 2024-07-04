const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Ernest Hemingway"],
    correctAnswer: 0
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: 2
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "HO"],
    correctAnswer: 0
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 2
  },
  {
    question: "What year did the Titanic sink?",
    options: ["1912", "1905", "1920", "1918"],
    correctAnswer: 0
  },
  {
    question: "Which is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    correctAnswer: 1
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    correctAnswer: 2
  }
];

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result');

function loadQuiz() {
  questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${option}
                </label>
            `).join('')}
        `;
    quizContainer.appendChild(questionDiv);
  });
}

function submitQuiz() {
  let score = 0;
  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedOption && parseInt(selectedOption.value) === q.correctAnswer) {
      score++;
    }
  });
  resultContainer.innerHTML = `You got ${score} out of ${questions.length} correct answers.`;
}

loadQuiz();
