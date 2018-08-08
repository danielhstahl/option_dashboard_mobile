import React from 'react'
import { 
    VictoryChart, VictoryLine, 
    VictoryContainer,
    VictoryScatter
} from 'victory'
import { withTheme } from '@material-ui/core/styles'
import {connect} from 'react-redux'
import ProgressBar from 'Components/utils/ProgressBar'
import {progressStyleGenerator} from 'globals/utils'
import {
    ANIMATION_DURATION,
    CHART_MIN_HEIGHT
} from 'globals/constants'
const animateObj={duration:ANIMATION_DURATION}
const PROGRESS_SIZE=36
const divStyle={position:'relative', minHeight:CHART_MIN_HEIGHT}
const progressStyle=progressStyleGenerator(PROGRESS_SIZE)

const PutCallChart=withTheme()(({call, put, theme, strikes, prices, sensitivity})=>{
    const scatter=strikes.map((v, index)=>({
        strike:v,
        price:prices[index]
    }))
    return (
    <div>
        <p>Call and Put Charts</p>
        {call.length>0&&put.length>0?
        (
           <VictoryChart containerComponent={<VictoryContainer/>} animate={animateObj}>
                <VictoryLine 
                    style={{data:{stroke:theme.palette.primary.main}}}
                    data={call}
                    x='at_point'
                    interpolation="natural"
                    y='value'
                />
                <VictoryLine 
                    style={{data:{stroke:theme.palette.secondary.main}}}
                    data={put}
                    x='at_point'
                    interpolation="natural"
                    y='value'
                />
                {sensitivity==='price'&&<VictoryScatter
                    animate={animateObj}
                    style={{data:{stroke:theme.palette.secondary.main}}}
                    data={scatter}
                    x='strike'
                    interpolation="natural"
                    y='price'
                />}
            </VictoryChart>
        ):(
            <div style={divStyle}>
                <ProgressBar 
                    style={progressStyle} 
                    size={PROGRESS_SIZE}
                />
            </div>
        )}
    </div>
)})

const mapStateToProps=({pricerValues, calibratorValues})=>({
    call:pricerValues.call,
    put:pricerValues.put,
    strikes:calibratorValues.attributes.strikes,
    prices:calibratorValues.attributes.prices
})

export default connect(
    mapStateToProps
)(PutCallChart)



