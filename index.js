// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile)
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
// const questions = [];
function questionsUser (){
    return inquirer.prompt([
        {
            type: "input",
            name: "Title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Please have a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation packages for this project?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose a appropriate license for this project: ",
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
            name: "contributing",
            message: "Please list the contributors of this projects"
        },
        {
            type: "input",
            name: "tests",
            message: "Please input the Test Instructions."
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter email: "
        }
    ]);
} 

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// // TODO: Create a function to initialize app
// function init() {}

async function init () {
    try {
        const answers = await questionsUser();
        const generateREADME = generateMarkdown(answers);
        await writeFileAsync('README.md', generateREADME);
        console.log('Completed!');
    }   catch(err) {
        console.log(err);
    }
  }

// Function call to initialize app
init();
