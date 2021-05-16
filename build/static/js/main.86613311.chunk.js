(this["webpackJsonpzolve-new"]=this["webpackJsonpzolve-new"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},108:function(e,t,a){},126:function(e,t,a){},127:function(e){e.exports=JSON.parse("{}")},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),o=a.n(l),s=(a(102),a(103),a(34)),c=a(27),i=a(13),u=a(28),m=a(30),d=a(31),p=(a(108),a(62)),f=a.n(p),h=a(83),g=a(84),b=a.n(g);a(126);function v(e){var t=e.heading,a=e.logout,n=e.buttonName,l=e.buttonClass;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-light"},r.a.createElement("div",{className:"d-flex flex-row justify-content-between"},r.a.createElement("div",null,r.a.createElement("h4",null,r.a.createElement("b",null,t))),r.a.createElement("div",null,r.a.createElement("button",{className:l,onClick:function(){return a()}},n," ")))))}v.defaultProps={heading:"Default",logout:function(){},buttonName:"Logout",buttonClass:"btn-primary"};a(127);function E(e){return localStorage.setItem("isValid",e),function(t){t({type:"IS_VALID_USER",payload:e})}}var O=a(10),w=a(91),j=a.n(w),y=a(85),N=a.n(y),C=a(86),S=a.n(C),k=a(63),x=a.n(k),P=a(87),U=a.n(P);a(133);function _(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0% 10%;\n  @media (max-width: 840px) {\n    padding: 0% 5%;\n  }\n  @media (max-width: 720px) {\n    display: block;\n  }\n"]);return _=function(){return e},e}function V(){var e=Object(m.a)(["\n  margin-top: 100px;\n"]);return V=function(){return e},e}x.a.fcRoot(N.a,S.a,U.a);var D=d.a.div(V()),B=d.a.div(_()),I=function(){var e,t=Object(i.c)(),a=Object(n.useState)(new Date),l=Object(u.a)(a,2),o=l[0],s=l[1],c=Object(n.useState)(null),m=Object(u.a)(c,2),d=m[0],p=m[1],g=Object(n.useState)(),v=Object(u.a)(g,2),E=v[0],w=v[1],y=Object(n.useState)(),N=Object(u.a)(y,2),C=N[0],S=N[1],k=Object(n.useState)(!1),P=Object(u.a)(k,2),U=P[0],_=P[1],V=Object(n.useState)(!1),I=Object(u.a)(V,2),A=I[0],F=I[1],L=Object(i.d)((function(e){var t;return null===e||void 0===e||null===(t=e.homeData)||void 0===t?void 0:t.data})),R=function(e,t){_(!1),"size"===t?S(e):"pageNumber"===t&&w(e)},T=function(e){var t={mm:e.getMonth()+1,dd:e.getDate(),yy:e.getFullYear().toString().slice(-2),yyyy:e.getFullYear()};return"".concat(t.yyyy,"-").concat(t.mm>9?t.mm:"0"+t.mm,"-").concat(t.dd>9?t.dd:"0"+t.dd)},z=function(e,t){O.b.dismiss(),O.b[e](t,{position:"top-right",autoClose:1800,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null,A?r.a.createElement("div",null,"loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Start & End Date"),r.a.createElement(j.a,{selected:o,onChange:function(e){_(!1);var t=Object(u.a)(e,2),a=t[0],n=t[1];s(a),p(n)},startDate:o,endDate:d,selectsRange:!0,inline:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Page number"),r.a.createElement("input",{className:"form-control",type:"text",id:"input2",name:"pageNumber",placeholder:"Page number",value:E,onChange:function(e){return R(e.target.value,"pageNumber")}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Page Size"),r.a.createElement("input",{className:"form-control",type:"text",id:"input1",name:"size",placeholder:"Page Size",value:C,onChange:function(e){return R(e.target.value,"size")}}))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(){if(null!==d&&void 0!==E&&""!==E&&void 0!==C&&""!==C){F(!0);var e=T(o),a=T(d);t(function(e,t,a,n){return function(){var r=Object(h.a)(f.a.mark((function r(l){var o,s,c;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o="".concat("https://api.stackexchange.com/tags?","page=").concat(n,"&pagesize=").concat(a,"&fromdate=").concat(e,"&todate=").concat(t,"&order=desc&sort=popular&site=stackoverflow"),r.next=4,b.a.get(o);case 4:return 200===(null===(s=r.sent)||void 0===s?void 0:s.status)&&l({type:"GET_DATA",payload:(i=null===s||void 0===s||null===(c=s.data)||void 0===c?void 0:c.items,i.forEach((function(e){(e.name||e.count)&&(e.label=function(e){var t,a=e.split("-");if(-1===a)t=e;else{var n=a.join(" ");t=n}return t.charAt(0).toUpperCase()+t.slice(1)}(e.name),e.value=e.count)})),{type:"column2d",width:800,height:400,dataFormat:"json",dataSource:{chart:{caption:"Stack Exchange",xAxisName:"Language",yAxisName:"Counts",numberSuffix:"K",theme:"fusion"},data:i}})}),r.abrupt("return",s);case 9:return r.prev=9,r.t0=r.catch(0),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}var i}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()}(e,a,C,E)).then((function(e){var t;O.b.dismiss(),F(!1),0===(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.items.length)?_(!0):z("success","Data successfully fetched.")}))}else z("error","Please fill all the details.")}},"Filter")),Object.keys(L).length>0&&(null===L||void 0===L||null===(e=L.dataSource)||void 0===e?void 0:e.data.length)>0&&r.a.createElement("div",{style:{margin:"50px 0px"}},r.a.createElement(x.a,L)),U&&r.a.createElement(r.a.Fragment,null,z("warn","No data found. Please fill the detail again")))))},A=function(e){var t=Object(c.g)().search.match(/q=(.*)/),a=null===t||void 0===t?void 0:t[1],l=Object(n.useRef)(null);return r.a.createElement("div",{style:{marginTop:"100px"}},r.a.createElement("form",null,r.a.createElement("textarea",{ref:l,value:a,readOnly:!0})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(e){l.current.select(),document.execCommand("copy"),e.target.focus(),O.b.dismiss(),O.b.success("Great job! Copied.",{position:"top-right",autoClose:1800,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},"Copy")))},F=a(94),L=a.n(F),R=(a(189),function(){return r.a.createElement("div",null," ",r.a.createElement(L.a,{onTakePhoto:function(e){!function(e){console.log("takePhoto....",e)}(e)},onCameraStart:function(){return console.log("on camera on")},onCameraStop:function(){return console.log("on camera staop")},onCameraError:function(){return console.log("on camera Errro")},idealResolution:{width:640,height:480}}))});function T(e){var t=e.isValidUser,a=Object(i.c)();return r.a.createElement("div",null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{logout:function(){return a(E(!1))},heading:"Zolve",buttonName:"Logout",buttonClass:"btn btn-primary"}),r.a.createElement(c.b,{exact:!0,path:"/home",component:I}),r.a.createElement(c.b,{exact:!0,path:"/camera",component:R}),r.a.createElement(c.b,{exact:!0,path:"/",component:A})):r.a.createElement(c.a,{to:"/login"}))}var z=a(48),q=a(22),H=a(23),J=a(38),X=a(25),G=a(24),M=a(46),W=a.n(M),Y=(a(190),a(12));function K(){var e=Object(m.a)(["\n  text-align: left;\n"]);return K=function(){return e},e}var Z=d.a.label(K()),$=function(e){Object(X.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(q.a)(this,a),(n=t.call(this,e)).toastVisible=function(e){O.b.dismiss(),O.b.error(e,{position:"top-right",autoClose:1500,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},n.state={fields:{email:"",password:""},errors:{}},n.form=new W.a(Object(J.a)(n)),n.form.useRules({email:"required|email",password:"required"}),n.form.onformsubmit=function(e){return null===localStorage.getItem("email")&&null===localStorage.getItem("password")?n.toastVisible("not registered please registered first"):localStorage.getItem("email")!==e.email?n.toastVisible("email not matched"):localStorage.getItem("password")!==e.password?n.toastVisible("password not matched"):(n.props.authenticateUserAction(!0),void n.props.history.push("/home"))},n}return Object(H.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.form.handleSubmit},r.a.createElement("p",{className:"custom-input"},r.a.createElement(Z,null,"Email",r.a.createElement("input",{type:"email",name:"email",className:"mt-2 form-control",onBlur:this.form.handleBlurEvent,onChange:this.form.handleChangeEvent,value:this.state.fields.email,autoComplete:"off"})),r.a.createElement("label",{className:"error"},this.state.errors.email?this.state.errors.email:"")),r.a.createElement("p",{className:"custom-input"},r.a.createElement(Z,null,"Password",r.a.createElement("input",{type:"password",name:"password",className:"mt-2 form-control",onBlur:this.form.handleBlurEvent,onChange:this.form.handleChangeEvent,value:this.state.fields.password,autoComplete:"off"})),r.a.createElement("label",{className:"error"},this.state.errors.password?this.state.errors.password:"")),r.a.createElement("p",null,r.a.createElement("button",{type:"submit",className:"btn btn-secondary"},"Submit"))))}}]),a}(r.a.Component);var Q=Object(c.h)(Object(i.b)((function(e){return{isValidUser:e.isValidUser}}),(function(e){return Object(z.a)({dispatch:e},Object(Y.b)({authenticateUserAction:E},e))}))($));a(191),a(192),a(193);function ee(){var e=Object(m.a)(["\n  text-align: left;\n"]);return ee=function(){return e},e}var te=d.a.label(ee()),ae=function(e){Object(X.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(q.a)(this,a),(n=t.call(this,e)).state={fields:{name:"",email:"",password:"",confirmPassword:""},errors:{}},n.form=new W.a(Object(J.a)(n)),n.form.useRules({name:"required",email:"required|email",password:"required",confirmPassword:"required"}),n.form.onformsubmit=function(e){e.password!==e.confirmPassword?console.log("password not matched"):(localStorage.setItem("email",e.email),localStorage.setItem("password",e.password),n.props.history.push("/"))},n}return Object(H.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.form.handleSubmit},r.a.createElement("p",{className:"custom-input"},r.a.createElement(te,null,"Name",r.a.createElement("input",{type:"name",name:"name",className:"mt-2 form-control",onBlur:this.form.handleBlurEvent,onChange:this.form.handleChangeEvent,value:this.state.fields.name,autoComplete:"off"})),r.a.createElement("label",{className:"error"},this.state.errors.name?this.state.errors.name:"")),r.a.createElement("p",{className:"custom-input"},r.a.createElement(te,null,"Email",r.a.createElement("input",{type:"email",name:"email",className:"mt-2 form-control",onBlur:this.form.handleBlurEvent,onChange:this.form.handleChangeEvent,value:this.state.fields.email,autoComplete:"off"})),r.a.createElement("label",{className:"error"},this.state.errors.email?this.state.errors.email:"")),r.a.createElement("p",{className:"custom-input"},r.a.createElement(te,null,"Password",r.a.createElement("input",{type:"password",name:"password",className:"mt-2 form-control",onBlur:this.form.handleBlurEvent,onChange:this.form.handleChangeEvent,value:this.state.fields.password,autoComplete:"off"})),r.a.createElement("label",{className:"error"},this.state.errors.password?this.state.errors.password:"")),r.a.createElement("p",{className:"custom-input"},r.a.createElement(te,null,"Confirm Password",r.a.createElement("input",{type:"password",name:"confirmPassword",className:"mt-2 form-control",onBlur:this.form.handleBlurEvent,onChange:this.form.handleChangeEvent,value:this.state.fields.confirmPassword,autoComplete:"off"})),r.a.createElement("label",{className:"error"},this.state.errors.confirmPassword?this.state.errors.confirmPassword:"")),r.a.createElement("p",null,r.a.createElement("button",{type:"submit",className:"btn btn-secondary"},"Submit"))))}}]),a}(r.a.Component),ne=Object(c.h)(ae),re=function(e){Object(X.a)(a,e);var t=Object(G.a)(a);function a(){return Object(q.a)(this,a),t.apply(this,arguments)}return Object(H.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleClick,a=e.signup,n=e.login;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"custom-card"},n?r.a.createElement("div",null,r.a.createElement(Q,null),r.a.createElement("div",{className:"mt-2 d-flex"},r.a.createElement("span",null,"click here to"),r.a.createElement("div",{role:"link",onClick:function(){return t("signup")},className:"card-link ml-1"}," Sign Up?"))):null,a?r.a.createElement("div",null,r.a.createElement(ne,null),r.a.createElement("div",{className:"mt-2 d-flex"},r.a.createElement("span",null,"click here to"),r.a.createElement("div",{role:"link",onClick:function(){return t("login")},href:"0",className:"card-link ml-1"}," Login"))):null))}}]),a}(n.Component),le=(a(194),function(e){Object(X.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(q.a)(this,a),(n=t.call(this,e)).onClickHandle=function(e){return"login"===e?n.setState({login:!0,signUp:!1}):n.setState({login:!1,signUp:!0})},n.state={signUp:!1,login:!0},n}return Object(H.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"sub-container"},r.a.createElement("div",{className:"login-page"}),r.a.createElement(re,{signup:this.state.signUp,login:this.state.login,handleClick:this.onClickHandle}))))}}]),a}(n.Component));function oe(e){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/login",component:le}),r.a.createElement(T,{isValidUser:e.isValidUser}),r.a.createElement(c.b,{path:"/",render:function(){return r.a.createElement(c.a,{from:"/",to:"/login"})}}),r.a.createElement(c.a,{from:"*",to:"/login"}))))}var se=Object(i.b)((function(e){return{isValidUser:e.isValidUser}}),null)(oe);oe.defaultProps={isValidUser:!1};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(195);var ce={data:[],modalPopUp:!1},ie=JSON.parse(localStorage.getItem("isValid")),ue=Object(Y.c)({homeData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA":return{data:t.payload};case"MODAL_POP_UP":return Object(z.a)({},e,{modalPopUp:t.payload});default:return e}},isValidUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_VALID_USER":return t.payload;default:return e}}}),me=a(95),de=a(96),pe=a.n(de),fe=(a(200),Object(Y.e)(ue,Object(Y.d)(Object(Y.a)(me.a,pe.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__({trace:!0,traceLimit:25}):function(e){return e})));o.a.render(r.a.createElement(i.a,{store:fe},r.a.createElement(O.a,null),r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,a){e.exports=a(201)}},[[97,1,2]]]);
//# sourceMappingURL=main.86613311.chunk.js.map