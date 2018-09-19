import React from 'react'
import App from 'App'
import { shallow, mount } from 'enzyme'
import { MemoryRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Tabs from '@material-ui/core/Tabs'
import Select from '@material-ui/core/Select'

import reducer from 'Reducers'
import { delay } from 'setupTests'
import Screen1 from 'Components/Screen1'
import Screen2 from 'Components/Screen2'
import Screen3 from 'Components/Screen3'
import WarningNoValues from 'Components/utils/WarningNoValues'
import { SelectTicker } from 'Components/Screen1/SelectTicker'
import { SelectMaturity } from 'Components/Screen1/SelectMaturity'

describe('render', () => {
  let store
  beforeEach(() => {
    fetch.resetMocks()
    store = createStore(reducer)
  })
  it('renders shallow without crashing', () => {
    shallow(
      <Router>
        <App />
      </Router>
    )
  })
  it('renders without crashing on default store', () => {
    fetch.once(JSON.stringify([])) //getTickers
    fetch.once(JSON.stringify({ hello: 'world' })) //getCalibrationBounds
    mount(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
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
  it('defaults to first tab on load', () => {
    fetch.once(JSON.stringify([])) //getTickers
    fetch.once(JSON.stringify({ hello: 'world' })) //getCalibrationBounds
    const app = mount(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
    return delay(50)
      .then(() => {
        return expect(app.find(Screen1).length).toEqual(1)
      })
      .then(() => {
        return expect(app.find(Screen2).length).toEqual(0)
      })
      .then(() => {
        return expect(app.find(Screen3).length).toEqual(0)
      })
  })
  it('shows warning when loading into second screen', () => {
    fetch.once(JSON.stringify([])) //getTickers
    fetch.once(JSON.stringify({ hello: 'world' })) //getCalibrationBounds
    const app = mount(
      <Provider store={store}>
        <Router initialEntries={['/tab/2']}>
          <App />
        </Router>
      </Provider>
    )
    return delay(50)
      .then(() => {
        return expect(app.find(Screen1).length).toEqual(0)
      })
      .then(() => {
        return expect(app.find(Screen2).length).toEqual(1)
      })
      .then(() => {
        return expect(app.find(Screen3).length).toEqual(0)
      })
      .then(() => {
        return expect(app.find(WarningNoValues).length).toEqual(1)
      })
  })
  it('shows warning when loading into third screen', () => {
    fetch.once(JSON.stringify([])) //getTickers
    fetch.once(JSON.stringify({ hello: 'world' })) //getCalibrationBounds
    const app = mount(
      <Provider store={store}>
        <Router initialEntries={['/tab/3']}>
          <App />
        </Router>
      </Provider>
    )
    return delay(50)
      .then(() => {
        return expect(app.find(Screen1).length).toEqual(0)
      })
      .then(() => {
        return expect(app.find(Screen2).length).toEqual(0)
      })
      .then(() => {
        return expect(app.find(Screen3).length).toEqual(1)
      })
      .then(() => {
        return expect(app.find(WarningNoValues).length).toEqual(1)
      })
  })
  it('switches tabs when tab is clicked', () => {
    fetch.once(JSON.stringify([])) //getTickers
    fetch.once(
      JSON.stringify({
        hello: 'world'
      })
    ) //getCalibrationBounds
    const app = mount(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
    app
      .find(Tabs)
      .props()
      .onChange(null, 1)
    return delay(50)
      .then(() => {
        app.update()
        return expect(app.find(Tabs).props().value).toEqual(1)
      })
      .then(() => {
        return expect(app.find(WarningNoValues).length).toEqual(1)
      })
  })
  it('calls getTicker correctly', () => {
    fetch.once(JSON.stringify([])) //getTickers
    fetch.once(JSON.stringify({ hello: 'world' })) //getCalibrationBounds
    fetch.once(JSON.stringify({ expirationDates: [3, 4, 5] })) //getCalibrationBounds
    const app = mount(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
    return delay(30)
      .then(() => {
        app
          .find(SelectTicker)
          .props()
          .onChange({
            target: {
              value: 'hello'
            }
          })
      })
      .then(() => {
        return delay(30)
      })
      .then(() => {
        return expect(store.getState().inputs.ticker).toEqual('hello')
      })
      .then(() => {
        return expect(store.getState().marketValues.maturities).toEqual([
          3,
          4,
          5
        ])
      })
  })
  it('calls getTicker and then getMaturity', () => {
    fetch.once(JSON.stringify([])) //getTickers
    fetch.once(
      JSON.stringify({
        hello: 'world'
      })
    ) //getCalibrationBounds
    fetch.once(
      JSON.stringify({
        expirationDates: [3, 4, 5]
      })
    ) //getOptionFeatures
    fetch.once(
      JSON.stringify({
        curve: [{ log_strike: 5, transformed_option: 3 }],
        points: [{ log_strike: 5, transformed_option: 3 }],
        hello: 5,
        world: 6
      })
    ) //getSpline
    const app = mount(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
    return delay(30)
      .then(() => {
        app
          .find(SelectTicker)
          .props()
          .onChange({
            target: {
              value: 'hello'
            }
          })
      })
      .then(() => {
        return delay(30)
      })
      .then(() => {
        return expect(store.getState().inputs.ticker).toEqual('hello')
      })
      .then(() => {
        return expect(store.getState().marketValues.maturities).toEqual([
          3,
          4,
          5
        ])
      })
      .then(() => {
        app.update()
        return expect(
          app.find(SelectMaturity).find(Select).length
        ).toBeGreaterThan(0)
      })
      .then(() => {
        app
          .find(SelectMaturity)
          .find(Select)
          .props()
          .onChange({
            target: {
              value: '4'
            }
          })
      })
      .then(() => {
        return delay(30)
      })
      .then(() => {
        return expect(store.getState().inputs.maturity).toEqual('4')
      })
      .then(() => {
        return expect(store.getState().calibratorValues.spline.curve).toEqual([
          {
            log_strike: 5,
            transformed_option: 3
          }
        ])
      })
      .then(() => {
        return expect(store.getState().calibratorValues.spline.points).toEqual([
          {
            log_strike: 5,
            transformed_option: 3
          }
        ])
      })
      .then(() => {
        const { hello, world } = store.getState().calibratorValues.attributes
        return expect({ hello, world }).toEqual({ hello: 5, world: 6 })
      })
  })
})
