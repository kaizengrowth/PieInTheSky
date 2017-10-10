let state = {
  unicycler: {
    x: 0,
    height: 20
  }
}

let plates = new Array(10);
let plateInterval = 3000;

let score = 0;
let lives = 5;
let level = 1;
let levelCounter = 0;

// let questions = {
//   level1: {
//     question1: {
//       title: 'Chinese Circus v. American Circus',
//       question: 'What is the name of the Chinese village best known for acrobatics, where everyone, including old men and women tumble down the streets?'
//       optionA: 'Wuqiao',
//       optionB: 'Hebei',
//       optionC: 'Huaxi',
//       optionD: 'Wuhan',
//       answer: 'optionA'
//     },
//   },
//   level2: {

//   },
//   level3: {

//   },
//   level4: {

//   },
//   level5: {

//   }
// };

$(document).ready(function(){
  console.log( "ready!" );

  function right() {
    $('#unicycler').velocity({ //Following recommendations from John Bell, I am using Velocity.JS but the animation required is so brief that I am not making use of the special features of VelocityJS here.
      left: '+=10px'
    }, 0.2);
  };

  function left() {
    $('#unicycler').velocity({
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

  $('#level').text('Level: ' + level);
  $('#score').text('Score: ' + score);
  $('#lives').text('Lives: ' + lives);

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
      let unicyclerHeight = parseInt($('#unicycler').css('top'));
      let unicyclerX = parseInt($('#unicycler').css('left'));

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
        $('#unicycler').css('height', (parseInt($('#unicycler').css('height', '100px'))));
        clearInterval(animate);
      }
      else if (lives <= 0) {
        console.log ('game over!');
        $('.plates').remove();
        $('#unicycler').remove();
      }
      else if ((Math.abs(plateBottom - unicyclerHeight) <= 25) && (Math.abs(plateX - unicyclerX) <= 5) ){ //Range of acceptable target.
        console.log('catch');
        modalQuestion();
        // pauseAnimation();
        newPlate.remove();
        $('#unicycler').css('height', (parseInt($('#unicycler').css('height'))+10)+'px'); // Unicycler adds plate to head.
// TO DO:
// Make unicycler add plates rather than height.
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

  function modalQuestion() {
    $('#questionModal').css('display', 'block');
    // $('#questionTitle').innerHTML = questions.level1.question1.title;
  }

  function pauseAnimation() {
    $('.plates').clearQueue();
    $('.plates').stop();
  }

  function newPlate() {
    let x = getPlateX();
    createPlate(x);
    console.log(x);
  };

  setInterval(newPlate, plateInterval);

  // function newQuestion() {
  //   let x = getPlateX();
  //   createQuestion(x);
  // };

  // setInterval(newQuestion, 10000);

});