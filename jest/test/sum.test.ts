import { describe, expect, test } from '@jest/globals'

import { sum } from '../src/sum'

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('object assignment', () => {
    const data    = {one: 1}
    data['two']   = 2
    data['three'] = 3
    expect(data).toEqual({one: 1, two: 2, three: 3})
  })

  test('null', () => {
    const n = null
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
    expect(n).not.toBe(0)
  })

  test('numbers', () => {
    const value = 2 + 2
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4)
    expect(value).toEqual(4)
  })

  // String regex matching
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
  })

  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/)
  })

  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ]

  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk')
    expect(new Set(shoppingList)).toContain('milk')
  })

  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!')
  }

  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow()
    expect(() => compileAndroidCode()).toThrow(Error)

    // You can also use a string that must be contained in the error message or
    // a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
    expect(() => compileAndroidCode()).toThrow(/JDK/)

    // Or you can match an exact error mesage using a regexp like below
    expect(() => compileAndroidCode()).
        toThrow(/^you are using the wrong JDK!$/) // Test pass
  })

})

// order
describe('describe outer', () => {
  console.log('describe outer-a')

  describe('describe inner 1', () => {
    console.log('describe inner 1')

    test('test 1', () => console.log('test 1'))
  })

  console.log('describe outer-b')

  test('test 2', () => console.log('test 2'))

  describe('describe inner 2', () => {
    console.log('describe inner 2')

    test('test 3', () => console.log('test 3'))
  })

  console.log('describe outer-c')
})

describe('beforeEach', () => {
  beforeEach(() => console.log('connection setup'))
  beforeEach(() => console.log('database setup'))

  afterEach(() => console.log('database teardown'))
  afterEach(() => console.log('connection teardown'))

  test('test 1', () => console.log('test 1'))

  describe('extra', () => {
    beforeEach(() => console.log('extra database setup'))
    afterEach(() => console.log('extra database teardown'))

    test('test 2', () => console.log('test 2'))
  })
})
