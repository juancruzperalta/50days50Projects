const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "quiz_d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "quiz_b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "quiz_a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "quiz_b",
  },
];
const quizA = document.querySelector("#text_a"),
  quizB = document.querySelector("#text_b"),
  quizC = document.querySelector("#text_c"),
  quizD = document.querySelector("#text_d"),
  quiz = document.querySelector(".quiz"),
  question = document.querySelector("#question"),
  buttonSubmit = document.querySelector("#type-submit"),
  answers = document.querySelectorAll(".answer"),
  resultQuiz = document.querySelector(".result-quiz"),
  resultQuizValueResp = document.querySelector(".value-resp"),
  buttonReload = document.querySelector("#type-reload");
let countQuestion = 0;
let cantAcertadas = 0;
loadQuestions();
function loadQuestions() {
  let currentQuestion = quizData[countQuestion];
  resultQuiz.style.display = "none";
  if (countQuestion < quizData.length) {
    question.textContent = currentQuestion.question;
    quizA.textContent = currentQuestion.a;
    quizB.textContent = currentQuestion.b;
    quizC.textContent = currentQuestion.c;
    quizD.textContent = currentQuestion.d;
  } else {
    mostrarResult();
  }
}

buttonSubmit.addEventListener("click", (e) => {
  let answer = obtenerAnswer();

  if (answer) {
    if (answer == quizData[countQuestion].correct) {
      if (countQuestion <= quizData.length) {
        cantAcertadas++;
        countQuestion++;
        loadQuestions();
        deleteAnswer();
      } else {
        mostrarResult();
      }
    } else {
      if (countQuestion <= quizData.length) {
        countQuestion++;
        loadQuestions();
        deleteAnswer();
      } else {
        mostrarResult();
      }
    }
  }
});
function mostrarResult() {
  quiz.style.display = "none";
  resultQuiz.style.display = "flex";
  resultQuizValueResp.textContent = `${cantAcertadas}/4`;

  buttonReload.addEventListener("click", (e) => {
    resultQuiz.style.display = "none";
    quiz.style.display = "block";
    cantAcertadas = 0;
    countQuestion = 0;
    loadQuestions();
  });
}
function deleteAnswer() {
  answers.forEach((el) => (el.checked = false));
}
function obtenerAnswer() {
  let answer;
  answers.forEach((el) => {
    if (el.checked) {
      answer = el.id;
    }
  });
  return answer;
}
