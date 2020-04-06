import React from 'react'
import {
  VictoryChart,
  VictoryLine,
  VictoryContainer,
  VictoryScatter,
  VictoryLegend
} from 'victory'
import { withTheme } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import ProgressBar from 'Components/utils/ProgressBar'
import { containerStyle, animateStyle, titleStyle } from 'globals/chartStyles'
import {
  outerStyleStandalone,
  progressStyle,
  PROGRESS_SIZE
} from 'globals/progressStyles'
import PropTypes from 'prop-types'

//exported for testing
export const PutCallChart = withTheme(
  ({ call, put, theme, strikes, prices, sensitivity, loadingPutCall }) => {
    const scatter = strikes.map((v, index) => ({
      strike: v,
      price: prices[index]
    }))
    const legendData = (primary, secondary) => [
      { name: 'Call', symbol: { fill: primary } },
      { name: 'Put', symbol: { fill: secondary } }
    ]
    const { main: primary } = theme.palette.primary
    const { main: secondary } = theme.palette.secondary
    return call.length > 0 && put.length > 0 ? (
      <VictoryChart
        containerComponent={<VictoryContainer style={containerStyle} />}
        animate={animateStyle}
      >
        <VictoryLegend
          centerTitle
          title="Calls and Puts"
          {...titleStyle}
          data={legendData(primary, secondary)}
          orientation="horizontal"
        />
        <VictoryLine
          style={{ data: { stroke: primary } }}
          data={call}
          x="at_point"
          interpolation="natural"
          y="value"
        />
        <VictoryLine
          style={{ data: { stroke: secondary } }}
          data={put}
          x="at_point"
          interpolation="natural"
          y="value"
        />
        {sensitivity === 'price' && (
          <VictoryScatter
            style={{ data: { stroke: theme.palette.secondary.main } }}
            data={scatter}
            x="strike"
            interpolation="natural"
            y="price"
          />
        )}
      </VictoryChart>
    ) : (
      <div style={outerStyleStandalone}>
        <ProgressBar
          style={progressStyle}
          size={PROGRESS_SIZE}
          loading={loadingPutCall}
        />
      </div>
    )
  }
)
PutCallChart.propTypes = {
  call: PropTypes.arrayOf(
    PropTypes.shape({
      at_point: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired
    })
  ),
  put: PropTypes.arrayOf(
    PropTypes.shape({
      at_point: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired
    })
  ),
  strikes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  prices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  loadingPutCall: PropTypes.bool.isRequired,
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      primary: PropTypes.shape({
        main: PropTypes.string.isRequired
      }).isRequired,
      secondary: PropTypes.shape({
        main: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }),
  sensitivity: PropTypes.string.isRequired
}
const mapStateToProps = ({ pricerValues, calibratorValues, loading }) => ({
  call: pricerValues.call,
  put: pricerValues.put,
  strikes: calibratorValues.attributes.strikes,
  prices: calibratorValues.attributes.prices,
  loadingPutCall: loading.putCallIVChart
})

export default connect(mapStateToProps)(PutCallChart)
