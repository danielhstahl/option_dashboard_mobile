import React from 'react'
import Screen1 from 'Components/Screen1/Main'
import {mount} from 'enzyme'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import ProgressBar from 'Components/utils/ProgressBar'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import reducer from 'Reducers/reducer'
import {
    MemoryRouter as Router
} from 'react-router-dom'
import {
    TICKER_VALUE, 
    MATURITY_VALUE,
    LOADING_TICKER,
    LOADING_MATURITY,
    OPTION_MATURITIES
} from 'Actions/constants'
import {delay} from 'setupTests'

describe('Render', ()=>{
    let store
    beforeEach(() => {
        fetch.resetMocks()
        store=createStore(reducer)
    })
    it('renders without error with default store', ()=>{
        fetch.once(JSON.stringify([])) //getTickers
        fetch.once(JSON.stringify({hello:'world'})) //getCalibrationBounds
        
        mount(
            <Provider store={store}>
                <Router>
                    <Screen1/>
                </Router>
            </Provider>
        )
    })   
    it('renders without error with ticker dispatch', ()=>{
        fetch.once(JSON.stringify([])) //getTickers
        fetch.once(JSON.stringify({hello:'world'})) //getCalibrationBounds
        store.dispatch({
            type:TICKER_VALUE,
            ticker:'hello'
        })
        mount(
            <Provider store={store}>
                <Router>
                    <Screen1/>
                </Router>
            </Provider>
        )
    })   
    it('renders without error with maturity dispatch', ()=>{
        fetch.once(JSON.stringify([])) //getTickers
        fetch.once(JSON.stringify({hello:'world'})) //getCalibrationBounds
        store.dispatch({
            type:MATURITY_VALUE,
            maturity:'5'
        })
        mount(
            <Provider store={store}>
                <Router>
                    <Screen1/>
                </Router>
            </Provider>
        )
    })   
    it('renders without error with loading ticker dispatch', ()=>{
        fetch.once(JSON.stringify([])) //getTickers
        fetch.once(JSON.stringify({hello:'world'})) //getCalibrationBounds
        store.dispatch({
            type:LOADING_TICKER,
            value:true
        })
        mount(
            <Provider store={store}>
                <Router>
                    <Screen1/>
                </Router>
            </Provider>
        )
    })   
    it('renders without error with loading maturity dispatch', ()=>{
        fetch.once(JSON.stringify([])) //getTickers
        fetch.once(JSON.stringify({hello:'world'})) //getCalibrationBounds
        store.dispatch({
            type:LOADING_MATURITY,
            value:true
        })
        mount(
            <Provider store={store}>
                <Router>
                    <Screen1/>
                </Router>
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
    it('shows only ticker input with default reducer', ()=>{
        fetch.once(JSON.stringify([])) //getTickers
        fetch.once(JSON.stringify({hello:'world'})) //getCalibrationBounds
        const screen1=mount(
            <Provider store={store}>
                <Router>
                    <Screen1/>
                </Router>
            </Provider>
        )
        //this should be syncronous but apparently not
        return delay(50)
            .then(()=>{
                screen1.update()
                return expect(screen1.find(Select).length).toEqual(1)
            })
            .then((()=>{
                return expect(screen1.find(ProgressBar).length).toEqual(1)
            }))        
    })
    it('shows maturity when options are provided', ()=>{
        fetch.once(JSON.stringify([])) //getTickers
        fetch.once(JSON.stringify({hello:'world'})) //getCalibrationBounds
        store.dispatch({
            type:OPTION_MATURITIES,
            maturities:[5, 6, 7]
        })
        const screen1=mount(
            <Provider store={store}>
                <Router>
                    <Screen1/>
                </Router>
            </Provider>
        )
        return delay(50)
            .then(()=>{
                screen1.update()
                return expect(screen1.find(Select).length).toEqual(2)
            })
        
    })
    it('shows button and maturity when options are provided and maturity is selected', ()=>{
        fetch.once(JSON.stringify([])) //getTickers
        fetch.once(JSON.stringify({hello:'world'})) //getCalibrationBounds
        store.dispatch({
            type:OPTION_MATURITIES,
            maturities:[5, 6, 7]
        })
        store.dispatch({
            type:MATURITY_VALUE,
            maturity:'5'
        })
        const screen1=mount(
            <Provider store={store}>
                <Router>
                    <Screen1/>
                </Router>
            </Provider>
        )
        return delay(50)
            .then(()=>{
                screen1.update()
                return expect(screen1.find(Select).length).toEqual(2)
            })
            .then((()=>{
                return expect(screen1.find(Button).length).toEqual(1)
            }))
    })
   
})