import ColorGenerator from '../src/colorGenerator.js'

describe('ColorGenerator', () => {
  let colorGenerator

  beforeEach(() => {
    colorGenerator = new ColorGenerator()
  })

  describe('generateRandomRGBColor', () => {
    it('should generate a valid RGB color string', () => {
      const result = colorGenerator.generateRandomRGBColor()
      expect(result).toMatch(/^rgb\(\d{1,3},\d{1,3},\d{1,3}\)$/)

      // Extract numbers from string and check if they are within the range 0-255
      const numbers = result.match(/\d+/g).map(Number)
      numbers.forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(0)
        expect(number).toBeLessThan(256)
      })
    })
  })

  describe('generateRandomHexColor', () => {
    it('should generate a valid HEX color string', () => {
      const result = colorGenerator.generateRandomHexColor()
      expect(result).toMatch(/^#[0-9A-F]{6}$/)
    })
  })
})
