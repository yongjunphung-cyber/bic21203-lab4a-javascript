const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkInput(){
    const value = userInput.value.trim();
    if(value == ""){
        result.textContent = "Please enter a valid number!";
    }
    else if(isNaN(value)){
        result.textContent = "Please enter a valid number!";
    }
    else{
        const number = Number(value);
        if(number<10){
            result.textContent = "The number is lower than 10";
        }
        else if(number>10){
            result.textContent = "The number is higher than 10";
        }
        else{
            result.textContent = "The number is equal to 10";
        }
    }
}

checkBtn.addEventListener("click", checkInput);