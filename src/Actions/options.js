/**
 * https://sgvzefbvu0.execute-api.us-east-1.amazonaws.com/dev/options/{ticker}/maturities (GET
 * https://sgvzefbvu0.execute-api.us-east-1.amazonaws.com/dev/options/{ticker}/prices/{asOfDate} (GET) 
 * */

import {gFetch} from 'Services/urlUtils'
import {
    OPTION_MATURITIES,
    TICKERS,
    SPLINE,
    MARKET_VALUES,
    ASSET_PRICE
} from './constants'

export const getOptionFeatures=dispatch=>ticker=>gFetch(`options/${ticker}/maturities`).then(features=>{
    dispatch({
        type:OPTION_MATURITIES,
        maturities:features.expirationDates
    })
    dispatch({
        type:ASSET_PRICE,
        asset:features.asset
    })
})

export const getTickers=dispatch=>()=>gFetch('options/tickers').then(tickers=>{
    dispatch({
        type:TICKERS,
        tickers
    })
})

export const getSpline=dispatch=>(ticker, maturity)=>gFetch(`options/${ticker}/prices/${maturity}`).then(({curve, points, ...attributes})=>{
    console.log(curve)
    console.log(points)
    console.log(attributes)
    dispatch({
        type:SPLINE,
        spline:{curve, points}
    })
    dispatch({
        type:MARKET_VALUES,
        attributes
    })
})
