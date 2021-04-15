// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.Title} ![badge](https://img.shields.io/badge/license-${answers.license}-brightpink)


 ${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
 ${answers.installation}

## Usage
 ${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightpink)
<br />
This application is covered by the ${answers.license} license. 

## Contributing
 ${answers.contributing}

## Tests
✏ ${answers.tests}

## Questions
${answers.questions}<br />
<br />
If you have any question, please contact me on [GitHub] [${answers.username}](https://github.com/${answers.username})<br />
<br />
or you can Email me: ${answers.email}<br /><br />


`;
}

module.exports = generateMarkdown;
