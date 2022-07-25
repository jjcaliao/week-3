//rock paper scissors console game

const choices = Array("rock", "paper", "scissors");
let cscore = 0;
let pscore = 0;

function computerPlay(){ //randomly generates choice
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function round(playerChoice, computerChoice){ //generates outcomes for each rounds and adds to the score
    if(playerChoice == computerChoice){
        return "Tie!";
    }
    else if(playerChoice == "rock"){
        if(computerChoice == "paper"){
            cscore ++;
            return "Paper beats rock. You lose!";
        }
        else{
            pscore ++;
            return "Rock beats scissors. You win!";
        }
    }
    else if(playerChoice == "paper"){
        if(computerChoice == "scissors"){
            cscore ++;
            return "Scissors beats paper. You lose!";
        }
        else{
            pscore ++;
            return "Paper beats rock. You win!";
        }
    }
    else if(playerChoice == "scissors"){
        if(computerChoice == "rock"){
            cscore ++;
            return "Rock beats scissors. You lose!";
        }
        else{
            pscore ++;
            return "Scissors beats paper. You win!";
        }
    }
    else{
        return "Invalid input. Either select 'rock', 'paper' or 'scissors'.";
    }
}

//var c = "rock";
//console.log(round(c, computerPlay()));

function game(){ //generates 5 rounds
    let i = 0;
    while(i<5){
        let playerc = window.prompt("rock, paper or scissors?").toLowerCase();
        let computerc = computerPlay();
        round(playerc, computerc);
        console.log(round(playerc, computerc));
        console.log("Computer: " + cscore + " You: " + pscore);
        if (round(playerc, computerc) == "Invalid input. Either select 'rock', 'paper' or 'scissors'."){
            i = i;
        }
        else{
            i++;
        }
    }
    if (cscore > pscore){
        console.log("You lose!");
    }
    else if(pscore > cscore){
        console.log("You win!");
    }
}

game();