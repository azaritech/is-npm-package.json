const { isNpmPackage } = require('is-npm-package.json');

// const result = isNpmPackage(Buffer.from('./package.json'));
// if (result && !result.valid) {
//   console.log(result.valid);
//   console.log(result.message);
// } else {
//   console.log(result.valid);
//   console.log(result.message);
// }

const result = isNpmPackage('./package.json');
if (result && !result.valid) {
  console.log(result.valid);
  console.log(result.message);
} else {
  console.log(result.valid);
  console.log(result.message);
}