let names = document.getElementById("section2");
let contacts = [];

function Contact(name, lastName, address, mobileNum, homeNum){ // konstruktor
    this.name  = name;
    this.lastName = lastName;
    this.address = address;
    this.mobileNum = mobileNum;
    this.homeNum = homeNum;
}

function createContact(){ // kreiranje kontakta i upisivanje u array
    let nameVal = document.getElementById("name").value;
    let lastNameVal = document.getElementById("lastName").value;
    let addressVal = document.getElementById("address").value;
    let mobile = document.getElementById("mobileNum").value;
    let home = document.getElementById("homeNum").value;
    let contact = new Contact(nameVal, lastNameVal, addressVal, mobile, home);

    contacts.push(contact);
    addContact(contacts);
}

 function compare(a,b){ // funkcija koja sortira niz 
        if (a.name > b.name){
            return 1;
        }
        if(a.name < b.name){
            return -1;
        }
        return 0;
 }
function addContact(contacts){ //ispis podataka
        names.innerHTML = "";
        let x  = contacts.sort(compare); // sortiranje niza po abecednom redu na osnovu imena korisnika
        for (let i = 0; i < x.length;i++){
            names.innerHTML += `
        <li><span>Ime i prezime:</span> ${x[i].name} ${x[i].lastName}</ul>
        <li><span>Adresa:</span> ${x[i].address}</ul>
        <li><span>Mobilni:</span> ${x[i].mobileNum}</ul>
        <li><span>Fiksni:</span> ${x[i].homeNum}</ul>
        <br><br>
        `
        }
        
        
}