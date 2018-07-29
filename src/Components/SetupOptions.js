import React from 'react'
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views'
import SelectTicker from './SelectTicker'
import SelectMaturity from './SelectMaturity'
import { connect } from 'react-redux'
import setupOptionsTheme from 'Themes/setupOptions'
import { withStyles } from '@material-ui/core';
const setupSteps=[{
    label:'Select Stock Ticker',
    canGoNext:inputs=>inputs.ticker
},{
    label:'Select Option Maturity',
    canGoNext:inputs=>inputs.maturity
},{
    label:'Select Filters for Removing Options at Illiquid Strikes',
    canGoNext:inputs=>true
}]
const SetupOptions=withStyles(setupOptionsTheme)(({
    match, history, baseUrl, inputs, classes
})=>{
    const step=parseInt(match.params.step, 10)
    const maxSteps=setupSteps.length
    const changeStep=newStep=>history.push(baseUrl+'/'+newStep)
    const handleNext=()=>changeStep(step+1)
    const handleBack=()=>changeStep(step-1)
    return [
        <Paper 
            key='description' square 
            elevation={0} className={classes.header}
        >
          <Typography>{setupSteps[step].label}</Typography>
        </Paper>,
        <SwipeableViews
            key='viewsteps'
            index={step}
            onChangeIndex={changeStep}
            enableMouseEvents
        >
            <SelectTicker className={classes.body}/>
            <SelectMaturity className={classes.body}/>
        </SwipeableViews>,
        <MobileStepper
            key='stepper'
            steps={maxSteps}
            position="static"
            activeStep={step}
            className={classes.mobileStepper}
            nextButton={
                <Button size="small" onClick={handleNext} disabled={step === maxSteps - 1 || !setupSteps[step].canGoNext(inputs)}>
                Next
                <KeyboardArrowRight />
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={step === 0}>
                    <KeyboardArrowLeft />
                Back
                </Button>
            }
        />
    ]
})
const mapStateToProps=({inputs})=>({inputs})
export default connect(mapStateToProps)(SetupOptions)