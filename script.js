//******** Game State ********//
let plates = new Array(10);
let plateInterval = 5000;
let score = 0;
let lives = 5;
let rightAnswers = 0;
let level = 1;
let levelCounter = 0;
let qNum = 0;
let lNum = 0;
let colors = ['#5EC46A', //green
              '#fc3ea4', //pink
              '#fbfd35', //yellow
               '#2982FA']; //blue

//******** Levels ********//

let levels = [
  l1 = {
    title: 'From China to USA',
    background: 'images/level1.jpg',
    modal: ''
  },
  l2 = {
    title: 'From Colorado Trailer Park to NYCHA Projects',
    background: 'images/level2.jpg',
  },
  l3 = {
    title: 'From South Bronx Public School to Riverdale Private School',
    background: 'images/level3.jpg',
  },
  l4 = {
    title: 'From Home to Travelling the World',
    background: 'images/level4.jpg',
  }
]

//******** Questions ********//

let questions = [
  q1 = {
    q: 'Which country has a higher poverty rate - USA or China?',
    a: 'USA has a higher poverty rate.',
    b: 'China has a higer poverty rate.',
    c: 'Both countries have about equal percentage of population living in poverty.',
    d: 'Neither country has any people living in poverty.',
    answer: 'a',
    answer_text: 'U.S. has higher poverty rate (15.1%) than China (13.4% povery rate)',
    answer_image: 'images/plate.png',
  },
  q2 = {
    q: 'Which country has a higher rate of population growth?',
    a: 'USA',
    b: 'China',
    c: 'Both are the same',
    d: 'Impossible to tell',
    answer: 'a',
    answer_text: "U.S. has a higher population growth rate (0.899%) than China (0.481%)",
    answer_image: ''
  },
  q3 = {
    q: 'Which country has a higher rate of inequality?',
    a: 'China',
    b: 'USA',
    c: 'Both are the same',
    d: 'Impossible to tell',
    answer: 'b',
    answer_text: 'USA has a higher rate of inequality than China. However, the income of the bottom 50% in the U.S. have stagnated and even went down in the US since 1978, whereas in China, the bottom half are experiencing 400% income growth.',
    answer_image: ''
  },
  q4 = {
    q: 'What is the average income for the bottom half of Americans?',
    a: 'Around $50,000 per year',
    b: 'Around $35,000 per year',
    c: 'Around $25,000 per year',
    d: 'Around $15,000 per year',
    answer: 'd',
    answer_text: 'The bottom 117milion Americans are making an average of $16,200 per year before taxes',
    answer_image: ''
  }
];

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
    let e = event.keyCode;
    switch (e) {
      case(37):
        left();
        break;
      case(39):
        right();
        break;
      case(65):
        $('#A').prop('checked', true);
        break;
      case(66):
        $('#B').prop('checked', true);
        break;
      case(67):
        $('#C').prop('checked', true);
        break;
      case(68):
        $('#D').prop('checked', true);
        break;
      case(13):
        checkAnswer();
        break;
      // default:
        // alert('Press arrow keys to move unicycle juggler.');
    }
  });

  //******** Display Game Stats ********//

  $('#levelTitle').text(levels[lNum].title);
  $('#level').text('Level ' + level);
  $('#score').text('Score: ' + score);
  $('#lives').text('Lives: ' + lives);
  $('#rightAnswers').text('Answers: ' + rightAnswers);


  //******** Create New Plates ********//

  function getPlateX() {
    let position = Math.floor(Math.random() * 5);
    let x = position * 7;
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

//******** Win Game ********//

      // Check if the score is below the number required to go on to next level.
      // If the score is high enough to clear the level, then remove plates from
      //stage and transition to the next level.
      if (level > 4) {
        winGame.play();
        $('#alert').addClass('winGame');
        $('#alert.winGame').css('display', 'block');
         $('level').remove();
        clearInterval(animate);
        $('#restart').show().delay(5000).fadeOut(1500, function(){
          location.reload();
        });
        $('#restart').click(function(){
          location.reload();
        });
      }

//******** Next Level ********//

      else if ((levelCounter >= 7) && (level <= 4)) {
        level++;
        lNum++;
        lives+=2;
        levelCounter = 0;
        plateInterval -= 1000; //Speed up the rate of falling plates in next level.
        levelUp.play();
        $('#alert').addClass('nextLevel');
        $('#alert.nextLevel').css('display', 'block');
        $('.plates').remove();
        $('#level').text('Level ' + level);
        $('#levelTitle').text(levels[lNum].title);
        $('#lives').text('Lives: ' + lives);
        $('#unicyclist').css('height', (parseInt($('#unicyclist').css('height', '150px'))));
        clearInterval(animate);
      }

//******** Lose Game ********//

      else if (lives <= 0) {
        console.log ('game over!');
        $('.plates').remove();
        $('#unicyclist').remove();
        loseGame.play();
        $('#alert').addClass('loseGame');
        $('#alert.loseGame').css('display', 'block');
        $('#restart').show().delay(3000).fadeOut(1500, function(){
          location.reload();
        });
        $('#restart').click(function(){
          location.reload();
        });
      }

//******** Catch Plate ********//

      else if ((Math.abs(plateBottom - unicyclistHeight) <= 25) && (Math.abs(plateX - unicyclistX) <= 5) ){ //Range of acceptable target.
        console.log('catch');
        newPlate.remove();
        catchBowl.play();
        $('#unicyclist').css('height', (parseInt($('#unicyclist').css('height'))+30)+'px'); // Unicyclist adds plate to head.
        score++; // Increase the score by one plate.
        levelCounter++; // Increase the levelCounter (it takes 20 plates to clear each level.)
        $('#score').text('Score: ' + score); // Update score on window.
        clearInterval(animate);
      }

//******** Break Plate ********//

      else if (plateBottom >= 400) {
        console.log('break');
        breakBowl.play();
        lives--;
        $('#lives').text('Lives: ' + lives);
        clearInterval(animate);
      }

//******** Plate Animation ********//

      else {
        newPlate.velocity({
          top: '+= 20px'  // The plate moves down by 18px if there is no collision.
        }, 'linear');
      }
    }, 200);
  };

  function newPlate() {
    let x = getPlateX();
    createPlate(x);
  };

  setInterval(newPlate, plateInterval);

  //******** Questions SideBar ********//

function nextColor() {
  for(i in colors) {
    if (i == 3) {
      i = 0;
    }
    else {
      i++;
    }
    return colors[i];
  }
}

$('#question_text').text(questions[qNum].q);
$('#labelA').text(' A. ' + questions[qNum].a);
$('#labelB').text(' B. ' + questions[qNum].b);
$('#labelC').text(' C. ' + questions[qNum].c);
$('#labelD').text(' D. ' + questions[qNum].d);

});

let radioButtons = document.getElementsByName('q');
  let switchChecked;
  let i = 0;
  for(i = 0; i < radioButtons.length; i++){
    radioButtons[i].onclick = function() {
      if(switchChecked == this){
          this.checked = false;
          switchChecked = null;
      } else{
          switchChecked = this;
      }
    };
  }
