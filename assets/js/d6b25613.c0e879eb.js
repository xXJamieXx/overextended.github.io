"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9155],{9613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5264:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(5443),a=r(3010),i=(r(9496),r(9613)),s=["components"],l={},o="Insert",c={unversionedId:"oxmysql/Usage/insert",id:"oxmysql/Usage/insert",title:"Insert",description:"Inserts a new entry into the database and returns the insert id for the row, if valid.",source:"@site/docs/oxmysql/Usage/insert.md",sourceDirName:"oxmysql/Usage",slug:"/oxmysql/Usage/insert",permalink:"/docs/oxmysql/Usage/insert",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Usage/insert.md",tags:[],version:"current",lastUpdatedAt:1657171779,formattedLastUpdatedAt:"7/7/2022",frontMatter:{},sidebar:"oxmysql",previous:{title:"Usage",permalink:"/docs/oxmysql/Usage/"},next:{title:"Prepare",permalink:"/docs/oxmysql/Usage/prepare"}},u={},p=[{value:"Lua",id:"lua",level:2},{value:"Callback",id:"callback",level:3},{value:"Promise",id:"promise",level:3},{value:"JavaScript",id:"javascript",level:2},{value:"Callback",id:"callback-1",level:3},{value:"Promise",id:"promise-1",level:3}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"insert"},"Insert"),(0,i.kt)("p",null,"Inserts a new entry into the database and returns the insert id for the row, if valid."),(0,i.kt)("h2",{id:"lua"},"Lua"),(0,i.kt)("h3",{id:"callback"},"Callback"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:insert\n-- alias: MySQL.Async.insert\n\nMySQL.insert('INSERT INTO users (identifier, firstname, lastname) VALUES (?, ?, ?)', {playerIdentifier, firstName, lastName}, function(id)\n    print(id)\nend)\n")),(0,i.kt)("h3",{id:"promise"},"Promise"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:insert_async\n-- alias: MySQL.Sync.insert\n\nlocal id = MySQL.insert.await('INSERT INTO users (identifier, firstname, lastname) VALUES (?, ?, ?)', {playerIdentifier, firstName, lastName})\nprint(id)\n")),(0,i.kt)("h2",{id:"javascript"},"JavaScript"),(0,i.kt)("h3",{id:"callback-1"},"Callback"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"exports.oxmysql.insert('INSERT INTO users (identifier, firstname, lastname) VALUES (?, ?, ?)', [playerIdentifier, firstName, lastName], (id) => {\n  console.log(id)\n})\n")),(0,i.kt)("h3",{id:"promise-1"},"Promise"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const id = await exports.oxmysql.insert_async('INSERT INTO users (identifier, firstname, lastname) VALUES (?, ?, ?)', [playerIdentifier, firstName, lastName])\nconsole.log(id)\n")))}d.isMDXComponent=!0}}]);