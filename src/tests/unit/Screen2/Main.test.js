import React from 'react'
import Screen2 from 'Components/Screen2'
import Button from '@material-ui/core/Button'
import { mount } from 'enzyme'
import Table from '@material-ui/core/Table'

import { MemoryRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from 'Reducers'
import {
  CALIBRATED_PARAMETERS,
  MARKET_VALUES,
  CONSTRAINTS
} from 'Actions/constants'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import themeObject from 'Themes'
const theme = createMuiTheme(themeObject)

describe('Render', () => {
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = createStore(reducer)
  })
  it('renders without error with default store', () => {
    mount(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Screen2 />
          </Router>
        </MuiThemeProvider>
      </Provider>
    )
  })
  it('renders without error after calibration', () => {
    store.dispatch({
      type: CALIBRATED_PARAMETERS,
      parameters: {
        hello: 5,
        world: 6,
        mse: 0.005
      }
    })
    mount(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Screen2 />
          </Router>
        </MuiThemeProvider>
      </Provider>
    )
  })
})

describe('functionality', () => {
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = createStore(reducer)
  })
  it('shows no tables with default store', () => {
    const screen2 = mount(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Screen2 />
          </Router>
        </MuiThemeProvider>
      </Provider>
    )
    expect(screen2.find(Table).length).toEqual(0)
  })
  it('shows first table with attributes dispatched', () => {
    store.dispatch({
      type: MARKET_VALUES,
      attributes: {
        rate: 0.01,
        asset: 50,
        maturity: 1
      }
    })
    const screen2 = mount(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Screen2 />
          </Router>
        </MuiThemeProvider>
      </Provider>
    )
    expect(screen2.find(Table).length).toEqual(1)
  })
  it('shows calibrate and button after Calibrated parameters', () => {
    store.dispatch({
      type: MARKET_VALUES,
      attributes: {
        rate: 0.01,
        asset: 50,
        maturity: 1
      }
    })
    store.dispatch({
      type: CONSTRAINTS,
      constraints: {
        lambda: 5,
        mu_l: 5,
        sig_l: 5,
        sigma: 5,
        v0: 5,
        speed: 5,
        eta_v: 5,
        rho: 5
      }
    })
    store.dispatch({
      type: CALIBRATED_PARAMETERS,
      parameters: {
        hello: 5,
        world: 6,
        mse: 0.005
      }
    })
    const screen2 = mount(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Screen2 />
          </Router>
        </MuiThemeProvider>
      </Provider>
    )
    expect(screen2.find(Table).length).toEqual(2)
    expect(screen2.find(Button).length).toEqual(2)
  })
})
