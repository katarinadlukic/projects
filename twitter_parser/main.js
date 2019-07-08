let inputField = document.getElementById("inputField");
let res = document.getElementById("res");

// rec koja pocinje sa @ postaje link, i uklanja se char @
function linkIt(){
    let str = inputField.value;
    let arr = [];
    arr = str.split(" ");
    for(let i=0; i < arr.length; i++){
        if (arr[i].includes("@")){
            let x = arr[i].replace(/@/g, "<img src='logo.png' width='25px' height='20px'/>");
            arr[i] = `<a href="https://twitter.com/?lang=en"><span>${x}</span></a>`
        }
        else if (arr[i].includes("#")){
            arr[i] = `<a href="https://twitter.com/?lang=en">${arr[i]}</a>`
        }
        else if (arr[i].includes("www")){
            arr[i] = `<a href="${arr[i]}">${arr[i]}</a>`
        }
    }
    let parsed = arr.join(" ");
    res.innerHTML = parsed;
}