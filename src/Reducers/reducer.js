import { combineReducers } from 'redux'
import inputs from './inputs'
import marketValues from './marketValues'
import calibratorValues from './calibratorValues'
import pricerValues from './pricerValues'
export default combineReducers({
    inputs,
    marketValues,
    calibratorValues,
    pricerValues
})