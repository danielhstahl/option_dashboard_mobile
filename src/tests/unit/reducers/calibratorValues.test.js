import {attributes} from 'Reducers/calibratorValues'

describe('attributes', ()=>{
    it('returns default attributes when called with no matching type', ()=>{
        expect(attributes(undefined, {type:'not match'})).toEqual({num_u:8, quantile:.01, prices:[], strikes:[]})
    })
})