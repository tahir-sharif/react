(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(8),r=a.n(n),l=(a(14),a(15),a(9)),i=a(5),o=a(2),j=a(3),d=(a(16),a(0)),u=function(e){var t=e.inputError,a=e.inputFormData,s=e.inputFormDataHandler,c=e.closeForm,n=e.otherSelectBox,r=e.inputFormSubmit;document.onkeyup=function(e){"Escape"===e.code?c():"Enter"===e.code&&r()};var l=a.name,i=a.marks,o=a.totalMarks;return Object(d.jsxs)("div",{className:"inputFormContainer",children:[Object(d.jsx)("div",{className:"inputFormOverlay fade",onClick:c}),Object(d.jsxs)("div",{className:"inputForm scale",children:[Object(d.jsx)("h1",{children:"Student's Information"}),Object(d.jsx)("div",{className:"errMsg",children:t||""}),Object(d.jsx)("input",{name:"name",type:"text",placeholder:"Student's name",autoComplete:"off",spellCheck:"false",onChange:s,autoFocus:!0,value:l}),Object(d.jsxs)("div",{className:"select",children:[Object(d.jsxs)("select",{name:"class",className:n?"other":"",onChange:s,children:[Object(d.jsx)("option",{value:"",children:"Select class"}),Object(d.jsx)("option",{value:"matric",children:"Matric (850)"}),Object(d.jsx)("option",{value:"nine",children:"Nine (425)"}),Object(d.jsx)("option",{value:"other",children:"Custom"})]}),n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"dash"}),Object(d.jsx)("input",{autoFocus:!0,name:"totalMarks",type:"number",placeholder:"Total marks",className:"other",autoComplete:"off",spellCheck:"false",onChange:s,value:o})]}):""]}),Object(d.jsx)("input",{name:"marks",type:"number",placeholder:"Your marks",className:"dim",autoComplete:"off",onChange:s,value:i,disabled:function(){if(n)return!a.totalMarks}()}),Object(d.jsx)("button",{onClick:r,children:"Calculate"})]})]})},b=function(e){var t=e.inputData,a=e.srNo,s=e.showInfo,c=t.name,n=t.marks,r=t.totalMarks,l=t.id,i=(n/r*100).toFixed(2),o=function(){var e="?";return i<35?e="F":i<40?e="D":i<50?e="E":i<60?e="C":i<70?e="B":i<80?e="A":i<90?e="A+1":i<=100&&(e="A++"),e}();return Object(d.jsxs)("div",{className:"rows fadeLarge",onClick:function(){s(l)},children:[Object(d.jsx)("div",{className:"row rowNum",children:a}),Object(d.jsx)("div",{className:"row",children:c}),Object(d.jsx)("div",{className:"row",children:n}),Object(d.jsx)("div",{className:"row ".concat("F"===o?"fail":""),children:o}),Object(d.jsxs)("div",{className:"row",children:[i,"%"]})]})},m=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!1),r=Object(j.a)(n,2),m=r[0],O=r[1],h=Object(s.useState)(!1),f=Object(j.a)(h,2),x=f[0],v=f[1],p=function(){O(!1),v(!1),A({name:"",marks:"",totalMarks:""})},N=Object(s.useState)(!1),k=Object(j.a)(N,2),C=k[0],g=k[1],S=Object(s.useState)([]),w=Object(j.a)(S,2),F=w[0],M=w[1];Object(s.useEffect)((function(){D()}),[]),Object(s.useEffect)((function(){localStorage.setItem("resultsData",JSON.stringify(F))}),[F]);var D=function(){var e=localStorage.getItem("resultsData");M(e?JSON.parse(e):[])},y=Object(s.useState)({name:"",marks:"",totalMarks:""}),I=Object(j.a)(y,2),E=I[0],A=I[1],B=function(e){var t=F.filter((function(t){return t.id===e}));c(t)},J=function(){c([])},T=function(){if(a.length){var e=F.filter((function(e){return a[0].id!==e.id}));console.log(e),M(e),J()}else alert("can't delete")};return Object(d.jsxs)("div",{className:"resultBox",children:[m?Object(d.jsx)(u,{inputFormData:E,inputError:x,inputFormDataHandler:function(e){v(!1);var t=e.target.name,a=e.target.value;if("class"===t){g(!1);var s="";"matric"===a?s=850:"nine"===a?s=425:"other"===a&&g(!0),A(Object(o.a)(Object(o.a)({},E),{},{totalMarks:s,marks:""}))}else if("marks"===t){var c=E.totalMarks;A(+a>+c?Object(o.a)(Object(o.a)({},E),{},{marks:c}):Object(o.a)(Object(o.a)({},E),{},{marks:a}))}else{var n;A(Object(o.a)(Object(o.a)({},E),{},(n={},Object(i.a)(n,t,a),Object(i.a)(n,"id",(new Date).getTime()),n)))}},closeForm:p,otherSelectBox:C,inputFormSubmit:function(){var e=E.name,t=E.marks,a=E.totalMarks;e&&t&&a?(M([].concat(Object(l.a)(F),[E])),p()):v("All fields are required !")}}):"",m?"":Object(d.jsx)("div",{className:"formBtn fade scale",onClick:function(){O(!0)},children:Object(d.jsx)("button",{children:"Add Student's Info"})}),Object(d.jsx)("h1",{children:"Percentage Calculator"}),F.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("span",{children:"Sr No#"}),Object(d.jsx)("span",{children:"Name"}),Object(d.jsx)("span",{children:"Marks"}),Object(d.jsx)("span",{children:"Grade"}),Object(d.jsx)("span",{children:"Percentage"})]}),Object(d.jsx)("div",{className:"rowContainer",children:F.map((function(e,t){return Object(d.jsx)(b,{srNo:t+1,inputData:e,showInfo:B},t)}))})]}):Object(d.jsxs)("div",{className:"noStudent fade",children:["Student's Data will be shown here ",Object(d.jsx)("br",{}),"Try with adding a new student !"]}),a.map((function(e,t){return Object(d.jsxs)("div",{className:"studentsInfo",children:[Object(d.jsx)("div",{onClick:J,className:"studentsInfoOverlay"}),Object(d.jsxs)("div",{className:"studentsInfoDiv fade",children:[Object(d.jsx)("h2",{children:"Student Information"}),Object(d.jsxs)("div",{className:"studentsRow",children:[Object(d.jsxs)("div",{className:"rowContent",children:[Object(d.jsx)("div",{className:"half",children:"Name : "}),Object(d.jsx)("div",{className:"half",children:e.name})]}),Object(d.jsxs)("div",{className:"rowContent",children:[Object(d.jsx)("div",{className:"half",children:"Marks : "}),Object(d.jsx)("div",{className:"half",children:e.marks})]}),Object(d.jsxs)("div",{className:"rowContent",children:[Object(d.jsx)("div",{className:"half",children:"Total Marks : "}),Object(d.jsx)("div",{className:"half",children:e.totalMarks})]}),Object(d.jsxs)("div",{className:"rowContent",children:[Object(d.jsx)("div",{className:"half",children:"Percentage : "}),Object(d.jsxs)("div",{className:"half",children:[(e.marks/e.totalMarks*100).toFixed(2),"%"]})]})]}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{style:{backgroundColor:"#ff5200"},onClick:T,children:Object(d.jsx)("i",{className:"fas fa-trash-alt"})}),Object(d.jsx)("button",{onClick:J,children:"Okay"})]})]})]},t)}))]})};var O=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(m,{})})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.451fa68b.chunk.js.map