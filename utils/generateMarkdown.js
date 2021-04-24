// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (licenseType) => {
  let licenseIMG;

  switch (licenseType) {
    case 'MIT':
      licenseIMG = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'ISC':
      licenseIMG = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'Mozilla':
      licenseIMG = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'none':
      licenseIMG = '';
      break;
  }
  return licenseIMG;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (licenseType) => {
  let licenseURL;

  switch (licenseType) {
    case 'MIT':
      licenseURL = 'https://opensource.org/licenses/MIT';
      break;
    case 'ISC':
      licenseURL = 'https://opensource.org/licenses/ISC';
      break;
    case 'Mozilla':
      licenseURL = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'none':
      licenseURL = '';
      break;
    
  }
  return licenseURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
const generateMarkdown = (userInput) => {

  const licenseBadge = renderLicenseBadge(userInput.licenseType);
  const licenseURL = renderLicenseLink(userInput.licenseType);
  return`
# Project Name:
${userInput.projectName}

## Description
${userInput.description}

## Table of Contents
- [Title](#Project-Name)
- [Description](#Description)
- [License](#License)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [Tests](#Tests)
- [Questions](#Questions)

## License
${licenseBadge} | [View License](${licenseURL})

## Installation 
${userInput.install}

## Usage
${userInput.usage}

## Contributions
${userInput.contributions}

## Tests
${userInput.testCommand}

## Questions
For any questions, concerns, or comments, please contact at ${userInput.email} or visit [https://github.com/${userInput.GithubUsername}](https://github.com/${userInput.GithubUsername})
`;
}

module.exports = generateMarkdown;
