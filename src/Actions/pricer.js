/**
 * https://sgvzefbvu0.execute-api.us-east-1.amazonaws.com/dev/calculator/{optionType}/{sensitivity} (POST)
* https://sgvzefbvu0.execute-api.us-east-1.amazonaws.com/dev/density/{densityType} (POST)
* https://sgvzefbvu0.execute-api.us-east-1.amazonaws.com/dev/parameters/parameter_ranges (GET)
 */
import {handleIV} from 'Services/inputHandler'
import {pFetch } from 'Services/urlUtils'
import {DENSITY, RISK_METRICS, LOADING, CALL, PUT, IV} from './constants'

const mapTypeToAction={
    call:CALL,
    put:PUT
}

export const getPricesAndIV=(dispatch, type)=>({sensitivity, ...body})=>{
    dispatch({
        type:LOADING,
        value:true
    })
    return pFetch(`calculator/${type}/${sensitivity}`, body)
        .then(results=>{
            console.log(results)
            dispatch({
                type:LOADING,
                value:false
            })
            if(handleIV(results)){
                dispatch({
                    type:IV,
                    value:results
                })
            }
            return dispatch({
                type:mapTypeToAction[type],
                value:results
            })
        })
}


const gDensity=actionType=>dispatch=>(type, body)=>{
    dispatch({
        type:LOADING,
        value:true
    })
    return pFetch(`density/${type}`, body)
        .then(results=>{
            console.log(results)
            dispatch({
                type:LOADING,
                value:false
            })
            return dispatch({
                type:actionType,
                value:results
            })
        })
}
export const getDensity=gDensity(DENSITY)
export const getRiskMetrics=gDensity(RISK_METRICS)