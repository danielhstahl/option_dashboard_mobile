import React from 'react'
import {
  VictoryChart,
  VictoryLine,
  VictoryContainer,
  VictoryLabel
} from 'victory'
import ProgressBar from 'Components/utils/ProgressBar'
import { connect } from 'react-redux'
import { withTheme } from '@material-ui/core/styles'
import { containerStyle, animateStyle, titleStyle } from 'globals/chartStyles'
import { FIXED_DECIMALS } from 'globals/constants'
import {
  outerStyleStandalone,
  progressStyle,
  PROGRESS_SIZE
} from 'globals/progressStyles'
import PropTypes from 'prop-types'

//exported for testing
export const getMax = (data, key) =>
  data.reduce((aggr, cur) => {
    return cur[key] > aggr ? cur[key] : aggr
  }, Number.NEGATIVE_INFINITY)

//exported for testing
export const getVaR = (riskMetrics, density) => [
  {
    x: -riskMetrics.value_at_risk,
    y: 0
  },
  {
    x: -riskMetrics.value_at_risk,
    y: getMax(density, 'value')
  }
]
//exported for testing
export const DensityChart = withTheme()(
  ({ density, theme, riskMetrics, loadingDensity }) =>
    density.length > 0 && riskMetrics.value_at_risk ? (
      <VictoryChart
        animate={animateStyle}
        containerComponent={<VictoryContainer style={containerStyle} />}
      >
        <VictoryLabel
          {...titleStyle}
          x={53}
          text={[
            'Risk Neutral Density',
            `Value at Risk: ${riskMetrics.value_at_risk.toFixed(
              FIXED_DECIMALS
            )}`,
            `Expected Shortfall: ${riskMetrics.expected_shortfall.toFixed(
              FIXED_DECIMALS
            )}`
          ]}
        />
        <VictoryLine
          style={{ data: { stroke: theme.palette.primary.main } }}
          data={density}
          x="at_point"
          interpolation="natural"
          y="value"
        />
        <VictoryLine
          style={{ data: { stroke: theme.palette.secondary.main } }}
          data={getVaR(riskMetrics, density)}
        />
      </VictoryChart>
    ) : (
      <div style={outerStyleStandalone}>
        <ProgressBar
          loading={loadingDensity}
          style={progressStyle}
          size={PROGRESS_SIZE}
        />
      </div>
    )
)
DensityChart.propTypes = {
  density: PropTypes.arrayOf(
    PropTypes.shape({
      at_point: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired,
  riskMetrics: PropTypes.shape({
    value_at_risk: PropTypes.number,
    expected_shortfall: PropTypes.number
  }).isRequired,
  loadingDensity: PropTypes.bool.isRequired,
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      primary: PropTypes.shape({
        main: PropTypes.string.isRequired
      }).isRequired,
      secondary: PropTypes.shape({
        main: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  })
}

const mapStateToProps = ({ pricerValues, loading }) => ({
  density: pricerValues.density,
  riskMetrics: pricerValues.riskMetrics,
  loadingDensity: loading.densityChart
})

export default connect(mapStateToProps)(DensityChart)
