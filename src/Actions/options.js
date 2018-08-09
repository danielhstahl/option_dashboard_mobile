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
    ASSET_PRICE,
    LOADING_MATURITY,
    LOADING_TICKER,
    LOADING_SPLINE
} from './constants'

export const getOptionFeatures=dispatch=>ticker=>{
    dispatch({
        type:LOADING_MATURITY,
        value:true
    })
    gFetch(`options/${ticker}/maturities`).then(features=>{
        dispatch({
            type:OPTION_MATURITIES,
            maturities:features.expirationDates
        })
        dispatch({
            type:ASSET_PRICE,
            asset:features.asset
        })
    }).finally(()=>dispatch({
        type:LOADING_MATURITY,
        value:false
    }))
}

export const getTickers=dispatch=>{
    dispatch({
        type:LOADING_TICKER,
        value:true
    })
    gFetch('options/tickers').then(tickers=>{
        dispatch({
            type:TICKERS,
            tickers
        })
    }).finally(()=>{
        dispatch({
            type:LOADING_TICKER,
            value:false
        })
    })
}

export const getSpline=dispatch=>(ticker, maturity)=>{
    dispatch({
        type:LOADING_SPLINE,
        value:true
    })
    gFetch(`options/${ticker}/prices/${maturity}?minRelativeBidAskSpread=.1&minOpenInterest=25`).then(({curve, points, ...attributes})=>{
        console.log(curve)
        console.log(points)
        dispatch({
            type:SPLINE,
            spline:{curve, points}
        })
        dispatch({
            type:MARKET_VALUES,
            attributes
        })
    }).finally(()=>{
        dispatch({
            type:LOADING_SPLINE,
            value:false
        })
    })
}

