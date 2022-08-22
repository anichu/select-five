const playersListElement = document.getElementById("players-list");
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

// console.log(playersList.children.length);
