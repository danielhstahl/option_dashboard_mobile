import React from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, Label} from 'recharts'
import ProgressBar from 'Components/utils/ProgressBar'
import {connect} from 'react-redux'

const ImpliedVolatilityChart=({impliedVolatility})=>{
    return (
    impliedVolatility.length>0?<ResponsiveContainer 
        minWidth={200}
        minHeight={200}
    >
        <LineChart data={impliedVolatility}>
            <Line dataKey='iv' type="monotone"/>
            <XAxis dataKey='at_point'>
                <Label value="Strikes" offset={10} position="insideBottom" />
            </XAxis>
        </LineChart>
    </ResponsiveContainer>
    :<ProgressBar/>
)
}

const mapStateToProps=({pricerValues})=>({
    impliedVolatility:pricerValues.impliedVolatility
})

export default connect(
    mapStateToProps
)(ImpliedVolatilityChart)



