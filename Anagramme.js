const [node, script, mot1, mot2] = process.argv;

function anagramOrNot(string_one, string_two) {

    const stringClean = function(string) {
      return string.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    }

    if (stringClean(string_one) == stringClean(string_two)) {
      console.log("oui, ce sont des anagrammes.");
    } else {
      console.log("non, ce ne sont pas des anagrammes.");
    }
  }

  anagramOrNot(mot1, mot2)