import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import appBarTheme from 'Themes/appBar'
import bodyTheme from 'Themes/body'
import {Route} from 'react-router-dom'
import { withStyles } from '@material-ui/core'
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
const baseUrl='/setup'


const App=()=>[
  <Route 
      path='/tab/:tabId'
      key='home'
      render={props=><AppBarInst key='appbar' {...props}/>}
  />,
  <Route 
      path='/tab/1'
      key='setup'
      exact
      component={SetupScreen}
  />,
  <Route 
    path='/tab/2' 
    component={CalibrationScreen} 
    key='calibration' 
    exact
  />
]

export default App
