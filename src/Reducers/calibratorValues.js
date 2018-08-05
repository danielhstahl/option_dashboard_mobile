import {
    SPLINE,
    MARKET_VALUES,
    CONSTRAINTS,
    CALIBRATED_PARAMETERS
} from 'Actions/constants'

import { combineReducers } from 'redux'


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
            return {...state, ...action.attributes}
        case CONSTRAINTS:
            return {...state, ...action.constraints}
        default:
            return state
    }
}

const calibrated=(state={}, action)=>{
    switch(action.type){
        case CALIBRATED_PARAMETERS:
            return {...state, ...action.parameters}
        default:
            return state
    }
}

export default combineReducers({
    spline,
    attributes,
    calibrated
})
