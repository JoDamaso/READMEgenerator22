// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
}

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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Deployed Site](#deplyed site)
  - [Contributing](#contributing)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Deployed Site

  ## Contribution
  ${data.contribute}

  ## License
  This project is licensed under ${data.license}

  ## Questions
  If there was any questions about this certain project, contact me directly through ${data.email}. You may also view other projects of mine at https://github.com/${data.github}.
  `;
}

module.exports = generateMarkdown;
