let inputField = document.getElementById("input");
let resField = document.getElementById("result");
let arr = [];
// dodavanje kliknutih brojeva u input field
function typeNum(num){
    arr.push(num);
    let charArr = arr.join("");
    inputField.value = charArr;
    
    
}
// dodavanje karaktera
function operand(char){
    if (isNaN(parseInt(arr[arr.length - 1]))){
        arr[arr.length - 1] = char;
        }else {
             arr.push(char);
    }
    let charArr = arr.join("");
    inputField.value = charArr;
}
// izracunavanje i ispis rezultata u element "result"
function calculate(){
     resField.value =`= ${eval(input.value)}`;
}
// brisanje vrednosti 
function clearAll(){
    inputField.value = "";
    resField.value = "";
    arr = [];    
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