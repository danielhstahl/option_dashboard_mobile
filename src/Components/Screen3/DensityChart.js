import React from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, Label} from 'recharts'
import ProgressBar from 'Components/utils/ProgressBar'
import {connect} from 'react-redux'

const DensityChart=({density})=>{
    return (
    density.length>0?<ResponsiveContainer 
        minWidth={200}
        minHeight={200}
    >
        <LineChart data={density}>
            <Line dataKey='value' type="monotone"/>
            <XAxis dataKey='at_point'>
                <Label value="Strikes" offset={0} position="insideBottom" />
            </XAxis>
        </LineChart>
    </ResponsiveContainer>
    :<ProgressBar/>
)
}

const mapStateToProps=({pricerValues})=>({
    density:pricerValues.density
})

export default connect(
    mapStateToProps
)(DensityChart)



