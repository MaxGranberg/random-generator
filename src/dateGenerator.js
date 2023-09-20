/**
 * Generates a random date within a specified range. If no range is specified it sets a default range in the constructor.
 */
class DateGenerator {
  /**
   * Creates a new DateGenerator instance.
   *
   * @param {Date} [startDate=1900-01-01] - The start date for the range of dates to generate from.
   * If not specified it sets default to 1900-01-01.
   * @param {Date} [endDate=2100-01-01] - The end date for the range of dates to generate from.
   * If not specified it sets default to 2100-01-01.
   */
  constructor (startDate = new Date('1900-01-01'), endDate = new Date('2100-01-01')) {
    this.startDate = startDate
    this.endDate = endDate
  }

  /**
   * Generates a random date within the range of startDate and endDate.
   *
   * @param {Date} [startDate=this.startDate] - The start date for the range of dates to generate from.
   * If not specified it sets default to 1900-01-01.
   * @param {Date} [endDate=this.endDate] - The end date for the range of dates to generate from.
   * If not specified it sets default to 2100-01-01.
   * @returns {Date} generatedDate - The random generated date.
   */
  generateRandomDate (startDate = this.startDate, endDate = this.endDate) {
    const timeDifference = endDate.getTime() - startDate.getTime()
    const randomTimeInRange = Math.random() * timeDifference

    const generatedDate = new Date(startDate.getTime() + randomTimeInRange)
    return generatedDate
  }
}

export default DateGenerator
