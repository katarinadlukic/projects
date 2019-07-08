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

function addContact(contacts){ //ispis podataka
        let x  = contacts[contacts.length-1];
        names.innerHTML += `
        <p><span>Ime i prezime:</span> ${x.name} ${x.lastName}</p>
        <p><span>Adresa:</span> ${x.address}</p>
        <p><span>Mobilni:</span> ${x.mobileNum}</p>
        <p><span>Fiksni:</span> ${x.homeNum}</p>
        <hr>
        `
        
}