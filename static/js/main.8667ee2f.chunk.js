(this["webpackJsonpcurrency-changer-react"]=this["webpackJsonpcurrency-changer-react"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),l=(n(9),n(1)),u=(n(10),function(e){var t=e.children;return r.a.createElement("div",{className:"container"},t)}),i=(n(11),function(e){var t=e.name;return r.a.createElement("footer",{className:"footer"},"\xa9",t)}),m=(n(12),function(e){var t=e.result;return r.a.createElement("div",{className:"form__result"},void 0!==t?r.a.createElement(r.a.Fragment,null,t.fromAmount,"\xa0PLN\xa0=",r.a.createElement("strong",null," ",t.toAmount,"\xa0",t.currency)):"")}),s=function(e){var t=e.amount,n=e.changeAmount;return r.a.createElement("input",{className:"form__userAction",type:"number",step:"0.01",required:!0,autoFocus:!0,placeholder:"Wpisz kwot\u0119",min:"0.01",value:t,onChange:n})},f=[{id:1,shortname:"EUR",fullname:"Euro",value:4.3988},{id:2,shortname:"USD",fullname:"Dolar ameryka\u0144ski",value:3.7227},{id:3,shortname:"GBP",fullname:"Funt szterling",value:4.8692},{id:4,shortname:"CHF",fullname:"Frank szwajcarski",value:4.0906}],v=function(e){var t=e.currency,n=e.handleCurrencySelect;return r.a.createElement("select",{value:t,required:!0,name:"currencies",className:"form__userAction",onChange:n},r.a.createElement("option",{className:"form__currency",value:""},"Rozwi\u0144, aby wybra\u0107 walut\u0119"),f.map((function(e){var t=e.id,n=e.shortname,a=e.fullname;return r.a.createElement("option",{className:"form__currency",key:t,value:n},a)})))},d=(n(13),function(e){var t=e.spanContent,n=e.userActionField;return r.a.createElement("label",{className:"form__label"},r.a.createElement("span",{className:"form__span"},t,"*:"),n)}),E=(n(14),function(){var e=Object(a.useState)(new Date),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=setInterval((function(){c((function(e){return new Date}))}),1e3);return function(){clearInterval(e)}}),[]);var o=n.toLocaleDateString(void 0,{day:"numeric",month:"long",weekday:"long"}),u=n.toLocaleTimeString();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"clock"},"Dzisiaj jest ",o,", ",u))}),h=(n(15),function(e){var t=e.countResult,n=e.result,c=Object(a.useState)(""),o=Object(l.a)(c,2),u=o[0],i=o[1],f=Object(a.useState)(""),h=Object(l.a)(f,2),p=h[0],y=h[1];return r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(u,p),i(""),y("")}},r.a.createElement(E,null),r.a.createElement("h1",{className:"form__title"},"Przelicznik walut"),r.a.createElement(d,{spanContent:"Kwota w z\u0142",userActionField:r.a.createElement(s,{amount:u,changeAmount:function(e){var t=e.target;i(t.value)}})}),r.a.createElement(d,{spanContent:"Waluta",userActionField:r.a.createElement(v,{currency:p,handleCurrencySelect:function(e){var t=e.target;y(t.value)}})}),r.a.createElement("button",{className:"form__button"},"Przelicz"),r.a.createElement("p",{className:"form__info"},"Waluty przeliczane s\u0105 na podstawie danych z tabeli nr 158/A/NBP/2020 z dnia 2020-08-14 "),r.a.createElement(m,{result:n}))});var p=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement(u,null,r.a.createElement(h,{countResult:function(e,t){var n=f.find((function(e){return e.shortname===t})).value;c({fromAmount:+e,toAmount:(e/n).toFixed(3),currency:t})},result:n}),r.a.createElement(i,{name:"Krzysztof Kwieci\u0144ski 2020"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.8667ee2f.chunk.js.map