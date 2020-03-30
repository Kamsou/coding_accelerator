const fs = require('fs'); 
const rectangle_one = fs.readFileSync("./" + process.argv[2],"utf8").split("\n"); 
const rectangle_two = fs.readFileSync("./" + process.argv[3],"utf8").split("\n");

function colonne(tab, ind) { 
    let col = [];
    for (let i = 0; i < tab.length; i++){
            col.push(tab[i][ind]);
    }
        return col
}

for (let i = 0; i < rectangle_two.length; i++) {
    for (let j = 0; j < rectangle_two[i].length; j++) {
        //test si 
         if(rectangle_two[i][j] == rectangle_one[0][0] && rectangle_two[i][j+1] == rectangle_one[0][1] && rectangle_two[i][j+2] == rectangle_one[0][2] ) {
             if (rectangle_two[i+1][j] == rectangle_one[1][0] && rectangle_two[i+1][j+1] == rectangle_one[1][1] && rectangle_two[i+1][j+2] == rectangle_one[1][2]) {
                 if (rectangle_two[i+2][j]==rectangle_one[2][0] && rectangle_two[i+2][j+1] == rectangle_one[2][1] && rectangle_two[i+2][j+2] == rectangle_one[2][2]){

                     colonne_rectangle_two =  colonne(rectangle_two,j)
                     colonne_rectangle_one = colonne(rectangle_one,0)

                     for (let k = 0; k< colonne_rectangle_two.length; k++) {

                          if(colonne_rectangle_two[k]==colonne_rectangle_one[0] && colonne_rectangle_two[k+1]==colonne_rectangle_one[1] && colonne_rectangle_two[k+2]==colonne_rectangle_one[2]){

                              colonne_rectangle_one_2 = colonne(rectangle_one,1)
                              console.log(j+","+k)
                          }
                      } 
                }
            }
        }
    } 
}