import StringGenerator from '../src/stringGenerator.js'

describe('StringGenerator', () => {
  let stringGenerator

  beforeEach(() => {
    stringGenerator = new StringGenerator()
  })

  describe('generateRandomString', () => {
    it('should generate a string with default length of 10 when no arguments is passed', () => {
      const result = stringGenerator.generateRandomString()
      expect(result.length).toBe(10)
    })

    it('should generate a string with the correct length when specified', () => {
      const customLength = 5
      const result = stringGenerator.generateRandomString(customLength)
      expect(result.length).toBe(5)
    })

    it('should only contain characters from the english aplhabet', () => {
      const result = stringGenerator.generateRandomString(100)
      expect(result).toMatch(/^[a-zA-Z]+$/)
    })

    it('should throw an error if specified length is a negative value', () => {
      expect(() => stringGenerator.generateRandomString(-1).toThrow('customLength parameter must be a postitive number'))
    })

    it('should throw an error if specified length is equal to zero', () => {
      expect(() => stringGenerator.generateRandomString(0).toThrow('customLength parameter must be a postitive number'))
    })

    it('should throw an error if specified is not of type Number', () => {
      expect(() => stringGenerator.generateRandomString('test').toThrow('customLength parameter must be a postitive number'))
    })
  })
})
