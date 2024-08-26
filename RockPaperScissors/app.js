let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const showUserScore=document.querySelector("#user-score");
const showCompScore=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];

}
showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        showUserScore.innerText=userscore;
        msg.textContent=`You Won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#202c39";
    }
    else{
        compscore++;
        showCompScore.innerText=compscore;
        msg.textContent=`Computer Won! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="#202c39";
    }
    
}
const drawGame=()=>{
    msg.textContent="It's a tie!";
    msg.style.backgroundColor="#202c39";

}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //scissors,rock
            userWin=compChoice==="scissors"?false:true;

        }
        else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;

        }
        showWinner(userWin,userChoice,compChoice);
    }
}



choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });
});
