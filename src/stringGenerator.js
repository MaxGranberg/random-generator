/**
 * Generates a random string with a specific length.
 * It uses the english alphabet, both lower and upper case.
 */
class StringGenerator {
  /**
   * Creates a new StringGenerator instance.
   *
   * @param {number} [customLength=10] - If user wants a specific length for the string.
   * If not specified the default length is set to 10 characters.
   */
  constructor (customLength = 10) {
    this.validateLengthInput(customLength)

    this.defaultStringLength = customLength
    this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  }

  /**
   * Generates a random string from alphabetic characters.
   *
   * @param {number} [customLength=this.defaultStringLength] - The length of the string,
   * if not specified it takes the default value set in the constructor.
   * @returns {string} finalString - A randomly generated string.
   */
  generateRandomString (customLength = this.defaultStringLength) {
    this.validateLengthInput(customLength)

    let finalString = ''

    for (let i = 0; i < customLength; i++) {
      finalString += this.characters.charAt(Math.floor(Math.random() * this.characters.length))
    }
    return finalString
  }

  /**
   * Validation for the customLength parameter that the user can input.
   *
   * @param {number} customLength - The parameter to validate.
   */
  validateLengthInput (customLength) {
    if (typeof customLength !== 'number' || customLength <= 0) {
      throw new Error('customLength parameter must be a postitive number')
    }
  }
}

export default StringGenerator
