# calculator
Goal: create a calculator using HTML, CSS, and Javascript.  Allow for floating point numbers, round number appropriately, and style it.
Reflection:  I made this hard for myself by trying to get the whole design to stretch or shrink based on screen size.  After seeing vw based font-size fail at large and small sizes, I set max-width only to learn that doesn't help.  So in the end I did work out some text and div scaling, but it doesn't look as good as just a defined size calculator could look.  No regrets, because I learned a lot playing with that feature.

I also didn't realize how complicated rounding could be.  I had to dynamically round numbers to varying precision based on the number of digits in the number and size of the calculator viewport.  I used Number.toFixed() at first but settled on Math.round() because it gave me more control to hide trailing zeros.  I had to learn how to force numbers into scientific notation sooner than Javascript normally would.

Lastly I learned that I should have considered keypad functionality before coding the event listeners for clicking the onscreen buttons.  I had to rig an unattractive solution to used the same functions for the 'click' and 'keydown' events that could have probably been more elegant.

This was a fun chance to practice and develop what we've learned in front-end development so far, and I'm happy to show my progress on GitHub.
