// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const readMeCreate = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = 
[   "What is the name of the project?", 
    "What is a general description of the project",
    "What do you need to install",
    "What usage does your project have?",
    "What licence do you need?",
    "Contribution guidelines?",
    "Test instructions?"
];

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: questions[0],
        },
        {
            type: "input",
            name: "desc",
            message: questions[1],
        },
        {
            type: "input",
            name: "install",
            message: questions[2],
        },
        {
            type: "input",
            name: "usage",
            message: questions[3],
        },
        {
            type: "list",
            name: "license",
            message: questions[4],
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
            message: questions[5],
        },
        {
            type: "input",
            name: "test",
            message: questions[6],
        }
    ]);
} 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, data), err =>{
            if(err){
                return console.log("Error found");
            }
            return console.log("Success! No error");
        }

}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers) => console.log(answers)); //answers.name
    
    
}

// Function call to initialize app
init();
