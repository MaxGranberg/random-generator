import DateGenerator from '../src/dateGenerator.js'

describe('DateGenerator', () => {
  const dateGen = new DateGenerator()

  test('should generate a date within the default range when no arguments is passed', () => {
    const date = dateGen.generateRandomDate()
    expect(date).toBeInstanceOf(Date)
    expect(date.getTime()).toBeGreaterThanOrEqual(new Date('1900-01-01').getTime())
    expect(date.getTime()).toBeLessThanOrEqual(new Date('2100-01-01').getTime())
  })
})
