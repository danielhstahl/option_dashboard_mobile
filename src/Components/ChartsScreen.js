import React from 'react'
import {getCall, getPut, getDensity, getRiskMetrics} from 'Actions/pricer'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {connect} from 'react-redux'
import PutCallChart from './PutCallChart'
import DensityChart from './DensityChart'
import ImpliedVolatilityChart from './ImpliedVolatilityChart'
import LoadData from './LoadData'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import WarningNoValues from './WarningNoValues'
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
const handleChange=(match, history, updateOptions, attributes)=>
    (_, value)=>{
        const {value:sensitivity}=sensitivities[value]
        updateOptions({...attributes, sensitivity})
        history.push(getBaseUrl(match)+sensitivity)
    }
    
const SensitivityNav=({match, history, updateOptions, attributes})=>(
    <Tabs 
    value={sensitivities
        .findIndex(v=>v.value===match.params.sensitivity)
    } 
    onChange={handleChange(match, history, updateOptions, attributes)} 
    fullWidth
    >
    {sensitivities.map(({value, label})=>{
    return <Tab label={label} key={value}/>
    })}
    </Tabs>
)
const checkRequiredFields=({maturity, asset, strikes, prices})=>strikes&&maturity&&asset&&prices
const ChartsScreen=({onLoad, attributes, match, history, updateOptions})=>checkRequiredFields(attributes)?(
    <LoadData 
        onLoad={onLoad} 
        attributes={attributes} 
        sensitivity={match.params.sensitivity}
    >
        <Grid fluid>
            <Row>
                <Col xs={12}>
                    <PutCallChart />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <SensitivityNav match={match} history={history} attributes={attributes} updateOptions={updateOptions}/>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                   <ImpliedVolatilityChart/>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                   <DensityChart/>
                </Col>
            </Row>
            
        </Grid>
    </LoadData>
):(<Grid fluid>
    <Row>
        <Col xs={12}>
        <WarningNoValues/>
        </Col>
    </Row>
</Grid>)
const mapStateToProps=({calibratorValues})=>({
    attributes:{
        ...calibratorValues.attributes, ...calibratorValues.calibrated
    }
})

const onLoad=dispatch=>{
    const getP=getPut(dispatch)
    const getC=getCall(dispatch)
    const getD=getDensity(dispatch)
    const getR=getRiskMetrics(dispatch)
    return ({attributes, sensitivity})=>{
        const objToSend={...attributes, sensitivity}
        getP(objToSend)
        getC(objToSend)
        getD(attributes)
        getR(attributes)
    }
}
const updateOptions=dispatch=>{
    const getP=getPut(dispatch)
    const getC=getCall(dispatch)
    return attributes=>{
        console.log(attributes)
        getP(attributes)
        getC(attributes)
    }
}

const mapDispatchToProps=dispatch=>({
    onLoad:onLoad(dispatch),
    updateOptions:updateOptions(dispatch)
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChartsScreen)