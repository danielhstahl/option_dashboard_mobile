import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


import {isEmpty} from 'globals/utils'
const ButtonToScreen3=({calibrated, nextTabLink})=>
    isEmpty(calibrated)? 
    null:
    (
    <Button 
        color="secondary"
        variant="contained"
        component={Link}
        to={nextTabLink}
    >
        View Charts
    </Button>
)
const mapStateToProps=({calibratorValues})=>({
    calibrated:calibratorValues.calibrated
})
export default connect(mapStateToProps)(ButtonToScreen3)