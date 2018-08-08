import React from 'react'
import { 
    VictoryChart, VictoryLine, 
    VictoryContainer,
    VictoryScatter, VictoryLegend
} from 'victory'
import { withTheme } from '@material-ui/core/styles'
import {connect} from 'react-redux'
import ProgressBar from 'Components/utils/ProgressBar'
import {progressStyleGenerator} from 'globals/utils'
import {containerStyle, animateStyle, titleStyle} from 'globals/chartStyles'
import {
    CHART_MIN_HEIGHT
} from 'globals/constants'

const PROGRESS_SIZE=36
const divStyle={position:'relative', minHeight:CHART_MIN_HEIGHT}
const progressStyle=progressStyleGenerator(PROGRESS_SIZE)

const PutCallChart=withTheme()(({call, put, theme, strikes, prices, sensitivity})=>{
    const scatter=strikes.map((v, index)=>({
        strike:v,
        price:prices[index]
    }))
    const legendData=(primary, secondary)=>[
        {name:"Call", symbol: { fill: primary }}, 
        {name:"Put", symbol: { fill: secondary }}
    ]
    const {main:primary}=theme.palette.primary
    const {main:secondary}=theme.palette.secondary
    return (call.length>0&&put.length>0?
        (
           <VictoryChart containerComponent={<VictoryContainer style={containerStyle}/>} animate={animateStyle}>
                <VictoryLegend 
                    centerTitle
                    title="Calls and Puts"
                    {...titleStyle}
                    data={legendData(primary, secondary)} 
                    orientation="horizontal"
                />
                <VictoryLine 
                    style={{data:{stroke:primary}}}
                    data={call}
                    x='at_point'
                    interpolation="natural"
                    y='value'
                    
                />
                <VictoryLine 
                    style={{data:{stroke:secondary}}}
                    data={put}
                    x='at_point'
                    interpolation="natural"
                    y='value'
                />
                {sensitivity==='price'&&<VictoryScatter
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
        )
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



