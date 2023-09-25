import ArrayGenerator from '../src/arrayGenerator.js'

describe('ArrayGenerator', () => {
  let arrayGenerator

  beforeEach(() => {
    arrayGenerator = new ArrayGenerator()
  })

  describe('generateRandomNumbersArray', () => {
    it('should generate an array with default length of 10 when no arguments is passed', () => {
      const result = arrayGenerator.generateRandomNumbersArray()
      expect(result.length).toBe(10)
    })

    it('should generate an array with the correct custom length when it is specified', () => {
      const customLength = 14
      const result = arrayGenerator.generateRandomNumbersArray(customLength)
      expect(result.length).toBe(customLength)
    })

    it('should generate an array with numbers that is within a specified range', () => {
      const customLength = 25
      const minValue = 2
      const maxValue = 15
      const result = arrayGenerator.generateRandomNumbersArray(customLength, minValue, maxValue)

      for (const number of result) {
        expect(number).toBeGreaterThanOrEqual(minValue)
        expect(number).toBeLessThanOrEqual(maxValue)
      }
    })

    it('should throw an error if minValue is greater than or equal to maxValue', () => {
      const customLength = 15
      const minValue = 10
      const maxValue = 5
      expect(() => {
        arrayGenerator.generateRandomNumbersArray(customLength, minValue, maxValue)
      }).toThrow('Minimum value in the custom range must be less than the maximum value')

      expect(() => {
        arrayGenerator.generateRandomNumbersArray(10, 10, 10)
      }).toThrow('Minimum value in the custom range must be less than the maximum value')
    })

    it('should throw an error if custom length of array is less than or equal to 0', () => {
      const customLength = -5
      expect(() => {
        arrayGenerator.generateRandomNumbersArray(customLength)
      }).toThrow('Custom length of array must be a number greater than zero')
    })
  })

  describe('generateRandomStringsArray', () => {
    it('should generate an array with default length of 10 when no arguments is passed', () => {
      const result = arrayGenerator.generateRandomStringsArray()
      expect(result.length).toBe(10)
    })

    it('should generate an array with the correct custom length when it is specified', () => {
      const customLength = 7
      const result = arrayGenerator.generateRandomStringsArray(customLength)
      expect(result.length).toBe(customLength)
    })

    it('should generate an array with strings that are within the specified length', () => {
      const customLength = 50
      const minStringLength = 2
      const maxStringLength = 15
      const result = arrayGenerator.generateRandomStringsArray(customLength, minStringLength, maxStringLength)

      for (const string of result) {
        expect(string.length).toBeGreaterThanOrEqual(minStringLength)
        expect(string.length).toBeLessThanOrEqual(maxStringLength)
      }
    })

    it('should throw an error if minStringLength is greater than or equal to maxStringLength', () => {
      const customLength = 5
      const minStringLength = 10
      const maxStringLength = 5
      expect(() => {
        arrayGenerator.generateRandomStringsArray(customLength, minStringLength, maxStringLength)
      }).toThrow('Minimum string length must be less than maximum string length')

      expect(() => {
        arrayGenerator.generateRandomStringsArray(10, 10, 10)
      }).toThrow('Minimum string length must be less than maximum string length')
    })

    it('should throw an error if minStringLength is less than or equal to 0', () => {
      expect(() => {
        arrayGenerator.generateRandomStringsArray(10, -1, 4)
      }).toThrow('Custom string length must be greater than zero')

      expect(() => {
        arrayGenerator.generateRandomStringsArray(10, 0, 4)
      }).toThrow('Custom string length must be greater than zero')
    })

    it('should throw an error if custom length of array is less than or equal to 0', () => {
      const customLength = -5
      expect(() => {
        arrayGenerator.generateRandomStringsArray(customLength)
      }).toThrow('Custom length of array must be a number greater than zero')
    })
  })
})
