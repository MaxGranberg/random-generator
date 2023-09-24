import ColorGenerator from '../src/colorGenerator.js'

describe('ColorGenerator', () => {
  const colorGen = new ColorGenerator()

  test('should generate a valid HEX color string', () => {
    const result = colorGen.generateRandomHexColor()
    expect(result).toMatch(/^#[0-9A-F]{6}$/)
  })
})
