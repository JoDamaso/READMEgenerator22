// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// linking using require() which paths to the js that generates our README template
const generateReadMe = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = (data) => {
    return inquirer.prompt([
        {   //title of README.md
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (REQUIRED)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        { // description of application
            type: 'input',
            name: 'description',
            message: 'Please write a description of your project. (REQUIRED)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("You must add a description to have a professional README with your project!")
                    return false;
                }
            }
        },
        { // github username
            type: 'input',
            name: 'github',
            message: 'What is your Github username? (REQUIRED)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter your Github username!')
                    return false;
                }
            }
        },
        { // user inputs email for contact purposes
            type: 'input',
            name: 'email',
            message: 'Please type your email. So users may contact you, if there was any questions about your application.'
        },
        { // installing the application to user
            type: 'input',
            name: 'install',
            message: 'Please type out the steps to install your project. (REQUIRED)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter the required steps to install your project!')
                    return false;
                }
            }
        },
        { // explaining how to use application
            type: 'input',
            name: 'usage',
            message: 'Please explain how to use your app! (REQUIRED)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please explain how to use your application!')
                    return false;
                }
            }
        },
        { // user pastes link to their deployed site
            type: 'input',
            name: 'deployed',
            message: 'Please type the exact name of your Repository!'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license is this under?',
            choices: ["MIT", "Apache", "ISC"]
        },
        { // explain to user how someone may want to contribute 
            type: 'input',
            name: 'contribute',
            message: 'Explain to user what they possibly can contribute to your appliction',
        }
    ])
};

// TODO: Create a function to write README file
// Function call to initialize app
questions()
.then(writeToFile = data => {
    const readMe = generateReadMe(data)

    fs.writeFile('./README.md', readMe, err => {
    if (err) throw new Error(err);

    console.log('README has been created! Check out README.md in this directory to see it!');
    });
});

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init()


