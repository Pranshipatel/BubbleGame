function bubblechange(){
    var copy = "";
for(var i=0;i<=113;i++){
    var random = Math.floor(Math.random()*10);
    copy += `<div class="bubble">${random}</div>`;
}
 document.querySelector("#panel-bottom").innerHTML = copy;
}
bubblechange();
var timer = 60;
function Timerchange(){
var timerint = setInterval(function(){
if(timer>0){
    timer--;
    document.querySelector("#timer").textContent = timer;
}
else{
    clearInterval(timerint);
    // document.querySelector("#main img").style.display = "block";
    document.querySelector("#panel-bottom").innerHTML = "Game over";
    document.querySelector("#panel-top").style.backgroundColor = "#88AB8E"
    document.querySelector("#panel-bottom").style.backgroundColor = "#88AB8E"
    // document.querySelector("#panel-bottom #finalscore").style.display = "block"
}
},1000)

}

var randomhit =0;
function hitchange(){
 randomhit = Math.floor(Math.random()*10);
 document.querySelector("#hit").innerHTML = randomhit;
}



var score = 0;
var ptm = document.querySelector("#panel-bottom");
ptm.addEventListener("click",function(dets){
 var clickednum =Number(dets.target.textContent);
if (clickednum ===  randomhit){
    // function increaseScore(){
        
        // score =0;
        score += 10;
        document.querySelector("#scoreval").textContent = score;
        hitchange();
        bubblechange();
    // }
}
})
Timerchange();
hitchange();
increaseScore();
