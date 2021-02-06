
// 
// document.querySelector(".message").textContent 
// document.querySelector(".score").textContent
// document.querySelector(".highscore").textContent
// 
document.querySelector(".tryagain").addEventListener("click", function(){
   checkingGameLogic()
})
let randomNumber = Math.trunc(Math.random()* 20)+ 1;
let score  = 20;
document.querySelector(".check").addEventListener("click",checkingGameLogic);
let highScore = 0
function checkingGameLogic(event){
     event.preventDefault()
     //Random Number generator
    let guessNumber = Number(document.querySelector(".guessnum").value);

     // when there is no input
    if(!guessNumber){
        document.querySelector(".message").textContent = `No Number!`
        //when players win 
     }else if (guessNumber === randomNumber){
        document.querySelector(".message").textContent = `Wow!!!🙌🙌🙌`
        document.querySelector(".number").textContent = randomNumber;
        highScore++
        document.querySelector(".highscore").textContent = `Highest Score: ${highScore}`
        document.querySelector("*").style.backgroundColor = "green"
        // when the input is low 
     }else if (guessNumber < randomNumber){
        if(score >1){
         document.querySelector(".message").textContent = "Too Low!"
         score--;
         document.querySelector(".score").textContent = `score: ${score}`

        }else{
         document.querySelector(".message").textContent = "You loose the game!!"
         document.querySelector(".score").textContent = 0;
        }
       //when the input is high
     }else if (guessNumber > randomNumber){
        if(score >1){
         document.querySelector(".message").textContent = "Too High!"
         score--;
         document.querySelector(".score").textContent = `score: ${score}`

        }else{
         document.querySelector(".message").textContent = "You loose the game!!"
         document.querySelector(".score").textContent = 0;
        }
       
     }
    
}





    

