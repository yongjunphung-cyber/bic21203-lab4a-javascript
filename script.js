//Select paragraph and button
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

//Function to change the text
function changeMessage(){
    message.textContent = "Hello there!";
}

//Event listener
changeBtn.addEventListener("click", changeMessage);