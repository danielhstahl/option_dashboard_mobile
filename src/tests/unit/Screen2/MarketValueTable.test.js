import React from 'react'
import {MarketValueTable} from 'Components/Screen2/MarketValueTable'
import {shallow, mount} from 'enzyme'
import TableRow from '@material-ui/core/TableRow'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import {
    MemoryRouter as Router
} from 'react-router-dom'
import WarningNoValues from 'Components/utils/WarningNoValues'
describe('Render', ()=>{
    it('renders without error with empty attributes', ()=>{
        shallow(
            <Router>
                <MarketValueTable
                    attributes={{}}
                />
            </Router>
        )
    })
    it('renders without error with asset, rate, and maturity attributes', ()=>{
        shallow(
            <Router>
                <MarketValueTable
                    attributes={{rate:.04, asset:50, maturity:1}}
                />
            </Router>
        )
    })
})
describe('functionality', ()=>{
    it('has WarningNoValues with empty calibrated', ()=>{
        const calibratedValueTable=mount(
            <Router>
                <MarketValueTable
                    attributes={{}}
                />
            </Router>
        )
        expect(calibratedValueTable.find(WarningNoValues).length).toEqual(1)
    })
    it('has table with with asset, rate, and maturity attributes', ()=>{
        const calibratedValueTable=mount(
            <Router>
                <MarketValueTable
                    attributes={{rate:.04, asset:50, maturity:1}}
                />
            </Router>
        )
        expect(calibratedValueTable.find(Table).length).toEqual(1)
    })
})