let names = document.getElementById("ulList");
let form = document.getElementById("inputForm");
let contacts = []; // niz u kome ce se cuvati objekti sa informacijama o kontaktu
let currentStorage = JSON.parse(localStorage.getItem("contacts"));
let storage = [];

function checkStorage() {// ako ima podataka u local storage, ispisati ih
	if (currentStorage) {
		currentStorage.sort(compare);
		displayContacts(currentStorage);
	}
}

function Contact(name, lastName, address, mobileNum, homeNum) { // konstruktor
	this.name = name;
	this.lastName = lastName;
	this.address = address;
	this.mobileNum = mobileNum;
	this.homeNum = homeNum;
}

function createContact() {
	displayContacts(storage) // kreiranje kontakta i upisivanje u array
	let nameVal = document.getElementById("name").value;
	let lastNameVal = document.getElementById("lastName").value;
	let addressVal = document.getElementById("address").value;
	let mobile = document.getElementById("mobileNum").value;
	let home = document.getElementById("homeNum").value;
	let reMob = /^0(6[0123456])\d{6,7}$/g;
	let reHome = /^0\d{8,10}$/g;
	if ((reMob.test(mobile) && nameVal !== "") || (reHome.test(home) && nameVal !== "")) { // uslovi za kreiranje kontakta
		let contact = new Contact(nameVal, lastNameVal, addressVal, mobile, home);
		contacts.push(contact);
		addContact(contacts);
	} else {
		alert("Niste dobro popunili polja");
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
	if (currentStorage) {
		storage = currentStorage.concat(contacts);
		localStorage.setItem("contacts", JSON.stringify(storage));
		removeValues(); // brisanje vrednosti iz input polja
		names.innerHTML = ""; // brisanje starog ispisa liste
		storage.sort(compare); // sortiranje niza po abecednom redu na osnovu imena korisnika
		displayContacts(storage);
		console.log("this")
	} else {
		removeValues(); // brisanje vrednosti iz input polja
		localStorage.setItem("contacts", JSON.stringify(contacts));
		contacts.sort(compare); // sortiranje niza po abecednom redu na osnovu imena korisnika
		displayContacts(contacts);
	}
}
function deleteContacts(){
	names.innerHTML = "";
	localStorage.removeItem("contacts");
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

function displayContacts(x) {
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
checkStorage();