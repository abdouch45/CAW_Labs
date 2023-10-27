
const start=document.getElementById("start");
const end=document.getElementById("end");
const h2=document.getElementById("status");
let gameGoing=1;
const boundaries = document.getElementsByClassName("boundary");
const rect = start.getBoundingClientRect();
const x= rect.left;
const bd=document.getElementsByTagName("body");

function checkCheating(event) {
  let mouse = event.clientX;
  console.log(x);
  if(x>mouse &&( gameGoing===2 )){
    for(var i = 0; i < boundaries.length; i++){
      boundaries[i].style.backgroundColor = "red";
      gameGoing=3;
 h2.innerText="dont cheat again:)";
   }
  }
}

document.addEventListener("mousemove",(event)=>checkCheating(event));

function init(){
  gameGoing=2;
  for(var i = 0; i < boundaries.length; i++){
    boundaries[i].style.backgroundColor = "#eeeeee";
 }
 h2.innerText="game on going";

}

function touchWall(){
  if(gameGoing===2){
  for(var i = 0; i < boundaries.length; i++){
    boundaries[i].style.backgroundColor = "red";
 }
 gameGoing=3;
 h2.innerText="you lost to play again click on S";}
}
start.addEventListener("click",init);

start.addEventListener("mouseover", () => {
    if(gameGoing===1){
        gameGoing=2;
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
  }
})




