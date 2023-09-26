# randomly-generate
Gives you the possibility to randomly generate random data such as: strings, arrays, numbers, dates and colors.

## Installation
```javascript
npm install randomly-generate
```

## Usage
First you'll need to import the generator or generators that you want to use.
``` javascript
import { StringGenerator, NumberGenerator, ArrayGenerator, ColorGenerator, DateGenerator } from 'randomly-generate';
```

### StringGenerator
Creates a random string with a specific length using the english alphabet. It mixes both lower and upper cases. If no length is specified the default length is 10 characters.

#### Methods
* generateRandomString(customLength:number) : Generates a random string with a custom length if customLength is specified. Otherwise the length is set to a default of 10 chartacters.
```javascript
const stringGenerator = new StringGenerator()
console.log(stringGenerator.generateRandomString(5)) // Example output: "aBcDE"
```

### NumberGenerator
Generates a random number within a specified range of your choice. If no range is specified it generates a random number between 1 and 10 000.

#### Methods
* generateRandomNumber(minValue:number, maxValue:number) : Generates a random number within the range of minValue and maxValue. If no values are specified the default minValue is set to 1 and the maxValue is set to 10 000.
```javascript
const numberGenerator = new NumberGenerator()
console.log(numberGenerator.generateRandomNumber(20, 123)) // Example output: 42
```

### DateGenerator
Generates a random date object within a specified range. If no range is specified it generates a random date object between 1900-01-01 and 2100-01-01

#### Methods
* generateRandomDate(startDate:Date, endDate:Date) : Generates a random date object within the specified range. If no startDate is specified it is set to 1900-01-01 and if no endDate is specified it it set to 2100-01-01
```javascript
const dateGenerator = new DateGenerator()
const startDate = new Date('1996-03-29')
const endDate = new Date('2023-09-25')
console.log(dateGenerator.generateRandomDate(startDate, endDate)) // Example output: Mon Nov 17 2008 08:16:28 GMT+0100 (Central European Standard Time)
```

### ColorGenerator
Can generate both a RGB color and a HEX color as a string.

#### Methods
* generateRandomRGBColor() : Generates a random RGB color as a string.
* generateRandomHexColor() : Generates a random Hex color as a string.

```javascript
const colorGenerator = new ColorGenerator()
console.log(colorGenerator.generateRandomRGBColor()) // Example output: "rgb(43,124,212)"
console.log(colorGenerator.generateRandomHexColor()) // Example output: "#659df7"
```

### ArrayGenerator
Can generate an array of random numbers within a specified range. Can also generate an array of strings where the lengths of the strings are random within a specified range. You can also choose a custom length to you array, if not specified it sets the length to 10.

#### Methods
* generateRandomNumbersArray(lengthOfArray:number, minValueInArray:number, maxValueInArray:number) : Generates an array of numbers. Only generates random numbers within the given range. If no range is specified the minValueInArray is set to 1 and the maxValueInArray is set to 10 000. If lengthOfArray is not specified the default lenght of the generated array is 10.

* generateRandomStringsArray(lengthOfArray: number, minStringLength:number, maxStringLength:number) : Generates an array of strings. Only generates random strings with a minimum and maximum length within the specified range. If no minStringLength is specified the minimum length a string in the array can be is 1 character. If no maxStringLength is specified the maximum length a string can be is set to 10 characters. If lengthOfArray is not specified the default lenght of the generated array is 10. The strings will be mixed with lower and upper case letters.

```javascript
const arrayGenerator = new ArrayGenerator()
console.log(arrayGenerator.generateRandomNumbersArray(4, 5, 20)) // Example output: [7, 19, 6, 12]
console.log(arrayGenerator.generateRandomStringsArray(5, 3, 8)) // Example output: ["aXe", "COyFx", "kjHgRsD", "abZ", "abCDeFgH"]
```

## Contributions
For any issues, bugs, feature requests or contributions please open an issue or a pull request on [GitHub](https://github.com/MaxGranberg/randomly-generate)

Here is a basic workflow if you wish to contribute:
1. Fork the [repository](https://github.com/MaxGranberg/randomly-generate) to your GitHub account.
2. Clone it to your local machine.
3. Navigate to your cloned repository's directory and install necessary dependencies using: npm install
4. Create a new branch to work on.
5. Make your changes/updates/improvements! Code, documentation or bug fixes, all is appreciated!
6. Run tests using the command "npm test" to make sure everything works properly.
7. Commit and push your changes back to your fork on GitHub.
8. Open a pull request, go to [the original repository](https://github.com/MaxGranberg/randomly-generate) and click "New pull request". Select your fork and the branch you just pushed to.
9. Provide a title and a brief description of your changes then click "Create pull request".

Thank you for contributing!


## License
MIT