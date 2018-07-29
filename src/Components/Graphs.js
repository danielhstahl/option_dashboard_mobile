import React from 'react'
import { 
    VictoryLine, 
    VictoryChart,
    VictoryAxis,
    VictoryLabel,
    VictoryScatter,
    VictoryLegend,
    VictoryVoronoiContainer
} from 'victory'
import {connect} from 'react-redux'

const domainPadding=25
const splineLabelFn=label=>d=>`Transformed Option Price ${d.transformed_option} at ${label} ${d.log_strike}`

const axisStyleOption={ axisLabel: { padding: 30} }
const blueStroke={data:{stroke:"blue"}}

const title='Spline of Option Prices'
const xLabel='Normalized Log Strike'
const yLabel='Transformed Option Price'
const SplineCurves=({spline})=>(
    spline.curve?<VictoryChart 
        domainPadding={domainPadding} 
        containerComponent={<VictoryVoronoiContainer labels={splineLabelFn(xLabel)}/>}
    >
       
        <VictoryLabel x={120} y={50}
            text={title}
        />
        <VictoryScatter data={spline.points} x="log_strike" y="transformed_option"/>
        <VictoryLine
            style={blueStroke}
            interpolation="natural"
            data={spline.curve}
            x="log_strike"
            y="transformed_option"
        />
        <VictoryAxis 
            dependentAxis
            style={axisStyleOption}
            label={yLabel}
        />
        <VictoryAxis
            label={xLabel}
        />
    </VictoryChart>:null
)

const mapStateToProps=({marketValues})=>({
    spline:marketValues.spline
})

export default connect(
    mapStateToProps
)(SplineCurves)



