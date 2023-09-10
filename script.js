const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const allGameIcons = document.querySelectorAll(".far");
const resultText = document.getElementById("resultText");
const choices = {
	rock: { name: "Rock", defeats: ["scissors", "lizard"] },
	paper: { name: "Paper", defeats: ["rock", "spock"] },
	scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
	lizard: { name: "Lizard", defeats: ["paper", "spock"] },
	spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let playerScoreNo = 0;
let computerScoreNo = 0;
let computerChoice = "";

// reset all selected icons
function resetSlected() {
	allGameIcons.forEach((e) => {
		e.classList.remove("selected");
	});
}

// add selected stylign &  computer choice
function displayComputerChoice(computerChoice) {
	switch (computerChoice) {
		case "rock":
			computerRock.classList.add("selected");
			computerChoiceEl.textContent = " --- Rock";
			break;
		case "paper":
			computerPaper.classList.add("selected");
			computerChoiceEl.textContent = " --- Paper";
			break;
		case "scissors":
			computerScissors.classList.add("selected");
			computerChoiceEl.textContent = " --- Scissors";
			break;
		case "lizard":
			computerLizard.classList.add("selected");
			computerChoiceEl.textContent = " --- Lizard";
			break;
		case "spock":
			computerSpock.classList.add("selected");
			computerChoiceEl.textContent = " --- Spock";
			break;
		default:
			break;
	}
}

// Random computer choice
function computerRandomChoice() {
	const computerChoiceNo = Math.floor(Math.random() * 5 + 1);

	switch (computerChoiceNo) {
		case 1:
			computerChoice = "rock";
			break;
		case 2:
			computerChoice = "paper";
			break;
		case 3:
			computerChoice = "scissors";
			break;
		case 4:
			computerChoice = "lizard";
			break;
		case 5:
			computerChoice = "spock";
			break;

		default:
			break;
	}
}

// update scroe
function updateScroe(playerChoice) {
	console.log(playerChoice, computerChoice);

	if (playerChoice === computerChoice) {
		resultText.textContent = "Its a Tie";
	} else {
		const choice = choices[playerChoice];
		console.log(choice.defeats.indexOf(computerChoice));

		if (choice.defeats.indexOf(computerChoice) > -1) {
			resultText.textContent = "YOU WON!";
			playerScoreNo++;
			playerScoreEl.textContent = playerScoreNo;
		} else {
			resultText.textContent = "YOU lost!";
			computerScoreNo++;
			computerScoreEl.textContent = computerScoreNo;
		}
	}
}

// call function to process turns
function checkResult(playerChoice) {
	resetSlected();
	computerRandomChoice();
	displayComputerChoice(computerChoice);
	updateScroe(playerChoice);
}

// Passing player slection vlaue
function select(playerChoice) {
	checkResult(playerChoice);
	// add slecected styling
	switch (playerChoice) {
		case "rock":
			playerRock.classList.add("selected");
			playerChoiceEl.textContent = " --- Rock";
			break;
		case "paper":
			playerPaper.classList.add("selected");
			playerChoiceEl.textContent = " --- Paper";
			break;
		case "scissors":
			playerScissors.classList.add("selected");
			playerChoiceEl.textContent = " --- Scissors";
			break;
		case "lizard":
			playerLizard.classList.add("selected");
			playerChoiceEl.textContent = " --- Lizard";
			break;
		case "spock":
			playerSpock.classList.add("selected");
			playerChoiceEl.textContent = " --- Spock";
			break;
		default:
			break;
	}
}
