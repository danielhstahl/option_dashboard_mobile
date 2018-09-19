import React from 'react'
import { SelectTicker } from 'Components/Screen1/SelectTicker'
import { shallow, mount } from 'enzyme'
import ProgressBar from 'Components/utils/ProgressBar'
import FormControl from '@material-ui/core/FormControl'

describe('Render', () => {
  it('renders without error while loading', () => {
    shallow(
      <SelectTicker
        onLoad={() => {}}
        loadingTicker={true}
        value="someticker"
        onChange={() => {}}
        options={[{ Symbol: 'hello', Name: 'goodbye' }]}
        classes={{ inputField: 'someClass' }}
      />
    )
  })
  it('renders without error while not loading', () => {
    shallow(
      <SelectTicker
        onLoad={() => {}}
        loadingTicker={false}
        value="someticker"
        onChange={() => {}}
        options={[{ Symbol: 'hello', Name: 'goodbye' }]}
        classes={{ inputField: 'someClass' }}
      />
    )
  })
})
describe('functionality', () => {
  it('shows progress bar while loading', () => {
    const selectTicker = mount(
      <SelectTicker
        onLoad={() => {}}
        loadingTicker={true}
        value="someticker"
        onChange={() => {}}
        options={[{ Symbol: 'hello', Name: 'goodbye' }]}
        classes={{ inputField: 'someClass' }}
      />
    )
    expect(selectTicker.find(ProgressBar).length).toEqual(1)
  })
  it('shows FormControl while not loading', () => {
    const selectTicker = mount(
      <SelectTicker
        onLoad={() => {}}
        loadingTicker={false}
        value="someticker"
        onChange={() => {}}
        options={[{ Symbol: 'hello', Name: 'goodbye' }]}
        classes={{ inputField: 'someClass' }}
      />
    )
    expect(selectTicker.find(FormControl).length).toEqual(1)
  })
})
