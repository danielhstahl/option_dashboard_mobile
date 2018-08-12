import React from 'react'
import App from 'App'
import {shallow, mount} from 'enzyme'
import {MemoryRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import reducer from 'Reducers/reducer'
import {delay} from 'setupTests'
import Screen1 from 'Components/Screen1/Main'
import Screen2 from 'Components/Screen2/Main'
import Screen3 from 'Components/Screen3/Main'
import WarningNoValues from 'Components/utils/WarningNoValues'

describe('render', ()=>{
  let store
  beforeEach(() => {
      fetch.resetMocks()
      store=createStore(reducer)
  })
  it('renders shallow without crashing', () => {
    shallow(<Router><App /></Router>)
  })
  it('renders without crashing on default store', ()=>{
    fetch.once(JSON.stringify([])) //getTickers
    fetch.once(JSON.stringify({hello:'world'})) //getCalibrationBounds
    mount(
      <Provider store={store}>
        <Router>
          <App/>
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
  it('defaults to first tab on load', ()=>{
    fetch.once(JSON.stringify([])) //getTickers
    fetch.once(JSON.stringify({hello:'world'})) //getCalibrationBounds
    const app=mount(
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    )
    return delay(50)
      .then(()=>{
        return expect(app.find(Screen1).length).toEqual(1)
      })
      .then(()=>{
        return expect(app.find(Screen2).length).toEqual(0)
      })
      .then(()=>{
        return expect(app.find(Screen3).length).toEqual(0)
      })
  })
  it('shows warning when loading into second screen', ()=>{
    fetch.once(JSON.stringify([])) //getTickers
    fetch.once(JSON.stringify({hello:'world'})) //getCalibrationBounds
    const app=mount(
      <Provider store={store}>
        <Router initialEntries={['/tab/2']}>
          <App/>
        </Router>
      </Provider>
    )
    return delay(50)
      .then(()=>{
        return expect(app.find(Screen1).length).toEqual(0)
      })
      .then(()=>{
        return expect(app.find(Screen2).length).toEqual(1)
      })
      .then(()=>{
        return expect(app.find(Screen3).length).toEqual(0)
      })
      .then(()=>{
        return expect(app.find(WarningNoValues).length).toEqual(1)
      })
  })
  it('shows warning when loading into third screen', ()=>{
    fetch.once(JSON.stringify([])) //getTickers
    fetch.once(JSON.stringify({hello:'world'})) //getCalibrationBounds
    const app=mount(
      <Provider store={store}>
        <Router initialEntries={['/tab/3']}>
          <App/>
        </Router>
      </Provider>
    )
    return delay(50)
      .then(()=>{
        return expect(app.find(Screen1).length).toEqual(0)
      })
      .then(()=>{
        return expect(app.find(Screen2).length).toEqual(0)
      })
      .then(()=>{
        return expect(app.find(Screen3).length).toEqual(1)
      })
      .then(()=>{
        return expect(app.find(WarningNoValues).length).toEqual(1)
      })
  })
})

