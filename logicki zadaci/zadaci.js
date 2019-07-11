// 1. Napisati funkciju koja za zadati trocifren broj izracunava zbir cifara.

function zad1(n){
    if (n < 100 && n > 999){
        return "Broj nije trocifren"
        }
    let jedinica = n%10;
    let desetica = ((n - jedinica) /10) % 10;
    let stotina = ((n -desetica*10 - jedinica) / 100) % 10;
    return jedinica + desetica + stotina;
    }

 // 3. Napisati funkciju koja izracunava povrsinu trougla ako znamo koordinate temena trougla.

function find_triangle_area(x1,x2,x3,y1,y2,y3){
     let area = 0.5*(x1*(y2-y3))+ x2*(y3-y1) + x3*(y1-y2);
    return Math.abs(area);
}

// 4. Napisati funkciju koja racuna kada ce avion sleteti ako se zna dan, sat, minut i sekund kad je poleteo
//    i vreme koliko je proveo u vazduhu dato u formatu sat, minut, sekund.

function calculateArrival( year,month,day,hour,minute,second,flightHours,flightMinutes,flightSec){
    let input_month = month - 1;
    let startDate = new Date(year, input_month, day, hour, minute, second);
    let startMilisec = startDate.getTime();
    let flightMilisec = flightHours*3600000 + flightMinutes*60000 + flightSec*1000; //milsekunde
    let endMilisec = startMilisec + flightMilisec;
    let endDate = new Date (endMilisec);
    return endDate.toString();
}

// 5. Napisati funkciju koja racuna za koliko ce se kazaljke na satu poklopiti u odnosu na trenutno vreme.

function time_until_match(h, m, s){
    let currentTime = h*3600 + m*60 + s;
    let firstMatching = 3927; // prvo poklapanje u sec
    function sec_to_time(sec){
        let hours = Math.floor(sec / 3600);
        let minutes = Math.floor((sec / 60) % 60);
        let seconds = sec % 60;
    return "Do prvog poklapanja kazaljki ostalo je jos "+ hours + " sat," + minutes + " minuta i "+ seconds + " sekundi.";
    }
    let first_next_matching = Math.floor(currentTime/ firstMatching) + 1;
    let result = sec_to_time(firstMatching * first_next_matching - currentTime);
    return result;
}

// 6. Napisati funkciju koja ispituje da li je broj prost.


function primeNum(num){
    if (num === 1){
        return false;
    }
    if (num === 2){
        return true;
    }
    for (let i = 2; i < num.length; i++){
        if (num % i === 0){
            return false
        }
        return true
    } 
}

// 7. Napisati funkciju koja za dati redni broj dana u nedelji stampa ime dana.
 function dayOfTheWeek(num){
     let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
     let result = week[num - 1];
     return result;
 }
  
 //8. Napisati funkciju koja za zadati datum odredjuje datum za sledeci/prethodni dan.

 function previous_next(year,month,day){
    let m = month -1;
    let current = new Date(year,m,day);
    let previousDay = day - 1;
    let previous = new Date(year,m, previousDay);
    let nextDay = day + 1;
    let next  = new Date(year,m, nextDay);
    let result = "previous day is: " + previous + " next day is : " + next;
    return result;
 }