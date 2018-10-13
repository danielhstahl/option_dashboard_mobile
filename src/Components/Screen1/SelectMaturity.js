import React from 'react'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import { connect } from 'react-redux'
import { selectMaturity } from 'Actions/inputs'
import { inputFieldTheme } from 'Themes/inputFields'
import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import { getSpline } from 'Actions/options'
import PropTypes from 'prop-types'
import { checkIsNative } from 'utils'
const native = checkIsNative()
//export for testing
export const SelectMaturity = withStyles(inputFieldTheme)(
  ({ value, options, ticker, onChange, classes }) =>
    options.length > 0 ? (
      <FormControl className={classes.inputField}>
        <InputLabel htmlFor="ticker-helper">Option Maturity</InputLabel>
        <Select
          native={native}
          value={value}
          onChange={onChange(ticker)}
          inputProps={{
            name: 'maturity',
            id: 'maturity-simple'
          }}
        >
          <option value="" key="none" />
          {options.map(option => {
            const date = new Date(option)
            const optionStr = option.toString()
            return (
              <option key={optionStr} value={optionStr}>
                {date.toLocaleDateString()}
              </option>
            )
          })}
        </Select>
      </FormControl>
    ) : null
)
SelectMaturity.propTypes = {
  value: PropTypes.string.isRequired, //is this a string or a number?
  options: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired, //empty array is ok?
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    inputField: PropTypes.string.isRequired
  }),
  ticker: PropTypes.string.isRequired
}
const mapStateToProps = ({ marketValues, inputs }) => ({
  value: inputs.maturity,
  ticker: inputs.ticker,
  options: marketValues.maturities
})
const onChange = dispatch => {
  const maturityChange = selectMaturity(dispatch)
  const splineChange = getSpline(dispatch)
  return ticker => event => {
    const maturity = event.target.value
    maturityChange(maturity)
    splineChange(ticker, maturity)
  }
}

const mapDispatchToProps = dispatch => ({
  onChange: onChange(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectMaturity)
