import {
    OPTION_MATURITIES, 
    TICKERS,
    SPLINE,
    MARKET_VALUES,
    ASSET_PRICE
} from 'Actions/constants'

import { combineReducers } from 'redux'

const maturities=(state=[], action)=>{
    switch(action.type){
        case OPTION_MATURITIES:
            return action.maturities
        default:
            return state
    }
}
const assetPrice=(state=null, action)=>{
    switch(action.type){
        case ASSET_PRICE:
            return action.asset
        default:
            return state
    }
}
const tickers=(state=[], action)=>{
    switch(action.type){
        case TICKERS:
            return action.tickers
        default:
            return state
    }
}

const spline=(state={}, action)=>{
    switch(action.type){
        case SPLINE:
            return action.spline
        default:
            return state
    }
}
const attributes=(state={}, action)=>{
    switch(action.type){
        case MARKET_VALUES:
            return action.attributes
        default:
            return state
    }
}

export default combineReducers({
    maturities,
    tickers,
    assetPrice,
    spline,
    attributes
})