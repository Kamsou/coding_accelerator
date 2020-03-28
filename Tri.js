const [node, script, n1, n2, n3, n4] = process.argv;
const tableau = [n1, n2, n3, n4];
  
if(process.argv[9] == null){
  tableau.sort().reverse();
  console.log(tableau);
} else{
  console.log("J'suis au bout mec!");
}



  
