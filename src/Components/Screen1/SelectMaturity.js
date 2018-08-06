import React from 'react'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import {connect} from 'react-redux'
import { selectMaturity } from 'Actions/inputs'
import {inputFieldTheme} from 'Themes/inputFields'
import {withStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import {getSpline} from 'Actions/options'
import ProgressBar from 'Components/utils/ProgressBar'
const SelectMaturity=withStyles(inputFieldTheme)(({
    value, options, ticker,
    onChange, classes
})=>(
    options.length>0?<FormControl className={classes.inputField}>
        <InputLabel 
            htmlFor="ticker-helper"
        >
            Option Maturity
        </InputLabel>
        <Select
            native
            value={value}
            onChange={onChange(ticker)}
            inputProps={{
                name: 'maturity',
                id: 'maturity-simple',
            }}
        >
            <option value='' key='none'></option>
            {options.map(option=>{
                const date=new Date(option)
                return (
                    <option key={option} value={option}>
                        {date.toLocaleDateString()}
                    </option>
                )
            })}
        </Select>
    </FormControl>:null
))
const mapStateToProps=({marketValues, inputs})=>({
    value:inputs.maturity,
    ticker:inputs.ticker,
    options:marketValues.maturities
})
const onChange=dispatch=>{
    const maturityChange=selectMaturity(dispatch)
    const splineChange=getSpline(dispatch)
    return ticker=>event=>{
        const maturity=event.target.value
        maturityChange(maturity)
        splineChange(ticker, maturity)
    }
}

const mapDispatchToProps=dispatch=>({
    onChange:onChange(dispatch)
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(SelectMaturity)