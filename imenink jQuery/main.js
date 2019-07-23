let names = $("#ulList");
let form = $("inputForm");
let contacts = [];
let currentStorage = JSON.parse(localStorage.getItem("contacts"));
let storage = [];

function createContacts(){
    let nameVal = $("#name").val();
    let lastNameVal = $("#lastName").val();
    let addressVal = $("#address").val();
    let mobile = $("#mobileNum").val();
    let home = $("#homeNum").val();
}
function Contact(name, lastName, address, mobileNum, homeNum) { // konstruktor
	this.name = name;
	this.lastName = lastName;
	this.address = address;
	this.mobileNum = mobileNum;
    this.homeNum = homeNum;
    let contact = new Contact(nameVal, lastNameVal, addressVal, mobile, home);
		contacts.push(contact);
		addContact(contacts);
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
function addLIsteners(){
    $("#btn").on("click", createContacts);
    $("#btnDel").on("click", deleteContacts);
    $("#filterInput").on("change", filterSearch);
}
addLIsteners();

function removeValues() { // funkcija za brisanje input polja
		form.children().val()= "";
}
function addContact(contacts) { //ispis podataka
	if (currentStorage) {
		storage = currentStorage.concat(contacts);
		localStorage.setItem("contacts", JSON.stringify(storage));
		removeValues(); // brisanje vrednosti iz input polja
		names.html() = ""; // brisanje starog ispisa liste
		storage.sort(compare); // sortiranje niza po abecednom redu na osnovu imena korisnika
		displayContacts(storage);
	} else {
		removeValues(); // brisanje vrednosti iz input polja
		localStorage.setItem("contacts", JSON.stringify(contacts));
		contacts.sort(compare); // sortiranje niza po abecednom redu na osnovu imena korisnika
		displayContacts(contacts);
	}
}
function deleteContacts(){
	names.html() = "";
	localStorage.removeItem("contacts");
}
