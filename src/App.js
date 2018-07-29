import React from 'react'
import SetupOptions from 'Components/SetupOptions'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'

import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import appBarTheme from 'Themes/appBar'
import bodyTheme from 'Themes/body'
import {Route} from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import SetupScreen from 'Components/SetupScreen'
import IntroScreen from 'Components/IntroScreen'
const AppBarInst=()=>(
  <AppBar position='sticky'>
    <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" >
            Option Calibration
          </Typography>
        </Toolbar>
  </AppBar>
)
const baseUrl='/setup'


const App=()=>[
  <AppBarInst key='appbar'/>,
  <Route 
      path='/ticker'
      key='setup'
      exact
      component={SetupScreen}
  />,
  <Route path='/' component={IntroScreen} key='home' exact/>
]

export default App
