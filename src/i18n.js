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
            en:{
                translation: {
                    //Header
                    navLink :"<0>HOME</0><1>ABOUT</1><2>EXPERIENCES</2><3>CONTACT</3>",
                    //Homepage
                    welcomeText : '<0>Welcome on my portfolio.<br/>It means it’s mine.</0>',
                    checkItOut : "<0>Check it out</0>",
                    informations : "<0>Here are my two latest personnal projects,<br/>You can find as much of tiny projects that took me less than one day as bigger projects than bring my brain to tears.</0>",
                    firstNews: "<0>what a game for nerd people !</0><1><0>Are you sure you know your tech's basics ?</0><1><0>Click here</0></1></1>",
                    secondNews : "<0>Hum is it a good day today ?</0><1>Wanna see if your city will let you deshydrated ?</1><2><0>Go for it</0></2>",
                    //About,
                    birthday: "<0>Birth of the millennial</0><p>The guy from the picture started it's life in the beautiful country of Belgium on 20th march 1997.</p>",
                    student: "<0>Student's life</0><1>He learned and developped its I.T. skills at EPHEC,<br/> in the city of Louvain-La-Neuve. <br/>He found that the thing he loved the most was coding in order to bring his imagination to life.<br/>Beginning with languages such as Javascript to the old man PHP.</1>",
                    atm : "<0>At the moment</0><1>He has learned from the past years to juggle with JS's frameworks such as React and Vue. <br/>He's available on any project that require design, front and back as a Freelancer, from the sketch to the last line of code ! <br/>So he's obviously looking after project to go on !</1><2>Looking to build a new project ?</2> <0>At the moment</0><1>He has learned from the past years to juggle with JS's frameworks such as React and Vue. <br/>He's available on any project that require design, front and back as a Freelancer, from the sketch to the last line of code ! <br/>So he's obviously looking after project to go on !</1><2>Looking to build a new project ?</2><3><0>Contact Me</0></3>",
                    //Experiences
                    title : "<0>Professionnal and Educationnal Experiences</0>",
                    stage:"<0>Bachelor Computer Sciences at Ephec.<br/>From 2017 to 2021</0><1>Stage at IT-School  as fullstack php developper under symfony.<br/>February to may 2020.</1>",
                    wecodx :"<0>Student fullstack developper at Wecodx.<br/>August  2021</0><1>Developping with PHP under symfony environment. <br/>Frontend was held by classic Javascript | Twig.</1>",
                    uliege : "<0>Master artificial intelligence at University of Liège.<br/>September 2021 - February 2022</0><p>Was the wrong way choosen !</p>",
                    titleTwo : "<0>Personnal Projects and Skills</0>",
                    firstDescription: "<0>Skills</0><1>Those are some of the technologies that I use <br/></1>",
                    secondDescription:"<0>Currently learning UX | UI and Web Design</0><1>By doing this portfolio for example <br/>Or those side projects</1>",
                    quizz : "<0>Nerd quizz game</0><1>03/06/2022</1>",
                    weather: "<0>Weather app</0><1>01/06/2022</1>",
                    //Contact
                    text: "<0>Want to ask something ?<br/>Want a new design for your old website ? <br/>Or you just want a new website ? <br/>Need help on your current website ? <br/>Need a custom domain name or hosting your application? <br/>Don't be afraid of asking me !</0>",
                    name: "<0>Name</0>",
                    firstName: "<0>First Name</0>",
                    email: "<0>Email</0>",
                    subject:"<0>Choose your subject</0><1><0>Please choose your Subject</0><1>Design</1><2>Price</2><3>Website</3><4>Domain</4><5>Hosting</5><6>Other</6></1>",
                    question: "<0>Ask your question below</0>"



                },
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
                        //About
                        birthday: "<0>Le commencement</0><p>Ma vie a démarré dans le magnifique pays qu'est la Belgique, le 20 mars 1997.<br/> J'ai grandi dans la province du Brabant Wallon.</p>",
                        student: "<0>Vie estudiantine</0><1>J'ai développé mes compétences en informatique au sein de l'EPHEC,<br/> à Louvain-La-Neuve.<br/> C'est ici que le coup de foudre eu lieu avec la programmation, surtout de pouvoir faire prendre vie à mon imagination. <br/> J'ai tout d'abord commencer par le Javascript en passant ensuite par le bon vieux PHP",
                        atm : "<0>Actuellement</0><1>Ces derniers temps,je me suis formé aux frameworks Javascript tel que React et Vue,<br/> tout en étoffant mes qualités de Designer Web<br/> Je suis disponible pour tout projet nécessitant Design, Frontend ou en Backend, de la première ligne de code à la dernière ! <br/> Je suis donc actuellement à la recherche de projet sur lesquels travailler !</1><2>A la recherche d'un nouveau projet ?</2><3><0>Me Contacter</0></3>",
                        //Experiences
                        title : "<0>Formations | expériences professionnelles </0>",
                        stage:"<0>Bachelier en Technologie de l'Informatique.<br/>De 2017 à 2021</0><1>Stage à IT-School en tant que developpeur fullstack php sous symfony.<br/>De février jusqu'à mai 2020.</1>",
                        wecodx :"<0>Job d'étudiant | Développeur fullstack à WeCodx.<br/>Août à Septembre 2021</0><1>Développement PHP sous symfony. <br/>Le Frontend étant géré par du Javascript classique et Twig.</1>",
                        uliege : "<0>Master en intelligence artificielle  à l'université de Liège.<br/>Septembre 2021 - Février 2022</0><p>Oops,trompé de chemin !</p> ",
                        titleTwo : "<0>Projets personnel et Compétences</0>",
                        firstDescription: "<0>Compétences</0><1>Voici certaines des technologies que j'utilise <br/></1>",
                        secondDescription:"<0>J'apprends actuellement l'UX | UI et le Web Design</0><1>En développant par example ce portfolio <br/>ou encore via ces projets</1>",
                        quizz : "<0>Quizz de bouffeur de clé usb</0><1>03/06/2022</1>",
                        weather: "<0>Application météo</0><1>01/06/2022</1>",
                        //Contact
                        text: "<0>Une question à poser ?<br/>Besoin d'un nouveau design pour votre site ? <br/>Ou simplement besoin d'un nouveau site ? <br/>Besoin d'aide sur votre site actuel ? <br/>Besoin d'un nom de domaine ou d'héberger votre application? <br/>N'hésitez pas à me soliciter !</0>",
                        name: "<0>Nom</0>",
                        firstName: "<0>Prénom</0>",
                        email: "<0>Email</0>",
                        subject:"<0>Choisissez votre sujet</0><1><0>Veuillez choisir un sujet</0><1>Design</1><2>Prix</2><3>Site Web</3><4>Domaine</4><5>Hébergement</5><6>Autre</6></1>",
                        question: "<0>Posez votre question ici</0>"
    
                    }
                },
            }
        }
    })