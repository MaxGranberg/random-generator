/**
 * Generates a random number within a specified range.
 */
class NumberGenerator {
  /**
   * Creates a new NumberGenerator instance.
   *
   * @param {number} [minValue=1] - Minimum value that the user wants for the range of numbers.
   * @param {number} [maxValue=1000] - Maximum value that the user wants for the range of numbers.
   * If not specified the default range is between 1 and 1000.
   */
  constructor (minValue = 1, maxValue = 1000) {
    this.minValue = minValue
    this.maxValue = maxValue
  }

  /**
   * Generates a random number within a specified range.
   *
   * @param {number} [minValue=1] - Minimum value that the user wants for the range of numbers.
   * @param {number} [maxValue=1000] - Maximum value that the user wants for the range of numbers.
   * If not specified the range is the default values set in the constructor.
   * @returns {number} randomNumber - A randomly generated number.
   */
  generateRandomNumber (minValue = this.minValue, maxValue = this.maxValue) {
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue) + minValue)

    return randomNumber
  }
}

export default NumberGenerator
