(this.webpackJsonpmyproject=this.webpackJsonpmyproject||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a(4),s=a.n(r),i=a(3),o="873a118388f8009a0d5308f44f5b379d",d="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)({}),u=Object(i.a)(s,2),l=u[0],h=u[1];return Object(c.jsx)("div",{className:"undefined"!=typeof l.main&&l.main.temp>16?"app warm":"app",children:Object(c.jsxs)("main",{children:[Object(c.jsx)("div",{className:"search-box",children:Object(c.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return r(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(d,"weather?q=").concat(a,"&units=metric&appid=").concat(o)).then((function(e){return e.json()})).then((function(e){h(e),r(""),console.log(e)}))}})}),"undefined"!=typeof l.main?Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"location-box",children:[Object(c.jsxs)("div",{className:"location",children:[l.name,", ",l.sys.country]}),Object(c.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),c=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return"".concat(t," ").concat(a," ").concat(c," ").concat(n)}(new Date)})]}),Object(c.jsxs)("div",{className:"weather-box",children:[Object(c.jsxs)("div",{className:"temp",children:[Math.round(l.main.temp),"\xb0c"]}),Object(c.jsx)("div",{className:"weather",children:l.weather[0].main})]})]}):""]})})};a(10);s.a.render(Object(c.jsx)(u,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.f4904659.chunk.js.map