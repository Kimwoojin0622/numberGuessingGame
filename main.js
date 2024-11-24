let submitButton = document.getElementById("submit-button");
let users = document.getElementById("user-number");
let answerArea = document.getElementById("answer-area");
let userChance = document.getElementById("user-chance");
let resetButton = document.getElementById("reset-button");
let randomNumber = 0;
let chances = 7; // 7번의 기회를 줌
let gameEnd = false;
let user_value_entered = [];


submitButton.addEventListener("click",game);
resetButton.addEventListener("click", reset);
users.addEventListener("focus", function(){users.value = ""});


function randomNumberFunc() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber); // 정답을 확인하기 위해서
}

randomNumberFunc();

function game() {
  let userNumber = users.value;
  // console.log(userNumber)
  if (userNumber > 100 | userNumber < 1){
    answerArea.textContent = "not a valid value";
    return;
  }
  if (user_value_entered.includes(userNumber)){
    answerArea.textContent = "You have entered the value you entered. 😁";
    return;
  }

  user_value_entered.push(userNumber);
  console.log(user_value_entered);

  chances --;
  userChance.textContent = `🚩 chances : ${chances}`

  if (userNumber > randomNumber) {
    answerArea.textContent = "DOWN ❗❕";
  } else if(userNumber < randomNumber) {
    answerArea.textContent = "UP ❗❕";
  } else if(userNumber == randomNumber) {
    answerArea.textContent = "Correct ⭕❗❕";
    submitButton.disabled = true
    gameEnd = true;
  }

  if (chances <= 0) {
    answerArea.textContent = `Game Over 😥 (ans:${randomNumber})`
    submitButton.disabled = true
    gameEnd = true
  }
  if (gameEnd == true) {
    return;
  }
}

function reset() {
  users.value = "";

  for (let i=0;i<user_value_entered.length+i;i++){
    user_value_entered.pop();
    console.log(user_value_entered)
  }

  randomNumberFunc();

  chances = 7;
  userChance.textContent = `🚩 chances : ${chances}`;

  answerArea.textContent = "Random numbers were generated"
  
  submitButton.disabled = false;
  // user_value_entered = [];
}



