import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const NextTabButton=({attributes, nextTabLink})=>(
    attributes.asset?<Button 
        color="secondary"
        variant="contained"
        component={Link}
        to={nextTabLink}
    >
        Calibration!
    </Button>:null
)

const mapStateToProps=({marketValues})=>({
    attributes:marketValues.attributes
})

export default connect(mapStateToProps)(NextTabButton)