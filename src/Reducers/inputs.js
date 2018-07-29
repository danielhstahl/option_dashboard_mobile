import {TICKER_VALUE, MATURITY_VALUE} from 'Actions/constants'
import { combineReducers } from 'redux'

const ticker=(state='', action)=>{
    switch(action.type){
        case TICKER_VALUE:
            return action.ticker
        default:
            return state
    }
}
const maturity=(state='', action)=>{
    switch(action.type){
        case MATURITY_VALUE:
            return action.maturity
        default:
            return state
    }
}

export default combineReducers({
    ticker,
    maturity
})