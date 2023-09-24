import NumberGenerator from '../src/numberGenerator.js'

describe('NumberGenerator', () => {
  const numberGen = new NumberGenerator()

  test('should generate a number between 1 and 10000 when no arguments is passed', () => {
    const number = numberGen.generateRandomNumber()
    expect(number).toBeGreaterThanOrEqual(1)
    expect(number).toBeLessThanOrEqual(10000)
  })
})
