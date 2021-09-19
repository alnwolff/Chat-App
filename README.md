# Chat App

## About

Chat App is the result of a challenge to create a simple chat interface in JavaScript,  able to send and display messages from all senders.

### Stack
I decided to use React because I think it's easier and comfortable for creating dynamic web apps.

I was told to not spend a lot of time on this project, so I started writing on paper all the structure that I needed, and the features that I think were the most important for this MVP. 

### Improvements
If I had more time to develop this app, I would improve the styling for responsive design, add pagination to older messages since now it's only displaying the latest 10 messages, and add unit tests to ensure all the requirements are filled in the best quality possible.

Reviewing the code, I think it would be a better idea to divide the CSS styling into different files, for each component, for readability. I would definitely do that if I have to do this challenge again.

## How to run 
This project was made to run locally, so for this, you need to follow these steps:

#### Repository
Clone the repository and make sure you remember the path where it was cloned.

#### Node
Before starting, make sure you have Node installed. You can install Node [clicking here](https://nodejs.org/en/).
After installing, access the project folder and run the command `npm install`.

#### Run the app
 In the project folder, run the command `npm start` and access [http://localhost:3000](http://localhost:3000) on your browser.

## IMPORTANT NOTES

This APP works with an API that requires a unique secret Token.
For security reasons, the Token is not in the code, you'll need to create a .env in the project folder, and declare the variable `REACT_APP_API_KEY` and assign it with the Token as follows:

```REACT_APP_API_KEY=<token>```