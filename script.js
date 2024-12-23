let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara= document.querySelector("#user-Score");
const compScorePara= document.querySelector("#computer-Score");
const gencompChoice = () =>{
  const option = ["rock","paper","scissors"];
  const randIndx = Math.floor(Math.random()*3);
  return option[randIndx];
}
const showWinner=(userWin ,userChoice ,compChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("user Win");
    msg.innerText = `you win! Your ${userChoice} beats ${compChoice} `;
    msg.style.backgroundColor = "green";
  }else{
    compScore++;
    compScorePara.innerText=compScore;
    console.log("computer win");
    msg.innerText = `you lost. ${compChoice} beats your ${userChoice} `;
    msg.style.backgroundColor = "red";
  }

}
//for draw condition 
const drawGame = ()=>{
  console.log("game was draw");
  msg.innerText = "Game was draw. Play Again";
  msg.style.backgroundColor = "black";
}

const playGame = (userChoice) =>{
    console.log(" user choice is " , userChoice);
    
    //computer choice
    const compChoice=gencompChoice();
    console.log("computer choice is ", compChoice);


    if(userChoice === compChoice){
      //draw game condtion
      drawGame();
    } else {
      let userWin =true;
      if(userChoice === "rock"){
       userWin = compChoice === "paper" ? false:true;

      }else if(userChoice === "paper"){
        userWin=compChoice ==="scissors" ? false:true;


      }else{
       userWin = compChoice === "rock" ? false:true;

      }
      showWinner(userWin,userChoice,compChoice);

    }

};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });