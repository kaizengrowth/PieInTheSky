### Metric

| Metric | Description | Points |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| Project Workflow | Did you complete the user stories, wireframes as specified above? Did you use source control (Git) as expected for the phase of the program you’re in (detailed above)? Did you submit your project via an issue ticket on GHE? | 3 |
| Technical Requirements | Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex? | 2.5 |
| Creativity | Did you added a personal spin or creative element into your project submission? | 3 |
| Code Quality | Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class? | 2 |
| Deployment | Did you deploy your application to a public url using BitBalloon? | 2 |
|  |  | 12.5/10 |


### Description

**Project Workflow**: Your commit history is really good, and so is your readme. Good work!

**Technical Requirements**: You have a win condition and a loss condition, and you've used a constructor function. Good work!

**Creativity**: Your game is so impressive in its conception -- you had this idea of taking the concepts you wanted to get across and making them into a game, and it worked really well for you. That's fantastic, and it takes a lot of creativity to take something like this and turn it into a game.

**Code Quality**: Overall, your code is clean, but there are some oddities in it that are just a little strange. For example, in a couple of your arrays, you're doing something like this (it's [here](https://github.com/kaizenagility/PieInTheSky/blob/master/script.js#L41) in your code:

```js
const myArray = [
  thing1 = {
    key: value,
  },
  thing2 = {
      key: value,
  },
];
```

This is not really good practice -- arrays should be used for storage, not for assigning things. The side effect of this is that `thing1` and `thing2` are available in those variables in the global scope, but I can't see that you've used them at all, and it could cause issues for you later. Also, you have one _very_ long `if/else` statement with a lot of things happening within it.  Instead of keeping it all in one if/else statement, like this:

```js
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
        $('#stage').css('background-image', 'url(' + levels[lNum].background + ')');
        $('#lives').text('Lives: ' + lives);
        $('#unicyclist').css('height', (parseInt($('#unicyclist').css('height', '150px'))));
        clearInterval(animate);
      }
```

It would have been better to do something like this:

```js
// stuff up here
else if ((levelCounter >= 7) && (level <= 4)) {
  nextLevel(level, lNum, lives, plateInterval, levelCounter);
  levelUp.play();
  clearInterval(animate);
}
// further down in the code 

function nextLevel(level, lNum, lives, plateInterval, levelCounter) {
    level++;
    lNum++;
    lives+=2;
    levelCounter = 0;
    plateInterval -= 1000; //Speed up the rate of falling plates in next level.
    $('#alert').addClass('nextLevel');
    $('#alert.nextLevel').css('display', 'block');
    $('.plates').remove();
    $('#level').text('Level ' + level);
    $('#levelTitle').text(levels[lNum].title);
    $('#stage').css('background-image', 'url(' + levels[lNum].background + ')');
    $('#lives').text('Lives: ' + lives);
    $('#unicyclist').css('height', (parseInt($('#unicyclist').css('height', '150px'))));
}
```

So that if you need to change some of the behavior in `nextLevel`, you don't have to search through your huge if statement for it -- you can just alter that one function.

**Deployment**: All good :thumbsup:

Overall, you did great work and should be proud of yourself. For your project two, focus on:
- Keeping everything extremely clean and modular
- Improving your code quality even more


