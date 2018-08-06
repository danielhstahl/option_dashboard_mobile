import React from 'react'
import {Link} from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Typography from '@material-ui/core/Typography'
const marginTop={marginTop:40}
//export for testing
export const convertArrayToParagraph=arr=>arr.reduce((aggr, curr)=>{
    return [...(Array.isArray(aggr)?aggr:[aggr]), ' or ', curr]
})
const WarningNoValues=({links})=>(
    <Typography variant="headline" gutterBottom style={marginTop}>
        No data available!  Check that {convertArrayToParagraph(links.map(({to, label})=><Link to={to} key={to}>{label}</Link>))} has been filled in correctly!
    </Typography>
)
export default WarningNoValues


