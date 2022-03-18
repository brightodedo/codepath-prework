# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **NAME**

Time spent: **#** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![ezgif com-gif-maker](https://user-images.githubusercontent.com/54002497/158944145-d1b56027-23b6-408b-a3a9-e797901655c8.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[YOUR ANSWER HERE]
I made use of w3schools to confirm javascripts semantics and syntax for getting an element by it's ID, to confirm html's semantics to restrict an input form.
I also had to check stackOverflow because Javascript doesn't have Index out of bounds exception and that is something I discovered was supposed to break my code but didn't because JavaScript doesn't have it.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[YOUR ANSWER HERE]
Using my custom audio was the hardest challenge in creating this project. It was easy to do but comparing it to the energy I spent on the rest of the work, this took the cake. First off, I made an action plan, detailing the steps I would carry out to modify my code. I found six distinct audio files (my code uses six buttons) that I would insert into my project. Once I had found the files I wanted, I made the length and volume of each audio clip to match. I needed to learn how to add my assets to my glitch project. After that I added each audio file into my html file as seperate audio elements. Audio elements do not require styling in html because they do not render on the page. I used a hashmap (audioMap) to map each button click to its respectful audio. I modified my startTone, stopTone, playTone functions until they worked as intended. The most difficult part was tuning the decrementTime variable to work for all lengths of the game. I was able to overcome this by trial and error testing with the number of seconds. After I was sure that my code was working, I cleaned up its less useful parts.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]
My questions about web development still remain the same even after completing this project. I have some experience with web development; I am an advanced beginner. During the start of the lockdowns in early 2020, I found myself using my time to pick up new skills. I have experience with databases like mySQL, postgreSQL, Heroku, with web frameworks like Flask and Django. Unfortunately, I wasn't able to fully understand ReactJs, CI/CD (continuous integration/continuous deployment) and containers. So, my questions about web development would 1) How do we achieve continuous integration/ continuous deployment 2) How do we use containers in testing and deploying code. 3) How do we manage and maintain the database? Also I haven't worked in a large team before so I would ask, How do we maintain code in a large office while ensuring it doesn't break?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]
I am very satisfied with how this project turned out for me. That having been said, if I had more time to work on this project I wouldn't spend my time trying to change the frontend of the project. Maybe I would use a bit of my time to adapt the colors for something easier to see but I would spend most of my time making the backend of the website more efficient. Having a fancy looking website with cool drop downs and menus are cool enough to attract people but the efficiency of your website is what keeps them coming back.


## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here) 


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
