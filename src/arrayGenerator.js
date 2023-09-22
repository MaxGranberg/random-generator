const DEFAULT_ARRAY_LENGTH = 10
const MIN_VALUE_IN_ARRAY = 1
const MAX_VALUE_IN_ARRAY = 10000

/**
 * Generates a random array.
 */
class ArrayGenerator {
  #lengthOfArray

  /**
   * Creates a new ArrayGenerator instance.
   *
   * @param {number} [lengthOfArray=DEFAULT_ARRAY_LENGTH] - Desired length of array to generate.
   * If not specified the default length is set to 10.
   */
  constructor (lengthOfArray = DEFAULT_ARRAY_LENGTH) {
    this.#validateLengthOfArray(lengthOfArray)
    this.#lengthOfArray = lengthOfArray
  }

  /**
   * Generates a random array of numbers.
   *
   * @param {number} [minValueInArray=MIN_VALUE_IN_ARRAY] - Desired minimum value a index can have in the generated array.
   * If not specified the maximum value is set to a default value of 1.
   * @param {number} [maxValueInArray=MAX_VALUE_IN_ARRAY] - Desired maximum value a index can have in the generated array.
   * If not specified the maximum value is set to a default value of 10 000.
   * @returns {Array} generatedArray - The random generated array.
   */
  generateRandomNumbersArray (minValueInArray = MIN_VALUE_IN_ARRAY, maxValueInArray = MAX_VALUE_IN_ARRAY) {
    this.#validateNumberArray(minValueInArray, maxValueInArray)

    const generatedArray = []

    for (let i = 0; i < this.#lengthOfArray; i++) {
      generatedArray.push(Math.floor(Math.random() * (maxValueInArray - minValueInArray + 1) + minValueInArray)) // Push random number between minValue and maxValue
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
