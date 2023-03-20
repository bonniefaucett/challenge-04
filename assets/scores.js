let scoreWrapEl = document.querySelector("#score-wrap");
let btnWrapEl = document.querySelector("#button-wrap");

let loadScores = function () {
  let savedHighScores = localStorage.getItem("scores");

  if (!savedHighScores) {
    console.log("No Scores Yet. Let's Play! »");
    return false;
  }

  savedHighScores = JSON.parse(savedHighScores);

  savedHighScores.sort(function (a, b) {
    return a.score - b.score;
    // return "Player " + a.score + " earned a high score of " + b.score;
  });

  let scoreListOl = document.createElement("ol");
  scoreListOl.id = "score-ol";
  scoreWrapEl.appendChild(scoreListOl);

  for (let i = savedHighScores.length - 1; i > 0; i--) {
    let scoreListItem = document.createElement("li");
    scoreListItem.className = "score-li";
    console.log("attempting to display array index " + savedHighScores[i]);
    scoreListItem.innerHTML =
      savedHighScores[i].initials + " earned a high score of " + savedHighScores[i].score;
    scoreListOl.appendChild(scoreListItem);
  }

  return true;
};

let scoresLoaded = loadScores();
if (scoresLoaded === false) {
  let emptyScoresEl = document.createElement("h3");
  emptyScoresEl.id = "empty-score-msg";
  emptyScoresEl.textContent = "No Scores Yet. Let's Play! »";
  scoreWrapEl.appendChild(emptyScoresEl);
}

let returnBtnEl = document.createElement("button");
returnBtnEl.id = "return-button";
returnBtnEl.className = "btn";
returnBtnEl.textContent = "Complete Quiz Again To Log Another Score »";
btnWrapEl.appendChild(returnBtnEl);

let clearBtnEl = document.createElement("button");
clearBtnEl.id = "clear-scores";
clearBtnEl.className = "btn";
clearBtnEl.textContent = "Clear Scores and Start Quiz Over »";
btnWrapEl.appendChild(clearBtnEl);

let goBack = function () {
  window.location.href = "./index.html";
};

let clearScores = function () {
  localStorage.clear();
  window.location.href = "./index.html";
};

returnBtnEl.addEventListener("click", goBack);
clearBtnEl.addEventListener("click", clearScores);