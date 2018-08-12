import {rBoiler} from 'Reducers/pricerValues'

describe('rBoiler', ()=>{
    it('returns default state when nothing provided', ()=>{
        expect(rBoiler('hello')(undefined, {type:'goodbye'})).toEqual([])
    })
    it('returns new default state when default state provided', ()=>{
        expect(rBoiler('hello', 'state')(undefined, {type:'goodbye'})).toEqual('state')
    })
    it('returns value when type is same', ()=>{
        expect(rBoiler('hello', 'state')(undefined, {type:'hello', value:'goodbye'})).toEqual('goodbye')
    })
})
