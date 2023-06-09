(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(9),s=n.n(c),l=(n(8),n(5)),i=n(2),r=(n(19),n(0)),j=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})},u=(n(21),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by Year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onSave(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2023",children:"2023"}),Object(r.jsx)("option",{value:"2024",children:"2024"}),Object(r.jsx)("option",{value:"2025",children:"2025"})]})]})})}),d=(n(22),n(23),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__day",children:n}),Object(r.jsx)("div",{className:"expense-date__year",children:a})]})}),o=function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(j,{className:"expense-item card",children:[Object(r.jsx)(d,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["\u0930\u0941. ",e.amount]})]})]})})},b=(n(24),function(e){var t=e.filteredExpenses;return 0===t.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"NO Any Expenses"}):Object(r.jsx)("ul",{className:"expenses-list",children:t.map((function(e){return Object(r.jsx)(o,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),x=n(10),O=(n(25),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),v=(n(26),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(r.jsx)(v,{dataPoints:n})},m=(n(27),function(e){var t=Object(a.useState)("2023"),n=Object(i.a)(t,2),c=n[0],s=n[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(r.jsx)("div",{children:Object(r.jsxs)(j,{className:"expenses",children:[Object(r.jsx)(h,{expenses:l}),Object(r.jsx)(u,{selected:c,onSave:function(e){s(e)}}),Object(r.jsx)(b,{filteredExpenses:l})]})})}),p=n(6),f=(n(28),function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),u=j[0],d=j[1],o=Object(a.useState)(""),b=Object(i.a)(o,2),x=b[0],O=b[1],v=(new Date).toISOString().substring(0,10);return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:u,date:new Date(x)};e.onSaveExpenseData(n),s(""),O(""),d(""),e.onCancel()},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{className:"hi",children:"Title:"}),Object(r.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount:"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:u,onChange:function(e){d(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date:"}),Object(r.jsx)("input",{type:"date",min:"2022-01-01",max:v,value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{onClick:e.onCancel,children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),N=(n(29),function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!c&&Object(r.jsx)("button",{onClick:function(){s(!0)},children:"Add New Expense"}),c&&Object(r.jsx)(f,{onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)},onCancel:function(){s(!1)}})]})}),_=[{id:"e1",title:"Toilet Paper",date:new Date("December 17, 2023 03:24:00"),amount:200.12},{id:"e2",title:"Sandwich",date:new Date("June 17, 2023 03:24:00"),amount:10},{id:"e3",title:"Car Insurance",date:new Date,amount:300}],g=function(){var e=Object(a.useState)(_),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"heading",children:"Expense Tracker"}),Object(r.jsx)(N,{onAddExpense:function(e){c((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(r.jsx)(m,{items:n})]})};s.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(g,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.0f3f0dfd.chunk.js.map