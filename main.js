let dice1 = document.querySelector('#dice1');
let dice2 = document.querySelector('#dice2');

function rollDice(diceEle) {
  let newValue = Math.floor(Math.random() * 6) + 1;
  diceEle.src = `images/dice${newValue}.png`;
}

function handleDiceClick(event) {
  rollDice(event.target);
}

function lol() {
  rollDice(dice1);
  rollDice(dice2);
}
