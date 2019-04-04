(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./doc/installation/getting-started.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),m=t("./node_modules/@mdx-js/tag/dist/index.js");function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},m=Object.keys(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)t=m[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components;r(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:n},o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"prerequisites"}},"Prerequisites"),o.a.createElement(m.MDXTag,{name:"p",components:n},"To start developing Lime Web Components, you need to have the following installed:"),o.a.createElement(m.MDXTag,{name:"ul",components:n},o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Python 3"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"node and npm"),o.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"lime-project")),o.a.createElement(m.MDXTag,{name:"p",components:n},"We recommend using the latest version of npm and lime-project, and the LTS version of node."),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"creating-a-new-web-component"}},"Creating a new web component"),o.a.createElement(m.MDXTag,{name:"p",components:n},"To create a new web component you need a plugin created with ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lime-project"),". Once a plugin has been created, a new web component can be created by executing the following from the plugin root directory:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"lime-project generate web-component <my-component>\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"where ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<my-component>")," is the name of the component."),o.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"starting-the-dev-environment"}},"Starting the dev environment"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Once a web component has been created, the dev environment can be started by going to the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<plugin_module>/web_components/lwc-components")," directory inside the plugin and running:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"npm start\n")),o.a.createElement(m.MDXTag,{name:"p",components:n},"After the environment has started, a preview of the generated web component can be found at ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://localhost:3000"}},"http://localhost:3000")))}}}]);