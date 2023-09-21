/**
 * Generates a random color.
 */
class ColorGenerator {
  /**
   * Generates a random RGB color.
   *
   * @returns {string} generatedColor - The random generated RGB color.
   */
  generateRandomRGBColor () {
    const rColor = Math.floor(Math.random() * 256)
    const gColor = Math.floor(Math.random() * 256)
    const bColor = Math.floor(Math.random() * 256)

    const generatedColor = `rgb(${rColor},${gColor},${bColor})`
    return generatedColor
  }
}

export default ColorGenerator
