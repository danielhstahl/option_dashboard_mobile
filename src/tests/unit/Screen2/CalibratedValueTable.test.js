import React from 'react'
import { CalibratedValueTable } from 'Components/Screen2/CalibratedValueTable'
import { shallow, mount } from 'enzyme'
import TableRow from '@material-ui/core/TableRow'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
describe('Render', () => {
  it('renders without error with empty calibrated', () => {
    shallow(<CalibratedValueTable calibrated={{}} />)
  })
  it('renders without error with not empty calibrated', () => {
    shallow(<CalibratedValueTable calibrated={{ hello: 5 }} />)
  })
})
describe('functionality', () => {
  it('has no table with empty calibrated', () => {
    const calibratedValueTable = mount(<CalibratedValueTable calibrated={{}} />)
    expect(calibratedValueTable.find(Table).length).toEqual(0)
  })
  it('has table with non-empty calibrated', () => {
    const calibratedValueTable = mount(
      <CalibratedValueTable calibrated={{ hello: 5 }} />
    )
    expect(calibratedValueTable.find(Table).length).toEqual(1)
  })
  it('has 3 rows with object with 2 keys', () => {
    const calibratedValueTable = mount(
      <CalibratedValueTable calibrated={{ hello: 5, goodbye: 6 }} />
    )
    expect(calibratedValueTable.find(TableRow).length).toEqual(3)
    expect(
      calibratedValueTable
        .find(TableRow)
        .at(1)
        .find(TableCell)
        .at(0)
        .text()
    ).toEqual('hello')
    expect(
      calibratedValueTable
        .find(TableRow)
        .at(1)
        .find(TableCell)
        .at(1)
        .text()
    ).toEqual('5.0000')
    expect(
      calibratedValueTable
        .find(TableRow)
        .at(2)
        .find(TableCell)
        .at(0)
        .text()
    ).toEqual('goodbye')
    expect(
      calibratedValueTable
        .find(TableRow)
        .at(2)
        .find(TableCell)
        .at(1)
        .text()
    ).toEqual('6.0000')
  })
})
