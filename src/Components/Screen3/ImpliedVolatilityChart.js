import React from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, Label, YAxis} from 'recharts'
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
        <ResponsiveContainer 
            minWidth={200}
            minHeight={200}
        >
            <LineChart data={impliedVolatility} margin={CHART_MARGIN}>
                <Line 
                    dot={false} 
                    dataKey='iv' 
                    type="monotone" 
                    stroke={theme.palette.primary.main} 
                    strokeWidth={2}
                    animationDuration={ANIMATION_DURATION}
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
    impliedVolatility:pricerValues.impliedVolatility
})

export default connect(
    mapStateToProps
)(ImpliedVolatilityChart)



