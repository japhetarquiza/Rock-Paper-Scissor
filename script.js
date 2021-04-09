function game() {
    
const playerSelection = (prompt('Typer rock,paper or scissor')).toLowerCase();
const computerSelection = computerPlay();

function computerPlay(){
    let x = Math.floor(Math.random()*3);

    if (x===0){
        return 'rock';
    }
    else if(x===1){
        return 'paper';
    }
    else {
        return 'scissor';
    }
    
}

console.log(computerSelection);


function playRound(playerSelection,computerSelection){

        if (playerSelection=='paper' && computerSelection=='scissor'){
        return ('You lose! Scissor beats the paper!') ;
    }
    else if (playerSelection==='paper' && computerSelection==='rock') {
        return ('You win! Paper beats the rock!') ;
    } else if(playerSelection==='scissor' && computerSelection==='rock'){
        return ('You lose! Rock beats the scissor!') ;
    }
    else if (playerSelection==='scissor' && computerSelection==='paper'){
        return ('You win! Scissor beats the paper!') ;
    }
    else if (playerSelection==='rock' && computerSelection==='scissor') {
        return ('You win!  Rock beats the scissor!') ;
    } else if (playerSelection==='rock' && computerSelection==='paper'){
        return ('You lose! Paper beats the rock!') ;
    }
    else{
        return ('Its a tie!') ;
    }
}

console.log(playRound(playerSelection,computerSelection)); }

//game();

for(let i=1;i<=5;i++){
game();
}





