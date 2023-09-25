import DateGenerator from '../src/dateGenerator.js'

describe('DateGenerator', () => {
  let dateGenerator

  beforeEach(() => {
    dateGenerator = new DateGenerator()
  })

  describe('generateRandomDate', () => {
    it('should generate a date within the default range when no arguments is passed', () => {
      const date = dateGenerator.generateRandomDate()
      expect(date).toBeInstanceOf(Date)
      expect(date.getTime()).toBeGreaterThanOrEqual(new Date('1900-01-01').getTime())
      expect(date.getTime()).toBeLessThanOrEqual(new Date('2100-01-01').getTime())
    })

    it('should generate a date within the specified range', () => {
      const date = dateGenerator.generateRandomDate(new Date('1996-03-29'), new Date('2023-09-25'))
      expect(date).toBeInstanceOf(Date)
      expect(date.getTime()).toBeGreaterThanOrEqual(new Date('1996-03-29').getTime())
      expect(date.getTime()).toBeLessThanOrEqual(new Date('2023-09-25').getTime())
    })

    it('should throw an error if startDate or endDate is not a valid date', () => {
      expect(() => {
        dateGenerator.generateRandomDate('1996-03-29', new Date('2023-12-12'))
          .toThrow('startDate and endDate must be a valid Date object')
      })

      expect(() => {
        dateGenerator.generateRandomDate(new Date('1996-03-29'), '2023-12-12')
          .toThrow('startDate and endDate must be a valid Date object')
      })

      expect(() => {
        dateGenerator.generateRandomDate(new Date('1996-23-29'), new Date('2022-10-08'))
          .toThrow('startDate and endDate must be a valid Date object')
      })
    })

    it('should throw an error if startDate occurs after endDate', () => {
      expect(() => {
        dateGenerator.generateRandomDate(new Date('2024-05-01'), new Date('2023-12-12'))
          .toThrow('The startDate must be prior to the endDate')
      })

      expect(() => {
        dateGenerator.generateRandomDate(new Date('2023-12-12'), new Date('2023-12-12'))
          .toThrow('The startDate must be prior to the endDate')
      })
    })
  })
})
