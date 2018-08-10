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
import PropTypes from 'prop-types'

//exported for testing
export const SplineChart=withTheme()(({spline, theme, loadingSpline})=>(
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
SplineChart.propTypes={
    spline:PropTypes.shape({
        curve:PropTypes.arrayOf(PropTypes.shape({
            log_strike:PropTypes.number.isRequired,
            transformed_option:PropTypes.number.isRequired
        })),
        points:PropTypes.arrayOf(PropTypes.shape({
            log_strike:PropTypes.number.isRequired,
            transformed_option:PropTypes.number.isRequired
        }))
    }),
    theme:PropTypes.shape({
        palette:PropTypes.shape({
            primary:PropTypes.shape({
                main:PropTypes.string.isRequired
            }).isRequired,
            secondary:PropTypes.shape({
                main:PropTypes.string.isRequired
            }).isRequired,
        }).isRequired
    }).isRequired,
    loadingSpline:PropTypes.bool.isRequired
}

const mapStateToProps=({calibratorValues, loading})=>({
    spline:calibratorValues.spline,
    loadingSpline:loading.splineChart
})

export default connect(
    mapStateToProps
)(SplineChart)



