/**
 * Generates a random color.
 */
class ColorGenerator {
  #rgbMaxValue = 256
  #hueMaxValue = 361
  #saturationAndLightnessValue = 101
  /**
   * Generates a random RGB color.
   *
   * @returns {string} generatedColor - The random generated RGB color as a string.
   */
  generateRandomRGBColor () {
    const redValue = Math.floor(Math.random() * this.#rgbMaxValue)
    const greenValue = Math.floor(Math.random() * this.#rgbMaxValue)
    const blueValue = Math.floor(Math.random() * this.#rgbMaxValue)

    const generatedColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`
    return generatedColor
  }

  /**
   * Generates a random RGBA color.
   *
   * @returns {string} generatedColor - The random generated RGBA color as a string.
   */
  generateRandomRGBAColor () {
    const redValue = Math.floor(Math.random() * this.#rgbMaxValue)
    const greenValue = Math.floor(Math.random() * this.#rgbMaxValue)
    const blueValue = Math.floor(Math.random() * this.#rgbMaxValue)
    const alphaValue = Math.random().toFixed(2)

    const generatedColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`
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

    const generatedHexColorArray = randomHexArray.map(() =>
      hexCharacters[Math.floor(Math.random() * hexCharacters.length)]
    )

    const generatedHexColorString = generatedHexColorArray.join('').toString()

    return `#${generatedHexColorString}`
  }

  /**
   * Generates a random HSL color.
   *
   * @returns {string} generatedHslColorString - The random generated Hsl color as a string.
   */
  generateRandomHslColor () {
    const hue = Math.floor(Math.random() * this.#hueMaxValue)
    const saturation = Math.floor(Math.random() * this.#saturationAndLightnessValue)
    const lightness = Math.floor(Math.random() * this.#saturationAndLightnessValue)

    const generatedHslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
    return generatedHslColor
  }
}

export default ColorGenerator
