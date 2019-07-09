let names = document.getElementById("ulList");
let form = document.getElementById("inputForm");
let contacts = [];// niz u kome ce se cuvati objekti sa informacijama o kontaktu

function Contact(name, lastName, address, mobileNum, homeNum) { // konstruktor
    this.name = name;
    this.lastName = lastName;
    this.address = address;
    this.mobileNum = mobileNum;
    this.homeNum = homeNum;
}

function createContact() { // kreiranje kontakta i upisivanje u array
    let nameVal = document.getElementById("name").value;
    let lastNameVal = document.getElementById("lastName").value;
    let addressVal = document.getElementById("address").value;
    let mobile = document.getElementById("mobileNum").value;
    let home = document.getElementById("homeNum").value;
    // var re = /^(\+381)?(\s|-)?6(([0-6]|[8-9])\d{8}|(77|78)\d{7}){1}$/; 
    // console.log(re.test(mobile))
    if (nameVal && (mobile || home)) { // uslov za kreiranje kontata je da ime i jedan od brojeva budu uneseni
        let contact = new Contact(nameVal, lastNameVal, addressVal, mobile, home);
        contacts.push(contact);
        addContact(contacts);
    } else {
        alert("Niste dobro popunili sva polja")
    }
}

function compare(a, b) { // funkcija koja sortira niz 
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
}
function removeValues() { // funkcija za brisanje input polja
    for (let i = 0; i < form.children.length; i++) {
        form.children[i].value = "";
    }
}
function addContact(contacts) { //ispis podataka
    removeValues();// brisanje vrednosti iz input polja
    names.innerHTML = "";// brisanje starog ispisa liste
    let x = contacts.sort(compare); // sortiranje niza po abecednom redu na osnovu imena korisnika

    for (let i = 0; i < x.length; i++) {
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
    let ul = document.getElementById("ulList");
    let li = ul.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

