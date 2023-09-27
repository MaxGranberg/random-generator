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
   * Generates a random even number within a specified range.
   *
   * @param {number} [minValue=this.#defaultMinValue] - Minimum value that the user wants for the range of numbers.
   * If not specified the range is the default value 1.
   * @param {number} [maxValue=this.#defaultMaxValue] - Maximum value that the user wants for the range of numbers.
   * If not specified the range is the default value 10000.
   * @returns {number} randomNumber - A randomly generated even number.
   */
  generateRandomEvenNumber (minValue = this.#defaultMinValue, maxValue = this.#defaultMaxValue) {
    this.#validateRangeInput(minValue, maxValue)

    let randomEvenNumber = this.generateRandomNumber(minValue, maxValue)

    while (randomEvenNumber % 2 !== 0) {
      randomEvenNumber = this.generateRandomNumber(minValue, maxValue)
    }

    return randomEvenNumber
  }

  /**
   * Generates a random odd number within a specified range.
   *
   * @param {number} [minValue=this.#defaultMinValue] - Minimum value that the user wants for the range of numbers.
   * If not specified the range is the default value 1.
   * @param {number} [maxValue=this.#defaultMaxValue] - Maximum value that the user wants for the range of numbers.
   * If not specified the range is the default value 10000.
   * @returns {number} randomNumber - A randomly generated odd number.
   */
  generateRandomOddNumber (minValue = this.#defaultMinValue, maxValue = this.#defaultMaxValue) {
    this.#validateRangeInput(minValue, maxValue)

    let randomOddNumber = this.generateRandomNumber(minValue, maxValue)

    while (randomOddNumber % 2 === 0) {
      randomOddNumber = this.generateRandomNumber(minValue, maxValue)
    }

    return randomOddNumber
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
