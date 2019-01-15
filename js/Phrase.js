/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        const selectedPhrase = phrase.phrase;
        var str = '<ul>'
        for (var i = 0; i < selectedPhrase.length; i++) {
            str += '<li>'+ selectedPhrase.charAt(i) + '</li>';
          };
          str += '</ul>';
          document.getElementById("phrase").innerHTML = str;
    }
};

