// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { expect } = require("@jest/globals")
// const { it } = require("jest-circus")
// const { resolveTestEnvironment } = require("jest-resolve")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.


// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
//created a new variable as an array to pass into the function
var peopleComboArray = ["ford prefect" , "hitchhiker" ,
"zaphod beeblebrox" , "president of the galaxy" , "arthur dent" , "radio employee"]

//describing the function name here
describe("when capNameArray is called", () => {
//describing what the function does
  test("it returns an array with a sentence about each person with their names capitalized", () => {
    //describing the expected outcome
    expect(capNameArray()).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthus Dent is a radio employee."])  
  })
})
// expect("capitalizeName")   

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthus Dent is a radio employee."]





// b) Create the function that makes the test pass.
//attempted to use higher order function to map across the array and join the sentences together as string pushed into one array to get expected output

const capNameArray = (array) =>  array.map(arrayItem => typeof arrayItem === "string").push.join("")

console.log(capNameArray(peopleComboArray));
//I was not able to get my test to pass with this function


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//describing the function na,e
describe("remaindersOnly", () => {

//used multiple let statements to declare the inputs and expected outputs
  let hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  let hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  let expectedOutput1 = [ 2, 0, -1, 0 ]
  let expectedOutput2 = [ 2, 1, -1 ]

  //used an it statement to describe exactly what this text is doing, aslong with expect statements and dot notation to describe expected inputs and outputs
    it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
      expect(remaindersOnly(hodgepodge1)).toEqual(expectedOutput1)
      expect(remaindersOnly(hodgepodge2)).toEqual(expectedOutput2)
    })
})
    

// b) Create the function that makes the test pass.

const remaindersOnly = (array) =>  array.map(arrayItem => arrayItem % 3)
//created a function that maps across arrays and returns the remainder of numbers divided by 3.  Was not able to get the test to pass


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125




// a) Create a test with an expect statement using the variables provided.

//describing the function name here
describe("numbersCubed", () => {
  //created let statements to describe the inputs and outpots
  let cubeAndSum1 = [2, 3, 4]
  let cubeAndSum2 = [0, 5, 10]
  let expectedNumber1 = 99
  let expectedNumber2 = 1125

  //used it to describe what the function is doing
    it("returns the sum of all the numbers cubed", () => {
      expect(numbersCubed(cubeAndSum1)).toEqual(expectedNumber1)
      expect(numbersCubed(cubeAndSum2)).toEqual(expectedNumber2)
    })
})



// b) Create the function that makes the test pass.
//created a function that takes in the input arrays and returns the sum of all numbers cubed.  However was not able to get test to pass.
const numbersCubed = (array) =>  array.map(arrayItem => typeof arrayItem * 3).sum