module.exports=function(t){function e(a){if(n[a])return n[a].exports;var s=n[a]={exports:{},id:a,loaded:!1};return t[a].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var a=n(2);t.exports=a.fromExpress(n(3))},,function(t,e){t.exports=require("webtask-tools")},function(t,e,n){var a=n(4),s=n(5),i=(n(2),a()),r=n(6);i.use(s({scopes:"read:connections"})),i.get("/",function(t,e){e.header("Content-Type","text/html"),e.status(200).send(r({baseUrl:e.locals.baseUrl}))}),t.exports=i},function(t,e){t.exports=require("express")},function(t,e){t.exports=require("auth0-oauth2-express")},function(t,e,n){var a=n(7);t.exports=function(t){var e,n=[],s=t||{};return function(t,s){n.push('<!DOCTYPE html><html><head><title>My Extension</title><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"'+a.attr("content",""+s,!0,!0)+'><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/2.0.1/lib/logos/img/favicon.png"><link rel="apple-touch-icon" href="apple-touch-icon.png"><link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/manage/v0.3.973/css/index.min.css"><link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styleguide/latest/index.css"><script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script><script type="text/javascript" src="https://fb.me/react-0.14.0.min.js"></script><script type="text/javascript" src="https://fb.me/react-dom-0.14.0.js"></script><script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script><script type="text/javascript" src="https://cdn.auth0.com/js/jwt-decode-1.4.0.min.js"></script><script type="text/javascript" src="https://cdn.auth0.com/js/navbar-1.0.1.min.js"></script><script type="text/javascript">if (!sessionStorage.getItem("token")) {\n  window.location.href = \''+a.escape(null==(e=t)?"":e)+'/login\';\n}\n</script></head><body class="a0-extension"><header class="dashboard-header"><nav role="navigation" class="navbar navbar-default"><div class="container"><div class="navbar-header"><h1 class="navbar-brand"><a href="http://manage.auth0.com/"><span>Auth0</span></a></h1></div><div id="navbar-collapse" class="collapse navbar-collapse"></div><script type="text/babel">ReactDOM.render(\n  <Navbar baseUrl="'+a.escape(null==(e=t)?"":e)+'"/>,\n  document.getElementById(\'navbar-collapse\')\n);</script></div></nav></header><div class="container"><div class="row"><section class="content-page current"><div class="col-xs-12"><div class="row"><div class="col-xs-12 content-header"><ol class="breadcrumb"><li><a href="http://manage.auth0.com/">Auth0 Dashboard</a></li><li><a href="#">Extensions</a></li></ol><h1>My Extension</h1></div></div><div id="extension"><script type="text/babel">var Extension = React.createClass({\n  render: function() {\n    return (\n      <div>\n        <div className="widget-title title-with-nav-bars">\n          <ul className="nav nav-tabs">\n            <li className="active">\n              <a data-toggle="tab" href="#tab1" aria-expanded="true"><span className="tab-title">Tab 1</span></a>\n            </li>\n            <li>\n              <a data-toggle="tab" href="#tab2"><span className="tab-title">Tab 2</span></a>\n            </li>\n            <li>\n              <a data-toggle="tab" href="#tab3"><span className="tab-title">Tab 3</span></a>\n            </li>\n          </ul>\n        </div>\n        <div id="content-area" className="tab-content">\n          <div id="tab1" className="tab-pane active"></div>\n          <div id="tab2" className="tab-pane"></div>\n          <div id="tab3" className="tab-pane"></div>\n        </div>\n      </div>\n    );\n  }\n});\n\nReactDOM.render(\n  <Extension />,\n  document.getElementById(\'extension\')\n);</script></div></div></section></div></div></body></html>')}.call(this,"baseUrl"in s?s.baseUrl:"undefined"!=typeof baseUrl?baseUrl:void 0,"description"in s?s.description:"undefined"!=typeof description?description:void 0),n.join("")}},function(t,e,n){"use strict";function a(t){return null!=t&&""!==t}function s(t){return(Array.isArray(t)?t.map(s):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(a).join(" ")}function i(t){return c[t]||t}function r(t){var e=String(t).replace(o,i);return e===""+t?t:e}e.merge=function l(t,e){if(1===arguments.length){for(var n=t[0],s=1;s<t.length;s++)n=l(n,t[s]);return n}var i=t["class"],r=e["class"];(i||r)&&(i=i||[],r=r||[],Array.isArray(i)||(i=[i]),Array.isArray(r)||(r=[r]),t["class"]=i.concat(r).filter(a));for(var c in e)"class"!=c&&(t[c]=e[c]);return t},e.joinClasses=s,e.cls=function(t,n){for(var a=[],i=0;i<t.length;i++)n&&n[i]?a.push(e.escape(s([t[i]]))):a.push(s(t[i]));var r=s(a);return r.length?' class="'+r+'"':""},e.style=function(t){return t&&"object"==typeof t?Object.keys(t).map(function(e){return e+":"+t[e]}).join(";"):t},e.attr=function(t,n,a,s){return"style"===t&&(n=e.style(n)),"boolean"==typeof n||null==n?n?" "+(s?t:t+'="'+t+'"'):"":0==t.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+t+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):a?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+e.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+n+'"')},e.attrs=function(t,n){var a=[],i=Object.keys(t);if(i.length)for(var r=0;r<i.length;++r){var c=i[r],o=t[c];"class"==c?(o=s(o))&&a.push(" "+c+'="'+o+'"'):a.push(e.attr(c,o,!1,n))}return a.join("")};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},o=/[&<>"]/g;e.escape=r,e.rethrow=function p(t,e,a,s){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&e||s))throw t.message+=" on line "+a,t;try{s=s||n(8).readFileSync(e,"utf8")}catch(i){p(t,null,a)}var r=3,c=s.split("\n"),o=Math.max(a-r,0),l=Math.min(c.length,a+r),r=c.slice(o,l).map(function(t,e){var n=e+o+1;return(n==a?"  > ":"    ")+n+"| "+t}).join("\n");throw t.path=e,t.message=(e||"Jade")+":"+a+"\n"+r+"\n\n"+t.message,t},e.DebugItem=function(t,e){this.lineno=t,this.filename=e}},function(t,e){t.exports=require("fs")}]);