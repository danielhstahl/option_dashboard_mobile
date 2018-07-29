import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import {connect} from 'react-redux'

const MarketValueTable=({attributes})=>(
    attributes.asset?<Table>
        <TableHead>
            <TableRow>
                <TableCell>Asset Price</TableCell>
                <TableCell>Risk Free Rate</TableCell>
                <TableCell>Time to Maturity</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableCell>{attributes.asset}</TableCell>
            <TableCell>{attributes.rate}</TableCell>
            <TableCell>{attributes.maturity}</TableCell>
        </TableBody>
    </Table>:null
)

const mapStateToProps=({marketValues})=>({
    attributes:marketValues.attributes
})

export default connect(mapStateToProps)(MarketValueTable)