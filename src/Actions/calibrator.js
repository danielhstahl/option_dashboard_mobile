/**
 * https://sgvzefbvu0.execute-api.us-east-1.amazonaws.com/dev/calibrator/{calibration} (POST)
 */
import {pFetch, gFetch} from 'Services/urlUtils'
import {
    CALIBRATED_PARAMETERS, 
    CONSTRAINTS, 
    LOADING
} from './constants'
const gCalibrate=calibration=>dispatch=>body=>{
    dispatch({
        type:LOADING,
        value:true
    })
    console.log(body)
    return pFetch(`calibrator/${calibration}`, body)
        .then(parameters=>{
            console.log(parameters)
            dispatch({
                type:LOADING,
                value:false
            })
            return dispatch({
                type:CALIBRATED_PARAMETERS,
                parameters:{
                    ...parameters.optimal_parameters,
                    mse:parameters.fn_result
                }
            })
        })
} 

export const getCalibrationBounds=dispatch=>gFetch('parameters/parameter_ranges').then(constraints=>{
    console.log(constraints)
    dispatch({
        type:CONSTRAINTS,
        constraints
    })
})



export const calibrateModel=gCalibrate('calibrate')
//export const splineCalibration=gCalibrate('spline')