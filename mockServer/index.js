const app=require('express')()
const bodyParser=require('body-parser')
app.use(bodyParser.json())

/**log_strike:f64,
    transformed_option:f64 */
const spline={
    curve:[{
        log_strike:-2, "transformed_option":0.000870664
    },{
        log_strike:-1, "transformed_option":0.001
    },{
        log_strike:0, "transformed_option":0.01
    },{
        log_strike:1, "transformed_option":0.001
    },{
        log_strike:2, "transformed_option":0.0008
    }],
    points:[{
        log_strike:-2, "transformed_option":0.000870664
    },{
        log_strike:-1, "transformed_option":0.001
    },{
        log_strike:0, "transformed_option":0.01
    },{
        log_strike:1, "transformed_option":0.001
    },{
        log_strike:2, "transformed_option":0.0008
    }]
}
const handlers={
    calculator:req=>{
        return [{"value":109.545,"at_point":95},{"value":107.437,"at_point":100},{"value":96.7123,"at_point":130},{"value":91.1387,"at_point":150},{"value":88.7082,"at_point":160},{"value":87.5658,"at_point":165},{"value":86.4664,"at_point":170},{"value":85.4065,"at_point":175},{"value":83.392,"at_point":185},{"value":82.4319,"at_point":190},{"value":81.4998,"at_point":195},{"value":80.5938,"at_point":200},{"value":78.8528,"at_point":210},{"value":74.1016,"at_point":240},{"value":72.6501,"at_point":250}]
    },
    calibrator:req=>{
        const {calibration}=req.params
        return calibration==='spline'?spline:{
            optimal_parameters:{
                "rho":-0.19246,"sigma":0.244064,"speed":2.7586,"v0":1.01803,"eta_v":2.58261,"mse":8.69005e-05
            },
            fn_result:0.0001
        }
    },
    density:req=>{
        const {densityType}=req.params
        return densityType==='raw'?[{"value":109.545,"at_point":95},{"value":107.437,"at_point":100},{"value":96.7123,"at_point":130},{"value":91.1387,"at_point":150},{"value":88.7082,"at_point":160},{"value":87.5658,"at_point":165},{"value":86.4664,"at_point":170},{"value":85.4065,"at_point":175},{"value":83.392,"at_point":185},{"value":82.4319,"at_point":190},{"value":81.4998,"at_point":195},{"value":80.5938,"at_point":200},{"value":78.8528,"at_point":210},{"value":74.1016,"at_point":240},{"value":72.6501,"at_point":250}]:{expected_shortfall:-2.0, value_at_risk:-1.9}
    },
    defaultParameters:req=>{
        return {"rho":{"upper":1, "lower":-1},"rate":{"upper":0.4, "lower":0},"speed":{"upper":3, "lower":0},"v0":{"upper":1.8, "lower":0.2},"sig_l":{"upper":2, "lower":0},"eta_v":{"upper":3, "lower":0},"sigma":{"upper":1, "lower":0},"mu_l":{"upper":1, "lower":-1},"num_u":{"upper":10, "lower":5},"lambda":{"upper":2, "lower":0}}
    },
    getExpirationDates:req=>{
        return {asset:190.42, expirationDates:[1528416000000,
            1529020800000,
            1529625600000,
            1530230400000,
            1530835200000,
            1531440000000,
            1532044800000,
            1534464000000,
            1537488000000,
            1539907200000,
            1542326400000,
            1545350400000,
            1547769600000,
            1561075200000,
            1579219200000,
            1592524800000 ]}
    },
    getOptionPrices:req=>{
        return Object.assign({"asset":190.42000000000002,"maturity":2.0491793447171487,"rate":0.004,"strikes":[85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200,205,210,215,220,225,230,235,240,245,250,260,270,280,290,300],"prices":[105.475,101.275,95.025,91.475,86.75,82.75,77.75,73.75,68.975,65.75,62.25,57.75,53.75,50.125,46.8,43.3,40.425,36.8,34.7,31.125,29.3,26.975,24.375,22.25,20.075,18.425,16.6,14.825,12.75,11.8,11.024999999999999,9.55,8.675,7.199999999999999,6.325,4.25,3.42,3.4749999999999996,2.625]}, spline)
    },
    getTickers:req=>{
        return [{
            Symbol:'AAPL',
            Name:'Apple'
        },{
            Symbol:'Some other symbol',
            Name:'Some company'
        }]
    },

}

app.get('/options/:ticker/maturities', (req, res)=>{
    res.send(handlers.getExpirationDates(req))
})
app.get('/options/tickers', (req, res)=>{
    res.send(handlers.getTickers(req))
})
app.get('/options/:ticker/prices/:maturity', (req, res)=>{
    res.send(handlers.getOptionPrices(req))
})
app.post('/calibrator/:calibration', (req, res)=>{
    setTimeout(()=>{
        res.send(handlers.calibrator(req))
    }, 1000)
})
app.get('/parameters/parameter_ranges', (req, res)=>{
    res.send(handlers.defaultParameters(req))    
})

app.listen('3002', ()=>console.log("mock server on 3002"))