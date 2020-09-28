const badgeHandler = licenseArr => {
    let badgeArr = [];
    for (let i = 0; i < licenseArr.length; i++){
        let newbadge = '![GitHub All Releases](https://img.shields.io/badge/License-' + licenseArr[i] + '-blue)';
        badgeArr.push(newbadge);
    }
    return badgeArr.join(' ');
}
const licenseHandler = licenseArr => {
    return licenseArr.join(', ');
}
module.exports = readmeData => {
    const {github, email, projectInfo} = readmeData;
    const projectInfoObject = projectInfo[0];
    const {title, description, installation, usage, contribution, tests, license} = projectInfoObject;
    return `
# ${title}

${badgeHandler(license)}

## Description
${description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
Licensed Under: ${licenseHandler(license)}

## Contributing
${contribution}
    

## Tests
${tests}

## Questions
If you have any further questions about this project contact me via:

GitHub: [${github}](http://github.com/${github})

or my email: ${email}
`;
}