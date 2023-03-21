"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[851],{1851:function(n,e,t){t.r(e),t.d(e,{default:function(){return te}});var r=t(9439),u=t(2791),i=t(1087);function o(){return o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},o.apply(this,arguments)}var c=["children","options"],a=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((function(n,e){return n[e.toLowerCase()]=e,n}),{for:"htmlFor"}),l={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},f=["style","script"],s=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,p=/mailto:/i,h=/\n{2,}$/,d=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,g=/^ *> ?/gm,v=/^ {2,}\n/,y=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,k=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,m=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,S=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,x=/^(?:\n *)*\n/,H=/\r\n?/g,b=/^\[\^([^\]]+)](:.*)\n/,I=/^\[\^([^\]]+)]/,A=/\f/g,w=/^\s*?\[(x|\s)\]/,M=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,O=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,L=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,E=/&([a-zA-Z]+);/g,C=/^<!--[\s\S]*?(?:-->)/,B=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,G=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,$=/^\{.*\}$/,_=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,j=/^<([^ >]+@[^ >]+)>/,D=/^<([^ >]+:\/[^ >]+)>/,N=/-([a-z])?/gi,T=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,R=/^\[([^\]]*)\]:\s+(\S+)\s*("([^"]*)")?/,z=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/^\[([^\]]*)\] ?\[([^\]]*)\]/,W=/(\[|\])/g,X=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,F=/\t/g,U=/^ *\| */,P=/(^ *\||\| *$)/g,q=/ *$/,V=/^ *:-+: *$/,Q=/^ *:-+ *$/,J=/^ *-+: *$/,K=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,Y=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,nn=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,en=/^\\([^0-9A-Za-z\s])/,tn=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,rn=/^\n+/,un=/^([ \t]*)/,on=/\\([^0-9A-Z\s])/gi,cn=/ *\n+$/,an=/(?:^|\n)( *)$/,ln="(?:\\d+\\.)",fn="(?:[*+-])";function sn(n){return"( *)("+(1===n?ln:fn)+") +"}var pn=sn(1),hn=sn(2);function dn(n){return new RegExp("^"+(1===n?pn:hn))}var gn=dn(1),vn=dn(2);function yn(n){return new RegExp("^"+(1===n?pn:hn)+"[^\\n]*(?:\\n(?!\\1"+(1===n?ln:fn)+" )[^\\n]*)*(\\n|$)","gm")}var kn=yn(1),mn=yn(2);function Sn(n){var e=1===n?ln:fn;return new RegExp("^( *)("+e+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+e+" (?!"+e+" ))\\n*|\\s*\\n*$)")}var xn=Sn(1),Hn=Sn(2);function bn(n,e){var t=1===e,r=t?xn:Hn,u=t?kn:mn,i=t?gn:vn;return{t:function(n,e,t){var u=an.exec(t);return u&&(e.o||!e.u&&!e._)?r.exec(n=u[1]+n):null},i:Fn.HIGH,l:function(n,e,r){var o=t?+n[2]:void 0,c=n[0].replace(h,"\n").match(u),a=!1;return{p:c.map((function(n,t){var u=i.exec(n)[0].length,o=new RegExp("^ {1,"+u+"}","gm"),l=n.replace(o,"").replace(i,""),f=t===c.length-1,s=-1!==l.indexOf("\n\n")||f&&a;a=s;var p,h=r.u,d=r.o;r.o=!0,s?(r.u=!1,p=l.replace(cn,"\n\n")):(r.u=!0,p=l.replace(cn,""));var g=e(p,r);return r.u=h,r.o=d,g})),g:t,m:o}},h:function(e,t,r){return n(e.g?"ol":"ul",{key:r.k,start:e.m},e.p.map((function(e,u){return n("li",{key:u},t(e,r))})))}}}var In="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",An="\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*",wn=new RegExp("^\\[("+In+")\\]\\("+An+"\\)"),Mn=new RegExp("^!\\[("+In+")\\]\\("+An+"\\)"),On=[d,k,m,M,O,C,T,kn,xn,mn,Hn],Ln=[].concat(On,[/^[^\n]+(?:  \n|\n{2,})/,L,G]);function En(n){return n.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Cn(n){return J.test(n)?"right":V.test(n)?"center":Q.test(n)?"left":null}function Bn(n,e,t){var r=t.v;t.v=!0;var u=e(n.trim(),t);t.v=r;var i=[[]];return u.forEach((function(n,e){"tableSeparator"===n.type?0!==e&&e!==u.length-1&&i.push([]):("text"!==n.type||null!=u[e+1]&&"tableSeparator"!==u[e+1].type||(n.S=n.S.replace(q,"")),i[i.length-1].push(n))})),i}function Gn(n,e,t){t.u=!0;var r=Bn(n[1],e,t),u=n[2].replace(P,"").split("|").map(Cn),i=function(n,e,t){return n.trim().split("\n").map((function(n){return Bn(n,e,t)}))}(n[3],e,t);return t.u=!1,{$:u,A:i,L:r,type:"table"}}function $n(n,e){return null==n.$[e]?{}:{textAlign:n.$[e]}}function _n(n){return function(e,t){return t.u?n.exec(e):null}}function jn(n){return function(e,t){return t.u||t._?n.exec(e):null}}function Dn(n){return function(e,t){return t.u||t._?null:n.exec(e)}}function Nn(n){return function(e){return n.exec(e)}}function Tn(n,e,t){if(e.u||e._)return null;if(t&&!t.endsWith("\n"))return null;var r="";n.split("\n").every((function(n){return!On.some((function(e){return e.test(n)}))&&(r+=n+"\n",n.trim())}));var u=r.trimEnd();return""==u?null:[r,u]}function Rn(n){try{if(decodeURIComponent(n).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(n){return null}return n}function zn(n){return n.replace(on,"$1")}function Zn(n,e,t){var r=t.u||!1,u=t._||!1;t.u=!0,t._=!0;var i=n(e,t);return t.u=r,t._=u,i}function Wn(n,e,t){var r=t.u||!1,u=t._||!1;t.u=!1,t._=!0;var i=n(e,t);return t.u=r,t._=u,i}function Xn(n,e,t){return t.u=!1,n(e+"\n\n",t)}var Fn,Un,Pn=function(n,e,t){return{S:Zn(e,n[1],t)}};function qn(){return{}}function Vn(){return null}function Qn(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.filter(Boolean).join(" ")}function Jn(n,e,t){for(var r=n,u=e.split(".");u.length&&void 0!==(r=r[u[0]]);)u.shift();return r||t}function Kn(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.overrides=e.overrides||{},e.slugify=e.slugify||En,e.namedCodesToUnicode=e.namedCodesToUnicode?o({},l,e.namedCodesToUnicode):l;var t=e.createElement||u.createElement;function i(n,r){for(var u=Jn(e.overrides,"".concat(n,".props"),{}),i=arguments.length,c=new Array(i>2?i-2:0),a=2;a<i;a++)c[a-2]=arguments[a];return t.apply(void 0,[function(n,e){var t=Jn(e,n);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:Jn(e,"".concat(n,".component"),n):n}(n,e.overrides),o({},r,u,{className:Qn(null==r?void 0:r.className,u.className)||void 0})].concat(c))}function c(n){var t=!1;e.forceInline?t=!0:e.forceBlock||(t=!1===X.test(n));for(var r=cn(on(t?n:"".concat(n.trimEnd().replace(rn,""),"\n\n"),{u:t}));"string"==typeof r[r.length-1]&&!r[r.length-1].trim();)r.pop();if(null===e.wrapper)return r;var o,c=e.wrapper||(t?"span":"div");if(r.length>1||e.forceWrapper)o=r;else{if(1===r.length)return"string"==typeof(o=r[0])?i("span",{key:"outer"},o):o;o=null}return u.createElement(c,{key:"outer"},o)}function h(n){var e=n.match(s);return e?e.reduce((function(n,e,t){var r,i=e.indexOf("=");if(-1!==i){var o=(r=e.slice(0,i),-1!==r.indexOf("-")&&null===r.match(B)&&(r=r.replace(N,(function(n,e){return e.toUpperCase()}))),r).trim(),l=function(n){var e=n[0];return('"'===e||"'"===e)&&n.length>=2&&n[n.length-1]===e?n.slice(1,-1):n}(e.slice(i+1).trim()),f=a[o]||o,s=n[f]=function(n,e){return"style"===n?e.split(/;\s?/).reduce((function(n,e){var t=e.slice(0,e.indexOf(":"));return n[t.replace(/(-[a-z])/g,(function(n){return n[1].toUpperCase()}))]=e.slice(t.length+1).trim(),n}),{}):"href"===n?Rn(e):(e.match($)&&(e=e.slice(1,e.length-1)),"true"===e||"false"!==e&&e)}(o,l);"string"==typeof s&&(L.test(s)||G.test(s))&&(n[f]=u.cloneElement(c(s.trim()),{key:t}))}else"style"!==e&&(n[a[e]||e]=!0);return n}),{}):void 0}var P=[],q={},V={blockQuote:{t:Dn(d),i:Fn.HIGH,l:function(n,e,t){return{S:e(n[0].replace(g,""),t)}},h:function(n,e,t){return i("blockquote",{key:t.k},e(n.S,t))}},breakLine:{t:Nn(v),i:Fn.HIGH,l:qn,h:function(n,e,t){return i("br",{key:t.k})}},breakThematic:{t:Dn(y),i:Fn.HIGH,l:qn,h:function(n,e,t){return i("hr",{key:t.k})}},codeBlock:{t:Dn(m),i:Fn.MAX,l:function(n){return{S:n[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),R:void 0}},h:function(n,e,t){return i("pre",{key:t.k},i("code",o({},n.I,{className:n.R?"lang-".concat(n.R):""}),n.S))}},codeFenced:{t:Dn(k),i:Fn.MAX,l:function(n){return{I:h(n[3]||""),S:n[4],R:n[2]||void 0,type:"codeBlock"}}},codeInline:{t:jn(S),i:Fn.LOW,l:function(n){return{S:n[2]}},h:function(n,e,t){return i("code",{key:t.k},n.S)}},footnote:{t:Dn(b),i:Fn.MAX,l:function(n){return P.push({M:n[2],O:n[1]}),{}},h:Vn},footnoteReference:{t:_n(I),i:Fn.HIGH,l:function(n){return{S:n[1],B:"#".concat(e.slugify(n[1]))}},h:function(n,e,t){return i("a",{key:t.k,href:Rn(n.B)},i("sup",{key:t.k},n.S))}},gfmTask:{t:_n(w),i:Fn.HIGH,l:function(n){return{T:"x"===n[1].toLowerCase()}},h:function(n,e,t){return i("input",{checked:n.T,key:t.k,readOnly:!0,type:"checkbox"})}},heading:{t:Dn(M),i:Fn.HIGH,l:function(n,t,r){return{S:Zn(t,n[2],r),j:e.slugify(n[2]),C:n[1].length}},h:function(n,e,t){return i("h".concat(n.C),{id:n.j,key:t.k},e(n.S,t))}},headingSetext:{t:Dn(O),i:Fn.MAX,l:function(n,e,t){return{S:Zn(e,n[1],t),C:"="===n[2]?1:2,type:"heading"}}},htmlComment:{t:Nn(C),i:Fn.HIGH,l:function(){return{}},h:Vn},image:{t:jn(Mn),i:Fn.HIGH,l:function(n){return{Z:n[1],B:zn(n[2]),D:n[3]}},h:function(n,e,t){return i("img",{key:t.k,alt:n.Z||void 0,title:n.D||void 0,src:Rn(n.B)})}},link:{t:_n(wn),i:Fn.LOW,l:function(n,e,t){return{S:Wn(e,n[1],t),B:zn(n[2]),D:n[3]}},h:function(n,e,t){return i("a",{key:t.k,href:Rn(n.B),title:n.D},e(n.S,t))}},linkAngleBraceStyleDetector:{t:_n(D),i:Fn.MAX,l:function(n){return{S:[{S:n[1],type:"text"}],B:n[1],type:"link"}}},linkBareUrlDetector:{t:function(n,e){return e.N?null:_n(_)(n,e)},i:Fn.MAX,l:function(n){return{S:[{S:n[1],type:"text"}],B:n[1],D:void 0,type:"link"}}},linkMailtoDetector:{t:_n(j),i:Fn.MAX,l:function(n){var e=n[1],t=n[1];return p.test(t)||(t="mailto:"+t),{S:[{S:e.replace("mailto:",""),type:"text"}],B:t,type:"link"}}},orderedList:bn(i,1),unorderedList:bn(i,2),newlineCoalescer:{t:Dn(x),i:Fn.LOW,l:qn,h:function(){return"\n"}},paragraph:{t:Tn,i:Fn.LOW,l:Pn,h:function(n,e,t){return i("p",{key:t.k},e(n.S,t))}},ref:{t:_n(R),i:Fn.MAX,l:function(n){return q[n[1]]={B:n[2],D:n[4]},{}},h:Vn},refImage:{t:jn(z),i:Fn.MAX,l:function(n){return{Z:n[1]||void 0,F:n[2]}},h:function(n,e,t){return i("img",{key:t.k,alt:n.Z,src:Rn(q[n.F].B),title:q[n.F].D})}},refLink:{t:_n(Z),i:Fn.MAX,l:function(n,e,t){return{S:e(n[1],t),P:e(n[0].replace(W,"\\$1"),t),F:n[2]}},h:function(n,e,t){return q[n.F]?i("a",{key:t.k,href:Rn(q[n.F].B),title:q[n.F].D},e(n.S,t)):i("span",{key:t.k},e(n.P,t))}},table:{t:Dn(T),i:Fn.HIGH,l:Gn,h:function(n,e,t){return i("table",{key:t.k},i("thead",null,i("tr",null,n.L.map((function(r,u){return i("th",{key:u,style:$n(n,u)},e(r,t))})))),i("tbody",null,n.A.map((function(r,u){return i("tr",{key:u},r.map((function(r,u){return i("td",{key:u,style:$n(n,u)},e(r,t))})))}))))}},tableSeparator:{t:function(n,e){return e.v?U.exec(n):null},i:Fn.HIGH,l:function(){return{type:"tableSeparator"}},h:function(){return" | "}},text:{t:Nn(tn),i:Fn.MIN,l:function(n){return{S:n[0].replace(E,(function(n,t){return e.namedCodesToUnicode[t]?e.namedCodesToUnicode[t]:n}))}},h:function(n){return n.S}},textBolded:{t:jn(K),i:Fn.MED,l:function(n,e,t){return{S:e(n[2],t)}},h:function(n,e,t){return i("strong",{key:t.k},e(n.S,t))}},textEmphasized:{t:jn(Y),i:Fn.LOW,l:function(n,e,t){return{S:e(n[2],t)}},h:function(n,e,t){return i("em",{key:t.k},e(n.S,t))}},textEscaped:{t:jn(en),i:Fn.HIGH,l:function(n){return{S:n[1],type:"text"}}},textStrikethroughed:{t:jn(nn),i:Fn.LOW,l:Pn,h:function(n,e,t){return i("del",{key:t.k},e(n.S,t))}}};!0!==e.disableParsingRawHTML&&(V.htmlBlock={t:Nn(L),i:Fn.HIGH,l:function(n,e,t){var u,i=n[3].match(un),o=(0,r.Z)(i,2)[1],c=new RegExp("^".concat(o),"gm"),a=n[3].replace(c,""),l=(u=a,Ln.some((function(n){return n.test(u)}))?Xn:Zn),s=n[1].toLowerCase(),p=-1!==f.indexOf(s);t.N=t.N||"a"===s;var d=p?n[3]:l(e,a,t);return t.N=!1,{I:h(n[2]),S:d,G:p,H:p?s:n[1]}},h:function(n,e,t){return i(n.H,o({key:t.k},n.I),n.G?n.S:e(n.S,t))}},V.htmlSelfClosing={t:Nn(G),i:Fn.HIGH,l:function(n){return{I:h(n[2]||""),H:n[1]}},h:function(n,e,t){return i(n.H,o({},n.I,{key:t.k}))}});var Q,J,on=function(n){var e=Object.keys(n);function t(r,u){for(var i=[],o="";r;)for(var c=0;c<e.length;){var a=e[c],l=n[a],f=l.t(r,u,o);if(f){var s=f[0];r=r.substring(s.length);var p=l.l(f,t,u);null==p.type&&(p.type=a),i.push(p),o=s;break}c++}return i}return e.sort((function(e,t){var r=n[e].i,u=n[t].i;return r!==u?r-u:e<t?-1:1})),function(n,e){return t(function(n){return n.replace(H,"\n").replace(A,"").replace(F,"    ")}(n),e)}}(V),cn=(Q=V,J=function(n,e,t){return Q[n.type].h(n,e,t)},function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Array.isArray(e)){for(var r=t.k,u=[],i=!1,o=0;o<e.length;o++){t.k=o;var c=n(e[o],t),a="string"==typeof c;a&&i?u[u.length-1]+=c:null!==c&&u.push(c),i=a}return t.k=r,u}return J(e,n,t)}),an=c(n);return P.length?i("div",null,an,i("footer",{key:"footer"},P.map((function(n){return i("div",{id:e.slugify(n.O),key:n.O},n.O,cn(on(n.M,{u:!0})))})))):an}(Un=Fn||(Fn={}))[Un.MAX=0]="MAX",Un[Un.HIGH=1]="HIGH",Un[Un.MED=2]="MED",Un[Un.LOW=3]="LOW",Un[Un.MIN=4]="MIN";var Yn=function(n){var e=n.children,t=n.options,r=function(n,e){if(null==n)return{};var t,r,u={},i=Object.keys(n);for(r=0;r<i.length;r++)e.indexOf(t=i[r])>=0||(u[t]=n[t]);return u}(n,c);return u.cloneElement(Kn(e,t),r)},ne=t(6842),ee=t(184),te=function(){var n=(0,u.useState)(""),e=(0,r.Z)(n,2),o=e[0],c=e[1];(0,u.useEffect)((function(){t.e(625).then(t.t.bind(t,9625,17)).then((function(n){fetch(n.default).then((function(n){return n.text()})).then(c)})).catch(console.error)}));var a=o.split(/\s+/).map((function(n){return n.replace(/\W/g,"")})).filter((function(n){return n.length})).length;return(0,ee.jsx)(ne.Z,{title:"About",description:"Learn about Antonio Lamb",children:(0,ee.jsxs)("article",{className:"post markdown",id:"about",children:[(0,ee.jsx)("header",{children:(0,ee.jsxs)("div",{className:"title",children:[(0,ee.jsx)("h2",{children:(0,ee.jsx)(i.rU,{to:"/about",children:"About Me"})}),(0,ee.jsxs)("p",{children:["(in about ",a," words)"]})]})}),(0,ee.jsx)(Yn,{children:o})]})})}}}]);
//# sourceMappingURL=851.960c271b.chunk.js.map