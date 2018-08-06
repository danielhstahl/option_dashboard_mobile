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

//only include constraints which need to be calibrated for
const attributesToCalibrate=[
    'lambda',
    'mu_l',
    'sig_l',
    'sigma',
    'v0',
    'speed',
    'eta_v',
    'rho'
]
const defaultAttributes={
    num_u:8,
    quantile:.01
}

const attributes=(state=defaultAttributes, action)=>{
    switch(action.type){
        case MARKET_VALUES:
            return {...state, ...action.attributes}
        case CONSTRAINTS:
            return {
                ...state, 
                constraints:attributesToCalibrate
                    .reduce((aggr, curr)=>({
                        ...aggr, 
                        [curr]:action.constraints[curr]
                    }), {})
            }
        default:
            return state
    }
}

const calibrated=(state={}, action)=>{
    switch(action.type){
        case CALIBRATED_PARAMETERS:
            return action.parameters
        default:
            return state
    }
}

export default combineReducers({
    spline,
    attributes,
    calibrated
})
