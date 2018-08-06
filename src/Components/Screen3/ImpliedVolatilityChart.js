import React from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, Label, YAxis} from 'recharts'
import ProgressBar from 'Components/utils/ProgressBar'
import {connect} from 'react-redux'
import { withTheme } from '@material-ui/core/styles'
import {
    ANIMATION_DURATION,
    CHART_LABEL_OFFSET,
    CHART_MARGIN
} from 'globals/constants'

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
                <YAxis width={30}/>
            </LineChart>
        </ResponsiveContainer>
    </div>
    :<ProgressBar/>
    
))

const mapStateToProps=({pricerValues})=>({
    impliedVolatility:pricerValues.impliedVolatility
})

export default connect(
    mapStateToProps
)(ImpliedVolatilityChart)



