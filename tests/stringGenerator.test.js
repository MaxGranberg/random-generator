import StringGenerator from '../src/stringGenerator.js'

describe('StringGenerator', () => {
  const stringGen = new StringGenerator()

  test('should generate a string with default length of 10 when no arguments is passed', () => {
    const result = stringGen.generateRandomString()
    expect(result.length).toBe(10)
  })
})
