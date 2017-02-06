'use strict';

const path = require('path');
const { isFileExistsSync } = require('is-file-exists');

module.exports.isNpmPackage = function (pathToPackage) {
  const result = isFileExistsSync(pathToPackage);
  if (result && !result.valid) {
    return {
      valid: false,
      message: result.message
    }
  } else {
    try {
      let fileContent = null;
      if (pathToPackage instanceof Buffer) {
        fileContent = require(path.resolve(pathToPackage.toString('ascii')));
      } else {
        fileContent = require(path.resolve(pathToPackage));
      }
      try {
        JSON.parse(JSON.stringify(fileContent));
        if (fileContent && typeof(fileContent) === 'object' && fileContent.name && fileContent.version) {
          return {
            valid: true,
            message: fileContent
          }
        } else {
          return {
            valid: false,
            message: 'Missing name and/or version.'
          }        
        }
      } catch(err) {
        return {
          valid: false,
          message: err
        }  
      }
    } catch(err) {
      return {
        valid: false,
        message: err
      }
    }
  }
}