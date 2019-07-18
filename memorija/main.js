let tryIt = document.getElementById("tryIt");
let btnStart = document.getElementById("start");
let container = document.getElementById("container");
let scoreBoard = document.getElementById("scoreBoard");
let gameDiv = document.getElementById("gameDiv");
let tbl = document.getElementById("table"); 
    function enterGame() {
            // let x = readCookie("username");
            // if(x){
            //     createElements(x);
            // }else {
            //     let person = prompt("Please enter your name");
            //     createCookie("username",person, 1);
            // }
            let x = "Katarina"
            createElements(x);
  }
  function listeners(){
      tryIt.addEventListener("click", enterGame);
       start.addEventListener("click", gameStart);
  }
 

  function createElements(person){
    tryIt.style.display = "none"; // brisanje tryIt dugmeta sa stranice
    container.style.visibility = "visible";
    let welcomeMsg = document.getElementById("welcome");
     welcomeMsg.textContent = `Welcome ${person}!`;
     generateTable()
 
  }

 
  function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1)
}

function lvlOptions(){
    let lvlTxt = document.getElementById("lvlTxt");
    lvlTxt.textContent = " You have 60 sec to finish the game";
    let a = document.getElementById('level');
    a.addEventListener('change', function() {
       if (this.value == 0){
        lvlTxt.textContent = " You have 60 sec to finish the game";
    }
        if (this.value == 1){
            lvlTxt.textContent = " You have 30 sec to finish the game";
        }
        if (this.value == 2){
            lvlTxt.textContent = " You have 15 sec to finish the game";
        }
    })
}

function generateTable(){
    
    let tblBody = document.createElement("tbody");
    let counter = 1;
  for (let i = 0; i < 4; i++) {
   
    let row = document.createElement("tr");

    for (let j = 0; j < 4; j++) {
     
      let cell = document.createElement("td");
      let picButton = document.createElement("button");
      picButton.setAttribute("id", counter);
      cell.appendChild(picButton);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
}

function gameStart(){
    countdown();
    setTimeout(endGame, 10000)
}
function endGame(){
tbl.style.visibility = "hidden";
}

(function init(){
    
    container.style.visibility = "hidden";
    listeners();
    lvlOptions();
})();
function countdown(){
    var timeleft = 10;
  var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "You ran out of time. Try again!"
  }
}, 1000);
}