import React from 'react'
import { 
    VictoryChart, VictoryLine, 
    VictoryContainer, 
    VictoryLabel
} from 'victory'
import ProgressBar from 'Components/utils/ProgressBar'
import {connect} from 'react-redux'
import { withTheme } from '@material-ui/core/styles'
import {progressStyleGenerator} from 'globals/utils'
import {containerStyle, animateStyle, titleStyle} from 'globals/chartStyles'
import {
    CHART_MIN_HEIGHT,
    FIXED_DECIMALS,
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
    density.length>0&&riskMetrics.value_at_risk?
    <VictoryChart 
        animate={animateStyle}
        containerComponent={<VictoryContainer style={containerStyle}/>}
    >
        <VictoryLabel 
            {...titleStyle} 
            text={[
                "Risk Neutral Density and Value at Risk",
                `Value at Risk: ${riskMetrics.value_at_risk.toFixed(FIXED_DECIMALS)}, Expected Shortfall: ${riskMetrics.expected_shortfall.toFixed(FIXED_DECIMALS)}`
            ]}

        />
        <VictoryLine 
            
            style={{data:{stroke:theme.palette.primary.main}}}
            data={density}
            x='at_point'
            interpolation="natural"
            y='value'
        />
        <VictoryLine 
            style={{data:{stroke:theme.palette.secondary.main}}}
            data={getVaR(riskMetrics, density)}
        />
    </VictoryChart>
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



