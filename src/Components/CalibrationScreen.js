import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { withStyles } from '@material-ui/core'
import SelectTicker from './SelectTicker'
import SelectMaturity from './SelectMaturity'
import SplineCurves from './Graphs'
import MarketValueTable from './MarketValueTable'

const CalibrationScreen=()=>(
    <Grid fluid>
       <Row>
            <Col xsOffset={1} smOffset={2} xs={10} sm={8}>
                <MarketValueTable />
            </Col>
        </Row>
        <Row>
            <Col xsOffset={1} smOffset={2} xs={10} sm={8}>
                <SplineCurves />
            </Col>
        </Row>
    </Grid>
)
export default CalibrationScreen


