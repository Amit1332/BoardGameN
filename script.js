var score=0
function scoreShow(newscore){
    score=newscore
    document.querySelector("#scoreboard").textContent=score
}
function timeShow(time){
    
       setInterval(() => {
           if(time>0){
            time--
            document.querySelector("#timer").textContent=time
           }
           else{
       document.querySelector(".btm").innerHTML=`<h3>Game Over</h3><br><h6 >Your Score :${score}</h6>`

           }
          
           
        }, 1000);
        
    
    }
    



    //  OR
// function timeShow(time){
    
//    t= setInterval(() => {
//         time--
        
//        document.querySelector("#timer").textContent=time
       
//     }, 1000);
//     setTimeout(() => {
//        clearInterval(t)  
//        document.querySelector(".btm").innerHTML=`<h1>Game Over</h1><br><h6 style="margin-top:-100px">Your Score :${score}</h6>`


//     },30000 );

// }



function hitShow(){
    hitter=Math.floor(Math.random()*10)
   var b= document.querySelector("#hitted").textContent=hitter
}




function bubbly(){
clutter=""
for (let i = 0; i < 91; i++) {
    rn = Math.floor(Math.random()*10)
    clutter +=`<div class="circle">${rn}</div>`
    
}
document.querySelector(".btm").innerHTML=clutter
}


document.querySelector(".btm").addEventListener("click",function(dets){
if(Number(dets.target.textContent)===hitter){
 document.querySelector("#scoreboard").textContent=score
 ans =Number(scoreShow(score+=10))
 hitShow()
 bubbly()

}
else{
    alert("You are entering wrong key")
}
})

    // OR

    // document.querySelector(".btm").addEventListener("click",function(dets){
    //     if(dets.target.textContent===document.querySelector("#hitted").textContent){
    //      document.querySelector("#scoreboard").textContent= Number(dets.target.textContent)
    //      ans =Number(scoreShow(score+=10))
    //      hitShow()
    //      bubbly()
        
    //     }
    //     else{
    //         alert("You are entering wrong key")
    //     }
    //     })
        

bubbly()
scoreShow(score)
timeShow(30)
hitShow()
