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
import {
    ANIMATION_DURATION,
    CHART_LABEL_OFFSET,
    CHART_MARGIN
} from 'globals/constants'

const DensityChart=withTheme()(({density, theme, riskMetrics})=>(
    density.length>0?
    <div>
        <p>Risk Neutral Density and Value at Risk</p>
        <ResponsiveContainer 
            minWidth={200}
            minHeight={200}
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
                <YAxis width={30}/>
            </LineChart>
        </ResponsiveContainer>
    </div>
    :<ProgressBar/>
))

const mapStateToProps=({pricerValues})=>({
    density:pricerValues.density,
    riskMetrics:pricerValues.riskMetrics
})

export default connect(
    mapStateToProps
)(DensityChart)



