
let inputField = document.getElementById("input");
let resField = document.getElementById("result");

// dodavanje kliknutih karatera u input field
function typeNum(num){
    inputField.value += num;
}
function operand(char){
    inputField.value +=char;
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
    if (inputField.value == ""){
        resField = "";
    }
    resField.value = Math.sqrt(eval(input.value));
}
// kvadrat i kub izracunavanje
function pow(val){
    if (inputField.value == ""){
        resField = "";
    }
    resField.value =  Math.pow(eval(input.value), val);
 }