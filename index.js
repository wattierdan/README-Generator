const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "What is the title of your Project?",
        name: 'title',
        default: 'README.md',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Project Title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        default: 'wattierdan',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid GitHub username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your Email?",
        name: 'email',
        default: 'wattierdan@live.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid Email.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Enter a description of your Project",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a vaild Project Description.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Provide steps required for installation of your project.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions for usage of application.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Provide any tests written for your application.",
        name: 'tests'
    },
    {
        type: 'input',
        message: "Provide a license for your project.",
        name: 'license'
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}


// function to initialize program
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses!");
    
        
        // Pass Inquirer userResponses to generateMarkdown
        console.log("Generating your README file...")
        const markdown = generateMarkdown(userResponses);
        console.log(markdown);
    
        // Write markdown to file
        await writeToFile('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
}

// function call to initialize program
init();
