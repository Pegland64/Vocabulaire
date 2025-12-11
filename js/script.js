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
            "img": "./images/animaux/vache.png",
            "fr-FR": "Vache",
            "en-US": "cow"
        },
        {
            "img": "./images/animaux/cheval.png",
            "fr-FR": "Gro chevals qui pu et qui et gro",
            "en-US": "horse"
        },
        {
            "img": "./images/animaux/canard.png",
            "fr-FR": "Canard",
            "en-US": "duck"
        },
        {
            "img": "./images/animaux/chat.png",
            "fr-FR": "Chat",
            "en-US": "cat"
        },
        {
            "img": "./images/animaux/chevre.png",
            "fr-FR": "Chèvre",
            "en-US": "goat"
        },
        {
            "img": "./images/animaux/chien.png",
            "fr-FR": "Chien",
            "en-US": "dog"
        },
        {
            "img": "./images/animaux/coq.png",
            "fr-FR": "Coq",
            "en-US": "rooster"
        },
        {
            "img": "./images/animaux/mouton.png",
            "fr-FR": "Mouton",
            "en-US": "sheep"
        },
        {
            "img": "./images/animaux/oie.png",
            "fr-FR": "Oie",
            "en-US": "goose"
        }
    ],
    "fortnite": [
        {
            "img": "./images/fortnite/best_mate.gif",
            "fr-FR": "Meilleurs amis",
            "en-US": "Best Mates"
        },
        {
            "img": "./images/fortnite/clap.gif",
            "fr-FR": "Applaudir",
            "en-US": "Clap"
        },
        {
            "img": "./images/fortnite/cool.gif",
            "fr-FR": "Cool",
            "en-US": "Cool"
        },
        {
            "img": "./images/fortnite/dab.gif",
            "fr-FR": "Dab",
            "en-US": "Dab"
        },
        {
            "img": "./images/fortnite/default.gif",
            "fr-FR": "Danse par défaut",
            "en-US": "Default Dance"
        },
        {
            "img": "./images/fortnite/disco.gif",
            "fr-FR": "Disco",
            "en-US": "Disco"
        },
        {
            "img": "./images/fortnite/floss.gif",
            "fr-FR": "Floss",
            "en-US": "Floss"
        },
        {
            "img": "./images/fortnite/fresh.gif",
            "fr-FR": "Fresh",
            "en-US": "Fresh"
        },
        {
            "img": "./images/fortnite/griddy.gif",
            "fr-FR": "Griddy",
            "en-US": "Griddy"
        },
        {
            "img": "./images/fortnite/hype.gif",
            "fr-FR": "Hype",
            "en-US": "Hype"
        },
        {
            "img": "./images/fortnite/orange_justice.gif",
            "fr-FR": "Justice Orange",
            "en-US": "Orange Justice"
        },
        {
            "img": "./images/fortnite/rock.gif",
            "fr-FR": "Rock",
            "en-US": "Rock"
        },
        {
            "img": "./images/fortnite/scenario.gif",
            "fr-FR": "Scénario",
            "en-US": "Scenario"
        },
        {
            "img": "./images/fortnite/Take_the_L.gif",
            "fr-FR": "Prends le L",
            "en-US": "Take the L"
        },
        {
            "img": "./images/fortnite/zombie.gif",
            "fr-FR": "Zombie",
            "en-US": "Zombie"
        }
    ]
};

const languages = ["fr-FR", "en-US"];
let language = "fr-FR";
let theme = "animaux";
const modes = ["apprentissage", "jeu"]
let mode = "apprentissage"
let difficulty = 2;

// Container pour le titre et le logo
const titleContainer = document.createElement("div");
titleContainer.className = "title-container";

const logo = document.createElement("img");
logo.src = "./images_marque/triolingo.png";
logo.className = "logo";
titleContainer.appendChild(logo);

const title = document.createElement("h1");
title.textContent = "Triolingo";
titleContainer.appendChild(title);

body.appendChild(titleContainer);

const selectorsContainer = document.createElement("div");
selectorsContainer.className = "selectors-container";

const select_lang = document.createElement("select");

