# is-npm-package.json
Check if a file is a valid npm package.json

[![NPM](https://nodei.co/npm/is-npm-package.json.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/is-npm-package.json/)

## Install
### With npm
```bash
npm install is-npm-package.json
``` 

### With yarn
```bash
yarn add is-npm-package.json
``` 
## API

### `isNpmPackage(path)`
Check if a file is a valid npm package.json, called synchronously where:  

Parameters
- `path` - a buffer or a string.  

Return value
- An Object where:
    - `valid` - a boolean value: true when the file is a valid npm package.json and false if is not.
    - `message` - an Object with the file content when valid is true and a SyntaxError exception or a String message information when valid is false.

## Usage examples

### Synchronous
#### With a String path
```javascript
const { isNpmPackage } = require('is-npm-package.json');

const result = isNpmPackage('./package.json');
if (result && !result.valid) {
  console.log(result.valid);
  console.log(result.message);
} else {
  console.log(result.valid);
  console.log(result.message);
}
```
#### With a Buffer path
```javascript
const { isNpmPackage } = require('is-npm-package.json');

const result = isNpmPackage(Buffer.from('./package.json'));
if (result && !result.valid) {
  console.log(result.valid);
  console.log(result.message);
} else {
  console.log(result.valid);
  console.log(result.message);
}
```
