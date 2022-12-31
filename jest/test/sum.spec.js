// import { describe, test, expect } from '@jest/globals'
import { sum } from '../src/sum'

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4)
  })
})
