import {calibrateModel} from 'Actions/calibrator'
import {delay} from 'setupTests'
import {
    CALIBRATED_PARAMETERS
} from 'Actions/constants'
describe('calibrateModel', ()=>{
    beforeEach(()=>{
        fetch.resetMocks()
    })
    it('returns data in dispatch', ()=>{
        const dispatch=jest.fn()
        fetch.once(JSON.stringify({optimal_parameters:{hello:'world'}, fn_result:.004}))
        calibrateModel(dispatch)({})
        return delay(30)
            .then(()=>{
                return expect(dispatch.mock.calls.length).toEqual(3)
            })
            .then(()=>{
                return expect(dispatch.mock.calls[1][0]).toEqual({
                    type:CALIBRATED_PARAMETERS,
                    parameters:{
                        hello:'world',
                        mse:.004
                    }
                })
            })
    })
})