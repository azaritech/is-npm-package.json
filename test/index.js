const path = '/home/nico/dev/azaritech/david-cli/package.json';
//const path = '../../package.json';
const test = require('../lib');

test.isFileExist(path, function (valid, message) {
  if (!valid) {
    console.log(valid);
    console.log(message);
  }
  if (valid) {
    console.log(valid);
  }
});