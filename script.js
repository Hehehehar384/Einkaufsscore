let scores;

function loadScores() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/scores", false);
  xhr.send();
  scores = JSON.parse(xhr.responseText);
}

function saveScores() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/scores", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.send(JSON.stringify(scores));
}

function updateScore(player, amount) {
  scores[player] += amount;
  const scoreEl = document.getElementById(player);
  scoreEl.textContent = scores[player];
}

window.onload = function () {
  loadScores();
  const jonasPlus = document.getElementById("jonas-plus");
  const jonasMinus = document.getElementById("jonas-minus");
  const peterPlus = document.getElementById("peter-plus");
  const peterMinus = document.getElementById("peter-minus");
  const mamaPlus = document.getElementById("mama-plus");
  const mamaMinus = document.getElementById("mama-minus");
  const papaPlus = document.getElementById("papa-plus");
  const papaMinus = document.getElementById("papa-minus");

  jonasPlus.addEventListener("click", function () {
    updateScore("jonas", 1);
    saveScores();
  });

  jonasMinus.addEventListener("click", function () {
    updateScore("jonas", -1);
    saveScores();
  });

  peterPlus.addEventListener("click", function () {
    updateScore("peter", 1);
    saveScores();
  });

  peterMinus.addEventListener("click", function () {
    updateScore("peter", -1);
    saveScores();
  });

  mamaPlus.addEventListener("click", function () {
    updateScore("mama", 1);
    saveScores();
  });

  mamaMinus.addEventListener("click", function () {
    updateScore("mama", -1);
    saveScores();
  });

  papaPlus.addEventListener("click", function () {
    updateScore("papa", 1);
    saveScores();
  });

  papaMinus.addEventListener("click", function () {
    updateScore("papa", -1);
    saveScores();
  });
};
