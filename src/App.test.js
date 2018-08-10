import React from 'react'
import App from './App'
import {shallow} from 'enzyme'
import {MemoryRouter} from 'react-router-dom'
it('renders without crashing', () => {
  shallow(<MemoryRouter><App /></MemoryRouter>)
})
