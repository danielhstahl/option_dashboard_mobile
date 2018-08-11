import React from 'react'
import { 
    VictoryChart, VictoryLine, 
    VictoryLabel,
    VictoryContainer
} from 'victory'
import ProgressBar from 'Components/utils/ProgressBar'
import {connect} from 'react-redux'
import { withTheme } from '@material-ui/core/styles'
import {containerStyle, animateStyle, titleStyle} from 'globals/chartStyles'

import {
    outerStyleStandalone,
    progressStyle,
    PROGRESS_SIZE
} from 'globals/progressStyles'

import PropTypes from 'prop-types'

//exported for testing
export const ImpliedVolatilityChart=withTheme()(({
    impliedVolatility, theme, 
    loadingIV
})=>(
    impliedVolatility.length>0?

    <VictoryChart containerComponent={<VictoryContainer style={containerStyle}/>} animate={animateStyle}>
        <VictoryLabel 
            {...titleStyle}
            text="Implied Volatility"
        />
        <VictoryLine 
            style={{data:{stroke:theme.palette.primary.main}}}
            data={impliedVolatility}
            x='at_point'
            interpolation="natural"
            y='iv'
        />
    </VictoryChart>
    :<div style={outerStyleStandalone}>
        <ProgressBar 
            style={progressStyle} 
            size={PROGRESS_SIZE}
            loading={loadingIV}
        />
    </div>
    
))

ImpliedVolatilityChart.propTypes={
    impliedVolatility:PropTypes.arrayOf(PropTypes.shape({
        at_point:PropTypes.number.isRequired,
        iv:PropTypes.number.isRequired
    })),
    loadingIV:PropTypes.bool.isRequired,
    theme:PropTypes.shape({
        palette:PropTypes.shape({
            primary:PropTypes.shape({
                main:PropTypes.string.isRequired
            }).isRequired,
            secondary:PropTypes.shape({
                main:PropTypes.string.isRequired
            }).isRequired,
        }).isRequired
    })
}

const mapStateToProps=({pricerValues, loading})=>({
    impliedVolatility:pricerValues.impliedVolatility,
    loadingIV:loading.putCallIVChart
})

export default connect(
    mapStateToProps
)(ImpliedVolatilityChart)



