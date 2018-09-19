import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import SelectTicker from './SelectTicker'
import SelectMaturity from './SelectMaturity'
import ButtonNext from './ButtonToScreen2'
const SetupScreen = () => (
  <Grid fluid>
    <Row>
      <Col xs={12}>
        <p>
          {' '}
          This app calibrates and prices options using a general jump-diffusion
          with stochastic clock correlated with the diffusion component of the
          asset.{' '}
        </p>
        <p>Step 1: Select Fortune 500 Company!</p>
        <SelectTicker />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <p>Step 2: Select Option Maturity!</p>
        <SelectMaturity />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <ButtonNext nextTabLink="/tab/2" />
      </Col>
    </Row>
  </Grid>
)

export default SetupScreen
