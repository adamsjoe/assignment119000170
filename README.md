# Web Applications Programming - Assignment 1
# Student Number: 19000170

## Instructions

This repository contains the submission for the Web Applications Development assignment 1. 

The repository is located at: [https://github.com/adamsjoe/assignment119000170](https://github.com/adamsjoe/assignment119000170)

### Requirements

To run the tests in this repository, Node will need to be installed.  

Once installed, navigate to the directory and use the command ```npm install``` which will install all pre-requisites for the tests.

### Running Tests

To run the tests, simply use the ```npm test``` command.  The tests will then run.

### Test Design

In keeping with the idea that unit tests should be very specific, each test had began with a single assertion (or in the case of Jest, a single **expect**) It was considered to "group" the assertions, for example, all of these tests:

```javascript
it('should have 6 videos', () => {        
    expect(Object.keys(pageData.balances.hint.video).length).toBe(6)
});

/* problem_s video tests */
it('first video "image" should be "problem_s.png"', () => {
    const image = JSON.stringify(pageData.balances.hint.video[0].image);
    expect(image).toBe("\"problem_s.png\"")
    expect(typeof pageData.balances.hint.video[0].image).toBe('string')
});       

it('first video "link" should be "overall"', () => {
    const image = JSON.stringify(pageData.balances.hint.video[0].link);
    expect(image).toBe("\"overall\"")
    expect(typeof pageData.balances.hint.video[0].link).toBe('string')
});         

it('first video "title" should be "problem_s"', () => {
    const image = JSON.stringify(pageData.balances.hint.video[0].title);
    expect(image).toBe("\"problem_s\"")
    expect(typeof pageData.balances.hint.video[0].title).toBe('string')
});       

it('first video "type" should be "general"', () => {
    const image = JSON.stringify(pageData.balances.hint.video[0].type);
    expect(image).toBe("\"general\"")
    expect(typeof pageData.balances.hint.video[0].type).toBe('string')
});    
```
could be rewritten to be a single test, this would look like this:
```javascript
    it('"problem_s" video should have appropriate attributes', () => {        
        const image = JSON.stringify(pageData.balances.hint.video[0].image);
        const link = JSON.stringify(pageData.balances.hint.video[0].link);
        const title = JSON.stringify(pageData.balances.hint.video[0].title);
        const type = JSON.stringify(pageData.balances.hint.video[0].type);

        expect(Object.keys(pageData.balances.hint.video).length).toBe(6)
        
        expect(image).toBe("\"problem_s.png\"")
        expect(link).toBe("\"overall\"")
        expect(title).toBe("\"problem_s\"")
        expect(type).toBe("\"general\"")
        
        expect(typeof pageData.balances.hint.video[0].image).toBe('string')
        expect(typeof pageData.balances.hint.video[0].link).toBe('string')
        expect(typeof pageData.balances.hint.video[0].title).toBe('string')
        expect(typeof pageData.balances.hint.video[0].type).toBe('string')
    });       
```
This is supported with Jest, however, this then removed specificity from the test and demotes the test to be more like a "code smell" (_a code smell is any characteristic in the source code of a program that possibly indicates a deeper problem._)  For this reason, the tests are have been split up.  However, the one exception is that each test will also check the type of data which it is being checked.  In this way, if this were real, as developers we could ensure that should front end sanitisation fail, we will catch these at this level. We do this using the code
```javascript
expect(typeof pageData.balances.hint.video[0].image).toBe('string')
```
which checks a specific element is of the type indicted (in the example, string.)

### Viewing results

As part of the *package.json* file, a simple HTML reporter has been configured.  

This file will automatically generate in the same directory as the package.json file and will be called "**test-report.html**" (_Note:_ the .gitignore file has been configured to not include this file in the repository.)

#### Example Report

A sample test report has been included - this is merely as a backup in the event that something fails to install/download/other internet issues.  The sample file is called "**sample-test-report.html**"