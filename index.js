// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Imported modules
const generateMarkdown = require('./utils/generateMarkdown.js')

const writeFileAsync = util.promisify(fs.writeFile);

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'GithubUsername',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'projectName',
        message: "What is your project's name?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
      },
      {
        type: 'list',
        name: 'licenseType',
        message: "What kind of license should your project have?",
        choices: ["MIT", "ISC", "Mozilla", "none"]
      },
      {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
      },
      {
        type: 'input',
        name: 'testCommand',
        message: 'What command should be run to run tests?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'What does the user need to know about contributing to the repo?',
      },
];
const promptUser = () => {
    return inquirer.prompt(questions)
}


// Function to write README file
const writeToFile = (userInput) => {
    fs.writeFile('README.md', userInput, (error) =>
    error ? console.log('Error!') : console.log('Success!'));
}

// Function to initialize app
const init = () => {
    promptUser()
      .then((userInput) => writeFileAsync('README.md', generateMarkdown(userInput)))
      .then(() => console.log('Successfully wrote to README.md!!!'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();