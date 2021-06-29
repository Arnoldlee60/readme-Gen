// Global require's
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// Array of questions to ask the user
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
            "Open"
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
