//******** Game Data ********//

let gameState = {
  unicyclist: {
    x: 175,
    height: 20
  },
  plates: [],
  level: 1,
  levelCounter: 0,
  score: 0,
  lives: 5,
  plateInterval: 5000
}

//******** Keyboard Controller ********//

$(document).ready(function(){
  console.log( "ready!" );

  function right() {
    $('#unicyclist').velocity({ //Following recommendations from John Bell, I am using Velocity.JS but the animation required is so brief that I am not making use of the special features of VelocityJS here.
      left: '+=10px'
    }, 0.2);
  };

  function left() {
    $('#unicyclist').velocity({
      left: '-=10px'
    }, 0.2);
  };

  document.addEventListener("keydown", function(event) {
    var e = event.keyCode;
    switch (e) {
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

  $('#level').text('Level: ' + gameState.level);
  $('#score').text('Score: ' + gameState.score);
  $('#lives').text('Lives: ' + gameState.lives);

//******** Create New Plates ********//

  function Plate(x) {  //Object constructor
    this.x = x;
    this.y = 0;
  };

  function getPlateX() {  //Generate random x-value of new plate object
    let position = Math.floor(Math.random() * 5);
    let x = position * 10;
    return x;
  };

  function newPlate() {
    // Create a new instance of the Plate object prototype
    let x = getPlateX();
    stagePlate(x);
    let thisPlate = new Plate(x);
    thisPlate['x'] = plate.x;
    thisPlate['y'] = plate.y;

    // Push this instance of Plate into the gameState's array of plates
    gameState.plates.push(thisPlate);

    // Stage this plate on the DOM
    let stagePlate = $(`<div class = 'plates'></div>`);
    $('#stage').append(stagePlate);
    stagePlate.css('left', x+'vw');
    console.log('stage plate created on DOM');
  };

  setInterval(newPlate, gameState.plateInterval); //Automatically create new plates

//   function stagePlate(x) {
//     for all-- plate of plates
//   }

//   let animations = [];

//   function createPlate(x) {


//   // function myFunction () {

//     let animation = function() {
//       let plateBottom = parseInt(newPlate.css('top')) + 10;
//       let plateX = parseInt(newPlate.css('left'));
//       let unicyclerHeight = parseInt($('#unicycler').css('top'));
//       let unicyclerX = parseInt($('#unicycler').css('left'));

//       // Check if the score is below the number required to go on to next level.
//       // If the score is high enough to clear the level, then remove plates from
//       //stage and transition to the next level.
//       if (levelCounter >= 5) {
//         level++;
//         levelCounter = 0;
//         plateInterval -= 1000; //Speed up the rate of falling plates in next level.
//         $('.plates').remove();
//         alert('next Level');
//         $('#level').text('Level: ' + level);
//         $('#unicycler').css('height', (parseInt($('#unicycler').css('height', '100px'))));
//         clearInterval(animate);
//       }
//       else if (lives <= 0) {
//         console.log ('game over!');
//         $('.plates').remove();
//         $('#unicycler').remove();
//       }
//       else if ((Math.abs(plateBottom - unicyclerHeight) <= 25) && (Math.abs(plateX - unicyclerX) <= 5) ){ //Range of acceptable target.
//         console.log('catch');
//         // modalQuestion();
//         // pauseAnimation();
//         newPlate.remove();
//         $('#unicycler').css('height', (parseInt($('#unicycler').css('height'))+10)+'px'); // Unicycler adds plate to head.
// // TO DO:
// // Make unicycler add plates rather than height.
//         score++; // Increase the score by one plate.
//         levelCounter++; // Increase the levelCounter (it takes 20 plates to clear each level.)
//         $('#score').text('Score: ' + score); // Update score on window.
//         clearInterval(animate);
//       }
//       else if (plateBottom >= 400) {
//         console.log('break');
//         lives--;
//         $('#lives').text('Lives: ' + lives);
//         clearInterval(animate);
//       }
//       else {
//         console.log('no');
//         newPlate.velocity({
//           top: '+= 20px'
//         }, 'linear');
//       }
//     }

//     let animate = setInterval(animation, 200);
//     animations.push({ id: animate, fn: animation, delay: 200 });

//   };

//   function pause() {
//     for (a of animations) {
//       clearInterval(a.id);
//       a.id = null;
//     }
//   }
//   function resume() {
//     for (a of animations) {
//       let id = setInterval(a.fn, a.delay);
//       a.id = id;
//     }
//   }

//   function pauseInterval(id) {
//     clearInterval(id);
//   }

//   function resumeInterval(id) {
//     // find the animation function for the given id
//     setInterval()
//   }

//   function stopInterval(id) {
//     clearInterval(id);
//     remove id from the array of intervals
//   }

//   // }

//   function modalQuestion() {
//     $('#questionModal').css('display', 'block');
//     // $('#questionTitle').innerHTML = questions.level1.question1.title;
//   }

//   function pauseAnimation() {
//     $('.plates').clearQueue();
//     $('.plates').stop();
//   }



//   // function newQuestion() {
//   //   let x = getPlateX();
//   //   createQuestion(x);
//   // };

//   // setInterval(newQuestion, 10000);

});
