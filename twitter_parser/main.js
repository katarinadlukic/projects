let inputField = document.getElementById("inputField");
let res = document.getElementById("res");

// rec koja pocinje sa @ postaje link, i uklanja se char @
function linkIt(){
    let str = inputField.value;
    let arr = [];
    arr = str.split(" ");
    for(let i=0; i < arr.length; i++){
        if (arr[i].includes("@")){
            let x = arr[i].replace(/@/g, "");
            arr[i] = `<a href="https://twitter.com/?lang=en">${x}</a>`
        }
        else if (arr[i].includes("#")){
            arr[i] = `<a href="https://twitter.com/?lang=en">${arr[i]}</a>`
        }
    }
    let parsed = arr.join(" ");
    res.innerHTML = parsed;
}