// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![license](https://img.shields.io/badge/license-${license}-blue)`
}                            
return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[![license](https://img.shields.io/badge/license-${license}-blue)](https://shields.io)`
}                           
return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //console.log(data)
  var x = renderLicenseLink(data.license);
  return `README.md
  
${data.name}  
================
Licences
================
${x}\n
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

Additional links
================
${'https://github.com/' + data.github}\n
${data.email}
`
}

module.exports = generateMarkdown;
