//'use strict';

const fs = require('fs');
const path = require('path');

const messagesError = {
  failAccess: 'Can\'t read this path/file',
  failOpen: 'Can\'t open this path/file',
  failObject: 'This is not a JSON file',
  failNpmPackage: 'This is not a valide npm package.json (missing name and/or version key)'
}
// if error return {valid: false, message: "reason" }
// if no error return {valid: true, message: {} }
module.exports.isNpmPackage = function(pathToPackage) {
  const report = {};
  report.valid = false;

  console.log(pathToPackage);

  fs.access(pathToPackage, fs.constants.F_OK, (err) => {
    if (err) {
      console.log('error');  
      report.message = messagesError.failAccess;
    } else {
      console.log('success');
      var package = {};
      try {
        package = require(path.resolve(pathToPackage));
      }
      catch(err) {
        report.message = messagesError.failOpen;
      }
      if (package && typeof(package) === 'object') {
        if (package.name && package.version) {
          report.valid = true;
          report.message = package;
        } else {
          report.message = messagesError.failNpmPackage;          
        }
      } else {
        report.message = messagesError.failObject;
      }
    } 
  });
  return report;
}