import StringGenerator from './stringGenerator.js'

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

    const generatedArray = []

    for (let i = 0; i < lengthOfArray; i++) {
      const randomNumber = Math.floor(Math.random() * (maxValueInArray - minValueInArray + 1) + minValueInArray)
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
    const generatedArray = []

    for (let i = 0; i < lengthOfArray; i++) {
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
      throw new Error('Custom length of array must be a number greater than zero')
    }
  }

  /**
   * Validation for the minimum and maximum value inputs into their numbersArray.
   *
   * @param {number} minValue - The minimum value a user wants for their array.
   * @param {number} maxValue - The maximum value a user wants for their array.
   */
  #validateNumberArray (minValue, maxValue) {
    if (minValue >= maxValue) {
      throw new Error('Minimum value in the custom range must be less than the maximum value')
    }
  }

  /**
   * Validation for the minimum and maximum value inputs into their numbersArray.
   *
   * @param {number} minStringLength - The minimum value a user wants for their array.
   * @param {number} maxStringLength - The minimum value a user wants for their array.
   */
  #validateStringArray (minStringLength, maxStringLength) {
    if (minStringLength < 1) {
      throw new Error('Custom string length must be greater than zero')
    }

    if (minStringLength >= maxStringLength) {
      throw new Error('Minimum string length must be less than maximum string length')
    }
  }
}

export default ArrayGenerator
