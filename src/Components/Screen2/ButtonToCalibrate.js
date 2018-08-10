import React from 'react'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import ProgressBar from 'Components/utils/ProgressBar'
import {calibrateModel} from 'Actions/calibrator'
import {
    outerStyleInline,
    progressStyle,
    PROGRESS_SIZE
} from 'globals/progressStyles'
import PropTypes from 'prop-types'

const checkRequiredFields=({
    constraints, maturity, asset
})=>constraints&&maturity&&asset

//exported for testing
export const ButtonToCalibrate=({
    attributes,  
    onClick, loadingCalibrate
})=>(
    checkRequiredFields(attributes)?
    <div style={outerStyleInline}>
        <Button 
            color="secondary"
            variant="contained"
            onClick={()=>onClick(attributes)}
            disabled={loadingCalibrate}
            key='calibrate'
        >
            Calibrate
        </Button>
        <ProgressBar 
            key='progress' 
            size={PROGRESS_SIZE} 
            style={progressStyle}
            loading={loadingCalibrate}
        />
    </div>:null
)
ButtonToCalibrate.propTypes={
    attributes:PropTypes.object.isRequired,
    loadingCalibrate:PropTypes.bool.isRequired,
    onClick:PropTypes.func.isRequired
}


const mapStateToProps=({calibratorValues, loading})=>({
    attributes:calibratorValues.attributes,
    loadingCalibrate:loading.calibrate
})
const mapDispatchToProps=dispatch=>({
    onClick:calibrateModel(dispatch)
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ButtonToCalibrate)