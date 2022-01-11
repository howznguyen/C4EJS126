let a = 0;
let x = { name: "Duy" };
// Trong may tinh, bien deu luu tai dia chi

/// Tham tri
function changeValue(b) {
    b = 12;
}

// Tham chieu
function changeValueObj(c) {
    c.name = "D";
}

changeValueObj(x);
console.log(x);

// changeValue(a);
// console.log(a);

// Address [1A][1B][1C          ][][][]
// Name    [a ][b ][x,c         ][][][]
// Value   [0 ][12][{name: "D"} ][][][]


let my_home = {
    money: 100,
}

function giveaway(girlfriend_house) {
    girlfriend_house.money = 100 - 60; // Ny ban lay di 50$
}

giveaway(my_home);

console.log(my_home);