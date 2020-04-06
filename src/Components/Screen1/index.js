import React from 'react'
import Box from '@material-ui/core/Box'
import SelectTicker from './SelectTicker'
import SelectMaturity from './SelectMaturity'
import ButtonNext from './ButtonToScreen2'
const fullWidth = { width: '100%' }
const SetupScreen = () => (
  <Box display="flex" flexWrap="wrap">
    <Box style={fullWidth}>
      <p>
        {' '}
        This app calibrates and prices options using a general jump-diffusion
        with stochastic clock correlated with the diffusion component of the
        asset.{' '}
      </p>
      <p>Step 1: Select Fortune 500 Company!</p>
      <SelectTicker />
    </Box>
    <Box style={fullWidth}>
      <p>Step 2: Select Option Maturity!</p>
      <SelectMaturity />
    </Box>
    <Box style={fullWidth}>
      <ButtonNext nextTabLink="/tab/2" />
    </Box>
  </Box>
)

export default SetupScreen
