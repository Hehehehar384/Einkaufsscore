let scores = { "Jonas": 0, "Peter": 0, "Mama": 0, "Papa": 0 };

// Load the scores from local storage if they exist
if (localStorage.getItem("scores")) {
  scores = JSON.parse(localStorage.getItem("scores"));
  updateScoreboard();
}

// Update the score of a player
function updateScore(player, amount) {
  scores[player] += amount;
  updateScoreboard();
  saveScores();
}

// Update the scoreboard with the current scores
function updateScoreboard() {
  let scoreboard = document.getElementById("scoreboard");
  let rows = scoreboard.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    let player = rows[i].getElementsByTagName("td")[0].textContent;
    let score = scores[player];
    rows[i].getElementsByTagName("td")[1].textContent = score;
  }
}

// Save the scores to local storage
function saveScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

// Add event listeners to the buttons
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let player = this.parentNode.getElementsByTagName("td")[0].textContent;
    let amount = parseInt(this.getAttribute("data-value"));
    updateScore(player, amount);
  });
}

// Add event listeners to the minus buttons
let minusButtons = document.getElementsByClassName("minus");
for (let i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener("click", function() {
    let player = this.parentNode.getElementsByTagName("td")[0].textContent;
    let amount = parseInt(this.getAttribute("data-value"));
    updateScore(player, amount);
  });
}

