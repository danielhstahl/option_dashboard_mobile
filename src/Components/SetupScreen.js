import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import SelectTicker from './SelectTicker'
import SelectMaturity from './SelectMaturity'
import {CalibrationTab} from './NextTabButton'
const SetupScreen=()=>(
    <Grid fluid>
        <Row>
            <Col xsOffset={1} smOffset={2} xs={10} sm={8}>
                <p>Step 1: Select Fortune 500 Company!</p>
                <SelectTicker/>
            </Col>
        </Row>
        <Row>
            <Col xsOffset={1} smOffset={2} xs={10} sm={8}>
                <p>Step 2: Select Option Maturity!</p>
                <SelectMaturity/>
            </Col>
        </Row>
        <Row>
            <Col xsOffset={1} smOffset={2} xs={10} sm={8}>
                <CalibrationTab nextTabLink='/tab/2'/>
            </Col>
        </Row>
    </Grid>
)

export default SetupScreen