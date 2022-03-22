# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Zev Rosenbaum**

Time spent: **3** hours spent in total

Link to project: https://glitch.com/edit/#!/simonsaysgame-zevrosenbaum

Project is also live on my website! https://www.zevrosenbaum.com/SimonGame.html

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Picture of classic Simon Says Game

## Video Walkthrough (GIF)

Losing game by running out of strikes
![](http://g.recordit.co/oU5AmTk8OQ.gif)
Losing game by running out timer
![](http://g.recordit.co/g8oIG3l4wA.gif)
Win game!
![](http://g.recordit.co/S5rkS7jApS.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

a. W3 Schools – SetInterval and ClearInterval  
b. StackOverflow – random debugging and syntax questions

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The most challenging part of the project for me was creating a timer for the game. I aimed to achieve a 4-minute countdown timer where the player loses the game if time runs out. It took me a bit of time to debug an issue where the timer sped up and starting skipping seconds. Eventually I realized that this was due to the countDown function being called multiple times, thereby causing the seconds to be deducted faster and faster. Originally, the countDown function was located in the playClueSequence function – in the for loop – causing too many executions of the countDown function. The countDown function reduces the value of the global variable sec, which represents the seconds remaining. I resolved this bug by moving the countDown function to the startGame function, so that the function isn’t repeatedly called (however, the setInterval function located inside the countDown function recursively calls the function every 1 second - but this is necessary to create the timer utility).

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

What is the best way to make your website responsive to different screen sizes? There are many different frameworks that can be utilized for this purpose. Currently, this webpage’s formatting is not ideal on mobile phones with narrow screen sizes. Additionally, what are some best practices for choosing how to style your webpage? How would one decide what is aesthetic for the end user?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

a. Make webpage responsive to different screen sizes    
b. Adjust the timer so that it resets after every turn, rather than a setup once for the whole game.   
c. Add easy, medium, and hard settings for the game. These would be buttons that appear once the user selects “Start”, but before the game begins. Implement these features by having 4 buttons for Easy, 6 buttons for medium, and 8 buttons for hard. In addition, the patterns increase by faster rates for the medium and hard modes of the game.   
d. Add a link to a detailed history of the Simon Says game, so that players can read about the history of the game.




## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright Zev Rosenbaum

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.