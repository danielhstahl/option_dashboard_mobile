import {TICKER_VALUE, MATURITY_VALUE, LOADING} from 'Actions/constants'
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
        case TICKER_VALUE:
            return ''//reset
        default:
            return state
    }
}
const loading=(state=false, action)=>{
    switch(action.type){
        case LOADING:
            return action.value
        default:
            return state
    }
}

export default combineReducers({
    ticker,
    maturity,
    loading
})