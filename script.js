const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const Bird = document.getElementById("bird");
const Stone = document.getElementById("stone");
const Blud = document.getElementById("blud");

let count_game = 0;
setCounter(count_game);

document.addEventListener("keydown", function(event) {
    jump();
});

function jump(){
    if (dino.classList != "jump"){
        dino.classList.add("jump")
        count_game += 1;
        setCounter(count_game);

        birdOn();
        stoneOn();
    }
    setTimeout(function(){
        dino.classList.remove("jump")
    }, 300)
    
} 
function birdOn(){
    if (count_game>= 5){
        Bird.classList.add("birdGoose")
    }
    setTimeout(function(){
        //din0.classList.remove("birdGoose")
    }, 100)
    
} 
function stoneOn(){
    if (count_game>15) alert("You win!");
    if (count_game>= 10){
        Stone.classList.add("stone")
    }
    setTimeout(function(){
        //Stone.classList.remove("stone")
    }, 100)
    
} 

function bludOn(){
        Blud.classList.add("blud")
    setTimeout(function(){
        Blud.classList.remove("blud")
    }, 350)
    
}  

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft< 30 && cactusLeft >0 && dinoTop >= 140){
        bludOn();
        setCounter(0);
        count_game = 0; 
    }
})

function setCounter(count){
    document.getElementById("counter__count").innerHTML = count;
}