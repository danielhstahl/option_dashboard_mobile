import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { 
    MuiThemeProvider, 
    createMuiTheme 
} from '@material-ui/core/styles'
import 'typeface-roboto'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import reducer from 'Reducers/reducer'
import {
    HashRouter as Router
} from 'react-router-dom'
import themeObject from 'Themes/overallTheme'

const store=createStore(reducer)

const theme = createMuiTheme(themeObject)
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>    
            <Router>    
                <App />
            </Router>
        </MuiThemeProvider>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
