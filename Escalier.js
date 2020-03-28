const [node, script, chiffre] = process.argv;

let espace, slash, escalier

  function goLescalier(x) {
    for(let i = 1; i <= x && typeof i === "number"; i++) {
      espace = x - i;
      slash = i;
      escalier = " ".repeat(espace) + "#".repeat(slash);
      console.log(escalier); 
    }
    console.log("on se retrouve au sommet!");
  }

goLescalier(chiffre);