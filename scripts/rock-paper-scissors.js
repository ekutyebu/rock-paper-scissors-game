/*Scores*/
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

/*player move*/
function getHumanChoice() {
  let humanChoice = prompt('Type Either Rock, Paper or Scissors to Play: ');

  const computerChoice = getComputerChoice();

  let result = '';
  
  if (humanChoice === 'Rock') {
    if (computerChoice === 'Rock') {
      result = "Tie.";
    } else if (computerChoice === 'Paper') {
      result = 'You Lose.';
    } else if (computerChoice === 'Scissors') {
      result = 'You Win.';
    }
  }else if (humanChoice === 'Paper') {
    if (computerChoice === 'Rock') {
      result = "You Win.";
    } else if (computerChoice === 'Paper') {
      result = 'Tie.';
    } else if (computerChoice === 'Scissors') {
      result = 'You Lose.';
    }
  }else if (humanChoice === 'Scissors') {
    if (computerChoice === 'Rock') {
      result = "You Lose.";
    } else if (computerChoice === 'Paper') {
      result === 'You Win.';
    } else if (computerChoice === 'Scissors') {
      result = 'Tie.';
    }
  }
  if (result === 'You Win.') {
    score.wins += 1;
  } else if (result === 'You Lose.'){
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  console.log(score);

  console.log(computerChoice);

  console.log(result);
}
getHumanChoice();


/*computer move*/
function getComputerChoice() {
  let computerChoice = '';

  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerChoice = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = 'Paper';
  }else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerChoice = 'Scissors';
  }
  return computerChoice;
}
console.log(getComputerChoice());
