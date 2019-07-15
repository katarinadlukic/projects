let calendar = document.getElementById("calendar");
let weekDays = document.getElementById("daysOfTheWeek");
let dayWeekNum = [7, 1, 2, 3, 4, 5, 6];
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let months = ["January", "February", "March", "April", "May" , "June" ,"July", "August", "September", "October", "November", "December"];
let yearElement = document.getElementById("year");
let monthElement = document.getElementById("month");
let currentMonth = 6;
// new Date().getMonth();
let currentYear = new Date().getFullYear();
let currentDay = new Date().getDate();
let months31 = [0,2,4,6,7,9,11];
let months30 = [3,5,8,10];

function createThead(){
    for(let i = 0; i < days.length; i++){
        let td = document.createElement("td");
        td.setAttribute("id", days[i]);
        td.textContent = `${days[i]}`
        weekDays.appendChild(td);
    }
}
function yearAndMonth(){
    yearElement.textContent = `${currentYear}`;  
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
function createData(){
    let start = dayWeekNum[new Date(currentYear,currentMonth,1 ).getDay()]  ; //0
    let counter = 1;
    let numberOfDays;
    for (let i = 0; i < months31.length; i++){
     if(currentMonth == months31[i]){
        numberOfDays = 31;
        break;
     }
    }
    for (let i = 0; i < months30.length; i++){
        if(currentMonth == months30[i]){
            numberOfDays = 30;
           break;
        }
       }
    if(currentMonth == 1){
        numberOfDays = 28;
    }
    console.log(numberOfDays)
    //let x = 1;
    for (let i = start; i < numberOfDays + start ; i++){
            document.getElementById(`td${i}`).textContent = `${counter}`;
            if (currentDay == counter){
                document.getElementById(`td${i}`).style.backgroundColor = "red";
            }
            counter++; 
    }
}
yearAndMonth();
createThead();
createTr();
createData();


