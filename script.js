//Global Constants
const nextClueWaitTime = 1000; // ow long to wait before starting playback of the clue sequence
const numGameButtons = 4;

//Global Variables
var cluePauseTime = 333; //how long to pause in between clues
var clueHoldTime = 1000; //how long to hold each clue
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var strikesRemaining = 3; //user starts with 3 strikes before they lose the game
var sec = 15;

// Generates a random pattern
function generateRandomPattern() {
  let patternLength = pattern.length
  // Loop through the pattern array
  for (let i=0;i<patternLength;i++) {
    // Generate a random integer between 1 and 4, inclusive
    var currTone = Math.floor(Math.random() * numGameButtons) + 1; 
    // Assign integer to array position in pattern
    pattern[i] = currTone;
  }
}

function startGame() {
  //initialize game variables
  clueHoldTime = 1000;
  cluePauseTime = 333;
  progress = 0;
  gamePlaying = true;
  strikesRemaining = 3;
  document.getElementById("remainingStrikes").innerHTML = strikesRemaining;
  document.getElementById("timer").innerHTML = "15";
  sec = 15;
  //resetTimer();
  
  // swap the Start and Stop buttons
  generateRandomPattern();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("playerStrikes").classList.remove("hidden");
  playClueSequence()
}

function stopGame() {
  //set gamePlaying to false as the game is now over
  gamePlaying = false;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("playerStrikes").classList.add("hidden");
}

function resetTimer() {
  document.getElementById("timer").innerHTML = "15";
  sec = 15;
  if (sec <-)
  let myInterval = setInterval("countDown()",1000);
  if (sec <= 0) {
    sec = 0;
    let newSec = "0";
    document.getElementById("timer").innerHTML = newSec;
    clearInterval(myInterval);
  }
}

function countDown() {
  sec -= 1;
  let newSec = sec.toString();

  document.getElementById("timer").innerHTML = newSec;
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
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

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
    
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++) { // for each clue that is revealed so far
    resetTimer();
    //ountDown();
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
    clueHoldTime -= 20;
    cluePauseTime -= 1;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!")
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  
  if (sec <= 0) {
    loseGame();
  }
  
  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        // GAME OVER: WIN!
        winGame();
      }
      else {
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }
    else {
      guessCounter++;
    }
  }else {
      //Guess was incorrect
      strikesRemaining--;
      document.getElementById("remainingStrikes").innerHTML = strikesRemaining;
      // If the user has made three mistakes they lose
      if (strikesRemaining <= 0) {
        // GAME OVER: LOSE!
        loseGame(); 
      }
    }
  }