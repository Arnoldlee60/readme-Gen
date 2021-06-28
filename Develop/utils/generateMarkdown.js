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
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
}                            //https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}
Licencing:
  ${renderLicenseLink(license)} //licence part

Table of Contents
================
Description
Installation
Usage
Licence
Contribution
Test
================

Description
${data.description}

Installation
${data.Installation}
Usage
${data.Usage}
Licence
${data.Licence}
Contribution
${data.Contribution}
Test
${data.Test}

`
}

module.exports = generateMarkdown;
