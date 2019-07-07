// anonimna f-ja za dinamicko dodavanje button-a koji imaju brojevnu vrednost, njihovih atributa i listener-a
(function myFunction(){ 
    let numbers = document.getElementById("numbers");
    for (let i = 0; i < 10; i++) {
        numbers.innerHTML += `<button id="${i}" onclick="typeNum(${i})" >${i}</button>`
    }
})();

let inputField = document.getElementById("input");
let resField = document.getElementById("result");

// dodavanje kliknutih karatera u input field
function typeNum(num){
    inputField.value += num;
}
// izracunavanje i ispis rezultata u element "result"
function calculate(){
     resField.value =`= ${eval(input.value)}`;
}
// brisanje vrednosti 
function clearAll(){
    inputField.value = "";
    resField.value = "";
}
// izracunavanje korena 
function sqr(){
    resField.value = Math.sqrt(eval(input.value));
}
// kvadrat i kub izracunavanje
function pow(val){
    resField.value =  Math.pow(eval(input.value), val);
 }