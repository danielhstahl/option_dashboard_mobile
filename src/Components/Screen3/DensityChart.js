import React from 'react'
import { 
    LineChart, Line, 
    ResponsiveContainer, 
    XAxis, Label, YAxis, 
    ReferenceLine
} from 'recharts'
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

const DensityChart=withTheme()(({density, theme, riskMetrics})=>(
    density.length>0?
    <div>
        <p>Risk Neutral Density and Value at Risk</p>
        <ResponsiveContainer 
            minWidth={200}
            minHeight={CHART_MIN_HEIGHT}
        >
            <LineChart data={density} margin={CHART_MARGIN}>
                <Line 
                    dot={false} 
                    dataKey='value' 
                    type="monotone" 
                    stroke={theme.palette.primary.main} 
                    strokeWidth={2}
                    animationDuration={ANIMATION_DURATION}
                />
                <ReferenceLine 
                    x={riskMetrics.value_at_risk} 
                    stroke={theme.palette.secondary.main}
                />
                <XAxis dataKey='at_point'>
                    <Label 
                        value="Strikes" 
                        offset={CHART_LABEL_OFFSET}
                        position="bottom" 
                    />
                </XAxis>
                <YAxis width={Y_AXIS_WIDTH}/>
            </LineChart>
        </ResponsiveContainer>
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



