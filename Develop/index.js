const inquirer = require('inquirer');

const generateReadMe = require('./src/readme-template');

const promptQuestionInfo = () => {
    console.log("======Contact Info======");
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Please enter you your GitHub username.',
            validate: (githubInput) => {
                if(githubInput) {
                    return true;
                }
                else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: (emailInput) => {
                if(emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        }
    ])
}
const promptProjectInfo = readmeData => {
    if (!readmeData.projectInfo) {
        readmeData.projectInfo = [];
    }
    console.log("======Project Information======");
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
            validate: (descriptionInput) => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Please provide a description of your project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project.',
            validate: (installationInput) => {
                if (installationInput) {
                    return true;
                }
                else {
                    console.log('Please provide installation instructions for your project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide the usage information of your project.',
            validate: (usageInput) => {
                if (usageInput) {
                    return true;
                }
                else {
                    console.log('Please provide the usage information of your project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide the contribution guidelines for your project.',
            validate: (contributionInput) => {
                if (contributionInput) {
                    return true;
                }
                else {
                    console.log('Please provide the contribution guidelines for your project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide test instructions for your project.',
            validate: (descriptionInput) => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Please provide test instructions for your project.')
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What liscenses did you you use for your project?',
            choices: ['afl', 'apache', 'artistic', 'bsl', 'bsd', 'cc', 'wtfpl', 'ecl', 'epl', 'eupl', 'agpl', 'gpl', 'lgpl', 'isc', 'lppl', 'ms-pl', 'mit', 'mpl', 'osl', 'postgresql', 'ofl', 'nsca', 'unliscense', 'zlib']
        }
    ]) .then (projectInfoData => {
        readmeData.projectInfo.push(projectInfoData);
        return readmeData;
    })
}
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
console.log("Welcome to README Generator!")
console.log("This application will prompt you for information in order to generate a professional README.md file!")
console.log("======Instructions======")
console.log('You will be first prompted to enter contact information for a "Further Questions" section.')
console.log("Then you will get prompts to enter infromation about your project, such as providing a description.")
console.log("Based off your responses a README.md file will be generated in the dist repository.")
console.log("======Let's Begin Generating your README.md======")

promptQuestionInfo()
    .then(promptProjectInfo)
    .then(readmeData => {
        return generateReadMe(readmeData);
    })
}

// function call to initialize program
init();
