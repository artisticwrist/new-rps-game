const game = () => {
  const header = document.querySelector(".intro-head");
  const options = document.querySelector(".intro-options");
  const nameBox = document.querySelector(".input-name");
  const backButton = document.querySelector(".back");
  const backHsButton = document.querySelector(".back-hs");
  const highscores = document.querySelector(".highscore");
  let playerScore = 0;
  let computerScore = 0;

  //back button on the input name section

  backButton.addEventListener("click", () => {
    header.classList.remove("fadeOut");
    header.classList.add("fadeIn");
    options.classList.remove("fadeOut");
    options.classList.add("fadeIn");
    nameBox.classList.remove("fadeIn");
    nameBox.classList.add("fadeOut");
  });
  //back button on the highscore section not in use yet
  // backHsButton.addEventListener("click", () => {
  //   header.classList.remove("fadeOut");
  //   header.classList.add("fadeIn");
  //   options.classList.remove("fadeOut");
  //   options.classList.add("fadeIn");
  //   nameBox.classList.remove("fadeIn");
  //   nameBox.classList.add("fadeOut");
  //   highscores.classList.remove("fadeIn");
  //   highscores.classList.add("fadeOut");
  // });

  // home page interactions

  const homePage = () => {
    const playButton = document.querySelector(".play-btn");
    const header = document.querySelector(".intro-head");
    const options = document.querySelector(".intro-options");
    const nameBox = document.querySelector(".input-name");
    // const highscores = document.querySelector(".highscore");
    const highscoreButton = document.querySelector(".highscore-btn");
    // play button
    playButton.addEventListener("click", () => {
      header.classList.add("fadeOut");
      options.classList.add("fadeOut");
      header.classList.remove("fadeIn");
      options.classList.remove("fadeIn");
      nameBox.classList.remove("fadeOut");
      nameBox.classList.add("fadeIn");
      return;
    });

    // highscore button not in use yet
    // highscoreButton.addEventListener("click", () => {
    //   header.classList.add("fadeOut");
    //   options.classList.add("fadeOut");
    //   header.classList.remove("fadeIn");
    //   options.classList.remove("fadeIn");
    //   highscores.classList.remove("fadeOut");
    //   highscores.classList.add("fadeIn");
    // });
  };

  //enter button on the input name section
  const enterOption = () => {
    const nameBox = document.querySelector(".input-name");
    const gameSection = document.querySelector(".game-play-container");
    const enterButton = document.querySelector(".enter-btn");
    const scoreBoard = document.querySelector(".score-board");
    const name = document.querySelector(".name");

    //enter button
    enterButton.addEventListener("click", (err) => {
      if (name.value === "" || name.value == null) {
        err.preventDefault();
      } else {
        gameSection.classList.remove("fadeOut");
        gameSection.classList.add("fadeIn");
        nameBox.classList.remove("fadeIn");
        nameBox.classList.add("fadeOut");
        scoreBoard.classList.remove("fadeOut");
        scoreBoard.classList.add("fadeIn");
      }
    });
  };

  //game section
  const gameSectionButtons = () => {
    const pauseButton = document.querySelector(".pause-btn");
    const RestartButton = document.querySelector(".restart-btn");
    const endButton = document.querySelector(".endgame-btn");
    const pauseOverlay = document.querySelector(".overlay");
    const gameSection = document.querySelector(".game-play-container");
    const scoreBoard = document.querySelector(".score-board");
    const header = document.querySelector(".intro-head");
    const headerOptions = document.querySelector(".intro-options");
    const playOverlayButton = document.querySelector(".play");
    //pause game
    pauseButton.addEventListener("click", () => {
      gameSection.classList.remove("fadeIn");
      gameSection.classList.add("fadeOut");
      scoreBoard.classList.remove("fadeIn");
      scoreBoard.classList.add("fadeOut");
      pauseOverlay.classList.remove("fadeOut");
      pauseOverlay.classList.add("fadeIn");
    });
    // overlay pause page
    playOverlayButton.addEventListener("click", () => {
      gameSection.classList.remove("fadeOut");
      gameSection.classList.add("fadeIn");
      scoreBoard.classList.remove("fadeOut");
      scoreBoard.classList.add("fadeIn");
      pauseOverlay.classList.remove("fadeIn");
      pauseOverlay.classList.add("fadeOut");
    });

    RestartButton.addEventListener("click", () => {
      playerScore = 0;
      computerScore = 0;
      gameScore();
    });
    //end game button
    endButton.addEventListener("click", () => {
      gameSection.classList.remove("fadeIn");
      gameSection.classList.add("fadeOut");
      scoreBoard.classList.remove("fadeIn");
      scoreBoard.classList.add("fadeOut");
      header.classList.remove("fadeOut");
      header.classList.add("fadeIn");
      headerOptions.classList.remove("fadeOut");
      headerOptions.classList.add("fadeIn");
      playerScore = 0;
      computerScore = 0;
      gameScore();
    });
  };

  const playGame = function () {
    const options = document.querySelectorAll(".player-options button");
    const playerHands = document.querySelector(".Phands");
    const computerHands = document.querySelector(".Chands");
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const randomGenerator = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[randomGenerator];

        compareHands(this.textContent, computerChoice);

        playerHands.src = `./assets/${this.textContent}.png`;
        computerHands.src = `./assets/${computerChoice}.png`;
      });
    });
  };

  const gameScore = () => {
    const playerOverlay = document.querySelector(".overlay-winner");
    const computerOverlay = document.querySelector(".overlay-computer-winner");
    const gameSection = document.querySelector(".game-play-container");
    const scoreBoard = document.querySelector(".score-board");
    const playerPoint = document.querySelector(".player-score");
    const computerPoint = document.querySelector(".computer-score");
    playerPoint.textContent = playerScore;
    computerPoint.textContent = computerScore;
    if (playerScore == 10) {
      gameSection.classList.remove("fadeIn");
      gameSection.classList.add("fadeOut");
      scoreBoard.classList.remove("fadeIn");
      scoreBoard.classList.add("fadeOut");
      playerOverlay.classList.remove("fadeOut");
      playerOverlay.classList.add("fadeIn");
      playerScore = 0;
      computerScore = 0;
      gameScore();
      return;
    }
    if (computerScore == 10) {
      gameSection.classList.remove("fadeIn");
      gameSection.classList.add("fadeOut");
      scoreBoard.classList.remove("fadeIn");
      scoreBoard.classList.add("fadeOut");
      computerOverlay.classList.remove("fadeOut");
      computerOverlay.classList.add("fadeIn");
      playerScore = 0;
      computerScore = 0;
      gameScore();
      return;
    }
  };

  const compareHands = (playerChoice, computerChoice) => {
    const textDisplay = document.querySelector(".ready");
    if (playerChoice === computerChoice) {
      textDisplay.textContent = "it is a tie";
      return;
    }

    if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        textDisplay.textContent = "computer wins";
        computerScore++;
        gameScore();
        return;
      } else {
        textDisplay.textContent = "player wins";
        playerScore++;
        gameScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        textDisplay.textContent = "computer wins";
        computerScore++;
        gameScore();
        return;
      } else {
        textDisplay.textContent = "player wins";
        playerScore++;
        gameScore();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        textDisplay.textContent = "computer wins";
        computerScore++;
        gameScore();
        return;
      } else {
        textDisplay.textContent = "player wins";
        playerScore++;
        gameScore();
        return;
      }
    }
  };

  const overlayButtons = () => {
    const newGameButton = document.querySelector(".new-game");
    const homeButton = document.querySelector(".home");
    const newGameButtonComp = document.querySelector(".new-game-comp");
    const homeButtonComp = document.querySelector(".home-comp");
    const gameSection = document.querySelector(".game-play-container");
    const scoreBoard = document.querySelector(".score-board");
    const header = document.querySelector(".intro-head");
    const headerOptions = document.querySelector(".intro-options");
    const playerOverlay = document.querySelector(".overlay-winner");
    const computerOverlay = document.querySelector(".overlay-computer-winner");

    newGameButton.addEventListener("click", () => {
      gameSection.classList.add("fadeIn");
      gameSection.classList.remove("fadeOut");
      scoreBoard.classList.add("fadeIn");
      scoreBoard.classList.remove("fadeOut");
      playerOverlay.classList.remove("fadeIn");
      playerOverlay.classList.add("fadeOut");
    });
    newGameButtonComp.addEventListener("click", () => {
      gameSection.classList.add("fadeIn");
      gameSection.classList.remove("fadeOut");
      scoreBoard.classList.add("fadeIn");
      scoreBoard.classList.remove("fadeOut");
      computerOverlay.classList.remove("fadeIn");
      computerOverlay.classList.add("fadeOut");
    });
    homeButton.addEventListener("click", () => {
      header.classList.add("fadeIn");
      header.classList.remove("fadeOut");
      headerOptions.classList.add("fadeIn");
      headerOptions.classList.remove("fadeOut");
      playerOverlay.classList.remove("fadeIn");
      playerOverlay.classList.add("fadeOut");
    });
    homeButtonComp.addEventListener("click", () => {
      header.classList.add("fadeIn");
      header.classList.remove("fadeOut");
      headerOptions.classList.add("fadeIn");
      headerOptions.classList.remove("fadeOut");
      computerOverlay.classList.remove("fadeIn");
      computerOverlay.classList.add("fadeOut");
    });
  };

  homePage();
  enterOption();
  gameSectionButtons();
  playGame();
  compareHands();
  overlayButtons();
};

game();
