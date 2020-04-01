
const _ = require("underscore"); // Nécessaire pour inclure la librairie underscore
const fs = require('fs'); // Nécessaire pour dire qu'il faut un File System
const s = fs.readFileSync("./" + process.argv[2], "utf8").replace(/_/g, "0").replace(/[^\d]/g, "").match(/.{1,9}/g);
var tab2d = [];

function Tableau2d(arr) { //Fonction qui permet de passer le tableau en 2 dimensions
    for (let i = 0; i < arr.length; i++) {
        let splittedIndex = arr[i].split('');
        tab2d.push(splittedIndex);
    }
    return tab2d; //Pour les fonctions suivantes, attention à bien utiliser tab2d et non pas s
}

function solve(arr) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var ilyachangement = false;
            let soluces = possible(arr, i, j);
            if (soluces == false) {
                continue
            }
            if (soluces.length == "1") {
                arr[i][j] = soluces[0].toString();
                ilyachangement = true;
            }
        }
    }
    if (ilyachangement == false) {
        return
    }
}

function possible(arr, ind, ind2) {
    if (arr[ind][ind2] != "0") {
        return false
    }
    var possibilites = []
    for (i = 1; i < 9; i++) {
        possibilites.push(i);
    }
    for (i = 0; i < arr[ind].length; i++) { //Boucle qui parcoure la ligne
        let x = arr[ind][i];
        x = parseInt(x);
        //console.log(x);
        possibilites = _.without(possibilites, x);
    }
    for (i = 0; i < 9; i++) { //Boucle qui parcoure la colonne
        let x = arr[i][ind2];
        x = parseInt(x);
        //console.log(x);
        possibilites = _.without(possibilites, x);
    }
    //console.log(possibilites);
    var carréi = ((parseInt(ind / 3)) * 3); //Longueur du carré
    var carréj = ((parseInt(ind2 / 3)) * 3); //Hauteur du carré

    sousTableau = arr.slice(carréi, carréi + 3); //Tableau qui correspondra aux éléments présents dans le carré
    for (i = 0; i < sousTableau.length; i++) {
        sousTableau[i] = sousTableau[i].slice(carréj, carréj + 3);
    }
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            let x = sousTableau[i][j]
            x = parseInt(x);
            possibilites = _.without(possibilites, x);
        }
    }
    //console.log(possibilites);
    return possibilites
}

Tableau2d(s);
solve(tab2d);
console.log(tab2d);

