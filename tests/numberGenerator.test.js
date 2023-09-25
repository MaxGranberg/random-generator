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
})
