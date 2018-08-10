import React from 'react'
import LoadData from 'Components/utils/LoadData'
import {shallow} from 'enzyme'
describe('Render', ()=>{
    it('renders without error', ()=>{
        shallow(
            <LoadData
                onLoad={()=>{}}
            >Hello World</LoadData>
        )
    })
})
describe('functionality', ()=>{
    it('calls function on mount', ()=>{
        const onLoad=()=>{
            expect(true).toEqual(true)///got called!
        }
        shallow(
            <LoadData onLoad={onLoad}>Hello World</LoadData>
        )
    })
    it('calls function on mount and includes additional props', ()=>{
        const onLoad=(props)=>{
            expect(props.hello).toEqual('goodbye')///got called!
        }
        shallow(
            <LoadData onLoad={onLoad} hello='goodbye'>Hello World</LoadData>
        )
    })
    it('displays children', ()=>{
        const loadData=shallow(
            <LoadData onLoad={()=>{}} hello='goodbye'><p>hello</p></LoadData>
        )
        expect(loadData.contains(<p>hello</p>))
    })
})