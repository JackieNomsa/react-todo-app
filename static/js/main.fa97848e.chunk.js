(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),i=c.n(a),l=(c(13),c(8)),o=c(4),r=c(6),j=c(0);var d=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(o.a)(a,2),d=i[0],u=i[1],b=Object(n.useRef)(null),m=Object(n.useState)(0),O=Object(o.a)(m,2),p=O[0],f=O[1];return Object(n.useEffect)((function(){b.current.focus()})),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"my todo list"})}),Object(j.jsxs)("section",{children:[Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"text",placeholder:"enter todo here",value:c,onChange:function(e){s(e.target.value)},ref:b}),Object(j.jsx)("button",{className:"add",type:"submit",onClick:function(e){e.preventDefault(),c&&(u([].concat(Object(l.a)(d),[{id:p,todo:c,isCompleted:!1,myClass:"item"}])),s(""),f(p+1))},children:"add todo"})]}),Object(j.jsx)("ul",{className:"my-list",children:d.map((function(e){var t=e.id,c=e.todo,n=e.myClass,s=e.isCompleted;return Object(j.jsxs)("div",{className:"list-item",children:[Object(j.jsx)("li",{className:n,children:c}),Object(j.jsxs)("span",{children:[Object(j.jsx)("button",{className:"complete",onClick:function(){return function(e){d.map((function(t){return t.id===e&&(t.isCompleted=!0,t.myClass="item-completed"),t}))}(t)},children:s?" ":Object(j.jsx)(r.a,{})}),Object(j.jsx)("button",{className:"remove",onClick:function(){return function(e){var t=d.filter((function(t){return t.id!==e}));u(t)}(t)},children:s?" ":Object(j.jsx)(r.b,{})})]})]},t)}))})]}),Object(j.jsx)("button",{className:"clear-all",onClick:function(){u([])},children:"clear all"})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fa97848e.chunk.js.map