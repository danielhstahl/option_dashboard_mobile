import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {sensitivities} from 'Components/ChartsScreen'
import {Route, Redirect, Switch} from 'react-router-dom'
import SetupScreen from 'Components/SetupScreen'
import IntroScreen from 'Components/IntroScreen'
import ChartsScreen from 'Components/ChartsScreen'
import CalibrationScreen from 'Components/CalibrationScreen'
const getBaseUrl=match=>match.path.split(":")[0]
const handleChange=(match, history)=>(_, value)=>history.push(getBaseUrl(match)+(value+1))
const AppBarInst=({match, history})=>(
  <AppBar position='sticky'>
    <Tabs 
      value={parseInt(match.params.tabId, 10)-1} 
      onChange={handleChange(match, history)} 
      fullWidth
    >
      <Tab label="Market Options" />
      <Tab label="Calibration" />
      <Tab label="Charts and Graphs" />
    </Tabs>
  </AppBar>
)




const App=()=>[
  <Switch key='redirect'>
    <Redirect key='redirectBegin' from='/' to='/tab/1' exact/>
    <Redirect key='redirectTab' from='/tab/3' to={`/tab/3/${sensitivities[0].value}`} exact/>
  </Switch>,
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
  />,
  <Route 
    key='charts'
    path='/tab/3/:sensitivity' 
    component={ChartsScreen} 
    exact
  />
]
export default App
