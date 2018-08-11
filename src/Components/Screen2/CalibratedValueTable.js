import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import {connect} from 'react-redux'
import {FIXED_DECIMALS} from 'globals/constants'
import {isEmpty} from 'globals/utils'
import PropTypes from 'prop-types'
//exported for testing
export const CalibratedValueTable=({calibrated})=>
    isEmpty(calibrated)? 
    null:
    (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Variable</TableCell>
                    <TableCell>Value</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {Object.entries(calibrated).map(([key, value])=>(
                    <TableRow key={key}>
                        <TableCell>{key}</TableCell>
                        <TableCell>
                            {value.toFixed(FIXED_DECIMALS)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )

CalibratedValueTable.propTypes={
    calibrated:PropTypes.object.isRequired
}
const mapStateToProps=({calibratorValues})=>({
    calibrated:calibratorValues.calibrated //CALIBRATED_PARAMETERS
})

export default connect(mapStateToProps)(CalibratedValueTable)