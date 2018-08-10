import React from 'react'
import {SplineChart} from 'Components/Screen2/SplineChart'
import {shallow, mount} from 'enzyme'
import {VictoryChart} from 'victory'
import ProgressBar from 'Components/utils/ProgressBar'
import CircularProgress from '@material-ui/core/CircularProgress'

const fakeTheme={
    palette:{
        primary:{
            main:'hello'
        },
        secondary:{
            main:'world'
        }
    }
}
describe('Render', ()=>{
    it('renders without error with empty spline and loading', ()=>{
        shallow(
            <SplineChart
                spline={{}}
                theme={fakeTheme}
                loadingSpline={true}
            />
        )
    })
    it('renders without error with empty spline and not loading', ()=>{
        shallow(
            <SplineChart
                spline={{}}
                theme={fakeTheme}
                loadingSpline={false}
            />
        )
    })
    it('renders without error with spline and loading', ()=>{
        shallow(
            <SplineChart
                spline={{curve:[], points:[]}}
                theme={fakeTheme}
                loadingSpline={true}
            />
        )
    })
    it('renders without error with spline and not loading', ()=>{
        shallow(
            <SplineChart
                spline={{curve:[], points:[]}}
                theme={fakeTheme}
                loadingSpline={false}
            />
        )
    })
})
describe('functionality', ()=>{
    it('has chart if curve exists', ()=>{
        const splineChart=mount(
            <SplineChart
                spline={{curve:[], points:[]}}
                theme={fakeTheme}
                loadingSpline={false}
            />
        )
        expect(splineChart.find(VictoryChart).length).toEqual(1)
    })
    it('has progress bar if curve does not exist', ()=>{
        const splineChart=mount(
            <SplineChart
                spline={{}}
                theme={fakeTheme}
                loadingSpline={false}
            />
        )
        expect(splineChart.find(ProgressBar).length).toEqual(1)
    })
    it('is progressing if curve does not exist and loading', ()=>{
        const splineChart=mount(
            <SplineChart
                spline={{}}
                theme={fakeTheme}
                loadingSpline={true}
            />
        )
        expect(splineChart.find(CircularProgress).length).toEqual(1)
    })
    
})