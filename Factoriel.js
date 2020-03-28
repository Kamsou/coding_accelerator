const [node, script, nombre] = process.argv;
  
  function Factoriel(n) {
    if( n == 0 || n == 1 ) {
      return 1;
    } else {
      return n * Factoriel(n-1);
    }
  }

console.log(Factoriel(nombre));

  
