import React from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, Label} from 'recharts'

import {connect} from 'react-redux'

const title='Spline of Option Prices'
const xLabel='Normalized Log Strike'
const yLabel='Transformed Option Price'
const SplineCurves=({spline})=>{
    console.log(spline)
    return (
    spline.curve?<ResponsiveContainer 
        minWidth={200}
        minHeight={200}
    >
        <LineChart data={spline.curve}>
            <Line dataKey='transformed_option' type="monotone"/>
            <XAxis dataKey='log_strike'>
                <Label value="Log Strike" offset={0} position="insideBottom" />
            </XAxis>
        </LineChart>
    </ResponsiveContainer>
    :null
)
}

const mapStateToProps=({calibratorValues})=>({
    spline:calibratorValues.spline
})

export default connect(
    mapStateToProps
)(SplineCurves)



