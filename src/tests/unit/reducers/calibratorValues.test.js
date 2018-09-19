import { attributes, spline } from 'Reducers/calibratorValues'
import {
  MARKET_VALUES,
  CONSTRAINTS,
  TICKER_VALUE,
  SPLINE
} from 'Actions/constants'

describe('attributes', () => {
  it('returns default attributes when called with no matching type', () => {
    expect(attributes(undefined, { type: 'not match' })).toEqual({
      num_u: 8,
      quantile: 0.01,
      prices: [],
      strikes: []
    })
  })
  it('returns attributes and default when called with market values', () => {
    expect(
      attributes(undefined, {
        type: MARKET_VALUES,
        attributes: { hello: 'world' }
      })
    ).toEqual({
      num_u: 8,
      quantile: 0.01,
      prices: [],
      strikes: [],
      hello: 'world'
    })
  })
  it('returns constraints and default when called with constraints', () => {
    expect(
      attributes(undefined, {
        type: CONSTRAINTS,
        constraints: { rho: 0.3 }
      })
    ).toEqual({
      num_u: 8,
      quantile: 0.01,
      prices: [],
      strikes: [],
      constraints: {
        rho: 0.3,
        lambda: undefined,
        mu_l: undefined,
        sig_l: undefined,
        v0: undefined,
        speed: undefined,
        eta_v: undefined
      }
    })
  })
  it('returns default attributes when ticker called and additional attributes exist', () => {
    const attr = { hello: 'world' }
    const state = attributes(undefined, {
      type: MARKET_VALUES,
      attributes: attr
    })
    expect(
      attributes(state, {
        type: TICKER_VALUE
      })
    ).toEqual({
      constraints: undefined,
      num_u: 8,
      quantile: 0.01,
      prices: [],
      strikes: []
    })
  })
})

describe('spline', () => {
  it('correctly returns spline object', () => {
    expect(
      spline(undefined, {
        type: SPLINE,
        spline: {
          curve: [],
          points: []
        }
      })
    ).toEqual({
      curve: [],
      points: []
    })
  })
})
