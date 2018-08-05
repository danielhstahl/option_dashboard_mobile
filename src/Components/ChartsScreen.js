import React from 'react'
import {getPricesAndIV, getDensity} from 'Actions/pricer'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {connect} from 'react-redux'
import PutCallChart from './PutCallChart'
import DensityChart from './DensityChart'
import ImpliedVolatilityChart from './ImpliedVolatilityChart'
import LoadData from './LoadData'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
/** const parameters={
        num_u:8,
        rate,
        maturity,
        asset,
        sigma, 
        lambda:0,
        mu_l:0,
        sig_l:0,
        speed,
        v0:v0Hat,
        eta_v,
        rho,
        strikes:[100],
        quantile:0.01
    } */
const getBaseUrl=match=>match.path.split(":")[0] //this also exists in app.js
export const sensitivities=[
    {value:'price', label:'Price'},
    {value:'delta', label:'Delta'},
    {value:'gamma', label:'Gamma'},
    {value:'theta', label:'Theta'}
]
const handleChange=(match, history)=>(_, value)=>history.push(getBaseUrl(match)+sensitivities[value].value)
const SensitivityNav=({match, history})=>(
    <Tabs 
    value={sensitivities
        .findIndex(v=>v.value===match.params.sensitivity)
    } 
    onChange={handleChange(match, history)} 
    fullWidth
    >
    {sensitivities.map(({value, label})=>{
    return <Tab label={label} key={value}/>
    })}
    </Tabs>
)

const ChartsScreen=({onLoad, attributes, match, history})=>(
    <LoadData 
        onLoad={onLoad} 
        attributes={attributes} 
        sensitivity={match.params.sensitivity}
    >
        <Grid fluid>
            <Row>
                <Col xsOffset={1} smOffset={2} xs={10} sm={8}>
                    <PutCallChart 
                        sensitivity={match.params.sensitivity}
                    />
                </Col>
            </Row>
            <Row>
                <Col xsOffset={1} smOffset={2} xs={10} sm={8}>
                    <SensitivityNav match={match} history={history}/>
                </Col>
            </Row>
            <Row>
                <Col xsOffset={1} smOffset={2} xs={10} sm={8}>
                   <ImpliedVolatilityChart/>
                </Col>
            </Row>
            <Row>
                <Col xsOffset={1} smOffset={2} xs={10} sm={8}>
                   <DensityChart/>
                </Col>
            </Row>
            
        </Grid>
    </LoadData>
)

const mapStateToProps=({calibratorValues})=>({
    attributes:{
        ...calibratorValues.attributes, ...calibratorValues.calibrated
    }
})

const onLoad=dispatch=>{
    const getPut=getPricesAndIV(dispatch, 'put')
    const getCall=getPricesAndIV(dispatch, 'call')
    const getD=getDensity(dispatch)
    return ({attributes, sensitivity})=>{
        const objToSend={...attributes, sensitivity}
        getPut(objToSend)
        getCall(objToSend)
        getD(attributes)
    }
}

const mapDispatchToProps=dispatch=>({
    onLoad:onLoad(dispatch)
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChartsScreen)