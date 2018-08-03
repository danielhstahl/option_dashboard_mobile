import React from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis} from 'recharts'
/*import { 
    VictoryLine, 
    VictoryChart,
    VictoryAxis,
    VictoryLabel,
    VictoryScatter,
    VictoryLegend,
    VictoryTooltip,
    VictoryVoronoiContainer
} from 'victory'*/
import {connect} from 'react-redux'

const domainPadding=25
//const splineLabelFn=label=>d=>`Transformed Option Price ${d.transformed_option} at ${label} ${d.log_strike}`

//const axisStyleOption={ axisLabel: { padding: 30} }
//const blueStroke={data:{stroke:"blue"}}

const title='Spline of Option Prices'
const xLabel='Normalized Log Strike'
const yLabel='Transformed Option Price'
const SplineCurves=({spline})=>(
    spline.curve?<ResponsiveContainer 
        width={700}
        height={'80%'}
    >
        <LineChart data={spline.curve}>
            <Line dataKey='transformed_option' type="monotone"/>
            <XAxis dataKey='log_strike'/>
        </LineChart>
    </ResponsiveContainer>
    :null
)

const mapStateToProps=({marketValues})=>({
    spline:marketValues.spline
})

export default connect(
    mapStateToProps
)(SplineCurves)



