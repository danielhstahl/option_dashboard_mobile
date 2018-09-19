import { handleIV } from 'Services/inputHandler'

describe('handleIV', () => {
  it('returns false if array has length zero', () => {
    expect(handleIV([])).toEqual(false)
  })
  it('returns true if array has length greater than zero and key iv', () => {
    expect(handleIV([{ iv: 'hello' }])).toEqual(true)
  })
  it('returns false if array has length greater than zero and does not have key iv', () => {
    expect(handleIV([{ hello: 'hello' }])).toEqual(false)
  })
})
