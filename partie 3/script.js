const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
const numberInput = document.getElementById("numberInput");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");

checkButton.addEventListener("click", function() {
 const userNumber = Number(numberInput.value);
 if (isNaN(userNumber)) {
 result.textContent = "Veuillez entrer un nombre valide.";
 } else if (userNumber < min || userNumber > max) {
 result.textContent = `Le nombre doit être compris entre ${min} et ${max}.`;
 } else {
 if (userNumber < randomNumber) {
 result.textContent = "Trop petit !";
 } else if (userNumber > randomNumber) {
 result.textContent = "Trop grand !";
 } else {
 result.textContent = "Bravo, vous avez deviné le nombre !";
 }
 }
});