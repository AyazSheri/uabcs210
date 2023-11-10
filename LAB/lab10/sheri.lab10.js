document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.choice-button');
  const resultDiv = document.getElementById('result');

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      playGame(this.id);
    });
  });

  function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    console.log(`User chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    const result = determineWinner(userChoice, computerChoice);
    console.log(result);
    resultDiv.textContent = `User chose: ${userChoice}, Computer chose: ${computerChoice}. ${result}`;
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
});
