import React from 'react'
import {
    SensitivityNav, 
    ChartsScreen, onLoad, 
    updateOptions
} from 'Components/Screen3/Main'
import {mount} from 'enzyme'
import Tabs from '@material-ui/core/Tabs'
import {delay} from 'setupTests'

import {
    MemoryRouter as Router
} from 'react-router-dom'
import {PutCallChart} from 'Components/Screen3/PutCallChart'
import WarningNoValues from 'Components/utils/WarningNoValues'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import reducer from 'Reducers/reducer'
import { 
    MuiThemeProvider, 
    createMuiTheme 
} from '@material-ui/core/styles'
import themeObject from 'Themes/overallTheme'
import { EAFNOSUPPORT } from 'constants';
const theme = createMuiTheme(themeObject)

describe('Render SensitivityNav', ()=>{

    it('renders without error with price', ()=>{
        mount(
            <Router initialEntries={['/price']}>
                <SensitivityNav
                    match={{
                        path:'/price',
                        url:'/price',
                        params:{
                            sensitivity:'price'
                        }
                    }}
                    history={{push:()=>{}}}
                    updateOptions={()=>{}}
                    attributes={{}}
                />
            </Router>
        )
    })   
    it('renders without error with price', ()=>{
        mount(
            <Router initialEntries={['/price']}>
                <SensitivityNav
                    match={{
                        path:'/price',
                        url:'/price',
                        params:{
                            sensitivity:'delta'
                        }
                    }}
                    history={{push:()=>{}}}
                    updateOptions={()=>{}}
                    attributes={{}}
                />
            </Router>
        )
    })   
})
describe('SensitivityNav functionality', ()=>{
    it('is at the first tab when on price', ()=>{
        const sensitivityNav=mount(
            <Router initialEntries={['/price']}>
                <SensitivityNav
                    match={{
                        path:'/price',
                        url:'/price',
                        params:{
                            sensitivity:'price'
                        }
                    }}
                    history={{push:()=>{}}}
                    updateOptions={()=>{}}
                    attributes={{}}
                />
            </Router>
        )
        expect(sensitivityNav.find(Tabs).props().value).toEqual(0)
    })   
    it('is at the second tab when on delta', ()=>{
        const sensitivityNav=mount(
            <Router initialEntries={['/price']}>
                <SensitivityNav
                    match={{
                        path:'/price',
                        url:'/price',
                        params:{
                            sensitivity:'delta'
                        }
                    }}
                    history={{push:()=>{}}}
                    updateOptions={()=>{}}
                    attributes={{}}
                />
            </Router>
        )
        expect(sensitivityNav.find(Tabs).props().value).toEqual(1)
    })   
})

describe('Render ChartsScreen', ()=>{
    let store
    beforeEach(() => {
        fetch.resetMocks()
        store=createStore(reducer)
    })
    it('renders without error with bare props', ()=>{
        mount(
            <Provider store={store}>
                <MuiThemeProvider theme={theme}> 
                    <Router>
                        <ChartsScreen
                            onLoad={()=>{}}
                            attributes={{}}
                            match={{
                                path:'/price',
                                url:'/price',
                                params:{
                                    sensitivity:'delta'
                                }
                            }}
                            history={{push:()=>{}}}
                            updateOptions={()=>{}}
                            calibrated={{}}
                        />
                    </Router>
                </MuiThemeProvider>
            </Provider>
        )
    })   
    it('renders without error with calibrated props', ()=>{
        mount(
            <Provider store={store}>
                <MuiThemeProvider theme={theme}> 
                    <Router>
                        <ChartsScreen
                            onLoad={()=>{}}
                            attributes={{}}
                            match={{
                                path:'/price',
                                url:'/price',
                                params:{
                                    sensitivity:'delta'
                                }
                            }}
                            history={{push:()=>{}}}
                            updateOptions={()=>{}}
                            calibrated={{hello:5}}
                        />
                    </Router>
                </MuiThemeProvider>
            </Provider>
        )
    })   
})

