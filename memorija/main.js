let data = [
    {
      "id": "0",
      "url": "http://pngimg.com/uploads/mario/mario_PNG79.png"
    },
    {
      "id": "1",
      "url": "http://pngimg.com/uploads/mario/mario_PNG128.png"
    },
    {
      "id": "2",
      "url": "http://pngimg.com/uploads/mario/mario_PNG119.png"
    },
    {
      "id": "3",
      "url": "http://pngimg.com/uploads/mario/mario_PNG50.png"
    },
    {
      "id": "4",
      "url": "http://pngimg.com/uploads/mario/mario_PNG39.png"
    },
    {
      "id": "5",
      "url": "http://pngimg.com/uploads/mario/mario_PNG33.png"
    },
    {
      "id": "6",
      "url": "http://pngimg.com/uploads/mario/mario_PNG91.png"
    },
    {
      "id": "7",
      "url": "http://pngimg.com/uploads/mario/mario_PNG32.png"
    }
  ]
  
let tryIt = document.getElementById("tryIt");
let btnStart = document.getElementById("start");
let container = document.getElementById("container");
let scoreBoard = document.getElementById("scoreBoard");
let gameDiv = document.getElementById("gameDiv");
let tbl = document.getElementById("table");
let imgId = [];
let cellId  = [];
let openElements = 0;
(function init() {
    container.style.visibility = "hidden";
    listeners();
    lvlOptions();
})();
function enterGame() {
    let x = readCookie("username");
    if(x){
        createElements(x);
    }else {
        let person = prompt("Please enter your name");
        createCookie("username",person, 1);
    }
    createElements(x);
}
function listeners() {
    tryIt.addEventListener("click", enterGame);
    start.addEventListener("click", gameStart);
}
function createElements(person) {
    tryIt.style.display = "none"; // brisanje tryIt dugmeta sa stranice
    container.style.visibility = "visible";
    let welcomeMsg = document.getElementById("welcome");
    welcomeMsg.textContent = `Welcome ${person}!`;
    generateTable();
}
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    createCookie(name, "", -1)
}

function generateTable() {
    let picsId= [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7];
    let arr = shuffle(picsId); // shuffled array
    let tblBody = document.createElement("tbody");
    tblBody.setAttribute("id", "tblBody");
    let row1 = document.createElement("tr");
    for (let i = 0; i < 4; i++) {
    row1.innerHTML += `<td id='${i}' onclick = "check(this,${arr[i]})" ></td>`;
    tblBody.appendChild(row1);
    }
    let row2 = document.createElement("tr");
    for (let i = 4; i < 8; i++) {   
     row2.innerHTML += `<td id='${i}' onclick ="check(this,${arr[i]})"></td>`;
     tblBody.appendChild(row2);
    }
    let row3 = document.createElement("tr");
    for (let i = 8; i < 12; i++) {     
    row3.innerHTML += `<td id='${i}' onclick ="check(this,${arr[i]})"></td>`;
    tblBody.appendChild(row3);
    }
    let row4 = document.createElement("tr");
    for (let i = 12; i < 16; i++) {
     row4.innerHTML += `<td id='${i}' onclick ="check(this,${arr[i]})"></td>`;
     tblBody.appendChild(row4);
    }
    tbl.appendChild(tblBody);
    console.log(arr);
}
function check(element,value) {
    let imageToCompare = data[value].url;
    if(element.innerHTML == "" && imgId.length < 2){
        element.innerHTML = `<img id=${value} src='${imageToCompare}'/>`;
 
        if(imgId.length == 0){
            imgId.push(value);
            cellId.push(element.id);
        }else if(imgId.length == 1){
            imgId.push(value);
            cellId.push(element.id);
            if(imgId[0] == imgId[1]){
                openElements += 2;
                imgId = [];
                cellId = [];
                
            }else {
                function removePictures(){
                    document.getElementById(cellId[1]).innerHTML = "";
                    document.getElementById(cellId[0]).innerHTML = "";
                    imgId = [];
                    cellId = [];
                }
                setTimeout(removePictures,600);
            }
        }
    }
}
function countdown() {
    let timeleft = 10;
    let downloadTimer = setInterval(function() {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "You ran out of time. Try again!"
        }
    }, 1000);
}
function shuffle(array) { 
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};
let time = 0;
function lvlOptions() {
    let lvlTxt = document.getElementById("lvlTxt");
    lvlTxt.textContent = " You have 60 sec to finish the game";
    let a = document.getElementById('level');
    a.addEventListener('change', function() {
        if (this.value == 0) {
            time = 0;
            lvlTxt.textContent = " You have 60 sec to finish the game";
        }
        if (this.value == 1) {
            time = 1;
            lvlTxt.textContent = " You have 30 sec to finish the game";
        }
        if (this.value == 2) {
            time = 2;
            lvlTxt.textContent = " You have 15 sec to finish the game";
        }
    })
}
function gameStart(){
    document.getElementById("tblBody").style.pointerEvents = "visible";
    if(time == 0){
        setTimeout(endGame,60000)
    }
    if(time == 1){
        setTimeout(endGame,30000)
    }
    if(time == 2){
        setTimeout(endGame,15000)
    }
}
function endGame(){
    document.getElementById("tblBody").style.pointerEvents = "none";
    alert("Game over");
}