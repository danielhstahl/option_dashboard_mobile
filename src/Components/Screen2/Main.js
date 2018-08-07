import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import SplineChart from './SplineChart'
import MarketValueTable from './MarketValueTable'
import ButtonToCalibrate from './ButtonToCalibrate'
import CalibratedValueTable from './CalibratedValueTable'
import ButtonNext from './ButtonToScreen3'
const marginBottom={marginBottom:50}
const CalibrationScreen=()=>(
    <Grid fluid style={marginBottom}>
       <Row>
            <Col  xs={12} >
                <MarketValueTable />
            </Col>
        </Row>
        <Row>
            <Col xs={12} >
                <SplineChart />
            </Col>
        </Row>
        <Row>
            <Col xs={12} >
                <p>
                    The model will calibrate the characteristic function to approximate the fitted spline above.  The fit will be better when the option prices have less arbitrage.
                </p>
                <ButtonToCalibrate/> 
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <CalibratedValueTable />
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <ButtonNext nextTabLink='/tab/3' />
            </Col>
        </Row>
    </Grid>
)
export default CalibrationScreen


