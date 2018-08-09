import {
    LOADING_MATURITY, 
    LOADING_TICKER,
    LOADING_CALIBRATE,
    LOADING_DENSITY_CHART,
    LOADING_PUT_CALL_IV_CHART,
    LOADING_SPLINE
} from 'Actions/constants'
import { combineReducers } from 'redux'

const loadingGenerator=(type, defaultState=false)=>(state=defaultState, action)=>{
    switch(action.type){
        case type:
            return action.value
        default:
            return state
    }
}

const maturity=loadingGenerator(LOADING_MATURITY)
const ticker=loadingGenerator(LOADING_TICKER)
const calibrate=loadingGenerator(LOADING_CALIBRATE)
const putCallIVChart=loadingGenerator(LOADING_PUT_CALL_IV_CHART)
const densityChart=loadingGenerator(LOADING_DENSITY_CHART)
const splineChart=loadingGenerator(LOADING_SPLINE)


export default combineReducers({
    ticker,
    maturity,
    calibrate,
    densityChart,
    putCallIVChart,
    splineChart
})