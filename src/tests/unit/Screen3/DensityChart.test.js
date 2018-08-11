import React from 'react'
import {
    DensityChart,
    getMax,
    getVaR
} from 'Components/Screen3/DensityChart'

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
    it('renders without error with empty density, no value at risk, and loading', ()=>{
        shallow(
            <DensityChart
                density={[]}
                theme={fakeTheme}
                loadingDensity={true}
                riskMetrics={{}}
            />
        )
    })
    it('renders without error with empty density, no value at risk, and not loading', ()=>{
        shallow(
            <DensityChart
                density={[]}
                theme={fakeTheme}
                loadingDensity={false}
                riskMetrics={{}}
            />
        )
    })
    it('renders without error with density and loading', ()=>{
        shallow(
            <DensityChart
                density={[{at_point:5, value:4}]}
                theme={fakeTheme}
                loadingDensity={true}
                riskMetrics={{value_at_risk:5, expected_shortfall:3}}
            />
        )
    })
    it('renders without error with density and not loading', ()=>{
        shallow(
            <DensityChart
                density={[{at_point:5, value:4}]}
                theme={fakeTheme}
                loadingDensity={true}
                riskMetrics={{value_at_risk:5, expected_shortfall:3}}
            />
        )
    })
})
describe('functionality', ()=>{
    it('has chart if density exists', ()=>{
        const densityChart=mount(
            <DensityChart
                density={[{at_point:5, value:4}]}
                theme={fakeTheme}
                loadingDensity={true}
                riskMetrics={{value_at_risk:5, expected_shortfall:3}}
            />
        )
        expect(densityChart.find(VictoryChart).length).toEqual(1)
    })
    it('has progress bar if density does not exist', ()=>{
        const densityChart=mount(
            <DensityChart
                density={[]}
                theme={fakeTheme}
                loadingDensity={false}
                riskMetrics={{}}
            />
        )
        expect(densityChart.find(ProgressBar).length).toEqual(1)
    })
    it('is progressing if density does not exist and loading', ()=>{
        const densityChart=mount(
            <DensityChart
                density={[]}
                theme={fakeTheme}
                loadingDensity={true}
                riskMetrics={{}}
            />
        )
        expect(densityChart.find(CircularProgress).length).toEqual(1)
    })
    
})

describe('getMax', ()=>{
    it('gets max from array', ()=>{
        const arr=[{myKey:4}, {myKey:6}, {myKey:-2}]
        const expected=6
        expect(getMax(arr, 'myKey')).toEqual(expected)
    })
    it('gets max from array with all negative', ()=>{
        const arr=[{myKey:-4}, {myKey:-6}, {myKey:-2}]
        const expected=-2
        expect(getMax(arr, 'myKey')).toEqual(expected)
    })
})

describe('getVaR', ()=>{
    it('returns array of x y object', ()=>{
        const arr=[{value:4}, {value:6}]
        const expected=[{x:-2, y:0}, {x:-2, y:6}]
        expect(getVaR({value_at_risk:2}, arr)).toEqual(expected)
    })
})
