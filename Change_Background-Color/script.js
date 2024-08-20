const colors=["red","blue","purple","wheat","yellow","black","grey","green","pink","aqua"];
const btn=document.querySelector("button");
btn=addEventListener("click",()=>{
const ind=Math.floor(Math.random()*colors.length+1);
let canvas=document.querySelector("body");
canvas.style.backgroundColor=colors[ind];
});
