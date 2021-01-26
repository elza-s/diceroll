var randomNumber1 = Math.floor(Math.random()*6)+1;

var setImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", setImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var setImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", setImage2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins"
} else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩 "
} else {
  document.querySelector("h1").innerHTML = "Its a tie! "
}

