import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng : 'en',
        resources:{
            fr:{
                translation: {
                    //Header
                    navLink :"<0>ACCUEIL</0><1>A PROPOS</1><2>EXPERIENCES</2><3>CONTACT</3>",
                    // Homepage
                    welcomeText : "<0>Bienvenue sur mon portfolio !<br/> Ne t'y perds pas !</0>",
                    checkItOut : "<0>Regarde-moi ça</0>",
                    informations : "<0>Voici mes deux derniers projets en date,<br/>Tu peux y trouver de tout petits projets qui m'ont pris moins d'un jour à faire comme d'autres qui m'ont presque détruit le cerveau.</0>",
                    firstNews : "<0>Un bon jeu de mangeurs de carte graphique !</0><1><0>Connais-tu tes bases en informatique ?</0><1><0>Viens là</0></1></1>",
                    secondNews : "<0>Va-t-il faire beau aujourd'hui ?</0><1>Vas-tu te prendre une insolation ?</1><2><0>Vérifie ici</0></2>",
                }
            },
            en:{
                translation: {
                    //Header
                    navLink :"<0>HOME</0><1>ABOUT</1><2>EXPERIENCES</2><3>CONTACT</3>",
                    //Homepage
                    welcomeText : '<0>Welcome on my portfolio.<br/>It means it’s mine.</0>',
                    checkItOut : "<0>Check it out</0>",
                    informations : "<0>Here are my two latest personnal projects,<br/>You can find as much of tiny projects that took me less than one day as bigger projects than bring my brain to tears.</0>",
                    firstNews: "<0>what a game for nerd people !</0><1><0>Are you sure you know your tech's basics ?</0><1><0>Click here</0></1></1>",
                    secondNews : "<0>Hum is it a good day today ?</0><1>Wanna see if your city will let you deshydrated ?</1><2><0>Go for it</0></2>"
                }
            }
        }
    })