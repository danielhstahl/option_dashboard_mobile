import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import 'typeface-roboto'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from 'Reducers'
import { HashRouter as Router } from 'react-router-dom'
import defaultTheme from 'Themes'

const store = createStore(reducer)

const theme = createMuiTheme(defaultTheme)
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
