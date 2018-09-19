import React from 'react'
import { Link } from 'react-router-dom'
import WarningNoValues, {
  convertArrayToParagraph
} from 'Components/utils/WarningNoValues'
import { shallow } from 'enzyme'
const links = [{ to: 'hello', label: 'world' }]
describe('Render', () => {
  it('renders without error', () => {
    shallow(<WarningNoValues links={links} />)
  })
})
describe('functionality', () => {
  it('displays link', () => {
    const warningNoValues = shallow(<WarningNoValues links={links} />)
    expect(warningNoValues.find(Link).length).toEqual(1)
  })
  it('displays multiple links', () => {
    const warningNoValues = shallow(
      <WarningNoValues links={[...links, { to: 'somewhere', label: 'else' }]} />
    )
    expect(warningNoValues.find(Link).length).toEqual(2)
  })
})
describe('convertArrayToParagraph', () => {
  it('returns first element with array of length 1', () => {
    const arr = ['hello']
    const expected = 'hello'
    const result = convertArrayToParagraph(arr)
    expect(result).toEqual(expected)
  })
  it('takes array of length 2 and converts to array with or in between', () => {
    const arr = ['hello', 'goodbye']
    const expected = ['hello', ' or ', 'goodbye']
    const result = convertArrayToParagraph(arr)
    expect(result).toEqual(expected)
  })
  it('takes array of length 3 and converts to array with or', () => {
    const arr = ['hello', 'goodbye', 'again']
    const expected = ['hello', ' or ', 'goodbye', ' or ', 'again']
    const result = convertArrayToParagraph(arr)
    expect(result).toEqual(expected)
  })
})
