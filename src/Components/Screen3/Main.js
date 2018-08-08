import React from 'react'
import {getCall, getPut, getDensity, getRiskMetrics} from 'Actions/pricer'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {connect} from 'react-redux'
import PutCallChart from './PutCallChart'
import DensityChart from './DensityChart'
import ImpliedVolatilityChart from './ImpliedVolatilityChart'
import LoadData from '../utils/LoadData'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import WarningNoValues from '../utils/WarningNoValues'
import { isEmpty } from 'globals/utils'

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
        {sensitivities.map(({value, label})=><Tab label={label} key={value}/>)}
    </Tabs>
)

const ChartsScreen=({onLoad, attributes, match, history, updateOptions, calibrated})=>isEmpty(calibrated)?(
<Grid fluid>
    <Row>
        <Col xs={12}>
        <WarningNoValues links={[{to:'/tab/1', label:'Market Prices'}, {to:'/tab/2', label:'Calibration'}]}/>
        </Col>
    </Row>
</Grid>
):(
    <LoadData 
        onLoad={onLoad} 
        attributes={attributes} 
        sensitivity={match.params.sensitivity}
    >
        <Grid fluid>
            <Row>
                <Col xs={12}>
                    <PutCallChart sensitivity={match.params.sensitivity}/>
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
)
const mapStateToProps=({calibratorValues})=>({
    attributes:{
        ...calibratorValues.attributes, ...calibratorValues.calibrated
    },
    calibrated:calibratorValues.calibrated
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