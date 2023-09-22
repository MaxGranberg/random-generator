/**
 * Generates a random number within a specified range.
 */
class NumberGenerator {
  #defaultMinValue = 1
  #defaultMaxValue = 10000

  /**
   * Generates a random number within a specified range.
   *
   * @param {number} [minValue=this.#defaultMinValue] - Minimum value that the user wants for the range of numbers.
   * If not specified the range is the default value 1.
   * @param {number} [maxValue=this.#defaultMaxValue] - Maximum value that the user wants for the range of numbers.
   * If not specified the range is the default value 10000.
   * @returns {number} randomNumber - A randomly generated number.
   */
  generateRandomNumber (minValue = this.#defaultMinValue, maxValue = this.#defaultMaxValue) {
    this.#validateRangeInput(minValue, maxValue)

    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)

    return randomNumber
  }

  /**
   * Validation for the minValue and maxValue parameters.
   *
   * @param {number} minValue - Minimum value that the user wants for the range of numbers.
   * @param {number} maxValue - Maximum value that the user wants for the range of numbers.
   */
  #validateRangeInput (minValue, maxValue) {
    if (typeof minValue !== 'number' || typeof maxValue !== 'number') {
      throw new Error('Values must be of type number')
    }

    if (minValue >= maxValue) {
      throw new Error('The minValue must be smaller than the maxValue')
    }
  }
}

export default NumberGenerator
