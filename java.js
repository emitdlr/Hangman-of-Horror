window.onload = function () {

  var gethint ;          // Word getHint
  var word ;              // Selected word
  var hint ;             // Guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'

 // Get elements
  var gethint = document.getElementById("gethint");
  var showhint = document.getElementById("hint");

  // Create guesses ul
  result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

  // create alphabet ul
  var key = function () {
    myButtons = document.getElementById('kdy');
    letters = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

 // Show lives
 comments = function () {
  showLives.innerHTML = "You have " + lives + " lives";
  if (lives < 1) {
    showLives.innerHTML = "Game Over";
  }
  for (var i = 0; i < guesses.length; i++) {
    if (counter + space === guesses.length) {
      showLives.innerHTML = "You Win!";
    }
  }
}

    // Animate man
var animate = function () {
  var drawMe = lives ;
  drawArray[drawMe]();
}


 // Hangman
canvas =  function(){

  myStickman = document.getElementById("stickman");
  context = myStickman.getContext('2d');
  context.beginPath();
  context.strokeStyle = "#fff";
  context.lineWidth = 2;
};

  head = function(){
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
  }
  
draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
  
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke(); 
}

 frame1 = function() {
   draw (0, 150, 150, 150);
 };
 
 frame2 = function() {
   draw (10, 0, 10, 600);
 };

 frame3 = function() {
   draw (0, 5, 70, 5);
 };

 frame4 = function() {
   draw (60, 5, 60, 15);
 };

 torso = function() {
   draw (60, 36, 60, 70);
 };

 rightArm = function() {
   draw (60, 46, 100, 50);
 };

 leftArm = function() {
   draw (60, 46, 20, 50);
 };

 rightLeg = function() {
   draw (60, 70, 100, 100);
 };

 leftLeg = function() {
   draw (60, 70, 20, 100);
 };

drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


// OnClick Function
 check = function () {
  list.onclick = function () {
    var hint = (this.innerHTML);
    this.setAttribute("class", "active");
    this.onclick = null;
    for (var i = 0; i < word.length; i++) {
      if (word[i] === hint) {
        hint[i].innerHTML = hint;
        counter += 1;
      } 
    }
    var j = (word.indexOf(guess));
    if (j === -1) {
      lives -= 1;
      comments();
      animate();
    } else {
      comments();
    }
  }
}

  
// Play
play = function () {
  answers = [
      "alien", "texas chainsaw massacre", "halloween", "the omen", "fright night", "the conjuring", "The exorcist", "the shining", "dracula", "suspiria";
  word = word.replace(/\s/g, "-");
  console.log(word);
  buttons();

  guesses = [ ];
  lives = 10;
  counter = 0;
  space = 0;
  result();
  comments();
  selectCat();
  canvas();
}

play();

// Hint

  hint.onclick = function() {

    hint = [
      ["In space, no one can hear you scream", "Leatherface", "Michael Myers", "The child from hell", "A vampire named Jerry", "Spooks in the farmhouse", "A girl possessed by Satan", "Here's Johnny!", "The most famous vampire", "Stylish 70's Italian horror"];

  var catagoryIndex = categories.indexOf(chosenCategory);
  var hintIndex = chosenCategory.indexOf(word);
  showClue.innerHTML = "Clue: - " +  hint [catagoryIndex][hintIndex];
};

 // Reset

document.getElementById('reset').onclick = function() {
  correct.parentNode.removeChild(correct);
  letters.parentNode.removeChild(letters);
  showClue.innerHTML = "";
  context.clearRect(0, 0, 400, 400);
  play();
}