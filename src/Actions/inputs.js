import {TICKER_VALUE, MATURITY_VALUE} from './constants'

export const inputTicker=dispatch=>ticker=>dispatch({
    type:TICKER_VALUE,
    ticker
})
export const selectMaturity=dispatch=>maturity=>dispatch({
    type:MATURITY_VALUE,
    maturity
})