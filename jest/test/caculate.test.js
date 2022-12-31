const { add, divide, multiply, remove } = require('../src/caculate')

describe('calculate module', () => {
  test('add', () => {
    expect(add(1, 2)).toBe(3)
  })

  test('remove', () => {
    expect(remove(1, 2)).toBe(-1)
  })

  test('multiply', () => {
    expect(multiply(1, 2)).toBe(2)
  })

  test('divide', () => {
    expect(divide(1, 2)).toBe(0.5)
  })
})
