import React from 'react'
import {ButtonToScreen2} from 'Components/Screen1/ButtonToScreen2'
import {shallow, mount} from 'enzyme'
import ProgressBar from 'Components/utils/ProgressBar'
import Button from '@material-ui/core/Button'
import {
    MemoryRouter as Router
} from 'react-router-dom'
describe('Render', ()=>{
    it('renders without error with no maturity and not loading', ()=>{
        shallow(
            <Router>
                <ButtonToScreen2
                    nextTabLink='next'
                    loadingMaturity={false}
                    maturity=''
                />
            </Router>
        )
    })
    it('renders without error with no maturity and loading', ()=>{
        shallow(
            <Router>
                <ButtonToScreen2
                    nextTabLink='next'
                    loadingMaturity={true}
                    maturity=''
                />
            </Router>
        )
    })
    it('renders without error with maturity and no loading', ()=>{
        shallow(
            <Router>
                <ButtonToScreen2
                    nextTabLink='next'
                    maturity='5'
                    loadingMaturity={false}
                />
            </Router>
        )
    })
    it('renders without error with maturity and loading', ()=>{
        shallow(
            <Router>
                <ButtonToScreen2
                    nextTabLink='next'
                    maturity='5'
                    loadingMaturity={true}
                />
            </Router>
        )
    })
   
})
describe('functionality', ()=>{
    it('shows progress when no maturity and loading', ()=>{
        const buttonToScreen=mount(
            <Router>
                <ButtonToScreen2
                    nextTabLink='next'
                    loadingMaturity={true}
                    maturity=''
                />
            </Router>
        )
        expect(buttonToScreen.find(ProgressBar).length).toEqual(1)
    })
    it('shows no progress when maturity and loading', ()=>{
        const buttonToScreen=mount(
            <Router>
                <ButtonToScreen2
                    nextTabLink='next'
                    maturity='5'
                    loadingMaturity={true}
                />
            </Router>
        )
        expect(buttonToScreen.find(ProgressBar).length).toEqual(0)
    })
    it('shows button with maturity', ()=>{
        const buttonToScreen=mount(
            <Router>
                <ButtonToScreen2
                    nextTabLink='next'
                    maturity='5'
                    loadingMaturity={false}
                />
            </Router>
        )
        expect(buttonToScreen.find(Button).length).toEqual(1)
    })
    it('shows button with maturity and loading', ()=>{
        const buttonToScreen=mount(
            <Router>
                <ButtonToScreen2
                    nextTabLink='next'
                    maturity='5'
                    loadingMaturity={true}
                />
            </Router>
        )
        expect(buttonToScreen.find(Button).length).toEqual(1)
    })
})