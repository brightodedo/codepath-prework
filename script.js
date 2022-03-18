//Global Variables
//var pattern = [2,6,4,1,2,5,3,4]; //red, blue, green, violet, gold, maroon
var sound = "";
const stopTime = 1000;
var amount = 8;
var pattern = new Array(amount).fill(null);
const colMap = {
  1:"red",
  2:"blue",
  3: "green",
  4: "violet",
  5: "gold",
  6: "maroon"
}
var progress = 0;
var gamePlaying = false;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var decrementTime = 180/pattern.length * (1/amount);
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
var guessCounter = 0;
var mistake = 0;

var tonePlaying = false;
var volume = 0.5;

function startGame(){
  //initialize game variables
  amount = document.getElementById("len").value;
  pattern = new Array(amount).fill(null);
  design();
  mistake = 0;
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("len").disabled = true;
  playClueSequence();
}

function stopGame(){
  //end game
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("len").disabled = false;
}


const audioMap = {
  1: "bark",
  2: "boom",
  3: "moo",
  4: "shutter",
  5: "siren",
  6: "thunder"
}

function playTone(btn,len){ 
  sound = audioMap[btn];
  var reverb = document.getElementById(sound);
  reverb.currentTime = 0
  reverb.play();
  //context.resume()
  tonePlaying = true
  setTimeout(stopTone, stopTime)
}


function startTone(btn){
  if(!tonePlaying){
    sound = audioMap[btn];
    var audio = document.getElementById(sound);
    audio.currentTime =0
    audio.play();
  tonePlaying = true
  }
}

function stopTone(){
  var audio = document.getElementById(sound);
  audio.pause()
  
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(colMap[btn]);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,colMap[btn]);
  }
}
function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  decrementTime = 180/pattern.length + (1.5/amount);
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime; 
    delay += cluePauseTime;
    clueHoldTime -= decrementTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Congratulations! You won.");
}
function guess(btn){
  console.log("user guessed: "+btn);
  if(!gamePlaying){
    return;
  }
  else{
    if(btn != pattern[guessCounter]){
      mistake += 1;
      if (mistake == 3){
        loseGame();
      }
      else{
        progress++;
        if(progress >= amount){
          winGame();
        }
        else{
          playClueSequence();
        }
              }
    }
    else{
      if(guessCounter != progress){
        guessCounter++;
      }
      else{
        if(pattern.length-1 != progress){
          progress++;
          playClueSequence();
        }
        else{
          winGame();
        }
      }
    }
  }
}

function design(){
  for(let i =0; i< amount; i++){
    pattern[i] = Math.floor(Math.random() * 5) + 1;
  }
}