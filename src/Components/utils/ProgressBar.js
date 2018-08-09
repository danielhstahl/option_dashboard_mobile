import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
//import {connect} from 'react-redux'

/*const mapStateToProps=({inputs})=>({
    loading:inputs.loading
})*/

export default ({loading, dispatch, ...rest})=>loading&&<CircularProgress 
    color="secondary"
    {...rest}
/>

//export default connect(mapStateToProps)(CustomProgress)