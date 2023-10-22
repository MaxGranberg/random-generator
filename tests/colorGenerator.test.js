import ColorGenerator from '../src/colorGenerator.js'

describe('ColorGenerator', () => {
  let colorGenerator

  beforeEach(() => {
    colorGenerator = new ColorGenerator()
  })

  describe('generateRandomRGBColor', () => {
    it('should generate a valid RGB color string', () => {
      const result = colorGenerator.generateRandomRGBString()
      expect(result).toMatch(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/)

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
      const result = colorGenerator.generateRandomHEXString()
      expect(result).toMatch(/^#[0-9A-F]{6}$/)
    })
  })

  describe('generateRandomRGBAColor', () => {
    it('should generate a valid RGBA color string', () => {
      const result = colorGenerator.generateRandomRGBAString()
      expect(result).toMatch(/^rgba\(\d{1,3}, \d{1,3}, \d{1,3}, (0(\.\d{1,2})?|1(\.0{1,2})?)\)$/)

      // Extract numbers from string and check if they are within their correct ranges
      const numbers = result.match(/\d+/g).map(Number)
      numbers.slice(0, 3).forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(0)
        expect(number).toBeLessThan(256)
      })
      const alphaValue = parseFloat(result.match(/(\d\.\d{1,2}|\d)/g).pop())
      expect(alphaValue).toBeGreaterThanOrEqual(0)
      expect(alphaValue).toBeLessThanOrEqual(1)
    })
  })

  describe('generateRandomHslColor', () => {
    it('should generate a valid HSL color string', () => {
      const result = colorGenerator.generateRandomHSLString()
      expect(result).toMatch(/^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/)

      // Extract numbers from string and check if they are within their correct ranges
      const numbers = result.match(/\d+/g).map(Number)
      expect(numbers[0]).toBeGreaterThanOrEqual(0)
      expect(numbers[0]).toBeLessThan(361)

      expect(numbers[1]).toBeGreaterThanOrEqual(0)
      expect(numbers[1]).toBeLessThan(101)

      expect(numbers[2]).toBeGreaterThanOrEqual(0)
      expect(numbers[2]).toBeLessThan(101)
    })
  })
})