languages.forEach((l) => {
	let option = document.createElement("option");
	option.value = l;
	option.innerHTML = l;
	select_lang.appendChild(option);
});

selectorsContainer.appendChild(select_lang);

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

selectorsContainer.appendChild(select_theme);

select_theme.addEventListener("change", (e) => {
	theme = e.target.value;
	reload()
})

const select_mode = document.createElement("select");

modes.forEach((m) => {
	let option = document.createElement("option");
	option.value = m;
	option.innerHTML = m;
	select_mode.appendChild(option);
});

selectorsContainer.appendChild(select_mode);
body.appendChild(selectorsContainer);

select_mode.addEventListener("change", (e) => {
	mode = e.target.value;
	reload()
})

let cards_container = document.createElement("div");
cards_container.className = "cards_container";
body.appendChild(cards_container);

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
	cards_container.appendChild(div_cards);
}

function loadGame(){
	let name;

	// Container pour la difficulté
	const diffContainer = document.createElement("div");
	diffContainer.style.display = "flex";
	diffContainer.style.alignItems = "center";
	diffContainer.style.gap = "10px";
	diffContainer.style.marginBottom = "20px";

	const diffLabel = document.createElement("label");
	diffLabel.style.fontSize = "18px";
	diffLabel.style.fontWeight = "bold";
	diffLabel.style.color = "#2e7d32";
	diffContainer.appendChild(diffLabel);

	let diff = document.createElement("select");
	for(let i = 0; i < cards[theme].length; i++){
		let option = document.createElement("option");
		option.value = i;
		option.innerHTML = i + 1;
		diff.appendChild(option);
	}
	if(difficulty > cards[theme].length){
		difficulty = cards[theme].length - 1;
	}
	diff.value = difficulty;
	diffContainer.appendChild(diff);
	cards_container.appendChild(diffContainer);

	diff.addEventListener("change", (e) => {
		difficulty = e.target.value;
		reload();
	})

	let hasAnswered = false;
	const listen = document.createElement("button");
	listen.innerHTML = language === "fr-FR" ? "Écouter" : "Listen";
	listen.addEventListener("click", () => {
		prononcerTexte(name, language);
		console.log(name)
	})
	cards_container.appendChild(listen);

	let selected_cards = [];
    let reponse = Math.floor(Math.random() * difficulty);
	let allCards = [];

	for(let i = 0; i <= difficulty; i++){
		let cardId = Math.floor(Math.random() * (cards[theme].length));
		while(selected_cards.includes(cardId)){
			cardId = Math.floor(Math.random() * (cards[theme].length));
		}
		selected_cards[i] = cardId;
		let c = cards[theme][cardId];
		if(i === reponse){
			name = c[language]
		}

		let div_card = document.createElement("div");
		div_card.className = "card";
		allCards.push({element: div_card, isCorrect: i === reponse});

		div_card.addEventListener("click", () => {
			if(hasAnswered) return;

			if(i === reponse){
				hasAnswered = true;
				div_card.className += " good-answer";
				const bonneReponse = language === "fr-FR" ? "Bonne réponse" : "Correct answer";
				prononcerTexte(bonneReponse, language);
			}else{
				div_card.className += " bad-answer";
				const mauvaiseReponse = language === "fr-FR" ? "Mauvaise réponse" : "Wrong answer";
				prononcerTexte(mauvaiseReponse, language);
				// Retirer la classe bad-answer après l'animation
				setTimeout(() => {
					div_card.className = "card";
				}, 500);
			}
		})

		let img = document.createElement("img");
		img.src = c.img;
		div_card.appendChild(img);

		div_cards.appendChild(div_card);
	}
	cards_container.appendChild(div_cards);

	const next = document.createElement("button");
	next.innerHTML = language === "fr-FR" ? "Suivant" : "Next";
	next.addEventListener("click", () => {
		reload()
	})
	cards_container.appendChild(next);
}

function reload(){
	cards_container.innerHTML = '';
	div_cards = document.createElement("div");
    div_cards.className = "cards";
	if(mode === "apprentissage"){
		load();
	}else{
		loadGame();
	}
}

load()
