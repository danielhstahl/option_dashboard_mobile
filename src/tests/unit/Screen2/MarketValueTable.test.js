import React from 'react'
import { MarketValueTable } from 'Components/Screen2/MarketValueTable'
import { shallow, mount } from 'enzyme'
import TableRow from '@material-ui/core/TableRow'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import { MemoryRouter as Router } from 'react-router-dom'
import WarningNoValues from 'Components/utils/WarningNoValues'
describe('Render', () => {
  it('renders without error with empty attributes', () => {
    shallow(
      <Router>
        <MarketValueTable attributes={{}} loadingSpline={false} />
      </Router>
    )
  })
  it('renders without error with asset, rate, and maturity attributes', () => {
    shallow(
      <Router>
        <MarketValueTable
          attributes={{ rate: 0.04, asset: 50, maturity: 1 }}
          loadingSpline={false}
        />
      </Router>
    )
  })
  it('renders without error when loading with no attributes', () => {
    shallow(
      <Router>
        <MarketValueTable attributes={{}} loadingSpline={true} />
      </Router>
    )
  })
  it('renders without error when loading with attributes', () => {
    shallow(
      <Router>
        <MarketValueTable
          attributes={{ rate: 0.04, asset: 50, maturity: 1 }}
          loadingSpline={true}
        />
      </Router>
    )
  })
})
describe('functionality', () => {
  it('has WarningNoValues with empty calibrated', () => {
    const calibratedValueTable = mount(
      <Router>
        <MarketValueTable attributes={{}} loadingSpline={false} />
      </Router>
    )
    expect(calibratedValueTable.find(WarningNoValues).length).toEqual(1)
  })
  it('has table with with asset, rate, and maturity attributes', () => {
    const calibratedValueTable = mount(
      <Router>
        <MarketValueTable
          attributes={{ rate: 0.04, asset: 50, maturity: 1 }}
          loadingSpline={false}
        />
      </Router>
    )
    expect(calibratedValueTable.find(Table).length).toEqual(1)
  })
  it('has nothing when loadingSpline is true and asset is not', () => {
    const calibratedValueTable = mount(
      <Router>
        <MarketValueTable attributes={{}} loadingSpline={true} />
      </Router>
    )
    expect(calibratedValueTable.find(Table).length).toEqual(0)
  })
  it('has table when loadingSpline is true and asset exists', () => {
    const calibratedValueTable = mount(
      <Router>
        <MarketValueTable
          attributes={{ rate: 0.04, asset: 50, maturity: 1 }}
          loadingSpline={true}
        />
      </Router>
    )
    expect(calibratedValueTable.find(Table).length).toEqual(1)
  })
})
