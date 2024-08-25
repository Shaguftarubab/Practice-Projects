let elem=document.querySelectorAll(".elem");
elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[2].style.opacity=1;

    })
    val.addEventListener("mousemove",(axis)=>{
        val.childNodes[2].style.left=axis.x+"px";
        val.childNodes[2].style.top=axis.y+"px";
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[2].style.opacity=0;

    })
  
})
