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

const getMax=(data, key)=>data.reduce((aggr, cur)=>{
    return cur[key]>aggr?cur[key]:aggr
}, 0)
const getVaR=(riskMetrics, density)=>[
    {
        x:-riskMetrics.value_at_risk,
        y:0
    },{
        x:-riskMetrics.value_at_risk,
        y:getMax(density, 'value')
    }
]
const DensityChart=withTheme()(({density, theme, riskMetrics})=>(
    density.length>0?
    <div>
        <p>Risk Neutral Density and Value at Risk</p>
            <VictoryChart 
                containerComponent={<VictoryContainer/>}
            >
                <VictoryLine 
                    animate={true}
                    style={{data:{stroke:theme.palette.primary.main}}}
                    data={density}
                    x='at_point'
                    interpolation="natural"
                    y='value'
                />
                <VictoryLine 
                    animate={true}
                    style={{data:{stroke:theme.palette.primary.main}}}
                    data={getVaR(riskMetrics, density)}
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
    density:pricerValues.density,
    riskMetrics:pricerValues.riskMetrics
})

export default connect(
    mapStateToProps
)(DensityChart)



