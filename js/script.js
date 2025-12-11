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
            "en-US": "cow",
        },
        {
            "img": "./image_animaux/cheval.png",
            "fr-FR": "Gro chevals qui pu et qui et gro",
            "en-US": "horse"
        },
        {
            "img": "./image_animaux/canard.png",
            "fr-FR": "Canard",
            "en-US": "duck"
        },
        {
            "img": "./image_animaux/chat.png",
            "fr-FR": "Chat",
            "en-US": "cat"
        },
        {
            "img": "./image_animaux/chevre.png",
            "fr-FR": "Chèvre",
            "en-US": "goat"
        },
        {
            "img": "./image_animaux/chien.png",
            "fr-FR": "Chien",
            "en-US": "dog"
        },
        {
            "img": "./image_animaux/coq.png",
            "fr-FR": "Coq",
            "en-US": "rooster"
        },
        {
            "img": "./image_animaux/mouton.png",
            "fr-FR": "Mouton",
            "en-US": "sheep"
        },
        {
            "img": "./image_animaux/oie.png",
            "fr-FR": "Oie",
            "en-US": "goose"
        }
    ]
};

const languages = ["fr-FR", "en-US"];
let language = "fr-FR";
let theme = "animaux";

const select_lang = document.createElement("select");

languages.forEach((l) => {
	let option = document.createElement("option");
	option.value = l;
	option.innerHTML = l;
	select_lang.appendChild(option);
});

body.appendChild(select_lang);

select_lang.addEventListener("change", (e) => {
	language = e.target.value;
	reload()
})

const select_theme = document.createElement("select");

Object.keys(cards).forEach((l) => {
	let option = document.createElement("option");
	option.value = l;
	option.innerHTML = l;
	select_theme.appendChild(option);
});

body.appendChild(select_theme);

select_theme.addEventListener("change", (e) => {
	theme = e.target.value;
	reload()
})

let div_cards = document.createElement("div");
div_cards.className = "cards";

function load(){
	cards[theme].forEach((c) => {
		let div_card = document.createElement("div");
		div_card.className = "card";
		div_card.addEventListener("click", () => {
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
}

function reload(){
	body.removeChild(div_cards);
	div_cards = document.createElement("div");
    div_cards.className = "cards";
	load();
}

load()
