import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'

const ProgressBar=({loading, ...rest})=>(
    loading&&
    <CircularProgress 
        color="secondary"
        {...rest}
    />
)
ProgressBar.propTypes={
    loading:PropTypes.bool.isRequired
}
export default ProgressBar