let tryIt = document.getElementById("tryIt");
let container = document.getElementById("container");
let scoreBoard = document.getElementById("scoreBoard");
    function enterGame() {
        let person = prompt("Please enter your name");
        if (person != null) {
           createElements();
            createTimer();
            createButtons();
          }
  }
  function listeners(){
      
      tryIt.addEventListener("click", enterGame)
  }
  (function init(){
      container.style.visibility = "hidden";
      listeners();
  })();

  function createElements(){
    tryIt.style.display = "none"; // brisanje tryIt dugmeta sa strancie
    container.style.visibility = "visible";
    
    

  }