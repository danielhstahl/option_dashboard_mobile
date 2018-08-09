/**
 * https://sgvzefbvu0.execute-api.us-east-1.amazonaws.com/dev/calibrator/{calibration} (POST)
 */
import {pFetch, gFetch} from 'Services/urlUtils'
import {
    CALIBRATED_PARAMETERS, 
    CONSTRAINTS, 
    LOADING_CALIBRATE
} from './constants'
const gCalibrate=calibration=>dispatch=>body=>{
    dispatch({
        type:LOADING_CALIBRATE,
        value:true
    })
    return pFetch(`calibrator/${calibration}`, body)
        .then(parameters=>{
            return dispatch({
                type:CALIBRATED_PARAMETERS,
                parameters:{
                    ...parameters.optimal_parameters,
                    mse:parameters.fn_result
                }
            })
        }).finally(()=>{
            dispatch({
                type:LOADING_CALIBRATE,
                value:false
            })
        })
} 

export const getCalibrationBounds=dispatch=>gFetch(
    'parameters/parameter_ranges'
).then(constraints=>dispatch({
    type:CONSTRAINTS,
    constraints
}))

export const calibrateModel=gCalibrate('calibrate')