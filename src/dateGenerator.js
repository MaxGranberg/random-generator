/**
 * Generates a random date within a specified range. If no range is specified it sets a default range in the constructor.
 */
class DateGenerator {
  #defaultStartDate = new Date('1900-01-01')
  #defaultEndDate = new Date('2100-01-01')
  /**
   * Generates a random date within the range of startDate and endDate.
   *
   * @param {Date} [startDate=this.#defaultStartDate] - The start date for the range of dates to generate from.
   * If not specified it sets default to 1900-01-01.
   * @param {Date} [endDate=this.#defaultEndDate] - The end date for the range of dates to generate from.
   * If not specified it sets default to 2100-01-01.
   * @returns {Date} generatedDate - The random generated date.
   */
  generateRandomDate (startDate = this.#defaultStartDate, endDate = this.#defaultEndDate) {
    this.#validateDateRange(startDate, endDate)

    const timeDifference = endDate.getTime() - startDate.getTime()
    const randomTimeInRange = Math.random() * timeDifference

    const generatedDate = new Date(startDate.getTime() + randomTimeInRange)
    return generatedDate
  }

  /**
   * Validation for the startDate and endDate parameters.
   *
   * @param {Date} startDate - Earliest date that the user wants for the range of dates.
   * @param {Date} endDate - Latest date that the user wants for the range of dates.
   */
  #validateDateRange (startDate, endDate) {
    if (!(startDate instanceof Date) || !(endDate instanceof Date) || isNaN(startDate) || isNaN(endDate)) {
      throw new Error('startDate and endDate must be a valid Date object')
    }

    if (startDate >= endDate) {
      throw new Error('The startDate must be prior to the endDate')
    }
  }
}

export default DateGenerator
