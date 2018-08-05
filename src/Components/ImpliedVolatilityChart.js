import React from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis} from 'recharts'

import {connect} from 'react-redux'

const title='Spline of Option Prices'
const xLabel='Normalized Log Strike'
const yLabel='Transformed Option Price'
const ImpliedVolatilityChart=({impliedVolatility})=>{
    return (
    impliedVolatility.length>0?<ResponsiveContainer 
        minWidth={200}
        minHeight={200}
    >
        <LineChart data={impliedVolatility}>
            <Line dataKey='iv' type="monotone"/>
            <XAxis dataKey='at_point'/>
        </LineChart>
    </ResponsiveContainer>
    :null
)
}

const mapStateToProps=({pricerValues})=>({
    impliedVolatility:pricerValues.impliedVolatility
})

export default connect(
    mapStateToProps
)(ImpliedVolatilityChart)



