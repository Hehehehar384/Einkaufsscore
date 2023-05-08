// Define the updateScore function
function updateScore(scoreId) {
  var scoreElement = document.getElementById(scoreId);
  var currentScore = parseInt(scoreElement.innerHTML);
  scoreElement.innerHTML = currentScore + 1;
}

// Get the buttons
var jonasButton = document.getElementById("jonas-add");
var peterButton = document.getElementById("peter-add");
var mamaButton = document.getElementById("mama-add");
var papaButton = document.getElementById("papa-add");

// Add click event listeners to the buttons
jonasButton.onclick = function() {
  updateScore("Jonas-score");
}

peterButton.onclick = function() {
  updateScore("Peter-score");
}

mamaButton.onclick = function() {
  updateScore("Mama-score");
}

papaButton.onclick = function() {
  updateScore("Papa-score");
}
