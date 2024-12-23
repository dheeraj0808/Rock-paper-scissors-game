let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const gencompChoice = () =>{
  const option = ["rock","paper","ciessor"];
  const randIndx = Math.floor(Math.random()*3);
  return option[randIndx];
}
const showWinner=(userWin)=>{
  if(userWin){
    console.log("user Win");
  }else{
    console.log("computer win")
  }

}

//for draw condition 
const drawGame = ()=>{
  console.log("game was draw");
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
        userWin=compChoice ==="siessors" ? false:true;


      }else{
       userWin = compChoice === "rock" ? false:true;

      }
      showWinner(userWin);

    }

};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });