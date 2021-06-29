// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](https://sheilds.io)`
}                            //https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](https://sheilds.io)`
}                            //https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //console.log(data)
  return `README.md
  
${data.name}  
================
Licencing
================
 //renderLicenseLink(data)} //licence part not finished\n

Table of Contents
================
Description\n
Installation\n
Usage\n
Licence\n
Contribution\n
Test\n

Description
================
${data.desc}\n

Installation
================
${data.install}\n

Usage
================
${data.usage}\n

Licence
================
${data.license}\n

Contribution
================
${data.contribution}\n

Test
================
${data.test}\n

`
}

module.exports = generateMarkdown;
