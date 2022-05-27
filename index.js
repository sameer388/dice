//First Image

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageSource1 = "images/dice" + randomNumber1 + ".png";
var firstImage = document.querySelector(".img1");
firstImage.setAttribute("src", imageSource1);


//Second Image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageSource2 = "images/dice" + randomNumber2 + ".png";
var secondImage = document.querySelector(".img2");
secondImage.setAttribute("src", imageSource2);


//Setting the winner
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "👑 Player1 Won";
}
else {
    document.querySelector("h1").innerHTML = "👑 Player2 Won";
}
