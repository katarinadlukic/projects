let inputField = document.getElementById("inputField");
let res = document.getElementById("res");
function linkIt(){
    let str = inputField.value;
    let arr = [];
    arr = str.split(" ");
    // rec koja pocinje sa @ postaje linkovana slicica i uklanja se char @
    for(let i=0; i < arr.length; i++){
        if (arr[i].includes("@")){
            let x = arr[i].replace(/@/g, "<img src='logo.png' width='25px' height='20px'/>");
            arr[i] = `<a href="https://twitter.com/?lang=en" target="_blank"><span id="logo">${x}</span></a>`
        }
        else if (arr[i].includes("#")){// rec koja pocinje sa # postaje link
            arr[i] = `<a href="https://twitter.com/?lang=en" target="_blank"><span id="hashTag">${arr[i]}</span></a>`
        }
        // rec koja u sebi sadrzi "www" ili "http" postaje link
        else if (arr[i].includes("www") || arr[i].includes("http")){
            arr[i] = `<a href="${arr[i]}" target="_blank">${arr[i]}</a>`
        }
    }
    let parsed = arr.join(" ");
    res.innerHTML = parsed;
}