writeHeeHaw();

function writeHeeHaw(){
    let div = document.getElementById("program");
    for (let i = 1; i <= 100; i++) {

        if(i % 15 == 0) {
            div.innerHTML += "Hee Haw! <br>";
        } else if (i % 3 == 0){
            div.innerHTML += "Hee!<br>";
        } else if(i % 5 == 0){
            div.innerHTML += "Haw!<br>";
        } else {
            div.innerHTML += i + "<br>";
        }

        // shorter solution: utilizes ternary operator
        // does not work due to "!"
        // checks if i is divisible by 3 if 0 or false then print hee
        // checks if i is divisible by 5 if 0 or false then print haw
        // if both did not print it would be ("" + "" || i) ==> ("" || i)
        // since "" is false it would print i
        // div.innerHTML += (i%3? "": "Hee") + (i%5? "": " Haw") || i ;
        // div.innerHTML += "<br>";
    }
}