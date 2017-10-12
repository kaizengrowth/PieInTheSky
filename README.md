# UnicycleGame

*** Kai Zhang / October 6, 2017 *** [Pie in the Sky]

What is [Pie in the Sky]? A basic game of juggling plates while riding a unicycle. The player goes through multiple stages, migrating from location to location. Statistics about inequality (how much of the pie!) pop up on each stage every time a plate is caught. This educational game teaches about labor, migration, inequality, and conflicting approaches to social justice that must be “juggled.”

This game doubles as a portfolio item, for my “About Me” page. Inspired by Robby Leonardi’s infamous portfolio: http://www.rleonardi.com/interactive-resume/

Wireframe

Initial thoughts on game structure Collision detection on plates trigger target window (plate/pie) to display with facts and statistics. Catch all the plates to win a level. Dropping 3 plates results in loss/restart. If you catch a dirty plate called “cynicism,” you have to answer a series of questions to “wash the dish” and convert it to practical optimism.

Sometimes you catch a sparkling plate called “optimism b.s.” which is a fake dish full of dangerous fake glow that can explode in your face and smear the screen with crap. You have to “wash the dish” by answering a question to convert it to balanced analysis.

Backgrounds: Level One:	Cross from China to America (Communism vs. Capitalism) Plates = stars on flag (5 stars → 50 stars) Level Two:	Trailer park in Colorado to NYCHA projects in New York City (Middle America vs. East Coast / suburban vs. urban poverty) Plates = states in between driving from Colorado to New York Level Three:	South Bronx public school to Riverdale private prep school (Educational inequality in NYC) Plates = 14 months of Prep for Prep Level Four:	Earth Institute (Columbia) to working in Guatemala Confused by different approaches to global justice:

PLATES -- Optimism & cyncism dirty dishes; confused by different approaches to global justice:

a) Working at Earth Institute: Jeffrey Sachs - economic development, market and business as driver of human rights, “corporate social responsibility” and “fair trade”

b) Working in Guatemala: Critiques of neoliberalism “White Man’s Burden”, indigenous rights, radical Latin American politics, cynicism and doubt and paralysis

c) Race, Immigration, Labor & Housing Justice in NYC: Working as a community organizer back in the Bronx, race and policing, immigrant labor rights, mass incarceration and prison abolition, Black Lives Matter

d) Living in a Queer Feminist Anarchist Squat in Brooklyn: Bicycles and punk shows, damn New School kids and their THEORY, Bluestockings bookstore, permaculture at Finger Lakes Institute upstate, getting sick of utopian radicalism

e) Digital Privacy Rights in Berlin: Feminist digital activism, creating digital security kits for sex workers and political radicals in China, TOR hacktivism f) Civic Tech & Public Policy in Toronto: NYU public policy, back to the empirical economics & statistics approach, Ontario Provincial Directorate for Women’s Rights, policy research, cyncism and optimism in balance

Phases of Completion: STAGE ONE: Understanding collision detection and proof of concept with div’s. Unicycler moves left and right with key input. Plates are sliding down vertically in container. Unicycler can “catch” plate and it adds to the stack on character’s head.

STAGE TWO: Target window on collision event: when unicycler “catches” plate, it changes the image in a target “pie” window.

STAGE THREE: Timers, point counters / lives

STAGE FOUR: Quiz load - when unicycler catches a “over-cynicism” or “over-optimism” plate, the quiz shows up with a timer, and the cycler has only a set amount of time to answer the question correctly. Correct answer may add new “lives” and incorrect answer may take away a life.

STAGE FIVE: After testing proof of concept, generate all images, including background images, quiz questions, statistics / pie charts.

STAGE SIX: Put the images together with the functionality. Make all the buttons work.

STAGE SEVEN: Page load, single page application logic, actually getting the game to work.

Links and Resources (Anything you've looked up so far or are thinking about using.)

Collision Detection https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection

On target, image change, with CSS https://css-tricks.com/on-target/

Making a dynamic quiz with Javascript https://codepen.io/gcarino/pen/LDgtn
