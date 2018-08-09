import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ProgressBar from 'Components/utils/ProgressBar'

import {
    outerStyleInline,
    progressStyle,
    PROGRESS_SIZE
} from 'globals/progressStyles'

const ButtonToScreen2=({
    nextTabLink, 
    maturity,
    loadingMaturity
})=>maturity?(
    <Button 
        color="secondary"
        variant="contained"
        component={Link}
        to={nextTabLink}
    >
        View Results
    </Button>
):<div style={outerStyleInline}>
    <ProgressBar 
        size={PROGRESS_SIZE} 
        style={progressStyle}
        loading={loadingMaturity}
    />
</div>

const mapStateToProps=({inputs, loading})=>({
    maturity:inputs.maturity,
    loadingMaturity:loading.maturity
})

export default connect(
    mapStateToProps
)(ButtonToScreen2)