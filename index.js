// ******dice1*****


var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var random1 = "dice"+randomnumber1+ ".png";
var img1 = "images/"+random1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",img1);


// ******dice2*****


var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var random2 = "dice"+randomnumber2+ ".png";
var img2 = "images/"+random2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",img2);



// *****conditions****


if(randomnumber1>randomnumber2){
 document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";

}
else if(randomnumber2>randomnumber1){
 document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";

}
else if(randomnumber1===randomnumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
