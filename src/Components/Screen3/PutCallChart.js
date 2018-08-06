import React from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, Legend, Label, YAxis} from 'recharts'
import { withTheme } from '@material-ui/core/styles'
import {connect} from 'react-redux'
import ProgressBar from 'Components/utils/ProgressBar'
import {
    ANIMATION_DURATION,
    CHART_MARGIN,
    CHART_LABEL_OFFSET
} from 'globals/constants'
const PutCallChart=withTheme()(({call, put, theme})=>{
    if(call.length>0&&put.length>0){
        return (
            <div>
                <p>Call and Put Charts</p>
                <ResponsiveContainer 
                    minWidth={200}
                    minHeight={200}
                >
                    <LineChart margin={CHART_MARGIN}>
                        <Legend verticalAlign="top"/>
                        <Line 
                            dot={false} 
                            name="Call"
                            data={call}
                            dataKey='value' 
                            type="monotone" 
                            animationDuration={ANIMATION_DURATION}
                            stroke={theme.palette.primary.main}
                            strokeWidth={2}
                        />
                        <Line 
                            dot={false} 
                            name="Put"
                            data={put}
                            dataKey='value' 
                            type="monotone" 
                            animationDuration={ANIMATION_DURATION}
                            stroke={theme.palette.secondary.main} 
                            strokeWidth={2}
                        />
                        <XAxis dataKey='at_point' allowDuplicatedCategory={false}>
                            <Label value="Strikes"  offset={CHART_LABEL_OFFSET} position="bottom" />
                        </XAxis>
                        <YAxis width={30}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
    else{
        return <ProgressBar/>
    }
})

const mapStateToProps=({pricerValues})=>({
    call:pricerValues.call,
    put:pricerValues.put
})

export default connect(
    mapStateToProps
)(PutCallChart)



