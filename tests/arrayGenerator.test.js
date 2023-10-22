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
      const options = { lengthOfArray: 14 }
      const result = arrayGenerator.generateRandomNumbersArray(options)
      expect(result.length).toBe(options.lengthOfArray)
    })

    it('should generate an array with numbers that is within a specified range', () => {
      const options = { lengthOfArray: 25, minValueInArray: 2, maxValueInArray: 15 }

      const result = arrayGenerator.generateRandomNumbersArray(options)
      expect(result.length).toBe(options.lengthOfArray)

      for (const number of result) {
        expect(number).toBeGreaterThanOrEqual(options.minValueInArray)
        expect(number).toBeLessThanOrEqual(options.maxValueInArray)
      }
    })

    it('should throw an error if minValue is greater than or equal to maxValue', () => {
      const options = { lengthOfArray: 15, minValueInArray: 10, maxValueInArray: 5 }

      expect(() => {
        arrayGenerator.generateRandomNumbersArray(options)
      }).toThrow('Minimum value in the custom range must be less than the maximum value')

      expect(() => {
        arrayGenerator.generateRandomNumbersArray({ lengthOfArray: 10, minValueInArray: 10, maxValueInArray: 10 })
      }).toThrow('Minimum value in the custom range must be less than the maximum value')
    })

    it('should throw an error if custom length of array is less than or equal to zero', () => {
      const options = { lengthOfArray: -5 }

      expect(() => {
        arrayGenerator.generateRandomNumbersArray(options)
      }).toThrow('Custom length of array must be a number greater than zero')

      expect(() => {
        arrayGenerator.generateRandomNumbersArray({ lengthOfArray: 0, minValueInArray: 0, maxValueInArray: 0 })
      }).toThrow('Custom length of array must be a number greater than zero')
    })

    it('should throw an error if input arguments are not of type number', () => {
      const options = { lengthOfArray: 15, minValueInArray: 'test', maxValueInArray: 'test2' }
      expect(() => {
        arrayGenerator.generateRandomNumbersArray(options)
      }).toThrow('Values must be of type number')
    })

    it('should throw an error if custom length input argument is not a number', () => {
      const options = { lengthOfArray: 'test', minValueInArray: 10, maxValueInArray: 20 }
      expect(() => {
        arrayGenerator.generateRandomNumbersArray(options)
      }).toThrow('Custom length value must be of type number')
    })
  })

  describe('generateRandomStringsArray', () => {
    it('should generate an array with default length of 10 when no arguments is passed', () => {
      const result = arrayGenerator.generateRandomStringsArray()
      expect(result.length).toBe(10)
    })

    it('should generate an array with the correct custom length when it is specified', () => {
      const options = { lengthOfArray: 7 }

      const result = arrayGenerator.generateRandomStringsArray(options)
      expect(result.length).toBe(options.lengthOfArray)
    })

    it('should generate an array with strings that are within the specified length', () => {
      const options = { lengthOfArray: 50, minStringLength: 2, maxStringLength: 15 }

      const result = arrayGenerator.generateRandomStringsArray(options)
      expect(result.length).toBe(options.lengthOfArray)

      for (const string of result) {
        expect(string.length).toBeGreaterThanOrEqual(options.minStringLength)
        expect(string.length).toBeLessThanOrEqual(options.maxStringLength)
      }
    })

    it('should throw an error if minStringLength is greater than or equal to maxStringLength', () => {
      const options = { lengthOfArray: 5, minStringLength: 10, maxStringLength: 5 }

      expect(() => {
        arrayGenerator.generateRandomStringsArray(options)
      }).toThrow('Minimum string length must be less than maximum string length')

      expect(() => {
        arrayGenerator.generateRandomStringsArray({ lengthOfArray: 10, minStringLength: 10, maxStringLength: 10 })
      }).toThrow('Minimum string length must be less than maximum string length')
    })

    it('should throw an error if minStringLength is less than or equal to 0', () => {
      expect(() => {
        arrayGenerator.generateRandomStringsArray({ lengthOfArray: 10, minStringLength: -1, maxStringLength: 4 })
      }).toThrow('Custom string length must be greater than zero')

      expect(() => {
        arrayGenerator.generateRandomStringsArray({ lengthOfArray: 10, minStringLength: 0, maxStringLength: 4 })
      }).toThrow('Custom string length must be greater than zero')
    })

    it('should throw an error if custom length of array is less than or equal to 0', () => {
      const options = { lengthOfArray: -5 }

      expect(() => {
        arrayGenerator.generateRandomStringsArray(options)
      }).toThrow('Custom length of array must be a number greater than zero')

      expect(() => {
        arrayGenerator.generateRandomStringsArray({ lengthOfArray: 0 })
      }).toThrow('Custom length of array must be a number greater than zero')
    })

    it('should throw an error if input arguments are not of type number', () => {
      const options = { lengthOfArray: 15, minStringLength: 'hej', maxStringLength: true }

      expect(() => {
        arrayGenerator.generateRandomStringsArray(options)
      }).toThrow('Custom string length inputs must be of type number')
    })

    it('should throw an error if custom length input argument is not a number', () => {
      const options = { lengthOfArray: 'test' }

      expect(() => {
        arrayGenerator.generateRandomStringsArray(options)
      }).toThrow('Custom length value must be of type number')
    })
  })

  describe('generateRandomEvenNumbersArray', () => {
    it('should generate an array with default length of 10 when no arguments is passed', () => {
      const result = arrayGenerator.generateRandomEvenNumbersArray()
      expect(result.length).toBe(10)
    })

    it('should generate an array with the correct custom length when it is specified', () => {
      const options = { lengthOfArray: 14 }
      const result = arrayGenerator.generateRandomEvenNumbersArray(options)
      expect(result.length).toBe(options.lengthOfArray)
    })

    it('should generate an array with even numbers that is within a specified range', () => {
      const options = { lengthOfArray: 25, minValueInArray: 2, maxValueInArray: 15 }
      const result = arrayGenerator.generateRandomEvenNumbersArray(options)
      expect(result.length).toBe(options.lengthOfArray)

      for (const number of result) {
        expect(number).toBeGreaterThanOrEqual(options.minValueInArray)
        expect(number).toBeLessThanOrEqual(options.maxValueInArray)
        expect(number % 2).toBe(0)
      }
    })

    it('should generate an array with even numbers even if range is two consecutive numbers', () => {
      const options = { lengthOfArray: 8, minValueInArray: 2, maxValueInArray: 3 }

      const result = arrayGenerator.generateRandomEvenNumbersArray(options)
      expect(result.length).toBe(options.lengthOfArray)

      for (const number of result) {
        expect(number).toBeGreaterThanOrEqual(options.minValueInArray)
        expect(number).toBeLessThanOrEqual(options.maxValueInArray)
        expect(number % 2).toBe(0)
      }
    })
  })
})
