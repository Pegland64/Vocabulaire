const body = document.querySelector("body");

function prononcerTexte(texte, langue = 'fr-FR') {

    if ('speechSynthesis' in window) {

        const utterance = new SpeechSynthesisUtterance(texte);


        utterance.lang = langue;

        utterance.volume = 1;
        utterance.rate = 1;
        utterance.pitch = 1;

        window.speechSynthesis.speak(utterance);
    } else {
        console.error('L\'API Web Speech n\'est pas supportée par ce navigateur.');
    }
}

const cards = {
    "animaux": [
        {
            "img": "./image_animaux/vache.png",
            "fr-FR": "Vache",
            "en": "cow",
        },
        {
            "img": "./image_animaux/cheval.png",
            "fr-FR": "Gro chevals qui pu et qui et gro",
            "en": "horse"
        },
        {
            "img": "./image_animaux/canard.png",
            "fr-FR": "Canard",
            "en": "duck"
        },
        {
            "img": "./image_animaux/chat.png",
            "fr-FR": "Chat",
            "en": "cat"
        },
        {
            "img": "./image_animaux/chevre.png",
            "fr-FR": "Chèvre",
            "en": "goat"
        },
        {
            "img": "./image_animaux/chien.png",
            "fr-FR": "Chien",
            "en": "dog"
        },
        {
            "img": "./image_animaux/coq.png",
            "fr-FR": "Coq",
            "en": "rooster"
        },
        {
            "img": "./image_animaux/mouton.png",
            "fr-FR": "Mouton",
            "en": "sheep"
        },
        {
            "img": "./image_animaux/oie.png",
            "fr-FR": "Oie",
            "en": "goose"
        }
    ]
};

let language = "fr-FR";
let theme = "animaux";

let div_cards = document.createElement("div");
div_cards.className = "cards";


cards[theme].forEach((c) => {
	let div_card = document.createElement("div");
	div_card.className = "card";
	div_card.addEventListener("click", () => {
		console.log("DIRE LE NOM DE L'ANIMAL")
		prononcerTexte(c[language], language);
	})

	let name = document.createElement("p");
	name.innerHTML = c[language]
	div_card.appendChild(name)

	let img = document.createElement("img");
	img.src = c.img;
	div_card.appendChild(img);

	div_cards.appendChild(div_card);
});

body.appendChild(div_cards);
