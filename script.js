// Initialize the scores
let scores = [0, 0, 0, 0];

// Update the scores in the HTML table
function updateScores() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById("score" + i).innerHTML = scores[i - 1];
    }
}

// Add a point to the score of the given player
function addScore(player) {
    scores[player - 1]++;
    updateScores();
}

// Subtract a point from the score of the given player
function subScore(player) {
    scores[player - 1]--;
    updateScores();
}

// Send the scores to the server to be saved
function saveScores() {
    fetch('/saveScores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ scores })
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });
}

// Load the saved scores from the server
function loadScores() {
    fetch('/loadScores')
    .then(response => {
        return response.json();
    })
    .then(data => {
        scores = data.scores;
        updateScores();
    })
    .catch(error => {
        console.error(error);
    });
}

// Load the saved scores when the page is loaded
window.onload = function() {
    loadScores();
}

// Save the scores when the page is unloaded
window.onbeforeunload = function() {
    saveScores();
}


