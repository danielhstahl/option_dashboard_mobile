import {
    RISK_METRICS,
    DENSITY,
    CALL,
    PUT,
    IV
} from 'Actions/constants'

import { combineReducers } from 'redux'
const rBoiler=(type, defaultState=[])=>(state=defaultState, action)=>{
    switch(action.type){
        case type:
            return action.value
        default:
            return state
    }
}
const call=rBoiler(CALL)
const put=rBoiler(PUT)
const impliedVolatility=rBoiler(IV)
const riskMetrics=rBoiler(RISK_METRICS, {})
const density=rBoiler(DENSITY)


export default combineReducers({
    call,
    put,
    impliedVolatility,
    riskMetrics,
    density
})
