'use strict';

const fs = require('fs');
const path = require('path');

const report = {};
const messagesError = {
  failAccess: 'Can\'t read this path/file',
  failOpen: 'Can\'t open this path/file',
  failObject: 'This is not a JSON file',
  failNpmPackage: 'This is not a valide npm package.json (missing name and/or version key)'
}

module.exports.isFileExist = function (pathToPackage, callback) {
  // callback(valide, message)
  fs.access(pathToPackage, fs.constants.F_OK, (err) => {
    if (err) {
      callback(false, messagesError.failAccess);
    } else {
      callback(true, null);
    }
  });
};

//module.exports.canOpenJSON =
//module.exports.isJSON =
//module.exports.isValidPackageJSON =

// const messagesError = {
//   failAccess: 'Can\'t read this path/file',
//   failOpen: 'Can\'t open this path/file',
//   failObject: 'This is not a JSON file',
//   failNpmPackage: 'This is not a valide npm package.json (missing name and/or version key)'
// }
// // if error return {valid: false, message: "reason" }
// // if no error return {valid: true, message: {} }
// module.exports.isNpmPackage = function(pathToPackage) {
//   // const report = {};
//   // report.valid = false;

//   console.log(pathToPackage);
//   fs.access(pathToPackage, fs.constants.F_OK, (err) => {
//   //   const report = {};
//   //   report.valid = false;
//   //   if (err) {
//   //     console.log('1' + messagesError.failAccess);  
//   //     report.message = messagesError.failAccess;
//   //     console.log('2' + report.message);
//   //     return report;
//   //   } else {
//   //     console.log('success');
//   //     // let packageJSON = {};
//   //     // try {
//   //     //   packageJSON = require(path.resolve(pathToPackage));
//   //     // }
//   //     // catch(err) {
//   //     //   console.log(messagesError.failOpen);  
//   //     //   report.message = messagesError.failOpen;
//   //     // }
//   //     // if (packageJSON && typeof(packageJSON) === 'object') {
//   //     //   if (packageJSON.name && packageJSON.version) {
//   //     //     report.valid = true;
//   //     //     report.message = packageJSON;
//   //     //   } else {
//   //     //     console.log(messagesError.failNpmPackage); 
//   //     //     report.message = messagesError.failNpmPackage;          
//   //     //   }
//   //     // } else {
//   //     //   console.log(messagesError.failObjects); 
//   //     //   report.message = messagesError.failObject;
//   //     // }
//   //     return report;
//   //   } 
//   });
//   //return report;
// }