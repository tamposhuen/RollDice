var ranNum1 = Math.floor((Math.random() * 6) + 1);
var ranNum2 = Math.floor((Math.random() * 6) + 1);
document.getElementById("dice1").setAttribute("src", `images/dice${ranNum1}.png`);
document.getElementById("dice2").setAttribute("src", `images/dice${ranNum2}.png`);



if (ranNum1 > ranNum2) {
  document.querySelector("h1").innerText = "Player 1 Wins!"
} else if (ranNum1 < ranNum2) {
  document.querySelector("h1").innerText = "Player 2 Wins!"
} else {
  document.querySelector("h1").innerText = "Draw!"
}

