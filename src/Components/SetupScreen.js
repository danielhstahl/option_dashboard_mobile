import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import SelectTicker from './SelectTicker'
import SelectMaturity from './SelectMaturity'
import {CalibrationTab} from './NextTabButton'
const SetupScreen=()=>(
    <Grid fluid>
        <Row>
            <Col xs={12}>
                <p>Step 1: Select Fortune 500 Company!</p>
                <SelectTicker/>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <p>Step 2: Select Option Maturity!</p>
                <SelectMaturity/>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <CalibrationTab nextTabLink='/tab/2'/>
            </Col>
        </Row>
    </Grid>
)

export default SetupScreen