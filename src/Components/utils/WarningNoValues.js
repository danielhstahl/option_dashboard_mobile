import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
const marginTop = { marginTop: 40 }
//export for testing
export const convertArrayToParagraph = arr =>
  arr.reduce((aggr, curr) => {
    return [...(Array.isArray(aggr) ? aggr : [aggr]), ' or ', curr]
  })

const WarningNoValues = ({ links }) => (
  <Typography variant="headline" gutterBottom style={marginTop}>
    No data available! Check that{' '}
    {convertArrayToParagraph(
      links.map(({ to, label }) => (
        <Link to={to} key={to}>
          {label}
        </Link>
      ))
    )}{' '}
    has been filled in correctly!
  </Typography>
)
WarningNoValues.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  )
}
export default WarningNoValues
