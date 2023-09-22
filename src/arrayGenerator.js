/**
 * Generates a random array.
 */
class ArrayGenerator {
  /**
   * Creates a new ArrayGenerator instance.
   *
   * @param {number} [lengthOfArray=10] - Desired length of array to generate.
   * If not specified the default length is set to 10.
   */
  constructor (lengthOfArray = 10) {
    this.lengthOfArray = lengthOfArray
  }

  /**
   * Generates a random array of numbers.
   *
   * @param {number} [lengthOfArray=this.lengthOfArray] - Desired length of array to generate.
   * If not specified the length is the default value set in the constructor
   * @param {number} [minValueInArray=1] - Desired minimum value a index can have in the generated array.
   * If not specified the maximum value is set to a default value of 1.
   * @param {number} [maxValueInArray=10000] - Desired maximum value a index can have in the generated array.
   * If not specified the maximum value is set to a default value of 10 000.
   * @returns {Array} generatedArray - The random generated array.
   */
  generateRandomNumbersArray (lengthOfArray = this.lengthOfArray, minValueInArray = 1, maxValueInArray = 10000) {
    this.validateLengthOfArray(lengthOfArray)
    this.validateNumberArray(minValueInArray, maxValueInArray)

    const generatedArray = []

    for (let i = 0; i < lengthOfArray; i++) {
      generatedArray.push(Math.floor(Math.random() * (maxValueInArray - minValueInArray + 1) + minValueInArray)) // Push random number between minValue and maxValue
    }

    return generatedArray
  }

  /**
   * Validation for the custom length of an array generated.
   *
   * @param {number} lengthOfArray - The custom length a user wants for their array.
   */
  validateLengthOfArray (lengthOfArray) {
    if (lengthOfArray <= 0) {
      throw new Error('lengthOfArray must be a positive number larger than 0')
    }
  }

  /**
   * Validation for the minimum and maximum value inputs into their numbersArray.
   *
   * @param {number} minValue - The minimum value a user wants for their array.
   * @param {number} maxValue - The maximum value a user wants for their array.
   */
  validateNumberArray (minValue, maxValue) {
    if (minValue > maxValue) {
      throw new Error('minValueInArray must be less than maxValueInArray')
    }
  }
}

export default ArrayGenerator
