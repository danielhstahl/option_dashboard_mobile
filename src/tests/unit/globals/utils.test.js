import {
    isEmpty, getAboveEpsilon, 
    getSymmetricFromRight
} from 'globals/utils'

describe('isEmpty', ()=>{
    it('returns true when provided empty object', ()=>{
        expect(isEmpty({})).toEqual(true)
    })
    it('returns false when provided non-empty object', ()=>{
        expect(isEmpty({hello:'world'})).toEqual(false)
    })
})
describe('getAboveEpsilon', ()=>{
    it('returns everything above a number', ()=>{
        const arr=[{hello:2}, {hello:-1}]
        const expected=[{hello:2}]
        expect(getAboveEpsilon(0)(arr, 'hello')).toEqual(expected)
    })
})
describe('getSymmetricFromRight', ()=>{
    it('returns everything when right has everything exist', ()=>{
        const arr=[{hello:-2, goodbye:3}, {hello:2, goodbye:3}]
        expect(getSymmetricFromRight('hello', 'goodbye', arr, 0)).toEqual(arr)
    })
    it('returns everything when nothing below epsilon', ()=>{
        const arr=[{hello:3, goodbye:3}, {hello:2, goodbye:3}]
        expect(getSymmetricFromRight('hello', 'goodbye', arr, 0)).toEqual(arr)
    })
    it('returns subset of left when left has higher absolute value than right', ()=>{
        const arr=[{hello:-3, goodbye:3}, {hello:-2, goodbye:2}, {hello:2, goodbye:3}]
        const expected=[{hello:-2, goodbye:2}, {hello:2, goodbye:3}]
        expect(getSymmetricFromRight('hello', 'goodbye', arr, 0)).toEqual(expected)
    })
    it('returns empty array when given empty array', ()=>{
        const arr=[]
        expect(getSymmetricFromRight('hello', 'goodbye', arr, 0)).toEqual(arr)
    })
})


