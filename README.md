# Chat App

  This is a simple Chat application created using REACT.

## How to run 
This project was made to run locally, so for this you need to follow these steps:

#### Repository
Clone the repository and make sure you remember the path where it was cloned.

#### Node
Before start, make sure you have Node installed. You can install Node [clicking here](https://nodejs.org/en/).
After installing, access the project folder and run the command `npm install`.

#### Run the app
 In the project folder, run the command `npm start` and access [http://localhost:3000](http://localhost:3000) on your browser.

## IMPORTANT NOTES

This APP works with an API that requires a unique secret Token.
For security reasons, the Token is not in the code, you'll need to create a .env in the project folder, and declare the variable `REACT_APP_API_KEY` and assign it with the Token as follows:

```REACT_APP_API_KEY=<token>```
