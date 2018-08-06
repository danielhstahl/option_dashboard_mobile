import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import {connect} from 'react-redux'

const mapStateToProps=({inputs})=>({
    loading:inputs.loading
})

const CustomProgress=({loading})=>loading&&<CircularProgress 
    color="secondary"
/>

export default connect(mapStateToProps)(CustomProgress)