import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import WarningNoValues from './WarningNoValues'
import {connect} from 'react-redux'
import {FIXED_DECIMALS} from 'globals/constants'
const MarketValueTable=({attributes})=>(
    attributes.asset?<Table>
        <TableHead>
            <TableRow>
                <TableCell>Asset Price</TableCell>
                <TableCell>Risk Free Rate</TableCell>
                <TableCell>Years to Maturity</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableCell>{attributes.asset.toFixed(FIXED_DECIMALS)}</TableCell>
            <TableCell>{attributes.rate.toFixed(FIXED_DECIMALS)}</TableCell>
            <TableCell>{attributes.maturity.toFixed(FIXED_DECIMALS)}</TableCell>
        </TableBody>
    </Table>:<WarningNoValues/>
)

const mapStateToProps=({calibratorValues})=>({
    attributes:calibratorValues.attributes
})

export default connect(mapStateToProps)(MarketValueTable)