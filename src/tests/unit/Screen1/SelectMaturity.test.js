import React from 'react'
import { SelectMaturity } from 'Components/Screen1/SelectMaturity'
import { shallow, mount } from 'enzyme'
import FormControl from '@material-ui/core/FormControl'

describe('Render', () => {
  it('renders without error with empty options', () => {
    shallow(
      <SelectMaturity
        onChange={() => {}}
        options={[]}
        value=""
        ticker="someticker"
        classes={{ inputField: 'someClass' }}
      />
    )
  })
  it('renders without error with options', () => {
    shallow(
      <SelectMaturity
        onChange={() => {}}
        options={[123]}
        value="123"
        ticker="someticker"
        classes={{ inputField: 'someClass' }}
      />
    )
  })
})
describe('functionality', () => {
  it('shows FormControl when options', () => {
    const selectMaturity = mount(
      <SelectMaturity
        onChange={() => {}}
        options={[123]}
        value="123"
        ticker="someticker"
        classes={{ inputField: 'someClass' }}
      />
    )
    expect(selectMaturity.find(FormControl).length).toEqual(1)
  })
})
