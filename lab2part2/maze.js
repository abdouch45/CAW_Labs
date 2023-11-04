
const start=document.getElementById("start");
const end=document.getElementById("end");
const h2=document.getElementById("status");
const timer=document.getElementById('timer');
const counter=document.getElementById("counter");
let losses=0;
let wins=0;
let  timerId;
let gameGoing=1;
const boundaries = document.getElementsByClassName("boundary");
const rect = start.getBoundingClientRect();
const x= rect.left;

function checkCheating(event) {
  let mouse = event.clientX;
  console.log(x);
  if(x>mouse &&( gameGoing===2 )){
    for(var i = 0; i < boundaries.length; i++){
      boundaries[i].style.backgroundColor = "red";
      gameGoing=3;
   }
   clearInterval(timerId);
   h2.innerText="dont cheat again:)";
   losses++;
   counter.innerText=`Wins:${wins} losses:${losses}`;
  }
}

document.addEventListener("mousemove",(event)=>checkCheating(event));

function init(){
  gameGoing=2;
  timer.innerText = "60";
  for(var i = 0; i < boundaries.length; i++){
    boundaries[i].style.backgroundColor = "#eeeeee";
 }
 h2.innerText="game on going";
 const timerInterval = setInterval(() => {
  timer.innerText -= 1;

  if (timer.innerText === "0") {
    clearInterval(timerInterval);
    touchWall();
  }
}, 1000);

 timerId = timerInterval;
}

function touchWall(){
  if(gameGoing===2){
  for(var i = 0; i < boundaries.length; i++){
    boundaries[i].style.backgroundColor = "red";
 }
 gameGoing=3;
 losses++;
 counter.innerText=`Wins:${wins} losses:${losses}`;
 clearInterval(timerId);
 h2.innerText="you lost to play again click on S";}
}
start.addEventListener("click",init);

start.addEventListener("mouseover", () => {
    if(gameGoing===1){
        gameGoing=2;
        const timerInterval = setInterval(() => {
          timer.innerText -= 1;
        
          if (timer.innerText === "0") {
            clearInterval(timerInterval);
            touchWall();
          }
        }, 1000);
        
         timerId = timerInterval;
        h2.innerText="game on going";
        for (let i = 0; i < boundaries.length; i++) {
          const boundary = boundaries[i];
          boundary.addEventListener("mouseover",touchWall);
        }
       }
});
end.addEventListener("mouseover",()=>{
  if(gameGoing===2){
    gameGoing=3;
    h2.innerText="you Won to play again click on S";
    wins++;
   counter.innerText=`Wins:${wins} losses:${losses}`;
   clearInterval(timerId);
  }
})




