// Defining variables to be used throughout.
let scoreTimer = 60;
let currentQuestion = 0;
let timerInterval = 0;
let headerWrapEl = document.querySelector("#header-wrap");
let mainEl = document.querySelector("#main");
let questionWrapEl = document.querySelector("#question-wrap");

// Establishing quiz questions and correct answers.
let quizArray = [
  {
    text: "A for loop repeats until a specified condition evaluates to _______.",
    option1: "true",
    option2: "false",
    option3: "truthy",
    option4: "falsy",
    answer: "1",
  },
  {
    text: "JavaScript's String type is used to represent _______.",
    option1: "an expression",
    option2: "textual data",
    option3: "an object",
    option4: "an array",
    answer: "2",
  },
  {
    text: "When should you include a README file in your repository?",
    option1: "when you feel like it",
    option2: "when your boss asks you to",
    option3: "never",
    option4: "always",
    answer: "4",
  },
  {
    text: "What does CSS stand for?",
    option1: "Cascading Style Sheets",
    option2: "Certified Security Solutions",
    option3: "Communications Support System",
    option4: "Contact Start Stop",
    answer: "1",
  },
  {
    text: "Loops offer a quick and easy way to do something _______.",
    option1: "at the top of every hour",
    option2: "every minute",
    option3: "repeatedly",
    option4: "when I want it to",
    answer: "3",
  },
  {
    text: "Which of the following is not a primitive data type in JavaScript?",
    option1: "object",
    option2: "string",
    option3: "symbol",
    option4: "boolean",
    answer: "1",
  },
  {
    text: "NaN stands for _______.",
    option1: "not a chance",
    option2: "never in a nanosecond",
    option3: "not at noon",
    option4: "not a number",
    answer: "4",
  },
  {
    text: "What is GitHub?",
    option1: "a social media site",
    option2: "a code hosting platform for version control and collaboration",
    option3: "a streaming service",
    option4: "a ghost town",
    answer: "2",
  },
  {
    text: "Which of the following cannot be targeted by JavaScript?",
    option1: "the render tree",
    option2: "the DevTools element inspector",
    option3: "CSS pseudo-elements",
    option4: "your hard drive",
    answer: "3",
  },

  {
    text: "Which of the following cannot be targeted by JavaScript?",
    option1: "the render tree",
    option2: "the DevTools element inspector",
    option3: "CSS pseudo-elements",
    option4: "your hard drive",
    answer: "3",
  },
];

let highScoreEl = document.createElement("a");
highScoreEl.href = "./scores.html";
highScoreEl.innerHTML = "View High Scores";
headerWrapEl.appendChild(highScoreEl);

let timerEl = document.createElement("p");
timerEl.textContent = "Timer: " + scoreTimer;
headerWrapEl.appendChild(timerEl);

let questionEl = document.createElement("h3");
questionEl.textContent = "Coding Quiz Challenge";
questionWrapEl.appendChild(questionEl);

let instructionsEl = document.createElement("p");
instructionsEl.innerHTML =
  "Answer the following code-related questions within the time limit. Your score is based on the time remaining, and high score wins. Each incorrect answer will penalize your score by 10 seconds.<br> <br> Let's begin!";
instructionsEl.id = "instructions";
questionWrapEl.appendChild(instructionsEl);

let startBtnWrapEl = document.createElement("div");
startBtnWrapEl.id = "startBtn-wrap";

let startBtnEl = document.createElement("button");
startBtnEl.className = "btn";
startBtnEl.id = "startBtn";
startBtnEl.innerHTML = "Begin Quiz Now! »";
startBtnWrapEl.appendChild(startBtnEl);
questionWrapEl.appendChild(startBtnWrapEl);

let startQuiz = function () {
  questionWrapEl.removeChild(instructionsEl);
  questionWrapEl.removeChild(startBtnWrapEl);

  questionEl.textContent = quizArray[currentQuestion].text;

  let optionOlEl = document.createElement("ol");
  optionOlEl.id = "option-ol";
  questionWrapEl.appendChild(optionOlEl);

  let option1El = document.createElement("li");
  option1El.setAttribute("option-number", "1");
  option1El.id = "option1";
  option1El.className = "option";
  option1El.textContent = quizArray[currentQuestion].option1;
  optionOlEl.appendChild(option1El);

  let option2El = document.createElement("li");
  option2El.setAttribute("option-number", "2");
  option2El.id = "option2";
  option2El.className = "option";
  option2El.textContent = quizArray[currentQuestion].option2;
  optionOlEl.appendChild(option2El);

  let option3El = document.createElement("li");
  option3El.setAttribute("option-number", "3");
  option3El.id = "option3";
  option3El.className = "option";
  option3El.textContent = quizArray[currentQuestion].option3;
  optionOlEl.appendChild(option3El);

  let option4El = document.createElement("li");
  option4El.setAttribute("option-number", "4");
  option4El.id = "option4";
  option4El.className = "option";
  option4El.textContent = quizArray[currentQuestion].option4;
  optionOlEl.appendChild(option4El);

  let feedbackWrapEl = document.createElement("div");
  feedbackWrapEl.id = "feedback-wrap";
  questionWrapEl.appendChild(feedbackWrapEl);
  let feedbackDividerEl = document.createElement("hr");
  feedbackWrapEl.appendChild(feedbackDividerEl);
  let feedbackMsgEl = document.createElement("h3");
  feedbackMsgEl.id = "feedback-message";
  feedbackWrapEl.appendChild(feedbackMsgEl);

  // Shows the countdown in the top right.
  scoreTimerCountdown();
};

