import StringGenerator from './stringGenerator.js'
import NumberGenerator from './numberGenerator.js'

/**
 * Generates a random array.
 */
class ArrayGenerator {
  #defaultArrayLength = 10
  #minValueInArray = 1
  #maxValueInArray = 10000
  #stringMaxLength = 10
  #stringMinLength = 1

  /**
   * @typedef {object} RandomNumbersArrayOptions
   * @property {number} [lengthOfArray=this.#defaultArrayLength] - Desired length of array to generate. Default is 10.
   * @property {number} [minValueInArray=this.#minValueInArray] - Desired minimum value an index can have in the generated array. Default is 1.
   * @property {number} [maxValueInArray=this.#maxValueInArray] - Desired maximum value an index can have in the generated array. Default is 10,000.
   */

  /**
   * Generates a random array of numbers.
   *
   * @param {RandomNumbersArrayOptions} [options={}] - Configuration object for generating array.
   * @returns {Array} - The randomly generated array of numbers.
   */
  generateRandomNumbersArray ({
    lengthOfArray = this.#defaultArrayLength,
    minValueInArray = this.#minValueInArray,
    maxValueInArray = this.#maxValueInArray
  } = {}) {
    this.#validateLengthOfArray(lengthOfArray)
    this.#validateNumberArray(minValueInArray, maxValueInArray)

    const numberGenerator = new NumberGenerator()
    const generatedArray = []

    for (let i = 0; i < lengthOfArray; i++) {
      const randomNumber = numberGenerator.generateRandomNumber(minValueInArray, maxValueInArray)
      generatedArray.push(randomNumber)
    }

    return generatedArray
  }

  /**
   * @typedef {object} RandomStringsArrayOptions
   * @property {number} [lengthOfArray=this.#defaultArrayLength] - Desired length of array to generate. Default is 10.
   * @property {number} [minStringLength=this.#stringMinLength] - Minimum length a string can be in the array. Default is 1.
   * @property {number} [maxStringLength=this.#stringMaxLength] - Maximum length a string can be in the array. Default is 10.
   */

  /**
   * Generates a random array of strings.
   *
   * @param {RandomStringsArrayOptions} [options={}] - Configuration object for generating array of strings.
   * @returns {Array} - The randomly generated array of strings.
   */
  generateRandomStringsArray ({
    lengthOfArray = this.#defaultArrayLength,
    minStringLength = this.#stringMinLength,
    maxStringLength = this.#stringMaxLength
  } = {}) {
    this.#validateLengthOfArray(lengthOfArray)
    this.#validateStringArray(minStringLength, maxStringLength)

    const stringGenerator = new StringGenerator()
    const numberGenerator = new NumberGenerator()
    const generatedArray = []

    for (let i = 0; i < lengthOfArray; i++) {
      const randomLength = numberGenerator.generateRandomNumber(minStringLength, maxStringLength)
      generatedArray.push(stringGenerator.generateRandomString(randomLength))
    }

    return generatedArray
  }

  /**
   * @typedef {object} EvenNumbersArrayOptions
   * @property {number} [lengthOfArray=this.#defaultArrayLength] - Desired length of array to generate.
   * @property {number} [minValueInArray=this.#minValueInArray] - Desired minimum value an index can have in the generated array.
   * @property {number} [maxValueInArray=this.#maxValueInArray] - Desired maximum value an index can have in the generated array.
   */

  /**
   * Generates a random array of even numbers.
   *
   * @param {EvenNumbersArrayOptions} [options={}] - Configuration object for generating array.
   * @returns {Array} - The randomly generated array of even numbers.
   */
  generateRandomEvenNumbersArray ({
    lengthOfArray = this.#defaultArrayLength,
    minValueInArray = this.#minValueInArray,
    maxValueInArray = this.#maxValueInArray
  } = {}) {
    this.#validateLengthOfArray(lengthOfArray)
    this.#validateNumberArray(minValueInArray, maxValueInArray)

    const numberGenerator = new NumberGenerator()
    const generatedArray = []

    for (let i = 0; i < lengthOfArray; i++) {
      const randomEvenNumber = numberGenerator.generateRandomEvenNumber(minValueInArray, maxValueInArray)
      generatedArray.push(randomEvenNumber)
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
      throw new Error('Custom length of array must be a number greater than zero')
    }

    if (typeof lengthOfArray !== 'number') {
      throw new Error('Custom length value must be of type number')
    }
  }

  /**
   * Validation for the minimum and maximum value inputs into their numbersArray.
   *
   * @param {number} minValue - The minimum value a user wants for their range in their array.
   * @param {number} maxValue - The maximum value a user wants for their range in their array.
   */
  #validateNumberArray (minValue, maxValue) {
    if (minValue >= maxValue) {
      throw new Error('Minimum value in the custom range must be less than the maximum value')
    }

    if (typeof minValue !== 'number' || typeof maxValue !== 'number') {
      throw new Error('Values must be of type number')
    }
  }

  /**
   * Validation for the minimum and maximum string length a user wants for each string in their array.
   *
   * @param {number} minStringLength - The minimum length a user wants for a string in their array.
   * @param {number} maxStringLength - The maximum length a user wants for a string in their array.
   */
  #validateStringArray (minStringLength, maxStringLength) {
    if (minStringLength < 1) {
      throw new Error('Custom string length must be greater than zero')
    }

    if (minStringLength >= maxStringLength) {
      throw new Error('Minimum string length must be less than maximum string length')
    }

    if (typeof minStringLength !== 'number' || typeof maxStringLength !== 'number') {
      throw new Error('Custom string length inputs must be of type number')
    }
  }
}

export default ArrayGenerator
