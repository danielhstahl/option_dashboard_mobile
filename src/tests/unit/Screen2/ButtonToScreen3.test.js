import React from 'react'
import { ButtonToScreen3 } from 'Components/Screen2/ButtonToScreen3'
import { shallow, mount } from 'enzyme'
import Button from '@material-ui/core/Button'
import { MemoryRouter as Router } from 'react-router-dom'
describe('Render', () => {
  it('renders without error with empty calibrated', () => {
    shallow(
      <Router>
        <ButtonToScreen3 nextTabLink="next" calibrated={{}} />
      </Router>
    )
  })
  it('renders without error with not empty calibrated', () => {
    shallow(
      <Router>
        <ButtonToScreen3 nextTabLink="next" calibrated={{ hello: 'world' }} />
      </Router>
    )
  })
})
describe('functionality', () => {
  it('shows button when not empty calibrated', () => {
    const buttonToScreen = mount(
      <Router>
        <ButtonToScreen3 nextTabLink="next" calibrated={{ hello: 'world' }} />
      </Router>
    )
    expect(buttonToScreen.find(Button).length).toEqual(1)
  })
  it('does not show button when empty calibrated', () => {
    const buttonToScreen = mount(
      <Router>
        <ButtonToScreen3 nextTabLink="next" calibrated={{}} />
      </Router>
    )
    expect(buttonToScreen.find(Button).length).toEqual(0)
  })
})
