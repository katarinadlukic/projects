let names = document.getElementById("section2");
let form = document.getElementById("section1");
let contacts = [];// niz u kome ce se cuvati objekti sa informacijama o kontaktu

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
 function removeValues(){ // funkcija za brisanje input polja
     console.log(form.children.length);
     for(let i=0; i < form.children.length; i++){
         form.children[i].value = "";
     }
 }
function addContact(contacts){ //ispis podataka
        removeValues();// brisanje vrednosti iz input polja
        names.innerHTML = "";// brisanje starog ispisa liste
        let x  = contacts.sort(compare); // sortiranje niza po abecednom redu na osnovu imena korisnika
        for (let i = 0; i < x.length;i++){
            names.innerHTML += `
        <li>${x[i].name} ${x[i].lastName}<br>
        ${x[i].address}<br>
        ${x[i].mobileNum}<br>
        ${x[i].homeNum}<br>
        </ul>
        <br><br>
        `
        }
    }  
function filterSearch() { // funkcija koja pretrazuje karaktere u listi, filter
    let input = document.getElementById("filterInput");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("section2");
    let li = ul.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
 }

