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
	return perPlayerCost * numberOfSelectedPlayer;
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
		playersExpensesElement.innerText = totalCostForPlayers.toFixed(2);
	}

	//console.log(perPlayerCost);
});
