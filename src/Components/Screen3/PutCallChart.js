import React from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, Legend, Label} from 'recharts'

import {connect} from 'react-redux'
import ProgressBar from 'Components/utils/ProgressBar'
const title='Spline of Option Prices'
const xLabel='Normalized Log Strike'
const yLabel='Transformed Option Price'
const PutCallChart=({call, put})=>{
    if(call.length>0&&put.length>0){
        const combinedValues=call.map((v, i)=>({
            at_point:v.at_point, 
            call:v.value,
            put:put[i].value
        }))
        return (
            <ResponsiveContainer 
                minWidth={200}
                minHeight={200}
            >
                <LineChart data={combinedValues}>
                    <Legend verticalAlign="top" height={36}/>
                    <Line dataKey='call' type="monotone"/>
                    <Line dataKey='put' type="monotone"/>
                    <XAxis dataKey='at_point'>
                        <Label value="Strikes" offset={10} position="insideBottom" />
                    </XAxis>
                </LineChart>
            </ResponsiveContainer>
        )
    }
    else{
        return <ProgressBar/>
    }
}

const mapStateToProps=({pricerValues})=>({
    call:pricerValues.call,
    put:pricerValues.put
})

export default connect(
    mapStateToProps
)(PutCallChart)



