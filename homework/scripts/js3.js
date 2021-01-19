document.getElementById("submit").addEventListener("click", validate);
let div = document.getElementById("program");

function validate(){
    let num = document.getElementById("num").value;
    if(!isNaN(num) && num > 0){
        div.innerHTML = "";
        heeHaw(1, num);
    } else {
        div.innerHTML = "Positive Integer is Required"
    }
}

function heeHaw(current, number){
    if(current % 15 == 0) {
        div.innerHTML += "Hee Haw! <br>";
    } else if (current % 3 == 0){
        div.innerHTML += "Hee!<br>";
    } else if(current % 5 == 0){
        div.innerHTML += "Haw!<br>";
    } else {
        div.innerHTML += current + "<br>";
    }
    if(number == current){
        return;
    } else {
        current++;
        heeHaw(current, number);
    }
}