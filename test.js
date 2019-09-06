const transactions = require('./lib.js')
const moment = require('moment')

describe('generate', () => {

  test('empty list of transactions', () => {
    const result = transactions.generate(0)
    expect(result).toStrictEqual([])
  })

  test('simple list of transactions', () => {
    const result = transactions.generate(5)
    const length = result.length
    expect(length).toBe(5)
  })
})
