var randomNumber1 = Math.floor(Math.random()*6) + 1; //Calculates a random number between 1 and 6

var randomNumber2 = Math.floor(Math.random()*6) + 1;


console.log(randomNumber1);

var imgElement1 = document.querySelector(".img1"); //Selects the first image element

imgElement1.setAttribute("src", `./images/dice${randomNumber1}.png`); //Changes the source of the image element to the corresponding dice image

var imgElement2 = document.querySelector(".img2"); 

imgElement2.setAttribute("src", `./images/dice${randomNumber2}.png`); 

var whoWins = document.querySelector("h1"); //Selects the h1 element

if(randomNumber1 > randomNumber2){
    whoWins.innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    whoWins.innerHTML = "Player 2 Wins! 🚩";
}
else{
    whoWins.innerHTML = "Draw!";
}
//Changes the text of the h1 element depending on the outcome of the game