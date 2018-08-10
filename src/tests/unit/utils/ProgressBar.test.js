import React from 'react'
import ProgressBar from 'Components/utils/ProgressBar'
import {shallow} from 'enzyme'
import CircularProgress from '@material-ui/core/CircularProgress'
describe('Render', ()=>{
    it('renders without error with loading', ()=>{
        shallow(
            <ProgressBar
                loading={true}
           />
        )
    })
    it('renders without error with no loading', ()=>{
        shallow(
            <ProgressBar
                loading={false}
           />
        )
    })
})
describe('functionality', ()=>{
    it('displays progress when loading is true', ()=>{
        const progressBar=shallow(
            <ProgressBar loading={true}/>
        )
        expect(progressBar.find(CircularProgress).length).toEqual(1)
    })
    it('does not display progress when loading is false', ()=>{
        const progressBar=shallow(
            <ProgressBar loading={false}/>
        )
        expect(progressBar.find(CircularProgress).length).toEqual(0)
    })
})