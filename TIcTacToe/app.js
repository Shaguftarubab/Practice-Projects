let boxes = document.querySelectorAll(".box"); // Changed selector to target a button element
let turnO=true;
let msg=document.querySelector(".msg");
let msgContainer=document.querySelector(".winner_msg");
let resetGameBtn=document.querySelector(".reset-btn");
let newGame=document.querySelector(".newgamebtn");
let count=0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(turnO){
    box.innerText="X";
    box.style.color="black";
    turnO=false;}
    else{
    box.innerText="O";
    turnO=true;
    box.style.color="white";
  }
    box.disabled=true;
    count++;

    checkWinner();
    if(count>8){
      showTie();
    }
  });
});
const winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
       showWinner(pos1Val);
      count=0;}  
    }

  } 
 
}

const showTie=()=>{
  msg.innerText=`There is Tie Between You!!`;
  msgContainer.classList.remove("hide");
}
const showWinner=(winner)=>{

  msg.innerText=`Congratulations Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();

}
const disableBoxes=()=>{
  for(box of boxes){
    box.disabled=true;
  };
};
const enableBoxes=()=>{
  for(box of boxes){
    box.disabled=false;
    msgContainer.classList.add("hide");
  };
};
const reset=()=>{
  for(box of boxes){

    box.innerText="";
    enableBoxes();
  }
  count=0;
;

};
resetGameBtn.addEventListener("click",(reset));
newGame.addEventListener("click",(reset));
