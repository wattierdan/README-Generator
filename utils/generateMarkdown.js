// function to generate markdown for README
function generateMarkdown(userResponses) {

  // Generate Table of Contents
  let tableCont = `## Table of Contents`;

  if (userResponses.installation !== '') { tableCont += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { tableCont += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { tableCont += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { tableCont += `
  * [Tests](#tests)` };

  if (userResponses.license !== '') { tableCont += `
  * [License](#license)` };
 
  let genMarkdown = 
  `# ${userResponses.title}
  
  ## Description 
  
  ${userResponses.description}
  `

  // Add Table of Contents to markdown
  genMarkdown += tableCont;
 
  //Installation section
  if (userResponses.installation !== '') {
  
  genMarkdown +=
  `

  ## Installation
  
  ${userResponses.installation}
  `
  };
  
  //Usage section
  if (userResponses.usage !== '') {
  
  genMarkdown +=
  `
  ## Usage 
  
  ${userResponses.usage}`
  };
  
  //Contributing section
  if (userResponses.contributing !== '') {

  genMarkdown +=
  `
  
  ## Contributing
  
  ${userResponses.contributing}`
  };

  //Tests section
  if (userResponses.tests !== '') {
  
  genMarkdown +=
  `
  
  ## Tests
  
  ${userResponses.tests}`
  };

  // License section
  genMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;

  // Questions section
  let devInfo = 
  `
  ---
  
  ## Questions?
  Questions? please contact me:
 
  GitHub: [${userResponses.username}](https://github.com/${userResponses.username})
  `;

  // If email is not null, add to Question section
  if (userResponses.email !== null) {
  
    devInfo +=
  `
  Email: ${userResponses.email}
  `};

  // Add Question section to markdown
  genMarkdown += devInfo;

  // Generate markdown
  return genMarkdown;
  
}

module.exports = generateMarkdown;
