Breaking down Wordle

If you're not living under a rock and hiding from the world (if you are, that's alright -- given the current state of affairs, it's understandable),  you'll know that  the word game 'Wordle' has been all the rage. It's been bought by the New York Times for seven figures, but the game itself is pretty straightforward. Anyone who is somewhat familiar with the web development devtools can  reverse-engineer the game.

If we open the devtools, we can see everything. Firstly, the entry point for the javascript is here:

<Screenshot/>

If you scroll down, you can see, for example, a long array of words. This is where the answer comes from, and checks the word you enter as valid.

<screenshot/>

In addition, a noteworthy and critical part of the game resides in its ability to store its information locally. Going to view your LocalStorage, you can see that the answer, the past guesses, which row you're on, are all stored here, along with some trackers from New York Times.

<screenshot/>

somethng about logic: https://reichel.dev/blog/reverse-engineering-wordle.html#looking-at-the-source



-- 

Having taken a dive in all of this, I decided to make my own version as a learning project. While I decided to stick with using React as the framework, I opted not to use localStore and replace its state management with Redux instead. 

This has two consequences. One is that after you close the window, the game will lose all of the data. A player will not be to check the status of previous games and come up with the fun little graph. Another is that



https://stackoverflow.com/questions/62174110/is-it-ok-to-use-localstorage-instead-of-redux-or-context-api