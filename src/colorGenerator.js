/**
 * Generates a random color.
 */
class ColorGenerator {
  /**
   * Generates a random RGB color.
   *
   * @returns {string} generatedColor - The random generated RGB color as a string.
   */
  generateRandomRGBColor () {
    const rColor = Math.floor(Math.random() * 256)
    const gColor = Math.floor(Math.random() * 256)
    const bColor = Math.floor(Math.random() * 256)

    const generatedColor = `rgb(${rColor},${gColor},${bColor})`
    return generatedColor
  }

  /**
   * Generates a random HEX color.
   *
   * @returns {string} generatedHexColorString - The random generated HEX color as a string.
   */
  generateRandomHexColor () {
    const hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    const randomHexArray = Array.from({ length: 6 })

    const generatedHexColorArray = randomHexArray.map(() => hexCharacters[Math.floor(Math.random() * 16)])

    const generatedHexColorString = generatedHexColorArray.join('').toString()

    return `#${generatedHexColorString}`
  }
}

export default ColorGenerator
