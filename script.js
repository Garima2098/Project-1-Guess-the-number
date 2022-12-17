'use strict';

let secretnumber=Math.floor(Math.random()*20)+1;


let  score=20;
let highScore=0;
document.querySelector('.check').addEventListener('click',function(){
     const guess=document.querySelector('.guess').value
console.log(guess)
console.log(typeof guess)
console.log(document.querySelector('.message').textContent='You guessed a number')
// when there is no input


if(!guess)
 {
    console.log(document.querySelector('.message').textContent='No number')
 
   }

 // when the player wins
       else if(guess==secretnumber)
                    {
                    document.querySelector('.message').textContent='Correct Number'
                    document.querySelector('body').style.backgroundColor='#60b347';
                    document.querySelector('.number').style.width='30rem';
                    document.querySelector('.number').textContent=secretnumber;
                        if(score>highScore)
                               {
                                highScore=score;
                                document.querySelector('.highscore').textContent=highScore
                                }
                    }


        else if(guess>secretnumber)
                   {
                    if(score>1)
                    {   
                    document.querySelector('.message').textContent='Try lesser number'
                    score--;
                    document.querySelector('.score').textContent=score
                    }
                    else{
                    document.querySelector('.message').textContent='You lost the game'
                    }
                   }
                else if(guess<secretnumber)
                {


                if(score>1)
                {   
                document.querySelector('.message').textContent='Try greater number'
                score--; 
                document.querySelector('.score').textContent=score
                }
                else{
                document.querySelector('.message').textContent='You lost the game'
                }

                }
                })

document.querySelector('.again').addEventListener('click',function(){
   score=20;
   secretnumber=Math.floor(Math.random()*20)+1;
   document.querySelector('.message').textContent='Start guessing...';
   document.querySelector('.score').textContent=score
   document.querySelector('.number').textContent='?'
   document.querySelector('.guess').value=''
   document.querySelector('body').style.backgroundColor='#222';
   document.querySelector('.number').style.width='15rem';
   
   })

 



   