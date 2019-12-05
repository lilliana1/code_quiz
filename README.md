# code_quiz

## pseudocode
1. start with a landing page
    * link to view highscores
    * timer
    * start button to start game
    * game description/rule

2. when user click the start button
    * descitpion text and button to dissappear
    * questions to display
    * 4 options/choices
    * start time have count

3. when user select an option/choice button
    * evaluate the choice
        * if user gets it right
            * increment the correct counter
        * if wrong
            * reduce time

4. the timer stop when all questions have been answer or the timer runs out
    * game is over
    * reveal final correct & highscore
        * allow user to enter initials to be added to highscore table

5. when user is looking at highscore table
    * reroute back to the game ej de latitud 

*** notes ***
1. build an array w/ question
2. create a function called startQuiz()
    * hie landing/start page
    * reveal the question
    * set timer
    * run questionFunction

3. timer function 
4. function called showQuestion 
    * show the questions and answers (dynamically )
5. function cycleFunction 
    * cycle through questions array (hide previous question and shows next)
    * validate right or wrong
        * if wrong 
            * reduce time
            * play wrong sound
                * goes to next questions
        * else
            * play right sound
            * goes to next question 
            * modal to show correct
    * if no more questions
        * hide result    
        * go to the result screen
6. function endQuiz 
    * this will show results/final score
        * final score will be whatever the remaining time is 
7. function to save highscore


