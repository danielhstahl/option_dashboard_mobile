import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import {calibrateModel} from 'Actions/calibrator'
const _CalibrationTab=({attributes, nextTabLink})=>(
    attributes.asset?<Button 
        color="secondary"
        variant="contained"
        component={Link}
        to={nextTabLink}
    >
        View Results
    </Button>:null
)

const mapStateToProps=({calibratorValues, inputs})=>({
    attributes:calibratorValues.attributes,
    loading:inputs.loading
})

export const CalibrationTab=connect(mapStateToProps)(_CalibrationTab)


const styles={
    buttonProgress:{
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    }
}
const _ChartsTab=withStyles(styles)(({attributes, loading, onClick, classes, history, nextTabLink})=>attributes.asset?[
    <Button 
        color="secondary"
        variant="contained"
        onClick={()=>onClick(attributes).then(()=>history.push(nextTabLink))}
        disabled={loading}
        key='calibrate'
    >
        Calibrate
    </Button>,
    loading && <CircularProgress 
        size={24} 
        className={classes.buttonProgress} 
        key='progress'
        color="secondary"
    />
]:null
)

const mapDispatchToProps=dispatch=>({
    onClick:calibrateModel(dispatch)
})

export const ChartsTab=connect(
    mapStateToProps, 
    mapDispatchToProps
)(_ChartsTab)