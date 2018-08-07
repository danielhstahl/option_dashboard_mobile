import React from 'react'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import ProgressBar from '../utils/ProgressBar'
import {calibrateModel} from 'Actions/calibrator'
import {progressStyleGenerator} from 'globals/utils'

const PROGRESS_SIZE=36

const divStyle={position:'relative'}
const progressStyle=progressStyleGenerator(PROGRESS_SIZE)

const checkRequiredFields=({
    constraints, maturity, asset
})=>constraints&&maturity&&asset

const ButtonToCalibrate=({attributes, loading, onClick})=>(
    checkRequiredFields(attributes)?
    <div style={divStyle}>
        <Button 
            color="secondary"
            variant="contained"
            onClick={()=>onClick(attributes)}
            disabled={loading}
            key='calibrate'
        >
            Calibrate
        </Button>
        <ProgressBar key='progress' size={PROGRESS_SIZE} style={progressStyle}/>
    </div>:null
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