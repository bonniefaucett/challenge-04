// Start at question one.
var currentQuestion = 0;

// Establish the quiz countdown timer, which then comes
var scoreTimer =90;

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

var startButtonEl = document.createElement("button");
startButtonEl.className = "btn";
startButtonEl.id = "startBtn";
startButtonEl.innerHTML = "Start Quiz >";
startButtonContainerEl.appendChild(startButtonEl);
questionWrapperEl.appendChild(startButtonContainerEl);

// The quiz prompts are stored in an array.
var questionArray = [
    {
        text: "A for loop repeats until a specified condition evaluates to _______.",
        option1: "true", // Correct answer
        option2: "false",
        option3: "truthy",
        option4: "falsy",
        answer: "1"
    },
    {
        text: "JavaScript's String type is used to represent _______.",
        option1: "an expression",
        option2: "textual data", // Correct answer
        option3: "an object",
        option4: "an array",
        answer: "2"
    },
    {
        text: "When should you include a README file in your repository?",
        option1: "when you feel like it",
        option2: "when your boss asks you to",
        option3: "never",
        option4: "always", // Correct answer
        answer: "4"
    },
    {
        text: "What does CSS stand for?",
        option1: "Cascading Style Sheets", // Correct answer
        option2: "Certified Security Solutions",
        option3: "Communications Support System",
        option4: "Contact Start Stop",
        answer: "1"
    },
    {
        text: "Loops offer a quick and easy way to do something _______.",
        option1: "at the top of every hour",
        option2: "every minute",
        option3: "repeatedly", // Correct answer
        option4: "when I want it to",
        answer: "3"
    },
    {
        text: "Which of the following is not a primitive data type in JavaScript?",
        option1: "object", // Correct answer
        option2: "string",
        option3: "symbol",
        option4: "boolean",
        answer: "1"
    },
    {
        text: "NaN stands for _______.",
        option1: "not a chance",
        option2: "never in a nanosecond",
        option3: "not at noon",
        option4: "not a number", // Correct answer
        answer: "4"
    },
    {
        text: "What is GitHub?",
        option1: "a social media site",
        option2: "a code hosting platform for version control and collaboration", // Correct answer
        option3: "a streaming service",
        option4: "a ghost town",
        answer: "2"
    },
    {
        text: "Which of the following cannot be targeted by JavaScript?",
        option1: "the render tree",
        option2: "the DevTools element inspector",
        option3: "CSS pseudo-elements", // Correct answer
        option4: "your hard drive",
        answer: "3"
    },
];