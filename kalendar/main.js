let calendar = document.getElementById("calendar");
let weekDays = document.getElementById("daysOfTheWeek");
let dayWeekNum = [7, 1, 2, 3, 4, 5, 6];
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let yearElement = document.getElementById("year");
let monthElement = document.getElementById("month");
let currentMonth = new Date().getMonth();; // mesec
let currentYear = new Date().getFullYear(); // godina
let currentDay = new Date().getDate(); // dan u mesecu
let c = currentDay + currentMonth + currentYear;

function listeners() {
    let previousBtn = document.getElementById("previous");
    let nextBtn = document.getElementById("next");
    previousBtn.addEventListener("click", previous);
    nextBtn.addEventListener("click", next);
}

function createThead() {
    for (let i = 0; i < days.length; i++) {
        let td = document.createElement("td");
        td.setAttribute("id", days[i]);
        td.textContent = `${days[i]}`
        weekDays.appendChild(td);
    }
}
function createBody() { // kreiranje redova sa odredjenim brojem
    let body = document.getElementById("body");
    let tr1 = document.createElement("tr");
    for (let i = 1; i < 8; i++) {
        let trData = document.createElement("td");
        trData.setAttribute("id", `td${i}`);
        tr1.appendChild(trData);
        body.appendChild(tr1);
    }
    let tr2 = document.createElement("tr");
    for (let i = 8; i < 15; i++) {
        let trData = document.createElement("td");
        trData.setAttribute("id", `td${i}`);
        tr2.appendChild(trData);
        body.appendChild(tr2);
    }
    let tr3 = document.createElement("tr");
    for (let i = 15; i < 22; i++) {
        let trData = document.createElement("td");
        trData.setAttribute("id", `td${i}`);
        tr3.appendChild(trData);
        body.appendChild(tr3);
    }
    let tr4 = document.createElement("tr");
    for (let i = 22; i < 29; i++) {
        let trData = document.createElement("td");
        trData.setAttribute("id", `td${i}`);
        tr4.appendChild(trData);
        body.appendChild(tr4);
    }
    let tr5 = document.createElement("tr");
    for (let i = 29; i < 36; i++) {
        let trData = document.createElement("td");
        trData.setAttribute("id", `td${i}`);
        tr5.appendChild(trData);
        body.appendChild(tr5);
    }
    let tr6 = document.createElement("tr");
    for (let i = 36; i < 43; i++) {
        let trData = document.createElement("td");
        trData.setAttribute("id", `td${i}`);
        tr6.appendChild(trData);
        body.appendChild(tr6);

    }
}

function createData(thisMonth, thisYear) {
    monthElement.textContent = `${months[thisMonth]} ${thisYear}`;
    var daysNum = new Date(thisYear, thisMonth + 1, 0).getDate(); // broj dana u mesecu
    let start = dayWeekNum[new Date(thisYear, thisMonth, 1).getDay()]; //0
    let counter = 1;
    for (let i = start; i < daysNum + start; i++) {
        document.getElementById(`td${i}`).textContent = `${counter}`;
        // bojenje trenutnog datuma u crveno
        if (currentDay === counter && c === (counter + thisMonth + thisYear)) {
            document.getElementById(`td${i}`).style.backgroundColor = " #f03333";
        }
        counter++;
    }
}

function next() { // dugme next
    body.innerHTML = '';
    currentMonth = currentMonth + 1;
    createBody();
    createData(currentMonth, currentYear);
}

function previous() { // dugme previous
    body.innerHTML = '';
    currentMonth = currentMonth - 1;
    createBody();
    createData(currentMonth, currentYear);
}

function time() { // clock
    let livetime = document.getElementById("time");
    var d = new Date();
    var s = d.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    var m = d.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    var h = d.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    livetime.innerHTML = `${h}:${m}:${s}`;
}
listeners();
setInterval(time, 1000);
createThead();
createBody();
createData(currentMonth, currentYear);