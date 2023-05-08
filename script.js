// Initialize scores
let scores = {
  Jonas: 0,
  Peter: 0,
  Mama: 0,
  Papa: 0,
};

// Update the score of a player
function updateScore(playerName, score) {
  scores[playerName] += score;
  document.getElementById(`${playerName}-score`).innerHTML = scores[playerName];
}

// Add click event listeners to the buttons
document.getElementById("jonas-add").addEventListener("click", function() {
  updateScore("Jonas", 1);
});

document.getElementById("peter-add").addEventListener("click", function() {
  updateScore("Peter", 1);
});

document.getElementById("mama-add").addEventListener("click", function() {
  updateScore("Mama", 1);
});

document.getElementById("papa-add").addEventListener("click", function() {
  updateScore("Papa", 1);
});
