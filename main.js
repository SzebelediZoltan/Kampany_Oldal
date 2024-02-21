const valtas = 0

let hatralevoElement = document.querySelector("#hatralevo")
let szavazatokElement = document.querySelector("#szavazatok-szama")
let szavazatok = szavazatokElement.innerHTML

hatralevoElement.innerHTML ="Hátralévő szavazatok jobb nyereményig: " + (15 - szavazatok % 15)