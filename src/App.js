import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import {Route, Redirect, Switch} from 'react-router-dom'
import SetupScreen from 'Components/SetupScreen'
import IntroScreen from 'Components/IntroScreen'
import CalibrationScreen from './Components/CalibrationScreen'
const getBaseUrl=match=>match.path.split(":")[0]
const handleChange=(match, history)=>(_, value)=>history.push(getBaseUrl(match)+(value+1))
const AppBarInst=({match, history})=>{
 console.log(match)
  return (
  <AppBar position='sticky'>
    <Tabs value={parseInt(match.params.tabId, 10)-1} onChange={handleChange(match, history)}>
      <Tab label="Market Options" />
      <Tab label="Calibration" />
      <Tab label="Charts and Graphs" />
    </Tabs>
  </AppBar>
)
}

const App=()=>[
  <Redirect key='redirect' from='/' to='/tab/1' exact/>,
  <Route 
    key='bannerroute'
    path='/tab/:tabId'
    key='home'
    render={props=><AppBarInst key='appbar' {...props}/>}
  />,
  <Route 
    key='marketoptions'
    path='/tab/1'
    exact
    component={SetupScreen}
  />,
  <Route 
    key='calibration'
    path='/tab/2' 
    component={CalibrationScreen} 
    exact
  />
]
export default App
