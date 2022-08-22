const playersListElement = document.getElementById("players-list");
const playerInputElement = document.getElementById("player-input-element");
const coachInputElement = document.getElementById("coach-input-element");
const managerInputElement = document.getElementById("manager-input-element");
const calculatePlayerCostBtn = document.getElementById(
	"calculate-player-cost-btn"
);
const calculateTotalCostBtn = document.getElementById(
	"calculate-total-cost-btn"
);
const playersExpensesElement = document.getElementById("players-expenses");
const cardsElement = document.getElementById("cards");
const totalCostElement = document.getElementById("total-cost-element");

function addPlayersToList(selectedElement) {
	let playerName = selectedElement.parentNode.children[0].innerText;
	let createListElement = document.createElement("li");
	createListElement.classList.add("py-2");
	createListElement.innerText = playerName;
	playersListElement.appendChild(createListElement);
	selectedElement.disabled = true;
}

cardsElement.addEventListener("click", (event) => {
	let selectedElement = event.target;
	let selectedText = event.target.innerText;
	let listElementsLength = playersListElement.children.length;
	if (selectedText === "Select") {
		if (listElementsLength < 5) {
			addPlayersToList(selectedElement);
		} else {
			alert("You have already chosen five players");
		}
	}
});

function calculateTotalCostForPlayers(perPlayerCost, numberOfSelectedPlayer) {
	return parseInt(perPlayerCost) * parseInt(numberOfSelectedPlayer);
}
calculatePlayerCostBtn.addEventListener("click", function () {
	let perPlayerCost = playerInputElement.value;
	let numberOfSelectedPlayer = playersListElement.children.length;

	if (perPlayerCost === "") {
		alert("Please,Enter the per cost of a player");
		playerInputElement.value = "";
	} else if (numberOfSelectedPlayer === 0) {
		alert("Please,Select the player");
	} else {
		let totalCostForPlayers = calculateTotalCostForPlayers(
			perPlayerCost,
			numberOfSelectedPlayer
		);
		playersExpensesElement.innerText = totalCostForPlayers;
	}

	//console.log(perPlayerCost);
});

calculateTotalCostBtn.addEventListener("click", function () {
	let costForManager = parseInt(managerInputElement.value);
	let costForCoach = parseInt(coachInputElement.value);
	let costForPlayers = parseInt(playersExpensesElement.innerText);
	console.log(costForPlayers);
	if (isNaN(costForCoach) || isNaN(costForManager)) {
		alert("Please,fill the empty input element");
	} else if (isNaN(costForPlayers)) {
		alert("Please,Calculate the expenses for players");
	}
	let totalCost = costForCoach + costForManager + costForPlayers;
	if (!isNaN(totalCost)) {
		totalCostElement.innerText = totalCost;
	}
});
