import React from 'react'
import Box from '@material-ui/core/Box'
import SplineChart from './SplineChart'
import MarketValueTable from './MarketValueTable'
import ButtonToCalibrate from './ButtonToCalibrate'
import CalibratedValueTable from './CalibratedValueTable'
import ButtonNext from './ButtonToScreen3'
const marginBottom = { marginBottom: 50 }
const fullWidth = { width: '100%' }
const CalibrationScreen = () => (
  <Box display="flex" flexWrap="wrap" style={marginBottom}>
    <Box style={fullWidth}>
      <MarketValueTable />
    </Box>
    <Box style={fullWidth}>
      <SplineChart />
    </Box>
    <Box style={fullWidth}>
      <p>
        The model will calibrate the characteristic function to approximate the
        fitted spline above. The fit will be better when the option prices have
        less arbitrage.
      </p>
      <ButtonToCalibrate />
    </Box>
    <Box style={fullWidth}>
      <CalibratedValueTable />
    </Box>
    <Box style={fullWidth}>
      <ButtonNext nextTabLink="/tab/3" />
    </Box>
  </Box>
)
export default CalibrationScreen
