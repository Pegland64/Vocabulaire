const body = document.querySelector("body");

const cards = [
		{
			"fr": "Vache",
			"en": "cow"
		},

		{
			"fr": "Gro chevals qui et qui et gro",
			"en": "horse"
		}
];

let language = "fr";

let div_cards = document.createElement("div");
div_cards.className = "cards";

cards.forEach((c) => {
	let div_card = document.createElement("div");
	div_card.className = "card";

	let name = document.createElement("p");
	name.innerHTML = c[language]
	div_card.appendChild(name)

	div_cards.appendChild(div_card);
});

body.appendChild(div_cards);
