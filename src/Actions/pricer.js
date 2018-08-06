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

const getPricesAndIV=type=>dispatch=>({sensitivity, ...body})=>{
    dispatch({
        type:LOADING,
        value:true
    })
    dispatch({
        type:mapTypeToAction[type],
        value:[]
    })
    return pFetch(`calculator/${type}/${sensitivity}`, body)
        .then(results=>{
            console.log(results)
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
        }).finally(()=>{
            dispatch({
                type:LOADING,
                value:false
            })
        })
}

export const getPut=getPricesAndIV('put')
export const getCall=getPricesAndIV('call')


const gDensity=(type, densityType)=>dispatch=>body=>{
    dispatch({
        type:LOADING,
        value:true
    })
    return pFetch(`density/${densityType}`, body)
        .then(results=>{
            console.log(results)
           
            return dispatch({
                type,
                value:results
            })
        }).then(()=>{
            dispatch({
                type:LOADING,
                value:false
            })
        })
}
export const getDensity=gDensity(DENSITY, 'density')
export const getRiskMetrics=gDensity(RISK_METRICS, 'riskmetric')