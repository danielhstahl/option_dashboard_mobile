import React from 'react'
import { 
    VictoryChart, VictoryLine, 
    VictoryContainer,
    VictoryScatter
} from 'victory'
import ProgressBar from 'Components/utils/ProgressBar'
import {connect} from 'react-redux'
import { withTheme } from '@material-ui/core/styles'
import {progressStyleGenerator} from 'globals/utils'
import {
    ANIMATION_DURATION,
    CHART_LABEL_OFFSET,
    CHART_MARGIN,
    Y_AXIS_WIDTH,
    CHART_MIN_HEIGHT
} from 'globals/constants'

const PROGRESS_SIZE=36
const divStyle={position:'relative', minHeight:CHART_MIN_HEIGHT}
const progressStyle=progressStyleGenerator(PROGRESS_SIZE)

const ImpliedVolatilityChart=withTheme()(({impliedVolatility, theme})=>(
    impliedVolatility.length>0?
    <div>
        <p>Implied Volatility</p>
        <VictoryChart containerComponent={<VictoryContainer/>}>
            <VictoryLine 
                animate={true}
                style={{data:{stroke:theme.palette.primary.main}}}
                data={impliedVolatility}
                x='at_point'
                interpolation="natural"
                y='value'
            />
        </VictoryChart>
    </div>
    :<div style={divStyle}>
        <ProgressBar 
            style={progressStyle} 
            size={PROGRESS_SIZE}
        />
    </div>
    
))

const mapStateToProps=({pricerValues})=>({
    impliedVolatility:pricerValues.impliedVolatility
})

export default connect(
    mapStateToProps
)(ImpliedVolatilityChart)



