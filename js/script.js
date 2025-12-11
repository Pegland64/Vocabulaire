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
    ],
    "fortnite": [
        {
            "img": "./gif_fortnite/best_mate.gif",
            "fr-FR": "Meilleurs amis",
            "en-US": "Best Mates"
        },
        {
            "img": "./gif_fortnite/clap.gif",
            "fr-FR": "Applaudir",
            "en-US": "Clap"
        },
        {
            "img": "./gif_fortnite/cool.gif",
            "fr-FR": "Cool",
            "en-US": "Cool"
        },
        {
            "img": "./gif_fortnite/dab.gif",
            "fr-FR": "Dab",
            "en-US": "Dab"
        },
        {
            "img": "./gif_fortnite/default.gif",
            "fr-FR": "Danse par défaut",
            "en-US": "Default Dance"
        },
        {
            "img": "./gif_fortnite/disco.gif",
            "fr-FR": "Disco",
            "en-US": "Disco"
        },
        {
            "img": "./gif_fortnite/floss.gif",
            "fr-FR": "Floss",
            "en-US": "Floss"
        },
        {
            "img": "./gif_fortnite/fresh.gif",
            "fr-FR": "Fresh",
            "en-US": "Fresh"
        },
        {
            "img": "./gif_fortnite/griddy.gif",
            "fr-FR": "Griddy",
            "en-US": "Griddy"
        },
        {
            "img": "./gif_fortnite/hype.gif",
            "fr-FR": "Hype",
            "en-US": "Hype"
        },
        {
            "img": "./gif_fortnite/orange_justice.gif",
            "fr-FR": "Justice Orange",
            "en-US": "Orange Justice"
        },
        {
            "img": "./gif_fortnite/rock.gif",
            "fr-FR": "Rock",
            "en-US": "Rock"
        },
        {
            "img": "./gif_fortnite/scenario.gif",
            "fr-FR": "Scénario",
            "en-US": "Scenario"
        },
        {
            "img": "./gif_fortnite/Take_the_L.gif",
            "fr-FR": "Prends le L",
            "en-US": "Take the L"
        },
        {
            "img": "./gif_fortnite/zombie.gif",
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

const select_mode = document.createElement("select");

modes.forEach((m) => {
	let option = document.createElement("option");
	option.value = m;
	option.innerHTML = m;
	select_mode.appendChild(option);
});

body.appendChild(select_mode);

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
	const listen = document.createElement("button");
	listen.innerHTML = "listen";
	listen.addEventListener("click", () => {
		prononcerTexte(name, language);
	})
	cards_container.appendChild(listen);

	let selected_cards = [];
	let reponse = Math.floor(Math.random() * 3);

	for(let i = 0; i < 3; i++){
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
		div_card.addEventListener("click", () => {
			if(i === reponse){
				div_card.className += " good-answer";
			}else{
				div_card.className += " bad-answer";
			}
		})

		let img = document.createElement("img");
		img.src = c.img;
		div_card.appendChild(img);

		div_cards.appendChild(div_card);
	}
	cards_container.appendChild(div_cards);

	const next = document.createElement("button");
	next.innerHTML = "next";
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
