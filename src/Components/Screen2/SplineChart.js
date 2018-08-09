import React from 'react'
import { 
    VictoryChart, VictoryLine, 
    VictoryContainer,
    VictoryScatter
} from 'victory'
import { withTheme } from '@material-ui/core/styles'
import ProgressBar from 'Components/utils/ProgressBar'
import {connect} from 'react-redux'
import {containerStyle, animateStyle} from 'globals/chartStyles'
import {
    outerStyleStandalone,
    progressStyle,
    PROGRESS_SIZE
} from 'globals/progressStyles'
const SplineCurves=withTheme()(({spline, theme, loadingSpline})=>(
    spline.curve?
        <VictoryChart 
            animate={animateStyle} 
            containerComponent={<VictoryContainer style={containerStyle}/>}
        >
            <VictoryLine 
               style={{data:{stroke:theme.palette.primary.main}}}
               data={spline.curve}
               x='log_strike'
               interpolation="natural"
               y='transformed_option'
            />
            <VictoryScatter 
               style={{data:{stroke:theme.palette.secondary.main}}}
               data={spline.points}
               x='log_strike'
               interpolation="natural"
               y='transformed_option'
            />
        </VictoryChart>
        :<div style={outerStyleStandalone}>
            <ProgressBar 
                loading={loadingSpline}
                style={progressStyle} 
                size={PROGRESS_SIZE}
            />
        </div>
))

const mapStateToProps=({calibratorValues, loading})=>({
    spline:calibratorValues.spline,
    loadingSpline:loading.splineChart
})

export default connect(
    mapStateToProps
)(SplineCurves)



