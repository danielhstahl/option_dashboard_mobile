(this.webpackJsonpoption_dashboard_mobile=this.webpackJsonpoption_dashboard_mobile||[]).push([[0],{246:function(e,t,a){e.exports=a(503)},251:function(e,t,a){},503:function(e,t,a){"use strict";a.r(t);var n,r,i=a(1),l=a.n(i),o=a(37),c=a.n(o),u=(a(251),a(238)),s=a.n(u),m=a(120),p=a.n(m),d=a(73),f=a.n(d),v=a(521),b=a(517),y=a(522),h=a(12),E=a(112),g=a.n(E),k=a(17),R=a(52),O="https://sgvzefbvu0.execute-api.us-east-1.amazonaws.com/dev/",_=function(e,t){return fetch(O+e,(a=t,{method:"post",body:JSON.stringify(a)})).then((function(e){return e.json()}));var a},T=function(e){return fetch(O+e).then((function(e){return e.json()}))},C=function(e){return e.path.split(":")[0]},I=a(110),A=a.n(I),L=function(e){return{inputField:{margin:e.spacing.unit,width:"100%"}}},w=a(27),j=a(111),x=a.n(j),V=a(228),N=a(229),S=a(240),q=a(243),D=function(e){Object(q.a)(a,e);var t=Object(S.a)(a);function a(){return Object(V.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onLoad;e.children;t(Object(R.a)(e,["onLoad","children"]))}},{key:"render",value:function(){return this.props.children}}]),a}(i.Component),M=a(34),P=(n="calibrate",function(e){return function(t){return e({type:"LOADING_CALIBRATE",value:!0}),_("calibrator/".concat(n),t).then((function(t){return e({type:"CALIBRATED_PARAMETERS",parameters:Object(M.a)({},t.optimal_parameters,{mse:t.fn_result})})})).finally((function(){e({type:"LOADING_CALIBRATE",value:!1})}))}}),G=function(){return window.screen.width<800},U=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},K=function(e){return function(t,a){return t.filter((function(t){return t[a]>e}))}},F=function(e,t,a,n){if(0===a.length)return a;var r=K(n)(a,t),i=r[r.length-1][e];return a.filter((function(a){return a[e]>=-i&&(a[t]>n||a[e]<0)}))},Y={position:"relative"},B=Object(M.a)({},Y,{minHeight:200}),z={marginTop:-(r=36)/2,marginLeft:-r/2,top:"50%",left:"50%",position:"absolute"},H=a(230),W=a.n(H),J=function(e){var t=e.loading,a=Object(R.a)(e,["loading"]);return t&&l.a.createElement(W.a,Object.assign({color:"secondary"},a))},Q=a(0),$=a.n(Q),X=G(),Z=Object(w.withStyles)(L)((function(e){var t=e.onChange,a=e.value,n=e.onLoad,r=e.loadingTicker,i=e.options,o=e.classes;return l.a.createElement(D,{onLoad:n},r?l.a.createElement("div",{style:Y},l.a.createElement(J,{size:36,style:z,loading:r})):l.a.createElement(A.a,{className:o.inputField},l.a.createElement(x.a,{htmlFor:"ticker-helper"},"Stock Ticker"),l.a.createElement(g.a,{native:X,value:a,onChange:t,inputProps:{name:"ticker",id:"ticker-simple"}},l.a.createElement("option",{value:"",key:"none"}),i.map((function(e){return l.a.createElement("option",{key:e.Symbol,value:e.Symbol},e.Name)})))))}));Z.propTypes={onChange:$.a.func.isRequired,value:$.a.string.isRequired,onLoad:$.a.func.isRequired,loadingTicker:$.a.bool.isRequired,options:$.a.arrayOf($.a.shape({Symbol:$.a.string.isRequired,Name:$.a.string.isRequired})),classes:$.a.shape({inputField:$.a.string.isRequired})};var ee=function(e){var t=function(e){return function(t){return e({type:"TICKER_VALUE",ticker:t})}}(e),a=function(e){return function(t){e({type:"LOADING_MATURITY",value:!0}),T("options/".concat(t,"/maturities")).then((function(t){e({type:"OPTION_MATURITIES",maturities:t.expirationDates})})).finally((function(){return e({type:"LOADING_MATURITY",value:!1})}))}}(e);return function(e){var n=e.target.value;t(n),a(n)}},te=function(e){return function(){!function(e){e({type:"LOADING_TICKER",value:!0}),T("options/tickers").then((function(t){return e({type:"TICKERS",tickers:t})})).finally((function(){return e({type:"LOADING_TICKER",value:!1})}))}(e),function(e){T("parameters/parameter_ranges").then((function(t){return e({type:"CONSTRAINTS",constraints:t})}))}(e)}},ae=Object(k.b)((function(e){var t=e.inputs,a=e.marketValues,n=e.loading;return{value:t.ticker,options:a.tickers,loadingTicker:n.ticker}}),(function(e){return{onChange:ee(e),onLoad:te(e)}}))(Z),ne=G(),re=Object(w.withStyles)(L)((function(e){var t=e.value,a=e.options,n=e.ticker,r=e.onChange,i=e.classes;return a.length>0?l.a.createElement(A.a,{className:i.inputField},l.a.createElement(x.a,{htmlFor:"ticker-helper"},"Option Maturity"),l.a.createElement(g.a,{native:ne,value:t,onChange:r(n),inputProps:{name:"maturity",id:"maturity-simple"}},l.a.createElement("option",{value:"",key:"none"}),a.map((function(e){var t=new Date(e),a=e.toString();return l.a.createElement("option",{key:a,value:a},t.toLocaleDateString())})))):null})),ie=function(e){var t=function(e){return function(t){return e({type:"MATURITY_VALUE",maturity:t})}}(e),a=function(e){return function(t,a){e({type:"LOADING_SPLINE",value:!0}),T("options/".concat(t,"/prices/").concat(a,"?minRelativeBidAskSpread=.1&minOpenInterest=25")).then((function(t){var a=t.curve,n=t.points,r=Object(R.a)(t,["curve","points"]);e({type:"SPLINE",spline:{curve:a,points:n}}),e({type:"MARKET_VALUES",attributes:r})})).finally((function(){e({type:"LOADING_SPLINE",value:!1})}))}}(e);return function(e){return function(n){var r=n.target.value;t(r),a(e,r)}}},le=Object(k.b)((function(e){var t=e.marketValues,a=e.inputs;return{value:a.maturity,ticker:a.ticker,options:t.maturities}}),(function(e){return{onChange:ie(e)}}))(re),oe=a(64),ce=a.n(oe),ue=a(509),se=Object(k.b)((function(e){var t=e.inputs,a=e.loading;return{maturity:t.maturity,loadingMaturity:a.maturity}}))((function(e){var t=e.nextTabLink,a=e.maturity,n=e.loadingMaturity;return a?l.a.createElement(ce.a,{color:"secondary",variant:"contained",component:ue.a,to:t},"View Results"):l.a.createElement("div",{style:Y},l.a.createElement(J,{size:36,style:z,loading:n}))})),me=function(){return l.a.createElement(h.Grid,{fluid:!0},l.a.createElement(h.Row,null,l.a.createElement(h.Col,{xs:12},l.a.createElement("p",null," ","This app calibrates and prices options using a general jump-diffusion with stochastic clock correlated with the diffusion component of the asset."," "),l.a.createElement("p",null,"Step 1: Select Fortune 500 Company!"),l.a.createElement(ae,null))),l.a.createElement(h.Row,null,l.a.createElement(h.Col,{xs:12},l.a.createElement("p",null,"Step 2: Select Option Maturity!"),l.a.createElement(le,null))),l.a.createElement(h.Row,null,l.a.createElement(h.Col,{xs:12},l.a.createElement(se,{nextTabLink:"/tab/2"}))))},pe=a(514),de=a(523),fe=a(512),ve=a(524),be={duration:0,onLoad:{duration:500}},ye={touchAction:"auto"},he={x:100,y:50},Ee=Object(w.withTheme)()((function(e){var t=e.spline,a=e.theme,n=e.loadingSpline;return t.curve?l.a.createElement(pe.a,{animate:be,containerComponent:l.a.createElement(de.a,{style:ye})},l.a.createElement(fe.a,{style:{data:{stroke:a.palette.primary.main}},data:t.curve,x:"log_strike",interpolation:"natural",y:"transformed_option"}),l.a.createElement(ve.a,{style:{data:{stroke:a.palette.secondary.main}},data:t.points,x:"log_strike",interpolation:"natural",y:"transformed_option"})):l.a.createElement("div",{style:B},l.a.createElement(J,{loading:n,style:z,size:36}))}));Ee.propTypes={spline:$.a.shape({curve:$.a.arrayOf($.a.shape({log_strike:$.a.number.isRequired,transformed_option:$.a.number.isRequired})),points:$.a.arrayOf($.a.shape({log_strike:$.a.number.isRequired,transformed_option:$.a.number.isRequired}))}),theme:$.a.shape({palette:$.a.shape({primary:$.a.shape({main:$.a.string.isRequired}).isRequired,secondary:$.a.shape({main:$.a.string.isRequired}).isRequired}).isRequired}),loadingSpline:$.a.bool.isRequired};var ge=Object(k.b)((function(e){var t=e.calibratorValues,a=e.loading;return{spline:t.spline,loadingSpline:a.splineChart}}))(Ee),ke=a(117),Re=a.n(ke),Oe=a(119),_e=a.n(Oe),Te=a(36),Ce=a.n(Te),Ie=a(118),Ae=a.n(Ie),Le=a(72),we=a.n(Le),je=a(241),xe=a(237),Ve=a.n(xe),Ne={marginTop:40},Se=function(e){var t=e.links;return l.a.createElement(Ve.a,{variant:"headline",gutterBottom:!0,style:Ne},"No data available! Check that"," ",t.map((function(e){var t=e.to,a=e.label;return l.a.createElement(ue.a,{to:t,key:t},a)})).reduce((function(e,t){return[].concat(Object(je.a)(Array.isArray(e)?e:[e]),[" or ",t])}))," ","has been filled in correctly!")},qe=Object(k.b)((function(e){var t=e.calibratorValues,a=e.loading;return{attributes:t.attributes,loadingSpline:a.splineChart}}))((function(e){var t=e.attributes;return e.loadingSpline&&!t.asset?null:t.asset?l.a.createElement(Re.a,null,l.a.createElement(Ae.a,null,l.a.createElement(we.a,null,l.a.createElement(Ce.a,null,"Asset Price"),l.a.createElement(Ce.a,null,"Risk Free Rate"),l.a.createElement(Ce.a,null,"Years to Maturity"))),l.a.createElement(_e.a,null,l.a.createElement(we.a,null,l.a.createElement(Ce.a,null,t.asset.toFixed(4)),l.a.createElement(Ce.a,null,t.rate.toFixed(4)),l.a.createElement(Ce.a,null,t.maturity.toFixed(4))))):l.a.createElement(Se,{links:[{to:"/tab/1",label:"Market Prices"}]})})),De=Object(k.b)((function(e){var t=e.calibratorValues,a=e.loading;return{attributes:t.attributes,loadingCalibrate:a.calibrate}}),(function(e){return{onClick:P(e)}}))((function(e){var t=e.attributes,a=e.onClick,n=e.loadingCalibrate;return function(e){var t=e.constraints,a=e.maturity,n=e.asset;return t&&a&&n}(t)?l.a.createElement("div",{style:Y},l.a.createElement(ce.a,{color:"secondary",variant:"contained",onClick:function(){return a(t)},disabled:n,key:"calibrate"},"Calibrate"),l.a.createElement(J,{key:"progress",size:36,style:z,loading:n})):null})),Me=a(242),Pe=Object(k.b)((function(e){return{calibrated:e.calibratorValues.calibrated}}))((function(e){var t=e.calibrated;return U(t)?null:l.a.createElement(Re.a,null,l.a.createElement(Ae.a,null,l.a.createElement(we.a,null,l.a.createElement(Ce.a,null,"Variable"),l.a.createElement(Ce.a,null,"Value"))),l.a.createElement(_e.a,null,Object.entries(t).map((function(e){var t=Object(Me.a)(e,2),a=t[0],n=t[1];return l.a.createElement(we.a,{key:a},l.a.createElement(Ce.a,null,a),l.a.createElement(Ce.a,null,n.toFixed(4)))}))))})),Ge=Object(k.b)((function(e){return{calibrated:e.calibratorValues.calibrated}}))((function(e){var t=e.calibrated,a=e.nextTabLink;return U(t)?null:l.a.createElement(ce.a,{color:"secondary",variant:"contained",component:ue.a,to:a},"View Charts")})),Ue={marginBottom:50},Ke=function(){return l.a.createElement(h.Grid,{fluid:!0,style:Ue},l.a.createElement(h.Row,null,l.a.createElement(h.Col,{xs:12},l.a.createElement(qe,null))),l.a.createElement(h.Row,null,l.a.createElement(h.Col,{xs:12},l.a.createElement(ge,null))),l.a.createElement(h.Row,null,l.a.createElement(h.Col,{xs:12},l.a.createElement("p",null,"The model will calibrate the characteristic function to approximate the fitted spline above. The fit will be better when the option prices have less arbitrage."),l.a.createElement(De,null))),l.a.createElement(h.Row,null,l.a.createElement(h.Col,{xs:12},l.a.createElement(Pe,null))),l.a.createElement(h.Row,null,l.a.createElement(h.Col,{xs:12},l.a.createElement(Ge,{nextTabLink:"/tab/3"}))))},Fe={call:"CALL",put:"PUT"},Ye=function(e){return function(t){return function(a){var n=a.sensitivity,r=Object(R.a)(a,["sensitivity"]);return t({type:"LOADING_PUT_CALL_IV_CHART",value:!0}),t({type:Fe[e],value:[]}),_("calculator/".concat(e,"/").concat(n),r).then((function(a){return function(e){return 0!==e.length&&!!e[0].iv}(a)&&t({type:"IV",value:a}),t({type:Fe[e],value:a})})).finally((function(){t({type:"LOADING_PUT_CALL_IV_CHART",value:!1})}))}}},Be=Ye("put"),ze=Ye("call"),He=function(e,t){return function(a){return function(n){return a({type:"LOADING_DENSITY_CHART",value:!0}),_("density/".concat(t),n).then((function(t){return a({type:e,value:t})})).finally((function(){a({type:"LOADING_DENSITY_CHART",value:!1})}))}}},We=He("DENSITY","density"),Je=He("RISK_METRICS","riskmetric"),Qe=a(520),$e=Object(w.withTheme)()((function(e){var t=e.call,a=e.put,n=e.theme,r=e.strikes,i=e.prices,o=e.sensitivity,c=e.loadingPutCall,u=r.map((function(e,t){return{strike:e,price:i[t]}})),s=n.palette.primary.main,m=n.palette.secondary.main;return t.length>0&&a.length>0?l.a.createElement(pe.a,{containerComponent:l.a.createElement(de.a,{style:ye}),animate:be},l.a.createElement(Qe.a,Object.assign({centerTitle:!0,title:"Calls and Puts"},he,{data:function(e,t){return[{name:"Call",symbol:{fill:e}},{name:"Put",symbol:{fill:t}}]}(s,m),orientation:"horizontal"})),l.a.createElement(fe.a,{style:{data:{stroke:s}},data:t,x:"at_point",interpolation:"natural",y:"value"}),l.a.createElement(fe.a,{style:{data:{stroke:m}},data:a,x:"at_point",interpolation:"natural",y:"value"}),"price"===o&&l.a.createElement(ve.a,{style:{data:{stroke:n.palette.secondary.main}},data:u,x:"strike",interpolation:"natural",y:"price"})):l.a.createElement("div",{style:B},l.a.createElement(J,{style:z,size:36,loading:c}))})),Xe=Object(k.b)((function(e){var t=e.pricerValues,a=e.calibratorValues,n=e.loading;return{call:t.call,put:t.put,strikes:a.attributes.strikes,prices:a.attributes.prices,loadingPutCall:n.putCallIVChart}}))($e),Ze=a(516),et=function(e,t){return[{x:-e.value_at_risk,y:0},{x:-e.value_at_risk,y:(a=t,n="value",a.reduce((function(e,t){return t[n]>e?t[n]:e}),Number.NEGATIVE_INFINITY))}];var a,n},tt=Object(w.withTheme)()((function(e){var t=e.density,a=e.theme,n=e.riskMetrics,r=e.loadingDensity;return t.length>0&&n.value_at_risk?l.a.createElement(pe.a,{animate:be,containerComponent:l.a.createElement(de.a,{style:ye})},l.a.createElement(Ze.a,Object.assign({},he,{x:53,text:["Risk Neutral Density","Value at Risk: ".concat(n.value_at_risk.toFixed(4)),"Expected Shortfall: ".concat(n.expected_shortfall.toFixed(4))]})),l.a.createElement(fe.a,{style:{data:{stroke:a.palette.primary.main}},data:t,x:"at_point",interpolation:"natural",y:"value"}),l.a.createElement(fe.a,{style:{data:{stroke:a.palette.secondary.main}},data:et(n,t)})):l.a.createElement("div",{style:B},l.a.createElement(J,{loading:r,style:z,size:36}))}));tt.propTypes={density:$.a.arrayOf($.a.shape({at_point:$.a.number.isRequired,value:$.a.number.isRequired})).isRequired,riskMetrics:$.a.shape({value_at_risk:$.a.number,expected_shortfall:$.a.number}).isRequired,loadingDensity:$.a.bool.isRequired,theme:$.a.shape({palette:$.a.shape({primary:$.a.shape({main:$.a.string.isRequired}).isRequired,secondary:$.a.shape({main:$.a.string.isRequired}).isRequired}).isRequired})};var at=Object(k.b)((function(e){var t=e.pricerValues,a=e.loading;return{density:t.density,riskMetrics:t.riskMetrics,loadingDensity:a.densityChart}}))(tt),nt=Object(w.withTheme)()((function(e){var t=e.impliedVolatility,a=e.theme,n=e.loadingIV;return t.length>0?l.a.createElement(pe.a,{containerComponent:l.a.createElement(de.a,{style:ye}),animate:be},l.a.createElement(Ze.a,Object.assign({},he,{text:"Implied Volatility"})),l.a.createElement(fe.a,{style:{data:{stroke:a.palette.primary.main}},data:t,x:"at_point",interpolation:"natural",y:"iv"})):l.a.createElement("div",{style:B},l.a.createElement(J,{style:z,size:36,loading:n}))}));nt.propTypes={impliedVolatility:$.a.arrayOf($.a.shape({at_point:$.a.number.isRequired,iv:$.a.number.isRequired})),loadingIV:$.a.bool.isRequired,theme:$.a.shape({palette:$.a.shape({primary:$.a.shape({main:$.a.string.isRequired}).isRequired,secondary:$.a.shape({main:$.a.string.isRequired}).isRequired}).isRequired})};var rt=Object(k.b)((function(e){var t=e.pricerValues,a=e.loading;return{impliedVolatility:t.impliedVolatility,loadingIV:a.putCallIVChart}}))(nt),it=[{value:"price",label:"Price"},{value:"delta",label:"Delta"},{value:"gamma",label:"Gamma"},{value:"theta",label:"Theta"}],lt=function(e,t,a,n){return function(r,i){var l=it[i].value;a(Object(M.a)({},n,{sensitivity:l})),t.push(C(e)+l)}},ot=function(e){var t=e.match,a=e.history,n=e.updateOptions,r=e.attributes;return l.a.createElement(p.a,{value:it.findIndex((function(e){return e.value===t.params.sensitivity})),onChange:lt(t,a,n,r),fullWidth:!0},it.map((function(e){var t=e.value,a=e.label;return l.a.createElement(f.a,{label:a,key:t})})))},ct=function(e){var t=Be(e),a=ze(e),n=We(e),r=Je(e);return function(e){var i=e.attributes,l=e.sensitivity,o=Object(M.a)({},i,{sensitivity:l});t(o),a(o),n(i),r(i)}},ut=function(e){var t=Be(e),a=ze(e);return function(e){t(e),a(e)}},st=Object(k.b)((function(e){var t=e.calibratorValues;return{attributes:Object(M.a)({},t.attributes,{},t.calibrated),calibrated:t.calibrated}}),(function(e){return{onLoad:ct(e),updateOptions:ut(e)}}))((function(e){var t=e.onLoad,a=e.attributes,n=e.match,r=e.history,i=e.updateOptions,o=e.calibrated;return U(o)?l.a.createElement(h.Grid,{fluid:!0},l.a.createElement(h.Row,null,l.a.createElement(h.Col,{xs:12},l.a.createElement(Se,{links:[{to:"/tab/1",label:"Market Prices"},{to:"/tab/2",label:"Calibration"}]})))):l.a.createElement(D,{onLoad:t,attributes:a,sensitivity:n.params.sensitivity},l.a.createElement(h.Grid,{fluid:!0},l.a.createElement(h.Row,null,l.a.createElement(h.Col,{xs:12},l.a.createElement(Xe,{sensitivity:n.params.sensitivity}))),l.a.createElement(h.Row,null,l.a.createElement(h.Col,{xs:12},l.a.createElement(ot,{match:n,history:r,attributes:a,updateOptions:i}))),l.a.createElement(h.Row,null,l.a.createElement(h.Col,{xs:12},l.a.createElement(rt,null))),l.a.createElement(h.Row,null,l.a.createElement(h.Col,{xs:12},l.a.createElement(at,null)))))})),mt=function(e,t){return function(a,n){t.push(C(e)+(n+1))}},pt=function(e){var t=e.match,a=e.history;return l.a.createElement(s.a,{position:"sticky"},l.a.createElement(p.a,{value:parseInt(t.params.tabId,10)-1,onChange:mt(t,a),fullWidth:!0},l.a.createElement(f.a,{label:"Market Options"}),l.a.createElement(f.a,{label:"Calibration"}),l.a.createElement(f.a,{label:"Charts and Graphs"})))},dt=function(){return[l.a.createElement(v.a,{key:"redirect"},l.a.createElement(b.a,{key:"redirectBegin",from:"/",to:"/tab/1",exact:!0}),l.a.createElement(b.a,{key:"redirectTab",from:"/tab/3",to:"/tab/3/".concat(it[0].value),exact:!0})),l.a.createElement(y.a,{key:"bannerroute",path:"/tab/:tabId",render:function(e){return l.a.createElement(pt,Object.assign({key:"appbar"},e))}}),l.a.createElement(y.a,{key:"marketoptions",path:"/tab/1",exact:!0,component:me}),l.a.createElement(y.a,{key:"calibration",path:"/tab/2",component:Ke,exact:!0}),l.a.createElement(y.a,{key:"charts",path:"/tab/3/:sensitivity",component:st,exact:!0})]},ft=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function vt(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(502);var bt=a(23),yt=Object(bt.b)({ticker:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TICKER_VALUE":return t.ticker;default:return e}},maturity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MATURITY_VALUE":return t.maturity;case"TICKER_VALUE":return"";default:return e}}}),ht=Object(bt.b)({maturities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPTION_MATURITIES":return t.maturities;case"TICKER_VALUE":return[];default:return e}},tickers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TICKERS":return t.tickers;default:return e}}}),Et=a(109),gt=K(0),kt=["lambda","mu_l","sig_l","sigma","v0","speed","eta_v","rho"],Rt={num_u:8,quantile:.01,prices:[],strikes:[]},Ot=Object(bt.b)({spline:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SPLINE":return{curve:F("log_strike","transformed_option",t.spline.curve,1e-5),points:gt(t.spline.points,"transformed_option")};case"TICKER_VALUE":return{};default:return e}},attributes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MARKET_VALUES":return Object(M.a)({},e,{},t.attributes);case"CONSTRAINTS":return Object(M.a)({},e,{constraints:kt.reduce((function(e,a){return Object(M.a)({},e,Object(Et.a)({},a,t.constraints[a]))}),{})});case"TICKER_VALUE":var a=e.constraints;return Object(M.a)({},Rt,{constraints:a});default:return e}},calibrated:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CALIBRATED_PARAMETERS":return t.parameters;case"TICKER_VALUE":return{};default:return e}}}),_t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case e:return n.value;default:return a}}},Tt=_t("CALL"),Ct=_t("PUT"),It=_t("IV"),At=_t("RISK_METRICS",{}),Lt=_t("DENSITY"),wt=Object(bt.b)({call:Tt,put:Ct,impliedVolatility:It,riskMetrics:At,density:Lt}),jt=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case e:return n.value;default:return a}}},xt=jt("LOADING_MATURITY"),Vt=jt("LOADING_TICKER"),Nt=jt("LOADING_CALIBRATE"),St=jt("LOADING_PUT_CALL_IV_CHART"),qt=jt("LOADING_DENSITY_CHART"),Dt=jt("LOADING_SPLINE"),Mt=Object(bt.b)({ticker:Vt,maturity:xt,calibrate:Nt,densityChart:qt,putCallIVChart:St,splineChart:Dt}),Pt=Object(bt.b)({inputs:yt,marketValues:ht,calibratorValues:Ot,pricerValues:wt,loading:Mt}),Gt=a(518),Ut=a(160),Kt=a.n(Ut),Ft=a(239),Yt=a.n(Ft),Bt={palette:{primary:Kt.a,secondary:Yt.a}},zt=Object(bt.c)(Pt),Ht=Object(w.createMuiTheme)(Bt);c.a.render(l.a.createElement(k.a,{store:zt},l.a.createElement(w.MuiThemeProvider,{theme:Ht},l.a.createElement(Gt.a,null,l.a.createElement(dt,null)))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/option_dashboard_mobile",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/option_dashboard_mobile","/service-worker.js");ft?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):vt(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):vt(e)}))}}()}},[[246,1,2]]]);
//# sourceMappingURL=main.87d9ad2d.chunk.js.map