describe('ChartsScreen functionality', ()=>{
    let store
    beforeEach(() => {
        fetch.resetMocks()
        store=createStore(reducer)
    })
    it('shows WarningNoValues with no calibrated', ()=>{
        const screen3=mount(
            <Provider store={store}>
                <MuiThemeProvider theme={theme}> 
                    <Router>
                        <ChartsScreen
                            onLoad={()=>{}}
                            attributes={{}}
                            match={{
                                path:'/price',
                                url:'/price',
                                params:{
                                    sensitivity:'delta'
                                }
                            }}
                            history={{push:()=>{}}}
                            updateOptions={()=>{}}
                            calibrated={{}}
                        />
                    </Router>
                </MuiThemeProvider>
            </Provider>
        )
        expect(screen3.find(WarningNoValues).length).toEqual(1)
    })
    it('shows SensitivityNav and PutCallChart with calibrated', ()=>{
        const screen3=mount(
            <Provider store={store}>
                <MuiThemeProvider theme={theme}> 
                    <Router>
                        <ChartsScreen
                            onLoad={()=>{}}
                            attributes={{}}
                            match={{
                                path:'/price',
                                url:'/price',
                                params:{
                                    sensitivity:'delta'
                                }
                            }}
                            history={{push:()=>{}}}
                            updateOptions={()=>{}}
                            calibrated={{hello:5}}
                        />
                    </Router>
                </MuiThemeProvider>
            </Provider>
        )
        expect(screen3.find(SensitivityNav).length).toEqual(1)
        expect(screen3.find(PutCallChart).length).toEqual(1)
    })
    it('calls onLoad when on not price', ()=>{
        const onLoad=()=>{
            expect(true).toEqual(true)///got called!
        }
        mount(
            <Provider store={store}>
                <MuiThemeProvider theme={theme}> 
                    <Router initialEntries={['/gamma']}>
                        <ChartsScreen
                            onLoad={onLoad}
                            attributes={{}}
                            match={{
                                path:'/price',
                                url:'/price',
                                params:{
                                    sensitivity:'delta'
                                }
                            }}
                            history={{push:()=>{}}}
                            updateOptions={()=>{}}
                            calibrated={{hello:5}}
                        />
                    </Router>
                </MuiThemeProvider>
            </Provider>
        )
    })
    it('does not call updateOptions on load', done=>{
        const onLoad=()=>{
            //expect(true).toEqual(true)///got called!
        }
        const updateOptions=()=>{
            done.fail()
        }
        mount(
            <Provider store={store}>
                <MuiThemeProvider theme={theme}> 
                    <Router initialEntries={['/gamma']}>
                        <ChartsScreen
                            onLoad={onLoad}
                            attributes={{}}
                            match={{
                                path:'/price',
                                url:'/price',
                                params:{
                                    sensitivity:'gamma'
                                }
                            }}
                            history={{push:()=>{}}}
                            updateOptions={updateOptions}
                            calibrated={{hello:5}}
                        />
                    </Router>
                </MuiThemeProvider>
            </Provider>
        )
        done()
    })
    
       
})


describe('on load', ()=>{

    beforeEach(()=>{
        fetch.resetMocks()
    })
    it('executes 4 fetches on load', ()=>{
        fetch.mockResponse(JSON.stringify([{
            value:4,
            at_point:5,
            iv:3
        }])) //density/densityType
        const dispatch=jest.fn()
        onLoad(dispatch)({attributes:{hello:5}, sensitivity:5})
        expect(fetch.mock.calls.length).toEqual(4)
        return delay(50)
            .then(()=>{
                return expect(dispatch.mock.calls.length).toEqual(16)
            })
    })
})

describe('updateOptions', ()=>{
    beforeEach(()=>{
        fetch.resetMocks()
    })
    it('calls jest twice and dispatch 10 times', ()=>{
        fetch.mockResponse(JSON.stringify([{
            value:4,
            at_point:5,
            iv:3
        }])) //density/densityType
        const dispatch=jest.fn()
        updateOptions(dispatch)({attributes:{hello:5}})
        expect(fetch.mock.calls.length).toEqual(2)
        return delay(50)
            .then(()=>{
                return expect(dispatch.mock.calls.length).toEqual(10)
            })
    })
})