import NumberGenerator from '../src/numberGenerator.js'

describe('NumberGenerator', () => {
  let numberGenerator

  beforeEach(() => {
    numberGenerator = new NumberGenerator()
  })

  describe('generateRandomNumber', () => {
    it('should generate a number between 1 and 10000 when no arguments is passed', () => {
      const number = numberGenerator.generateRandomNumber()
      expect(number).toBeGreaterThanOrEqual(1)
      expect(number).toBeLessThanOrEqual(10000)
    })

    it('should generate a number within a specified range', () => {
      const number = numberGenerator.generateRandomNumber(10, 20)
      expect(number).toBeGreaterThanOrEqual(10)
      expect(number).toBeLessThanOrEqual(20)
    })

    it('should thrown an error when minValue is larger than maxValue', () => {
      expect(() => {
        numberGenerator.generateRandomNumber(30, 20)
      }).toThrow('The minValue must be smaller than the maxValue')
    })

    it('should thrown an error when minValue is equal to maxValue', () => {
      expect(() => {
        numberGenerator.generateRandomNumber(20, 20)
      }).toThrow('The minValue must be smaller than the maxValue')
    })

    it('should thrown an error when non-number values are passed as arguments', () => {
      expect(() => {
        numberGenerator.generateRandomNumber('test', 20)
      }).toThrow('Values must be of type number')

      expect(() => {
        numberGenerator.generateRandomNumber(30, 'a')
      }).toThrow('Values must be of type number')
    })
  })

  describe('generateRandomEvenNumber', () => {
    it('should generate an even number between 1 and 10000 when no arguments is passed', () => {
      const number = numberGenerator.generateRandomEvenNumber()
      expect(number).toBeGreaterThanOrEqual(1)
      expect(number).toBeLessThanOrEqual(10000)
      expect(number % 2).toBe(0)
    })

    it('should generate an even number within a specified range', () => {
      const number = numberGenerator.generateRandomEvenNumber(10, 20)
      expect(number).toBeGreaterThanOrEqual(10)
      expect(number).toBeLessThanOrEqual(20)
      expect(number % 2).toBe(0)
    })
  })

  describe('generateRandomOddNumber', () => {
    it('should generate an odd number between 1 and 10000 when no arguments is passed', () => {
      const number = numberGenerator.generateRandomOddNumber()
      expect(number).toBeGreaterThanOrEqual(1)
      expect(number).toBeLessThanOrEqual(10000)
      expect(number % 2).toBe(1)
    })

    it('should generate an odd number within a specified range', () => {
      const number = numberGenerator.generateRandomOddNumber(10, 20)
      expect(number).toBeGreaterThanOrEqual(10)
      expect(number).toBeLessThanOrEqual(20)
      expect(number % 2).toBe(1)
    })
  })

  describe('generateRandomFloatNumber', () => {
    it('should generate a float number between 1 and 10000 when no arguments is passed', () => {
      const number = numberGenerator.generateRandomFloatNumber()
      expect(number).toBeGreaterThanOrEqual(1)
      expect(number).toBeLessThanOrEqual(10000)
      expect(Number.isInteger(number)).toBe(false)
    })

    it('should generate a float number within a specified range', () => {
      const number = numberGenerator.generateRandomFloatNumber(10.9, 11)
      expect(number).toBeGreaterThanOrEqual(10.9)
      expect(number).toBeLessThanOrEqual(11)
      expect(Number.isInteger(number)).toBe(false)
    })
  })
})
