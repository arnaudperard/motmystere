let randomWord = ["pomme", "voiture", "reste", "football", "demain"]; 

// Annonce le nb de mots disponibles dans la console

console.log("> "+randomWord.length+" mots disponibles.");

// choisi un mot au hazard et il prend chacune lettre du mot choisi

var word = randomWord[Math.floor(Math.random() * randomWord.length)];
console.log(word);
console.log(word.length);
console.log(word[0]);
console.log(word[1]);
console.log(word[2]);
console.log(word[3]);
console.log(word[4]);
console.log(word[5]);
console.log(word[6]);
console.log(word[7]);




// Recherches ciblées dans le DOM

var choixuser = document.getElementById("prompt");
const send = document.getElementById("send");

// fonction pour afficher les tirets à la place des lettre

function displayemptyword() {
    for (var i = 0; i < word.length; i++) {
        // crée un nouvel élément div    
        var newDiv = document.createElement("span");
         newDiv.setAttribute('id', `letter${ i }`)
        // et lui donne un peu de contenu     
        var newContent = document.createTextNode("_ ");
        // ajoute le nœud texte au nouveau div créé    
        newDiv.appendChild(newContent);
        // ajoute le nouvel élément créé et son contenu dans le DOM     
        var currentDiv = document.getElementById('');
         document.body.insertBefore(newDiv, currentDiv);
    }
    }

// écoute est valide le click
    send.addEventListener("click", clickVerif);
    function clickVerif () {
        for (var i = 0; i < word.length; i++) {
            if (word[i]== btnchoixuser ) {
                newDiv.innerHTML = btnchoixuser.value;

            }
        }
    }


    displayemptyword()
    var NbEssais = 0;
    
    function btnchoixuser() {
        var choisi = document.contenu.choixuser.value;
        NbEssais++;
        status = "Nombre d'essais : " + NbEssais;
        document.getElementById('ntentative').innerHTML = 7 - NbEssais;
        if (choisi < word)
            document.getElementById('indice').innerHTML = "Non, le nombre est plus grand";
        if (choisi == word) {
            window.alert("Correct ! Vous avez trouvé en " + NbEssais + "essais.");
            location.reload();
            document.getElementById('ntentative').innerHTML = 10;

        }
        if (NbEssais == 8) {
            window.alert("Désolé, c'est fini. Le nombre correct était : " + word);
            location.reload();
            document.getElementById('ntentative').innerHTML = 8;

        }
    }