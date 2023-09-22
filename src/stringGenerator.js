/**
 * Generates a random string with a specific length.
 * It uses the english alphabet, both lower and upper case.
 */
class StringGenerator {
  #defaultLength = 10
  #characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  /**
   * Generates a random string from alphabetic characters.
   *
   * @param {number} [customLength=this.#defaultLength] - The length of the string,
   * If not specified it takes the default value of 10.
   * @returns {string} finalString - A randomly generated string.
   */
  generateRandomString (customLength = this.#defaultLength) {
    this.#validateLengthInput(customLength)

    let finalString = ''

    for (let i = 0; i < customLength; i++) {
      finalString += this.#characters.charAt(Math.floor(Math.random() * this.#characters.length))
    }
    return finalString
  }

  /**
   * Validation for the customLength parameter that the user can input.
   *
   * @param {number} customLength - The parameter to validate.
   */
  #validateLengthInput (customLength) {
    if (typeof customLength !== 'number' || customLength <= 0) {
      throw new Error('customLength parameter must be a postitive number')
    }
  }
}

export default StringGenerator
