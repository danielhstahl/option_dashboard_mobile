import React from 'react'
import { ButtonToCalibrate } from 'Components/Screen2/ButtonToCalibrate'
import { shallow, mount } from 'enzyme'
import ProgressBar from 'Components/utils/ProgressBar'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import { MemoryRouter as Router } from 'react-router-dom'
describe('Render', () => {
  it('renders without error with empty attributes', () => {
    shallow(
      <Router>
        <ButtonToCalibrate
          attributes={{}}
          loadingCalibrate={true}
          onClick={() => {}}
        />
      </Router>
    )
  })
  it('renders without error with attributes and loading is true', () => {
    shallow(
      <Router>
        <ButtonToCalibrate
          attributes={{ constraints: {}, maturity: 'hello', asset: 'goodby' }}
          loadingCalibrate={true}
          onClick={() => {}}
        />
      </Router>
    )
  })
  it('renders without error with attributes and loading is false', () => {
    shallow(
      <Router>
        <ButtonToCalibrate
          attributes={{ constraints: {}, maturity: 'hello', asset: 'goodby' }}
          loadingCalibrate={false}
          onClick={() => {}}
        />
      </Router>
    )
  })
})
describe('functionality', () => {
  it('shows button and progress bar with attributes but not disabled or progressing when loadingCalibrate is false', () => {
    const buttonToScreen = mount(
      <Router>
        <ButtonToCalibrate
          attributes={{ constraints: {}, maturity: 'hello', asset: 'goodby' }}
          loadingCalibrate={false}
          onClick={() => {}}
        />
      </Router>
    )
    expect(buttonToScreen.find(Button).length).toEqual(1)
    expect(buttonToScreen.find(Button).props().disabled).toEqual(false)
    expect(buttonToScreen.find(ProgressBar).length).toEqual(1)
    expect(buttonToScreen.find(CircularProgress).length).toEqual(0)
  })
  it('shows button and progress bar with attributes but is disabled and progressing when loadingCalibrate is true', () => {
    const buttonToScreen = mount(
      <Router>
        <ButtonToCalibrate
          attributes={{ constraints: {}, maturity: 'hello', asset: 'goodby' }}
          loadingCalibrate={true}
          onClick={() => {}}
        />
      </Router>
    )
    expect(buttonToScreen.find(Button).length).toEqual(1)
    expect(buttonToScreen.find(Button).props().disabled).toEqual(true)
    expect(buttonToScreen.find(ProgressBar).length).toEqual(1)
    expect(buttonToScreen.find(CircularProgress).length).toEqual(1)
  })
  it('does not show button and progress bar with attributes', () => {
    const buttonToScreen = mount(
      <Router>
        <ButtonToCalibrate
          attributes={{}}
          loadingCalibrate={false}
          onClick={() => {}}
        />
      </Router>
    )
    expect(buttonToScreen.find(Button).length).toEqual(0)
    expect(buttonToScreen.find(ProgressBar).length).toEqual(0)
  })
})
