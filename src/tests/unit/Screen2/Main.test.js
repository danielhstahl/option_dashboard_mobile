import React from 'react'
import Screen2 from 'Components/Screen2/Main'
import Button from '@material-ui/core/Button'
import {shallow, mount} from 'enzyme'
import TableRow from '@material-ui/core/TableRow'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import {
    MemoryRouter as Router
} from 'react-router-dom'
import WarningNoValues from 'Components/utils/WarningNoValues'
import {ButtonToCalibrate} from 'Components/Screen2/ButtonToCalibrate'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import reducer from 'Reducers/reducer'
import {
    CALIBRATED_PARAMETERS,
    MARKET_VALUES,
    CONSTRAINTS
} from 'Actions/constants'
import { 
    MuiThemeProvider, 
    createMuiTheme 
} from '@material-ui/core/styles'
import {delay} from 'setupTests'
import themeObject from 'Themes/overallTheme'
const theme = createMuiTheme(themeObject)

describe('Render', ()=>{
    let store
    beforeEach(() => {
        fetch.resetMocks()
        store=createStore(reducer)
    })
    it('renders without error with default store', ()=>{
        mount(
            <Provider store={store}>
                <MuiThemeProvider theme={theme}> 
                    <Router>
                        <Screen2/>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        )
    })   
    it('renders without error after calibration', ()=>{
        store.dispatch({
            type:CALIBRATED_PARAMETERS,
            parameters:{
                optimal_parameters:{hello:5, world:6},
                mse:.005
            }
        })
        mount(
            <Provider store={store}>
                <MuiThemeProvider theme={theme}> 
                    <Router>
                        <Screen2/>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        )
    })   
})

describe('functionality', ()=>{
    let store
    beforeEach(() => {
        fetch.resetMocks()
        store=createStore(reducer)
    })
    it('shows no tables with default store', ()=>{
        const screen2=mount(
            <Provider store={store}>
                <MuiThemeProvider theme={theme}> 
                    <Router>
                        <Screen2/>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        )
        expect(screen2.find(Table).length).toEqual(0)
    })
    it('shows first table with attributes dispatched', ()=>{
        store.dispatch({
            type:MARKET_VALUES,
            attributes:{
                rate:.01,
                asset:50,
                maturity:1
            }
        })
        const screen2=mount(
            <Provider store={store}>
                <MuiThemeProvider theme={theme}> 
                    <Router>
                        <Screen2/>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        )
        expect(screen2.find(Table).length).toEqual(1)
    })
    it('shows button and on click creates a table', ()=>{
        store.dispatch({
            type:MARKET_VALUES,
            attributes:{
                rate:.01,
                asset:50,
                maturity:1
            }
        })
        store.dispatch({
            type:CONSTRAINTS,
            constraints:{
                lambda:5,
                mu_l:5,
                sig_l:5,
                sigma:5,
                v0:5,
                speed:5,
                eta_v:5,
                rho:5
            }
        })
        fetch.once(JSON.stringify({optimal_parameters:{hello:5, world:6}}))//calibrateModel
        const screen2=mount(
            <Provider store={store}>
                <MuiThemeProvider theme={theme}> 
                    <Router>
                        <Screen2/>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        )
        expect(screen2.find(ButtonToCalibrate).length).toEqual(1)
        screen2.find(ButtonToCalibrate).find(Button).props().onClick() //click button
        screen2.update()
        expect(screen2.find(Table).length).toEqual(2)

        /*return delay(50)
            .then(()=>{
                screen2.update()
                return expect(screen2.find(Table).length).toEqual(2)
            })    */
    })
       
})