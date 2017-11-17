# UnicycleGame

### What is Pie in the Sky? 

A game that simulates the balancing act of juggling plates while riding a unicycle! Can you answer trivia questions at the same time as catching plates? (Collision detection, yay!) 

The player goes through multiple stages, migrating from location to location. Trivia questions reveal statistics about inequality pop up on each stage every time a plate is caught. This educational game teaches about labor, migration, inequality, and conflicting approaches to social justice that must be “juggled.”

In Chinese the word bowl: 飯碗 -- also means your job, or your way of making a living. Circus is a hard way of making a living. What is your bowl or living? How much of the economic pie are you getting? How were some ideas of Communism "pie in the sky"? So many puns, and so much fun! Play here: https://kaizenagility.github.io/PieInTheSky/

![Screenshot of Game](https://github.com/kaizenagility/PieInTheSky/blob/master/Screen%20Shot%202017-11-16%20at%207.25.09%20PM.png "Screenshot of game")

Here was the grade and feedback I received on this very first project at General Assembly: https://github.com/kaizenagility/PieInTheSky/blob/master/kai.md
I received a score of 12.5 out of 10, with bonus points for extra credit.




## /// === **Explanations of the technologies used** === ///

To create this game, I used:

  1. a collision detection algorithm to determine whether or not the unicyclist has caught a bowl, or if a bowl has crashed onto the floor. 
  2. object-oriented programming to build out my questions and answers, and display them using jQuery onto the sidebars of this page. 
  3. velocityJS for smooth animations, although in the end, my animation intervals are so small that they are no different than the jQuery animate capabilities 
  4. css border properties to make the center "stage" into a silver bowl. 
  5. a setInterval function for each bowl that passes through the stage.
  6. assigned counter values to variables related to my Game State 
  7. created graphics using Adobe Photoshop
  8. added free open source audio for sound effects


## /// === **Approach taken** === ///

I began by coding the "timer" which is the collision detection game. Next I added the trivia questions. I made all the functionality first with simple red and green div boxes before designing the graphics and adding audio. I played with velocityJS for a while, looking at different transition animations, but decided on a simple linear animation for my game. I added data last: the questions and answers stored in the Questions object in my javascript file.

## /// === **User stories** === ///

1. Make and style HTML game page with "Stage" div that has a character, which moves according to key code event listeners.
2. Make bowl object constructor function. Construct new bowls according to a setInterval function.
3. Animate each bowl using a setInterval animation. If bowl has not collided into unicyclist or the floor, then animate.
4. If user runs out of lives, game is over. Create alerts that display game status.
5. Create a function that displays questions from the Question object in the sidebar "Questions."
6. Display the answer from the Question object (minus one) in the sidebar "Answers".
7. Change the ugly divs into images of unicyclist and bowls. Edit in photoshop to look like video.
8. Create intro page with video of purple unicyclist catching bowls to make the game more clear.
9. Create outro page with high scores displayed from localStorage.
10. Define win and lose states. Create restart and redirect buttons for the win and lose states.

## /// === **How-to-use instructions** === ///

The game is one of "juggling" multiple areas of attention at once, much like the act of unicycling and juggling bowls! The "timer" for this trivia game is the bowl-catching mechanism in the center stage. The object of this game is to answer as many questions as you can in each level before the unicyclist runs out of "lives" or "clears" all the bowls in the level.

Play again and again. Beat your last high score!


## /// === **Unsolved* problems === ///

1. Generate more questions and group them by level. Begin each level with question 1 from the array of questions in that level. Randomly output questions from each level, rather than repeat the same questions every time. 
2. Changing colors of the Question / Answer sidebars with each question, going down the array of Colors. (This way, the image metaphorically suggests that each new question is being 'kicked' at the purple unicyclist from another colored unicyclist, much like the video intro.
3. Background images for levels 2-4 are too dark. There is not enough contrast between unicyclist sprite and background. It looks ugly.
4. Beautify all of it -- change clashing styles. Make certain elements more responsive. This is not the most beautifully designed game...
5. Add more questions, related to each level, with statistic / pie chart or bar/line graph. In the outro, describe my journey of exploring different conflicting social justice approaches through an infographic background image that scrolls in a div (overflow:hidden) with the same purple unicyclist sprite, walking right, and changing the background image position as she does.


---



# PROPOSAL

*** Kai Zhang / October 6, 2017 *** [Pie in the Sky]

What is [Pie in the Sky]? A basic game of juggling plates while riding a unicycle. The player goes through multiple stages, migrating from location to location. Statistics about inequality (how much of the pie!) pop up on each stage every time a plate is caught. This educational game teaches about labor, migration, inequality, and conflicting approaches to social justice that must be “juggled.”

This game doubles as a portfolio item, for my “About Me” page. Inspired by Robby Leonardi’s infamous portfolio: http://www.rleonardi.com/interactive-resume/

---

### Wireframe

Initial thoughts on game structure Collision detection on plates trigger target window (plate/pie) to display with facts and statistics. Catch all the plates to win a level. Dropping 3 plates results in loss/restart. If you catch a dirty plate called “cynicism,” you have to answer a series of questions to “wash the dish” and convert it to practical optimism.

Sometimes you catch a sparkling plate called “optimism b.s.” which is a fake dish full of dangerous fake glow that can explode in your face and smear the screen with crap. You have to “wash the dish” by answering a question to convert it to balanced analysis.

---

### Backgrounds: 

##### Level One:	Cross from China to America (Communism vs. Capitalism) Plates = stars on flag (5 stars → 50 stars) 

##### Level Two:	Trailer park in Colorado to NYCHA projects in New York City (Middle America vs. East Coast / suburban vs. urban poverty) Plates = states in between driving from Colorado to New York 

##### Level Three:	South Bronx public school to Riverdale private prep school (Educational inequality in NYC) Plates = 14 months of Prep for Prep 

##### Level Four:	Earth Institute (Columbia) to working in Guatemala Confused by different approaches to global justice:

### PLATES -- Optimism & cyncism dirty dishes; confused by different approaches to global justice:

##### a) Working at Earth Institute: Jeffrey Sachs - economic development, market and business as driver of human rights, “corporate social responsibility” and “fair trade”

##### b) Working in Guatemala: Critiques of neoliberalism “White Man’s Burden”, indigenous rights, radical Latin American politics, cynicism and doubt and paralysis

##### c) Race, Immigration, Labor & Housing Justice in NYC: Working as a community organizer back in the Bronx, race and policing, immigrant labor rights, mass incarceration and prison abolition, Black Lives Matter

##### d) Living in a Queer Feminist Anarchist Squat in Brooklyn: Bicycles and punk shows, damn New School kids and their THEORY, Bluestockings bookstore, permaculture at Finger Lakes Institute upstate, getting sick of utopian radicalism

##### e) Digital Privacy Rights in Berlin: Feminist digital activism, creating digital security kits for sex workers and political radicals in China, TOR hacktivism f) Civic Tech & Public Policy in Toronto: NYU public policy, back to the empirical economics & statistics approach, Ontario Provincial Directorate for Women’s Rights, policy research, cyncism and optimism in balance

---

### Phases of Completion: 

##### STAGE ONE: Understanding collision detection and proof of concept with div’s. Unicycler moves left and right with key input. Plates are sliding down vertically in container. Unicycler can “catch” plate and it adds to the stack on character’s head.

##### STAGE TWO: Target window on collision event: when unicycler “catches” plate, it changes the image in a target “pie” window.

##### STAGE THREE: Timers, point counters / lives

##### STAGE FOUR: Quiz load - when unicycler catches a “over-cynicism” or “over-optimism” plate, the quiz shows up with a timer, and the cycler has only a set amount of time to answer the question correctly. Correct answer may add new “lives” and incorrect answer may take away a life.

##### _STAGE FIVE:_ After testing proof of concept, generate all images, including background images, quiz questions, statistics / pie charts.

##### _STAGE SIX:_ Put the images together with the functionality. Make all the buttons work.

#####_STAGE SEVEN:_ Page load, single page application logic, actually getting the game to work.

---

## Links and Resources (Anything you've looked up so far or are thinking about using.)

Collision Detection https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection

On target, image change, with CSS https://css-tricks.com/on-target/

Making a dynamic quiz with Javascript https://codepen.io/gcarino/pen/LDgtn
