import { global } from '../src/global'

beforeAll(() => {
  console.log('beforeAll')
})

afterAll(() => {
  console.log('afterAll')
})


beforeEach(() => {
  console.log('beforeEach')
})

afterEach(() => {
  console.log('afterEach')
})

describe('calculate module', () => {

  test('global start', () => {
    expect(1).toBe(1)
    global('global start')
  })

  test('global end', () => {
    expect(1).toBe(1)
    global('global end')
  })

})
