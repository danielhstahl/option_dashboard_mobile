import {
    SPLINE,
    MARKET_VALUES,
    CONSTRAINTS,
    CALIBRATED_PARAMETERS,
    TICKER_VALUE
} from 'Actions/constants'

import { combineReducers } from 'redux'
import {getAboveEpsilon, getSymmetricFromRight} from 'globals/utils'
const epsilon=.00001

const getOnlyAboveZero=getAboveEpsilon(0)

const spline=(state={}, action)=>{
    switch(action.type){
        case SPLINE:
            return {
                curve:getSymmetricFromRight(
                    'log_strike',
                    'transformed_option',
                    action.spline.curve, 
                    epsilon
                ),
                points:getOnlyAboveZero(
                    action.spline.points, 
                    'transformed_option'
                )
            }
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
    quantile:.01,
    prices:[],
    strikes:[]
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
        case TICKER_VALUE: //reset
            const {constraints}=state
            return {...defaultAttributes, constraints}
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
