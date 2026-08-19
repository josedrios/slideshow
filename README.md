# Slideshow Web App
This project is a very simple slideshow web app. 

# Why
I make video logs to practice my speech skills, trying to help embody my thoughts and ideas through words. Creating video logs, talking about random topics helps that. I don't publish them, I just keep them on my laptop to try to improve from them or just to look back on. 

What this app does for me is that I can add all the topics I want to talk about for a certain video log here in a linear, ordered fashion.

# Installation
Run this in the folder you want this project to live in:
git clone https://github.com/josedrios/slideshow.git

Go into the project's directory and run:
npm i

# How to Run App
Go into the project's directory and run:
npm run dev

# How to Set Up Slides

Go to src/content.ts and add the text for each slide or images there. You can do this by creating a new object element in the slides array:

{
    text: "The text for you slide goes here", // NOTE: text is not needed
    img: "example.jpg" // NOTE: if you have an image
}

NOTE: Put the exact name of your image file from public/images
NOTE: place your images in public/images/, the public directory should be in the same directory as src/. Create public/images if public or images directories do not exist.

# Change Log Number

Change the variable logNumber in src/content.ts to the number of your log

# Keybinds
Press LEFT ARROW to go to previous slide
Press RIGHT ARROW to go to next slide
Press SPACE to toggle fullscreen

# How to Reset
Delete all elements in slides array in content.ts as well as updating logNumber variable.

Delete all images in public/images as well.
