const fs = require('fs');
const soloWord = process.argv[2];
const allWord = fs.readFileSync("./" + process.argv[3], "utf8").split("\n");

function stringClean(string) {
  return string.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
}

function anagramOrNot(string_one, string_two) {
  let allListWord = [];
  for(let i = 0; i < allWord.length; i++) {
    if(stringClean(soloWord) == stringClean(allWord[i])) {
      allListWord.push(allWord[i]);
    }
    console.log(allListWord);  
  }
}

anagramOrNot(soloWord, allWord);