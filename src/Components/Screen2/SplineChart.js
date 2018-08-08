import React from 'react'
import { 
    VictoryChart, VictoryLine, 
    VictoryContainer,
    VictoryScatter
} from 'victory'
import { withTheme } from '@material-ui/core/styles'
import {connect} from 'react-redux'
import {containerStyle, animateStyle} from 'globals/chartStyles'

const SplineCurves=withTheme()(({spline, theme})=>(
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
        </VictoryChart>:null
))

const mapStateToProps=({calibratorValues})=>({
    spline:calibratorValues.spline
})

export default connect(
    mapStateToProps
)(SplineCurves)



