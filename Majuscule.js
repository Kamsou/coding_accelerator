let phrase = process.argv[2];

let phraseMaj;
let saut = 0;

for(i = 0; i <= phrase.length; i++) {
  saut++
  if( i == 0 ) {
    phraseMaj = phrase[i].toLowerCase()
  }
  if(phrase.charAt(i) == ' ') {
    saut --;
  }
  if( i != 0 ) {
    if( saut % 2 == "0") {
      phraseMaj += phrase.charAt(i).toUpperCase()
    } else {
      phraseMaj += phrase.charAt(i).toLowerCase()
    }
  }
}

console.log(phraseMaj);
