/**
 * Generates a random string with a specific length.
 * It uses the english alphabet, both lower and upper case.
 */
class StringGenerator {
  /**
   * Creates a new StringGenerator instance.
   *
   * @param {number} stringLength - If user wants a specific length for the string.
   * If not specified the default length is 10 characters.
   */
  constructor (stringLength = 10) {
    this.defaultStringLength = stringLength
    this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  }

  /**
   * Generates a random string from alphabetic characters.
   *
   * @param {number} stringLength - If user wants a specific length for the string otherwise 10 characters long.
   * @returns {string} finalString - A randomly generated string.
   */
  generateRandomString (stringLength = this.defaultStringLength) {
    let finalString = ''

    for (let i = 0; i < stringLength; i++) {
      finalString += this.characters.charAt(Math.floor(Math.random() * this.characters.length))
    }
    return finalString
  }
}

export default StringGenerator
