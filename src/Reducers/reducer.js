import { combineReducers } from 'redux'
import inputs from './inputs'
import marketValues from './marketValues'
import calibratorValues from './calibratorValues'
export default combineReducers({
    inputs,
    marketValues,
    calibratorValues
})