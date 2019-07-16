let calendar = document.getElementById("calendar");
let weekDays = document.getElementById("daysOfTheWeek");
let dayWeekNum = [7, 1, 2, 3, 4, 5, 6];
let days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
let months = ["January", "February", "March", "April", "May" , "June" ,"July", "August", "September", "October", "November", "December"];
let yearElement = document.getElementById("year");
let monthElement = document.getElementById("month");
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let currentDay = new Date().getDate();// dan u mesecu
let months31 = [0,2,4,6,7,9,11];
let months30 = [3,5,8,10];
let previousBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");
previousBtn.addEventListener("click", previous);
nextBtn.addEventListener("click", next );
let livetime = document.getElementById("time");


function createThead(){
    for(let i = 0; i < days.length; i++){
        let td = document.createElement("td");
        td.setAttribute("id", days[i]);
        td.textContent = `${days[i]}`
        weekDays.appendChild(td);
    }
}
function yearAndMonth(){
    yearElement.textContent = `${currentDay}/${months[currentMonth]}/${currentYear}`; 
    monthElement.textContent = `${months[currentMonth]}`; 
}
function createTr(){
    let tr1 = document.createElement("tr");
    for(let i = 1; i < 8; i++){
        let trData = document.createElement("td");
        trData.setAttribute("id", `td${i}` );
        tr1.appendChild(trData);
        calendar.appendChild(tr1);
    }
    let tr2 = document.createElement("tr");
    for(let i = 8; i < 15; i++){
        let trData = document.createElement("td");
        trData.setAttribute("id", `td${i}` );
        tr2.appendChild(trData);
        calendar.appendChild(tr2);
    }
    let tr3 = document.createElement("tr");
    for(let i = 15; i < 22; i++){
        let trData = document.createElement("td");
        trData.setAttribute("id", `td${i}` );
        tr3.appendChild(trData);
        calendar.appendChild(tr3);
    }
    let tr4 = document.createElement("tr");
    for(let i = 22; i < 29; i++){
        let trData = document.createElement("td");
        trData.setAttribute("id", `td${i}` );
        tr4.appendChild(trData);
        calendar.appendChild(tr4);
    }
    let tr5 = document.createElement("tr");
    for(let i = 29; i < 36; i++){
        let trData = document.createElement("td");
        trData.setAttribute("id", `td${i}` );
        tr5.appendChild(trData);
        calendar.appendChild(tr5);
    }
    let tr6 = document.createElement("tr");
    for(let i = 36; i < 43; i++){
        let trData = document.createElement("td");
        trData.setAttribute("id", `td${i}` );
        tr6.appendChild(trData);
        calendar.appendChild(tr6);

    }
}

function createData(thisMonth){
    let start = dayWeekNum[new Date(currentYear,thisMonth,1 ).getDay()]  ; //0
    let counter = 1;
    let numberOfDays;
    for (let i = 0; i < months31.length; i++){
     if(thisMonth == months31[i]){
        numberOfDays = 31;
        break;
     }
    }
    for (let i = 0; i < months30.length; i++){
        if(thisMonth == months30[i]){
            numberOfDays = 30;
           break;
        }
       }
    if(thisMonth == 1){
        numberOfDays = 28;
    }
    for (let i = start; i < numberOfDays + start ; i++){
            document.getElementById(`td${i}`).textContent = `${counter}`;
            if (currentDay == counter){
                document.getElementById(`td${i}`).style.backgroundColor = " #f03333";
            }
            counter++; 
    }
}
function time() {
    livetime.innerHTML = "";
    var d = new Date();
    var s = d.getSeconds();
    if (s < 10){
        s = "0" + s;
    }
    var m = d.getMinutes();
    if (m < 10){
        m = "0" + m;
    }
    var h = d.getHours();
    if (h < 10){
        h = "0" + h;
    }
    livetime.innerHTML = h + ":" + m + ":" + s;
  }
  
setInterval(time, 1000);

yearAndMonth();
createThead();
createTr();
createData(currentMonth);





