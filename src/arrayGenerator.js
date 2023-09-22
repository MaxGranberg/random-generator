import StringGenerator from './stringGenerator.js'

/**
 * Generates a random array.
 */
class ArrayGenerator {
  #lengthOfArray
  #defaultArrayLength = 10
  #minValueInArray = 1
  #maxValueInArray = 10000
  #stringMaxLength = 10
  #stringMinLength = 1

  /**
   * Creates a new ArrayGenerator instance.
   *
   * @param {number} [lengthOfArray=#defaultArrayLength] - Desired length of array to generate.
   * If not specified the default length is set to 10.
   */
  constructor (lengthOfArray = this.#defaultArrayLength) {
    this.#validateLengthOfArray(lengthOfArray)
    this.#lengthOfArray = lengthOfArray
  }

  /**
   * Generates a random array of numbers.
   *
   * @param {number} [minValueInArray=this.#minValueInArray] - Desired minimum value a index can have in the generated array.
   * If not specified the minimum value is set to a default value of 1.
   * @param {number} [maxValueInArray=this.#maxValueInArray] - Desired maximum value a index can have in the generated array.
   * If not specified the maximum value is set to a default value of 10 000.
   * @returns {Array} generatedArray - The random generated array.
   */
  generateRandomNumbersArray (minValueInArray = this.#minValueInArray, maxValueInArray = this.#maxValueInArray) {
    this.#validateNumberArray(minValueInArray, maxValueInArray)

    const generatedArray = []

    for (let i = 0; i < this.#lengthOfArray; i++) {
      const randomLength = Math.floor(Math.random() * (maxValueInArray - minValueInArray + 1) + minValueInArray)
      generatedArray.push(randomLength)
    }

    return generatedArray
  }

  /**
   * Generates a random array of strings.
   *
   * @param {number} [minStringLength=this.#stringMinLength] - The minimum length a string can be in the array.
   * If not specified the minimum length is set to a default value of 1.
   * @param {number} [maxStringLength=this.#stringMaxLength] - The maximum length a string can be in the array.
   * If not specified the maximum length is set to a default value of 10.
   * @returns {Array} generatedArray - The random generated array.
   */
  generateRandomStringsArray (minStringLength = this.#stringMinLength, maxStringLength = this.#stringMaxLength) {
    const stringGenerator = new StringGenerator()
    const generatedArray = []

    for (let i = 0; i < this.#lengthOfArray; i++) {
      const randomLength = Math.floor(Math.random() * (maxStringLength - minStringLength + 1) + minStringLength)
      generatedArray.push(stringGenerator.generateRandomString(randomLength))
    }

    return generatedArray
  }

  /**
   * Validation for the custom length of an array generated.
   *
   * @param {number} lengthOfArray - The custom length a user wants for their array.
   */
  #validateLengthOfArray (lengthOfArray) {
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
  #validateNumberArray (minValue, maxValue) {
    if (minValue > maxValue) {
      throw new Error('minValueInArray must be less than maxValueInArray')
    }
  }
}

export default ArrayGenerator
