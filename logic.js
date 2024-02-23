let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScore = document.querySelector("#user");
const compScore = document.querySelector("#comp");

const genComp = () =>{
    const options = ["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    // console.log("Game is Draw");
    msg.innerText = "Game was drawn. Play again.";
    msg.style.backgroundColor = "#4a2040";
};

const showWinner = (userWin,userC,compChoice) => {
    if(userWin){
        user++;
        userScore.innerText = user;  
        // console.log("You Win! :D");
        msg.innerText = `You Win! your ${userC} beats ${compChoice} :D`;
        msg.style.backgroundColor = "green";
    }else{
        comp++;
        compScore.innerText = comp; 
        // console.log("You Lose! :(");
        msg.innerText =`You Lose, ${compChoice} beats ${userC} :(`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userC) => {
    // console.log("user choice = ", userC);
    const compChoice = genComp();
    // console.log("computer choice = ", compChoice);
    
    if(userC === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userC === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userC === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userC,compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userC = choice.getAttribute("id")
        // console.log("choice was clicked - ", userC);
        playgame(userC);
    });
});