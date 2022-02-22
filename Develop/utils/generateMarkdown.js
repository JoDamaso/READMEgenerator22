// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  [![](https://img.shields.io/badge/license-${data.license.replaceAll(' ', '_')}-brightgreen)](https://opensource.org/licenses/${data.license === 'Apache 2.0' ? 'Apache-2.0' : data.license})\n


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
