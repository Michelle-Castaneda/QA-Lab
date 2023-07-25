const {
    returnTwo, 
    greeting,
    add,
} = require('./functions')


// Create a test for returnTwo:

// This test should expect returnTwo() to equal 2.

test('returnTwo should have the value 2',() => {
    expect(returnTwo()).toEqual(2)

}) 

// Create a test for greeting:
// This test should expect greeting('James') to equal "Hello, James.".
// This test should expect greeting('Jill') to equal "Hello, Jill.".
describe('greetings with different names',() => {

test('the greeting should say Hello and the name of JAMES', () => {
    expect(greeting('James')).toBe("Hello, James")
})

test('the greeting should say Hello and the name of JILL', () => {
    expect(greeting('Jill')).toBe("Hello, Jill")
})
})

describe('sum of two numbers',() => {
test('function takes two nums and makes a sum',() => {
    expect(add(1,2)).toEqual(3)
})
test('function takes two parameters and makes a sum',() => {
    expect(add(5,9)).toEqual(14)
})
})