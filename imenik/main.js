let name = document.getElementById("name");
let lastName = document.getElementById("lastName");
let address = document.getElementById("address");
let mobileNum = document.getElementById("mobileNum");
let homeNum = document.getElementById("homeNum");
let names = document.getElementById("section2");

function addContact(){
let nameVal = name.value;
let lastNameVal = lastName.value;
let addressVal = address.value;
let mobile = mobileNum.value;
let home = homeNum.value;
 names.innerHTML += `
 <p>${nameVal}</p>
 <p>${lastNameVal}</p>
 <p>${addressVal}</p>   
 <p>${mobile}</p>
 <p>${home}</p>
 `
}