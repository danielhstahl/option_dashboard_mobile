import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import ProgressBar from '../utils/ProgressBar'
import {calibrateModel} from 'Actions/calibrator'
import {isEmpty} from 'globals/utils'
const styles={
    buttonProgress:{
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    }
}
const checkRequiredFields=({constraints, maturity, asset})=>constraints&&maturity&&asset
const ButtonToCalibrate=withStyles(styles)(({attributes, loading, onClick, classes})=>checkRequiredFields(attributes)?[
    <Button 
        color="secondary"
        variant="contained"
        onClick={()=>onClick(attributes)}
        disabled={loading}
        key='calibrate'
    >
        Calibrate
    </Button>,
    <ProgressBar key='progress'/>
]:null
)

const mapStateToProps=({calibratorValues, inputs})=>({
    attributes:calibratorValues.attributes,
    loading:inputs.loading
})
const mapDispatchToProps=dispatch=>({
    onClick:calibrateModel(dispatch)
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ButtonToCalibrate)