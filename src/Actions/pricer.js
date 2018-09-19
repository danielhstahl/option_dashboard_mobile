/**
 * https://sgvzefbvu0.execute-api.us-east-1.amazonaws.com/dev/calculator/{optionType}/{sensitivity} (POST)
 * https://sgvzefbvu0.execute-api.us-east-1.amazonaws.com/dev/density/{densityType} (POST)
 * https://sgvzefbvu0.execute-api.us-east-1.amazonaws.com/dev/parameters/parameter_ranges (GET)
 */
import { handleIV } from 'Services/inputHandler'
import { pFetch } from 'Services/urlUtils'
import {
  DENSITY,
  RISK_METRICS,
  LOADING_DENSITY_CHART,
  CALL,
  PUT,
  IV,
  LOADING_PUT_CALL_IV_CHART
} from './constants'

const mapTypeToAction = {
  call: CALL,
  put: PUT
}

const getPricesAndIV = type => dispatch => ({ sensitivity, ...body }) => {
  dispatch({
    type: LOADING_PUT_CALL_IV_CHART,
    value: true
  })
  dispatch({
    type: mapTypeToAction[type],
    value: []
  })
  return pFetch(`calculator/${type}/${sensitivity}`, body)
    .then(results => {
      if (handleIV(results)) {
        dispatch({
          type: IV,
          value: results
        })
      }
      return dispatch({
        type: mapTypeToAction[type],
        value: results
      })
    })
    .finally(() => {
      dispatch({
        type: LOADING_PUT_CALL_IV_CHART,
        value: false
      })
    })
}

export const getPut = getPricesAndIV('put')
export const getCall = getPricesAndIV('call')

const gDensity = (type, densityType) => dispatch => body => {
  dispatch({
    type: LOADING_DENSITY_CHART,
    value: true
  })
  return pFetch(`density/${densityType}`, body)
    .then(results => {
      return dispatch({
        type,
        value: results
      })
    })
    .finally(() => {
      dispatch({
        type: LOADING_DENSITY_CHART,
        value: false
      })
    })
}
export const getDensity = gDensity(DENSITY, 'density')
export const getRiskMetrics = gDensity(RISK_METRICS, 'riskmetric')