let nextQuestion = function (event) {
  let targetEl = event.target;
  let answer = targetEl.getAttribute("option-number");

  if (answer) {
    let feedbackMsgEl = document.querySelector("#feedback-message");
    if (answer === quizArray[currentQuestion].answer) {
      feedbackMsgEl.textContent = "Correct";
    } else {
      scoreTimer = Math.max(0, scoreTimer - 10);
      feedbackMsgEl.textContent = "Wrong";
    }
  }

  if (currentQuestion + 1 < quizArray.length && answer) {
    currentQuestion++;
    questionEl.textContent = quizArray[currentQuestion].text;
    let option1El = document.querySelector("#option1");
    option1El.textContent = quizArray[currentQuestion].option1;
    let option2El = document.querySelector("#option2");
    option2El.textContent = quizArray[currentQuestion].option2;
    let option3El = document.querySelector("#option3");
    option3El.textContent = quizArray[currentQuestion].option3;
    let option4El = document.querySelector("#option4");
    option4El.textContent = quizArray[currentQuestion].option4;
  }

  if (targetEl.id === "initials-button") {
    submitInitials(event);
  }
};

let scoreTimerCountdown = function () {
  timerInterval = setInterval(function () {
    timerEl.textContent = "Timer: " + scoreTimer;

    if (scoreTimer > 0) {
      scoreTimer--;
    } else if (scoreTimer === 0) {
      quizOver();
    }

    if (currentQuestion + 1 === quizArray.length) {
      quizOver();
    }
  }, 1000);
};

let quizOver = function () {
  clearInterval(timerInterval);

  let feedbackMsgEl = document.querySelector("#feedback-message");
  feedbackMsgEl.textContent = "";

  let optionOlEl = document.querySelector("#option-ol");
  questionWrapEl.removeChild(optionOlEl);
  timerEl.textContent = "Timer: " + scoreTimer;
  questionEl.innerHTML = "Great job!<br> Your final score is: " + scoreTimer;

  let initialFormEl = document.createElement("form");
  initialFormEl.id = "initials-form";
  questionWrapEl.appendChild(initialFormEl);

  let inputWrapEl = document.createElement("div");
  inputWrapEl.id = "input-wrap";
  initialFormEl.appendChild(inputWrapEl);

  let initialLabelEl = document.createElement("label");
  initialLabelEl.form = "initials";
  initialLabelEl.id = "initials-label";
  initialLabelEl.textContent = "Enter Your Initials:";
  inputWrapEl.appendChild(initialLabelEl);

  let initialTextEl = document.createElement("input");
  initialTextEl.type = "text";
  initialTextEl.id = "initials";
  initialTextEl.name = "initials";
  inputWrapEl.appendChild(initialTextEl);

  let initialBtnEl = document.createElement("buton");
  initialBtnEl.className = "btn";
  initialBtnEl.id = "initials-button";
  initialBtnEl.textContent = "Submit Your Score »";
  initialBtnEl.setAttribute("button-id", "initials-submit");
  initialFormEl.appendChild(initialBtnEl);
};

let submitInitials = function (event) {
  event.preventDefault();
  let initials = document.querySelector("#initials").value;
  let newScore = { initials: initials, score: scoreTimer };

  let savedHighScores = localStorage.getItem("scores");
  if (!savedHighScores) {
    savedHighScores = [{ initials: "", score: "" }];
    savedHighScores = JSON.stringify(savedHighScores);
  }
  savedHighScores = JSON.parse(savedHighScores);
  savedHighScores.push(newScore);
  localStorage.setItem("scores", JSON.stringify(savedHighScores));

  window.location.href = "./scores.html";
};

let clearFeedback = function (event) {
  let targetEl = event.target;
  let answer = targetEl.getAttribute("option-number");
  if (answer) {
    let feedbackMsgEl = document.querySelector("#feedback-message");
    feedbackMsgEl.textContent = "";
  }
};

startBtnEl.addEventListener("click", startQuiz);
questionWrapEl.addEventListener("click", nextQuestion);
questionWrapEl.addEventListener("submit", submitInitials);
questionWrapEl.addEventListener("mouseover", clearFeedback);
