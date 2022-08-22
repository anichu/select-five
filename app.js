const playersListElement = document.getElementById("players-list");
const cardsElement = document.getElementById("cards");

cardsElement.addEventListener("click", (event) => {
	let selectedElement = event.target;
	let selectedText = event.target.innerText;
	let listElementsLength = playersListElement.children.length;
	if (selectedText === "Select") {
		if (listElementsLength < 5) {
			let playerName = selectedElement.parentNode.children[0].innerText;
			let createListElement = document.createElement("li");
			createListElement.classList.add("py-2");
			createListElement.innerText = playerName;
			playersListElement.appendChild(createListElement);
			selectedElement.disabled = true;
		} else {
			alert("You have already chosen five players");
		}
	}
});

// console.log(playersList.children.length);
