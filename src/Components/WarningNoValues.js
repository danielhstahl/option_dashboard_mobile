import React from 'react'
import {Link} from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Typography from '@material-ui/core/Typography'
const marginTop={marginTop:40}
const WarningNoValues=()=>(
    <Typography variant="headline" gutterBottom style={marginTop}>
        No data available!  Check that <Link to='/tab/1'>market options</Link> has been filled in correctly!
    </Typography>
)
export default WarningNoValues


