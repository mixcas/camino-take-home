(this["webpackJsonpcamino-take-home"]=this["webpackJsonpcamino-take-home"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(32)},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),l=n.n(o),s=n(4),c=n(2),i={open:!1},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_HELP":return{open:!e.open};default:return e}},m=n(7),p=n(5),d={1:{title:"Basic Information",description:"Tell us a little about yourself and your bussines loan needs"},2:{title:"Business Information",description:"Tell us a little about your your bussines"},3:{title:"Basic Information",description:"Tell us a little about yourself and your bussines loan needs"}},f={currentStep:1,stepTitle:d[1].title,stepDescription:d[1].description,totalSteps:Object.keys(d).length,formValues:{firstName:"",lastName:"",email:"",mobilePhoneNumber:"",ownBusiness:null,businessName:"",loanAmount:"",nineMonthsBusiness:null,purpose:null},errors:{}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREASE_STEP":var n=e.currentStep+1;return Object(p.a)({},e,{currentStep:n,stepTitle:d[n].title,stepDescription:d[n].description});case"SET_FORM_VALUE":var a=e.formValues;return Object(p.a)({},e,{formValues:Object(p.a)({},a,Object(m.a)({},t.field,t.data))});case"SET_ERRORS":return Object(p.a)({},e,{errors:Object(p.a)({},e.errors,{},t.data)});default:return e}},E=Object(c.c)({help:u,steps:h}),b=[n(13).a],v=c.d.apply(void 0,[c.a.apply(void 0,b)].concat([])),g=Object(c.e)(E,{},v),N=(n(25),n(26),n(14)),x=(n(27),function(e){var t=e.currentStep,n=e.totalSteps;return r.a.createElement("div",{className:"stepper-container"},"Step ",t," of ",n,r.a.createElement("div",{className:"stepper-steps"},Object(N.a)(Array(n).keys()).map((function(e,n){return r.a.createElement("span",{key:n,className:"stepper-step ".concat(t===n+1?"active-step":"")})}))))}),y=(n(28),function(e){var t=e.name,n=e.type,a=void 0===n?"text":n,o=e.error,l=e.label,s=e.onChange,c=e.value,i=e.required,u=e.options;switch(a){case"radio-select":return r.a.createElement("div",{className:"input-container radio-select"},r.a.createElement("h2",{className:i?"required":""},l),Object.keys(u).map((function(e){var n=u[e];return r.a.createElement("label",{key:"".concat(t,"-").concat(n),htmlFor:"".concat(t,"-").concat(n)},r.a.createElement("input",{id:"".concat(t,"-").concat(n),type:"radio",onChange:s,checked:c===n,value:n}),e)})),o?r.a.createElement("p",{className:"field-error"},o):null);case"select":return r.a.createElement("div",{className:"input-container select"},r.a.createElement("label",{className:i?"required":"",htmlFor:t},l),r.a.createElement("select",{id:t,onChange:s},r.a.createElement("option",{value:""},"Select"),u.map((function(e,t){return r.a.createElement("option",{value:t,key:t},e)}))),o?r.a.createElement("p",{className:"field-error"},o):null);default:return r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{className:i?"required":"",htmlFor:t},l),r.a.createElement("input",{id:t,name:t,type:a,onChange:s,value:c}),o?r.a.createElement("p",{className:"field-error"},o):null)}}),w=["Expansion","Working capital","Payroll","Purchase a business","Purchase a franchise","Equipment","Real estate","Buy out a partner","Start a business","Finance Accounts Receivable","Other"],S=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm,k=function(e){var t=e.description,n=e.nextStep,a=e.setFieldValue,o=e.formValues,l=e.setErrors,s=e.errors,c=function(e){var t={};return Object.keys(e).forEach((function(n){var a=e[n];""===a||null===a?t[n]="This field is required":"email"!==n||function(e){var t=S.test(e);return console.log(t),t}(a)?t[n]=!1:t[n]="Value should be a valid email"})),l(t),!Object.keys(t).filter((function(e){return t[e]})).length};return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"step-description"},t),r.a.createElement("p",{className:"required-notice"},"* required"),r.a.createElement(y,{required:!0,label:"First Name",name:"first-name",type:"text",onChange:function(e){return a("firstName",e.target.value)},value:o.firstName,error:s.firstName}),r.a.createElement(y,{required:!0,label:"Last Name",name:"last-name",type:"text",onChange:function(e){return a("lastName",e.target.value)},value:o.lastName,error:s.lastName}),r.a.createElement(y,{required:!0,label:"Email",name:"email",type:"email",onChange:function(e){return a("email",e.target.value)},value:o.email,error:s.email}),r.a.createElement(y,{required:!0,label:"Mobile Phone Number",name:"mobilePhoneNumber",type:"mobilePhoneNumber",onChange:function(e){return a("mobilePhoneNumber",e.target.value)},value:o.mobilePhoneNumber,error:s.mobilePhoneNumber}),r.a.createElement(y,{required:!0,label:"Do you own a business?",name:"own-bussines",type:"radio-select",onChange:function(e){return a("ownBusiness",e.target.value)},value:o.ownBusiness,error:s.ownBusiness,options:{Yes:"true",No:"false"}}),r.a.createElement(y,{required:!0,label:"Business Name",name:"business-name",type:"text",onChange:function(e){return a("businessName",e.target.value)},value:o.businessName,error:s.businessName}),r.a.createElement(y,{required:!0,label:"Desired Loan Amount",name:"loan-amount",type:"text",onChange:function(e){return a("loanAmount",e.target.value)},value:o.loanAmount,error:s.loanAmount}),r.a.createElement(y,{required:!0,label:"Purpose of Loan",name:"purpose-of-loan",type:"select",onChange:function(e){return a("purpose",e.target.value)},value:o.purpose,error:s.purpose,options:w}),r.a.createElement(y,{required:!0,label:"Have you been in business for at least 9 months??",name:"nine-months-business",type:"radio-select",onChange:function(e){return a("nineMonthsBusiness",e.target.value)},value:o.nineMonthsBusiness,error:s.nineMonthsBusiness,options:{Yes:"true",No:"false"}}),r.a.createElement("button",{className:"form-button",onClick:function(e){e.preventDefault(),c(o)&&n()}},"Next"))},C=Object(s.b)((function(e){var t=e.steps,n=t.currentStep,a=t.stepDescription;return{currentStep:n,stepTitle:t.stepTitle,stepDescription:a,totalSteps:t.totalSteps,formValues:t.formValues,errors:t.errors}}),(function(e){return{increaseStep:function(){return e({type:"INCREASE_STEP"})},setFieldValue:function(t,n){return e(function(e,t){return console.log(e,t),{type:"SET_FORM_VALUE",field:e,data:t}}(t,n))},setErrors:function(t){return e({type:"SET_ERRORS",data:t})}}}))((function(e){var t=e.currentStep,n=e.stepTitle,a=e.stepDescription,o=e.totalSteps,l=e.increaseStep,s=e.formValues,c=e.setFieldValue,i=e.setErrors,u=e.errors;return r.a.createElement("div",{className:"steps"},r.a.createElement("header",{className:"steps-header"},r.a.createElement("div",{className:"container steps-header-container"},r.a.createElement("h2",{className:"step-title"},"Step ",t,": ",r.a.createElement("span",{className:"bold"},n)),r.a.createElement(x,{currentStep:t,totalSteps:o}))),r.a.createElement("div",{className:"container step-container"},function(){switch(t){case 1:return r.a.createElement(k,{description:a,nextStep:l,setFieldValue:c,formValues:s,errors:u,setErrors:i});case 2:return r.a.createElement("p",null,"This would be step 2 form")}}()))})),O=function(){return r.a.createElement("header",{className:"header dark-blue-background"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:"logo",src:"logo_white.svg",alt:"Camino Financial"}),r.a.createElement("button",{className:"language-button"},"Espa\xf1ol")))},T=(n(29),function(e){var t=e.text,n=e.icon,a=e.href;return r.a.createElement("button",{className:"contact-button",onClick:function(e){return window.location=a}},n?r.a.createElement("span",{className:"contact-button-icon"},n):null,t?r.a.createElement("span",{className:"contact-button-text"},t):null)}),j=(n(30),Object(s.b)((function(e){return e.help}),(function(e){return{toggleHelp:function(){return e({type:"TOGGLE_HELP"})}}}))((function(e){var t=e.open,n=e.toggleHelp,a={height:t?164:0,opacity:t?1:0};return r.a.createElement("div",{className:"help dark-blue-background"},r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"help-toggle",onClick:n},t?r.a.createElement("img",{src:"up-chevron.svg",alt:"Hide help"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"help.svg",alt:"Show help"}),r.a.createElement("span",null,"Help"))),r.a.createElement("div",{className:"help-drawer-container"},r.a.createElement("div",{className:"help-drawer",style:a},r.a.createElement("p",{className:"help-text"},"Need help? Call or chat with us directly"),r.a.createElement("div",{className:"contact-buttons"},r.a.createElement(T,{text:"Call",href:"tel:8008520655",icon:r.a.createElement("img",{src:"call.svg",alt:"Call us"})}),r.a.createElement(T,{text:"Email",href:"mailto:info@caminofinancial.com",icon:r.a.createElement("img",{src:"chat.svg",alt:"Email us"})}))))))})));var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(j,null),r.a.createElement(C,null))},A=(n(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(s.a,{store:g},r.a.createElement(q,null)),document.getElementById("root")),console.log("NODE_ENV","production"),function(e){if("serviceWorker"in navigator){if(new URL("/camino-take-home",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/camino-take-home","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(t,e)}))}}()}],[[15,1,2]]]);
//# sourceMappingURL=main.d6d03d59.chunk.js.map