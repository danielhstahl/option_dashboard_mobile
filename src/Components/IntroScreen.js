import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { withStyles } from '@material-ui/core'
const baseUrl='/setup'


const styles=theme=>({
    button:{
        display: 'inline-block'
    }
})

const IntroScreen=withStyles(styles)(({classes})=>(
    <Grid fluid>
        <Row>
            <Col xsOffset={1} smOffset={2} xs={10} sm={8}>
                <p>
                This app calibrates and prices options using a general jump-diffusion with stochastic clock correlated with the diffusion component of the asset.  
                </p>
                <Button 
                    className={classes.button}
                    color="secondary"
                    variant="contained"
                    component={Link}
                    to='/ticker'

                >
                    Get Started!
                </Button>
            </Col>
        </Row>
    </Grid>
))
export default IntroScreen