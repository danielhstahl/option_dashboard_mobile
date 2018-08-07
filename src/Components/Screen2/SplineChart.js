import React from 'react'
import { 
    LineChart, Line, 
    ResponsiveContainer, 
    XAxis, Label
} from 'recharts'
import { withTheme } from '@material-ui/core/styles'
import {connect} from 'react-redux'
import {
    ANIMATION_DURATION,
    CHART_LABEL_OFFSET,
    CHART_MARGIN
} from 'globals/constants'
const SplineCurves=withTheme()(({spline, theme})=>(
    spline.curve?<ResponsiveContainer 
        minWidth={200}
        minHeight={200}
    >
        <LineChart margin={CHART_MARGIN}>
            <Line 
                dot={false} 
                dataKey='transformed_option' 
                data={spline.curve} 
                type="monotone" 
                stroke={theme.palette.primary.main} 
                strokeWidth={2}
                animationDuration={ANIMATION_DURATION}
            />
            <Line 
                dataKey='transformed_option'
                data={spline.points} 
                fill={theme.palette.secondary.main}
                stroke="transparent"
                animationDuration={ANIMATION_DURATION}
            />
            <XAxis dataKey='log_strike' allowDuplicatedCategory={false}>
                <Label 
                    value="Log Strike" 
                    offset={CHART_LABEL_OFFSET}  
                    position="bottom" 
                />
            </XAxis>
        </LineChart>
    </ResponsiveContainer>
    :null
))

const mapStateToProps=({calibratorValues})=>({
    spline:calibratorValues.spline
})

export default connect(
    mapStateToProps
)(SplineCurves)



