import { pFetch, gFetch, getBaseUrl } from 'Services/urlUtils'
import { delay } from 'setupTests'

describe('pFetch', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('correctly returns json', () => {
    fetch.once(JSON.stringify({ hello: 'world' }))
    return pFetch('hello', { goodbye: 'cruel world' }).then(res => {
      return expect(res).toEqual({ hello: 'world' })
    })
  })
})
describe('gFetch', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('correctly returns json', () => {
    fetch.once(JSON.stringify({ hello: 'world' }))
    return gFetch('hello').then(res => {
      expect(res).toEqual({ hello: 'world' })
    })
  })
})
describe('getBaseUrl', () => {
  it('returns everything left of ":"', () => {
    expect(getBaseUrl({ path: 'hello:' })).toEqual('hello')
  })
  it('returns empty string when only ":"', () => {
    expect(getBaseUrl({ path: ':' })).toEqual('')
  })
})
