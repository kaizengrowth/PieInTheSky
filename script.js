//******** Game Data ********//
let state = {
  unicyclist: {
    x: 0,
    height: 20
  }
}

let plates = new Array(10);
let plateInterval = 5000;

let score = 0;
let lives = 3;
let level = 1;
let levelCounter = 0;

//******** Keyboard Controller ********//

$(document).ready(function(){
  console.log( "ready!" );

  function right() {
    $('#unicyclist').velocity({
      left: '+=10px'
    }, 0.2);
  };

  function left() {
    $('#unicyclist').velocity({
      left: '-=10px'
    }, 0.2);
  };

  document.addEventListener("keydown", function(event) {
    var x = event.keyCode;
    switch (x) {
      case(37):
        left();
        break;
      case(39):
        right();
        break;
      default:
        alert('Press arrow keys to move unicycle juggler.');
    }
  });

  //******** Display Game Stats ********//

  $('#level').text('Level: ' + level);
  $('#score').text('Score: ' + score);
  $('#lives').text('Lives: ' + lives);


  //******** Create New Plates ********//

  function getPlateX() {
    let position = Math.floor(Math.random() * 5);
    let x = position * 10;
    return x;
  };

  function Plate (x) {
    this.x = x;
    this.y = 0;
  };

  function createPlate(x) {
    let newPlate = $(`<div class = 'plates'></div>`);
    $('#stage').append(newPlate);
    newPlate.css('left', x+'vw');

    let animate = setInterval(function() {
      let plateBottom = parseInt(newPlate.css('top')) + 10;
      let plateX = parseInt(newPlate.css('left'));
      let unicyclistHeight = parseInt($('#unicyclist').css('top'));
      let unicyclistX = parseInt($('#unicyclist').css('left'));

      // Check if the score is below the number required to go on to next level.
      // If the score is high enough to clear the level, then remove plates from
      //stage and transition to the next level.
      if (levelCounter >= 5) {
        level++;
        levelCounter = 0;
        plateInterval -= 1000; //Speed up the rate of falling plates in next level.
        $('.plates').remove();
        alert('next Level');
        $('#level').text('Level: ' + level);
        $('#unicyclist').css('height', (parseInt($('#unicyclist').css('height', '100px'))));
        clearInterval(animate);
      }
      else if (lives <= 0) {
        console.log ('game over!');
        $('.plates').remove();
        $('#unicyclist').remove();
      }
      else if ((Math.abs(plateBottom - unicyclistHeight) <= 25) && (Math.abs(plateX - unicyclistX) <= 5) ){ //Range of acceptable target.
        console.log('catch');
        newPlate.remove();
        $('#unicyclist').css('height', (parseInt($('#unicyclist').css('height'))+30)+'px'); // Unicyclist adds plate to head.
// TO DO:
// Make unicyclist add plates rather than height.
        score++; // Increase the score by one plate.
        levelCounter++; // Increase the levelCounter (it takes 20 plates to clear each level.)
        $('#score').text('Score: ' + score); // Update score on window.
        clearInterval(animate);
      }
      else if (plateBottom >= 400) {
        console.log('break');
        lives--;
        $('#lives').text('Lives: ' + lives);
        clearInterval(animate);
      }
      else {
        console.log('no');
        newPlate.velocity({
          top: '+= 20px'
        }, 'linear');
      }
    }, 200);
  };

  function newPlate() {
    let x = getPlateX();
    createPlate(x);
    console.log(id);
    console.log(x);
  };

  setInterval(newPlate, plateInterval);

});



