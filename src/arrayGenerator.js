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
   * Generates a random array of numbers.
   *
   * @param {number} [lengthOfArray=#defaultArrayLength] - Desired length of array to generate.
   * If not specified the default array length is set to 10.
   * @param {number} [minValueInArray=this.#minValueInArray] - Desired minimum value a index can have in the generated array.
   * If not specified the minimum value is set to a default value of 1.
   * @param {number} [maxValueInArray=this.#maxValueInArray] - Desired maximum value a index can have in the generated array.
   * If not specified the maximum value is set to a default value of 10 000.
   * @returns {Array} generatedArray - The random generated array.
   */
  generateRandomNumbersArray (lengthOfArray = this.#defaultArrayLength, minValueInArray = this.#minValueInArray, maxValueInArray = this.#maxValueInArray) {
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
   * Generates a random array of strings.
   *
   * @param {number} [lengthOfArray=#defaultArrayLength] - Desired length of array to generate.
   * If not specified the default array length is set to 10.
   * @param {number} [minStringLength=this.#stringMinLength] - The minimum length a string can be in the array.
   * If not specified the minimum length is set to a default value of 1.
   * @param {number} [maxStringLength=this.#stringMaxLength] - The maximum length a string can be in the array.
   * If not specified the maximum length is set to a default value of 10.
   * @returns {Array} generatedArray - The random generated array.
   */
  generateRandomStringsArray (lengthOfArray = this.#defaultArrayLength, minStringLength = this.#stringMinLength, maxStringLength = this.#stringMaxLength) {
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
   * Generates a random array of even numbers.
   *
   * @param {number} [lengthOfArray=#defaultArrayLength] - Desired length of array to generate.
   * If not specified the default array length is set to 10.
   * @param {number} [minValueInArray=this.#minValueInArray] - Desired minimum value a index can have in the generated array.
   * If not specified the minimum value is set to a default value of 1.
   * @param {number} [maxValueInArray=this.#maxValueInArray] - Desired maximum value a index can have in the generated array.
   * If not specified the maximum value is set to a default value of 10 000.
   * @returns {Array} generatedArray - The random generated array.
   */
  generateRandomEvenNumbersArray (lengthOfArray = this.#defaultArrayLength, minValueInArray = this.#minValueInArray, maxValueInArray = this.#maxValueInArray) {
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
