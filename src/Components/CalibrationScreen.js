import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import SplineCurves from './Graphs'
import MarketValueTable from './MarketValueTable'
import {ChartsTab, CalibrateButton} from './NextTabButton'
import CalibratedValueTable from './CalibratedValueTable'
const CalibrationScreen=()=>(
    <Grid fluid>
       <Row>
            <Col  xs={12} >
                <MarketValueTable />
            </Col>
        </Row>
        <Row>
            <Col xs={12} >
                <SplineCurves />
            </Col>
        </Row>
        <Row>
            <Col xs={12} >
                <p>
                    The model will calibrate the characteristic function to approximate the fitted spline above.  The fit will be better when the option prices have less arbitrage.
                </p>
                <CalibrateButton/> 
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <CalibratedValueTable />
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <ChartsTab nextTabLink='/tab/3' />
            </Col>
        </Row>
    </Grid>
)
export default CalibrationScreen


