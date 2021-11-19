var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1-6

var randomDiceImage = "Dice" + randomNumber1 + ".png"; // generates Dice1.png-Dice6.png
var randomImageSource = "./images/" + randomDiceImage; // generates ./images/Dice1.png-./Dices6.png
var Image1 = document.querySelectorAll("img")[0]; // for image 1
Image1.setAttribute("src", randomImageSource);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var randomDiceImage2 = "Dice" + randomNumber2 + ".png";
var randomImageSource2 = "./images/" + randomDiceImage2;
var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src", randomImageSource2);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🎈Player 1 Wins!!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = " 🎈Player 2 Wins!!"
} else {
    document.querySelector("h1").innerHTML = " 🎃DRAW!!"
}