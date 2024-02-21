const valtas = 15

let hatralevoElement = document.querySelector("#hatralevo")
let szavazatokElement = document.querySelector("#szavazatok-szama")
let szavazatok = szavazatokElement.innerHTML

hatralevoElement.innerHTML ="Hátralévő szavazatok jobb nyereményig: " + (valtas - szavazatok % valtas)