// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
//imported modules
const generateMarkdown = require('./utils/generateMarkdown.js')

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
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


// TODO: Create a function to write README file
const writeToFile = (userInput) => {// THIS IS WHERE YOU LEFT OFF, STEPHEN
    fs.writeFile('README.md', userInput, (error) =>
    error ? console.log('Error!') : console.log('Success!'));
}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((userInput) => writeFileAsync('README.md', generateMarkdown(userInput)))
    //   .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to README.md!!!'))
      .catch((err) => console.error(err));
  };

// // Function call to initialize app
init();