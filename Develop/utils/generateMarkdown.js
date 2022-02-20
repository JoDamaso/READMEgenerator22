// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) {
    return '';
  }

  return `
  [![License: MIT](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/MIT)
  `;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
}

// this goes under data.title, somehow
// ${renderLicenseBadge(license)} ${data.license} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Deployed Site](#deployed-site)
  - [Contribution](#contribution)
  - [License](#license)
  - [Questions](#uestions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Deployed Site
  This is the link to the deployed site if you would like to view my application - https://${data.github}.github.io/${data.deployed}/

  ## Contribution
  ${data.contribute}

  ## License
  This project is licensed under ${data.license}

  ## Questions
  If there was any questions about this certain project, contact me directly through ${data.email}. You may also view other projects of mine at https://github.com/${data.github}.
  `;
}

module.exports = generateMarkdown;
