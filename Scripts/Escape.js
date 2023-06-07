combinationCode = "16859286";
// Saturn

function combination_lock() {
    let params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=400,height=690,left=530,top=150';
    window.open("combination_lock.html",  "", params);
}

function updateCode(id) {
    document.getElementById('display').innerHTML += id;
    if (id == "#") {
        document.getElementById('display').innerHTML = "";
    }
    if (id == "*") {
        string = document.getElementById('display').innerText;
        newcode = string.substring(0,string.length-2);
        
        document.getElementById('display').innerHTML = newcode;
    }
}

function checkCode() {
    if (document.getElementById('display').innerText == combinationCode) {
        window.close();
    }
    else {
        document.getElementById('display').innerText = "";
    }
}