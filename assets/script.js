// Start at question one.
var currentQuestion = 0;

// Establish the quiz countdown timer, which then comes
var scoreTimer = 80;

// Quiz countdown.
var timeInterval = 0;

// Variables that dynamically change the HTML elements as needed.
var headerContainerEl = document.querySelector("#header-container");
var mainEl = document.querySelector("#main");
var questionWrapperEl = document.querySelector("#question-container");

// Create High Scores link in the nav bar.
var highScoreNavEl = document.createElement("a");
highScoreNavEl.href = "./scores.html";
highScoreNavEl.innerHTML = "High Scores";
headerContainerEl.appendChild(highScoreNavEl);

// Create timer countdown in the nav bar.
var countdownEl = document.createElement("p");
countdownEl.textContent = "Countdown: " + scoreTimer + " seconds";
headerContainerEl.appendChild(countdownEl);

// The home page shows the quiz title, and then this section will dynamically render the quiz prompts as they click through. The home page also shows the quiz instructions, which then disappear once they start the quiz. The home page also shows the Start button, which then disappears when they start the quiz.
var titleAndPromptTextEl = document.createElement("h3");
titleAndPromptTextEl.textContent = "Coding Quiz";
questionWrapperEl.appendChild(titleAndPromptTextEl);

var quizInstructionsEl = document.createElement("p");
quizInstructionsEl.innerHTML = "Challenge your coding knowledge with this 8-question quiz. Be careful not to miss a question because that reduces your time. Best of luck!"
quizInstructionsEl.id = "instructions";
questionWrapperEl.appendChild(quizInstructionsEl);

var startButtonContainerEl = document.createElement("div");
startButtonContainerEl.id = "startBtn-wrapper";

//the start button calls initializeQuiz function when clicked, it is removed once the quiz starts
var startButtonEl = document.createElement("button");
startButtonEl.className = "btn";
startButtonEl.id = "startBtn";
startButtonEl.innerHTML = "Start Quiz";
startButtonContainerEl.appendChild(startButtonEl);
questionWrapperEl.appendChild(startButtonContainerEl);