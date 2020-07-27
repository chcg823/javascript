const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === ('rock' || 'paper' || 'scissors') ){
    return userInput;
  }else{
    console.log('Error');
  }
};
function getComputerChoice(){
  let c = Math.floor(Math.random()*3);
  let ch = '';
  switch(c){
    case 0:
      ch = 'rock';
      break;
    case 1:
      ch = 'paper';
      break;
    case 2:
      ch = 'scissors';
      break;
  }
  return ch;
}
function determineWinner(userChoice, getComputerChoice){
  if(userChoice === getComputerChoice){
    return 'tie';
  }
  if(userChoice === 'rock'){
    if(getComputerChoice === 'paper'){
      return 'Computer Won';
    }
    else{
      return 'User Won';
    }
  }
  if(userChoice === 'paper'){
    if(getComputerChoice === 'scissors'){
      return 'Computer Won';
    }else{
      return 'User Won';
    }
  }
  if(userChoice === 'scissors'){
    if(getComputerChoice === 'paper'){
      return 'Computer Won';
    }else{
      return 'User Won';
    }
  }
  return winner;
}
function playGame(){
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log('User Choice: '+userChoice+'\nComputer Choice: '+computerChoice);
  console.log('\nResult: '+determineWinner(userChoice, computerChoice));
}

playGame();
