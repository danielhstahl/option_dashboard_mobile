import { getOptionFeatures, getSpline } from 'Actions/options'
import { delay } from 'setupTests'
import { OPTION_MATURITIES, MARKET_VALUES, SPLINE } from 'Actions/constants'
describe('getOptionFeatures', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('returns data in dispatch', () => {
    const dispatch = jest.fn()
    fetch.once(JSON.stringify({ expirationDates: [2, 3, 4] }))
    getOptionFeatures(dispatch)('ticker')
    return delay(30)
      .then(() => {
        return expect(dispatch.mock.calls.length).toEqual(3)
      })
      .then(() => {
        return expect(dispatch.mock.calls[1][0]).toEqual({
          type: OPTION_MATURITIES,
          maturities: [2, 3, 4]
        })
      })
  })
})

describe('getSpline', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('returns data in dispatch', () => {
    const dispatch = jest.fn()
    fetch.once(
      JSON.stringify({ curve: [2, 3, 4], points: [2, 3, 4], hello: 'world' })
    )
    getSpline(dispatch)('ticker', '4')
    return delay(30)
      .then(() => {
        return expect(dispatch.mock.calls.length).toEqual(4)
      })
      .then(() => {
        return expect(dispatch.mock.calls[1][0]).toEqual({
          type: SPLINE,
          spline: {
            curve: [2, 3, 4],
            points: [2, 3, 4]
          }
        })
      })
      .then(() => {
        return expect(dispatch.mock.calls[2][0]).toEqual({
          type: MARKET_VALUES,
          attributes: {
            hello: 'world'
          }
        })
      })
  })
})
