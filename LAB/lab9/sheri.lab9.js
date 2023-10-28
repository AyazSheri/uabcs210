function playGame() {
  let isValidInput = false;
  let userChoice;
  while (!isValidInput) {
    userChoice = prompt(
      'Enter your choice (Rock, Paper, or Scissors):'
    ).toLowerCase();
    if (['rock', 'paper', 'scissors'].includes(userChoice)) {
      isValidInput = true;
    } else {
      alert('Invalid input! Please enter Rock, Paper, or Scissors.');
    }
  }

  const computerChoice = getComputerChoice();
  console.log(`User chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  const result = determineWinner(userChoice, computerChoice);
  console.log(result);

  if (confirm('Do you want to play again?')) {
    playGame();
  }
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    return 'User wins!';
  } else {
    return 'Computer wins!';
  }
}
