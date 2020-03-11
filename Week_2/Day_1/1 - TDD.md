# TDD - Test Driven Design

Other _____  Driven Design
- Behavioural
- Error

## Steps in TDD
- We write tests for our code first
- We write code to make sure the tests run
- We should fail all the tests
- We write our code to pass the tests
- Look again at our tests to see if we are missing anything
- Add extra tests
- Complete

## Notes on export
```js
module.exports = {equalArrays}
```
is the same as:
```js
module.exports = {equalArrays = equalArrays}
```
- Cannot import two files with the same function names
- Can import one function from a file that calls unimported function from same file

## Advantages of TDD
- Prove to others that it works
- Can come back later and gain confidence by running the tests

## Notes on mocha
- `npm run` accesses the "scripts" key in `package.json`, so `npm run test` runs path to mocha
- Executing `mocha` with no arguments reads `package.json`'s "test" directory and runs all the files in there
