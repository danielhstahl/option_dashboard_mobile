import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ProgressBar from 'Components/utils/ProgressBar'
const ButtonToScreen2=({attributes, nextTabLink})=>attributes.maturity?(
    <Button 
        color="secondary"
        variant="contained"
        component={Link}
        to={nextTabLink}
    >
        View Results
    </Button>
):<ProgressBar/>

const mapStateToProps=({calibratorValues, inputs})=>({
    attributes:calibratorValues.attributes
})

export default connect(
    mapStateToProps
)(ButtonToScreen2)