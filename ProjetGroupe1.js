let aventurier = prompt("introduis le nom de ton aventurier."); //nom de l'aventurier
console.log("bonjour" + " " + aventurier + " " + ",te voici coincé dans notre labyinthe. Le but est très simple.trouve la sortie en moins le plus rapidement possible et rappel toi de celui emprunter précédement. en cas de mort, tu recommenceras au début.")
console.log("bonne chance a toi" + " " + aventurier + " " + "retourne en arrière pour démarrer l'épreuve.");



function Jeu() { //début du jeu

    //question 1
    console.log("te voici au début du parcours, 2 options s'offrent à toi:" + " " + "préfères-tu te munir d'un briquet ou d'une torche ?");
    let reponse = prompt("que choisis tu ?");

    if (reponse == "torche") {
        console.log("tu as eu de la chance, passons a la suite.");
    }
    else if (reponse == "briquet") {
        console.log("tu n'as pas l'air bien futé... a toi de poursuivre l'aventure avec ton briquet.");
    }
    else {
        console.log("tu es mort... ton temps est imparti")
        console.log(Jeu());
    }

    //question 2
    console.log("Cela fait maintenant plusieurs heures que tu tournes en rond,tu commences tout doucement à perdre la tête.Au loin tu aperçois un faiseau de lumière ")
    let reponse1 = prompt("que choisis tu ?" + " " + "revenir sur tes pas ou vers la lumière");

    if ( reponse1 == "vers la lumière"){
        console.log("tu as eu de la chance,tu trouves un camp et tu te reposes avant de repartir. le sommeil ce fait précieux ces temps ci.");
    }
    else if(reponse1 == "revenir sur tes pas"){
        console.log ("les heures passent et il ne faut que quelques heures pour manquer de nourritures et d'eau. tu meurs de faim.")
        console.log(Jeu());
    }

    //question 3
    console.log("tu te sens faible, et tu vois des baies rouges. ");
    let reponse2 = prompt("que choisis tu ?" + " " + "les manger ou les laisser");

    if ( reponse2 == "les laisser") {
        console.log("tu as eu de la chance, les baies sont empoisonnés ");
    }
    else if(reponse2 == "les manger") {
        console.log("tu décides de les mangées et quand tu les avales tu l'imprétion que tous tes intestins se décomposent.Mais se n'est pas qu'une imprétion. il ne faut que 2 pour que tu succombes.");
    }

    //question 4
    console.log(" tu vois un homme au loin bouger bizarrement qui marche, difficle de savoir ce qu'il se trame par ici...");
    let reponse3= prompt ( "que choisis tu ?" + " " + "passer ton chemin ou approcher ?");

    if (reponse3 == "passer ton chemin"){
        console.log("tu es quelqu'un de méfiant, il t'en faut plus pour te laisser distraire.")
    }

    else if (reponse3 == "approcher"){
        console.log("celui s'accroche, désespéré et décide de mettre fin à ses jours en t'emportant avec lui. il ne faut q'un simple coup de couteau pour en finir avec toi...");
        console.log(Jeu());
    }

    //question 5
    console.log(" la nuit tombe dans le labirynthe, tu arrives face à la dernière épreuve. il te faut absolument quelques chose pour t'éclairer, brandi toi de l'objet que tu avait ramassé au début du parcours.")
    let reponse4 = prompt("qu'utilise tu ?");

    if (reponse4 == "torche"){
        console.log("super jeune aventurier il ne faut plus que traverser ce pont pleins de trous et te diriger vesr la sortie.")
    }

    else if ( reponse4 == "briquet"){
        console.log("abruti ! il t'es maintenant impossible de traverser ce fichu pont...");
        console.log("tu es mort");
        console.log(Jeu());
    }


    //résultats
    let résultats = [reponse, reponse1, reponse2, reponse3, reponse4];
    console.log("Bravo tu as réussi !")
    console.log("Voici tes réponses !");
    console.log(résultats);
    // intégré une question avec un tableau ou qui affiche les résultats.
    // j'ai veillé a tout bien indenté pour vous et a le tester en console.

    //Noé vérifie peut etre a remplacé les else if par else lorsque réinitialise mais je pense que c'est bon.


}
