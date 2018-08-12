import {
    OPTION_MATURITIES, 
    TICKERS,
    ASSET_PRICE,
    TICKER_VALUE
} from 'Actions/constants'

import { combineReducers } from 'redux'

const maturities=(state=[], action)=>{
    switch(action.type){
        case OPTION_MATURITIES:
            return action.maturities
        case TICKER_VALUE:
            return []
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



export default combineReducers({
    maturities,
    tickers,
})