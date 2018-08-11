import React from 'react'
import {
    PutCallChart
} from 'Components/Screen3/PutCallChart'

import {shallow, mount} from 'enzyme'
import {VictoryChart, VictoryScatter} from 'victory'
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
    it('renders without error with empty put/call and loading', ()=>{
        shallow(
            <PutCallChart
                call={[]}
                put={[]}
                theme={fakeTheme}
                loadingPutCall={true}
                strikes={[]}
                prices={[]}
                sensitivity='price'
            />
        )
    })
    it('renders without error with empty put/call and not loading', ()=>{
        shallow(
            <PutCallChart
                call={[]}
                put={[]}
                theme={fakeTheme}
                loadingPutCall={false}
                strikes={[]}
                prices={[]}
                sensitivity='price'
            />
        )
    })
    it('renders without error with put/call and loading', ()=>{
        shallow(
            <PutCallChart
                call={[{value:5, at_point:5}]}
                put={[{value:5, at_point:5}]}
                theme={fakeTheme}
                loadingPutCall={true}
                strikes={[3]}
                prices={[4]}
                sensitivity='price'
            />
        )
    })
    it('renders without error with put/call and not loading', ()=>{
        shallow(
            <PutCallChart
                call={[{value:5, at_point:5}]}
                put={[{value:5, at_point:5}]}
                theme={fakeTheme}
                loadingPutCall={false}
                strikes={[3]}
                prices={[4]}
                sensitivity='price'
            />
        )
    })
})
describe('functionality', ()=>{
    it('has chart if density exists', ()=>{
        const putCallChart=mount(
            <PutCallChart
                call={[{value:5, at_point:5}]}
                put={[{value:5, at_point:5}]}
                theme={fakeTheme}
                loadingPutCall={true}
                strikes={[3]}
                prices={[4]}
                sensitivity='price'
            />
        )
        expect(putCallChart.find(VictoryChart).length).toEqual(1)
    })
    it('has progress bar if density does not exist', ()=>{
        const putCallChart=mount(
            <PutCallChart
                call={[]}
                put={[]}
                theme={fakeTheme}
                loadingPutCall={false}
                strikes={[]}
                prices={[]}
                sensitivity='price'
            />
        )
        expect(putCallChart.find(ProgressBar).length).toEqual(1)
    })
    it('is progressing if density does not exist and loading', ()=>{
        const putCallChart=mount(
            <PutCallChart
                call={[]}
                put={[]}
                theme={fakeTheme}
                loadingPutCall={true}
                strikes={[]}
                prices={[]}
                sensitivity='price'
            />
        )
        expect(putCallChart.find(CircularProgress).length).toEqual(1)
    })
    it('shows scatter if sensitity is equal to "price"', ()=>{
        const putCallChart=mount(
            <PutCallChart
                call={[{value:5, at_point:5}]}
                put={[{value:5, at_point:5}]}
                theme={fakeTheme}
                loadingPutCall={true}
                strikes={[3]}
                prices={[4]}
                sensitivity='price'
            />
        )
        expect(putCallChart.find(VictoryScatter).length).toBeGreaterThan(0)
    })
    it('does not show scatter if sensitity is not equal to "price"', ()=>{
        const putCallChart=mount(
            <PutCallChart
                call={[{value:5, at_point:5}]}
                put={[{value:5, at_point:5}]}
                theme={fakeTheme}
                loadingPutCall={true}
                strikes={[3]}
                prices={[4]}
                sensitivity='not price'
            />
        )
        expect(putCallChart.find(VictoryScatter).length).toEqual(0)
    })
    
})