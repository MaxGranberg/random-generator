import ArrayGenerator from '../src/arrayGenerator.js'

describe('ArrayGenerator', () => {
  const arrayGen = new ArrayGenerator()

  test('should generate an array with default length of 10 when no arguments is passed', () => {
    const result = arrayGen.generateRandomNumbersArray()
    expect(result.length).toBe(10)
  })
})
