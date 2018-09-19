import React from 'react'
import { ImpliedVolatilityChart } from 'Components/Screen3/ImpliedVolatilityChart'

import { shallow, mount } from 'enzyme'
import { VictoryChart } from 'victory'
import ProgressBar from 'Components/utils/ProgressBar'
import CircularProgress from '@material-ui/core/CircularProgress'

const fakeTheme = {
  palette: {
    primary: {
      main: 'hello'
    },
    secondary: {
      main: 'world'
    }
  }
}
describe('Render', () => {
  it('renders without error with empty density and loading', () => {
    shallow(
      <ImpliedVolatilityChart
        impliedVolatility={[]}
        theme={fakeTheme}
        loadingIV={true}
      />
    )
  })
  it('renders without error with empty density and not loading', () => {
    shallow(
      <ImpliedVolatilityChart
        impliedVolatility={[]}
        theme={fakeTheme}
        loadingIV={false}
      />
    )
  })
  it('renders without error with density and loading', () => {
    shallow(
      <ImpliedVolatilityChart
        impliedVolatility={[{ at_point: 5, iv: 5 }]}
        theme={fakeTheme}
        loadingIV={true}
      />
    )
  })
  it('renders without error with density and not loading', () => {
    shallow(
      <ImpliedVolatilityChart
        impliedVolatility={[{ at_point: 5, iv: 5 }]}
        theme={fakeTheme}
        loadingIV={false}
      />
    )
  })
})
describe('functionality', () => {
  it('has chart if density exists', () => {
    const impliedVolatilityChart = mount(
      <ImpliedVolatilityChart
        impliedVolatility={[{ at_point: 5, iv: 5 }]}
        theme={fakeTheme}
        loadingIV={true}
      />
    )
    expect(impliedVolatilityChart.find(VictoryChart).length).toEqual(1)
  })
  it('has progress bar if density does not exist', () => {
    const impliedVolatilityChart = mount(
      <ImpliedVolatilityChart
        impliedVolatility={[]}
        theme={fakeTheme}
        loadingIV={false}
      />
    )
    expect(impliedVolatilityChart.find(ProgressBar).length).toEqual(1)
  })
  it('is progressing if density does not exist and loading', () => {
    const impliedVolatilityChart = mount(
      <ImpliedVolatilityChart
        impliedVolatility={[]}
        theme={fakeTheme}
        loadingIV={true}
      />
    )
    expect(impliedVolatilityChart.find(CircularProgress).length).toEqual(1)
  })
})
