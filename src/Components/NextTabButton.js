import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import {calibrateModel} from 'Actions/calibrator'
import {isEmpty} from 'globals/utils'
const _CalibrationTab=({attributes, nextTabLink})=>attributes.maturity?(
    <Button 
        color="secondary"
        variant="contained"
        component={Link}
        to={nextTabLink}
    >
        View Results
    </Button>
):null

const mapStateToProps=({calibratorValues, inputs})=>({
    attributes:calibratorValues.attributes,
    loading:inputs.loading,
    calibrated:calibratorValues.calibrated
})

export const CalibrationTab=connect(
    mapStateToProps
)(_CalibrationTab)


const styles={
    buttonProgress:{
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    }
}
const checkRequiredFields=({constraints, maturity, asset})=>constraints&&maturity&&asset
const _CalibrateButton=withStyles(styles)(({attributes, loading, onClick, classes})=>checkRequiredFields(attributes)?[
    <Button 
        color="secondary"
        variant="contained"
        onClick={()=>onClick(attributes)}
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

export const CalibrateButton=connect(
    mapStateToProps, 
    mapDispatchToProps
)(_CalibrateButton)


const _ChartsTab=({calibrated, nextTabLink})=>
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

export const ChartsTab=connect(mapStateToProps)(_ChartsTab)