// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of the project?", 
    },
    {
        type: "input",
        name: "desc",
        message: "What is a general description of the project",
    },
    {
        type: "input",
        name: "install",
        message: "What do you need to install",
    },
    {
        type: "input",
        name: "usage",
        message: "What usage does your project have?",
    },
    {
        type: "list",
        name: "license",
        message: "What licence do you need?",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
            "None"
        ]
    },
    {
        type: "input",
        name: "contribution",
        message: "Contribution guidelines?",
    },
    {
        type: "input",
        name: "test",
        message: "Test instructions?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your github name?",
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email?",
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
