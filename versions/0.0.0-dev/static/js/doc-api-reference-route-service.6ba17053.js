(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./doc/api-reference/route-service.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),m=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function o(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}var p=function(e){var n=e.components;o(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"p",components:n},"Service for routing"),m.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"index"}},"Index"),m.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"methods"}},"Methods"),m.a.createElement(r.MDXTag,{name:"ul",components:n},m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"dashboard"),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"limeObject"),m.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"table")),m.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"methods-1"}},"Methods"),m.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"dashboard"}},"dashboard"),m.a.createElement(r.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"dashboard"),"(): ",m.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"any")),m.a.createElement(r.MDXTag,{name:"p",components:n},"Navigate to a predefined route"),m.a.createElement(r.MDXTag,{name:"p",components:n},m.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"any")),m.a.createElement(r.MDXTag,{name:"hr",components:n}),m.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"limeobject"}},"limeObject"),m.a.createElement(r.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"limeObject"),"(",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"limetype"),": string, ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"id"),": number): ",m.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"any")),m.a.createElement(r.MDXTag,{name:"p",components:n},m.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(r.MDXTag,{name:"table",components:n},m.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"limetype")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the limetype of the object to route to")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"id")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the id of the limeobject to route to")))),m.a.createElement(r.MDXTag,{name:"p",components:n},m.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"any")),m.a.createElement(r.MDXTag,{name:"hr",components:n}),m.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"table"}},"table"),m.a.createElement(r.MDXTag,{name:"p",components:n},"\u25b8 ",m.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"table"),"(",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"limetype"),": string, ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"filter?"),": Expression): ",m.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"any")),m.a.createElement(r.MDXTag,{name:"p",components:n},"NOTE: At the moment, the table view might not be able to display what filters are applied correctly if the\nexpression contains anything that can not be directly mapped to a column filter. The table will display the\ncorrect filtered selection of data, but there will be no indication of what is actually displayed to the user\nif a complex filter expression with AND/OR groupings are used."),m.a.createElement(r.MDXTag,{name:"p",components:n},m.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Parameters:")),m.a.createElement(r.MDXTag,{name:"table",components:n},m.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"limetype")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the limetype of the table to route to")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"filter?")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Expression"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"filter expression to apply to the table")))),m.a.createElement(r.MDXTag,{name:"p",components:n},m.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Returns:")," ",m.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"any")))};function l(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}n.default=function(e){var n=e.components;l(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"routeservice"}},"RouteService"),m.a.createElement(p,null))}}}]);