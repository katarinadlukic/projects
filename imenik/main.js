let names = document.getElementById("ulList");
let form = document.getElementById("inputForm");
let contacts = []; // niz u kome ce se cuvati objekti sa informacijama o kontaktu
let currentStorage = JSON.parse(localStorage.getItem("contacts"));
let reMob = /^0(6[0123456])\d{6,7}$/g;
let reHome = /^0\d{8,10}$/g;

(function checkStorage() {// ako ima podataka u local storage, ispisati ih
	if (currentStorage) {
		displayContacts(currentStorage);
		contacts = currentStorage;	
	}
})();

function Contact(name, lastName, address, mobileNum, homeNum) { // konstruktor
	this.name = name;
	this.lastName = lastName;
	this.address = address;
	this.mobileNum = mobileNum;
	this.homeNum = homeNum;
}

function createContact() {
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
		contacts.sort(compare); // sortiranje niza po abecednom redu na osnovu imena korisnika
		localStorage.setItem("contacts", JSON.stringify(contacts));
		addContact(JSON.parse(localStorage.getItem("contacts")));
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

function addContact(storage) { //ispis podataka
		removeValues(); // brisanje vrednosti iz input polja
		names.innerHTML = ""; // brisanje starog ispisa liste
		displayContacts(storage);
}

function deleteContacts(){
	names.innerHTML = "";
	contacts = [];
	currentStorage = [];
	localStorage.removeItem("contacts");
}
function filterSearch() { // funkcija koja pretrazuje karaktere u listi, filter
	let input = document.getElementById("filterInput");
	let filter = input.value.toUpperCase();
	let ul = document.getElementById("ulList");
	let tr = ul.getElementsByTagName("tr");
	for (let i = 0; i < tr.length; i++) {
		if (tr[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
		} else {
			tr[i].style.display = "none";
		}
	}
}

function displayContacts(x) {
	for (let i = 0; i < x.length; i++) {
		names.innerHTML += `
		<tr onclick="del(event)" onfocusout="edit(event)">
		<td id="span"><span id="del">x</span></td>
		<td><input type="text" value="${x[i].name}"></td>
		<td><input type="text" value="${x[i].lastName}"></td>
        <td><input type="text" value="${x[i].address}"></td>
        <td><input type="text" value="${x[i].mobileNum}"></td>
        <td><input type="text" value="${x[i].homeNum}"></td>
        </tr>
        `
	}
}
function del(e){ // brisanje pojedinacnog kontakta
	let el = e.target.parentNode.parentNode;
	let elIndex = getElementIndex(el); // index kliknutog elementa

	if (e.target.id == "del"){ // brisanje kliknutig elementa
		if (elIndex > -1) {
		  contacts.splice(elIndex, 1);
		}
	localStorage.setItem("contacts", JSON.stringify(contacts));
	names.innerHTML = "";
	displayContacts(contacts);
	}

}
function edit(e){ // editovanje kontakta
	let el = e.target.parentNode.parentNode;
	let elIndex = getElementIndex(el); // index kliknutog kontakta
	let elDataIndex = getElementIndex(e.target.parentNode) // index podatka u kontaktu
	let val =  e.target.value; // nova vrednost
	switch(elDataIndex) {
		case 1:
		  elDataIndex == 1
		  contacts[elIndex].name = val;
		  break;
		  case 2:
			elDataIndex == 2
			contacts[elIndex].lastName = val;
		  break;
		  case 3:
			elDataIndex == 3  
			contacts[elIndex].address = val;
		  break;
		  case 4:
			if (elDataIndex == 4 && reMob.test(val)){
				contacts[elIndex].mobileNum = val;
			} else if(elDataIndex == 4 && !reMob.test(val)) {
				error();
			}
		  break;
		  case 5:
			if (elDataIndex == 5 && reHome.test(val)){
				contacts[elIndex].homeNum = val;
			}else if(elDataIndex == 5 && !reHome.test(val)){
				error();
			}
		  break;
	  }
	  localStorage.setItem("contacts", JSON.stringify(contacts));
}
function getElementIndex (element) {
	return Array.from(element.parentNode.children).indexOf(element);
  }
function error(){
	alert("Niste pravilno uneli broj telefona");
	names.innerHTML = "";
	displayContacts(contacts);
  }

