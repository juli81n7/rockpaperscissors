const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

const paper = document.querySelector("#buttons .paper");
const rock = document.querySelector("#buttons .rock");
const scissors = document.querySelector("#buttons .scissors");

const winText = document.getElementById("win");
const loseText = document.getElementById("lose");
const drawText = document.getElementById("draw");

let classes = ["paper", "rock", "scissors"];

rock.addEventListener("click", () => {
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");

  player1.classList.add("shake");
  player2.classList.add("shake");

  const randomIndex = Math.floor(Math.random() * classes.length);
  const randomClass = classes[randomIndex];

  addEventListener("animationend", (shake) => {
    win.classList.add("hidden");
    lose.classList.add("hidden");
    draw.classList.add("hidden");

    player2.classList.remove("paper");
    player2.classList.remove("scissors");
    player2.classList.remove("rock");
    player1.classList.remove("paper");
    player1.classList.remove("scissors");
    player1.classList.remove("rock");
    player1.classList.remove("shake");
    player1.classList.add("rock");
    player2.classList.remove("shake");
    player2.classList.add(randomClass);

    if (player2.classList.contains("rock")) {
      draw.classList.remove("hidden");
    }
    if (player2.classList.contains("paper")) {
      lose.classList.remove("hidden");
    }
    if (player2.classList.contains("scissors")) {
      win.classList.remove("hidden");
    }
  });
});

paper.addEventListener("click", () => {
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");
  player1.classList.add("shake");
  player2.classList.add("shake");
  const randomIndex = Math.floor(Math.random() * classes.length);
  const randomClass = classes[randomIndex];

  addEventListener("animationend", (shake) => {
    win.classList.add("hidden");
    lose.classList.add("hidden");
    draw.classList.add("hidden");

    player2.classList.remove("paper");
    player2.classList.remove("scissors");
    player2.classList.remove("rock");
    player1.classList.remove("paper");
    player1.classList.remove("scissors");
    player1.classList.remove("rock");
    player1.classList.remove("shake");
    player1.classList.add("paper");
    player2.classList.remove("shake");
    player2.classList.add(randomClass);

    if (player2.classList.contains("rock")) {
      win.classList.remove("hidden");
    }
    if (player2.classList.contains("paper")) {
      draw.classList.remove("hidden");
    }
    if (player2.classList.contains("scissors")) {
      lose.classList.remove("hidden");
    }
  });
});

scissors.addEventListener("click", () => {
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");

  player1.classList.add("shake");
  player2.classList.add("shake");
  const randomIndex = Math.floor(Math.random() * classes.length);
  const randomClass = classes[randomIndex];

  addEventListener("animationend", (shake) => {
    win.classList.add("hidden");
    lose.classList.add("hidden");
    draw.classList.add("hidden");

    player2.classList.remove("paper");
    player2.classList.remove("scissors");
    player2.classList.remove("rock");
    player1.classList.remove("paper");
    player1.classList.remove("scissors");
    player1.classList.remove("rock");

    player1.classList.remove("shake");
    player1.classList.add("scissors");
    player2.classList.remove("shake");
    player2.classList.add(randomClass);

    if (player2.classList.contains("rock")) {
      lose.classList.remove("hidden");
    }
    if (player2.classList.contains("paper")) {
      win.classList.remove("hidden");
    }
    if (player2.classList.contains("scissors")) {
      draw.classList.remove("hidden");
    }
  });
});
