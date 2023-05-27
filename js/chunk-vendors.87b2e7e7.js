(self["webpackChunkprofile"]=self["webpackChunkprofile"]||[]).push([[998],{9662:function(t,e,n){var r=n(614),i=n(6330),o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),i=String,o=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw o("Can't set "+i(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),i=n(30),o=n(3070).f,s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not an object")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,i,o,s=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),f=n(648),d=n(6330),p=n(8880),m=n(8052),g=n(7045),y=n(7976),v=n(9518),b=n(7674),w=n(5112),_=n(9711),E=n(9909),I=E.enforce,T=E.get,A=c.Int8Array,O=A&&A.prototype,S=c.Uint8ClampedArray,k=S&&S.prototype,C=A&&v(A),R=O&&v(O),x=Object.prototype,P=c.TypeError,N=w("toStringTag"),D=_("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",j=s&&!!b&&"Opera"!==f(c.opera),M=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},V=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(U,e)||h(F,e)},B=function(t){var e=v(t);if(l(e)){var n=T(e);return n&&h(n,L)?n[L]:B(e)}},z=function(t){if(!l(t))return!1;var e=f(t);return h(U,e)||h(F,e)},$=function(t){if(z(t))return t;throw P("Target is not a typed array")},q=function(t){if(u(t)&&(!b||y(C,t)))return t;throw P(d(t)+" is not a typed array constructor")},H=function(t,e,n,r){if(a){if(n)for(var i in U){var o=c[i];if(o&&h(o.prototype,t))try{delete o.prototype[t]}catch(s){try{o.prototype[t]=e}catch(u){}}}R[t]&&!n||m(R,t,n?e:j&&O[t]||e,r)}},K=function(t,e,n){var r,i;if(a){if(b){if(n)for(r in U)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(o){}if(C[t]&&!n)return;try{return m(C,t,n?e:j&&C[t]||e)}catch(o){}}for(r in U)i=c[r],!i||i[t]&&!n||m(i,t,e)}};for(r in U)i=c[r],o=i&&i.prototype,o?I(o)[L]=i:j=!1;for(r in F)i=c[r],o=i&&i.prototype,o&&(I(o)[L]=i);if((!j||!u(C)||C===Function.prototype)&&(C=function(){throw P("Incorrect invocation")},j))for(r in U)c[r]&&b(c[r],C);if((!j||!R||R===x)&&(R=C.prototype,j))for(r in U)c[r]&&b(c[r].prototype,R);if(j&&v(k)!==R&&b(k,R),a&&!h(R,N))for(r in M=!0,g(R,N,{configurable:!0,get:function(){return l(this)?this[D]:void 0}}),U)c[r]&&p(c[r],D,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:j,TYPED_ARRAY_TAG:M&&D,aTypedArray:$,aTypedArrayConstructor:q,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:B,isView:V,isTypedArray:z,TypedArray:C,TypedArrayPrototype:R}},1318:function(t,e,n){var r=n(5656),i=n(1400),o=n(6244),s=function(t){return function(e,n,s){var a,c=r(e),u=o(c),l=i(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},9671:function(t,e,n){var r=n(9974),i=n(8361),o=n(7908),s=n(6244),a=function(t){var e=1==t;return function(n,a,c){var u,l,h=o(n),f=i(h),d=r(a,c),p=s(f);while(p-- >0)if(u=f[p],l=d(u,p,h),l)switch(t){case 0:return u;case 1:return p}return e?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},3658:function(t,e,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!s(t,"length").writable)throw o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var r=n(1702),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},648:function(t,e,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),c=Object,u="Arguments"==o(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?o(e):"Object"==(r=o(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),i=n(3070),o=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7045:function(t,e,n){var r=n(6339),i=n(3070);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},8052:function(t,e,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&o(n,u,a),a.global)c?t[e]=n:s(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},5117:function(t,e,n){"use strict";var r=n(6330),i=TypeError;t.exports=function(t,e){if(!delete t[e])throw i("Cannot delete property "+r(e)+" of "+r(t))}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(t,e,n){var r=n(1702),i=Error,o=r("".replace),s=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=o(t,a,"");return t}},5392:function(t,e,n){var r=n(8880),i=n(1060),o=n(2914),s=Error.captureStackTrace;t.exports=function(t,e,n,a){o&&(s?s(t,e):r(t,"stack",i(n,a)))}},2914:function(t,e,n){var r=n(7293),i=n(9114);t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},2109:function(t,e,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,f,d,p,m=t.target,g=t.global,y=t.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(g?h:m+(y?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),i=Function.prototype,o=i.apply,s=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},9974:function(t,e,n){var r=n(1470),i=n(9662),o=n(4374),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?s(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},5668:function(t,e,n){var r=n(1702),i=n(9662);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(o){}}},1470:function(t,e,n){var r=n(4326),i=n(1702);t.exports=function(t){if("Function"===r(t))return i(t)}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);t.exports=r?s:function(t){return function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),i=n(8554);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),i=n(7293),o=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);t.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a(t,""):s(t)}:s},9587:function(t,e,n){var r=n(614),i=n(111),o=n(7674);t.exports=function(t,e,n){var s,a;return o&&r(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},8340:function(t,e,n){var r=n(111),i=n(8880);t.exports=function(t,e){r(e)&&"cause"in e&&i(t,"cause",e.cause)}},9909:function(t,e,n){var r,i,o,s=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),f=n(6200),d=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(t){return o(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var b=h.state||(h.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,r=function(t,e){if(b.has(t))throw m(p);return e.facade=t,b.set(t,e),e},i=function(t){return b.get(t)||{}},o=function(t){return b.has(t)}}else{var w=f("state");d[w]=!0,r=function(t,e){if(l(t,w))throw m(p);return e.facade=t,u(t,w,e),e},i=function(t){return l(t,w)?t[w]:{}},o=function(t){return l(t,w)}}t.exports={set:r,get:i,has:o,enforce:y,getterFor:v}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),i=n(4154),o=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===o}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(1702),i=n(7293),o=n(614),s=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=t.exports=function(t,e,n){"Symbol("===m(d(e),0,7)&&(e="["+g(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&s(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return s(r,"source")||(r.source=y(b,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return o(this)&&f(this).source||u(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},30:function(t,e,n){var r,i=n(9670),o=n(6048),s=n(748),a=n(3501),c=n(490),u=n(317),l=n(6200),h=">",f="<",d="prototype",p="script",m=l("IE_PROTO"),g=function(){},y=function(t){return f+p+h+t+f+"/"+p+h},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?v(r):b():v(r);var t=s.length;while(t--)delete w[d][s[t]];return w()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[d]=i(t),n=new g,g[d]=null,n[m]=t):n=w(),void 0===e?n:o.f(n,e)}},6048:function(t,e,n){var r=n(9781),i=n(3353),o=n(3070),s=n(9670),a=n(5656),c=n(1956);e.f=r&&!i?Object.defineProperties:function(t,e){s(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)o.f(t,n=i[l++],r[n]);return t}},3070:function(t,e,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?o?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(s(t),e=a(e),s(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return s(!i(o.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),i=n(614),o=n(7908),s=n(6200),a=n(8544),c=s("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=o(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},1956:function(t,e,n){var r=n(6324),i=n(748);t.exports=Object.keys||function(t){return r(t,i)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(5668),i=n(9670),o=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!o(a=r(n,t)))return a;if(i(n=t.valueOf)&&!o(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!o(a=r(n,t)))return a;throw s("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},2626:function(t,e,n){var r=n(3070).f;t.exports=function(t,e,n){n in t||r(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},4488:function(t,e,n){var r=n(8554),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),i=n(9711),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.30.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),i=n(7293),o=n(7854),s=o.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!s(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},7593:function(t,e,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,c=s(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),i=n(614),o=r.WeakMap;t.exports=i(o)&&/native code/.test(String(o))},5112:function(t,e,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||s;t.exports=function(t){return o(l,t)||(l[t]=a&&o(u,t)?u[t]:h("Symbol."+t)),l[t]}},9191:function(t,e,n){"use strict";var r=n(5005),i=n(2597),o=n(8880),s=n(7976),a=n(7674),c=n(9920),u=n(2626),l=n(9587),h=n(6277),f=n(8340),d=n(5392),p=n(9781),m=n(1913);t.exports=function(t,e,n,g){var y="stackTraceLimit",v=g?2:1,b=t.split("."),w=b[b.length-1],_=r.apply(null,b);if(_){var E=_.prototype;if(!m&&i(E,"cause")&&delete E.cause,!n)return _;var I=r("Error"),T=e((function(t,e){var n=h(g?e:t,void 0),r=g?new _(t):new _;return void 0!==n&&o(r,"message",n),d(r,T,r.stack,2),this&&s(E,this)&&l(r,this,T),arguments.length>v&&f(r,arguments[v]),r}));if(T.prototype=E,"Error"!==w?a?a(T,I):c(T,I,{name:!0}):p&&y in _&&(u(T,_,y),u(T,_,"prepareStackTrace")),c(T,_),!m)try{E.name!==w&&o(E,"name",w),E.constructor=T}catch(A){}return T}}},7635:function(t,e,n){"use strict";var r=n(2109),i=n(9671).findLast,o=n(1223);r({target:"Array",proto:!0},{findLast:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findLast")},7658:function(t,e,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=o(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return s(e,n),n}})},541:function(t,e,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{unshift:function(t){var e=i(this),n=o(e),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in e?e[l]=e[u]:a(e,l)}for(var h=0;h<r;h++)e[h]=arguments[h]}return s(e,n+r)}})},1703:function(t,e,n){var r=n(2109),i=n(7854),o=n(2104),s=n(9191),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var n={};n[t]=s(t,e,u),r({global:!0,constructor:!0,arity:1,forced:u},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=s(a+"."+t,e,u),r({target:a,stat:!0,constructor:!0,arity:1,forced:u},n)}};l("Error",(function(t){return function(e){return o(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return o(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return o(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return o(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return o(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return o(t,this,arguments)}})),l("URIError",(function(t){return function(e){return o(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return o(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return o(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return o(t,this,arguments)}}))},8675:function(t,e,n){"use strict";var r=n(260),i=n(6244),o=n(9303),s=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(t){var e=s(this),n=i(e),r=o(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}))},4590:function(t,e,n){"use strict";var r=n(260),i=n(9671).findLastIndex,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLastIndex",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},3408:function(t,e,n){"use strict";var r=n(260),i=n(9671).findLast,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLast",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},2801:function(t,e,n){"use strict";var r=n(2109),i=n(7854),o=n(5005),s=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),f=n(3678),d=n(1060),p=n(9781),m=n(1913),g="DOMException",y=o("Error"),v=o(g),b=function(){u(this,w);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new v(e,n),i=y(e);return i.name=g,a(r,"stack",s(1,d(i.stack,1))),l(r,this,b),r},w=b.prototype=v.prototype,_="stack"in y(g),E="stack"in new v(1,2),I=v&&p&&Object.getOwnPropertyDescriptor(i,g),T=!!I&&!(I.writable&&I.configurable),A=_&&!T&&!E;r({global:!0,constructor:!0,forced:m||A},{DOMException:A?b:v});var O=o(g),S=O.prototype;if(S.constructor!==O)for(var k in m||a(S,"constructor",s(1,O)),f)if(c(f,k)){var C=f[k],R=C.s;c(O,R)||a(O,R,s(6,C.c))}},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return b},L:function(){return c},LL:function(){return x},P0:function(){return g},Pz:function(){return v},Sg:function(){return w},UG:function(){return I},ZR:function(){return R},aH:function(){return y},b$:function(){return A},eu:function(){return k},hl:function(){return S},m9:function(){return q},ne:function(){return V},pd:function(){return F},q4:function(){return m},ru:function(){return T},tV:function(){return u},uI:function(){return E},vZ:function(){return L},w1:function(){return O},xO:function(){return M},xb:function(){return D},z$:function(){return _},zd:function(){return U}});n(1703),n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,a=o?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==u||null==h)throw new s;const f=e<<2|a>>4;if(r.push(f),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return o.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",VUE_APP_API_URL:"XXX",VUE_APP_FIREBASE_API_KEY:"XXX",VUE_APP_FIREBASE_APP_ID:"1:XXX",VUE_APP_FIREBASE_AUTH_DOMAIN:"XXX",VUE_APP_FIREBASE_MESSAGING_SENDER_ID:"XXX",VUE_APP_FIREBASE_PROJECT_ID:"XXX",VUE_APP_FIREBASE_STORAGE_BUCKET:"XXX",VUE_APP_LS_TOKEN_KEY:"vue_app_token",BASE_URL:"/profile/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},g=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},v=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function I(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function T(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function A(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function O(){const t=_();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function S(){try{return"object"===typeof indexedDB}catch(t){return!1}}function k(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C="FirebaseError";class R extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=C,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?P(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new R(r,s,n);return a}}function P(t,e){return t.replace(N,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function L(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(j(n)&&j(o)){if(!L(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function j(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function U(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function F(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t,e){const n=new B(t,e);return n.subscribe.bind(n)}class B{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=z(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=$),void 0===r.error&&(r.error=$),void 0===r.complete&&(r.complete=$);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function z(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function $(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(t){return t&&t._delegate?t._delegate:t}},7749:function(t,e,n){"use strict";n.d(e,{GN:function(){return C}});n(7658),n(1703);var r=n(3494),i=n(3396);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}function l(t,e){if(null==t)return{};var n,r,i=u(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function h(t){return f(t)||d(t)||p(t)||g()}function f(t){if(Array.isArray(t))return m(t)}function d(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function p(t,e){if(t){if("string"===typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var y="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},v={exports:{}};(function(t){(function(e){var n=function(t,e,r){if(!u(e)||h(e)||f(e)||d(e)||c(e))return e;var i,o=0,s=0;if(l(e))for(i=[],s=e.length;o<s;o++)i.push(n(t,e[o],r));else for(var a in i={},e)Object.prototype.hasOwnProperty.call(e,a)&&(i[t(a,r)]=n(t,e[a],r));return i},r=function(t,e){e=e||{};var n=e.separator||"_",r=e.split||/(?=[A-Z])/;return t.split(r).join(n)},i=function(t){return p(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""})),t.substr(0,1).toLowerCase()+t.substr(1))},o=function(t){var e=i(t);return e.substr(0,1).toUpperCase()+e.substr(1)},s=function(t,e){return r(t,e).toLowerCase()},a=Object.prototype.toString,c=function(t){return"function"===typeof t},u=function(t){return t===Object(t)},l=function(t){return"[object Array]"==a.call(t)},h=function(t){return"[object Date]"==a.call(t)},f=function(t){return"[object RegExp]"==a.call(t)},d=function(t){return"[object Boolean]"==a.call(t)},p=function(t){return t-=0,t===t},m=function(t,e){var n=e&&"process"in e?e.process:e;return"function"!==typeof n?t:function(e,r){return n(e,t,r)}},g={camelize:i,decamelize:s,pascalize:o,depascalize:s,camelizeKeys:function(t,e){return n(m(i,e),t)},decamelizeKeys:function(t,e){return n(m(s,e),t,e)},pascalizeKeys:function(t,e){return n(m(o,e),t)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=g:e.humps=g})(y)})(v);var b=v.exports,w=["class","style"];function _(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n=e.indexOf(":"),r=b.camelize(e.slice(0,n)),i=e.slice(n+1).trim();return t[r]=i,t}),{})}function E(t){return t.split(/\s+/).reduce((function(t,e){return t[e]=!0,t}),{})}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof t)return t;var r=(t.children||[]).map((function(t){return I(t)})),o=Object.keys(t.attributes||{}).reduce((function(e,n){var r=t.attributes[n];switch(n){case"class":e.class=E(r);break;case"style":e.style=_(r);break;default:e.attrs[n]=r}return e}),{attrs:{},class:{},style:{}});n.class;var a=n.style,c=void 0===a?{}:a,u=l(n,w);return(0,i.h)(t.tag,s(s(s({},e),{},{class:o.class,style:s(s({},o.style),c)},o.attrs),u),r)}var T=!1;try{T=!0}catch(R){}function A(){var t;!T&&console&&"function"===typeof console.error&&(t=console).error.apply(t,arguments)}function O(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?c({},t,e):{}}function S(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":!0===t.flip,"fa-flip-horizontal":"horizontal"===t.flip||"both"===t.flip,"fa-flip-vertical":"vertical"===t.flip||"both"===t.flip},c(e,"fa-".concat(t.size),null!==t.size),c(e,"fa-rotate-".concat(t.rotation),null!==t.rotation),c(e,"fa-pull-".concat(t.pull),null!==t.pull),c(e,"fa-swap-opacity",t.swapOpacity),c(e,"fa-bounce",t.bounce),c(e,"fa-shake",t.shake),c(e,"fa-beat",t.beat),c(e,"fa-fade",t.fade),c(e,"fa-beat-fade",t.beatFade),c(e,"fa-flash",t.flash),c(e,"fa-spin-pulse",t.spinPulse),c(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map((function(t){return n[t]?t:null})).filter((function(t){return t}))}function k(t){return t&&"object"===a(t)&&t.prefix&&t.iconName&&t.icon?t:r.Qc.icon?r.Qc.icon(t):null===t?null:"object"===a(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"===typeof t?{prefix:"fas",iconName:t}:void 0}var C=(0,i.aZ)({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,e){var n=e.attrs,o=(0,i.Fl)((function(){return k(t.icon)})),a=(0,i.Fl)((function(){return O("classes",S(t))})),c=(0,i.Fl)((function(){return O("transform","string"===typeof t.transform?r.Qc.transform(t.transform):t.transform)})),u=(0,i.Fl)((function(){return O("mask",k(t.mask))})),l=(0,i.Fl)((function(){return(0,r.qv)(o.value,s(s(s(s({},a.value),c.value),u.value),{},{symbol:t.symbol,title:t.title}))}));(0,i.YP)(l,(function(t){if(!t)return A("Could not find one or more icon(s)",o.value,u.value)}),{immediate:!0});var h=(0,i.Fl)((function(){return l.value?I(l.value.abstract[0],{},n):null}));return function(){return h.value}}});(0,i.aZ)({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,e){var n=e.slots,o=r.vc.familyPrefix,s=(0,i.Fl)((function(){return["".concat(o,"-layers")].concat(h(t.fixedWidth?["".concat(o,"-fw")]:[]))}));return function(){return(0,i.h)("div",{class:s.value},n.default?n.default():[])}}}),(0,i.aZ)({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,e){var n=e.attrs,o=r.vc.familyPrefix,a=(0,i.Fl)((function(){return O("classes",[].concat(h(t.counter?["".concat(o,"-layers-counter")]:[]),h(t.position?["".concat(o,"-layers-").concat(t.position)]:[])))})),c=(0,i.Fl)((function(){return O("transform","string"===typeof t.transform?r.Qc.transform(t.transform):t.transform)})),u=(0,i.Fl)((function(){var e=(0,r.fL)(t.value.toString(),s(s({},c.value),a.value)),n=e.abstract;return t.counter&&(n[0].attributes.class=n[0].attributes.class.replace("fa-layers-text","")),n[0]})),l=(0,i.Fl)((function(){return I(u.value,{},n)}));return function(){return l.value}}})},4870:function(t,e,n){"use strict";n.d(e,{B:function(){return s},BK:function(){return Wt},Bj:function(){return o},EB:function(){return u},Fl:function(){return Yt},IU:function(){return Nt},Jd:function(){return O},PG:function(){return Ct},SU:function(){return qt},Um:function(){return Ot},WL:function(){return Kt},X$:function(){return R},X3:function(){return Pt},XI:function(){return Bt},Xl:function(){return Dt},dq:function(){return Ft},iH:function(){return Vt},j:function(){return k},lk:function(){return S},nZ:function(){return c},qj:function(){return At},qq:function(){return E},yT:function(){return xt}});n(7658);var r=n(7139);let i;class o{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function s(t){return new o(t)}function a(t,e=i){e&&e.active&&e.effects.push(t)}function c(){return i}function u(t){i&&i.cleanups.push(t)}const l=t=>{const e=new Set(t);return e.w=0,e.n=0,e},h=t=>(t.w&y)>0,f=t=>(t.n&y)>0,d=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=y},p=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];h(i)&&!f(i)?i.delete(t):e[n++]=i,i.w&=~y,i.n&=~y}e.length=n}},m=new WeakMap;let g=0,y=1;const v=30;let b;const w=Symbol(""),_=Symbol("");class E{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let t=b,e=T;while(t){if(t===this)return;t=t.parent}try{return this.parent=b,b=this,T=!0,y=1<<++g,g<=v?d(this):I(this),this.fn()}finally{g<=v&&p(this),y=1<<--g,b=this.parent,T=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){b===this?this.deferStop=!0:this.active&&(I(this),this.onStop&&this.onStop(),this.active=!1)}}function I(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let T=!0;const A=[];function O(){A.push(T),T=!1}function S(){const t=A.pop();T=void 0===t||t}function k(t,e,n){if(T&&b){let e=m.get(t);e||m.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=l());const i=void 0;C(r,i)}}function C(t,e){let n=!1;g<=v?f(t)||(t.n|=y,n=!h(t)):n=!t.has(b),n&&(t.add(b),b.deps.push(t))}function R(t,e,n,i,o,s){const a=m.get(t);if(!a)return;let c=[];if("clear"===e)c=[...a.values()];else if("length"===n&&(0,r.kJ)(t)){const t=Number(i);a.forEach(((e,n)=>{("length"===n||n>=t)&&c.push(e)}))}else switch(void 0!==n&&c.push(a.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(w)),(0,r._N)(t)&&c.push(a.get(_)));break;case"delete":(0,r.kJ)(t)||(c.push(a.get(w)),(0,r._N)(t)&&c.push(a.get(_)));break;case"set":(0,r._N)(t)&&c.push(a.get(w));break}if(1===c.length)c[0]&&x(c[0]);else{const t=[];for(const e of c)e&&t.push(...e);x(l(t))}}function x(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&P(r,e);for(const r of n)r.computed||P(r,e)}function P(t,e){(t!==b||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function N(t,e){var n;return null==(n=m.get(t))?void 0:n.get(e)}const D=(0,r.fY)("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),j=z(),M=z(!1,!0),U=z(!0),F=V();function V(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Nt(this);for(let e=0,i=this.length;e<i;e++)k(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Nt)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){O();const n=Nt(this)[e].apply(this,t);return S(),n}})),t}function B(t){const e=Nt(this);return k(e,"has",t),e.hasOwnProperty(t)}function z(t=!1,e=!1){return function(n,i,o){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&o===(t?e?Et:_t:e?wt:bt).get(n))return n;const s=(0,r.kJ)(n);if(!t){if(s&&(0,r.RI)(F,i))return Reflect.get(F,i,o);if("hasOwnProperty"===i)return B}const a=Reflect.get(n,i,o);return((0,r.yk)(i)?L.has(i):D(i))?a:(t||k(n,"get",i),e?a:Ft(a)?s&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?t?St(a):At(a):a)}}const $=H(),q=H(!0);function H(t=!1){return function(e,n,i,o){let s=e[n];if(Rt(s)&&Ft(s)&&!Ft(i))return!1;if(!t&&(xt(i)||Rt(i)||(s=Nt(s),i=Nt(i)),!(0,r.kJ)(e)&&Ft(s)&&!Ft(i)))return s.value=i,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,i,o);return e===Nt(o)&&(a?(0,r.aU)(i,s)&&R(e,"set",n,i,s):R(e,"add",n,i)),c}}function K(t,e){const n=(0,r.RI)(t,e),i=t[e],o=Reflect.deleteProperty(t,e);return o&&n&&R(t,"delete",e,void 0,i),o}function W(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&L.has(e)||k(t,"has",e),n}function G(t){return k(t,"iterate",(0,r.kJ)(t)?"length":w),Reflect.ownKeys(t)}const J={get:j,set:$,deleteProperty:K,has:W,ownKeys:G},Q={get:U,set(t,e){return!0},deleteProperty(t,e){return!0}},Y=(0,r.l7)({},J,{get:M,set:q}),X=t=>t,Z=t=>Reflect.getPrototypeOf(t);function tt(t,e,n=!1,r=!1){t=t["__v_raw"];const i=Nt(t),o=Nt(e);n||(e!==o&&k(i,"get",e),k(i,"get",o));const{has:s}=Z(i),a=r?X:n?jt:Lt;return s.call(i,e)?a(t.get(e)):s.call(i,o)?a(t.get(o)):void(t!==i&&t.get(e))}function et(t,e=!1){const n=this["__v_raw"],r=Nt(n),i=Nt(t);return e||(t!==i&&k(r,"has",t),k(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function nt(t,e=!1){return t=t["__v_raw"],!e&&k(Nt(t),"iterate",w),Reflect.get(t,"size",t)}function rt(t){t=Nt(t);const e=Nt(this),n=Z(e),r=n.has.call(e,t);return r||(e.add(t),R(e,"add",t,t)),this}function it(t,e){e=Nt(e);const n=Nt(this),{has:i,get:o}=Z(n);let s=i.call(n,t);s||(t=Nt(t),s=i.call(n,t));const a=o.call(n,t);return n.set(t,e),s?(0,r.aU)(e,a)&&R(n,"set",t,e,a):R(n,"add",t,e),this}function ot(t){const e=Nt(this),{has:n,get:r}=Z(e);let i=n.call(e,t);i||(t=Nt(t),i=n.call(e,t));const o=r?r.call(e,t):void 0,s=e.delete(t);return i&&R(e,"delete",t,void 0,o),s}function st(){const t=Nt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&R(t,"clear",void 0,void 0,n),r}function at(t,e){return function(n,r){const i=this,o=i["__v_raw"],s=Nt(o),a=e?X:t?jt:Lt;return!t&&k(s,"iterate",w),o.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function ct(t,e,n){return function(...i){const o=this["__v_raw"],s=Nt(o),a=(0,r._N)(s),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=o[t](...i),h=n?X:e?jt:Lt;return!e&&k(s,"iterate",u?_:w),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return"delete"!==t&&this}}function lt(){const t={get(t){return tt(this,t)},get size(){return nt(this)},has:et,add:rt,set:it,delete:ot,clear:st,forEach:at(!1,!1)},e={get(t){return tt(this,t,!1,!0)},get size(){return nt(this)},has:et,add:rt,set:it,delete:ot,clear:st,forEach:at(!1,!0)},n={get(t){return tt(this,t,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:at(!0,!1)},r={get(t){return tt(this,t,!0,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:at(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=ct(i,!1,!1),n[i]=ct(i,!0,!1),e[i]=ct(i,!1,!0),r[i]=ct(i,!0,!0)})),[t,n,e,r]}const[ht,ft,dt,pt]=lt();function mt(t,e){const n=e?t?pt:dt:t?ft:ht;return(e,i,o)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.RI)(n,i)&&i in e?n:e,i,o)}const gt={get:mt(!1,!1)},yt={get:mt(!1,!0)},vt={get:mt(!0,!1)};const bt=new WeakMap,wt=new WeakMap,_t=new WeakMap,Et=new WeakMap;function It(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:It((0,r.W7)(t))}function At(t){return Rt(t)?t:kt(t,!1,J,gt,bt)}function Ot(t){return kt(t,!1,Y,yt,wt)}function St(t){return kt(t,!0,Q,vt,_t)}function kt(t,e,n,i,o){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const s=o.get(t);if(s)return s;const a=Tt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return o.set(t,c),c}function Ct(t){return Rt(t)?Ct(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Rt(t){return!(!t||!t["__v_isReadonly"])}function xt(t){return!(!t||!t["__v_isShallow"])}function Pt(t){return Ct(t)||Rt(t)}function Nt(t){const e=t&&t["__v_raw"];return e?Nt(e):t}function Dt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const Lt=t=>(0,r.Kn)(t)?At(t):t,jt=t=>(0,r.Kn)(t)?St(t):t;function Mt(t){T&&b&&(t=Nt(t),C(t.dep||(t.dep=l())))}function Ut(t,e){t=Nt(t);const n=t.dep;n&&x(n)}function Ft(t){return!(!t||!0!==t.__v_isRef)}function Vt(t){return zt(t,!1)}function Bt(t){return zt(t,!0)}function zt(t,e){return Ft(t)?t:new $t(t,e)}class $t{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Nt(t),this._value=e?t:Lt(t)}get value(){return Mt(this),this._value}set value(t){const e=this.__v_isShallow||xt(t)||Rt(t);t=e?t:Nt(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Lt(t),Ut(this,t))}}function qt(t){return Ft(t)?t.value:t}const Ht={get:(t,e,n)=>qt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ft(i)&&!Ft(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Kt(t){return Ct(t)?t:new Proxy(t,Ht)}function Wt(t){const e=(0,r.kJ)(t)?new Array(t.length):{};for(const n in t)e[n]=Jt(t,n);return e}class Gt{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return N(Nt(this._object),this._key)}}function Jt(t,e,n){const r=t[e];return Ft(r)?r:new Gt(t,e,n)}class Qt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new E(t,(()=>{this._dirty||(this._dirty=!0,Ut(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=Nt(this);return Mt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Yt(t,e,n=!1){let i,o;const s=(0,r.mf)(t);s?(i=t,o=r.dG):(i=t.get,o=t.set);const a=new Qt(i,o,s||!o,n);return a}},3396:function(t,e,n){"use strict";n.d(e,{$d:function(){return s},Ah:function(){return kt},Cn:function(){return j},EM:function(){return ge},FN:function(){return Pn},Fl:function(){return Yn},HY:function(){return Qe},JJ:function(){return pe},Jd:function(){return St},Ko:function(){return Bt},LL:function(){return Mt},P$:function(){return it},Q2:function(){return Ut},Q6:function(){return lt},U2:function(){return st},Uk:function(){return wn},Us:function(){return je},WI:function(){return zt},Wm:function(){return gn},Y3:function(){return v},Y8:function(){return tt},YP:function(){return W},_:function(){return mn},aZ:function(){return ht},bv:function(){return Tt},dD:function(){return L},f3:function(){return me},h:function(){return Xn},iD:function(){return cn},ic:function(){return Ot},j4:function(){return un},kq:function(){return En},lR:function(){return Ge},nJ:function(){return nt},nK:function(){return ut},uE:function(){return _n},up:function(){return Lt},w5:function(){return M},wg:function(){return nn},wy:function(){return X}});n(7658),n(1703),n(541);var r=n(4870),i=n(7139);function o(t,e,n,r){let i;try{i=r?t(...r):t()}catch(o){a(o,e,n)}return i}function s(t,e,n,r){if((0,i.mf)(t)){const s=o(t,e,n,r);return s&&(0,i.tI)(s)&&s.catch((t=>{a(t,e,n)})),s}const c=[];for(let i=0;i<t.length;i++)c.push(s(t[i],e,n,r));return c}function a(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,s=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,s))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void o(a,null,10,[t,i,s])}c(t,n,i,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let f=0;const d=[];let p=null,m=0;const g=Promise.resolve();let y=null;function v(t){const e=y||g;return t?e.then(this?t.bind(this):t):e}function b(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,i=O(h[r]);i<t?e=r+1:n=r}return e}function w(t){h.length&&h.includes(t,u&&t.allowRecurse?f+1:f)||(null==t.id?h.push(t):h.splice(b(t.id),0,t),_())}function _(){u||l||(l=!0,y=g.then(k))}function E(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function I(t){(0,i.kJ)(t)?d.push(...t):p&&p.includes(t,t.allowRecurse?m+1:m)||d.push(t),_()}function T(t,e=(u?f+1:0)){for(0;e<h.length;e++){const t=h[e];t&&t.pre&&(h.splice(e,1),e--,t())}}function A(t){if(d.length){const t=[...new Set(d)];if(d.length=0,p)return void p.push(...t);for(p=t,p.sort(((t,e)=>O(t)-O(e))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const O=t=>null==t.id?1/0:t.id,S=(t,e)=>{const n=O(t)-O(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function k(t){l=!1,u=!0,h.sort(S);i.dG;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&o(t,null,14)}}finally{f=0,h.length=0,A(t),u=!1,y=null,(h.length||d.length)&&k(t)}}function C(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.kT;let o=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:s}=r[t]||i.kT;s&&(o=n.map((t=>(0,i.HD)(t)?t.trim():t))),e&&(o=n.map(i.h5))}let u;let l=r[u=(0,i.hR)(e)]||r[u=(0,i.hR)((0,i._A)(e))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(e))]),l&&s(l,t,6,o);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,s(h,t,6,o)}}function R(t,e,n=!1){const r=e.emitsCache,o=r.get(t);if(void 0!==o)return o;const s=t.emits;let a={},c=!1;if(!(0,i.mf)(t)){const r=t=>{const n=R(t,e,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return s||c?((0,i.kJ)(s)?s.forEach((t=>a[t]=null)):(0,i.l7)(a,s),(0,i.Kn)(t)&&r.set(t,a),a):((0,i.Kn)(t)&&r.set(t,null),null)}function x(t,e){return!(!t||!(0,i.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,i.RI)(t,(0,i.rs)(e))||(0,i.RI)(t,e))}let P=null,N=null;function D(t){const e=P;return P=t,N=t&&t.type.__scopeId||null,e}function L(t){N=t}function j(){N=null}function M(t,e=P,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&sn(-1);const i=D(e);let o;try{o=t(...n)}finally{D(i),r._d&&sn(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function U(t){const{type:e,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[c],slots:u,attrs:l,emit:h,render:f,renderCache:d,data:p,setupState:m,ctx:g,inheritAttrs:y}=t;let v,b;const w=D(t);try{if(4&n.shapeFlag){const t=o||r;v=In(f.call(t,t,d,s,m,p,g)),b=l}else{const t=e;0,v=In(t.length>1?t(s,{attrs:l,slots:u,emit:h}):t(s,null)),b=e.props?l:F(l)}}catch(E){tn.length=0,a(E,t,1),v=gn(Xe)}let _=v;if(b&&!1!==y){const t=Object.keys(b),{shapeFlag:e}=_;t.length&&7&e&&(c&&t.some(i.tR)&&(b=V(b,c)),_=bn(_,b))}return n.dirs&&(_=bn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,D(w),v}const F=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.F7)(n))&&((e||(e={}))[n]=t[n]);return e},V=(t,e)=>{const n={};for(const r in t)(0,i.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function B(t,e,n){const{props:r,children:i,component:o}=t,{props:s,children:a,patchFlag:c}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||z(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?z(r,s,u):!!s;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(s[n]!==r[n]&&!x(u,n))return!0}}return!1}function z(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!x(n,o))return!0}return!1}function $({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const q=t=>t.__isSuspense;function H(t,e){e&&e.pendingBranch?(0,i.kJ)(t)?e.effects.push(...t):e.effects.push(t):I(t)}const K={};function W(t,e,n){return G(t,e,n)}function G(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){var h;const f=(0,r.nZ)()===(null==(h=xn)?void 0:h.scope)?xn:null;let d,p,m=!1,g=!1;if((0,r.dq)(t)?(d=()=>t.value,m=(0,r.yT)(t)):(0,r.PG)(t)?(d=()=>t,a=!0):(0,i.kJ)(t)?(g=!0,m=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),d=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?Y(t):(0,i.mf)(t)?o(t,f,2):void 0))):d=(0,i.mf)(t)?e?()=>o(t,f,2):()=>{if(!f||!f.isUnmounted)return p&&p(),s(t,f,3,[v])}:i.dG,e&&a){const t=d;d=()=>Y(t())}let y,v=t=>{p=I.onStop=()=>{o(t,f,4)}};if(Bn){if(v=i.dG,e?n&&s(e,f,3,[d(),g?[]:void 0,v]):d(),"sync"!==c)return i.dG;{const t=tr();y=t.__watcherHandles||(t.__watcherHandles=[])}}let b=g?new Array(t.length).fill(K):K;const _=()=>{if(I.active)if(e){const t=I.run();(a||m||(g?t.some(((t,e)=>(0,i.aU)(t,b[e]))):(0,i.aU)(t,b)))&&(p&&p(),s(e,f,3,[t,b===K?void 0:g&&b[0]===K?[]:b,v]),b=t)}else I.run()};let E;_.allowRecurse=!!e,"sync"===c?E=_:"post"===c?E=()=>Le(_,f&&f.suspense):(_.pre=!0,f&&(_.id=f.uid),E=()=>w(_));const I=new r.qq(d,E);e?n?_():b=I.run():"post"===c?Le(I.run.bind(I),f&&f.suspense):I.run();const T=()=>{I.stop(),f&&f.scope&&(0,i.Od)(f.scope.effects,I)};return y&&y.push(T),T}function J(t,e,n){const r=this.proxy,o=(0,i.HD)(t)?t.includes(".")?Q(r,t):()=>r[t]:t.bind(r,r);let s;(0,i.mf)(e)?s=e:(s=e.handler,n=e);const a=xn;jn(this);const c=G(o,s.bind(r),n);return a?jn(a):Mn(),c}function Q(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function Y(t,e){if(!(0,i.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))Y(t.value,e);else if((0,i.kJ)(t))for(let n=0;n<t.length;n++)Y(t[n],e);else if((0,i.DM)(t)||(0,i._N)(t))t.forEach((t=>{Y(t,e)}));else if((0,i.PO)(t))for(const n in t)Y(t[n],e);return t}function X(t,e){const n=P;if(null===n)return t;const r=Gn(n)||n.proxy,o=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[t,n,a,c=i.kT]=e[s];t&&((0,i.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&Y(n),o.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return t}function Z(t,e,n,i){const o=t.dirs,a=e&&e.dirs;for(let c=0;c<o.length;c++){const u=o[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),s(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}function tt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tt((()=>{t.isMounted=!0})),St((()=>{t.isUnmounting=!0})),t}const et=[Function,Array],nt={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:et,onEnter:et,onAfterEnter:et,onEnterCancelled:et,onBeforeLeave:et,onLeave:et,onAfterLeave:et,onLeaveCancelled:et,onBeforeAppear:et,onAppear:et,onAfterAppear:et,onAppearCancelled:et},rt={name:"BaseTransition",props:nt,setup(t,{slots:e}){const n=Pn(),i=tt();let o;return()=>{const s=e.default&&lt(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let t=!1;for(const e of s)if(e.type!==Xe){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:u}=c;if(i.isLeaving)return at(a);const l=ct(a);if(!l)return at(a);const h=st(l,c,i,n);ut(l,h);const f=n.subTree,d=f&&ct(f);let p=!1;const{getTransitionKey:m}=l.type;if(m){const t=m();void 0===o?o=t:t!==o&&(o=t,p=!0)}if(d&&d.type!==Xe&&(!hn(l,d)||p)){const t=st(d,c,i,n);if(ut(d,t),"out-in"===u)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},at(a);"in-out"===u&&l.type!==Xe&&(t.delayLeave=(t,e,n)=>{const r=ot(i,d);r[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},it=rt;function ot(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function st(t,e,n,r){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:b,onAppearCancelled:w}=e,_=String(t.key),E=ot(n,t),I=(t,e)=>{t&&s(t,r,9,e)},T=(t,e)=>{const n=e[1];I(t,e),(0,i.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},A={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!o)return;r=y||u}e._leaveCb&&e._leaveCb(!0);const i=E[_];i&&hn(t,i)&&i.el._leaveCb&&i.el._leaveCb(),I(r,[e])},enter(t){let e=l,r=h,i=f;if(!n.isMounted){if(!o)return;e=v||l,r=b||h,i=w||f}let s=!1;const a=t._enterCb=e=>{s||(s=!0,I(e?i:r,[t]),A.delayedLeave&&A.delayedLeave(),t._enterCb=void 0)};e?T(e,[t,a]):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();I(d,[e]);let o=!1;const s=e._leaveCb=n=>{o||(o=!0,r(),I(n?g:m,[e]),e._leaveCb=void 0,E[i]===t&&delete E[i])};E[i]=t,p?T(p,[e,s]):s()},clone(t){return st(t,e,n,r)}};return A}function at(t){if(dt(t))return t=bn(t),t.children=null,t}function ct(t){return dt(t)?t.children?t.children[0]:void 0:t}function ut(t,e){6&t.shapeFlag&&t.component?ut(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function lt(t,e=!1,n){let r=[],i=0;for(let o=0;o<t.length;o++){let s=t[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Qe?(128&s.patchFlag&&i++,r=r.concat(lt(s.children,e,a))):(e||s.type!==Xe)&&r.push(null!=a?bn(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function ht(t,e){return(0,i.mf)(t)?(()=>(0,i.l7)({name:t.name},e,{setup:t}))():t}const ft=t=>!!t.type.__asyncLoader;const dt=t=>t.type.__isKeepAlive;RegExp,RegExp;function pt(t,e){return(0,i.kJ)(t)?t.some((t=>pt(t,e))):(0,i.HD)(t)?t.split(",").includes(e):!!(0,i.Kj)(t)&&t.test(e)}function mt(t,e){yt(t,"a",e)}function gt(t,e){yt(t,"da",e)}function yt(t,e,n=xn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(_t(e,r,n),n){let t=n.parent;while(t&&t.parent)dt(t.parent.vnode)&&vt(r,e,n,t),t=t.parent}}function vt(t,e,n,r){const o=_t(e,t,r,!0);kt((()=>{(0,i.Od)(r[e],o)}),n)}function bt(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function wt(t){return 128&t.shapeFlag?t.ssContent:t}function _t(t,e,n=xn,i=!1){if(n){const o=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),jn(n);const o=s(e,n,t,i);return Mn(),(0,r.lk)(),o});return i?o.unshift(a):o.push(a),a}}const Et=t=>(e,n=xn)=>(!Bn||"sp"===t)&&_t(t,((...t)=>e(...t)),n),It=Et("bm"),Tt=Et("m"),At=Et("bu"),Ot=Et("u"),St=Et("bum"),kt=Et("um"),Ct=Et("sp"),Rt=Et("rtg"),xt=Et("rtc");function Pt(t,e=xn){_t("ec",t,e)}const Nt="components",Dt="directives";function Lt(t,e){return Ft(Nt,t,!0,e)||t}const jt=Symbol.for("v-ndc");function Mt(t){return(0,i.HD)(t)?Ft(Nt,t,!1)||t:t||jt}function Ut(t){return Ft(Dt,t)}function Ft(t,e,n=!0,r=!1){const o=P||xn;if(o){const n=o.type;if(t===Nt){const t=Jn(n,!1);if(t&&(t===e||t===(0,i._A)(e)||t===(0,i.kC)((0,i._A)(e))))return n}const s=Vt(o[t]||n[t],e)||Vt(o.appContext[t],e);return!s&&r?n:s}}function Vt(t,e){return t&&(t[e]||t[(0,i._A)(e)]||t[(0,i.kC)((0,i._A)(e))])}function Bt(t,e,n,r){let o;const s=n&&n[r];if((0,i.kJ)(t)||(0,i.HD)(t)){o=new Array(t.length);for(let n=0,r=t.length;n<r;n++)o[n]=e(t[n],n,void 0,s&&s[n])}else if("number"===typeof t){0,o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,s&&s[n])}else if((0,i.Kn)(t))if(t[Symbol.iterator])o=Array.from(t,((t,n)=>e(t,n,void 0,s&&s[n])));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=e(t[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}function zt(t,e,n={},r,i){if(P.isCE||P.parent&&ft(P.parent)&&P.parent.isCE)return"default"!==e&&(n.name=e),gn("slot",n,r&&r());let o=t[e];o&&o._c&&(o._d=!1),nn();const s=o&&$t(o(n)),a=un(Qe,{key:n.key||s&&s.key||`_${e}`},s||(r?r():[]),s&&1===t._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function $t(t){return t.some((t=>!ln(t)||t.type!==Xe&&!(t.type===Qe&&!$t(t.children))))?t:null}const qt=t=>t?Un(t)?Gn(t)||t.proxy:qt(t.parent):null,Ht=(0,i.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qt(t.parent),$root:t=>qt(t.root),$emit:t=>t.emit,$options:t=>te(t),$forceUpdate:t=>t.f||(t.f=()=>w(t.update)),$nextTick:t=>t.n||(t.n=v.bind(t.proxy)),$watch:t=>J.bind(t)}),Kt=(t,e)=>t!==i.kT&&!t.__isScriptSetup&&(0,i.RI)(t,e),Wt={get({_:t},e){const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return o[e];case 2:return s[e];case 4:return n[e];case 3:return a[e]}else{if(Kt(o,e))return c[e]=1,o[e];if(s!==i.kT&&(0,i.RI)(s,e))return c[e]=2,s[e];if((h=t.propsOptions[0])&&(0,i.RI)(h,e))return c[e]=3,a[e];if(n!==i.kT&&(0,i.RI)(n,e))return c[e]=4,n[e];Jt&&(c[e]=0)}}const f=Ht[e];let d,p;return f?("$attrs"===e&&(0,r.j)(t,"get",e),f(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==i.kT&&(0,i.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:o,ctx:s}=t;return Kt(o,e)?(o[e]=n,!0):r!==i.kT&&(0,i.RI)(r,e)?(r[e]=n,!0):!(0,i.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(s[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||t!==i.kT&&(0,i.RI)(t,a)||Kt(e,a)||(c=s[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(Ht,a)||(0,i.RI)(o.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gt(t){return(0,i.kJ)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let Jt=!0;function Qt(t){const e=te(t),n=t.proxy,o=t.ctx;Jt=!1,e.beforeCreate&&Xt(e.beforeCreate,t,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:E,render:I,renderTracked:T,renderTriggered:A,errorCaptured:O,serverPrefetch:S,expose:k,inheritAttrs:C,components:R,directives:x,filters:P}=e,N=null;if(h&&Yt(h,o,N),c)for(const r in c){const t=c[r];(0,i.mf)(t)&&(o[r]=t.bind(n))}if(s){0;const e=s.call(n,n);0,(0,i.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Jt=!0,a)for(const r in a){const t=a[r],e=(0,i.mf)(t)?t.bind(n,n):(0,i.mf)(t.get)?t.get.bind(n,n):i.dG;0;const s=!(0,i.mf)(t)&&(0,i.mf)(t.set)?t.set.bind(n):i.dG,c=Yn({get:e,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Zt(u[r],o,n,r);if(l){const t=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{pe(e,t[e])}))}function D(t,e){(0,i.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&Xt(f,t,"c"),D(It,d),D(Tt,p),D(At,m),D(Ot,g),D(mt,y),D(gt,v),D(Pt,O),D(xt,T),D(Rt,A),D(St,w),D(kt,E),D(Ct,S),(0,i.kJ)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});I&&t.render===i.dG&&(t.render=I),null!=C&&(t.inheritAttrs=C),R&&(t.components=R),x&&(t.directives=x)}function Yt(t,e,n=i.dG){(0,i.kJ)(t)&&(t=oe(t));for(const o in t){const n=t[o];let s;s=(0,i.Kn)(n)?"default"in n?me(n.from||o,n.default,!0):me(n.from||o):me(n),(0,r.dq)(s)?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:t=>s.value=t}):e[o]=s}}function Xt(t,e,n){s((0,i.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Zt(t,e,n,r){const o=r.includes(".")?Q(n,r):()=>n[r];if((0,i.HD)(t)){const n=e[t];(0,i.mf)(n)&&W(o,n)}else if((0,i.mf)(t))W(o,t.bind(n));else if((0,i.Kn)(t))if((0,i.kJ)(t))t.forEach((t=>Zt(t,e,n,r)));else{const r=(0,i.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.mf)(r)&&W(o,r,t)}else 0}function te(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,c=s.get(e);let u;return c?u=c:o.length||n||r?(u={},o.length&&o.forEach((t=>ee(u,t,a,!0))),ee(u,e,a)):u=e,(0,i.Kn)(e)&&s.set(e,u),u}function ee(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&ee(t,o,n,!0),i&&i.forEach((e=>ee(t,e,n,!0)));for(const s in e)if(r&&"expose"===s);else{const r=ne[s]||n&&n[s];t[s]=r?r(t[s],e[s]):e[s]}return t}const ne={data:re,props:ce,emits:ce,methods:ae,computed:ae,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:ae,directives:ae,watch:ue,provide:re,inject:ie};function re(t,e){return e?t?function(){return(0,i.l7)((0,i.mf)(t)?t.call(this,this):t,(0,i.mf)(e)?e.call(this,this):e)}:e:t}function ie(t,e){return ae(oe(t),oe(e))}function oe(t){if((0,i.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function se(t,e){return t?[...new Set([].concat(t,e))]:e}function ae(t,e){return t?(0,i.l7)(Object.create(null),t,e):e}function ce(t,e){return t?(0,i.kJ)(t)&&(0,i.kJ)(e)?[...new Set([...t,...e])]:(0,i.l7)(Object.create(null),Gt(t),Gt(null!=e?e:{})):e}function ue(t,e){if(!t)return e;if(!e)return t;const n=(0,i.l7)(Object.create(null),t);for(const r in e)n[r]=se(t[r],e[r]);return n}function le(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let he=0;function fe(t,e){return function(n,r=null){(0,i.mf)(n)||(n=(0,i.l7)({},n)),null==r||(0,i.Kn)(r)||(r=null);const o=le();const s=new Set;let a=!1;const c=o.app={_uid:he++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:er,get config(){return o.config},set config(t){0},use(t,...e){return s.has(t)||(t&&(0,i.mf)(t.install)?(s.add(t),t.install(c,...e)):(0,i.mf)(t)&&(s.add(t),t(c,...e))),c},mixin(t){return o.mixins.includes(t)||o.mixins.push(t),c},component(t,e){return e?(o.components[t]=e,c):o.components[t]},directive(t,e){return e?(o.directives[t]=e,c):o.directives[t]},mount(i,s,u){if(!a){0;const l=gn(n,r);return l.appContext=o,s&&e?e(l,i):t(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Gn(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return o.provides[t]=e,c},runWithContext(t){de=c;try{return t()}finally{de=null}}};return c}}let de=null;function pe(t,e){if(xn){let n=xn.provides;const r=xn.parent&&xn.parent.provides;r===n&&(n=xn.provides=Object.create(r)),n[t]=e}else 0}function me(t,e,n=!1){const r=xn||P;if(r||de){const o=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:de._context.provides;if(o&&t in o)return o[t];if(arguments.length>1)return n&&(0,i.mf)(e)?e.call(r&&r.proxy):e}else 0}function ge(){return!!(xn||P||de)}function ye(t,e,n,o=!1){const s={},a={};(0,i.Nj)(a,fn,1),t.propsDefaults=Object.create(null),be(t,e,s,a);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=o?s:(0,r.Um)(s):t.type.props?t.props=s:t.props=a,t.attrs=a}function ve(t,e,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(s),[l]=t.propsOptions;let h=!1;if(!(o||c>0)||16&c){let r;be(t,e,s,a)&&(h=!0);for(const o in u)e&&((0,i.RI)(e,o)||(r=(0,i.rs)(o))!==o&&(0,i.RI)(e,r))||(l?!n||void 0===n[o]&&void 0===n[r]||(s[o]=we(l,u,o,void 0,t,!0)):delete s[o]);if(a!==u)for(const t in a)e&&(0,i.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(x(t.emitsOptions,o))continue;const c=e[o];if(l)if((0,i.RI)(a,o))c!==a[o]&&(a[o]=c,h=!0);else{const e=(0,i._A)(o);s[e]=we(l,u,e,c,t,!1)}else c!==a[o]&&(a[o]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function be(t,e,n,o){const[s,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.Gg)(r))continue;const l=e[r];let h;s&&(0,i.RI)(s,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:x(t.emitsOptions,r)||r in o&&l===o[r]||(o[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),o=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=we(s,e,c,o[c],t,!(0,i.RI)(o,c))}}return u}function we(t,e,n,r,o,s){const a=t[n];if(null!=a){const t=(0,i.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.mf)(t)){const{propsDefaults:i}=o;n in i?r=i[n]:(jn(o),r=i[n]=t.call(null,e),Mn())}else r=t}a[0]&&(s&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function _e(t,e,n=!1){const r=e.propsCache,o=r.get(t);if(o)return o;const s=t.props,a={},c=[];let u=!1;if(!(0,i.mf)(t)){const r=t=>{u=!0;const[n,r]=_e(t,e,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!s&&!u)return(0,i.Kn)(t)&&r.set(t,i.Z6),i.Z6;if((0,i.kJ)(s))for(let h=0;h<s.length;h++){0;const t=(0,i._A)(s[h]);Ee(t)&&(a[t]=i.kT)}else if(s){0;for(const t in s){const e=(0,i._A)(t);if(Ee(e)){const n=s[t],r=a[e]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:(0,i.l7)({},n);if(r){const t=Ae(Boolean,r.type),n=Ae(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return(0,i.Kn)(t)&&r.set(t,l),l}function Ee(t){return"$"!==t[0]}function Ie(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:null===t?"null":""}function Te(t,e){return Ie(t)===Ie(e)}function Ae(t,e){return(0,i.kJ)(e)?e.findIndex((e=>Te(e,t))):(0,i.mf)(e)&&Te(e,t)?0:-1}const Oe=t=>"_"===t[0]||"$stable"===t,Se=t=>(0,i.kJ)(t)?t.map(In):[In(t)],ke=(t,e,n)=>{if(e._n)return e;const r=M(((...t)=>Se(e(...t))),n);return r._c=!1,r},Ce=(t,e,n)=>{const r=t._ctx;for(const o in t){if(Oe(o))continue;const n=t[o];if((0,i.mf)(n))e[o]=ke(o,n,r);else if(null!=n){0;const t=Se(n);e[o]=()=>t}}},Re=(t,e)=>{const n=Se(e);t.slots.default=()=>n},xe=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,i.Nj)(e,"_",n)):Ce(e,t.slots={})}else t.slots={},e&&Re(t,e);(0,i.Nj)(t.slots,fn,1)},Pe=(t,e,n)=>{const{vnode:r,slots:o}=t;let s=!0,a=i.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?s=!1:((0,i.l7)(o,e),n||1!==t||delete o._):(s=!e.$stable,Ce(e,o)),a=e}else e&&(Re(t,e),a={default:1});if(s)for(const i in o)Oe(i)||i in a||delete o[i]};function Ne(t,e,n,s,a=!1){if((0,i.kJ)(t))return void t.forEach(((t,r)=>Ne(t,e&&((0,i.kJ)(e)?e[r]:e),n,s,a)));if(ft(s)&&!a)return;const c=4&s.shapeFlag?Gn(s.component)||s.component.proxy:s.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,i.HD)(f)?(d[f]=null,(0,i.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,i.mf)(h))o(h,l,12,[u,d]);else{const e=(0,i.HD)(h),o=(0,r.dq)(h);if(e||o){const r=()=>{if(t.f){const n=e?(0,i.RI)(p,h)?p[h]:d[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):e?(d[h]=[c],(0,i.RI)(p,h)&&(p[h]=d[h])):(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):o&&(h.value=u,t.k&&(d[t.k]=u))};u?(r.id=-1,Le(r,n)):r()}else 0}}function De(){}const Le=H;function je(t){return Me(t)}function Me(t,e){De();const n=(0,i.E9)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=t,y=(t,e,n,r=null,i=null,o=null,s=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!hn(t,e)&&(r=X(t),W(t,i,o,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Ye:v(t,e,n,r);break;case Xe:b(t,e,n,r);break;case Ze:null==t&&_(e,n,r,s);break;case Qe:D(t,e,n,r,i,o,s,a,c);break;default:1&h?S(t,e,n,r,i,o,s,a,c):6&h?L(t,e,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,o,s,a,c,et)}null!=l&&i&&Ne(l,t&&t.ref,o,e||t,!e)},v=(t,e,n,r)=>{if(null==t)o(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?o(e.el=l(e.children||""),n,r):e.el=t.el},_=(t,e,n,r)=>{[t.el,t.anchor]=g(t.children,e,n,r,t.el,t.anchor)},I=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),o(t,n,r),t=i;o(e,n,r)},O=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),s(t),t=n;s(e)},S=(t,e,n,r,i,o,s,a,c)=>{s=s||"svg"===e.type,null==t?k(e,n,r,i,o,s,a,c):x(t,e,i,o,s,a,c)},k=(t,e,n,r,s,u,l,h)=>{let d,p;const{type:m,props:g,shapeFlag:y,transition:v,dirs:b}=t;if(d=t.el=c(t.type,u,g&&g.is,g),8&y?f(d,t.children):16&y&&R(t.children,d,null,r,s,u&&"foreignObject"!==m,l,h),b&&Z(t,null,r,"created"),C(d,t,t.scopeId,l,r),g){for(const e in g)"value"===e||(0,i.Gg)(e)||a(d,e,null,g[e],u,t.children,r,s,Y);"value"in g&&a(d,"value",null,g.value),(p=g.onVnodeBeforeMount)&&Sn(p,r,t)}b&&Z(t,null,r,"beforeMount");const w=(!s||s&&!s.pendingBranch)&&v&&!v.persisted;w&&v.beforeEnter(d),o(d,e,n),((p=g&&g.onVnodeMounted)||w||b)&&Le((()=>{p&&Sn(p,r,t),w&&v.enter(d),b&&Z(t,null,r,"mounted")}),s)},C=(t,e,n,r,i)=>{if(n&&m(t,n),r)for(let o=0;o<r.length;o++)m(t,r[o]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;C(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},R=(t,e,n,r,i,o,s,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?Tn(t[u]):In(t[u]);y(null,c,e,n,r,i,o,s,a)}},x=(t,e,n,r,o,s,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.kT,m=e.props||i.kT;let g;n&&Ue(n,!1),(g=m.onVnodeBeforeUpdate)&&Sn(g,n,e,t),d&&Z(e,t,n,"beforeUpdate"),n&&Ue(n,!0);const y=o&&"foreignObject"!==e.type;if(h?P(t.dynamicChildren,h,u,n,r,y,s):c||z(t,e,u,null,n,r,y,s,!1),l>0){if(16&l)N(u,e,p,m,n,r,o);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,o),4&l&&a(u,"style",p.style,m.style,o),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const s=i[e],c=p[s],l=m[s];l===c&&"value"!==s||a(u,s,c,l,o,t.children,n,r,Y)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||N(u,e,p,m,n,r,o);((g=m.onVnodeUpdated)||d)&&Le((()=>{g&&Sn(g,n,e,t),d&&Z(e,t,n,"updated")}),r)},P=(t,e,n,r,i,o,s)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Qe||!hn(c,u)||70&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,i,o,s,!0)}},N=(t,e,n,r,o,s,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,o,s,Y);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,o,s,Y)}"value"in r&&a(t,"value",n.value,r.value)}},D=(t,e,n,r,i,s,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:m}=e;m&&(c=c?c.concat(m):m),null==t?(o(h,n,r),o(f,n,r),R(e.children,n,f,i,s,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(P(t.dynamicChildren,p,n,i,s,a,c),(null!=e.key||i&&e===i.subTree)&&Fe(t,e,!0)):z(t,e,n,f,i,s,a,c,l)},L=(t,e,n,r,i,o,s,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,s,c):j(e,n,r,i,o,s,c):M(t,e,c)},j=(t,e,n,r,i,o,s)=>{const a=t.component=Rn(t,r,i);if(dt(t)&&(a.ctx.renderer=et),zn(a),a.asyncDep){if(i&&i.registerDep(a,F),!t.el){const t=a.subTree=gn(Xe);b(null,t,e,n)}}else F(a,t,e,n,i,o,s)},M=(t,e,n)=>{const r=e.component=t.component;if(B(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,e,n);r.next=e,E(r.update),r.update()}else e.el=t.el,r.vnode=e},F=(t,e,n,o,s,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:o,parent:u,vnode:l}=t,h=n;0,Ue(t,!1),n?(n.el=l.el,V(t,n,c)):n=l,r&&(0,i.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&Sn(e,u,n,l),Ue(t,!0);const f=U(t);0;const p=t.subTree;t.subTree=f,y(p,f,d(p.el),X(p),t,s,a),n.el=f.el,null===h&&$(t,f.el),o&&Le(o,s),(e=n.props&&n.props.onVnodeUpdated)&&Le((()=>Sn(e,u,n,l)),s)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=ft(e);if(Ue(t,!1),l&&(0,i.ir)(l),!d&&(r=u&&u.onVnodeBeforeMount)&&Sn(r,f,e),Ue(t,!0),c&&rt){const n=()=>{t.subTree=U(t),rt(c,t.subTree,t,s,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=U(t);0,y(null,r,n,o,t,s,a),e.el=r.el}if(h&&Le(h,s),!d&&(r=u&&u.onVnodeMounted)){const t=e;Le((()=>Sn(r,f,t)),s)}(256&e.shapeFlag||f&&ft(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&Le(t.a,s),t.isMounted=!0,e=n=o=null}},l=t.effect=new r.qq(u,(()=>w(h)),t.scope),h=t.update=()=>l.run();h.id=t.uid,Ue(t,!0),h()},V=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,ve(t,e.props,i,n),Pe(t,e.children,n),(0,r.Jd)(),T(),(0,r.lk)()},z=(t,e,n,r,i,o,s,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void H(u,h,n,r,i,o,s,a,c);if(256&d)return void q(u,h,n,r,i,o,s,a,c)}8&p?(16&l&&Y(u,i,o),h!==u&&f(n,h)):16&l?16&p?H(u,h,n,r,i,o,s,a,c):Y(u,i,o,!0):(8&l&&f(n,""),16&p&&R(h,n,r,i,o,s,a,c))},q=(t,e,n,r,o,s,a,c,u)=>{t=t||i.Z6,e=e||i.Z6;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?Tn(e[d]):In(e[d]);y(t[d],r,n,null,o,s,a,c,u)}l>h?Y(t,o,s,!0,!1,f):R(e,n,r,o,s,a,c,u,f)},H=(t,e,n,r,o,s,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?Tn(e[l]):In(e[l]);if(!hn(r,i))break;y(r,i,n,null,o,s,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?Tn(e[d]):In(e[d]);if(!hn(r,i))break;y(r,i,n,null,o,s,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)y(null,e[l]=u?Tn(e[l]):In(e[l]),n,i,o,s,a,c,u),l++}}else if(l>d)while(l<=f)W(t[l],o,s,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=d;l++){const t=e[l]=u?Tn(e[l]):In(e[l]);null!=t.key&&g.set(t.key,l)}let v,b=0;const w=d-m+1;let _=!1,E=0;const I=new Array(w);for(l=0;l<w;l++)I[l]=0;for(l=p;l<=f;l++){const r=t[l];if(b>=w){W(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=d;v++)if(0===I[v-m]&&hn(r,e[v])){i=v;break}void 0===i?W(r,o,s,!0):(I[i-m]=l+1,i>=E?E=i:_=!0,y(r,e[i],n,null,o,s,a,c,u),b++)}const T=_?Ve(I):i.Z6;for(v=T.length-1,l=w-1;l>=0;l--){const t=m+l,i=e[t],f=t+1<h?e[t+1].el:r;0===I[l]?y(null,i,n,f,o,s,a,c,u):_&&(v<0||l!==T[v]?K(i,n,f,2):v--)}}},K=(t,e,n,r,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void K(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,et);if(a===Qe){o(s,e,n);for(let t=0;t<u.length;t++)K(u[t],e,n,r);return void o(t.anchor,e,n)}if(a===Ze)return void I(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(s),o(s,e,n),Le((()=>c.enter(s)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>o(s,e,n),u=()=>{t(s,(()=>{a(),i&&i()}))};r?r(s,a,u):u()}else o(s,e,n)},W=(t,e,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&Ne(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!ft(t);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&Sn(m,e,t),6&l)Q(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&Z(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,et,r):u&&(o!==Qe||h>0&&64&h)?Y(u,e,n,!1,!0):(o===Qe&&384&h||!i&&16&l)&&Y(c,e,n),r&&G(t)}(p&&(m=s&&s.onVnodeUnmounted)||d)&&Le((()=>{m&&Sn(m,e,t),d&&Z(t,null,e,"unmounted")}),n)},G=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Qe)return void J(n,r);if(e===Ze)return void O(t);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,s=()=>e(n,o);r?r(t.el,o,s):s()}else o()},J=(t,e)=>{let n;while(t!==e)n=p(t),s(t),t=n;s(e)},Q=(t,e,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:c}=t;r&&(0,i.ir)(r),o.stop(),s&&(s.active=!1,W(a,t,e,n)),c&&Le(c,e),Le((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Y=(t,e,n,r=!1,i=!1,o=0)=>{for(let s=o;s<t.length;s++)W(t[s],e,n,r,i)},X=t=>6&t.shapeFlag?X(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&W(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),T(),A(),e._vnode=t},et={p:y,um:W,m:K,r:G,mt:j,mc:R,pc:z,pbc:P,n:X,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:fe(tt,nt)}}function Ue({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Fe(t,e,n=!1){const r=t.children,o=e.children;if((0,i.kJ)(r)&&(0,i.kJ)(o))for(let i=0;i<r.length;i++){const t=r[i];let e=o[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=o[i]=Tn(o[i]),e.el=t.el),n||Fe(t,e)),e.type===Ye&&(e.el=t.el)}}function Ve(t){const e=t.slice(),n=[0];let r,i,o,s,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=e[s];return n}const Be=t=>t.__isTeleport,ze=t=>t&&(t.disabled||""===t.disabled),$e=t=>"undefined"!==typeof SVGElement&&t instanceof SVGElement,qe=(t,e)=>{const n=t&&t.to;if((0,i.HD)(n)){if(e){const t=e(n);return t}return null}return n},He={__isTeleport:!0,process(t,e,n,r,i,o,s,a,c,u){const{mc:l,pc:h,pbc:f,o:{insert:d,querySelector:p,createText:m,createComment:g}}=u,y=ze(e.props);let{shapeFlag:v,children:b,dynamicChildren:w}=e;if(null==t){const t=e.el=m(""),u=e.anchor=m("");d(t,n,r),d(u,n,r);const h=e.target=qe(e.props,p),f=e.targetAnchor=m("");h&&(d(f,h),s=s||$e(h));const g=(t,e)=>{16&v&&l(b,t,e,i,o,s,a,c)};y?g(n,u):h&&g(h,f)}else{e.el=t.el;const r=e.anchor=t.anchor,l=e.target=t.target,d=e.targetAnchor=t.targetAnchor,m=ze(t.props),g=m?n:l,v=m?r:d;if(s=s||$e(l),w?(f(t.dynamicChildren,w,g,i,o,s,a),Fe(t,e,!0)):c||h(t,e,g,v,i,o,s,a,!1),y)m||Ke(e,n,r,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const t=e.target=qe(e.props,p);t&&Ke(e,t,null,u,0)}else m&&Ke(e,l,d,u,1)}Je(e)},remove(t,e,n,r,{um:i,o:{remove:o}},s){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:h,props:f}=t;if(h&&o(l),(s||!ze(f))&&(o(u),16&a))for(let d=0;d<c.length;d++){const t=c[d];i(t,e,n,!0,!!t.dynamicChildren)}},move:Ke,hydrate:We};function Ke(t,e,n,{o:{insert:r},m:i},o=2){0===o&&r(t.targetAnchor,e,n);const{el:s,anchor:a,shapeFlag:c,children:u,props:l}=t,h=2===o;if(h&&r(s,e,n),(!h||ze(l))&&16&c)for(let f=0;f<u.length;f++)i(u[f],e,n,2);h&&r(a,e,n)}function We(t,e,n,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:c}},u){const l=e.target=qe(e.props,c);if(l){const c=l._lpa||l.firstChild;if(16&e.shapeFlag)if(ze(e.props))e.anchor=u(s(t),e,a(t),n,r,i,o),e.targetAnchor=c;else{e.anchor=s(t);let a=c;while(a)if(a=s(a),a&&8===a.nodeType&&"teleport anchor"===a.data){e.targetAnchor=a,l._lpa=e.targetAnchor&&s(e.targetAnchor);break}u(c,e,l,n,r,i,o)}Je(e)}return e.anchor&&s(e.anchor)}const Ge=He;function Je(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;while(n!==t.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Qe=Symbol.for("v-fgt"),Ye=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),Ze=Symbol.for("v-stc"),tn=[];let en=null;function nn(t=!1){tn.push(en=t?null:[])}function rn(){tn.pop(),en=tn[tn.length-1]||null}let on=1;function sn(t){on+=t}function an(t){return t.dynamicChildren=on>0?en||i.Z6:null,rn(),on>0&&en&&en.push(t),t}function cn(t,e,n,r,i,o){return an(mn(t,e,n,r,i,o,!0))}function un(t,e,n,r,i){return an(gn(t,e,n,r,i,!0))}function ln(t){return!!t&&!0===t.__v_isVNode}function hn(t,e){return t.type===e.type&&t.key===e.key}const fn="__vInternal",dn=({key:t})=>null!=t?t:null,pn=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.HD)(t)||(0,r.dq)(t)||(0,i.mf)(t)?{i:P,r:t,k:e,f:!!n}:t:null);function mn(t,e=null,n=null,r=0,o=null,s=(t===Qe?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dn(e),ref:e&&pn(e),scopeId:N,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:P};return c?(An(u,n),128&s&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),on>0&&!a&&en&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&en.push(u),u}const gn=yn;function yn(t,e=null,n=null,o=0,s=null,a=!1){if(t&&t!==jt||(t=Xe),ln(t)){const r=bn(t,e,!0);return n&&An(r,n),on>0&&!a&&en&&(6&r.shapeFlag?en[en.indexOf(t)]=r:en.push(r)),r.patchFlag|=-2,r}if(Qn(t)&&(t=t.__vccOpts),e){e=vn(e);let{class:t,style:n}=e;t&&!(0,i.HD)(t)&&(e.class=(0,i.C_)(t)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),e.style=(0,i.j5)(n))}const c=(0,i.HD)(t)?1:q(t)?128:Be(t)?64:(0,i.Kn)(t)?4:(0,i.mf)(t)?2:0;return mn(t,e,n,o,s,c,a,!0)}function vn(t){return t?(0,r.X3)(t)||fn in t?(0,i.l7)({},t):t:null}function bn(t,e,n=!1){const{props:r,ref:o,patchFlag:s,children:a}=t,c=e?On(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&dn(c),ref:e&&e.ref?n&&o?(0,i.kJ)(o)?o.concat(pn(e)):[o,pn(e)]:pn(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?-1===s?16:16|s:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bn(t.ssContent),ssFallback:t.ssFallback&&bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u}function wn(t=" ",e=0){return gn(Ye,null,t,e)}function _n(t,e){const n=gn(Ze,null,t);return n.staticCount=e,n}function En(t="",e=!1){return e?(nn(),un(Xe,null,t)):gn(Xe,null,t)}function In(t){return null==t||"boolean"===typeof t?gn(Xe):(0,i.kJ)(t)?gn(Qe,null,t.slice()):"object"===typeof t?Tn(t):gn(Ye,null,String(t))}function Tn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:bn(t)}function An(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),An(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||fn in e?3===r&&P&&(1===P.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=P}}else(0,i.mf)(e)?(e={default:e,_ctx:P},n=32):(e=String(e),64&r?(n=16,e=[wn(e)]):n=8);t.children=e,t.shapeFlag|=n}function On(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C_)([e.class,r.class]));else if("style"===t)e.style=(0,i.j5)([e.style,r.style]);else if((0,i.F7)(t)){const n=e[t],o=r[t];!o||n===o||(0,i.kJ)(n)&&n.includes(o)||(e[t]=n?[].concat(n,o):o)}else""!==t&&(e[t]=r[t])}return e}function Sn(t,e,n,r=null){s(t,e,7,[n,r])}const kn=le();let Cn=0;function Rn(t,e,n){const o=t.type,s=(e?e.appContext:t.appContext)||kn,a={uid:Cn++,vnode:t,type:o,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_e(o,s),emitsOptions:R(o,s),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:o.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=C.bind(null,a),t.ce&&t.ce(a),a}let xn=null;const Pn=()=>xn||P;let Nn,Dn,Ln="__VUE_INSTANCE_SETTERS__";(Dn=(0,i.E9)()[Ln])||(Dn=(0,i.E9)()[Ln]=[]),Dn.push((t=>xn=t)),Nn=t=>{Dn.length>1?Dn.forEach((e=>e(t))):Dn[0](t)};const jn=t=>{Nn(t),t.scope.on()},Mn=()=>{xn&&xn.scope.off(),Nn(null)};function Un(t){return 4&t.vnode.shapeFlag}let Fn,Vn,Bn=!1;function zn(t,e=!1){Bn=e;const{props:n,children:r}=t.vnode,i=Un(t);ye(t,n,i,e),xe(t,r);const o=i?$n(t,e):void 0;return Bn=!1,o}function $n(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,Wt));const{setup:s}=n;if(s){const n=t.setupContext=s.length>1?Wn(t):null;jn(t),(0,r.Jd)();const c=o(s,t,0,[t.props,n]);if((0,r.lk)(),Mn(),(0,i.tI)(c)){if(c.then(Mn,Mn),e)return c.then((n=>{qn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else qn(t,c,e)}else Hn(t,e)}function qn(t,e,n){(0,i.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Kn)(e)&&(t.setupState=(0,r.WL)(e)),Hn(t,n)}function Hn(t,e,n){const o=t.type;if(!t.render){if(!e&&Fn&&!o.render){const e=o.template||te(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:s},r),a);o.render=Fn(e,c)}}t.render=o.render||i.dG,Vn&&Vn(t)}jn(t),(0,r.Jd)(),Qt(t),(0,r.lk)(),Mn()}function Kn(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}}))}function Wn(t){const e=e=>{t.exposed=e||{}};return{get attrs(){return Kn(t)},slots:t.slots,emit:t.emit,expose:e}}function Gn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Ht?Ht[n](t):void 0},has(t,e){return e in t||e in Ht}}))}function Jn(t,e=!0){return(0,i.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function Qn(t){return(0,i.mf)(t)&&"__vccOpts"in t}const Yn=(t,e)=>(0,r.Fl)(t,e,Bn);function Xn(t,e,n){const r=arguments.length;return 2===r?(0,i.Kn)(e)&&!(0,i.kJ)(e)?ln(e)?gn(t,null,[e]):gn(t,e):gn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&ln(n)&&(n=[n]),gn(t,e,n))}const Zn=Symbol.for("v-scx"),tr=()=>{{const t=me(Zn);return t}};const er="3.3.4"},9242:function(t,e,n){"use strict";n.d(e,{F8:function(){return ft},iM:function(){return ht},nr:function(){return ct},ri:function(){return yt},uT:function(){return L}});n(7658);var r=n(7139),i=n(3396),o=n(4870);const s="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?a.createElementNS(s,t):a.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,o){const s=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${t}</svg>`:t;const i=c.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function h(t,e,n){const i=t.style,o=(0,r.HD)(n);if(n&&!o){if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&d(i,t,"");for(const t in n)d(i,t,n[t])}else{const r=i.display;o?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const f=/\s*!important$/;function d(t,e,n){if((0,r.kJ)(n))n.forEach((n=>d(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=g(t,e);f.test(n)?t.setProperty((0,r.rs)(i),n.replace(f,""),"important"):t[i]=n}}const p=["Webkit","Moz","ms"],m={};function g(t,e){const n=m[e];if(n)return n;let i=(0,r._A)(e);if("filter"!==i&&i in t)return m[e]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in t)return m[e]=n}return e}const y="http://www.w3.org/1999/xlink";function v(t,e,n,i,o){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(y,e.slice(6,e.length)):t.setAttributeNS(y,e,n);else{const i=(0,r.Pq)(e);null==n||i&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function b(t,e,n,i,o,s,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,o,s),void(t[e]=null==n?"":n);const c=t.tagName;if("value"===e&&"PROGRESS"!==c&&!c.includes("-")){t._value=n;const r="OPTION"===c?t.getAttribute("value"):t.value,i=null==n?"":n;return r!==i&&(t.value=i),void(null==n&&t.removeAttribute(e))}let u=!1;if(""===n||null==n){const i=typeof t[e];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",u=!0):"number"===i&&(n=0,u=!0)}try{t[e]=n}catch(l){0}u&&t.removeAttribute(e)}function w(t,e,n,r){t.addEventListener(e,n,r)}function _(t,e,n,r){t.removeEventListener(e,n,r)}function E(t,e,n,r,i=null){const o=t._vei||(t._vei={}),s=o[e];if(r&&s)s.value=r;else{const[n,a]=T(e);if(r){const s=o[e]=k(r,i);w(t,n,s,a)}else s&&(_(t,n,s,a),o[e]=void 0)}}const I=/(?:Once|Passive|Capture)$/;function T(t){let e;if(I.test(t)){let n;e={};while(n=t.match(I))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,r.rs)(t.slice(2));return[n,e]}let A=0;const O=Promise.resolve(),S=()=>A||(O.then((()=>A=0)),A=Date.now());function k(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,i.$d)(C(t,n.value),e,5,[t])};return n.value=t,n.attached=S(),n}function C(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const R=/^on[a-z]/,x=(t,e,n,i,o=!1,s,a,c,u)=>{"class"===e?l(t,i,o):"style"===e?h(t,n,i):(0,r.F7)(e)?(0,r.tR)(e)||E(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):P(t,e,i,o))?b(t,e,i,s,a,c,u):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),v(t,e,i,o))};function P(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&R.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!R.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const N="transition",D="animation",L=(t,{slots:e})=>(0,i.h)(i.P$,V(t),e);L.displayName="Transition";const j={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},M=L.props=(0,r.l7)({},i.nJ,j),U=(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)},F=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function V(t){const e={};for(const r in t)r in j||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=B(o),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:E,onBeforeAppear:I=v,onAppear:T=b,onAppearCancelled:A=w}=e,O=(t,e,n)=>{q(t,e?h:c),q(t,e?l:a),n&&n()},S=(t,e)=>{t._isLeaving=!1,q(t,f),q(t,p),q(t,d),e&&e()},k=t=>(e,n)=>{const r=t?T:b,o=()=>O(e,t,n);U(r,[e,o]),H((()=>{q(e,t?u:s),$(e,t?h:c),F(r)||W(e,i,g,o)}))};return(0,r.l7)(e,{onBeforeEnter(t){U(v,[t]),$(t,s),$(t,a)},onBeforeAppear(t){U(I,[t]),$(t,u),$(t,l)},onEnter:k(!1),onAppear:k(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>S(t,e);$(t,f),Y(),$(t,d),H((()=>{t._isLeaving&&(q(t,f),$(t,p),F(_)||W(t,i,y,n))})),U(_,[t,n])},onEnterCancelled(t){O(t,!1),U(w,[t])},onAppearCancelled(t){O(t,!0),U(A,[t])},onLeaveCancelled(t){S(t),U(E,[t])}})}function B(t){if(null==t)return null;if((0,r.Kn)(t))return[z(t.enter),z(t.leave)];{const e=z(t);return[e,e]}}function z(t){const e=(0,r.He)(t);return e}function $(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function q(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function H(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let K=0;function W(t,e,n,r){const i=t._endId=++K,o=()=>{i===t._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=G(t,e);if(!s)return r();const u=s+"end";let l=0;const h=()=>{t.removeEventListener(u,f),o()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,f)}function G(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(`${N}Delay`),o=r(`${N}Duration`),s=J(i,o),a=r(`${D}Delay`),c=r(`${D}Duration`),u=J(a,c);let l=null,h=0,f=0;e===N?s>0&&(l=N,h=s,f=o.length):e===D?u>0&&(l=D,h=u,f=c.length):(h=Math.max(s,u),l=h>0?s>u?N:D:null,f=l?l===N?o.length:c.length:0);const d=l===N&&/\b(transform|all)(,|$)/.test(r(`${N}Property`).toString());return{type:l,timeout:h,propCount:f,hasTransform:d}}function J(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Q(e)+Q(t[n]))))}function Q(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Y(){return document.body.offsetHeight}const X=new WeakMap,Z=new WeakMap,tt={name:"TransitionGroup",props:(0,r.l7)({},M,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,i.FN)(),r=(0,i.Y8)();let s,a;return(0,i.ic)((()=>{if(!s.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!it(s[0].el,n.vnode.el,e))return;s.forEach(et),s.forEach(nt);const r=s.filter(rt);Y(),r.forEach((t=>{const n=t.el,r=n.style;$(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,q(n,e))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,o.IU)(t),u=V(c);let l=c.tag||i.HY;s=a,a=e.default?(0,i.Q6)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,i.nK)(e,(0,i.U2)(e,u,r,n))}if(s)for(let t=0;t<s.length;t++){const e=s[t];(0,i.nK)(e,(0,i.U2)(e,u,r,n)),X.set(e,e.el.getBoundingClientRect())}return(0,i.Wm)(l,null,a)}}};tt.props;function et(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function nt(t){Z.set(t,t.el.getBoundingClientRect())}function rt(t){const e=X.get(t),n=Z.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function it(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const i=1===e.nodeType?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=G(r);return i.removeChild(r),o}const ot=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function st(t){t.target.composing=!0}function at(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ct={created(t,{modifiers:{lazy:e,trim:n,number:i}},o){t._assign=ot(o);const s=i||o.props&&"number"===o.props.type;w(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n&&(i=i.trim()),s&&(i=(0,r.h5)(i)),t._assign(i)})),n&&w(t,"change",(()=>{t.value=t.value.trim()})),e||(w(t,"compositionstart",st),w(t,"compositionend",at),w(t,"change",at))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:o}},s){if(t._assign=ot(s),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(i&&t.value.trim()===e)return;if((o||"number"===t.type)&&(0,r.h5)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const ut=["ctrl","shift","alt","meta"],lt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>ut.some((n=>t[`${n}Key`]&&!e.includes(n)))},ht=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=lt[e[t]];if(r&&r(n,e))return}return t(n,...r)},ft={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):dt(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),dt(t,!0),r.enter(t)):r.leave(t,(()=>{dt(t,!1)})):dt(t,e))},beforeUnmount(t,{value:e}){dt(t,e)}};function dt(t,e){t.style.display=e?t._vod:"none"}const pt=(0,r.l7)({patchProp:x},u);let mt;function gt(){return mt||(mt=(0,i.Us)(pt))}const yt=(...t)=>{const e=gt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=vt(t);if(!i)return;const o=e._component;(0,r.mf)(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e};function vt(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},7139:function(t,e,n){"use strict";n.d(e,{C_:function(){return X},DM:function(){return y},E9:function(){return q},F7:function(){return u},Gg:function(){return R},HD:function(){return _},He:function(){return z},Kj:function(){return b},Kn:function(){return I},NO:function(){return a},Nj:function(){return V},Od:function(){return f},PO:function(){return k},Pq:function(){return tt},RI:function(){return p},S0:function(){return C},W7:function(){return S},WV:function(){return rt},Z6:function(){return o},_A:function(){return N},_N:function(){return g},aU:function(){return U},dG:function(){return s},e1:function(){return K},fY:function(){return r},h5:function(){return B},hR:function(){return M},hq:function(){return it},ir:function(){return F},j5:function(){return W},kC:function(){return j},kJ:function(){return m},kT:function(){return i},l7:function(){return h},mf:function(){return w},rs:function(){return L},tI:function(){return T},tR:function(){return l},yA:function(){return et},yk:function(){return E},zw:function(){return ot}});n(7658);function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}const i={},o=[],s=()=>{},a=()=>!1,c=/^on[^a-z]/,u=t=>c.test(t),l=t=>t.startsWith("onUpdate:"),h=Object.assign,f=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},d=Object.prototype.hasOwnProperty,p=(t,e)=>d.call(t,e),m=Array.isArray,g=t=>"[object Map]"===O(t),y=t=>"[object Set]"===O(t),v=t=>"[object Date]"===O(t),b=t=>"[object RegExp]"===O(t),w=t=>"function"===typeof t,_=t=>"string"===typeof t,E=t=>"symbol"===typeof t,I=t=>null!==t&&"object"===typeof t,T=t=>I(t)&&w(t.then)&&w(t.catch),A=Object.prototype.toString,O=t=>A.call(t),S=t=>O(t).slice(8,-1),k=t=>"[object Object]"===O(t),C=t=>_(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),x=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},P=/-(\w)/g,N=x((t=>t.replace(P,((t,e)=>e?e.toUpperCase():"")))),D=/\B([A-Z])/g,L=x((t=>t.replace(D,"-$1").toLowerCase())),j=x((t=>t.charAt(0).toUpperCase()+t.slice(1))),M=x((t=>t?`on${j(t)}`:"")),U=(t,e)=>!Object.is(t,e),F=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},V=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},B=t=>{const e=parseFloat(t);return isNaN(e)?t:e},z=t=>{const e=_(t)?Number(t):NaN;return isNaN(e)?t:e};let $;const q=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",K=r(H);function W(t){if(m(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=_(r)?Y(r):W(r);if(i)for(const t in i)e[t]=i[t]}return e}return _(t)||I(t)?t:void 0}const G=/;(?![^(]*\))/g,J=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function Y(t){const e={};return t.replace(Q,"").split(G).forEach((t=>{if(t){const n=t.split(J);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function X(t){let e="";if(_(t))e=t;else if(m(t))for(let n=0;n<t.length;n++){const r=X(t[n]);r&&(e+=r+" ")}else if(I(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tt=r(Z);function et(t){return!!t||""===t}function nt(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=rt(t[r],e[r]);return n}function rt(t,e){if(t===e)return!0;let n=v(t),r=v(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=E(t),r=E(e),n||r)return t===e;if(n=m(t),r=m(e),n||r)return!(!n||!r)&&nt(t,e);if(n=I(t),r=I(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!rt(t[n],e[n]))return!1}}return String(t)===String(e)}function it(t,e){return t.findIndex((t=>rt(t,e)))}const ot=t=>_(t)?t:null==t?"":m(t)||I(t)&&(t.toString===A||!w(t.toString))?JSON.stringify(t,st,2):String(t),st=(t,e)=>e&&e.__v_isRef?st(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:y(e)?{[`Set(${e.size})`]:[...e.values()]}:!I(e)||m(e)||k(e)?e:String(e)},6112:function(t,e,n){"use strict";n.d(e,{Z:function(){return V}});n(1703),n(7658);var r=n(3396),i=n(4870);
/*!
 * Vue-Lazyload.js v3.0.0
 * (c) 2023 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
function o(t,e){return e={exports:{}},t(e,e.exports),e.exports}var s=o((function(t){const e=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,r=Object.getOwnPropertySymbols;function i(t){return"function"===typeof t||"[object Object]"===e.call(t)||Array.isArray(t)}t.exports=(t,...e)=>{if(!i(t))throw new TypeError("expected the first argument to be an object");if(0===e.length||"function"!==typeof Symbol||"function"!==typeof r)return t;for(let i of e){let e=r(i);for(let r of e)n.call(i,r)&&(t[r]=i[r])}return t}})),a=Object.freeze({__proto__:null,default:s,__moduleExports:s}),c=a&&s||a,u=o((function(t){const e=Object.prototype.toString,n=t=>"__proto__"!==t&&"constructor"!==t&&"prototype"!==t,r=t.exports=(t,...e)=>{let s=0;for(o(t)&&(t=e[s++]),t||(t={});s<e.length;s++)if(i(e[s])){for(const o of Object.keys(e[s]))n(o)&&(i(t[o])&&i(e[s][o])?r(t[o],e[s][o]):t[o]=e[s][o]);c(t,e[s])}return t};function i(t){return"function"===typeof t||"[object Object]"===e.call(t)}function o(t){return"object"===typeof t?null===t:"function"!==typeof t}}));const l="undefined"!==typeof window&&null!==window,h=f();function f(){return!!(l&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)&&("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0)}const d={event:"event",observer:"observer"};function p(t,e){if(!t.length)return;const n=t.indexOf(e);return n>-1?t.splice(n,1):void 0}function m(t,e){if("IMG"!==t.tagName||!t.getAttribute("data-srcset"))return"";let n=t.getAttribute("data-srcset").trim().split(",");const r=[],i=t.parentNode,o=i.offsetWidth*e;let s,a,c;n.forEach((t=>{t=t.trim(),s=t.lastIndexOf(" "),-1===s?(a=t,c=99999):(a=t.substr(0,s),c=parseInt(t.substr(s+1,t.length-s-2),10)),r.push([c,a])})),r.sort(((t,e)=>{if(t[0]<e[0])return 1;if(t[0]>e[0])return-1;if(t[0]===e[0]){if(-1!==e[1].indexOf(".webp",e[1].length-5))return 1;if(-1!==t[1].indexOf(".webp",t[1].length-5))return-1}return 0}));let u,l="";for(let h=0;h<r.length;h++){u=r[h],l=u[1];const t=r[h+1];if(t&&t[0]<o){l=u[1];break}if(!t){l=u[1];break}}return l}const g=(t=1)=>l&&window.devicePixelRatio||t;function y(){if(!l)return!1;let t=!0;function e(t,e){const n={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},r=new Image;r.onload=function(){const t=r.width>0&&r.height>0;e(t)},r.onerror=function(){e(!1)},r.src="data:image/webp;base64,"+n[t]}return e("lossy",(e=>{t=e})),e("lossless",(e=>{t=e})),e("alpha",(e=>{t=e})),e("animation",(e=>{t=e})),t}function v(t,e){let n=null,r=0;return function(){if(n)return;const i=Date.now()-r,o=this,s=arguments,a=function(){r=Date.now(),n=!1,t.apply(o,s)};i>=e?a():n=setTimeout(a,e)}}function b(){if(!l)return!1;let t=!1;try{const e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",S,e)}catch(e){}return t}const w=b(),_={on(t,e,n,r=!1){w?t.addEventListener(e,n,{capture:r,passive:!0}):t.addEventListener(e,n,r)},off(t,e,n,r=!1){t.removeEventListener(e,n,r)}},E=(t,e,n)=>{let r=new Image;if(!t||!t.src){const t=new Error("image src is required");return n(t)}t.cors&&(r.crossOrigin=t.cors),r.src=t.src,r.onload=function(){e({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src}),r=null},r.onerror=function(t){n(t)}},I=(t,e)=>"undefined"!==typeof getComputedStyle?getComputedStyle(t,null).getPropertyValue(e):t.style[e],T=t=>I(t,"overflow")+I(t,"overflowY")+I(t,"overflowX"),A=t=>{if(!l)return;if(!(t instanceof Element))return window;let e=t;while(e){if(e===document.body||e===document.documentElement)break;if(!e.parentNode)break;if(/(scroll|auto)/.test(T(e)))return e;e=e.parentNode}return window};function O(t){return null!==t&&"object"===typeof t}function S(){}class k{constructor(t){this.max=t||100,this._caches=[]}has(t){return this._caches.indexOf(t)>-1}add(t){this.has(t)||(this._caches.push(t),this._caches.length>this.max&&this.free())}free(){this._caches.shift()}}class C{constructor(t,e,n,r,i,o,s,a,c,u){this.el=t,this.src=e,this.error=n,this.loading=r,this.bindType=i,this.attempt=0,this.cors=a,this.naturalHeight=0,this.naturalWidth=0,this.options=s,this.rect={},this.$parent=o,this.elRenderer=c,this._imageCache=u,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}initState(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}record(t){this.performanceData[t]=Date.now()}update(t){const e=this.src;this.src=t.src,this.loading=t.loading,this.error=t.error,this.filter(),e!==this.src&&(this.attempt=0,this.initState())}getRect(){this.rect=this.el.getBoundingClientRect()}checkInView(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}filter(){for(const t in this.options.filter)this.options.filter[t](this,this.options)}renderLoading(t){this.state.loading=!0,E({src:this.loading,cors:this.cors},(()=>{this.render("loading",!1),this.state.loading=!1,t()}),(()=>{t(),this.state.loading=!1,this.options.silent||console.warn(`VueLazyload log: load failed with loading image(${this.loading})`)}))}load(t=S){return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log(`VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`),void t()):this.state.rendered&&this.state.loaded?void 0:this._imageCache.has(this.src)?(this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,t()):void this.renderLoading((()=>{this.attempt++,this.options.adapter.beforeLoad&&this.options.adapter.beforeLoad(this,this.options),this.record("loadStart"),E({src:this.src,cors:this.cors},(e=>{this.naturalHeight=e.naturalHeight,this.naturalWidth=e.naturalWidth,this.state.loaded=!0,this.state.error=!1,this.record("loadEnd"),this.render("loaded",!1),this.state.rendered=!0,this._imageCache.add(this.src),t()}),(t=>{!this.options.silent&&console.error(t),this.state.error=!0,this.state.loaded=!1,this.render("error",!1)}))}))}render(t,e){this.elRenderer(this,t,e)}performance(){let t="loading",e=0;return this.state.loaded&&(t="loaded",e=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(t="error"),{src:this.src,state:t,time:e}}$destroy(){this.el=null,this.src="",this.error=null,this.loading="",this.bindType=null,this.attempt=0}}const R="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",x=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],P={rootMargin:"0px",threshold:0};class N{constructor({preLoad:t,error:e,throttleWait:n,preLoadTop:r,dispatchEvent:i,loading:o,attempt:s,silent:a=!0,scale:c,listenEvents:u,filter:l,adapter:h,observer:f,observerOptions:p}){this.version='"3.0.0"',this.lazyContainerMananger=null,this.mode=d.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:a,dispatchEvent:!!i,throttleWait:n||200,preLoad:t||1.3,preLoadTop:r||0,error:e||R,loading:o||R,attempt:s||3,scale:c||g(c),listenEvents:u||x,supportWebp:y(),filter:l||{},adapter:h||{},observer:!!f,observerOptions:p||P},this._initEvent(),this._imageCache=new k(200),this.lazyLoadHandler=v(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?d.observer:d.event)}performance(){const t=[];return this.ListenerQueue.map((e=>t.push(e.performance()))),t}addLazyBox(t){this.ListenerQueue.push(t),l&&(this._addListenerTarget(window),this._observer&&this._observer.observe(t.el),t.$el&&t.$el.parentNode&&this._addListenerTarget(t.$el.parentNode))}add(t,e,n){if(this.ListenerQueue.some((e=>e.el===t)))return this.update(t,e),(0,r.Y3)(this.lazyLoadHandler);let{src:i,loading:o,error:s,cors:a}=this._valueFormatter(e.value);(0,r.Y3)((()=>{i=m(t,this.options.scale)||i,this._observer&&this._observer.observe(t);const n=Object.keys(e.modifiers)[0];let c;n&&(c=e.instance.$refs[n],c=c?c.el||c:document.getElementById(n)),c||(c=A(t));const u=new C(t,i,s,o,e.arg,c,this.options,a,this._elRenderer.bind(this),this._imageCache);this.ListenerQueue.push(u),l&&(this._addListenerTarget(window),this._addListenerTarget(c)),(0,r.Y3)(this.lazyLoadHandler)}))}update(t,e,n){let{src:i,loading:o,error:s}=this._valueFormatter(e.value);i=m(t,this.options.scale)||i;const a=this.ListenerQueue.find((e=>e.el===t));a?a.update({src:i,loading:o,error:s}):"loaded"===t.getAttribute("lazy")&&t.dataset.src===i||this.add(t,e,n),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),(0,r.Y3)(this.lazyLoadHandler)}remove(t){if(!t)return;this._observer&&this._observer.unobserve(t);const e=this.ListenerQueue.find((e=>e.el===t));e&&(this._removeListenerTarget(e.$parent),this._removeListenerTarget(window),p(this.ListenerQueue,e),e.$destroy&&e.$destroy())}removeComponent(t){t&&(p(this.ListenerQueue,t),this._observer&&this._observer.unobserve(t.el),t.$parent&&t.$el.parentNode&&this._removeListenerTarget(t.$el.parentNode),this._removeListenerTarget(window))}setMode(t){h||t!==d.observer||(t=d.event),this.mode=t,t===d.event?(this._observer&&(this.ListenerQueue.forEach((t=>{this._observer.unobserve(t.el)})),this._observer=null),this.TargetQueue.forEach((t=>{this._initListen(t.el,!0)}))):(this.TargetQueue.forEach((t=>{this._initListen(t.el,!1)})),this._initIntersectionObserver())}_addListenerTarget(t){if(!t)return;let e=this.TargetQueue.find((e=>e.el===t));return e?e.childrenCount++:(e={el:t,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===d.event&&this._initListen(e.el,!0),this.TargetQueue.push(e)),this.TargetIndex}_removeListenerTarget(t){this.TargetQueue.forEach(((e,n)=>{e.el===t&&(e.childrenCount--,e.childrenCount||(this._initListen(e.el,!1),this.TargetQueue.splice(n,1),e=null))}))}_initListen(t,e){this.options.listenEvents.forEach((n=>_[e?"on":"off"](t,n,this.lazyLoadHandler)))}_initEvent(){this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=(t,e)=>{this.Event.listeners[t]||(this.Event.listeners[t]=[]),this.Event.listeners[t].push(e)},this.$once=(t,e)=>{const n=this;function r(){n.$off(t,r),e.apply(n,arguments)}this.$on(t,r)},this.$off=(t,e)=>{if(e)p(this.Event.listeners[t],e);else{if(!this.Event.listeners[t])return;this.Event.listeners[t].length=0}},this.$emit=(t,e,n)=>{this.Event.listeners[t]&&this.Event.listeners[t].forEach((t=>t(e,n)))}}_lazyLoadHandler(){const t=[];this.ListenerQueue.forEach(((e,n)=>{e.el&&e.el.parentNode&&!e.state.loaded||t.push(e);const r=e.checkInView();r&&(e.state.loaded||e.load())})),t.forEach((t=>{p(this.ListenerQueue,t),t.$destroy&&t.$destroy()}))}_initIntersectionObserver(){h&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach((t=>{this._observer.observe(t.el)})))}_observerHandler(t){t.forEach((t=>{t.isIntersecting&&this.ListenerQueue.forEach((e=>{if(e.el===t.target){if(e.state.loaded)return this._observer.unobserve(e.el);e.load()}}))}))}_elRenderer(t,e,n){if(!t.el)return;const{el:r,bindType:i}=t;let o;switch(e){case"loading":o=t.loading;break;case"error":o=t.error;break;default:o=t.src;break}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",e),this.$emit(e,t,n),this.options.adapter[e]&&this.options.adapter[e](t,this.options),this.options.dispatchEvent){const n=new CustomEvent(e,{detail:t});r.dispatchEvent(n)}}_valueFormatter(t){return O(t)?(t.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+t),{src:t.src,loading:t.loading||this.options.loading,error:t.error||this.options.error,cors:this.options.cors}):{src:t,loading:this.options.loading,error:this.options.error,cors:this.options.cors}}}const D=(t,e)=>{let n=(0,i.qj)({});const r=()=>{n=t.value.getBoundingClientRect()},o=()=>(r(),l&&n.top<window.innerHeight*e&&n.bottom>0&&n.left<window.innerWidth*e&&n.right>0);return{rect:n,checkInView:o}};var L=t=>(0,r.aZ)({props:{tag:{type:String,default:"div"}},emits:["show"],setup(e,{emit:n,slots:o}){const s=(0,i.iH)(),a=(0,i.qj)({loaded:!1,error:!1,attempt:0}),c=(0,i.iH)(!1),{rect:u,checkInView:l}=D(s,t.options.preLoad),h=()=>{c.value=!0,a.loaded=!0,n("show",c.value)},f=(0,r.Fl)((()=>({el:s.value,rect:u,checkInView:l,load:h,state:a})));return(0,r.bv)((()=>{t.addLazyBox(f.value),t.lazyLoadHandler()})),(0,r.Ah)((()=>{t.removeComponent(f.value)})),()=>{var t;return(0,r.Wm)(e.tag,{ref:s},[c.value&&(null===(t=o.default)||void 0===t?void 0:t.call(o))])}}});class j{constructor(t){this.lazy=t,t.lazyContainerMananger=this,this._queue=[]}bind(t,e,n){const r=new U(t,e,n,this.lazy);this._queue.push(r)}update(t,e,n){const r=this._queue.find((e=>e.el===t));r&&r.update(t,e)}unbind(t,e,n){const r=this._queue.find((e=>e.el===t));r&&(r.clear(),p(this._queue,r))}}const M={selector:"img",error:"",loading:""};class U{constructor(t,e,n,r){this.el=t,this.vnode=n,this.binding=e,this.options={},this.lazy=r,this._queue=[],this.update(t,e)}update(t,e){this.el=t,this.options=u({},M,e.value);const n=this.getImgs();n.forEach((t=>{this.lazy.add(t,u({},this.binding,{value:{src:t.getAttribute("data-src")||t.dataset.src,error:t.getAttribute("data-error")||t.dataset.error||this.options.error,loading:t.getAttribute("data-loading")||t.dataset.loading||this.options.loading}}),this.vnode)}))}getImgs(){return Array.from(this.el.querySelectorAll(this.options.selector))}clear(){const t=this.getImgs();t.forEach((t=>this.lazy.remove(t))),this.vnode=null,this.binding=null,this.lazy=null}}var F=t=>(0,r.aZ)({setup(e,{slots:n}){const o=(0,i.iH)(),s=(0,i.qj)({src:"",error:"",loading:"",attempt:t.options.attempt}),a=(0,i.qj)({loaded:!1,error:!1,attempt:0}),{rect:c,checkInView:u}=D(o,t.options.preLoad),l=(0,i.iH)(""),h=(e=S)=>{if(a.attempt>s.attempt-1&&a.error)return t.options.silent||console.log(`VueLazyload log: ${s.src} tried too more than ${s.attempt} times`),e();const n=s.src;E({src:n},(({src:t})=>{l.value=t,a.loaded=!0}),(()=>{a.attempt++,l.value=s.error,a.error=!0}))},f=(0,r.Fl)((()=>({el:o.value,rect:c,checkInView:u,load:h,state:a})));(0,r.bv)((()=>{t.addLazyBox(f.value),t.lazyLoadHandler()})),(0,r.Ah)((()=>{t.removeComponent(f.value)}));const d=()=>{const{src:n,loading:r,error:i}=t._valueFormatter(e.src);a.loaded=!1,s.src=n,s.error=i,s.loading=r,l.value=s.loading};return(0,r.YP)((()=>e.src),(()=>{d(),t.addLazyBox(f.value),t.lazyLoadHandler()}),{immediate:!0}),()=>{var t;return(0,r.Wm)(e.tag||"img",{src:l.value,ref:o},[null===(t=n.default)||void 0===t?void 0:t.call(n)])}}}),V={install(t,e={}){const n=new N(e),r=new j(n),i=Number(t.version.split(".")[0]);if(i<3)return new Error("Vue version at least 3.0");t.config.globalProperties.$Lazyload=n,t.provide("Lazyload",n),e.lazyComponent&&t.component("lazy-component",L(n)),e.lazyImage&&t.component("lazy-image",F(n)),t.directive("lazy",{beforeMount:n.add.bind(n),beforeUpdate:n.update.bind(n),updated:n.lazyLoadHandler.bind(n),unmounted:n.remove.bind(n)}),t.directive("lazy-container",{beforeMount:r.bind.bind(r),updated:r.update.bind(r),unmounted:r.unbind.bind(r)})}}},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},7077:function(t,e,n){"use strict";n.d(e,{Jn:function(){return mt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return yt},ZF:function(){return gt},KN:function(){return vt}});n(7658);var r=n(7142),i=n(5168),o=n(223);n(2801);const s=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(E(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)}));f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function b(t){v=t(v)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(I(this),e),E(h.get(this))}:function(...e){return E(t.apply(I(this),e))}:function(e,...n){const r=t.call(I(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&y(t),s(t,u())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const I=t=>m.get(t);function T(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=E(s);return r&&s.addEventListener("upgradeneeded",(t=>{r(E(s.result),t.oldVersion,t.newVersion,E(s.transaction),t)})),n&&s.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{o&&t.addEventListener("close",(()=>o())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const A=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],S=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(S.get(e))return S.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=O.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!A.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return S.set(e,o),o}b((t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(R(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function R(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const x="@firebase/app",P="0.9.11",N=new i.Yd("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",j="@firebase/analytics",M="@firebase/app-check-compat",U="@firebase/app-check",F="@firebase/auth",V="@firebase/auth-compat",B="@firebase/database",z="@firebase/database-compat",$="@firebase/functions",q="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",W="@firebase/messaging",G="@firebase/messaging-compat",J="@firebase/performance",Q="@firebase/performance-compat",Y="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.22.1",ot="[DEFAULT]",st={[x]:"fire-core",[D]:"fire-core-compat",[j]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[M]:"fire-app-check-compat",[F]:"fire-auth",[V]:"fire-auth-compat",[B]:"fire-rtdb",[z]:"fire-rtdb-compat",[$]:"fire-fn",[q]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[W]:"fire-fcm",[G]:"fire-fcm-compat",[J]:"fire-perf",[Q]:"fire-perf-compat",[Y]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){N.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return N.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new o.LL("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=it;function gt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:ot,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!==typeof s||!s)throw dt.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw dt.create("no-options");const a=at.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw dt.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ct.values())c.addComponent(r);const u=new pt(n,i,c);return at.set(s,u),u}function yt(t=ot){const e=at.get(t);if(!e&&t===ot&&(0,o.aH)())return gt();if(!e)throw dt.create("no-app",{appName:t});return e}function vt(t,e,n){var i;let o=null!==(i=st[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void N.warn(t.join(" "))}lt(new r.wA(`${o}-version`,(()=>({library:o,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt="firebase-heartbeat-database",wt=1,_t="firebase-heartbeat-store";let Et=null;function It(){return Et||(Et=T(bt,wt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function Tt(t){try{const e=await It(),n=await e.transaction(_t).objectStore(_t).get(Ot(t));return n}catch(e){if(e instanceof o.ZR)N.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});N.warn(t.message)}}}async function At(t,e){try{const n=await It(),r=n.transaction(_t,"readwrite"),i=r.objectStore(_t);await i.put(e,Ot(t)),await r.done}catch(n){if(n instanceof o.ZR)N.warn(n.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(t.message)}}}function Ot(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=1024,kt=2592e6;class Ct{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Pt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Rt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Rt(),{heartbeatsToSend:e,unsentEntries:n}=xt(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Rt(){const t=new Date;return t.toISOString().substring(0,10)}function xt(t,e=St){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Nt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Tt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Nt(t){return(0,o.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t){lt(new r.wA("platform-logger",(t=>new C(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Ct(t)),"PRIVATE")),vt(x,P,t),vt(x,P,"esm2017"),vt("fire-js","")}Dt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});n(1703);var r=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});n(1703),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},3494:function(t,e,n){"use strict";n.d(e,{Qc:function(){return hr},fL:function(){return dr},qv:function(){return fr},vI:function(){return lr},vc:function(){return ur}});n(7658),n(1703);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return d(t)||m(t,e)||g(t,e)||b()}function h(t){return f(t)||p(t)||g(t)||v()}function f(t){if(Array.isArray(t))return y(t)}function d(t){if(Array.isArray(t))return t}function p(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function m(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],s=!0,a=!1;try{for(n=n.call(t);!(s=(r=n.next()).done);s=!0)if(o.push(r.value),e&&o.length===e)break}catch(c){a=!0,i=c}finally{try{s||null==n["return"]||n["return"]()}finally{if(a)throw i}}return o}}function g(t,e){if(t){if("string"===typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var w=function(){},_={},E={},I=null,T={mark:w,measure:w};try{"undefined"!==typeof window&&(_=window),"undefined"!==typeof document&&(E=document),"undefined"!==typeof MutationObserver&&(I=MutationObserver),"undefined"!==typeof performance&&(T=performance)}catch(pr){}var A,O,S,k,C,R=_.navigator||{},x=R.userAgent,P=void 0===x?"":x,N=_,D=E,L=I,j=T,M=(N.document,!!D.documentElement&&!!D.head&&"function"===typeof D.addEventListener&&"function"===typeof D.createElement),U=~P.indexOf("MSIE")||~P.indexOf("Trident/"),F="___FONT_AWESOME___",V=16,B="fa",z="svg-inline--fa",$="data-fa-i2svg",q="data-fa-pseudo-element",H="data-fa-pseudo-element-pending",K="data-prefix",W="data-icon",G="fontawesome-i2svg",J="async",Q=["HTML","HEAD","STYLE","SCRIPT"],Y=function(){try{return!0}catch(pr){return!1}}(),X="classic",Z="sharp",tt=[X,Z];function et(t){return new Proxy(t,{get:function(t,e){return e in t?t[e]:t[X]}})}var nt=et((A={},u(A,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),u(A,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),A)),rt=et((O={},u(O,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),u(O,Z,{solid:"fass",regular:"fasr",light:"fasl"}),O)),it=et((S={},u(S,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),u(S,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),S)),ot=et((k={},u(k,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),u(k,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),k)),st=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,at="fa-layers-text",ct=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ut=et((C={},u(C,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),u(C,Z,{900:"fass",400:"fasr",300:"fasl"}),C)),lt=[1,2,3,4,5,6,7,8,9,10],ht=lt.concat([11,12,13,14,15,16,17,18,19,20]),ft=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},pt=new Set;Object.keys(rt[X]).map(pt.add.bind(pt)),Object.keys(rt[Z]).map(pt.add.bind(pt));var mt=[].concat(tt,h(pt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",dt.GROUP,dt.SWAP_OPACITY,dt.PRIMARY,dt.SECONDARY]).concat(lt.map((function(t){return"".concat(t,"x")}))).concat(ht.map((function(t){return"w-".concat(t)}))),gt=N.FontAwesomeConfig||{};function yt(t){var e=D.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function vt(t){return""===t||"false"!==t&&("true"===t||t)}if(D&&"function"===typeof D.querySelector){var bt=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];bt.forEach((function(t){var e=l(t,2),n=e[0],r=e[1],i=vt(yt(n));void 0!==i&&null!==i&&(gt[r]=i)}))}var wt={styleDefault:"solid",familyDefault:"classic",cssPrefix:B,replacementClass:z,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gt.familyPrefix&&(gt.cssPrefix=gt.familyPrefix);var _t=i(i({},wt),gt);_t.autoReplaceSvg||(_t.observeMutations=!1);var Et={};Object.keys(wt).forEach((function(t){Object.defineProperty(Et,t,{enumerable:!0,set:function(e){_t[t]=e,It.forEach((function(t){return t(Et)}))},get:function(){return _t[t]}})})),Object.defineProperty(Et,"familyPrefix",{enumerable:!0,set:function(t){_t.cssPrefix=t,It.forEach((function(t){return t(Et)}))},get:function(){return _t.cssPrefix}}),N.FontAwesomeConfig=Et;var It=[];function Tt(t){return It.push(t),function(){It.splice(It.indexOf(t),1)}}var At=V,Ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function St(t){if(t&&M){var e=D.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=D.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return D.head.insertBefore(e,r),t}}var kt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ct(){var t=12,e="";while(t-- >0)e+=kt[62*Math.random()|0];return e}function Rt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function xt(t){return t.classList?Rt(t.classList):(t.getAttribute("class")||"").split(" ").filter((function(t){return t}))}function Pt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Nt(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,'="').concat(Pt(t[n]),'" ')}),"").trim()}function Dt(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")}),"")}function Lt(t){return t.size!==Ot.size||t.x!==Ot.x||t.y!==Ot.y||t.rotate!==Ot.rotate||t.flipX||t.flipY}function jt(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(32*e.x,", ").concat(32*e.y,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function Mt(t){var e=t.transform,n=t.width,r=void 0===n?V:n,i=t.height,o=void 0===i?V:i,s=t.startCentered,a=void 0!==s&&s,c="";return c+=a&&U?"translate(".concat(e.x/At-r/2,"em, ").concat(e.y/At-o/2,"em) "):a?"translate(calc(-50% + ".concat(e.x/At,"em), calc(-50% + ").concat(e.y/At,"em)) "):"translate(".concat(e.x/At,"em, ").concat(e.y/At,"em) "),c+="scale(".concat(e.size/At*(e.flipX?-1:1),", ").concat(e.size/At*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var Ut=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';function Ft(){var t=B,e=z,n=Et.cssPrefix,r=Et.replacementClass,i=Ut;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Vt=!1;function Bt(){Et.autoAddCss&&!Vt&&(St(Ft()),Vt=!0)}var zt={mixout:function(){return{dom:{css:Ft,insertCss:Bt}}},hooks:function(){return{beforeDOMElementCreation:function(){Bt()},beforeI2svg:function(){Bt()}}}},$t=N||{};$t[F]||($t[F]={}),$t[F].styles||($t[F].styles={}),$t[F].hooks||($t[F].hooks={}),$t[F].shims||($t[F].shims=[]);var qt=$t[F],Ht=[],Kt=function t(){D.removeEventListener("DOMContentLoaded",t),Wt=1,Ht.map((function(t){return t()}))},Wt=!1;function Gt(t){M&&(Wt?setTimeout(t,0):Ht.push(t))}function Jt(t){var e=t.tag,n=t.attributes,r=void 0===n?{}:n,i=t.children,o=void 0===i?[]:i;return"string"===typeof t?Pt(t):"<".concat(e," ").concat(Nt(r),">").concat(o.map(Jt).join(""),"</").concat(e,">")}function Qt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}M&&(Wt=(D.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(D.readyState),Wt||D.addEventListener("DOMContentLoaded",Kt));var Yt=function(t,e){return function(n,r,i,o){return t.call(e,n,r,i,o)}},Xt=function(t,e,n,r){var i,o,s,a=Object.keys(t),c=a.length,u=void 0!==r?Yt(e,r):e;for(void 0===n?(i=1,s=t[a[0]]):(i=0,s=n);i<c;i++)o=a[i],s=u(s,t[o],o,t);return s};function Zt(t){var e=[],n=0,r=t.length;while(n<r){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);56320==(64512&o)?e.push(((1023&i)<<10)+(1023&o)+65536):(e.push(i),n--)}else e.push(i)}return e}function te(t){var e=Zt(t);return 1===e.length?e[0].toString(16):null}function ee(t,e){var n,r=t.length,i=t.charCodeAt(e);return i>=55296&&i<=56319&&r>e+1&&(n=t.charCodeAt(e+1),n>=56320&&n<=57343)?1024*(i-55296)+n-56320+65536:i}function ne(t){return Object.keys(t).reduce((function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e}),{})}function re(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,o=void 0!==r&&r,s=ne(e);"function"!==typeof qt.hooks.addPack||o?qt.styles[t]=i(i({},qt.styles[t]||{}),s):qt.hooks.addPack(t,ne(e)),"fas"===t&&re("fa",e)}var ie,oe,se,ae=qt.styles,ce=qt.shims,ue=(ie={},u(ie,X,Object.values(it[X])),u(ie,Z,Object.values(it[Z])),ie),le=null,he={},fe={},de={},pe={},me={},ge=(oe={},u(oe,X,Object.keys(nt[X])),u(oe,Z,Object.keys(nt[Z])),oe);function ye(t){return~mt.indexOf(t)}function ve(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r!==t||""===i||ye(i)?null:i}var be=function(){var t=function(t){return Xt(ae,(function(e,n,r){return e[r]=Xt(n,t,{}),e}),{})};he=t((function(t,e,n){if(e[3]&&(t[e[3]]=n),e[2]){var r=e[2].filter((function(t){return"number"===typeof t}));r.forEach((function(e){t[e.toString(16)]=n}))}return t})),fe=t((function(t,e,n){if(t[n]=n,e[2]){var r=e[2].filter((function(t){return"string"===typeof t}));r.forEach((function(e){t[e]=n}))}return t})),me=t((function(t,e,n){var r=e[2];return t[n]=n,r.forEach((function(e){t[e]=n})),t}));var e="far"in ae||Et.autoFetchSvg,n=Xt(ce,(function(t,n){var r=n[0],i=n[1],o=n[2];return"far"!==i||e||(i="fas"),"string"===typeof r&&(t.names[r]={prefix:i,iconName:o}),"number"===typeof r&&(t.unicodes[r.toString(16)]={prefix:i,iconName:o}),t}),{names:{},unicodes:{}});de=n.names,pe=n.unicodes,le=Se(Et.styleDefault,{family:Et.familyDefault})};function we(t,e){return(he[t]||{})[e]}function _e(t,e){return(fe[t]||{})[e]}function Ee(t,e){return(me[t]||{})[e]}function Ie(t){return de[t]||{prefix:null,iconName:null}}function Te(t){var e=pe[t],n=we("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ae(){return le}Tt((function(t){le=Se(t.styleDefault,{family:Et.familyDefault})})),be();var Oe=function(){return{prefix:null,iconName:null,rest:[]}};function Se(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.family,r=void 0===n?X:n,i=nt[r][t],o=rt[r][t]||rt[r][i],s=t in qt.styles?t:null;return o||s||null}var ke=(se={},u(se,X,Object.keys(it[X])),u(se,Z,Object.keys(it[Z])),se);function Ce(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.skipLookups,i=void 0!==r&&r,o=(e={},u(e,X,"".concat(Et.cssPrefix,"-").concat(X)),u(e,Z,"".concat(Et.cssPrefix,"-").concat(Z)),e),s=null,a=X;(t.includes(o[X])||t.some((function(t){return ke[X].includes(t)})))&&(a=X),(t.includes(o[Z])||t.some((function(t){return ke[Z].includes(t)})))&&(a=Z);var c=t.reduce((function(t,e){var n=ve(Et.cssPrefix,e);if(ae[e]?(e=ue[a].includes(e)?ot[a][e]:e,s=e,t.prefix=e):ge[a].indexOf(e)>-1?(s=e,t.prefix=Se(e,{family:a})):n?t.iconName=n:e!==Et.replacementClass&&e!==o[X]&&e!==o[Z]&&t.rest.push(e),!i&&t.prefix&&t.iconName){var r="fa"===s?Ie(t.iconName):{},c=Ee(t.prefix,t.iconName);r.prefix&&(s=null),t.iconName=r.iconName||c||t.iconName,t.prefix=r.prefix||t.prefix,"far"!==t.prefix||ae["far"]||!ae["fas"]||Et.autoFetchSvg||(t.prefix="fas")}return t}),Oe());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),c.prefix||a!==Z||!ae["fass"]&&!Et.autoFetchSvg||(c.prefix="fass",c.iconName=Ee(c.prefix,c.iconName)||c.iconName),"fa"!==c.prefix&&"fa"!==s||(c.prefix=Ae()||"fas"),c}var Re=function(){function t(){s(this,t),this.definitions={}}return c(t,[{key:"add",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach((function(e){t.definitions[e]=i(i({},t.definitions[e]||{}),o[e]),re(e,o[e]);var n=it[X][e];n&&re(n,o[e]),be()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map((function(e){var r=n[e],i=r.prefix,o=r.iconName,s=r.icon,a=s[2];t[i]||(t[i]={}),a.length>0&&a.forEach((function(e){"string"===typeof e&&(t[i][e]=s)})),t[i][o]=s})),t}}]),t}(),xe=[],Pe={},Ne={},De=Object.keys(Ne);function Le(t,e){var n=e.mixoutsTo;return xe=t,Pe={},Object.keys(Ne).forEach((function(t){-1===De.indexOf(t)&&delete Ne[t]})),xe.forEach((function(t){var e=t.mixout?t.mixout():{};if(Object.keys(e).forEach((function(t){"function"===typeof e[t]&&(n[t]=e[t]),"object"===o(e[t])&&Object.keys(e[t]).forEach((function(r){n[t]||(n[t]={}),n[t][r]=e[t][r]}))})),t.hooks){var r=t.hooks();Object.keys(r).forEach((function(t){Pe[t]||(Pe[t]=[]),Pe[t].push(r[t])}))}t.provides&&t.provides(Ne)})),n}function je(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Pe[t]||[];return o.forEach((function(t){e=t.apply(null,[e].concat(r))})),e}function Me(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Pe[t]||[];i.forEach((function(t){t.apply(null,n)}))}function Ue(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ne[t]?Ne[t].apply(null,e):void 0}function Fe(t){"fa"===t.prefix&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ae();if(e)return e=Ee(n,e)||e,Qt(Ve.definitions,n,e)||Qt(qt.styles,n,e)}var Ve=new Re,Be=function(){Et.autoReplaceSvg=!1,Et.observeMutations=!1,Me("noAuto")},ze={i2svg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return M?(Me("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot;!1===Et.autoReplaceSvg&&(Et.autoReplaceSvg=!0),Et.observeMutations=!0,Gt((function(){He({autoReplaceSvgRoot:e}),Me("watch",t)}))}},$e={icon:function(t){if(null===t)return null;if("object"===o(t)&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ee(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&2===t.length){var e=0===t[1].indexOf("fa-")?t[1].slice(3):t[1],n=Se(t[0]);return{prefix:n,iconName:Ee(n,e)||e}}if("string"===typeof t&&(t.indexOf("".concat(Et.cssPrefix,"-"))>-1||t.match(st))){var r=Ce(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Ae(),iconName:Ee(r.prefix,r.iconName)||r.iconName}}if("string"===typeof t){var i=Ae();return{prefix:i,iconName:Ee(i,t)||t}}}},qe={noAuto:Be,config:Et,dom:ze,parse:$e,library:Ve,findIconDefinition:Fe,toHtml:Jt},He=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot,n=void 0===e?D:e;(Object.keys(qt.styles).length>0||Et.autoFetchSvg)&&M&&Et.autoReplaceSvg&&qe.dom.i2svg({node:n})};function Ke(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return Jt(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(M){var e=D.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function We(t){var e=t.children,n=t.main,r=t.mask,o=t.attributes,s=t.styles,a=t.transform;if(Lt(a)&&n.found&&!r.found){var c=n.width,u=n.height,l={x:c/u/2,y:.5};o["style"]=Dt(i(i({},s),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function Ge(t){var e=t.prefix,n=t.iconName,r=t.children,o=t.attributes,s=t.symbol,a=!0===s?"".concat(e,"-").concat(Et.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},o),{},{id:a}),children:r}]}]}function Je(t){var e=t.icons,n=e.main,r=e.mask,o=t.prefix,s=t.iconName,a=t.transform,c=t.symbol,u=t.title,l=t.maskId,h=t.titleId,f=t.extra,d=t.watchable,p=void 0!==d&&d,m=r.found?r:n,g=m.width,y=m.height,v="fak"===o,b=[Et.replacementClass,s?"".concat(Et.cssPrefix,"-").concat(s):""].filter((function(t){return-1===f.classes.indexOf(t)})).filter((function(t){return""!==t||!!t})).concat(f.classes).join(" "),w={children:[],attributes:i(i({},f.attributes),{},{"data-prefix":o,"data-icon":s,class:b,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(y)})},_=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(g/y*16*.0625,"em")}:{};p&&(w.attributes[$]=""),u&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(h||Ct())},children:[u]}),delete w.attributes.title);var E=i(i({},w),{},{prefix:o,iconName:s,main:n,mask:r,maskId:l,transform:a,symbol:c,styles:i(i({},_),f.styles)}),I=r.found&&n.found?Ue("generateAbstractMask",E)||{children:[],attributes:{}}:Ue("generateAbstractIcon",E)||{children:[],attributes:{}},T=I.children,A=I.attributes;return E.children=T,E.attributes=A,c?Ge(E):We(E)}function Qe(t){var e=t.content,n=t.width,r=t.height,o=t.transform,s=t.title,a=t.extra,c=t.watchable,u=void 0!==c&&c,l=i(i(i({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});u&&(l[$]="");var h=i({},a.styles);Lt(o)&&(h["transform"]=Mt({transform:o,startCentered:!0,width:n,height:r}),h["-webkit-transform"]=h["transform"]);var f=Dt(h);f.length>0&&(l["style"]=f);var d=[];return d.push({tag:"span",attributes:l,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function Ye(t){var e=t.content,n=t.title,r=t.extra,o=i(i(i({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Dt(r.styles);s.length>0&&(o["style"]=s);var a=[];return a.push({tag:"span",attributes:o,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Xe=qt.styles;function Ze(t){var e=t[0],n=t[1],r=t.slice(4),i=l(r,1),o=i[0],s=null;return s=Array.isArray(o)?{tag:"g",attributes:{class:"".concat(Et.cssPrefix,"-").concat(dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Et.cssPrefix,"-").concat(dt.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(Et.cssPrefix,"-").concat(dt.PRIMARY),fill:"currentColor",d:o[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}var tn={found:!1,width:512,height:512};function en(t,e){Y||Et.showMissingIcons||!t||console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function nn(t,e){var n=e;return"fa"===e&&null!==Et.styleDefault&&(e=Ae()),new Promise((function(r,o){Ue("missingIconAbstract");if("fa"===n){var s=Ie(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Xe[e]&&Xe[e][t]){var a=Xe[e][t];return r(Ze(a))}en(t,e),r(i(i({},tn),{},{icon:Et.showMissingIcons&&t&&Ue("missingIconAbstract")||{}}))}))}var rn=function(){},on=Et.measurePerformance&&j&&j.mark&&j.measure?j:{mark:rn,measure:rn},sn='FA "6.4.0"',an=function(t){return on.mark("".concat(sn," ").concat(t," begins")),function(){return cn(t)}},cn=function(t){on.mark("".concat(sn," ").concat(t," ends")),on.measure("".concat(sn," ").concat(t),"".concat(sn," ").concat(t," begins"),"".concat(sn," ").concat(t," ends"))},un={begin:an,end:cn},ln=function(){};function hn(t){var e=t.getAttribute?t.getAttribute($):null;return"string"===typeof e}function fn(t){var e=t.getAttribute?t.getAttribute(K):null,n=t.getAttribute?t.getAttribute(W):null;return e&&n}function dn(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Et.replacementClass)}function pn(){if(!0===Et.autoReplaceSvg)return bn.replace;var t=bn[Et.autoReplaceSvg];return t||bn.replace}function mn(t){return D.createElementNS("http://www.w3.org/2000/svg",t)}function gn(t){return D.createElement(t)}function yn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.ceFn,r=void 0===n?"svg"===t.tag?mn:gn:n;if("string"===typeof t)return D.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach((function(e){i.setAttribute(e,t.attributes[e])}));var o=t.children||[];return o.forEach((function(t){i.appendChild(yn(t,{ceFn:r}))})),i}function vn(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var bn={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach((function(t){e.parentNode.insertBefore(yn(t),e)})),null===e.getAttribute($)&&Et.keepOriginalSource){var n=D.createComment(vn(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){var e=t[0],n=t[1];if(~xt(e).indexOf(Et.replacementClass))return bn.replace(t);var r=new RegExp("".concat(Et.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce((function(t,e){return e===Et.replacementClass||e.match(r)?t.toSvg.push(e):t.toNode.push(e),t}),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),0===i.toNode.length?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=n.map((function(t){return Jt(t)})).join("\n");e.setAttribute($,""),e.innerHTML=o}};function wn(t){t()}function _n(t,e){var n="function"===typeof e?e:ln;if(0===t.length)n();else{var r=wn;Et.mutateApproach===J&&(r=N.requestAnimationFrame||wn),r((function(){var e=pn(),r=un.begin("mutate");t.map(e),r(),n()}))}}var En=!1;function In(){En=!0}function Tn(){En=!1}var An=null;function On(t){if(L&&Et.observeMutations){var e=t.treeCallback,n=void 0===e?ln:e,r=t.nodeCallback,i=void 0===r?ln:r,o=t.pseudoElementsCallback,s=void 0===o?ln:o,a=t.observeMutationsRoot,c=void 0===a?D:a;An=new L((function(t){if(!En){var e=Ae();Rt(t).forEach((function(t){if("childList"===t.type&&t.addedNodes.length>0&&!hn(t.addedNodes[0])&&(Et.searchPseudoElements&&s(t.target),n(t.target)),"attributes"===t.type&&t.target.parentNode&&Et.searchPseudoElements&&s(t.target.parentNode),"attributes"===t.type&&hn(t.target)&&~ft.indexOf(t.attributeName))if("class"===t.attributeName&&fn(t.target)){var r=Ce(xt(t.target)),o=r.prefix,a=r.iconName;t.target.setAttribute(K,o||e),a&&t.target.setAttribute(W,a)}else dn(t.target)&&i(t.target)}))}})),M&&An.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Sn(){An&&An.disconnect()}function kn(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((function(t,e){var n=e.split(":"),r=n[0],i=n.slice(1);return r&&i.length>0&&(t[r]=i.join(":").trim()),t}),{})),n}function Cn(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=void 0!==t.innerText?t.innerText.trim():"",i=Ce(xt(t));return i.prefix||(i.prefix=Ae()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=_e(i.prefix,t.innerText)||we(i.prefix,te(t.innerText))),!i.iconName&&Et.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Rn(t){var e=Rt(t.attributes).reduce((function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t}),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return Et.autoA11y&&(n?e["aria-labelledby"]="".concat(Et.replacementClass,"-title-").concat(r||Ct()):(e["aria-hidden"]="true",e["focusable"]="false")),e}function xn(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},n=Cn(t),r=n.iconName,o=n.prefix,s=n.rest,a=Rn(t),c=je("parseNodeAttributes",{},t),u=e.styleParser?kn(t):[];return i({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:o,transform:Ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:u,attributes:a}},c)}var Nn=qt.styles;function Dn(t){var e="nest"===Et.autoReplaceSvg?Pn(t,{styleParser:!1}):Pn(t);return~e.extra.classes.indexOf(at)?Ue("generateLayersText",t,e):Ue("generateSvgReplacementMutation",t,e)}var Ln=new Set;function jn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!M)return Promise.resolve();var n=D.documentElement.classList,r=function(t){return n.add("".concat(G,"-").concat(t))},i=function(t){return n.remove("".concat(G,"-").concat(t))},o=Et.autoFetchSvg?Ln:tt.map((function(t){return"fa-".concat(t)})).concat(Object.keys(Nn));o.includes("fa")||o.push("fa");var s=[".".concat(at,":not([").concat($,"])")].concat(o.map((function(t){return".".concat(t,":not([").concat($,"])")}))).join(", ");if(0===s.length)return Promise.resolve();var a=[];try{a=Rt(t.querySelectorAll(s))}catch(pr){}if(!(a.length>0))return Promise.resolve();r("pending"),i("complete");var c=un.begin("onTree"),u=a.reduce((function(t,e){try{var n=Dn(e);n&&t.push(n)}catch(pr){Y||"MissingIcon"===pr.name&&console.error(pr)}return t}),[]);return new Promise((function(t,n){Promise.all(u).then((function(n){_n(n,(function(){r("active"),r("complete"),i("pending"),"function"===typeof e&&e(),c(),t()}))})).catch((function(t){c(),n(t)}))}))}function Mn(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Dn(t).then((function(t){t&&_n([t],e)}))}function Un(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(e||{}).icon?e:Fe(e||{}),o=n.mask;return o&&(o=(o||{}).icon?o:Fe(o||{})),t(r,i(i({},n),{},{mask:o}))}}tt.map((function(t){Ln.add("fa-".concat(t))})),Object.keys(nt[X]).map(Ln.add.bind(Ln)),Object.keys(nt[Z]).map(Ln.add.bind(Ln)),Ln=h(Ln);var Fn=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?Ot:n,o=e.symbol,s=void 0!==o&&o,a=e.mask,c=void 0===a?null:a,u=e.maskId,l=void 0===u?null:u,h=e.title,f=void 0===h?null:h,d=e.titleId,p=void 0===d?null:d,m=e.classes,g=void 0===m?[]:m,y=e.attributes,v=void 0===y?{}:y,b=e.styles,w=void 0===b?{}:b;if(t){var _=t.prefix,E=t.iconName,I=t.icon;return Ke(i({type:"icon"},t),(function(){return Me("beforeDOMElementCreation",{iconDefinition:t,params:e}),Et.autoA11y&&(f?v["aria-labelledby"]="".concat(Et.replacementClass,"-title-").concat(p||Ct()):(v["aria-hidden"]="true",v["focusable"]="false")),Je({icons:{main:Ze(I),mask:c?Ze(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:E,transform:i(i({},Ot),r),symbol:s,title:f,maskId:l,titleId:p,extra:{attributes:v,styles:w,classes:g}})}))}},Vn={mixout:function(){return{icon:Un(Fn)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=jn,t.nodeCallback=Mn,t}}},provides:function(t){t.i2svg=function(t){var e=t.node,n=void 0===e?D:e,r=t.callback,i=void 0===r?function(){}:r;return jn(n,i)},t.generateSvgReplacementMutation=function(t,e){var n=e.iconName,r=e.title,i=e.titleId,o=e.prefix,s=e.transform,a=e.symbol,c=e.mask,u=e.maskId,h=e.extra;return new Promise((function(e,f){Promise.all([nn(n,o),c.iconName?nn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((function(c){var f=l(c,2),d=f[0],p=f[1];e([t,Je({icons:{main:d,mask:p},prefix:o,iconName:n,transform:s,symbol:a,maskId:u,title:r,titleId:i,extra:h,watchable:!0})])})).catch(f)}))},t.generateAbstractIcon=function(t){var e,n=t.children,r=t.attributes,i=t.main,o=t.transform,s=t.styles,a=Dt(s);return a.length>0&&(r["style"]=a),Lt(o)&&(e=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(e||i.icon),{children:n,attributes:r}}}},Bn={mixout:function(){return{layer:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.classes,r=void 0===n?[]:n;return Ke({type:"layer"},(function(){Me("beforeDOMElementCreation",{assembler:t,params:e});var n=[];return t((function(t){Array.isArray(t)?t.map((function(t){n=n.concat(t.abstract)})):n=n.concat(t.abstract)})),[{tag:"span",attributes:{class:["".concat(Et.cssPrefix,"-layers")].concat(h(r)).join(" ")},children:n}]}))}}}},zn={mixout:function(){return{counter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.title,r=void 0===n?null:n,i=e.classes,o=void 0===i?[]:i,s=e.attributes,a=void 0===s?{}:s,c=e.styles,u=void 0===c?{}:c;return Ke({type:"counter",content:t},(function(){return Me("beforeDOMElementCreation",{content:t,params:e}),Ye({content:t.toString(),title:r,extra:{attributes:a,styles:u,classes:["".concat(Et.cssPrefix,"-layers-counter")].concat(h(o))}})}))}}}},$n={mixout:function(){return{text:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?Ot:n,o=e.title,s=void 0===o?null:o,a=e.classes,c=void 0===a?[]:a,u=e.attributes,l=void 0===u?{}:u,f=e.styles,d=void 0===f?{}:f;return Ke({type:"text",content:t},(function(){return Me("beforeDOMElementCreation",{content:t,params:e}),Qe({content:t,transform:i(i({},Ot),r),title:s,extra:{attributes:l,styles:d,classes:["".concat(Et.cssPrefix,"-layers-text")].concat(h(c))}})}))}}},provides:function(t){t.generateLayersText=function(t,e){var n=e.title,r=e.transform,i=e.extra,o=null,s=null;if(U){var a=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/a,s=c.height/a}return Et.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,Qe({content:t.innerHTML,width:o,height:s,transform:r,title:n,extra:i,watchable:!0})])}}},qn=new RegExp('"',"ug"),Hn=[1105920,1112319];function Kn(t){var e=t.replace(qn,""),n=ee(e,0),r=n>=Hn[0]&&n<=Hn[1],i=2===e.length&&e[0]===e[1];return{value:te(i?e[0]:e),isSecondary:r||i}}function Wn(t,e){var n="".concat(H).concat(e.replace(":","-"));return new Promise((function(r,o){if(null!==t.getAttribute(n))return r();var s=Rt(t.children),a=s.filter((function(t){return t.getAttribute(q)===e}))[0],c=N.getComputedStyle(t,e),u=c.getPropertyValue("font-family").match(ct),l=c.getPropertyValue("font-weight"),h=c.getPropertyValue("content");if(a&&!u)return t.removeChild(a),r();if(u&&"none"!==h&&""!==h){var f=c.getPropertyValue("content"),d=~["Sharp"].indexOf(u[2])?Z:X,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?rt[d][u[2].toLowerCase()]:ut[d][l],m=Kn(f),g=m.value,y=m.isSecondary,v=u[0].startsWith("FontAwesome"),b=we(p,g),w=b;if(v){var _=Te(g);_.iconName&&_.prefix&&(b=_.iconName,p=_.prefix)}if(!b||y||a&&a.getAttribute(K)===p&&a.getAttribute(W)===w)r();else{t.setAttribute(n,w),a&&t.removeChild(a);var E=xn(),I=E.extra;I.attributes[q]=e,nn(b,p).then((function(o){var s=Je(i(i({},E),{},{icons:{main:o,mask:Oe()},prefix:p,iconName:w,extra:I,watchable:!0})),a=D.createElement("svg");"::before"===e?t.insertBefore(a,t.firstChild):t.appendChild(a),a.outerHTML=s.map((function(t){return Jt(t)})).join("\n"),t.removeAttribute(n),r()})).catch(o)}}else r()}))}function Gn(t){return Promise.all([Wn(t,"::before"),Wn(t,"::after")])}function Jn(t){return t.parentNode!==document.head&&!~Q.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(q)&&(!t.parentNode||"svg"!==t.parentNode.tagName)}function Qn(t){if(M)return new Promise((function(e,n){var r=Rt(t.querySelectorAll("*")).filter(Jn).map(Gn),i=un.begin("searchPseudoElements");In(),Promise.all(r).then((function(){i(),Tn(),e()})).catch((function(){i(),Tn(),n()}))}))}var Yn={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Qn,t}}},provides:function(t){t.pseudoElements2svg=function(t){var e=t.node,n=void 0===e?D:e;Et.searchPseudoElements&&Qn(n)}}},Xn=!1,Zn={mixout:function(){return{dom:{unwatch:function(){In(),Xn=!0}}}},hooks:function(){return{bootstrap:function(){On(je("mutationObserverCallbacks",{}))},noAuto:function(){Sn()},watch:function(t){var e=t.observeMutationsRoot;Xn?Tn():On(je("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},tr=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((function(t,e){var n=e.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return t.flipX=!0,t;if(r&&"v"===i)return t.flipY=!0,t;if(i=parseFloat(i),isNaN(i))return t;switch(r){case"grow":t.size=t.size+i;break;case"shrink":t.size=t.size-i;break;case"left":t.x=t.x-i;break;case"right":t.x=t.x+i;break;case"up":t.y=t.y-i;break;case"down":t.y=t.y+i;break;case"rotate":t.rotate=t.rotate+i;break}return t}),e)},er={mixout:function(){return{parse:{transform:function(t){return tr(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-transform");return n&&(t.transform=tr(n)),t}}},provides:function(t){t.generateAbstractTransformGrouping=function(t){var e=t.main,n=t.transform,r=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(32*n.x,", ").concat(32*n.y,") "),c="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),u="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(a," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},f={outer:s,inner:l,path:h};return{tag:"g",attributes:i({},f.outer),children:[{tag:"g",attributes:i({},f.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:i(i({},e.icon.attributes),f.path)}]}]}}}},nr={x:0,y:0,width:"100%",height:"100%"};function rr(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ir(t){return"g"===t.tag?t.children:[t]}var or={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-mask"),r=n?Ce(n.split(" ").map((function(t){return t.trim()}))):Oe();return r.prefix||(r.prefix=Ae()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(t){t.generateAbstractMask=function(t){var e=t.children,n=t.attributes,r=t.main,o=t.mask,s=t.maskId,a=t.transform,c=r.width,u=r.icon,l=o.width,h=o.icon,f=jt({transform:a,containerWidth:l,iconWidth:c}),d={tag:"rect",attributes:i(i({},nr),{},{fill:"white"})},p=u.children?{children:u.children.map(rr)}:{},m={tag:"g",attributes:i({},f.inner),children:[rr(i({tag:u.tag,attributes:i(i({},u.attributes),f.path)},p))]},g={tag:"g",attributes:i({},f.outer),children:[m]},y="mask-".concat(s||Ct()),v="clip-".concat(s||Ct()),b={tag:"mask",attributes:i(i({},nr),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,g]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:ir(h)},b]};return e.push(w,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(y,")")},nr)}),{children:e,attributes:n}}}},sr={provides:function(t){var e=!1;N.matchMedia&&(e=N.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var t=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:i(i({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=i(i({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:i(i({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:i(i({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},o),{},{values:"1;0;1;1;0;1;"})}),t.push(s),t.push({tag:"path",attributes:i(i({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:i(i({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:i(i({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},ar={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return t["symbol"]=r,t}}}},cr=[zt,Vn,Bn,zn,$n,Yn,Zn,er,or,sr,ar];Le(cr,{mixoutsTo:qe});qe.noAuto;var ur=qe.config,lr=qe.library,hr=(qe.dom,qe.parse),fr=(qe.findIconDefinition,qe.toHtml,qe.icon),dr=(qe.layer,qe.text);qe.counter},8539:function(t,e,n){"use strict";n.d(e,{$aW:function(){return f},A35:function(){return y},FU$:function(){return p},HEx:function(){return o},ILF:function(){return u},Xcf:function(){return c},YIN:function(){return g},_tD:function(){return v},acZ:function(){return d},byT:function(){return s},eFW:function(){return h},nmd:function(){return l},xiG:function(){return r}});var r={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},i={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},o=i,s={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]},a={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},c=a,u={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},l={prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"]},h={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},f={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},d={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},p={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},m={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},g=m,y={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},v={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]}},466:function(t,e,n){"use strict";n.d(e,{i9H:function(){return m},h4X:function(){return I}});n(1703),n(7658),n(2801),n(8675),n(3408),n(4590),n(541),n(7635);var r=n(4870);Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function i(t){return!!(0,r.nZ)()&&((0,r.EB)(t),!0)}Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function o(t){return"function"===typeof t?t():(0,r.SU)(t)}const s="undefined"!==typeof window,a=(Object.prototype.toString,()=>{}),c=u();function u(){var t;return s&&(null==(t=null==window?void 0:window.navigator)?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var l=n(3396);Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function h(t){var e;const n=o(t);return null!=(e=null==n?void 0:n.$el)?e:n}const f=s?window:void 0;s&&window.document,s&&window.navigator,s&&window.location;function d(...t){let e,n,r,s;if("string"===typeof t[0]||Array.isArray(t[0])?([n,r,s]=t,e=f):[e,n,r,s]=t,!e)return a;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const c=[],u=()=>{c.forEach((t=>t())),c.length=0},d=(t,e,n,r)=>(t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)),p=(0,l.YP)((()=>[h(e),o(s)]),(([t,e])=>{u(),t&&c.push(...n.flatMap((n=>r.map((r=>d(t,n,r,e))))))}),{immediate:!0,flush:"post"}),m=()=>{p(),u()};return i(m),m}let p=!1;function m(t,e,n={}){const{window:r=f,ignore:i=[],capture:o=!0,detectIframe:s=!1}=n;if(!r)return;c&&!p&&(p=!0,Array.from(r.document.body.children).forEach((t=>t.addEventListener("click",a))));let u=!0;const l=t=>i.some((e=>{if("string"===typeof e)return Array.from(r.document.querySelectorAll(e)).some((e=>e===t.target||t.composedPath().includes(e)));{const n=h(e);return n&&(t.target===n||t.composedPath().includes(n))}})),m=n=>{const r=h(t);r&&r!==n.target&&!n.composedPath().includes(r)&&(0===n.detail&&(u=!l(n)),u?e(n):u=!0)},g=[d(r,"click",m,{passive:!0,capture:o}),d(r,"pointerdown",(e=>{const n=h(t);n&&(u=!e.composedPath().includes(n)&&!l(e))}),{passive:!0}),s&&d(r,"blur",(n=>{var i;const o=h(t);"IFRAME"!==(null==(i=r.document.activeElement)?void 0:i.tagName)||(null==o?void 0:o.contains(r.document.activeElement))||e(n)}))].filter(Boolean),y=()=>g.forEach((t=>t()));return y}Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function g(){const t=(0,r.iH)(!1);return(0,l.FN)()&&(0,l.bv)((()=>{t.value=!0})),t}function y(t){const e=g();return(0,l.Fl)((()=>(e.value,Boolean(t()))))}Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self&&self;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,_=(t,e)=>{var n={};for(var r in t)b.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&v)for(var r of v(t))e.indexOf(r)<0&&w.call(t,r)&&(n[r]=t[r]);return n};function E(t,e,n={}){const r=n,{window:o=f}=r,s=_(r,["window"]);let a;const c=y((()=>o&&"ResizeObserver"in o)),u=()=>{a&&(a.disconnect(),a=void 0)},d=(0,l.Fl)((()=>Array.isArray(t)?t.map((t=>h(t))):[h(t)])),p=(0,l.YP)(d,(t=>{if(u(),c.value&&o){a=new ResizeObserver(e);for(const e of t)e&&a.observe(e,s)}}),{immediate:!0,flush:"post",deep:!0}),m=()=>{u(),p()};return i(m),{isSupported:c,stop:m}}Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function I(t,e={width:0,height:0},n={}){const{window:i=f,box:o="content-box"}=n,s=(0,l.Fl)((()=>{var e,n;return null==(n=null==(e=h(t))?void 0:e.namespaceURI)?void 0:n.includes("svg")})),a=(0,r.iH)(e.width),c=(0,r.iH)(e.height);return E(t,(([e])=>{const n="border-box"===o?e.borderBoxSize:"content-box"===o?e.contentBoxSize:e.devicePixelContentBoxSize;if(i&&s.value){const e=h(t);if(e){const t=i.getComputedStyle(e);a.value=parseFloat(t.width),c.value=parseFloat(t.height)}}else if(n){const t=Array.isArray(n)?n:[n];a.value=t.reduce(((t,{inlineSize:e})=>t+e),0),c.value=t.reduce(((t,{blockSize:e})=>t+e),0)}else a.value=e.contentRect.width,c.value=e.contentRect.height}),n),(0,l.YP)((()=>h(t)),(t=>{a.value=t?e.width:0,c.value=t?e.height:0})),{width:a,height:c}}Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable},4161:function(t,e,n){"use strict";n.d(e,{Z:function(){return Ue}});n(8675),n(3408),n(4590),n(7658),n(1703);function r(t,e){return function(){return t.apply(e,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:o}=Object,s=(t=>e=>{const n=i.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),a=t=>(t=t.toLowerCase(),e=>s(e)===t),c=t=>e=>typeof e===t,{isArray:u}=Array,l=c("undefined");function h(t){return null!==t&&!l(t)&&null!==t.constructor&&!l(t.constructor)&&m(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const f=a("ArrayBuffer");function d(t){let e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&f(t.buffer),e}const p=c("string"),m=c("function"),g=c("number"),y=t=>null!==t&&"object"===typeof t,v=t=>!0===t||!1===t,b=t=>{if("object"!==s(t))return!1;const e=o(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},w=a("Date"),_=a("File"),E=a("Blob"),I=a("FileList"),T=t=>y(t)&&m(t.pipe),A=t=>{let e;return t&&("function"===typeof FormData&&t instanceof FormData||m(t.append)&&("formdata"===(e=s(t))||"object"===e&&m(t.toString)&&"[object FormData]"===t.toString()))},O=a("URLSearchParams"),S=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(t,e,{allOwnKeys:n=!1}={}){if(null===t||"undefined"===typeof t)return;let r,i;if("object"!==typeof t&&(t=[t]),u(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let s;for(r=0;r<o;r++)s=i[r],e.call(null,t[s],s,t)}}function C(t,e){e=e.toLowerCase();const n=Object.keys(t);let r,i=n.length;while(i-- >0)if(r=n[i],e===r.toLowerCase())return r;return null}const R=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),x=t=>!l(t)&&t!==R;function P(){const{caseless:t}=x(this)&&this||{},e={},n=(n,r)=>{const i=t&&C(e,r)||r;b(e[i])&&b(n)?e[i]=P(e[i],n):b(n)?e[i]=P({},n):u(n)?e[i]=n.slice():e[i]=n};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&k(arguments[r],n);return e}const N=(t,e,n,{allOwnKeys:i}={})=>(k(e,((e,i)=>{n&&m(e)?t[i]=r(e,n):t[i]=e}),{allOwnKeys:i}),t),D=t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),L=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},j=(t,e,n,r)=>{let i,s,a;const c={};if(e=e||{},null==t)return e;do{i=Object.getOwnPropertyNames(t),s=i.length;while(s-- >0)a=i[s],r&&!r(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&o(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},M=(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},U=t=>{if(!t)return null;if(u(t))return t;let e=t.length;if(!g(e))return null;const n=new Array(e);while(e-- >0)n[e]=t[e];return n},F=(t=>e=>t&&e instanceof t)("undefined"!==typeof Uint8Array&&o(Uint8Array)),V=(t,e)=>{const n=t&&t[Symbol.iterator],r=n.call(t);let i;while((i=r.next())&&!i.done){const n=i.value;e.call(t,n[0],n[1])}},B=(t,e)=>{let n;const r=[];while(null!==(n=t.exec(e)))r.push(n);return r},z=a("HTMLFormElement"),$=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),q=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),H=a("RegExp"),K=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};k(n,((n,i)=>{!1!==e(n,i,t)&&(r[i]=n)})),Object.defineProperties(t,r)},W=t=>{K(t,((e,n)=>{if(m(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=t[n];m(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},G=(t,e)=>{const n={},r=t=>{t.forEach((t=>{n[t]=!0}))};return u(t)?r(t):r(String(t).split(e)),n},J=()=>{},Q=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Y="abcdefghijklmnopqrstuvwxyz",X="0123456789",Z={DIGIT:X,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+X},tt=(t=16,e=Z.ALPHA_DIGIT)=>{let n="";const{length:r}=e;while(t--)n+=e[Math.random()*r|0];return n};function et(t){return!!(t&&m(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])}const nt=t=>{const e=new Array(10),n=(t,r)=>{if(y(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;const i=u(t)?[]:{};return k(t,((t,e)=>{const o=n(t,r+1);!l(o)&&(i[e]=o)})),e[r]=void 0,i}}return t};return n(t,0)},rt=a("AsyncFunction"),it=t=>t&&(y(t)||m(t))&&m(t.then)&&m(t.catch);var ot={isArray:u,isArrayBuffer:f,isBuffer:h,isFormData:A,isArrayBufferView:d,isString:p,isNumber:g,isBoolean:v,isObject:y,isPlainObject:b,isUndefined:l,isDate:w,isFile:_,isBlob:E,isRegExp:H,isFunction:m,isStream:T,isURLSearchParams:O,isTypedArray:F,isFileList:I,forEach:k,merge:P,extend:N,trim:S,stripBOM:D,inherits:L,toFlatObject:j,kindOf:s,kindOfTest:a,endsWith:M,toArray:U,forEachEntry:V,matchAll:B,isHTMLForm:z,hasOwnProperty:q,hasOwnProp:q,reduceDescriptors:K,freezeMethods:W,toObjectSet:G,toCamelCase:$,noop:J,toFiniteNumber:Q,findKey:C,global:R,isContextDefined:x,ALPHABET:Z,generateString:tt,isSpecCompliantForm:et,toJSONObject:nt,isAsyncFn:rt,isThenable:it};n(541);function st(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}ot.inherits(st,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ot.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const at=st.prototype,ct={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{ct[t]={value:t}})),Object.defineProperties(st,ct),Object.defineProperty(at,"isAxiosError",{value:!0}),st.from=(t,e,n,r,i,o)=>{const s=Object.create(at);return ot.toFlatObject(t,s,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),st.call(s,t.message,e,n,r,i),s.cause=t,s.name=t.name,o&&Object.assign(s,o),s};var ut=st,lt=null;function ht(t){return ot.isPlainObject(t)||ot.isArray(t)}function ft(t){return ot.endsWith(t,"[]")?t.slice(0,-2):t}function dt(t,e,n){return t?t.concat(e).map((function(t,e){return t=ft(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}function pt(t){return ot.isArray(t)&&!t.some(ht)}const mt=ot.toFlatObject(ot,{},null,(function(t){return/^is[A-Z]/.test(t)}));function gt(t,e,n){if(!ot.isObject(t))throw new TypeError("target must be an object");e=e||new(lt||FormData),n=ot.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!ot.isUndefined(e[t])}));const r=n.metaTokens,i=n.visitor||l,o=n.dots,s=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&ot.isSpecCompliantForm(e);if(!ot.isFunction(i))throw new TypeError("visitor must be a function");function u(t){if(null===t)return"";if(ot.isDate(t))return t.toISOString();if(!c&&ot.isBlob(t))throw new ut("Blob is not supported. Use a Buffer instead.");return ot.isArrayBuffer(t)||ot.isTypedArray(t)?c&&"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function l(t,n,i){let a=t;if(t&&!i&&"object"===typeof t)if(ot.endsWith(n,"{}"))n=r?n:n.slice(0,-2),t=JSON.stringify(t);else if(ot.isArray(t)&&pt(t)||(ot.isFileList(t)||ot.endsWith(n,"[]"))&&(a=ot.toArray(t)))return n=ft(n),a.forEach((function(t,r){!ot.isUndefined(t)&&null!==t&&e.append(!0===s?dt([n],r,o):null===s?n:n+"[]",u(t))})),!1;return!!ht(t)||(e.append(dt(i,n,o),u(t)),!1)}const h=[],f=Object.assign(mt,{defaultVisitor:l,convertValue:u,isVisitable:ht});function d(t,n){if(!ot.isUndefined(t)){if(-1!==h.indexOf(t))throw Error("Circular reference detected in "+n.join("."));h.push(t),ot.forEach(t,(function(t,r){const o=!(ot.isUndefined(t)||null===t)&&i.call(e,t,ot.isString(r)?r.trim():r,n,f);!0===o&&d(t,n?n.concat(r):[r])})),h.pop()}}if(!ot.isObject(t))throw new TypeError("data must be an object");return d(t),e}var yt=gt;function vt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function bt(t,e){this._pairs=[],t&&yt(t,this,e)}const wt=bt.prototype;wt.append=function(t,e){this._pairs.push([t,e])},wt.toString=function(t){const e=t?function(e){return t.call(this,e,vt)}:vt;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var _t=bt;function Et(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function It(t,e,n){if(!e)return t;const r=n&&n.encode||Et,i=n&&n.serialize;let o;if(o=i?i(e,n):ot.isURLSearchParams(e)?e.toString():new _t(e,n).toString(r),o){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}class Tt{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){ot.forEach(this.handlers,(function(e){null!==e&&t(e)}))}}var At=Tt,Ot={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},St="undefined"!==typeof URLSearchParams?URLSearchParams:_t,kt="undefined"!==typeof FormData?FormData:null,Ct="undefined"!==typeof Blob?Blob:null;const Rt=(()=>{let t;return("undefined"===typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!==typeof window&&"undefined"!==typeof document)})(),xt=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var Pt={isBrowser:!0,classes:{URLSearchParams:St,FormData:kt,Blob:Ct},isStandardBrowserEnv:Rt,isStandardBrowserWebWorkerEnv:xt,protocols:["http","https","file","blob","url","data"]};function Nt(t,e){return yt(t,new Pt.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,r){return Pt.isNode&&ot.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function Dt(t){return ot.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}function Lt(t){const e={},n=Object.keys(t);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],e[o]=t[o];return e}function jt(t){function e(t,n,r,i){let o=t[i++];const s=Number.isFinite(+o),a=i>=t.length;if(o=!o&&ot.isArray(r)?r.length:o,a)return ot.hasOwnProp(r,o)?r[o]=[r[o],n]:r[o]=n,!s;r[o]&&ot.isObject(r[o])||(r[o]=[]);const c=e(t,n,r[o],i);return c&&ot.isArray(r[o])&&(r[o]=Lt(r[o])),!s}if(ot.isFormData(t)&&ot.isFunction(t.entries)){const n={};return ot.forEachEntry(t,((t,r)=>{e(Dt(t),r,n,0)})),n}return null}var Mt=jt;const Ut={"Content-Type":void 0};function Ft(t,e,n){if(ot.isString(t))try{return(e||JSON.parse)(t),ot.trim(t)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(t)}const Vt={transitional:Ot,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",r=n.indexOf("application/json")>-1,i=ot.isObject(t);i&&ot.isHTMLForm(t)&&(t=new FormData(t));const o=ot.isFormData(t);if(o)return r&&r?JSON.stringify(Mt(t)):t;if(ot.isArrayBuffer(t)||ot.isBuffer(t)||ot.isStream(t)||ot.isFile(t)||ot.isBlob(t))return t;if(ot.isArrayBufferView(t))return t.buffer;if(ot.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Nt(t,this.formSerializer).toString();if((s=ot.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return yt(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||r?(e.setContentType("application/json",!1),Ft(t)):t}],transformResponse:[function(t){const e=this.transitional||Vt.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(t&&ot.isString(t)&&(n&&!this.responseType||r)){const n=e&&e.silentJSONParsing,o=!n&&r;try{return JSON.parse(t)}catch(i){if(o){if("SyntaxError"===i.name)throw ut.from(i,ut.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pt.classes.FormData,Blob:Pt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ot.forEach(["delete","get","head"],(function(t){Vt.headers[t]={}})),ot.forEach(["post","put","patch"],(function(t){Vt.headers[t]=ot.merge(Ut)}));var Bt=Vt;const zt=ot.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var $t=t=>{const e={};let n,r,i;return t&&t.split("\n").forEach((function(t){i=t.indexOf(":"),n=t.substring(0,i).trim().toLowerCase(),r=t.substring(i+1).trim(),!n||e[n]&&zt[n]||("set-cookie"===n?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)})),e};const qt=Symbol("internals");function Ht(t){return t&&String(t).trim().toLowerCase()}function Kt(t){return!1===t||null==t?t:ot.isArray(t)?t.map(Kt):String(t)}function Wt(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(t))e[r[1]]=r[2];return e}const Gt=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Jt(t,e,n,r,i){return ot.isFunction(r)?r.call(this,e,n):(i&&(e=n),ot.isString(e)?ot.isString(r)?-1!==e.indexOf(r):ot.isRegExp(r)?r.test(e):void 0:void 0)}function Qt(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}function Yt(t,e){const n=ot.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})}))}class Xt{constructor(t){t&&this.set(t)}set(t,e,n){const r=this;function i(t,e,n){const i=Ht(e);if(!i)throw new Error("header name must be a non-empty string");const o=ot.findKey(r,i);(!o||void 0===r[o]||!0===n||void 0===n&&!1!==r[o])&&(r[o||e]=Kt(t))}const o=(t,e)=>ot.forEach(t,((t,n)=>i(t,n,e)));return ot.isPlainObject(t)||t instanceof this.constructor?o(t,e):ot.isString(t)&&(t=t.trim())&&!Gt(t)?o($t(t),e):null!=t&&i(e,t,n),this}get(t,e){if(t=Ht(t),t){const n=ot.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return Wt(t);if(ot.isFunction(e))return e.call(this,t,n);if(ot.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Ht(t),t){const n=ot.findKey(this,t);return!(!n||void 0===this[n]||e&&!Jt(this,this[n],n,e))}return!1}delete(t,e){const n=this;let r=!1;function i(t){if(t=Ht(t),t){const i=ot.findKey(n,t);!i||e&&!Jt(n,n[i],i,e)||(delete n[i],r=!0)}}return ot.isArray(t)?t.forEach(i):i(t),r}clear(t){const e=Object.keys(this);let n=e.length,r=!1;while(n--){const i=e[n];t&&!Jt(this,this[i],i,t,!0)||(delete this[i],r=!0)}return r}normalize(t){const e=this,n={};return ot.forEach(this,((r,i)=>{const o=ot.findKey(n,i);if(o)return e[o]=Kt(r),void delete e[i];const s=t?Qt(i):String(i).trim();s!==i&&delete e[i],e[s]=Kt(r),n[s]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return ot.forEach(this,((n,r)=>{null!=n&&!1!==n&&(e[r]=t&&ot.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=this[qt]=this[qt]={accessors:{}},n=e.accessors,r=this.prototype;function i(t){const e=Ht(t);n[e]||(Yt(r,t),n[e]=!0)}return ot.isArray(t)?t.forEach(i):i(t),this}}Xt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ot.freezeMethods(Xt.prototype),ot.freezeMethods(Xt);var Zt=Xt;function te(t,e){const n=this||Bt,r=e||n,i=Zt.from(r.headers);let o=r.data;return ot.forEach(t,(function(t){o=t.call(n,o,i.normalize(),e?e.status:void 0)})),i.normalize(),o}function ee(t){return!(!t||!t.__CANCEL__)}function ne(t,e,n){ut.call(this,null==t?"canceled":t,ut.ERR_CANCELED,e,n),this.name="CanceledError"}ot.inherits(ne,ut,{__CANCEL__:!0});var re=ne;n(2801);function ie(t,e,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new ut("Request failed with status code "+n.status,[ut.ERR_BAD_REQUEST,ut.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var oe=Pt.isStandardBrowserEnv?function(){return{write:function(t,e,n,r,i,o){const s=[];s.push(t+"="+encodeURIComponent(e)),ot.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),ot.isString(r)&&s.push("path="+r),ot.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function se(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function ae(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function ce(t,e){return t&&!se(e)?ae(t,e):e}var ue=Pt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function r(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=r(window.location.href),function(t){const e=ot.isString(t)?r(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return function(){return!0}}();function le(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function he(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i,o=0,s=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=r[s];i||(i=c),n[o]=a,r[o]=c;let l=s,h=0;while(l!==o)h+=n[l++],l%=t;if(o=(o+1)%t,o===s&&(s=(s+1)%t),c-i<e)return;const f=u&&c-u;return f?Math.round(1e3*h/f):void 0}}var fe=he;function de(t,e){let n=0;const r=fe(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,c=r(a),u=o<=s;n=o;const l={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&u?(s-o)/c:void 0,event:i};l[e?"download":"upload"]=!0,t(l)}}const pe="undefined"!==typeof XMLHttpRequest;var me=pe&&function(t){return new Promise((function(e,n){let r=t.data;const i=Zt.from(t.headers).normalize(),o=t.responseType;let s;function a(){t.cancelToken&&t.cancelToken.unsubscribe(s),t.signal&&t.signal.removeEventListener("abort",s)}ot.isFormData(r)&&(Pt.isStandardBrowserEnv||Pt.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(e+":"+n))}const u=ce(t.baseURL,t.url);function l(){if(!c)return;const r=Zt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),i=o&&"text"!==o&&"json"!==o?c.response:c.responseText,s={data:i,status:c.status,statusText:c.statusText,headers:r,config:t,request:c};ie((function(t){e(t),a()}),(function(t){n(t),a()}),s),c=null}if(c.open(t.method.toUpperCase(),It(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new ut("Request aborted",ut.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new ut("Network Error",ut.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const r=t.transitional||Ot;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new ut(e,r.clarifyTimeoutError?ut.ETIMEDOUT:ut.ECONNABORTED,t,c)),c=null},Pt.isStandardBrowserEnv){const e=(t.withCredentials||ue(u))&&t.xsrfCookieName&&oe.read(t.xsrfCookieName);e&&i.set(t.xsrfHeaderName,e)}void 0===r&&i.setContentType(null),"setRequestHeader"in c&&ot.forEach(i.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),ot.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),o&&"json"!==o&&(c.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&c.addEventListener("progress",de(t.onDownloadProgress,!0)),"function"===typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",de(t.onUploadProgress)),(t.cancelToken||t.signal)&&(s=e=>{c&&(n(!e||e.type?new re(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(s),t.signal&&(t.signal.aborted?s():t.signal.addEventListener("abort",s)));const h=le(u);h&&-1===Pt.protocols.indexOf(h)?n(new ut("Unsupported protocol "+h+":",ut.ERR_BAD_REQUEST,t)):c.send(r||null)}))};const ge={http:lt,xhr:me};ot.forEach(ge,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(n){}Object.defineProperty(t,"adapterName",{value:e})}}));var ye={getAdapter:t=>{t=ot.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let i=0;i<e;i++)if(n=t[i],r=ot.isString(n)?ge[n.toLowerCase()]:n)break;if(!r){if(!1===r)throw new ut(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(ot.hasOwnProp(ge,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!ot.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:ge};function ve(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new re(null,t)}function be(t){ve(t),t.headers=Zt.from(t.headers),t.data=te.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);const e=ye.getAdapter(t.adapter||Bt.adapter);return e(t).then((function(e){return ve(t),e.data=te.call(t,t.transformResponse,e),e.headers=Zt.from(e.headers),e}),(function(e){return ee(e)||(ve(t),e&&e.response&&(e.response.data=te.call(t,t.transformResponse,e.response),e.response.headers=Zt.from(e.response.headers))),Promise.reject(e)}))}const we=t=>t instanceof Zt?t.toJSON():t;function _e(t,e){e=e||{};const n={};function r(t,e,n){return ot.isPlainObject(t)&&ot.isPlainObject(e)?ot.merge.call({caseless:n},t,e):ot.isPlainObject(e)?ot.merge({},e):ot.isArray(e)?e.slice():e}function i(t,e,n){return ot.isUndefined(e)?ot.isUndefined(t)?void 0:r(void 0,t,n):r(t,e,n)}function o(t,e){if(!ot.isUndefined(e))return r(void 0,e)}function s(t,e){return ot.isUndefined(e)?ot.isUndefined(t)?void 0:r(void 0,t):r(void 0,e)}function a(n,i,o){return o in e?r(n,i):o in t?r(void 0,n):void 0}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>i(we(t),we(e),!0)};return ot.forEach(Object.keys(Object.assign({},t,e)),(function(r){const o=c[r]||i,s=o(t[r],e[r],r);ot.isUndefined(s)&&o!==a||(n[r]=s)})),n}const Ee="1.4.0",Ie={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{Ie[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Te={};function Ae(t,e,n){if("object"!==typeof t)throw new ut("options must be an object",ut.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;while(i-- >0){const o=r[i],s=e[o];if(s){const e=t[o],n=void 0===e||s(e,o,t);if(!0!==n)throw new ut("option "+o+" must be "+n,ut.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ut("Unknown option "+o,ut.ERR_BAD_OPTION)}}Ie.transitional=function(t,e,n){function r(t,e){return"[Axios v"+Ee+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,i,o)=>{if(!1===t)throw new ut(r(i," has been removed"+(e?" in "+e:"")),ut.ERR_DEPRECATED);return e&&!Te[i]&&(Te[i]=!0,console.warn(r(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,o)}};var Oe={assertOptions:Ae,validators:Ie};const Se=Oe.validators;class ke{constructor(t){this.defaults=t,this.interceptors={request:new At,response:new At}}request(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=_e(this.defaults,e);const{transitional:n,paramsSerializer:r,headers:i}=e;let o;void 0!==n&&Oe.assertOptions(n,{silentJSONParsing:Se.transitional(Se.boolean),forcedJSONParsing:Se.transitional(Se.boolean),clarifyTimeoutError:Se.transitional(Se.boolean)},!1),null!=r&&(ot.isFunction(r)?e.paramsSerializer={serialize:r}:Oe.assertOptions(r,{encode:Se.function,serialize:Se.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase(),o=i&&ot.merge(i.common,i[e.method]),o&&ot.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete i[t]})),e.headers=Zt.concat(o,i);const s=[];let a=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,s.unshift(t.fulfilled,t.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let l,h=0;if(!a){const t=[be.bind(this),void 0];t.unshift.apply(t,s),t.push.apply(t,c),l=t.length,u=Promise.resolve(e);while(h<l)u=u.then(t[h++],t[h++]);return u}l=s.length;let f=e;h=0;while(h<l){const t=s[h++],e=s[h++];try{f=t(f)}catch(d){e.call(this,d);break}}try{u=be.call(this,f)}catch(d){return Promise.reject(d)}h=0,l=c.length;while(h<l)u=u.then(c[h++],c[h++]);return u}getUri(t){t=_e(this.defaults,t);const e=ce(t.baseURL,t.url);return It(e,t.params,t.paramsSerializer)}}ot.forEach(["delete","get","head","options"],(function(t){ke.prototype[t]=function(e,n){return this.request(_e(n||{},{method:t,url:e,data:(n||{}).data}))}})),ot.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(_e(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}ke.prototype[t]=e(),ke.prototype[t+"Form"]=e(!0)}));var Ce=ke;class Re{constructor(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;while(e-- >0)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t,r,i){n.reason||(n.reason=new re(t,r,i),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;const e=new Re((function(e){t=e}));return{token:e,cancel:t}}}var xe=Re;function Pe(t){return function(e){return t.apply(null,e)}}function Ne(t){return ot.isObject(t)&&!0===t.isAxiosError}const De={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(De).forEach((([t,e])=>{De[e]=t}));var Le=De;function je(t){const e=new Ce(t),n=r(Ce.prototype.request,e);return ot.extend(n,Ce.prototype,e,{allOwnKeys:!0}),ot.extend(n,e,null,{allOwnKeys:!0}),n.create=function(e){return je(_e(t,e))},n}const Me=je(Bt);Me.Axios=Ce,Me.CanceledError=re,Me.CancelToken=xe,Me.isCancel=ee,Me.VERSION=Ee,Me.toFormData=yt,Me.AxiosError=ut,Me.Cancel=Me.CanceledError,Me.all=function(t){return Promise.all(t)},Me.spread=Pe,Me.isAxiosError=Ne,Me.mergeConfig=_e,Me.AxiosHeaders=Zt,Me.formToJSON=t=>Mt(ot.isHTMLForm(t)?new FormData(t):t),Me.HttpStatusCode=Le,Me.default=Me;var Ue=Me},7795:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",o="9.22.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,o,"app")},9862:function(t,e,n){"use strict";n.d(e,{Xb:function(){return Re},v0:function(){return $r},wU:function(){return B},ag:function(){return z},Aj:function(){return De},LS:function(){return Ce},e5:function(){return xe},w7:function(){return Le}});n(1703),n(7658);var r=n(223),i=n(7077);function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var s=n(5168),a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new s.Yd("@firebase/auth");function f(t,...e){h.logLevel<=s["in"].WARN&&h.warn(`Auth (${i.Jn}): ${t}`,...e)}function d(t,...e){h.logLevel<=s["in"].ERROR&&h.error(`Auth (${i.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw y(t,...e)}function m(t,...e){return y(t,...e)}function g(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),o=new r.LL("auth","Firebase",i);return o.create(e,{appName:t.name})}function y(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function v(t,e,...n){if(!t)throw y(e,...n)}function b(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function w(t,e){t||b(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function E(){return"http:"===I()||"https:"===I()}function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},R=new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,i,o={}){return N(t,o,(async()=>{let o={},s={};i&&("GET"===e?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),k.fetch()(L(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))}))}async function N(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},C),e);try{const e=new j(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw M(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw M(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw M(t,"email-already-in-use",o);if("USER_DISABLED"===n)throw M(t,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(t,a,s);p(t,a)}}catch(o){if(o instanceof r.ZR)throw o;p(t,"network-request-failed",{message:String(o)})}}async function D(t,e,n,r,i={}){const o=await P(t,e,n,r,i);return"mfaPendingCredential"in o&&p(t,"multi-factor-auth-required",{_serverResponse:o}),o}function L(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?S(t.config,i):`${t.config.apiScheme}://${i}`}class j{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(m(this.auth,"network-request-failed"))),R.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function M(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function F(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e=!1){return(0,r.m9)(t).getIdToken(e)}async function z(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),o=q(i);v(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:V($(o.auth_time)),issuedAtTime:V($(o.iat)),expirationTime:V($(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function $(t){return 1e3*Number(t)}function q(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function H(t){const e=q(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&W(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function W({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){var e;const n=t.auth,r=await t.getIdToken(),i=await K(t,F(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?Z(o.providerUserInfo):[],a=X(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new J(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Y(t){const e=(0,r.m9)(t);await Q(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function X(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function Z(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(t,e){const n=await N(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=L(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):H(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await tt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new et;return n&&(v("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new et,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class rt{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new G(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new J(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return z(this,t)}reload(){return Y(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new rt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,U(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:I}=e;v(b&&I,t,"internal-error");const T=et.fromJSON(this.name,I);v("string"===typeof b,t,"internal-error"),nt(l,t.name),nt(h,t.name),v("boolean"===typeof w,t,"internal-error"),v("boolean"===typeof _,t,"internal-error"),nt(f,t.name),nt(d,t.name),nt(p,t.name),nt(m,t.name),nt(g,t.name),nt(y,t.name);const A=new rt({uid:b,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(A.providerData=E.map((t=>Object.assign({},t)))),m&&(A._redirectEventId=m),A}static async _fromIdTokenResponse(t,e,n=!1){const r=new et;r.updateFromServerResponse(e);const i=new rt({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new Map;function ot(t){w(t instanceof Function,"Expected a class definition");let e=it.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,it.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}st.type="NONE";const at=st;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(ot(at),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||ot(at);const o=ct(n,t.config.apiKey,t.name);let s=null;for(const u of e)try{const e=await u._get(o);if(e){const n=rt._fromJSON(t,e);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(o)}catch(c){}}))),new ut(i,t,n)):new ut(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gt(e))return"Blackberry";if(yt(e))return"Webos";if(ft(e))return"Safari";if((e.includes("chrome/")||dt(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,r.z$)()){return/firefox\//i.test(t)}function ft(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dt(t=(0,r.z$)()){return/crios\//i.test(t)}function pt(t=(0,r.z$)()){return/iemobile/i.test(t)}function mt(t=(0,r.z$)()){return/android/i.test(t)}function gt(t=(0,r.z$)()){return/blackberry/i.test(t)}function yt(t=(0,r.z$)()){return/webos/i.test(t)}function vt(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bt(t=(0,r.z$)()){var e;return vt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function wt(){return(0,r.w1)()&&10===document.documentMode}function _t(t=(0,r.z$)()){return vt(t)||mt(t)||yt(t)||gt(t)||/windows phone/i.test(t)||pt(t)}function Et(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e=[]){let n;switch(t){case"Browser":n=lt((0,r.z$)());break;case"Worker":n=`${lt((0,r.z$)())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(t,e){return P(t,"GET","/v2/recaptchaConfig",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){return void 0!==t&&void 0!==t.enterprise}class Ot{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function kt(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=m("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",St().appendChild(r)}))}function Ct(t){return`__${t}${Math.floor(1e6*Math.random())}`}const Rt="https://www.google.com/recaptcha/enterprise.js?render=",xt="recaptcha-enterprise",Pt="NO_RECAPTCHA";class Nt{constructor(t){this.type=xt,this.auth=Mt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{Tt(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Ot(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function r(e,n,r){const i=window.grecaptcha;At(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(Pt)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,i)=>{n(this.auth).then((n=>{if(!e&&At(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));kt(Rt+n).then((()=>{r(n,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function Dt(t,e,n,r=!1){const i=new Nt(t);let o;try{o=await i.verify(n)}catch(a){o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ut(this),this.idTokenSubscription=new Ut(this),this.beforeStateQueue=new Lt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ot(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ut.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Q(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ot(t))}))}async initializeRecaptchaConfig(){const t=await Tt(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new Ot(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){const t=new Nt(this);t.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ot(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[ot(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=It(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&f(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Mt(t){return(0,r.m9)(t)}class Ut{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){const n=(0,i.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const o=n.initialize({options:e});return o}function Vt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ot);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Bt(t,e,n){const r=Mt(t);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=zt(e),{host:s,port:a}=$t(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ht()}function zt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $t(t){const e=zt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:qt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:qt(e)}}}function qt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ht(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return b("not implemented")}_getIdTokenResponse(t){return b("not implemented")}_linkToIdToken(t,e){return b("not implemented")}_getReauthenticationResolver(t){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Gt(t,e){return D(t,"POST","/v1/accounts:signInWithPassword",x(t,e))}async function Jt(t,e){return P(t,"POST","/v1/accounts:sendOobCode",x(t,e))}async function Qt(t,e){return Jt(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Yt(t,e){return D(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}async function Xt(t,e){return D(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Kt{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Zt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Zt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await Dt(t,n,"signInWithPassword");return Gt(t,e)}return Gt(t,n).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await Dt(t,n,"signInWithPassword");return Gt(t,e)}return Promise.reject(e)}));case"emailLink":return Yt(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Wt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xt(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(t,e){return D(t,"POST","/v1/accounts:signInWithIdp",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="http://localhost";class ne extends Kt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ne(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=o(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ne(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return te(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,te(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,te(t,e)}buildRequest(){const t={requestUri:ee,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",x(t,e))}async function ie(t,e){return D(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e))}async function oe(t,e){const n=await D(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e));if(n.temporaryProof)throw M(t,"account-exists-with-different-credential",n);return n}const se={["USER_NOT_FOUND"]:"user-not-found"};async function ae(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return D(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,n),se)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce extends Kt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new ce({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ce({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ie(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return oe(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return ae(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new ce({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function le(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||e||t}class he{constructor(t){var e,n,i,o,s,a;const c=(0,r.zd)((0,r.pd)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ue(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=le(t);try{return new he(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{constructor(){this.providerId=fe.PROVIDER_ID}static credential(t,e){return Zt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=he.parseLink(e);return v(n,"argument-error"),Zt._fromEmailAndCode(t,n.code,n.tenantId)}}fe.PROVIDER_ID="password",fe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",fe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends de{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me extends pe{constructor(){super("facebook.com")}static credential(t){return ne._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return me.credentialFromTaggedObject(t)}static credentialFromError(t){return me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return me.credential(t.oauthAccessToken)}catch(e){return null}}}me.FACEBOOK_SIGN_IN_METHOD="facebook.com",me.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge extends pe{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ne._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ge.credentialFromTaggedObject(t)}static credentialFromError(t){return ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ge.credential(e,n)}catch(r){return null}}}ge.GOOGLE_SIGN_IN_METHOD="google.com",ge.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye extends pe{constructor(){super("github.com")}static credential(t){return ne._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ye.credentialFromTaggedObject(t)}static credentialFromError(t){return ye.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ye.credential(t.oauthAccessToken)}catch(e){return null}}}ye.GITHUB_SIGN_IN_METHOD="github.com",ye.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve extends pe{constructor(){super("twitter.com")}static credential(t,e){return ne._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ve.credentialFromTaggedObject(t)}static credentialFromError(t){return ve.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return ve.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function be(t,e){return D(t,"POST","/v1/accounts:signUp",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve.TWITTER_SIGN_IN_METHOD="twitter.com",ve.PROVIDER_ID="twitter.com";class we{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await rt._fromIdTokenResponse(t,n,r),o=_e(n),s=new we({user:i,providerId:o,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=_e(n);return new we({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function _e(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee extends r.ZR{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ee.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new Ee(t,e,n,r)}}function Ie(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ee._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(t,e,n=!1){const r=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return we._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ae(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await K(t,Ie(r,i,e,t),n);v(o.idToken,r,"internal-error");const s=q(o.idToken);v(s,r,"internal-error");const{sub:a}=s;return v(t.uid===a,r,"user-mismatch"),we._forOperation(t,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(t,e,n=!1){const r="signIn",i=await Ie(t,r,e),o=await we._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function Se(t,e){return Oe(Mt(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ke(t,e,n){var r;v((null===(r=n.url)||void 0===r?void 0:r.length)>0,t,"invalid-continue-uri"),v("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(v(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(v(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(t,e,n){var r;const i=Mt(t),o={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const t=await Dt(i,o,"getOobCode",!0);n&&ke(i,t,n),await Qt(i,t)}else n&&ke(i,o,n),await Qt(i,o).catch((async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const t=await Dt(i,o,"getOobCode",!0);n&&ke(i,t,n),await Qt(i,t)}}))}async function Re(t,e,n){var r;const i=Mt(t),o={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const t=await Dt(i,o,"signUpPassword");s=be(i,t)}else s=be(i,o).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const t=await Dt(i,o,"signUpPassword");return be(i,t)}return Promise.reject(t)}));const a=await s.catch((t=>Promise.reject(t))),c=await we._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function xe(t,e,n){return Se((0,r.m9)(t),fe.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t,e,n,i){return(0,r.m9)(t).onIdTokenChanged(e,n,i)}function Ne(t,e,n){return(0,r.m9)(t).beforeAuthStateChanged(e,n)}function De(t,e,n,i){return(0,r.m9)(t).onAuthStateChanged(e,n,i)}function Le(t){return(0,r.m9)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",x(t,e))}function Me(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",x(t,e))}function Ue(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",x(t,e))}function Fe(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",x(t,e))}new WeakMap;const Ve="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ve,"1"),this.storage.removeItem(Ve),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){const t=(0,r.z$)();return ft(t)||vt(t)}const $e=1e3,qe=10;class He extends Be{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ze()&&Et(),this.fallbackToPolling=_t(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);wt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,qe):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),$e)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}He.type="LOCAL";const Ke=He;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends Be{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}We.type="SESSION";const Ge=We;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Qe(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async t=>t(e.origin,i))),a=await Je(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ye(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe.receivers=[];class Xe{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=Ye("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function tn(t){Ze().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return"undefined"!==typeof Ze()["WorkerGlobalScope"]&&"function"===typeof Ze()["importScripts"]}async function nn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function rn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function on(){return en()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="firebaseLocalStorageDb",an=1,cn="firebaseLocalStorage",un="fbase_key";class ln{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function hn(t,e){return t.transaction([cn],e?"readwrite":"readonly").objectStore(cn)}function fn(){const t=indexedDB.deleteDatabase(sn);return new ln(t).toPromise()}function dn(){const t=indexedDB.open(sn,an);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(cn,{keyPath:un})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(cn)?e(n):(n.close(),await fn(),e(await dn()))}))}))}async function pn(t,e,n){const r=hn(t,!0).put({[un]:e,value:n});return new ln(r).toPromise()}async function mn(t,e){const n=hn(t,!1).get(e),r=await new ln(n).toPromise();return void 0===r?null:r.value}function gn(t,e){const n=hn(t,!0).delete(e);return new ln(n).toPromise()}const yn=800,vn=3;class bn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await dn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>vn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return en()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qe._getInstance(on()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await nn(),!this.activeServiceWorker)return;this.sender=new Xe(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&rn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await dn();return await pn(t,Ve,"1"),await gn(t,Ve),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>pn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>mn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>gn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=hn(t,!1).getAll();return new ln(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),yn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bn.type="LOCAL";const wn=bn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",x(t,e))}function En(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",x(t,e))}function In(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ct("rcb"),new O(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tn="recaptcha";async function An(t,e,n){var r;const i=await n.verify();try{let o;if(v("string"===typeof i,t,"argument-error"),v(n.type===Tn,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){v("enroll"===e.type,t,"internal-error");const n=await je(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;v(n,t,"missing-multi-factor-info");const s=await _n(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await re(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On{constructor(t){this.providerId=On.PROVIDER_ID,this.auth=Mt(t)}verifyPhoneNumber(t,e){return An(this.auth,t,(0,r.m9)(e))}static credential(t,e){return ce._fromVerification(t,e)}static credentialFromResult(t){const e=t;return On.credentialFromTaggedObject(e)}static credentialFromError(t){return On.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ce._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sn(t,e){return e?ot(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On.PROVIDER_ID="phone",On.PHONE_SIGN_IN_METHOD="phone";class kn extends Kt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return te(t,this._buildIdpRequest())}_linkToIdToken(t,e){return te(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return te(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Cn(t){return Oe(t.auth,new kn(t),t.bypassAuthState)}function Rn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Ae(n,new kn(t),t.bypassAuthState)}async function xn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Te(n,new kn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Cn;case"linkViaPopup":case"linkViaRedirect":return xn;case"reauthViaPopup":case"reauthViaRedirect":return Rn;default:p(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new O(2e3,1e4);class Dn extends Pn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=Ye();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Nn.get())};t()}}Dn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ln="pendingRedirect",jn=new Map;class Mn extends Pn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=jn.get(this.auth._key());if(!t){try{const e=await Un(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}jn.set(this.auth._key(),t)}return this.bypassAuthState||jn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Un(t,e){const n=Bn(e),r=Vn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Fn(t,e){jn.set(t._key(),e)}function Vn(t){return ot(t._redirectPersistence)}function Bn(t){return ct(Ln,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(t,e,n=!1){const r=Mt(t),i=Sn(r,e),o=new Mn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $n=6e5;class qn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Wn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Kn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(m(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$n&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hn(t))}saveEventToCache(t){this.cachedEventUids.add(Hn(t)),this.lastProcessedEventTime=Date.now()}}function Hn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Kn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Wn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qn=/^https?/;async function Yn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Gn(t);for(const r of e)try{if(Xn(r))return}catch(n){}p(t,"unauthorized-domain")}function Xn(t){const e=_(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Qn.test(n))return!1;if(Jn.test(t))return r===t;const i=t.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new O(3e4,6e4);function tr(){const t=Ze().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function er(t){return new Promise(((e,n)=>{var r,i,o;function s(){tr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tr(),n(m(t,"network-request-failed"))},timeout:Zn.get()})}if(null===(i=null===(r=Ze().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Ze().gapi)||void 0===o?void 0:o.load)){const e=Ct("iframefcb");return Ze()[e]=()=>{gapi.load?s():n(m(t,"network-request-failed"))},kt(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}s()}})).catch((t=>{throw nr=null,t}))}let nr=null;function rr(t){return nr=nr||er(t),nr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new O(5e3,15e3),or="__/auth/iframe",sr="emulator/auth/iframe",ar={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ur(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?S(e,sr):`https://${t.config.authDomain}/${or}`,o={apiKey:e.apiKey,appName:t.name,v:i.Jn},s=cr.get(t.config.apiHost);s&&(o.eid=s);const a=t._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function lr(t){const e=await rr(t),n=Ze().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:ur(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ar,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=m(t,"network-request-failed"),o=Ze().setTimeout((()=>{r(i)}),ir.get());function s(){Ze().clearTimeout(o),n(e)}e.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fr=500,dr=600,pr="_blank",mr="http://localhost";class gr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function yr(t,e,n,i=fr,o=dr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},hr),{width:i.toString(),height:o.toString(),top:s,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=dt(l)?pr:n),ht(l)&&(e=e||mr,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(bt(l)&&"_self"!==c)return vr(e||"",c),new gr(null);const f=window.open(e||"",c,h);v(f,t,"popup-blocked");try{f.focus()}catch(d){}return new gr(f)}function vr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="__/auth/handler",wr="emulator/auth/handler",_r=encodeURIComponent("fac");async function Er(t,e,n,o,s,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:o,v:i.Jn,eventId:s};if(e instanceof de){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof pe){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await t._getAppCheckToken(),h=l?`#${_r}=${encodeURIComponent(l)}`:"";return`${Ir(t)}?${(0,r.xO)(u).slice(1)}${h}`}function Ir({config:t}){return t.emulator?S(t,wr):`https://${t.authDomain}/${br}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="webStorageSupport";class Ar{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ge,this._completeRedirectFn=zn,this._overrideRedirectResult=Fn}async _openPopup(t,e,n,r){var i;w(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Er(t,e,n,_(),r);return yr(t,o,Ye())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await Er(t,e,n,_(),r);return tn(i),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await lr(t),n=new qn(t);return e.register("authEvent",(e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Tr,{type:Tr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Tr];void 0!==i&&e(!!i),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Yn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return _t()||ft()||vt()}}const Or=Ar;class Sr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return b("unexpected MultiFactorSessionType")}}}class kr extends Sr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new kr(t)}_finalizeEnroll(t,e,n){return Me(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return En(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Cr{constructor(){}static assertion(t){return kr._fromCredential(t)}}Cr.FACTOR_ID="phone";class Rr{static assertionForEnrollment(t,e){return xr._fromSecret(t,e)}static assertionForSignIn(t,e){return xr._fromEnrollmentId(t,e)}static async generateSecret(t){const e=t;v("undefined"!==typeof e.auth,"internal-error");const n=await Ue(e.auth,{idToken:e.credential,totpEnrollmentInfo:{}});return Pr._fromStartTotpMfaEnrollmentResponse(n,e.auth)}}Rr.FACTOR_ID="totp";class xr extends Sr{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new xr(e,void 0,t)}static _fromEnrollmentId(t,e){return new xr(e,t)}async _finalizeEnroll(t,e,n){return v("undefined"!==typeof this.secret,t,"argument-error"),Fe(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){v(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return In(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Pr{constructor(t,e,n,r,i,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Pr(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(Nr(t)||Nr(e))&&(r=!0),r&&(Nr(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Nr(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Nr(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Dr="@firebase/auth",Lr="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ur(t){(0,i.Xd)(new a.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;v(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:It(t)},u=new jt(r,i,o,c);return Vt(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(t=>{const e=Mt(t.getProvider("auth").getImmediate());return(t=>new jr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(Dr,Lr,Mr(t)),(0,i.KN)(Dr,Lr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=300,Vr=(0,r.Pz)("authIdTokenMaxAge")||Fr;let Br=null;const zr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Vr)return;const i=null===n||void 0===n?void 0:n.token;Br!==i&&(Br=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $r(t=(0,i.Mq)()){const e=(0,i.qX)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ft(t,{popupRedirectResolver:Or,persistence:[wn,Ke,Ge]}),o=(0,r.Pz)("authTokenSyncURL");if(o){const t=zr(o);Ne(n,t,(()=>t(n.currentUser))),Pe(n,(e=>t(e)))}const s=(0,r.q4)("auth");return s&&Bt(n,`http://${s}`),n}Ur("Browser")},4287:function(t,e,n){"use strict";n.d(e,{ET:function(){return uf},hJ:function(){return ah},oe:function(){return cf},JU:function(){return ch},QT:function(){return rf},PL:function(){return sf},ad:function(){return hh},Xo:function(){return Hh},IO:function(){return Bh},pl:function(){return af}});n(1703),n(8675),n(3408),n(4590),n(7658),n(2801);var r,i=n(7077),o=n(7142),s=n(5168),a=n(223),c=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{}),u={},l=l||{},h=c||self;function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function d(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++g)}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function v(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:v,b.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function E(){this.s=this.s,this.o=this.o}var I=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==I)||p(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function A(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function O(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function S(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",(()=>{}),e),h.removeEventListener("test",(()=>{}),e)}catch(n){}return t}();function C(t){return/^[\s\xa0]*$/.test(t)}function R(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function x(t){return-1!=R().indexOf(t)}function P(t){return P[" "](t),t}function N(t,e){var n=wr;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}P[" "]=function(){};var D,L,j=x("Opera"),M=x("Trident")||x("MSIE"),U=x("Edge"),F=U||M,V=x("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),B=-1!=R().toLowerCase().indexOf("webkit")&&!x("Edge");function z(){var t=h.document;return t?t.documentMode:void 0}t:{var $="",q=function(){var t=R();return V?/rv:([^\);]+)(\)|;)/.exec(t):U?/Edge\/([\d\.]+)/.exec(t):M?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):B?/WebKit\/(\S+)/.exec(t):j?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(q&&($=q?q[1]:""),M){var H=z();if(null!=H&&H>parseFloat($)){D=String(H);break t}}D=$}if(h.document&&M){var K=z();L=K||(parseInt(D,10)||void 0)}else L=void 0;var W=L;function G(t,e){if(S.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(V){t:{try{P(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:J[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&G.$.h.call(this)}}_(G,S);var J={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),Y=0;function X(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Y,this.fa=this.ia=!1}function Z(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function et(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function it(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<rt.length;e++)n=rt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ot(t){this.src=t,this.g={},this.h=0}function st(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=T(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.fa&&o.listener==e&&o.capture==!!n&&o.la==r)return i}return-1}ot.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=at(t,e,r,i);return-1<s?(e=t[s],n||(e.ia=!1)):(e=new X(e,this.src,o,!!r,i),e.ia=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function lt(t,e,n,r,i){if(r&&r.once)return dt(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)lt(t,e[o],n,r,i);return null}return n=wt(n),t&&t[Q]?t.O(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=d(i)?!!i.capture:!!i,a=vt(t);if(a||(t[ct]=a=new ot(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)k||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(gt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=yt;return t}function dt(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)dt(t,e[o],n,r,i);return null}return n=wt(n),t&&t[Q]?t.P(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function pt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)pt(t,e[o],n,r,i);else r=d(r)?!!r.capture:!!r,n=wt(n),t&&t[Q]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=at(o,n,r,i),-1<n&&(Z(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,i)),(n=-1<t?e[t]:null)&&mt(n))}function mt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Q])st(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(gt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vt(e))?(st(n,t),0==n.h&&(n.src=null,e[ct]=null)):Z(t)}}}function gt(t){return t in ut?ut[t]:ut[t]="on"+t}function yt(t,e){if(t.fa)t=!0;else{e=new G(e,this);var n=t.listener,r=t.la||t.src;t.ia&&mt(t),t=n.call(r,e)}return t}function vt(t){return t=t[ct],t instanceof ot?t:null}var bt="__closure_events_fn_"+(1e9*Math.random()>>>0);function wt(t){return"function"===typeof t?t:(t[bt]||(t[bt]=function(e){return t.handleEvent(e)}),t[bt])}function _t(){E.call(this),this.i=new ot(this),this.S=this,this.J=null}function Et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new S(e,t);else if(e instanceof S)e.target=e.target||t;else{var i=e;e=new S(r,t),it(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=It(s,r,!0,e)&&i}if(s=e.g=t,i=It(s,r,!0,e)&&i,i=It(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=It(s,r,!1,e)&&i}function It(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.fa&&s.capture==n){var a=s.listener,c=s.la||s.src;s.ia&&st(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}_(_t,E),_t.prototype[Q]=!0,_t.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},_t.prototype.N=function(){if(_t.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Z(n[r]);delete e.g[t],e.h--}}this.J=null},_t.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},_t.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Tt=h.JSON.stringify;class At{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Ot(){var t=Dt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class St{constructor(){this.h=this.g=null}add(t,e){const n=kt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var kt=new At((()=>new Ct),(t=>t.reset()));class Ct{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Rt(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function xt(t){h.setTimeout((()=>{throw t}),0)}let Pt,Nt=!1,Dt=new St,Lt=()=>{const t=h.Promise.resolve(void 0);Pt=()=>{t.then(jt)}};var jt=()=>{for(var t;t=Ot();){try{t.h.call(t.g)}catch(n){xt(n)}var e=kt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Nt=!1};function Mt(t,e){_t.call(this),this.h=t||1,this.g=e||h,this.j=b(this.qb,this),this.l=Date.now()}function Ut(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Ft(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Vt(t){t.g=Ft((()=>{t.g=null,t.i&&(t.i=!1,Vt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Mt,_t),r=Mt.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(Ut(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Mt.$.N.call(this),Ut(this),delete this.g};class Bt extends E{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Vt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zt(t){E.call(this),this.h=t,this.g={}}_(zt,E);var $t=[];function qt(t,e,n,r){Array.isArray(n)||(n&&($t[0]=n.toString()),n=$t);for(var i=0;i<n.length;i++){var o=lt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Ht(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&mt(t)}),t),t.g={}}function Kt(){this.g=!0}function Wt(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function Gt(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function Jt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Yt(t,n)+(r?" "+r:"")}))}function Qt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Yt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Tt(n)}catch(a){return e}}zt.prototype.N=function(){zt.$.N.call(this),Ht(this)},zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Kt.prototype.Ea=function(){this.g=!1},Kt.prototype.info=function(){};var Xt={},Zt=null;function te(){return Zt=Zt||new _t}function ee(t){S.call(this,Xt.Ta,t)}function ne(t){const e=te();Et(e,new ee(e))}function re(t,e){S.call(this,Xt.STAT_EVENT,t),this.stat=e}function ie(t){const e=te();Et(e,new re(e,t))}function oe(t,e){S.call(this,Xt.Ua,t),this.size=e}function se(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}Xt.Ta="serverreachability",_(ee,S),Xt.STAT_EVENT="statevent",_(re,S),Xt.Ua="timingevent",_(oe,S);var ae={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ce={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ue(){}function le(t){return t.h||(t.h=t.i())}function he(){}ue.prototype.h=null;var fe,de={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pe(){S.call(this,"d")}function me(){S.call(this,"c")}function ge(){}function ye(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new zt(this),this.P=be,t=F?125:void 0,this.V=new Mt(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ve}function ve(){this.i=null,this.g="",this.h=!1}_(pe,S),_(me,S),_(ge,ue),ge.prototype.g=function(){return new XMLHttpRequest},ge.prototype.i=function(){return{}},fe=new ge;var be=45e3,we={},_e={};function Ee(t,e,n){t.L=1,t.v=qe(Fe(e)),t.s=n,t.S=!0,Ie(t,null)}function Ie(t,e){t.G=Date.now(),Se(t),t.A=Fe(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ve,t.g=ur(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Bt(b(t.Pa,t,t.g),t.O)),qt(t.U,t.g,"readystatechange",t.nb),e=t.I?nt(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ne(),Wt(t.j,t.u,t.A,t.m,t.W,t.s)}function Te(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Ae(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=Oe(t,n),r==_e){4==e&&(t.o=4,ie(14),i=!1),Jt(t.j,t.m,null,"[Incomplete Response]");break}if(r==we){t.o=4,ie(15),Jt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Jt(t.j,t.m,r,null),Pe(t,r)}Te(t)&&r!=_e&&r!=we&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ie(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),er(e),e.M=!0,ie(11))):(Jt(t.j,t.m,n,"[Invalid Chunked Response]"),xe(t),Re(t))}function Oe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?_e:(n=Number(e.substring(n,r)),isNaN(n)?we:(r+=1,r+n>e.length?_e:(e=e.slice(r,r+n),t.C=r+n,e)))}function Se(t){t.Y=Date.now()+t.P,ke(t,t.P)}function ke(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=se(b(t.lb,t),e)}function Ce(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Re(t){0==t.l.H||t.J||ir(t.l,t)}function xe(t){Ce(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Ut(t.V),Ht(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Pe(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||fn(n.i,t)))if(!t.K&&fn(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;rr(n),Kn(n)}tr(n),ie(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=se(b(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else sr(n,11)}else if((t.K||n.g==t)&&rr(n),!C(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.i;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(dn(o,o.h),o.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,$e(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=t;if(r.wa=cr(r,r.J?r.pa:null,r.Y),s.K){pn(r.i,s);var a=s,c=r.L;c&&a.setTimeout(c),a.B&&(Ce(a),Se(a)),r.g=s}else Zn(r);0<n.j.length&&Gn(n)}else"stop"!=u[0]&&"close"!=u[0]||sr(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?sr(n,7):Hn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}ne(4)}catch(u){}}function Ne(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function De(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Le(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=De(t),r=Ne(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}r=ye.prototype,r.setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==Un(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const l=Un(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>l)&&(3!=l||F||this.g&&(this.h.h||this.g.ja()||Fn(this.g)))){this.J||4!=l||7==e||ne(8==e||0>=f?3:2),Ce(this);var n=this.g.da();this.ca=n;e:if(Te(this)){var r=Fn(this.g);t="";var i=r.length,o=4==Un(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){xe(this),Re(this);var s="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=200==n,Gt(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ie(12),xe(this),Re(this);break t}Jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pe(this,n)}this.S?(Ae(this,l,s),F&&this.i&&3==l&&(qt(this.U,this.V,"tick",this.mb),this.V.start())):(Jt(this.j,this.m,s,null),Pe(this,s)),4==l&&xe(this),this.i&&!this.J&&(4==l?ir(this.l,this):(this.i=!1,Se(this)))}else Vn(this.g),400==n&&0<s.indexOf("Unknown SID")?(this.o=3,ie(12)):(this.o=0,ie(13)),xe(this),Re(this)}}}catch(l){}},r.mb=function(){if(this.g){var t=Un(this.g),e=this.g.ja();this.C<e.length&&(Ce(this),Ae(this,t,e),this.i&&4!=t&&Se(this))}},r.cancel=function(){this.J=!0,xe(this)},r.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Qt(this.j,this.A),2!=this.L&&(ne(),ie(17)),xe(this),this.o=2,Re(this)):ke(this,this.Y-t)};var je=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Me(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ue(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ue){this.h=t.h,Ve(this,t.j),this.s=t.s,this.g=t.g,Be(this,t.m),this.l=t.l;var e=t.i,n=new Ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ze(this,n),this.o=t.o}else t&&(e=String(t).match(je))?(this.h=!1,Ve(this,e[1]||"",!0),this.s=He(e[2]||""),this.g=He(e[3]||"",!0),Be(this,e[4]),this.l=He(e[5]||"",!0),ze(this,e[6]||"",!0),this.o=He(e[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}function Fe(t){return new Ue(t)}function Ve(t,e,n){t.j=n?He(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Be(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ze(t,e,n){e instanceof Ze?(t.i=e,sn(t.i,t.h)):(n||(e=Ke(e,Ye)),t.i=new Ze(e,t.h))}function $e(t,e,n){t.i.set(e,n)}function qe(t){return $e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function He(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ke(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,We),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function We(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ue.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ke(e,Ge,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ke(e,Ge,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ke(n,"/"==n.charAt(0)?Qe:Je,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ke(n,Xe)),t.join("")};var Ge=/[#\/\?@]/g,Je=/[#\?:]/g,Qe=/[#\?]/g,Ye=/[#\?@]/g,Xe=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&Me(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function en(t,e){tn(t),e=on(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nn(t,e){return tn(t),e=on(t,e),t.g.has(e)}function rn(t,e,n){en(t,e),0<n.length&&(t.i=null,t.g.set(on(t,e),A(n)),t.h+=n.length)}function on(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function sn(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(en(this,e),rn(this,n,t))}),t)),t.j=e}r=Ze.prototype,r.add=function(t,e){tn(this),this.i=null,t=on(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){tn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.ta=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.Z=function(t){tn(this);let e=[];if("string"===typeof t)nn(this,t)&&(e=e.concat(this.g.get(on(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return tn(this),this.i=null,t=on(this,t),nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};var an=class{constructor(t,e){this.g=t,this.map=e}};function cn(t){this.l=t||un,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var un=10;function ln(t){return!!t.h||!!t.g&&t.g.size>=t.j}function hn(t){return t.h?1:t.g?t.g.size:0}function fn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function dn(t,e){t.g?t.g.add(e):t.h=e}function pn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function mn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return A(t.i)}cn.prototype.cancel=function(){if(this.i=mn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var gn=class{stringify(t){return h.JSON.stringify(t,void 0)}parse(t){return h.JSON.parse(t,void 0)}};function yn(){this.g=new gn}function vn(t,e,n){const r=n||"";try{Le(t,(function(t,n){let i=t;d(t)&&(i=Tt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function bn(t,e){const n=new Kt;if(h.Image){const r=new Image;r.onload=w(wn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=w(wn,n,r,"TestLoadImage: error",!1,e),r.onabort=w(wn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=w(wn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function wn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function _n(t){this.l=t.fc||null,this.j=t.ob||!1}function En(t,e){_t.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=In,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_(_n,ue),_n.prototype.g=function(){return new En(this.l,this.j)},_n.prototype.i=function(t){return function(){return t}}({}),_(En,_t);var In=0;function Tn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function An(t){t.readyState=4,t.l=null,t.j=null,t.A=null,On(t)}function On(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=En.prototype,r.open=function(t,e){if(this.readyState!=In)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,On(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||h).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=In},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?An(this):On(this),3==this.readyState&&Tn(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,An(this))},r.Ya=function(t){this.g&&(this.response=t,An(this))},r.ka=function(){this.g&&An(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Sn=h.JSON.parse;function kn(t){_t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Cn,this.L=this.M=!1}_(kn,_t);var Cn="",Rn=/^https?$/i,xn=["POST","PUT"];function Pn(t){return M&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Nn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Dn(t),jn(t)}function Dn(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}function Ln(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Un(t)||2!=t.da()))if(t.v&&4==Un(t))Ft(t.La,0,t);else if(Et(t,"readystatechange"),4==Un(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.I).match(je)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!Rn.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var o=2<Un(t)?t.g.statusText:""}catch(s){o=""}t.j=o+" ["+t.da()+"]",Dn(t)}}finally{jn(t)}}}function jn(t,e){if(t.g){Mn(t);const r=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Mn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Un(t){return t.g?t.g.readyState:0}function Fn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Cn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Gr){return null}}function Vn(t){const e={};t=(t.g&&2<=Un(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(C(t[r]))continue;var n=Rt(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const o=e[i]||[];e[i]=o,o.push(n)}et(e,(function(t){return t.join(", ")}))}function Bn(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function zn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Bn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):$e(t,e,n))}function $n(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qn(t){this.Ga=0,this.j=[],this.l=new Kt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$n("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$n("baseRetryDelayMs",5e3,t),this.hb=$n("retryDelaySeedMs",1e4,t),this.eb=$n("forwardChannelMaxRetries",2,t),this.xa=$n("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(t&&t.concurrentRequestLimit),this.Ja=new yn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Hn(t){if(Wn(t),3==t.H){var e=t.W++,n=Fe(t.I);if($e(n,"SID",t.K),$e(n,"RID",e),$e(n,"TYPE","terminate"),Yn(t,n),e=new ye(t,t.l,e),e.L=2,e.v=qe(Fe(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=ur(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Se(e)}ar(t)}function Kn(t){t.g&&(er(t),t.g.cancel(),t.g=null)}function Wn(t){Kn(t),t.u&&(h.clearTimeout(t.u),t.u=null),rr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Gn(t){if(!ln(t.i)&&!t.m){t.m=!0;var e=t.Na;Pt||Lt(),Nt||(Pt(),Nt=!0),Dt.add(e,t),t.C=0}}function Jn(t,e){return!(hn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=se(b(t.Na,t,e),or(t,t.C)),t.C++,!0))}function Qn(t,e){var n;n=e?e.m:t.W++;const r=Fe(t.I);$e(r,"SID",t.K),$e(r,"RID",n),$e(r,"AID",t.V),Yn(t,r),t.o&&t.s&&zn(r,t.o,t.s),n=new ye(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Xn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),dn(t.i,n),Ee(n,r,e)}function Yn(t,e){t.na&&tt(t.na,(function(t,n){$e(e,n,t)})),t.h&&Le({},(function(t,n){$e(e,n,t)}))}function Xn(t,e,n){n=Math.min(t.j.length,n);var r=t.h?b(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let s=0;s<n;s++){let n=i[s].g;const a=i[s].map;if(n-=e,0>n)e=Math.max(0,i[s].g-100),o=!1;else try{vn(a,t,"req"+n+"_")}catch(oi){r&&r(a)}}if(o){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Zn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Pt||Lt(),Nt||(Pt(),Nt=!0),Dt.add(e,t),t.A=0}}function tr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=se(b(t.Ma,t),or(t,t.A)),t.A++,!0)}function er(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function nr(t){t.g=new ye(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Fe(t.wa);$e(e,"RID","rpc"),$e(e,"SID",t.K),$e(e,"AID",t.V),$e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&$e(e,"TO",t.qa),$e(e,"TYPE","xmlhttp"),Yn(t,e),t.o&&t.s&&zn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=qe(Fe(e)),n.s=null,n.S=!0,Ie(n,t)}function rr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ir(t,e){var n=null;if(t.g==e){rr(t),er(t),t.g=null;var r=2}else{if(!fn(t.i,e))return;n=e.F,pn(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=te(),Et(r,new oe(r,n)),Gn(t)}else Zn(t);else if(i=e.o,3==i||0==i&&0<e.ca||!(1==r&&Jn(t,e)||2==r&&tr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:sr(t,5);break;case 4:sr(t,10);break;case 3:sr(t,6);break;default:sr(t,2)}}function or(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function sr(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=b(t.pb,t);n||(n=new Ue("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Ve(n,"https"),qe(n)),bn(n.toString(),r)}else ie(2);t.H=0,t.h&&t.h.za(e),ar(t),Wn(t)}function ar(t){if(t.H=0,t.ma=[],t.h){const e=mn(t.i);0==e.length&&0==t.j.length||(O(t.ma,e),O(t.ma,t.j),t.i.i.length=0,A(t.j),t.j.length=0),t.h.ya()}}function cr(t,e,n){var r=n instanceof Ue?Fe(n):new Ue(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Be(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new Ue(null);r&&Ve(o,r),e&&(o.g=e),i&&Be(o,i),n&&(o.l=n),r=o}return n=t.F,e=t.Da,n&&e&&$e(r,n,e),$e(r,"VER",t.ra),Yn(t,r),r}function ur(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new kn(new _n({ob:!0})):new kn(t.va),e.Oa(t.J),e}function lr(){}function hr(){if(M&&!(10<=Number(W)))throw Error("Environmental error: no available transport.")}function fr(t,e){_t.call(this),this.g=new qn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!C(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new mr(this)}function dr(t){pe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function pr(){me.call(this),this.status=1}function mr(t){this.g=t}function gr(){this.blockSize=-1}function yr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function vr(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}function br(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=0|t[i];r&&o==e||(n[i]=o,r=!1)}this.g=n}r=kn.prototype,r.Oa=function(t){this.M=t},r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fe.g(),this.C=this.u?le(this.u):le(fe),this.g.onreadystatechange=b(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(o){return void Nn(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=T(xn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Mn(this),0<this.B&&((this.L=Pn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.ua,this)):this.A=Ft(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){Nn(this,o)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),jn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jn(this,!0)),kn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Ln(this):this.kb())},r.kb=function(){Ln(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Un(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Sn(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=qn.prototype,r.ra=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ye(this,this.l,t);let o=this.s;if(this.U&&(o?(o=nt(o),it(o,this.U)):o=this.U),null!==this.o||this.O||(i.I=o,o=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Xn(this,i,e),n=Fe(this.I),$e(n,"RID",t),$e(n,"CVER",22),this.F&&$e(n,"X-HTTP-Session-Id",this.F),Yn(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(Bn(o)))+"&"+e:this.o&&zn(n,this.o,o)),dn(this.i,i),this.bb&&$e(n,"TYPE","init"),this.P?($e(n,"$req",e),$e(n,"SID","null"),i.aa=!0,Ee(i,n,null)):Ee(i,n,e),this.H=2}}else 3==this.H&&(t?Qn(this,t):0==this.j.length||ln(this.i)||Qn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=se(b(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ie(10),Kn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,Kn(this),tr(this),ie(19))},r.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ie(2)):(this.l.info("Failed to ping google.com"),ie(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(t,e){return new fr(t,e)},_(fr,_t),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ie(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=cr(t,null,t.Y),Gn(t)},fr.prototype.close=function(){Hn(this.g)},fr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tt(t),t=n);e.j.push(new an(e.fb++,t)),3==e.H&&Gn(e)},fr.prototype.N=function(){this.g.h=null,delete this.j,Hn(this.g),delete this.g,fr.$.N.call(this)},_(dr,pe),_(pr,me),_(mr,lr),mr.prototype.Ba=function(){Et(this.g,"a")},mr.prototype.Aa=function(t){Et(this.g,new dr(t))},mr.prototype.za=function(t){Et(this.g,new pr)},mr.prototype.ya=function(){Et(this.g,"b")},_(yr,gr),yr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},yr.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,o=0;o<e;){if(0==i)for(;o<=n;)vr(this,t,o),o+=this.blockSize;if("string"===typeof t){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){vr(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){vr(this,r),i=0;break}}this.h=i,this.i+=e},yr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var wr={};function _r(t){return-128<=t&&128>t?N(t,(function(t){return new br([0|t],0>t?-1:0)})):new br([0|t],0>t?-1:0)}function Er(t){if(isNaN(t)||!isFinite(t))return Ar;if(0>t)return Rr(Er(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Tr;return new br(e,0)}function Ir(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Rr(Ir(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(e,8)),r=Ar,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),s=parseInt(t.substring(i,i+o),e);8>o?(o=Er(Math.pow(e,o)),r=r.R(o).add(Er(s))):(r=r.R(n),r=r.add(Er(s)))}return r}var Tr=4294967296,Ar=_r(0),Or=_r(1),Sr=_r(16777216);function kr(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Cr(t){return-1==t.h}function Rr(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new br(n,~t.h).add(Or)}function xr(t,e){return t.add(Rr(e))}function Pr(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Nr(t,e){this.g=t,this.h=e}function Dr(t,e){if(kr(e))throw Error("division by zero");if(kr(t))return new Nr(Ar,Ar);if(Cr(t))return e=Dr(Rr(t),e),new Nr(Rr(e.g),Rr(e.h));if(Cr(e))return e=Dr(t,Rr(e)),new Nr(Rr(e.g),e.h);if(30<t.g.length){if(Cr(t)||Cr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Or,r=e;0>=r.X(t);)n=Lr(n),r=Lr(r);var i=jr(n,1),o=jr(r,1);for(r=jr(r,2),n=jr(n,2);!kr(r);){var s=o.add(r);0>=s.X(t)&&(i=i.add(n),o=s),r=jr(r,1),n=jr(n,1)}return e=xr(t,i.R(e)),new Nr(i,e)}for(i=Ar;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=Er(n),s=o.R(e);Cr(s)||0<s.X(t);)n-=r,o=Er(n),s=o.R(e);kr(o)&&(o=Or),i=i.add(o),t=xr(t,s)}return new Nr(i,t)}function Lr(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new br(n,t.h)}function jr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.D(o+n)>>>e|t.D(o+n+1)<<32-e:t.D(o+n);return new br(i,t.h)}r=br.prototype,r.ea=function(){if(Cr(this))return-Rr(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Tr+r)*e,e*=Tr}return t},r.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(kr(this))return"0";if(Cr(this))return"-"+Rr(this).toString(t);for(var e=Er(Math.pow(t,6)),n=this,r="";;){var i=Dr(n,e).g;n=xr(n,i.R(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,kr(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return t=xr(this,t),Cr(t)?-1:kr(t)?0:1},r.abs=function(){return Cr(this)?Rr(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(65535&this.D(i))+(65535&t.D(i)),s=(o>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new br(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(kr(this)||kr(t))return Ar;if(Cr(this))return Cr(t)?Rr(this).R(Rr(t)):Rr(Rr(this).R(t));if(Cr(t))return Rr(this.R(Rr(t)));if(0>this.X(Sr)&&0>t.X(Sr))return Er(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.D(r)>>>16,s=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=s*c,Pr(n,2*r+2*i),n[2*r+2*i+1]+=o*c,Pr(n,2*r+2*i+1),n[2*r+2*i+1]+=s*a,Pr(n,2*r+2*i+1),n[2*r+2*i+2]+=o*a,Pr(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new br(n,0)},r.gb=function(t){return Dr(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new br(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new br(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new br(n,this.h^t.h)},hr.prototype.createWebChannel=hr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ae.NO_ERROR=0,ae.TIMEOUT=8,ae.HTTP_ERROR=6,ce.COMPLETE="complete",he.EventType=de,de.OPEN="a",de.CLOSE="b",de.ERROR="c",de.MESSAGE="d",_t.prototype.listen=_t.prototype.O,kn.prototype.listenOnce=kn.prototype.P,kn.prototype.getLastError=kn.prototype.Sa,kn.prototype.getLastErrorCode=kn.prototype.Ia,kn.prototype.getStatus=kn.prototype.da,kn.prototype.getResponseJson=kn.prototype.Wa,kn.prototype.getResponseText=kn.prototype.ja,kn.prototype.send=kn.prototype.ha,kn.prototype.setWithCredentials=kn.prototype.Oa,yr.prototype.digest=yr.prototype.l,yr.prototype.reset=yr.prototype.reset,yr.prototype.update=yr.prototype.j,br.prototype.add=br.prototype.add,br.prototype.multiply=br.prototype.R,br.prototype.modulo=br.prototype.gb,br.prototype.compare=br.prototype.X,br.prototype.toNumber=br.prototype.ea,br.prototype.toString=br.prototype.toString,br.prototype.getBits=br.prototype.D,br.fromNumber=Er,br.fromString=Ir;var Mr=u.createWebChannelTransport=function(){return new hr},Ur=u.getStatEventTarget=function(){return te()},Fr=u.ErrorCode=ae,Vr=u.EventType=ce,Br=u.Event=Xt,zr=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$r=u.FetchXmlHttpFactory=_n,qr=u.WebChannel=he,Hr=u.XhrIo=kn,Kr=u.Md5=yr,Wr=u.Integer=br;const Gr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Jr.UNAUTHENTICATED=new Jr(null),Jr.GOOGLE_CREDENTIALS=new Jr("google-credentials-uid"),Jr.FIRST_PARTY=new Jr("first-party-uid"),Jr.MOCK_USER=new Jr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qr="9.22.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new s.Yd("@firebase/firestore");function Xr(){return Yr.logLevel}function Zr(t,...e){if(Yr.logLevel<=s["in"].DEBUG){const n=e.map(ni);Yr.debug(`Firestore (${Qr}): ${t}`,...n)}}function ti(t,...e){if(Yr.logLevel<=s["in"].ERROR){const n=e.map(ni);Yr.error(`Firestore (${Qr}): ${t}`,...n)}}function ei(t,...e){if(Yr.logLevel<=s["in"].WARN){const n=e.map(ni);Yr.warn(`Firestore (${Qr}): ${t}`,...n)}}function ni(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t="Unexpected state"){const e=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+t;throw ti(e),new Error(e)}function ii(t,e){t||ri()}function oi(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ai extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class li{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Jr.UNAUTHENTICATED)))}shutdown(){}}class hi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class fi{constructor(t){this.t=t,this.currentUser=Jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ci,t.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},s=t=>{Zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(Zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ci)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ii("string"==typeof e.accessToken),new ui(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ii(null===t||"string"==typeof t),new Jr(t)}}class di{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Jr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class pi{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new di(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gi{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&Zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,Zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?r(t):Zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ii("string"==typeof t.token),this.T=t.token,new mi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=yi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function bi(t,e){return t<e?-1:t>e?1:0}function wi(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _i{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ai(si.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ai(si.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ai(si.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ai(si.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return _i.fromMillis(Date.now())}static fromDate(t){return _i.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new _i(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?bi(this.nanoseconds,t.nanoseconds):bi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ei(t)}static min(){return new Ei(new _i(0,0))}static max(){return new Ei(new _i(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e,n){void 0===e?e=0:e>t.length&&ri(),void 0===n?n=t.length-e:n>t.length-e&&ri(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ii.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ii?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ti extends Ii{construct(t,e,n){return new Ti(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ai(si.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ti(e)}static emptyPath(){return new Ti([])}}const Ai=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oi extends Ii{construct(t,e,n){return new Oi(t,e,n)}static isValidIdentifier(t){return Ai.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Oi(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ai(si.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ai(si.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ai(si.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new ai(si.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Oi(e)}static emptyPath(){return new Oi([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t){this.path=t}static fromPath(t){return new Si(Ti.fromString(t))}static fromName(t){return new Si(Ti.fromString(t).popFirst(5))}static empty(){return new Si(Ti.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ti.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ti.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Si(new Ti(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}ki.UNKNOWN_ID=-1;function Ci(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ei.fromTimestamp(1e9===r?new _i(n+1,0):new _i(n,r));return new xi(i,Si.empty(),e)}function Ri(t){return new xi(t.readTime,t.key,-1)}class xi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new xi(Ei.min(),Si.empty(),-1)}static max(){return new xi(Ei.max(),Si.empty(),-1)}}function Pi(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Si.comparator(t.documentKey,e.documentKey),0!==n?n:bi(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Di{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t){if(t.code!==si.FAILED_PRECONDITION||t.message!==Ni)throw t;Zr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ri(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ji(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ji?e:ji.resolve(e)}catch(t){return ji.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ji.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ji.reject(e)}static resolve(t){return new ji(((e,n)=>{e(t)}))}static reject(t){return new ji(((e,n)=>{n(t)}))}static waitFor(t){return new ji(((e,n)=>{let r=0,i=0,o=!1;t.forEach((t=>{++r,t.next((()=>{++i,o&&i===r&&e()}),(t=>n(t)))})),o=!0,i===r&&e()}))}static or(t){let e=ji.resolve(!1);for(const n of t)e=e.next((t=>t?ji.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new ji(((n,r)=>{const i=t.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{o[c]=t,++s,s===i&&n(o)}),(t=>r(t)))}}))}static doWhile(t,e){return new ji(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function Fi(t){return null==t}function Vi(t){return 0===t&&1/t==-1/0}function Bi(t){return"number"==typeof t&&Number.isInteger(t)&&!Vi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ui.ct=-1;const zi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],$i=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],qi=$i;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,e){this.comparator=t,this.root=e||Qi.EMPTY}insert(t,e){return new Gi(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Qi.BLACK,null,null))}remove(t){return new Gi(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Qi.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ji(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ji(this.root,t,this.comparator,!0)}}class Ji{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Qi{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Qi.RED,this.left=null!=r?r:Qi.EMPTY,this.right=null!=i?i:Qi.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Qi(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qi.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Qi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Qi.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Qi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ri();if(this.right.isRed())throw ri();const t=this.left.check();if(t!==this.right.check())throw ri();return t+(this.isRed()?0:1)}}Qi.EMPTY=null,Qi.RED=!0,Qi.BLACK=!1,Qi.EMPTY=new class{constructor(){this.size=0}get key(){throw ri()}get value(){throw ri()}get color(){throw ri()}get left(){throw ri()}get right(){throw ri()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Qi(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(t){this.comparator=t,this.data=new Gi(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xi(this.data.getIterator())}getIteratorFrom(t){return new Xi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Yi))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Yi(this.comparator);return e.data=t,e}}class Xi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi{constructor(t){this.fields=t,t.sort(Oi.comparator)}static empty(){return new Zi([])}unionWith(t){let e=new Yi(Oi.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Zi(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return wi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new to("Invalid base64 string: "+t):t}}(t);return new eo(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new eo(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return bi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}eo.EMPTY_BYTE_STRING=new eo("");const no=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ro(t){if(ii(!!t),"string"==typeof t){let e=0;const n=no.exec(t);if(ii(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:io(t.seconds),nanos:io(t.nanos)}}function io(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function oo(t){return"string"==typeof t?eo.fromBase64String(t):eo.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ao(t){const e=t.mapValue.fields.__previous_value__;return so(e)?ao(e):e}function co(t){const e=ro(t.mapValue.fields.__local_write_time__.timestampValue);return new _i(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,e,n,r,i,o,s,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=c}}class lo{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new lo("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof lo&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?so(t)?4:So(t)?9007199254740991:10:ri()}function po(t,e){if(t===e)return!0;const n=fo(t);if(n!==fo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return co(t).isEqual(co(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ro(t.timestampValue),r=ro(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return oo(t.bytesValue).isEqual(oo(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return io(t.geoPointValue.latitude)===io(e.geoPointValue.latitude)&&io(t.geoPointValue.longitude)===io(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return io(t.integerValue)===io(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=io(t.doubleValue),r=io(e.doubleValue);return n===r?Vi(n)===Vi(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return wi(t.arrayValue.values||[],e.arrayValue.values||[],po);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Hi(n)!==Hi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!po(n[i],r[i])))return!1;return!0}(t,e);default:return ri()}}function mo(t,e){return void 0!==(t.values||[]).find((t=>po(t,e)))}function go(t,e){if(t===e)return 0;const n=fo(t),r=fo(e);if(n!==r)return bi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return bi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=io(t.integerValue||t.doubleValue),r=io(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return yo(t.timestampValue,e.timestampValue);case 4:return yo(co(t),co(e));case 5:return bi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=oo(t),r=oo(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=bi(n[i],r[i]);if(0!==t)return t}return bi(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=bi(io(t.latitude),io(e.latitude));return 0!==n?n:bi(io(t.longitude),io(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=go(n[i],r[i]);if(t)return t}return bi(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===ho.mapValue&&e===ho.mapValue)return 0;if(t===ho.mapValue)return 1;if(e===ho.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=bi(r[s],o[s]);if(0!==t)return t;const e=go(n[r[s]],i[o[s]]);if(0!==e)return e}return bi(r.length,o.length)}(t.mapValue,e.mapValue);default:throw ri()}}function yo(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return bi(t,e);const n=ro(t),r=ro(e),i=bi(n.seconds,r.seconds);return 0!==i?i:bi(n.nanos,r.nanos)}function vo(t){return bo(t)}function bo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ro(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?oo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Si.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=bo(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${bo(t.fields[i])}`;return n+"}"}(t.mapValue):ri();var e,n}function wo(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _o(t){return!!t&&"integerValue"in t}function Eo(t){return!!t&&"arrayValue"in t}function Io(t){return!!t&&"nullValue"in t}function To(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ao(t){return!!t&&"mapValue"in t}function Oo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ki(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Oo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function So(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ko{constructor(t){this.value=t}static empty(){return new ko({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ao(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Oo(e)}setAll(t){let e=Oi.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Oo(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Ao(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return po(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ao(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Ki(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new ko(Oo(this.value))}}function Co(t){const e=[];return Ki(t.fields,((t,n)=>{const r=new Oi([t]);if(Ao(n)){const t=Co(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Zi(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ro{constructor(t,e,n,r,i,o,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=s}static newInvalidDocument(t){return new Ro(t,0,Ei.min(),Ei.min(),Ei.min(),ko.empty(),0)}static newFoundDocument(t,e,n,r){return new Ro(t,1,e,Ei.min(),n,r,0)}static newNoDocument(t,e){return new Ro(t,2,e,Ei.min(),Ei.min(),ko.empty(),0)}static newUnknownDocument(t,e){return new Ro(t,3,e,Ei.min(),Ei.min(),ko.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ei.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ko.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ko.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ei.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ro&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ro(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,e){this.position=t,this.inclusive=e}}function Po(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?Si.comparator(Si.fromName(s.referenceValue),n.key):go(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function No(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!po(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t,e="asc"){this.field=t,this.dir=e}}function Lo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{}class Mo extends jo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ho(t,e,n):"array-contains"===e?new Jo(t,n):"in"===e?new Qo(t,n):"not-in"===e?new Yo(t,n):"array-contains-any"===e?new Xo(t,n):new Mo(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Ko(t,n):new Wo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(go(e,this.value)):null!==e&&fo(this.value)===fo(e)&&this.matchesComparison(go(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ri()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Uo extends jo{constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}static create(t,e){return new Uo(t,e)}matches(t){return Fo(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft((t=>t.isInequality()));return null!==t?t.field:null}ft(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Fo(t){return"and"===t.op}function Vo(t){return Bo(t)&&Fo(t)}function Bo(t){for(const e of t.filters)if(e instanceof Uo)return!1;return!0}function zo(t){if(t instanceof Mo)return t.field.canonicalString()+t.op.toString()+vo(t.value);if(Vo(t))return t.filters.map((t=>zo(t))).join(",");{const e=t.filters.map((t=>zo(t))).join(",");return`${t.op}(${e})`}}function $o(t,e){return t instanceof Mo?function(t,e){return e instanceof Mo&&t.op===e.op&&t.field.isEqual(e.field)&&po(t.value,e.value)}(t,e):t instanceof Uo?function(t,e){return e instanceof Uo&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&$o(n,e.filters[r])),!0)}(t,e):void ri()}function qo(t){return t instanceof Mo?function(t){return`${t.field.canonicalString()} ${t.op} ${vo(t.value)}`}(t):t instanceof Uo?function(t){return t.op.toString()+" {"+t.getFilters().map(qo).join(" ,")+"}"}(t):"Filter"}class Ho extends Mo{constructor(t,e,n){super(t,e,n),this.key=Si.fromName(n.referenceValue)}matches(t){const e=Si.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ko extends Mo{constructor(t,e){super(t,"in",e),this.keys=Go("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Wo extends Mo{constructor(t,e){super(t,"not-in",e),this.keys=Go("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Go(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Si.fromName(t.referenceValue)))}class Jo extends Mo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Eo(e)&&mo(e.arrayValue,this.value)}}class Qo extends Mo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&mo(this.value.arrayValue,e)}}class Yo extends Mo{constructor(t,e){super(t,"not-in",e)}matches(t){if(mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!mo(this.value.arrayValue,e)}}class Xo extends Mo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Eo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>mo(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.dt=null}}function ts(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Zo(t,e,n,r,i,o,s)}function es(t){const e=oi(t);if(null===e.dt){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>zo(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Fi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>vo(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>vo(t))).join(",")),e.dt=t}return e.dt}function ns(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Lo(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$o(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!No(t.startAt,e.startAt)&&No(t.endAt,e.endAt)}function rs(t){return Si.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class is{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function os(t,e,n,r,i,o,s,a){return new is(t,e,n,r,i,o,s,a)}function ss(t){return new is(t)}function as(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function cs(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function us(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function ls(t){return null!==t.collectionGroup}function hs(t){const e=oi(t);if(null===e.wt){e.wt=[];const t=us(e),n=cs(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new Do(t)),e.wt.push(new Do(Oi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Do(Oi.keyField(),t))}}}return e.wt}function fs(t){const e=oi(t);if(!e._t)if("F"===e.limitType)e._t=ts(e.path,e.collectionGroup,hs(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of hs(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Do(i.field,e))}const n=e.endAt?new xo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new xo(e.startAt.position,e.startAt.inclusive):null;e._t=ts(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function ds(t,e){e.getFirstInequalityField(),us(t);const n=t.filters.concat([e]);return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ps(t,e,n){return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ms(t,e){return ns(fs(t),fs(e))&&t.limitType===e.limitType}function gs(t){return`${es(fs(t))}|lt:${t.limitType}`}function ys(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>qo(t))).join(", ")}]`),Fi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>vo(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>vo(t))).join(",")),`Target(${e})`}(fs(t))}; limitType=${t.limitType})`}function vs(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Si.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of hs(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Po(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,hs(t),e))&&!(t.endAt&&!function(t,e,n){const r=Po(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,hs(t),e))}(t,e)}function bs(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ws(t){return(e,n)=>{let r=!1;for(const i of hs(t)){const t=_s(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function _s(t,e,n){const r=t.field.isKeyField()?Si.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?go(r,i):ri()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ri()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ki(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Wi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Gi(Si.comparator);function Ts(){return Is}const As=new Gi(Si.comparator);function Os(...t){let e=As;for(const n of t)e=e.insert(n.key,n);return e}function Ss(t){let e=As;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ks(){return Rs()}function Cs(){return Rs()}function Rs(){return new Es((t=>t.toString()),((t,e)=>t.isEqual(e)))}const xs=new Gi(Si.comparator),Ps=new Yi(Si.comparator);function Ns(...t){let e=Ps;for(const n of t)e=e.add(n);return e}const Ds=new Yi(bi);function Ls(){return Ds}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(e)?"-0":e}}function Ms(t){return{integerValue:""+t}}function Us(t,e){return Bi(e)?Ms(e):js(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this._=void 0}}function Vs(t,e,n){return t instanceof $s?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&so(e)&&(e=ao(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof qs?Hs(t,e):t instanceof Ks?Ws(t,e):function(t,e){const n=zs(t,e),r=Js(n)+Js(t.gt);return _o(n)&&_o(t.gt)?Ms(r):js(t.serializer,r)}(t,e)}function Bs(t,e,n){return t instanceof qs?Hs(t,e):t instanceof Ks?Ws(t,e):n}function zs(t,e){return t instanceof Gs?_o(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class $s extends Fs{}class qs extends Fs{constructor(t){super(),this.elements=t}}function Hs(t,e){const n=Qs(e);for(const r of t.elements)n.some((t=>po(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Ks extends Fs{constructor(t){super(),this.elements=t}}function Ws(t,e){let n=Qs(e);for(const r of t.elements)n=n.filter((t=>!po(t,r)));return{arrayValue:{values:n}}}class Gs extends Fs{constructor(t,e){super(),this.serializer=t,this.gt=e}}function Js(t){return io(t.integerValue||t.doubleValue)}function Qs(t){return Eo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof qs&&e instanceof qs||t instanceof Ks&&e instanceof Ks?wi(t.elements,e.elements,po):t instanceof Gs&&e instanceof Gs?po(t.gt,e.gt):t instanceof $s&&e instanceof $s}(t.transform,e.transform)}class Xs{constructor(t,e){this.version=t,this.transformResults=e}}class Zs{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zs}static exists(t){return new Zs(void 0,t)}static updateTime(t){return new Zs(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ta(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ea{}function na(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new fa(t.key,Zs.none()):new aa(t.key,t.data,Zs.none());{const n=t.data,r=ko.empty();let i=new Yi(Oi.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new ca(t.key,r,new Zi(i.toArray()),Zs.none())}}function ra(t,e,n){t instanceof aa?function(t,e,n){const r=t.value.clone(),i=la(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ca?function(t,e,n){if(!ta(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=la(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ua(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ia(t,e,n,r){return t instanceof aa?function(t,e,n,r){if(!ta(t.precondition,e))return n;const i=t.value.clone(),o=ha(t.fieldTransforms,r,e);return i.setAll(o),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof ca?function(t,e,n,r){if(!ta(t.precondition,e))return n;const i=ha(t.fieldTransforms,r,e),o=e.data;return o.setAll(ua(t)),o.setAll(i),e.convertToFoundDocument(e.version,o).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return ta(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function oa(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=zs(r.transform,t||null);null!=i&&(null===n&&(n=ko.empty()),n.set(r.field,i))}return n||null}function sa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&wi(t,e,((t,e)=>Ys(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class aa extends ea{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ca extends ea{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ua(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function la(t,e,n){const r=new Map;ii(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Bs(s,a,n[i]))}return r}function ha(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,Vs(t,o,e))}return r}class fa extends ea{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class da extends ea{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&ra(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ia(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ia(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Cs();return this.mutations.forEach((r=>{const i=t.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=e.has(r.key)?null:s;const a=na(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(Ei.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ns())}isEqual(t){return this.batchId===t.batchId&&wi(this.mutations,t.mutations,((t,e)=>sa(t,e)))&&wi(this.baseMutations,t.baseMutations,((t,e)=>sa(t,e)))}}class ma{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){ii(t.mutations.length===n.length);let r=xs;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new ma(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ya{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var va,ba;function wa(t){switch(t){default:return ri();case si.CANCELLED:case si.UNKNOWN:case si.DEADLINE_EXCEEDED:case si.RESOURCE_EXHAUSTED:case si.INTERNAL:case si.UNAVAILABLE:case si.UNAUTHENTICATED:return!1;case si.INVALID_ARGUMENT:case si.NOT_FOUND:case si.ALREADY_EXISTS:case si.PERMISSION_DENIED:case si.FAILED_PRECONDITION:case si.ABORTED:case si.OUT_OF_RANGE:case si.UNIMPLEMENTED:case si.DATA_LOSS:return!0}}function _a(t){if(void 0===t)return ti("GRPC error has no .code"),si.UNKNOWN;switch(t){case va.OK:return si.OK;case va.CANCELLED:return si.CANCELLED;case va.UNKNOWN:return si.UNKNOWN;case va.DEADLINE_EXCEEDED:return si.DEADLINE_EXCEEDED;case va.RESOURCE_EXHAUSTED:return si.RESOURCE_EXHAUSTED;case va.INTERNAL:return si.INTERNAL;case va.UNAVAILABLE:return si.UNAVAILABLE;case va.UNAUTHENTICATED:return si.UNAUTHENTICATED;case va.INVALID_ARGUMENT:return si.INVALID_ARGUMENT;case va.NOT_FOUND:return si.NOT_FOUND;case va.ALREADY_EXISTS:return si.ALREADY_EXISTS;case va.PERMISSION_DENIED:return si.PERMISSION_DENIED;case va.FAILED_PRECONDITION:return si.FAILED_PRECONDITION;case va.ABORTED:return si.ABORTED;case va.OUT_OF_RANGE:return si.OUT_OF_RANGE;case va.UNIMPLEMENTED:return si.UNIMPLEMENTED;case va.DATA_LOSS:return si.DATA_LOSS;default:return ri()}}(ba=va||(va={}))[ba.OK=0]="OK",ba[ba.CANCELLED=1]="CANCELLED",ba[ba.UNKNOWN=2]="UNKNOWN",ba[ba.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ba[ba.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ba[ba.NOT_FOUND=5]="NOT_FOUND",ba[ba.ALREADY_EXISTS=6]="ALREADY_EXISTS",ba[ba.PERMISSION_DENIED=7]="PERMISSION_DENIED",ba[ba.UNAUTHENTICATED=16]="UNAUTHENTICATED",ba[ba.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ba[ba.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ba[ba.ABORTED=10]="ABORTED",ba[ba.OUT_OF_RANGE=11]="OUT_OF_RANGE",ba[ba.UNIMPLEMENTED=12]="UNIMPLEMENTED",ba[ba.INTERNAL=13]="INTERNAL",ba[ba.UNAVAILABLE=14]="UNAVAILABLE",ba[ba.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ea{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ia}static getOrCreateInstance(){return null===Ia&&(Ia=new Ea),Ia}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let Ia=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new Wr([4294967295,4294967295],0);function Oa(t){const e=Ta().encode(t),n=new Kr;return n.update(e),new Uint8Array(n.digest())}function Sa(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Wr([n,r],0),new Wr([i,o],0)]}class ka{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ca(`Invalid padding: ${e}`);if(n<0)throw new Ca(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Ca(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Ca(`Invalid padding when bitmap length is 0: ${e}`);this.It=8*t.length-e,this.Tt=Wr.fromNumber(this.It)}Et(t,e,n){let r=t.add(e.multiply(Wr.fromNumber(n)));return 1===r.compare(Aa)&&(r=new Wr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}vt(t){if(0===this.It)return!1;const e=Oa(t),[n,r]=Sa(e);for(let i=0;i<this.hashCount;i++){const t=this.Et(n,r,i);if(!this.At(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new ka(i,r,e);return n.forEach((t=>o.insert(t))),o}insert(t){if(0===this.It)return;const e=Oa(t),[n,r]=Sa(e);for(let i=0;i<this.hashCount;i++){const t=this.Et(n,r,i);this.Rt(t)}}Rt(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ca extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,xa.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ra(Ei.min(),r,new Gi(bi),Ts(),Ns())}}class xa{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new xa(n,e,Ns(),Ns(),Ns())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e,n,r){this.Pt=t,this.removedTargetIds=e,this.key=n,this.bt=r}}class Na{constructor(t,e){this.targetId=t,this.Vt=e}}class Da{constructor(t,e,n=eo.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class La{constructor(){this.St=0,this.Dt=Ua(),this.Ct=eo.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=Ns(),e=Ns(),n=Ns();return this.Dt.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:ri()}})),new xa(this.Ct,this.xt,t,e,n)}Ft(){this.Nt=!1,this.Dt=Ua()}Bt(t,e){this.Nt=!0,this.Dt=this.Dt.insert(t,e)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class ja{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=Ts(),this.zt=Ma(),this.Wt=new Gi(bi)}Ht(t){for(const e of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(e,t.bt):this.Yt(e,t.key,t.bt);for(const e of t.removedTargetIds)this.Yt(e,t.key,t.bt)}Xt(t){this.forEachTarget(t,(e=>{const n=this.Zt(e);switch(t.state){case 0:this.te(e)&&n.$t(t.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(t.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(e);break;case 3:this.te(e)&&(n.Kt(),n.$t(t.resumeToken));break;case 4:this.te(e)&&(this.ee(e),n.$t(t.resumeToken));break;default:ri()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qt.forEach(((t,n)=>{this.te(n)&&e(n)}))}ne(t){var e;const n=t.targetId,r=t.Vt.count,i=this.se(n);if(i){const o=i.target;if(rs(o))if(0===r){const t=new Si(o.path);this.Yt(n,t,Ro.newNoDocument(t,Ei.min()))}else ii(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(t,i);if(0!==r){this.ee(n);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,t)}null===(e=Ea.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n){var r,i,o,s,a,c;const u={localCacheCount:e,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===t,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(s=null===(o=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===o?void 0:o.length)&&void 0!==s?s:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,i,t.Vt))}}}}re(t,e){const{unchangedNames:n,count:r}=t.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:s=0}=n;let a,c;try{a=oo(i).toUint8Array()}catch(t){if(t instanceof to)return ei("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw t}try{c=new ka(a,o,s)}catch(t){return ei(t instanceof Ca?"BloomFilter error: ":"Applying bloom filter failed: ",t),1}return 0===c.It?1:r!==e-this.oe(t.targetId,c)?2:0}oe(t,e){const n=this.Gt.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Gt.ue(),o=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.vt(o)||(this.Yt(t,n,null),r++)})),r}ce(t){const e=new Map;this.Qt.forEach(((n,r)=>{const i=this.se(r);if(i){if(n.current&&rs(i.target)){const e=new Si(i.target.path);null!==this.jt.get(e)||this.ae(r,e)||this.Yt(r,e,Ro.newNoDocument(e,t))}n.Mt&&(e.set(r,n.Ot()),n.Ft())}}));let n=Ns();this.zt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.se(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.jt.forEach(((e,n)=>n.setReadTime(t)));const r=new Ra(t,e,this.Wt,this.jt,n);return this.jt=Ts(),this.zt=Ma(),this.Wt=new Gi(bi),r}Jt(t,e){if(!this.te(t))return;const n=this.ae(t,e.key)?2:0;this.Zt(t).Bt(e.key,n),this.jt=this.jt.insert(e.key,e),this.zt=this.zt.insert(e.key,this.he(e.key).add(t))}Yt(t,e,n){if(!this.te(t))return;const r=this.Zt(t);this.ae(t,e)?r.Bt(e,1):r.Lt(e),this.zt=this.zt.insert(e,this.he(e).delete(t)),n&&(this.jt=this.jt.insert(e,n))}removeTarget(t){this.Qt.delete(t)}ie(t){const e=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let e=this.Qt.get(t);return e||(e=new La,this.Qt.set(t,e)),e}he(t){let e=this.zt.get(t);return e||(e=new Yi(bi),this.zt=this.zt.insert(t,e)),e}te(t){const e=null!==this.se(t);return e||Zr("WatchChangeAggregator","Detected inactive target",t),e}se(t){const e=this.Qt.get(t);return e&&e.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new La),this.Gt.getRemoteKeysForTarget(t).forEach((e=>{this.Yt(t,e,null)}))}ae(t,e){return this.Gt.getRemoteKeysForTarget(t).has(e)}}function Ma(){return new Gi(Si.comparator)}function Ua(){return new Gi(Si.comparator)}const Fa=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Va=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),Ba=(()=>{const t={and:"AND",or:"OR"};return t})();class za{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function $a(t,e){return t.useProto3Json||Fi(e)?e:{value:e}}function qa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ha(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ka(t,e){return qa(t,e.toTimestamp())}function Wa(t){return ii(!!t),Ei.fromTimestamp(function(t){const e=ro(t);return new _i(e.seconds,e.nanos)}(t))}function Ga(t,e){return function(t){return new Ti(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ja(t){const e=Ti.fromString(t);return ii(vc(e)),e}function Qa(t,e){return Ga(t.databaseId,e.path)}function Ya(t,e){const n=Ja(e);if(n.get(1)!==t.databaseId.projectId)throw new ai(si.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ai(si.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Si(ec(n))}function Xa(t,e){return Ga(t.databaseId,e)}function Za(t){const e=Ja(t);return 4===e.length?Ti.emptyPath():ec(e)}function tc(t){return new Ti(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ec(t){return ii(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function nc(t,e,n){return{name:Qa(t,e),fields:n.value.mapValue.fields}}function rc(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ri()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(ii(void 0===e||"string"==typeof e),eo.fromBase64String(e||"")):(ii(void 0===e||e instanceof Uint8Array),eo.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?si.UNKNOWN:_a(t.code);return new ai(e,t.message||"")}(s);n=new Da(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ya(t,r.document.name),o=Wa(r.document.updateTime),s=r.document.createTime?Wa(r.document.createTime):Ei.min(),a=new ko({mapValue:{fields:r.document.fields}}),c=Ro.newFoundDocument(i,o,s,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Pa(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ya(t,r.document),o=r.readTime?Wa(r.readTime):Ei.min(),s=Ro.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Pa([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ya(t,r.document),o=r.removedTargetIds||[];n=new Pa([],o,i,null)}else{if(!("filter"in e))return ri();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,o=new ya(r,i),s=t.targetId;n=new Na(s,o)}}return n}function ic(t,e){let n;if(e instanceof aa)n={update:nc(t,e.key,e.value)};else if(e instanceof fa)n={delete:Qa(t,e.key)};else if(e instanceof ca)n={update:nc(t,e.key,e.data),updateMask:yc(e.fieldMask)};else{if(!(e instanceof da))return ri();n={verify:Qa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof $s)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof qs)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ks)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Gs)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw ri()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ka(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:ri()}(t,e.precondition)),n}function oc(t,e){return t&&t.length>0?(ii(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Wa(t.updateTime):Wa(e);return n.isEqual(Ei.min())&&(n=Wa(e)),new Xs(n,t.transformResults||[])}(t,e)))):[]}function sc(t,e){return{documents:[Xa(t,e.path)]}}function ac(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Xa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return gc(Uo.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:pc(t.field),direction:hc(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=$a(t,e.limit);var a;return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function cc(t){let e=Za(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ii(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=function(t){const e=lc(t);return e instanceof Uo&&Vo(e)?e.getFilters():[e]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((t=>function(t){return new Do(mc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Fi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new xo(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new xo(n,e)}(n.endAt)),os(e,i,s,o,a,"F",c,u)}function uc(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ri()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function lc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=mc(t.unaryFilter.field);return Mo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=mc(t.unaryFilter.field);return Mo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=mc(t.unaryFilter.field);return Mo.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=mc(t.unaryFilter.field);return Mo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ri()}}(t):void 0!==t.fieldFilter?function(t){return Mo.create(mc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ri()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Uo.create(t.compositeFilter.filters.map((t=>lc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ri()}}(t.compositeFilter.op))}(t):ri()}function hc(t){return Fa[t]}function fc(t){return Va[t]}function dc(t){return Ba[t]}function pc(t){return{fieldPath:t.canonicalString()}}function mc(t){return Oi.fromServerFormat(t.fieldPath)}function gc(t){return t instanceof Mo?function(t){if("=="===t.op){if(To(t.value))return{unaryFilter:{field:pc(t.field),op:"IS_NAN"}};if(Io(t.value))return{unaryFilter:{field:pc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(To(t.value))return{unaryFilter:{field:pc(t.field),op:"IS_NOT_NAN"}};if(Io(t.value))return{unaryFilter:{field:pc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pc(t.field),op:fc(t.op),value:t.value}}}(t):t instanceof Uo?function(t){const e=t.getFilters().map((t=>gc(t)));return 1===e.length?e[0]:{compositeFilter:{op:dc(t.op),filters:e}}}(t):ri()}function yc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function vc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t,e,n,r,i=Ei.min(),o=Ei.min(),s=eo.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s,this.expectedCount=a}withSequenceNumber(t){return new bc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new bc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new bc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new bc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t){this.fe=t}}function _c(t){const e=cc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ps(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){}_e(t,e){this.me(t,e),e.ge()}me(t,e){if("nullValue"in t)this.ye(e,5);else if("booleanValue"in t)this.ye(e,10),e.pe(t.booleanValue?1:0);else if("integerValue"in t)this.ye(e,15),e.pe(io(t.integerValue));else if("doubleValue"in t){const n=io(t.doubleValue);isNaN(n)?this.ye(e,13):(this.ye(e,15),Vi(n)?e.pe(0):e.pe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ye(e,20),"string"==typeof n?e.Ie(n):(e.Ie(`${n.seconds||""}`),e.pe(n.nanos||0))}else if("stringValue"in t)this.Te(t.stringValue,e),this.Ee(e);else if("bytesValue"in t)this.ye(e,30),e.Ae(oo(t.bytesValue)),this.Ee(e);else if("referenceValue"in t)this.ve(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ye(e,45),e.pe(n.latitude||0),e.pe(n.longitude||0)}else"mapValue"in t?So(t)?this.ye(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Ee(e)):"arrayValue"in t?(this.Pe(t.arrayValue,e),this.Ee(e)):ri()}Te(t,e){this.ye(e,25),this.be(t,e)}be(t,e){e.Ie(t)}Re(t,e){const n=t.fields||{};this.ye(e,55);for(const r of Object.keys(n))this.Te(r,e),this.me(n[r],e)}Pe(t,e){const n=t.values||[];this.ye(e,50);for(const r of n)this.me(r,e)}ve(t,e){this.ye(e,37),Si.fromName(t).path.forEach((t=>{this.ye(e,60),this.be(t,e)}))}ye(t,e){t.pe(e)}Ee(t){t.pe(2)}}Ec.Ve=new Ec;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(){this.rn=new Tc}addToCollectionParentIndex(t,e){return this.rn.add(e),ji.resolve()}getCollectionParents(t,e){return ji.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){return ji.resolve()}deleteFieldIndex(t,e){return ji.resolve()}getDocumentsMatchingTarget(t,e){return ji.resolve(null)}getIndexType(t,e){return ji.resolve(0)}getFieldIndexes(t,e){return ji.resolve([])}getNextCollectionGroupToUpdate(t){return ji.resolve(null)}getMinOffset(t,e){return ji.resolve(xi.min())}getMinOffsetFromCollectionGroup(t,e){return ji.resolve(xi.min())}updateCollectionGroup(t,e,n){return ji.resolve()}updateIndexEntries(t,e){return ji.resolve()}}class Tc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Yi(Ti.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Yi(Ti.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ac{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ac(t,Ac.DEFAULT_COLLECTION_PERCENTILE,Ac.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ac.DEFAULT_COLLECTION_PERCENTILE=10,Ac.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ac.DEFAULT=new Ac(41943040,Ac.DEFAULT_COLLECTION_PERCENTILE,Ac.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ac.DISABLED=new Ac(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oc{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new Oc(0)}static Mn(){return new Oc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(){this.changes=new Es((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ro.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ji.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&ia(n.mutation,t,Zi.empty(),_i.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ns()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ns()){const r=ks();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Os();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ks();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ns())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Ts();const o=Rs(),s=Rs();return e.forEach(((t,e)=>{const s=n.get(e.key);r.has(e.key)&&(void 0===s||s.mutation instanceof ca)?i=i.insert(e.key,e):void 0!==s?(o.set(e.key,s.mutation.getFieldMask()),ia(s.mutation,e,s.mutation.getFieldMask(),_i.now())):o.set(e.key,Zi.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>o.set(t,e))),e.forEach(((t,e)=>{var n;return s.set(t,new kc(e,null!==(n=o.get(t))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(t,e){const n=Rs();let r=new Gi(((t,e)=>t-e)),i=Ns();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const o=e.get(t);if(null===o)return;let s=n.get(t)||Zi.empty();s=i.applyToLocalView(o,s),n.set(t,s);const a=(r.get(i.batchId)||Ns()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,c=r.value,u=Cs();c.forEach((t=>{if(!i.has(t)){const r=na(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),o.push(this.documentOverlayCache.saveOverlays(t,a,u))}return ji.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Si.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ls(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):ji.resolve(ks());let s=-1,a=i;return o.next((e=>ji.forEach(e,((e,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(e)?ji.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Ns()))).next((t=>({batchId:s,changes:Ss(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Si(e)).next((t=>{let e=Os();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=Os();return this.indexManager.getCollectionParents(t,r).next((o=>ji.forEach(o,(o=>{const s=function(t,e){return new is(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,s,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r)))).next((t=>{r.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Ro.newInvalidDocument(r)))}));let n=Os();return t.forEach(((t,i)=>{const o=r.get(t);void 0!==o&&ia(o.mutation,i,Zi.empty(),_i.now()),vs(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,e){return ji.resolve(this.cs.get(e))}saveBundleMetadata(t,e){var n;return this.cs.set(e.id,{id:(n=e).id,version:n.version,createTime:Wa(n.createTime)}),ji.resolve()}getNamedQuery(t,e){return ji.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,function(t){return{name:t.name,query:_c(t.bundledQuery),readTime:Wa(t.readTime)}}(e)),ji.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this.overlays=new Gi(Si.comparator),this.ls=new Map}getOverlay(t,e){return ji.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ks();return ji.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.we(t,e,r)})),ji.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.ls.delete(n)),ji.resolve()}getOverlaysForCollection(t,e,n){const r=ks(),i=e.length+1,o=new Si(e.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const t=s.getNext().value,o=t.getKey();if(!e.isPrefixOf(o.path))break;o.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return ji.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Gi(((t,e)=>t-e));const o=this.overlays.getIterator();for(;o.hasNext();){const t=o.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=ks(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=ks(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>s.set(t,e))),s.size()>=r)break;return ji.resolve(s)}we(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ga(e,n));let i=this.ls.get(e);void 0===i&&(i=Ns(),this.ls.set(e,i)),this.ls.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this.fs=new Yi(Nc.ds),this.ws=new Yi(Nc._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,e){const n=new Nc(t,e);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ys(new Nc(t,e))}ps(t,e){t.forEach((t=>this.removeReference(t,e)))}Is(t){const e=new Si(new Ti([])),n=new Nc(e,t),r=new Nc(e,t+1),i=[];return this.ws.forEachInRange([n,r],(t=>{this.ys(t),i.push(t.key)})),i}Ts(){this.fs.forEach((t=>this.ys(t)))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const e=new Si(new Ti([])),n=new Nc(e,t),r=new Nc(e,t+1);let i=Ns();return this.ws.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Nc(t,0),n=this.fs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Nc{constructor(t,e){this.key=t,this.As=e}static ds(t,e){return Si.comparator(t.key,e.key)||bi(t.As,e.As)}static _s(t,e){return bi(t.As,e.As)||Si.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.vs=1,this.Rs=new Yi(Nc.ds)}checkEmpty(t){return ji.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pa(i,e,n,r);this.mutationQueue.push(o);for(const s of r)this.Rs=this.Rs.add(new Nc(s.key,i)),this.indexManager.addToCollectionParentIndex(t,s.key.path.popLast());return ji.resolve(o)}lookupMutationBatch(t,e){return ji.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.bs(n),i=r<0?0:r;return ji.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return ji.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(t){return ji.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Nc(e,0),r=new Nc(e,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(t=>{const e=this.Ps(t.As);i.push(e)})),ji.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Yi(bi);return e.forEach((t=>{const e=new Nc(t,0),r=new Nc(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,r],(t=>{n=n.add(t.As)}))})),ji.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Si.isDocumentKey(i)||(i=i.child(""));const o=new Nc(new Si(i),0);let s=new Yi(bi);return this.Rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t.As)),!0)}),o),ji.resolve(this.Vs(s))}Vs(t){const e=[];return t.forEach((t=>{const n=this.Ps(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ii(0===this.Ss(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return ji.forEach(e.mutations,(r=>{const i=new Nc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Rs=n}))}Cn(t){}containsKey(t,e){const n=new Nc(e,0),r=this.Rs.firstAfterOrEqual(n);return ji.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ji.resolve()}Ss(t,e){return this.bs(t)}bs(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Ps(t){const e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t){this.Ds=t,this.docs=new Gi(Si.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,o=this.Ds(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ji.resolve(n?n.document.mutableCopy():Ro.newInvalidDocument(e))}getEntries(t,e){let n=Ts();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Ro.newInvalidDocument(t))})),ji.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Ts();const o=e.path,s=new Si(o.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:t,value:{document:s}}=a.getNext();if(!o.isPrefixOf(t.path))break;t.path.length>o.length+1||Pi(Ri(s),n)<=0||(r.has(s.key)||vs(e,s))&&(i=i.insert(s.key,s.mutableCopy()))}return ji.resolve(i)}getAllFromCollectionGroup(t,e,n,r){ri()}Cs(t,e){return ji.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new jc(this)}getSize(t){return ji.resolve(this.size)}}class jc extends Sc{constructor(t){super(),this.os=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.os.addEntry(t,r)):this.os.removeEntry(n)})),ji.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t){this.persistence=t,this.xs=new Es((t=>es(t)),ns),this.lastRemoteSnapshotVersion=Ei.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Pc,this.targetCount=0,this.Ms=Oc.kn()}forEachTarget(t,e){return this.xs.forEach(((t,n)=>e(n))),ji.resolve()}getLastRemoteSnapshotVersion(t){return ji.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ji.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),ji.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ns&&(this.Ns=e),ji.resolve()}Fn(t){this.xs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ms=new Oc(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,ji.resolve()}updateTargetData(t,e){return this.Fn(e),ji.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,ji.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.xs.forEach(((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)})),ji.waitFor(i).next((()=>r))}getTargetCount(t){return ji.resolve(this.targetCount)}getTargetData(t,e){const n=this.xs.get(e)||null;return ji.resolve(n)}addMatchingKeys(t,e,n){return this.ks.gs(e,n),ji.resolve()}removeMatchingKeys(t,e,n){this.ks.ps(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),ji.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),ji.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ks.Es(e);return ji.resolve(n)}containsKey(t,e){return ji.resolve(this.ks.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,e){this.$s={},this.overlays={},this.Os=new Ui(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Mc(this),this.indexManager=new Ic,this.remoteDocumentCache=function(t){return new Lc(t)}((t=>this.referenceDelegate.Ls(t))),this.serializer=new wc(e),this.qs=new Rc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new xc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.$s[t.toKey()];return n||(n=new Dc(e,this.referenceDelegate),this.$s[t.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,n){Zr("MemoryPersistence","Starting transaction:",t);const r=new Fc(this.Os.next());return this.referenceDelegate.Us(),n(r).next((t=>this.referenceDelegate.Ks(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Gs(t,e){return ji.or(Object.values(this.$s).map((n=>()=>n.containsKey(t,e))))}}class Fc extends Di{constructor(t){super(),this.currentSequenceNumber=t}}class Vc{constructor(t){this.persistence=t,this.Qs=new Pc,this.js=null}static zs(t){return new Vc(t)}get Ws(){if(this.js)return this.js;throw ri()}addReference(t,e,n){return this.Qs.addReference(n,e),this.Ws.delete(n.toString()),ji.resolve()}removeReference(t,e,n){return this.Qs.removeReference(n,e),this.Ws.add(n.toString()),ji.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),ji.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach((t=>this.Ws.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ws.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Us(){this.js=new Set}Ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ji.forEach(this.Ws,(n=>{const r=Si.fromPath(n);return this.Hs(t,r).next((t=>{t||e.removeEntry(r,Ei.min())}))})).next((()=>(this.js=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hs(t,e).next((t=>{t?this.Ws.delete(e.toString()):this.Ws.add(e.toString())}))}Ls(t){return 0}Hs(t,e){return ji.or([()=>ji.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Fi=n,this.Bi=r}static Li(t,e){let n=Ns(),r=Ns();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Bc(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.qi=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ki(t,e).next((i=>i||this.Gi(t,e,r,n))).next((n=>n||this.Qi(t,e)))}Ki(t,e){if(as(e))return ji.resolve(null);let n=fs(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=ps(e,null,"F"),n=fs(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Ns(...r);return this.Ui.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const o=this.ji(e,r);return this.zi(e,o,i,n.readTime)?this.Ki(t,ps(e,null,"F")):this.Wi(t,o,e,n)}))))})))))}Gi(t,e,n,r){return as(e)||r.isEqual(Ei.min())?this.Qi(t,e):this.Ui.getDocuments(t,n).next((i=>{const o=this.ji(e,i);return this.zi(e,o,n,r)?this.Qi(t,e):(Xr()<=s["in"].DEBUG&&Zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ys(e)),this.Wi(t,o,e,Ci(r,-1)))}))}ji(t,e){let n=new Yi(ws(t));return e.forEach(((e,r)=>{vs(t,r)&&(n=n.add(r))})),n}zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(t,e){return Xr()<=s["in"].DEBUG&&Zr("QueryEngine","Using full collection scan to execute query:",ys(e)),this.Ui.getDocumentsMatchingQuery(t,e,xi.min())}Wi(t,e,n,r){return this.Ui.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,e,n,r){this.persistence=t,this.Hi=e,this.serializer=r,this.Ji=new Gi(bi),this.Yi=new Es((t=>es(t)),ns),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(n)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Cc(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}function qc(t,e,n,r){return new $c(t,e,n,r)}async function Hc(t,e){const n=oi(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],o=[];let s=Ns();for(const t of r){i.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.localDocuments.getDocuments(t,s).next((t=>({er:t,removedBatchIds:i,addedBatchIds:o})))}))}))}function Kc(t,e){const n=oi(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,o=i.keys();let s=ji.resolve();return o.forEach((t=>{s=s.next((()=>r.getEntry(e,t))).next((e=>{const o=n.docVersions.get(t);ii(null!==o),e.version.compareTo(o)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),s.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ns();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Wc(t){const e=oi(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Bs.getLastRemoteSnapshotVersion(t)))}function Gc(t,e){const n=oi(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const s=[];e.targetChanges.forEach(((o,a)=>{const c=i.get(a);if(!c)return;s.push(n.Bs.removeMatchingKeys(t,o.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(t,o.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(eo.EMPTY_BYTE_STRING,Ei.min()).withLastLimboFreeSnapshotVersion(Ei.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,o)&&s.push(n.Bs.updateTargetData(t,u))}));let a=Ts(),c=Ns();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),s.push(Jc(t,o,e.documentUpdates).next((t=>{a=t.nr,c=t.sr}))),!r.isEqual(Ei.min())){const e=n.Bs.getLastRemoteSnapshotVersion(t).next((e=>n.Bs.setTargetsMetadata(t,t.currentSequenceNumber,r)));s.push(e)}return ji.waitFor(s).next((()=>o.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ji=i,t)))}function Jc(t,e,n){let r=Ns(),i=Ns();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Ts();return n.forEach(((n,o)=>{const s=t.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(Ei.min())?(e.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(o),r=r.insert(n,o)):Zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)})),{nr:r,sr:i}}))}function Qc(t,e){const n=oi(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Yc(t,e){const n=oi(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Bs.getTargetData(t,e).next((i=>i?(r=i,ji.resolve(r)):n.Bs.allocateTargetId(t).next((i=>(r=new bc(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Bs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ji.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t}))}async function Xc(t,e,n){const r=oi(t),i=r.Ji.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Mi(t))throw t;Zr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Zc(t,e,n){const r=oi(t);let i=Ei.min(),o=Ns();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=oi(t),i=r.Yi.get(n);return void 0!==i?ji.resolve(r.Ji.get(i)):r.Bs.getTargetData(e,n)}(r,t,fs(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{o=t}))})).next((()=>r.Hi.getDocumentsMatchingQuery(t,e,n?i:Ei.min(),n?o:Ns()))).next((t=>(tu(r,bs(e),t),{documents:t,ir:o})))))}function tu(t,e,n){let r=t.Xi.get(e)||Ei.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Xi.set(e,r)}class eu{constructor(){this.activeTargetIds=Ls()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class nu{constructor(){this.Hr=new eu,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,n){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new eu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{Yr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){Zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou=null;function su(){return null===ou?ou=268435456+Math.round(2147483648*Math.random()):ou++,"0x"+ou.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const au={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="WebChannelConnection";class lu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,e,n,r,i){const o=su(),s=this.To(t,e);Zr("RestConnection",`Sending RPC '${t}' ${o}:`,s,n);const a={};return this.Eo(a,r,i),this.Ao(t,s,a,n).then((e=>(Zr("RestConnection",`Received RPC '${t}' ${o}: `,e),e)),(e=>{throw ei("RestConnection",`RPC '${t}' ${o} failed with error: `,e,"url: ",s,"request:",n),e}))}vo(t,e,n,r,i,o){return this.Io(t,e,n,r,i)}Eo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Qr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}To(t,e){const n=au[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,e,n,r){const i=su();return new Promise(((o,s)=>{const a=new Hr;a.setWithCredentials(!0),a.listenOnce(Vr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Fr.NO_ERROR:const e=a.getResponseJson();Zr(uu,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),o(e);break;case Fr.TIMEOUT:Zr(uu,`RPC '${t}' ${i} timed out`),s(new ai(si.DEADLINE_EXCEEDED,"Request time out"));break;case Fr.HTTP_ERROR:const n=a.getStatus();if(Zr(uu,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(si).indexOf(e)>=0?e:si.UNKNOWN}(e.status);s(new ai(t,e.message))}else s(new ai(si.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new ai(si.UNAVAILABLE,"Connection failed."));break;default:ri()}}finally{Zr(uu,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);Zr(uu,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}Ro(t,e,n){const r=su(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Mr(),s=Ur(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new $r({})),this.Eo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Zr(uu,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=o.createWebChannel(u,a);let h=!1,f=!1;const d=new cu({ro:e=>{f?Zr(uu,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(Zr(uu,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),Zr(uu,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},oo:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,qr.EventType.OPEN,(()=>{f||Zr(uu,`RPC '${t}' stream ${r} transport opened.`)})),p(l,qr.EventType.CLOSE,(()=>{f||(f=!0,Zr(uu,`RPC '${t}' stream ${r} transport closed`),d.wo())})),p(l,qr.EventType.ERROR,(e=>{f||(f=!0,ei(uu,`RPC '${t}' stream ${r} transport errored:`,e),d.wo(new ai(si.UNAVAILABLE,"The operation could not be completed")))})),p(l,qr.EventType.MESSAGE,(e=>{var n;if(!f){const i=e.data[0];ii(!!i);const o=i,s=o.error||(null===(n=o[0])||void 0===n?void 0:n.error);if(s){Zr(uu,`RPC '${t}' stream ${r} received error:`,s);const e=s.status;let n=function(t){const e=va[t];if(void 0!==e)return _a(e)}(e),i=s.message;void 0===n&&(n=si.INTERNAL,i="Unknown error status: "+e+" with message "+s.message),f=!0,d.wo(new ai(n,i)),l.close()}else Zr(uu,`RPC '${t}' stream ${r} received:`,i),d._o(i)}})),p(s,Br.STAT_EVENT,(e=>{e.stat===zr.PROXY?Zr(uu,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===zr.NOPROXY&&Zr(uu,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.fo()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t){return new za(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t,e,n=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,e-n);r>0&&Zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),t()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t,e,n,r,i,o,s,a){this.ii=t,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new du(t,e)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,e){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==t?this.qo.reset():e&&e.code===si.RESOURCE_EXHAUSTED?(ti(e.toString()),ti("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===si.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(e)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),e=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Fo===e&&this.Zo(t,n)}),(e=>{t((()=>{const t=new ai(si.UNKNOWN,"Fetching auth token failed: "+e.message);return this.tu(t)}))}))}Zo(t,e){const n=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((t=>{n((()=>this.tu(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(t){return Zr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.Fo===t?e():(Zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class mu extends pu{constructor(t,e,n,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.serializer=i}eu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.qo.reset();const e=rc(this.serializer,t),n=function(t){if(!("targetChange"in t))return Ei.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ei.min():e.readTime?Wa(e.readTime):Ei.min()}(t);return this.listener.nu(e,n)}su(t){const e={};e.database=tc(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=rs(r)?{documents:sc(t,r)}:{query:ac(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Ha(t,e.resumeToken);const r=$a(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Ei.min())>0){n.readTime=qa(t,e.snapshotVersion.toTimestamp());const r=$a(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=uc(this.serializer,t);n&&(e.labels=n),this.Wo(e)}iu(t){const e={};e.database=tc(this.serializer),e.removeTarget=t,this.Wo(e)}}class gu extends pu{constructor(t,e,n,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){if(ii(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const e=oc(t.writeResults,t.commitTime),n=Wa(t.commitTime);return this.listener.cu(n,e)}return ii(!t.writeResults||0===t.writeResults.length),this.ru=!0,this.listener.au()}hu(){const t={};t.database=tc(this.serializer),this.Wo(t)}uu(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>ic(this.serializer,t)))};this.Wo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new ai(si.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,e,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Io(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ai(si.UNKNOWN,t.toString())}))}vo(t,e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.vo(t,e,n,i,o,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ai(si.UNKNOWN,t.toString())}))}terminate(){this.lu=!0}}class vu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(t){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,"Online"===t&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ti(e),this.mu=!1):Zr("OnlineStateTracker",e)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((t=>{n.enqueueAndForget((async()=>{ku(this)&&(Zr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=oi(t);e.vu.add(4),await _u(e),e.bu.set("Unknown"),e.vu.delete(4),await wu(e)}(this))}))})),this.bu=new vu(n,r)}}async function wu(t){if(ku(t))for(const e of t.Ru)await e(!0)}async function _u(t){for(const e of t.Ru)await e(!1)}function Eu(t,e){const n=oi(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Su(n)?Ou(n):Ku(n).Ko()&&Tu(n,e))}function Iu(t,e){const n=oi(t),r=Ku(n);n.Au.delete(e),r.Ko()&&Au(n,e),0===n.Au.size&&(r.Ko()?r.jo():ku(n)&&n.bu.set("Unknown"))}function Tu(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ei.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ku(t).su(e)}function Au(t,e){t.Vu.qt(e),Ku(t).iu(e)}function Ou(t){t.Vu=new ja({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Ku(t).start(),t.bu.gu()}function Su(t){return ku(t)&&!Ku(t).Uo()&&t.Au.size>0}function ku(t){return 0===oi(t).vu.size}function Cu(t){t.Vu=void 0}async function Ru(t){t.Au.forEach(((e,n)=>{Tu(t,e)}))}async function xu(t,e){Cu(t),Su(t)?(t.bu.Iu(e),Ou(t)):t.bu.set("Unknown")}async function Pu(t,e,n){if(t.bu.set("Online"),e instanceof Da&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Au.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Au.delete(r),t.Vu.removeTarget(r))}(t,e)}catch(n){Zr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Nu(t,n)}else if(e instanceof Pa?t.Vu.Ht(e):e instanceof Na?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(Ei.min()))try{const e=await Wc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Vu.ce(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Au.get(r);i&&t.Au.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.Au.get(e);if(!r)return;t.Au.set(e,r.withResumeToken(eo.EMPTY_BYTE_STRING,r.snapshotVersion)),Au(t,e);const i=new bc(r.target,e,n,r.sequenceNumber);Tu(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Zr("RemoteStore","Failed to raise snapshot:",e),await Nu(t,e)}}async function Nu(t,e,n){if(!Mi(e))throw e;t.vu.add(1),await _u(t),t.bu.set("Offline"),n||(n=()=>Wc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Zr("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await wu(t)}))}function Du(t,e){return e().catch((n=>Nu(t,n,e)))}async function Lu(t){const e=oi(t),n=Wu(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;ju(e);)try{const t=await Qc(e.localStore,r);if(null===t){0===e.Eu.length&&n.jo();break}r=t.batchId,Mu(e,t)}catch(t){await Nu(e,t)}Uu(e)&&Fu(e)}function ju(t){return ku(t)&&t.Eu.length<10}function Mu(t,e){t.Eu.push(e);const n=Wu(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Uu(t){return ku(t)&&!Wu(t).Uo()&&t.Eu.length>0}function Fu(t){Wu(t).start()}async function Vu(t){Wu(t).hu()}async function Bu(t){const e=Wu(t);for(const n of t.Eu)e.uu(n.mutations)}async function zu(t,e,n){const r=t.Eu.shift(),i=ma.from(r,e,n);await Du(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Lu(t)}async function $u(t,e){e&&Wu(t).ou&&await async function(t,e){if(n=e.code,wa(n)&&n!==si.ABORTED){const n=t.Eu.shift();Wu(t).Qo(),await Du(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Lu(t)}var n}(t,e),Uu(t)&&Fu(t)}async function qu(t,e){const n=oi(t);n.asyncQueue.verifyOperationInProgress(),Zr("RemoteStore","RemoteStore received new credentials");const r=ku(n);n.vu.add(3),await _u(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await wu(n)}async function Hu(t,e){const n=oi(t);e?(n.vu.delete(2),await wu(n)):e||(n.vu.add(2),await _u(n),n.bu.set("Unknown"))}function Ku(t){return t.Su||(t.Su=function(t,e,n){const r=oi(t);return r.fu(),new mu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{uo:Ru.bind(null,t),ao:xu.bind(null,t),nu:Pu.bind(null,t)}),t.Ru.push((async e=>{e?(t.Su.Qo(),Su(t)?Ou(t):t.bu.set("Unknown")):(await t.Su.stop(),Cu(t))}))),t.Su}function Wu(t){return t.Du||(t.Du=function(t,e,n){const r=oi(t);return r.fu(),new gu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{uo:Vu.bind(null,t),ao:$u.bind(null,t),au:Bu.bind(null,t),cu:zu.bind(null,t)}),t.Ru.push((async e=>{e?(t.Du.Qo(),await Lu(t)):(await t.Du.stop(),t.Eu.length>0&&(Zr("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))}))),t.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Gu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new Gu(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ai(si.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ju(t,e){if(ti("AsyncQueue",`${e}: ${t}`),Mi(t))return new ai(si.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Si.comparator(e.key,n.key):(t,e)=>Si.comparator(t.key,e.key),this.keyedMap=Os(),this.sortedSet=new Gi(this.comparator)}static emptySet(t){return new Qu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Qu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Qu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.Cu=new Gi(Si.comparator)}track(t){const e=t.doc.key,n=this.Cu.get(e);n?0!==t.type&&3===n.type?this.Cu=this.Cu.insert(e,t):3===t.type&&1!==n.type?this.Cu=this.Cu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Cu=this.Cu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Cu=this.Cu.remove(e):1===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):ri():this.Cu=this.Cu.insert(e,t)}xu(){const t=[];return this.Cu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Xu{constructor(t,e,n,r,i,o,s,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const o=[];return e.forEach((t=>{o.push({type:0,doc:t})})),new Xu(t,e,Qu.emptySet(e),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ms(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this.Nu=void 0,this.listeners=[]}}class tl{constructor(){this.queries=new Es((t=>gs(t)),ms),this.onlineState="Unknown",this.ku=new Set}}async function el(t,e){const n=oi(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Zu),i)try{o.Nu=await n.onListen(r)}catch(t){const n=Ju(t,`Initialization of query '${ys(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,o),o.listeners.push(e),e.Mu(n.onlineState),o.Nu&&e.$u(o.Nu)&&ol(n)}async function nl(t,e){const n=oi(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const t=o.listeners.indexOf(e);t>=0&&(o.listeners.splice(t,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function rl(t,e){const n=oi(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.$u(i)&&(r=!0);e.Nu=i}}r&&ol(n)}function il(t,e,n){const r=oi(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function ol(t){t.ku.forEach((t=>{t.next()}))}class sl{constructor(t,e,n){this.query=t,this.Ou=e,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Xu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),e=!0):this.qu(t,this.onlineState)&&(this.Uu(t),e=!0),this.Bu=t,e}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let e=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),e=!0),e}qu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Lu(t){if(t.docChanges.length>0)return!0;const e=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Uu(t){t=Xu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class al{constructor(t){this.key=t}}class cl{constructor(t){this.key=t}}class ul{constructor(t,e){this.query=t,this.Yu=e,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Ns(),this.mutatedKeys=Ns(),this.tc=ws(t),this.ec=new Qu(this.tc)}get nc(){return this.Yu}sc(t,e){const n=e?e.ic:new Yu,r=e?e.ec:this.ec;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=vs(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.rc(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(s=!0)),d&&(l?(o=o.add(l),i=f?i.add(t):i.delete(t)):(o=o.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const t="F"===this.query.limitType?o.last():o.first();o=o.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ec:o,ic:n,zi:s,mutatedKeys:i}}rc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ri()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.tc(t.doc,e.doc))),this.oc(n);const o=e?this.uc():[],s=0===this.Zu.size&&this.current?1:0,a=s!==this.Xu;return this.Xu=s,0!==i.length||a?{snapshot:new Xu(this.query,t.ec,r,i,t.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Yu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach((t=>this.Yu=this.Yu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Yu=this.Yu.delete(t))),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=Ns(),this.ec.forEach((t=>{this.ac(t.key)&&(this.Zu=this.Zu.add(t.key))}));const e=[];return t.forEach((t=>{this.Zu.has(t)||e.push(new cl(t))})),this.Zu.forEach((n=>{t.has(n)||e.push(new al(n))})),e}hc(t){this.Yu=t.ir,this.Zu=Ns();const e=this.sc(t.documents);return this.applyChanges(e,!0)}lc(){return Xu.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class ll{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class hl{constructor(t){this.key=t,this.fc=!1}}class fl{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Es((t=>gs(t)),ms),this._c=new Map,this.mc=new Set,this.gc=new Gi(Si.comparator),this.yc=new Map,this.Ic=new Pc,this.Tc={},this.Ec=new Map,this.Ac=Oc.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function dl(t,e){const n=Pl(t);let r,i;const o=n.wc.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.lc();else{const t=await Yc(n.localStore,fs(e)),o=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await pl(n,e,r,"current"===o,t.resumeToken),n.isPrimaryClient&&Eu(n.remoteStore,t)}return i}async function pl(t,e,n,r,i){t.Rc=(e,n,r)=>async function(t,e,n,r){let i=e.view.sc(n);i.zi&&(i=await Zc(t.localStore,e.query,!1).then((({documents:t})=>e.view.sc(t,i))));const o=r&&r.targetChanges.get(e.targetId),s=e.view.applyChanges(i,t.isPrimaryClient,o);return Ol(t,e.targetId,s.cc),s.snapshot}(t,e,n,r);const o=await Zc(t.localStore,e,!0),s=new ul(e,o.ir),a=s.sc(o.documents),c=xa.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=s.applyChanges(a,t.isPrimaryClient,c);Ol(t,n,u.cc);const l=new ll(e,n,s);return t.wc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function ml(t,e){const n=oi(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((t=>!ms(t,e)))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Iu(n.remoteStore,r.targetId),Tl(n,r.targetId)})).catch(Li)):(Tl(n,r.targetId),await Xc(n.localStore,r.targetId,!0))}async function gl(t,e,n){const r=Nl(t);try{const t=await function(t,e){const n=oi(t),r=_i.now(),i=e.reduce(((t,e)=>t.add(e.key)),Ns());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Ts(),c=Ns();return n.Zi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{o=i;const s=[];for(const t of e){const e=oa(t,o.get(t.key).overlayedDocument);null!=e&&s.push(new ca(t.key,e,Co(e.value.mapValue),Zs.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,s,e)})).next((e=>{s=e;const r=e.applyToLocalDocumentSet(o,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:s.batchId,changes:Ss(o)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Tc[t.currentUser.toKey()];r||(r=new Gi(bi)),r=r.insert(e,n),t.Tc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Cl(r,t.changes),await Lu(r.remoteStore)}catch(t){const e=Ju(t,"Failed to persist write");n.reject(e)}}async function yl(t,e){const n=oi(t);try{const t=await Gc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.yc.get(e);r&&(ii(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.fc=!0:t.modifiedDocuments.size>0?ii(r.fc):t.removedDocuments.size>0&&(ii(r.fc),r.fc=!1))})),await Cl(n,t,e)}catch(t){await Li(t)}}function vl(t,e,n){const r=oi(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.wc.forEach(((n,r)=>{const i=r.view.Mu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=oi(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Mu(e)&&(r=!0)})),r&&ol(n)}(r.eventManager,e),t.length&&r.dc.nu(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bl(t,e,n){const r=oi(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),o=i&&i.key;if(o){let t=new Gi(Si.comparator);t=t.insert(o,Ro.newNoDocument(o,Ei.min()));const n=Ns().add(o),i=new Ra(Ei.min(),new Map,new Gi(bi),t,n);await yl(r,i),r.gc=r.gc.remove(o),r.yc.delete(e),kl(r)}else await Xc(r.localStore,e,!1).then((()=>Tl(r,e,n))).catch(Li)}async function wl(t,e){const n=oi(t),r=e.batch.batchId;try{const t=await Kc(n.localStore,e);Il(n,r,null),El(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cl(n,t)}catch(t){await Li(t)}}async function _l(t,e,n){const r=oi(t);try{const t=await function(t,e){const n=oi(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(ii(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Il(r,e,n),El(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Cl(r,t)}catch(n){await Li(n)}}function El(t,e){(t.Ec.get(e)||[]).forEach((t=>{t.resolve()})),t.Ec.delete(e)}function Il(t,e,n){const r=oi(t);let i=r.Tc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Tl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach((e=>{t.Ic.containsKey(e)||Al(t,e)}))}function Al(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);null!==n&&(Iu(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),kl(t))}function Ol(t,e,n){for(const r of n)r instanceof al?(t.Ic.addReference(r.key,e),Sl(t,r)):r instanceof cl?(Zr("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||Al(t,r.key)):ri()}function Sl(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(Zr("SyncEngine","New document in limbo: "+n),t.mc.add(r),kl(t))}function kl(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new Si(Ti.fromString(e)),r=t.Ac.next();t.yc.set(r,new hl(n)),t.gc=t.gc.insert(n,r),Eu(t.remoteStore,new bc(fs(ss(n.path)),r,"TargetPurposeLimboResolution",Ui.ct))}}async function Cl(t,e,n){const r=oi(t),i=[],o=[],s=[];r.wc.isEmpty()||(r.wc.forEach(((t,a)=>{s.push(r.Rc(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Bc.Li(a.targetId,t);o.push(e)}})))})),await Promise.all(s),r.dc.nu(i),await async function(t,e){const n=oi(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ji.forEach(e,(e=>ji.forEach(e.Fi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>ji.forEach(e.Bi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Mi(t))throw t;Zr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ji.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(t,i)}}}(r.localStore,o))}async function Rl(t,e){const n=oi(t);if(!n.currentUser.isEqual(e)){Zr("SyncEngine","User change. New user:",e.toKey());const t=await Hc(n.localStore,e);n.currentUser=e,function(t,e){t.Ec.forEach((t=>{t.forEach((t=>{t.reject(new ai(si.CANCELLED,e))}))})),t.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Cl(n,t.er)}}function xl(t,e){const n=oi(t),r=n.yc.get(e);if(r&&r.fc)return Ns().add(r.key);{let t=Ns();const r=n._c.get(e);if(!r)return t;for(const e of r){const r=n.wc.get(e);t=t.unionWith(r.view.nc)}return t}}function Pl(t){const e=oi(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bl.bind(null,e),e.dc.nu=rl.bind(null,e.eventManager),e.dc.Pc=il.bind(null,e.eventManager),e}function Nl(t){const e=oi(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wl.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_l.bind(null,e),e}class Dl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=fu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return qc(this.persistence,new zc,t.initialUser,this.serializer)}createPersistence(t){return new Uc(Vc.zs,this.serializer)}createSharedClientState(t){return new nu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ll{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>vl(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rl.bind(null,this.syncEngine),await Hu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new tl}createDatastore(t){const e=fu(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new lu(r));var r;return function(t,e,n,r){return new yu(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>vl(this.syncEngine,t,0),o=iu.D()?new iu:new ru,new bu(e,n,r,i,o);var e,n,r,i,o}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new fl(t,e,n,r,i,o);return s&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=oi(t);Zr("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await _u(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):ti("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ml{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Jr.UNAUTHENTICATED,this.clientId=vi.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Zr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Zr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ai(si.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ju(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Ul(t,e){t.asyncQueue.verifyOperationInProgress(),Zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Hc(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Fl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Bl(t);Zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>qu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>qu(e.remoteStore,n))),t._onlineComponents=e}function Vl(t){return"FirebaseError"===t.name?t.code===si.FAILED_PRECONDITION||t.code===si.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Bl(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Zr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ul(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Vl(n))throw n;ei("Error using user provided cache. Falling back to memory cache: "+n),await Ul(t,new Dl)}}else Zr("FirestoreClient","Using default OfflineComponentProvider"),await Ul(t,new Dl);return t._offlineComponents}async function zl(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Zr("FirestoreClient","Using user provided OnlineComponentProvider"),await Fl(t,t._uninitializedComponentsProvider._online)):(Zr("FirestoreClient","Using default OnlineComponentProvider"),await Fl(t,new Ll))),t._onlineComponents}function $l(t){return zl(t).then((t=>t.syncEngine))}async function ql(t){const e=await zl(t),n=e.eventManager;return n.onListen=dl.bind(null,e.syncEngine),n.onUnlisten=ml.bind(null,e.syncEngine),n}function Hl(t,e,n={}){const r=new ci;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const o=new jl({next:o=>{e.enqueueAndForget((()=>nl(t,s)));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new ai(si.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new ai(si.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:t=>i.reject(t)}),s=new sl(ss(n.path),o,{includeMetadataChanges:!0,Ku:!0});return el(t,s)}(await ql(t),t.asyncQueue,e,n,r))),r.promise}function Kl(t,e,n={}){const r=new ci;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const o=new jl({next:n=>{e.enqueueAndForget((()=>nl(t,s))),n.fromCache&&"server"===r.source?i.reject(new ai(si.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),s=new sl(n,o,{includeMetadataChanges:!0,Ku:!0});return el(t,s)}(await ql(t),t.asyncQueue,e,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wl(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Gl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t,e,n){if(!n)throw new ai(si.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ql(t,e,n,r){if(!0===e&&!0===r)throw new ai(si.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yl(t){if(!Si.isDocumentKey(t))throw new ai(si.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xl(t){if(Si.isDocumentKey(t))throw new ai(si.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ri()}function th(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ai(si.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zl(t);throw new ai(si.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eh{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ai(si.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ai(si.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ql("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wl(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ai(si.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ai(si.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ai(si.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class nh{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ai(si.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ai(si.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eh(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new li;switch(t.type){case"firstParty":return new pi(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ai(si.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Gl.get(t);e&&(Zr("ComponentProvider","Removing Datastore"),Gl.delete(t),e.terminate())}(this),Promise.resolve()}}function rh(t,e,n,r={}){var i;const o=(t=th(t,nh))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==e&&ei("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Jr.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new ai(si.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Jr(o)}t._authCredentials=new hi(new ui(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ih(this.firestore,t,this._key)}}class oh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new oh(this.firestore,t,this._query)}}class sh extends oh{constructor(t,e,n){super(t,e,ss(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ih(this.firestore,null,new Si(t))}withConverter(t){return new sh(this.firestore,t,this._path)}}function ah(t,e,...n){if(t=(0,a.m9)(t),Jl("collection","path",e),t instanceof nh){const r=Ti.fromString(e,...n);return Xl(r),new sh(t,null,r)}{if(!(t instanceof ih||t instanceof sh))throw new ai(si.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ti.fromString(e,...n));return Xl(r),new sh(t.firestore,null,r)}}function ch(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=vi.A()),Jl("doc","path",e),t instanceof nh){const r=Ti.fromString(e,...n);return Yl(r),new ih(t,null,new Si(r))}{if(!(t instanceof ih||t instanceof sh))throw new ai(si.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ti.fromString(e,...n));return Yl(r),new ih(t.firestore,t instanceof sh?t.converter:null,new Si(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uh{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new du(this,"async_queue_retry"),this.Xc=()=>{const t=hu();t&&Zr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const t=hu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const e=hu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise((()=>{}));const e=new ci;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Qc.push(t),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Mi(t))throw t;Zr("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(t){const e=this.Gc.then((()=>(this.Hc=!0,t().catch((t=>{this.Wc=t,this.Hc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw ti("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Hc=!1,t))))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);const r=Gu.createAndSchedule(this,t,e,n,(t=>this.na(t)));return this.zc.push(r),r}Zc(){this.Wc&&ri()}verifyOperationInProgress(){}async sa(){let t;do{t=this.Gc,await t}while(t!==this.Gc)}ia(t){for(const e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then((()=>{this.zc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.zc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.sa()}))}oa(t){this.Yc.push(t)}na(t){const e=this.zc.indexOf(t);this.zc.splice(e,1)}}class lh extends nh{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new uh,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dh(this),this._firestoreClient.terminate()}}function hh(t,e){const n="object"==typeof t?t:(0,i.Mq)(),r="string"==typeof t?t:e||"(default)",o=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const t=(0,a.P0)("firestore");t&&rh(o,...t)}return o}function fh(t){return t._firestoreClient||dh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dh(t){var e,n,r;const i=t._freezeSettings(),o=function(t,e,n,r){return new uo(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Wl(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Ml(t._authCredentials,t._appCheckCredentials,t._queue,o),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ph{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ph(eo.fromBase64String(t))}catch(t){throw new ai(si.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ph(eo.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ai(si.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gh{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ai(si.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ai(si.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return bi(this._lat,t._lat)||bi(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=/^__.*__$/;class bh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ca(t,this.data,this.fieldMask,e,this.fieldTransforms):new aa(t,this.data,e,this.fieldTransforms)}}function wh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ri()}}class _h{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new _h(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.aa({path:n,la:!1});return r.fa(t),r}da(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.aa({path:n,la:!1});return r.ua(),r}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Nh(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(0===t.length)throw this._a("Document fields must not be empty");if(wh(this.ca)&&vh.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class Eh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||fu(t)}ya(t,e,n,r=!1){return new _h({ca:t,methodName:e,ga:n,path:Oi.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ih(t){const e=t._freezeSettings(),n=fu(t._databaseId);return new Eh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Th(t,e,n,r,i,o={}){const s=t.ya(o.merge||o.mergeFields?2:0,e,n,i);Ch("Data must be an object, but it was:",s,r);const a=Sh(r,s);let c,u;if(o.merge)c=new Zi(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=Rh(e,r,n);if(!s.contains(i))throw new ai(si.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Dh(t,i)||t.push(i)}c=new Zi(t),u=s.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=s.fieldTransforms;return new bh(new ko(a),c,u)}function Ah(t,e,n,r=!1){return Oh(n,t.ya(r?4:3,e))}function Oh(t,e){if(kh(t=(0,a.m9)(t)))return Ch("Unsupported field value:",e,t),Sh(t,e);if(t instanceof gh)return function(t,e){if(!wh(e.ca))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&4!==e.ca)throw e._a("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Oh(i,e.wa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Us(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=_i.fromDate(t);return{timestampValue:qa(e.serializer,n)}}if(t instanceof _i){const n=new _i(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:qa(e.serializer,n)}}if(t instanceof yh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ph)return{bytesValue:Ha(e.serializer,t._byteString)};if(t instanceof ih){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ga(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${Zl(t)}`)}(t,e)}function Sh(t,e){const n={};return Wi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(t,((t,r)=>{const i=Oh(r,e.ha(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function kh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof _i||t instanceof yh||t instanceof ph||t instanceof ih||t instanceof gh)}function Ch(t,e,n){if(!kh(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Zl(n);throw"an object"===r?e._a(t+" a custom object"):e._a(t+" "+r)}}function Rh(t,e,n){if((e=(0,a.m9)(e))instanceof mh)return e._internalPath;if("string"==typeof e)return Ph(t,e);throw Nh("Field path arguments must be of type string or ",t,!1,void 0,n)}const xh=new RegExp("[~\\*/\\[\\]]");function Ph(t,e,n){if(e.search(xh)>=0)throw Nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mh(...e.split("."))._internalPath}catch(r){throw Nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nh(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${r}`),s&&(c+=` in document ${i}`),c+=")"),new ai(si.INVALID_ARGUMENT,a+t+c)}function Dh(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ih(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new jh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Mh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class jh extends Lh{data(){return super.data()}}function Mh(t,e){return"string"==typeof e?Ph(t,e):e instanceof mh?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ai(si.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fh{}class Vh extends Fh{}function Bh(t,e,...n){let r=[];e instanceof Fh&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof $h)).length,n=t.filter((t=>t instanceof zh)).length;if(e>1||e>0&&n>0)throw new ai(si.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)t=i._apply(t);return t}class zh extends Vh{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new zh(t,e,n)}_apply(t){const e=this._parse(t);return Gh(t._query,e),new oh(t.firestore,t.converter,ds(t._query,e))}_parse(t){const e=Ih(t.firestore),n=function(t,e,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new ai(si.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){Wh(s,o);const e=[];for(const n of s)e.push(Kh(r,t,n));a={arrayValue:{values:e}}}else a=Kh(r,t,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||Wh(s,o),a=Ah(n,e,s,"in"===o||"not-in"===o);return Mo.create(i,o,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}class $h extends Fh{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new $h(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Uo.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)Gh(n,i),n=ds(n,i)}(t._query,e),new oh(t.firestore,t.converter,ds(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class qh extends Vh{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new qh(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new ai(si.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new ai(si.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Do(e,n);return function(t,e){if(null===cs(t)){const n=us(t);null!==n&&Jh(t,n,e.field)}}(t,r),r}(t._query,this._field,this._direction);return new oh(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new is(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Hh(t,e="asc"){const n=e,r=Mh("orderBy",t);return qh._create(r,n)}function Kh(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new ai(si.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ls(e)&&-1!==n.indexOf("/"))throw new ai(si.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ti.fromString(n));if(!Si.isDocumentKey(r))throw new ai(si.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wo(t,new Si(r))}if(n instanceof ih)return wo(t,n._key);throw new ai(si.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zl(n)}.`)}function Wh(t,e){if(!Array.isArray(t)||0===t.length)throw new ai(si.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Gh(t,e){if(e.isInequality()){const n=us(t),r=e.field;if(null!==n&&!n.isEqual(r))throw new ai(si.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=cs(t);null!==i&&Jh(t,r,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new ai(si.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ai(si.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Jh(t,e,n){if(!n.isEqual(e))throw new ai(si.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Qh{convertValue(t,e="none"){switch(fo(t)){case 0:return null;case 1:return t.booleanValue;case 2:return io(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(oo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ri()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ki(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new yh(io(t.latitude),io(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ao(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(co(t));default:return null}}convertTimestamp(t){const e=ro(t);return new _i(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ti.fromString(t);ii(vc(n));const r=new lo(n.get(1),n.get(3)),i=new Si(n.popFirst(5));return r.isEqual(e)||ti(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Zh extends Lh{constructor(t,e,n,r,i,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new tf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Mh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class tf extends Zh{data(t={}){return super.data(t)}}class ef{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Xh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new tf(this._firestore,this._userDataWriter,n.key,n,new Xh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ai(si.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new tf(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Xh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new tf(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Xh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,o=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),o=n.indexOf(e.doc.key)),{type:nf(e.type),doc:r,oldIndex:i,newIndex:o}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function nf(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ri()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rf(t){t=th(t,ih);const e=th(t.firestore,lh);return Hl(fh(e),t._key).then((n=>hf(e,t,n)))}class of extends Qh{constructor(t){super(),this.firestore=t}convertBytes(t){return new ph(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ih(this.firestore,null,e)}}function sf(t){t=th(t,oh);const e=th(t.firestore,lh),n=fh(e),r=new of(e);return Uh(t._query),Kl(n,t._query).then((n=>new ef(e,r,t,n)))}function af(t,e,n){t=th(t,ih);const r=th(t.firestore,lh),i=Yh(t.converter,e,n);return lf(r,[Th(Ih(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Zs.none())])}function cf(t){return lf(th(t.firestore,lh),[new fa(t._key,Zs.none())])}function uf(t,e){const n=th(t.firestore,lh),r=ch(t),i=Yh(t.converter,e);return lf(n,[Th(Ih(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Zs.exists(!1))]).then((()=>r))}function lf(t,e){return function(t,e){const n=new ci;return t.asyncQueue.enqueueAndForget((async()=>gl(await $l(t),e,n))),n.promise}(fh(t),e)}function hf(t,e,n){const r=n.docs.get(e._key),i=new of(t);return new Zh(t,i,e._key,r,new Xh(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Qr=t}(i.Jn),(0,i.Xd)(new o.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new lh(new fi(t.getProvider("auth-internal")),new gi(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ai(si.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lo(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Gr,"3.12.1",t),(0,i.KN)(Gr,"3.12.1","esm2017")}()},1294:function(t,e,n){"use strict";n.d(e,{Jt:function(){return re},cF:function(){return oe},iH:function(){return ie},KV:function(){return ne}});n(2801),n(7658),n(8675),n(3408),n(4590),n(1703);var r=n(7077),i=n(223),o=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l extends i.ZR{constructor(t,e,n=0){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,f;function d(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new l(h.UNKNOWN,t)}function m(t){return new l(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function g(t){return new l(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function y(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l(h.UNAUTHENTICATED,t)}function v(){return new l(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function b(t){return new l(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function w(){return new l(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _(){return new l(h.CANCELED,"User canceled the upload/download.")}function E(t){return new l(h.INVALID_URL,"Invalid URL '"+t+"'.")}function I(t){return new l(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function T(){return new l(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function A(){return new l(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function O(){return new l(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function S(t){return new l(h.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function k(t){return new l(h.INVALID_ARGUMENT,t)}function C(){return new l(h.APP_DELETED,"The Firebase app was deleted.")}function R(t){return new l(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function x(t,e){return new l(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function P(t){throw new l(h.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));class N{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=N.makeFromUrl(t,e)}catch(r){return new N(t,"")}if(""===n.path)return n;throw I(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},m=e===s?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",y=new RegExp(`^https?://${m}/${r}/${g}`,"i"),v={bucket:1,path:2},b=[{regex:a,indices:c,postModify:i},{regex:d,indices:p,postModify:u},{regex:y,indices:v,postModify:u}];for(let s=0;s<b.length;s++){const e=b[s],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new N(t,i),e.postModify(n);break}}if(null==n)throw E(t);return n}}class D{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(d,c())}),e)}function f(){o&&clearTimeout(o)}function d(t,...e){if(u)return void f();if(t)return f(),void l.call(null,t,...e);const n=c()||s;if(n)return f(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(t){p||(p=!0,f(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),o=setTimeout((()=>{s=!0,m(!0)}),n),m}function j(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){return void 0!==t}function U(t){return"object"===typeof t&&!Array.isArray(t)}function F(t){return"string"===typeof t||t instanceof String}function V(t){return B()&&t instanceof Blob}function B(){return"undefined"!==typeof Blob&&!(0,i.UG)()}function z(t,e,n,r){if(r<e)throw k(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw k(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function q(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(t,e){const n=t>=500&&t<600,r=[408,429],i=-1!==r.indexOf(t),o=-1!==e.indexOf(t);return n||i||o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(f||(f={}));class K{constructor(t,e,n,r,i,o,s,a,c,u,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new W(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===f.NO_ERROR,i=n.getStatus();if(!e||H(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===f.ABORT;return void t(!1,new W(!1,null,e))}const o=-1!==this.successCodes_.indexOf(i);t(!0,new W(o,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());M(t)?n(t):n()}catch(o){r(o)}else if(null!==i){const t=p();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?C():_();r(t)}else{const t=w();r(t)}};this.canceled_?e(!1,new W(!1,null,!0)):this.backoffId_=L(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&j(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class W{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function G(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function J(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function Q(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Y(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function X(t,e,n,r,i,o,s=!0){const a=q(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return Q(u,e),G(u,n),J(u,o),Y(u,r),new K(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=Z();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(B())return new Blob(t);throw new l(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){if("undefined"===typeof atob)throw S("base-64");return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class it{constructor(t,e){this.data=t,this.contentType=e||null}}function ot(t,e){switch(t){case rt.RAW:return new it(st(e));case rt.BASE64:case rt.BASE64URL:return new it(ct(t,e));case rt.DATA_URL:return new it(lt(e),ht(e))}throw p()}function st(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,o=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&o,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function at(t){let e;try{e=decodeURIComponent(t)}catch(n){throw x(rt.DATA_URL,"Malformed data URL.")}return st(e)}function ct(t,e){switch(t){case rt.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw x(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case rt.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw x(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nt(e)}catch(i){if(i.message.includes("polyfill"))throw i;throw x(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class ut{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw x(rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=ft(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function lt(t){const e=new ut(t);return e.base64?ct(rt.BASE64,e.rest):at(e.rest)}function ht(t){const e=new ut(t);return e.contentType}function ft(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,e){let n=0,r="";V(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(V(this.data_)){const n=this.data_,r=et(n,t,e);return null===r?null:new dt(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new dt(n,!0)}}static getBlob(...t){if(B()){const e=t.map((t=>t instanceof dt?t.data_:t));return new dt(tt.apply(null,e))}{const e=t.map((t=>F(t)?ot(rt.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const r=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]})),new dt(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return U(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function gt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function yt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){return e}class bt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||vt}}let wt=null;function _t(t){return!F(t)||t.length<2?t:yt(t)}function Et(){if(wt)return wt;const t=[];function e(t,e){return _t(e)}t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));const n=new bt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new bt("size");return i.xform=r,t.push(i),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),wt=t,wt}function It(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new N(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Tt(t,e,n){const r={type:"file"},i=n.length;for(let o=0;o<i;o++){const t=n[o];r[t.local]=t.xform(r,e[t.server])}return It(r,t),r}function At(t,e,n){const r=pt(e);if(null===r)return null;const i=r;return Tt(t,i,n)}function Ot(t,e,n,r){const i=pt(e);if(null===i)return null;if(!F(i["downloadTokens"]))return null;const o=i["downloadTokens"];if(0===o.length)return null;const s=encodeURIComponent,a=o.split(","),c=a.map((e=>{const i=t["bucket"],o=t["fullPath"],a="/b/"+s(i)+"/o/"+s(o),c=$(a,n,r),u=q({alt:"media",token:e});return c+u}));return c[0]}function St(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){if(!t)throw p()}function Rt(t,e){function n(n,r){const i=At(t,r,e);return Ct(null!==i),i}return n}function xt(t,e){function n(n,r){const i=At(t,r,e);return Ct(null!==i),Ot(i,r,t.host,t._protocol)}return n}function Pt(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?v():y():402===e.getStatus()?g(t.bucket):403===e.getStatus()?b(t.path):n,r.status=e.getStatus(),r.serverResponse=n.serverResponse,r}return e}function Nt(t){const e=Pt(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=m(t.path)),i.serverResponse=r.serverResponse,i}return n}function Dt(t,e,n){const r=e.fullServerUrl(),i=$(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,a=new kt(i,o,xt(t,n),s);return a.errorHandler=Nt(e),a}function Lt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function jt(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=Lt(null,e)),r}function Mt(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();s["Content-Type"]="multipart/related; boundary="+c;const u=jt(e,r,i),l=St(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",f="\r\n--"+c+"--",d=dt.getBlob(h,r,f);if(null===d)throw A();const p={name:u["fullPath"]},m=$(o,t.host,t._protocol),g="POST",y=t.maxUploadRetryTime,v=new kt(m,g,Rt(t,n),y);return v.urlParams=p,v.headers=s,v.body=d.uploadData(),v.errorHandler=Pt(e),v}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ut=null;class Ft{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=f.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=f.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=f.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r){if(this.sent_)throw P("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw P("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw P("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw P("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw P("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Vt extends Ft{initXhr(){this.xhr_.responseType="text"}}function Bt(){return Ut?Ut():new Vt}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt{constructor(t,e){this._service=t,this._location=e instanceof N?e:N.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new zt(t,e)}get root(){const t=new N(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yt(this._location.path)}get storage(){return this._service}get parent(){const t=mt(this._location.path);if(null===t)return null;const e=new N(this._location.bucket,t);return new zt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw R(t)}}function $t(t,e,n){t._throwIfRoot("uploadBytes");const r=Mt(t.storage,t._location,Et(),new dt(e,!0),n);return t.storage.makeRequestWithTokens(r,Bt).then((e=>({metadata:e,ref:t})))}function qt(t){t._throwIfRoot("getDownloadURL");const e=Dt(t.storage,t._location,Et());return t.storage.makeRequestWithTokens(e,Bt).then((t=>{if(null===t)throw O();return t}))}function Ht(t,e){const n=gt(t._location.path,e),r=new N(t._location.bucket,n);return new zt(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){return/^[A-Za-z]+:\/\//.test(t)}function Wt(t,e){return new zt(t,e)}function Gt(t,e){if(t instanceof Xt){const n=t;if(null==n._bucket)throw T();const r=new zt(n,n._bucket);return null!=e?Gt(r,e):r}return void 0!==e?Ht(t,e):t}function Jt(t,e){if(e&&Kt(e)){if(t instanceof Xt)return Wt(t,e);throw k("To use ref(service, url), the first argument must be a Storage instance.")}return Gt(t,e)}function Qt(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:N.makeFromBucketSpec(n,t)}function Yt(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:o}=r;o&&(t._overrideAuthToken="string"===typeof o?o:(0,i.Sg)(o,t.app.options.projectId))}class Xt{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?N.makeFromBucketSpec(r,this._host):Qt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=N.makeFromBucketSpec(this._url,t):this._bucket=Qt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){z("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){z("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new zt(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new D(C());{const o=X(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const Zt="@firebase/storage",te="0.11.2",ee="storage";function ne(t,e,n){return t=(0,i.m9)(t),$t(t,e,n)}function re(t){return t=(0,i.m9)(t),qt(t)}function ie(t,e){return t=(0,i.m9)(t),Jt(t,e)}function oe(t=(0,r.Mq)(),e){t=(0,i.m9)(t);const n=(0,r.qX)(t,ee),o=n.getImmediate({identifier:e}),s=(0,i.P0)("storage");return s&&se(o,...s),o}function se(t,e,n,r={}){Yt(t,e,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new Xt(n,i,o,e,r.Jn)}function ce(){(0,r.Xd)(new o.wA(ee,ae,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(Zt,te,""),(0,r.KN)(Zt,te,"esm2017")}ce()},1020:function(t,e,n){"use strict";n.d(e,{WB:function(){return ht},Q_:function(){return Tt}});n(1703),n(7658),n(541);var r=n(4870),i=n(3396),o=!1;function s(t,e,n){return Array.isArray(t)?(t.length=Math.max(t.length,e),t.splice(e,1,n),n):(t[e]=n,n)}function a(){return c().__VUE_DEVTOOLS_GLOBAL_HOOK__}function c(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const u="function"===typeof Proxy,l="devtools-plugin:setup",h="plugin:settings:set";let f,d,p;function m(){var t;return void 0!==f||("undefined"!==typeof window&&window.performance?(f=!0,d=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(f=!0,d=n.g.perf_hooks.performance):f=!1),f}function g(){return m()?d.now():Date.now()}class y{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const s in t.settings){const e=t.settings[s];n[s]=e.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(i,e)}catch(o){}this.fallbacks={getSettings(){return i},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(o){}i=t},now(){return g()}},e&&e.on(h,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function v(t,e){const n=t,r=c(),i=a(),o=u&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&o){const t=o?new y(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else i.emit(l,t,e)}const b=t=>p=t,w=Symbol();function _(t){return t&&"object"===typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!==typeof t.toJSON}var E;(function(t){t["direct"]="direct",t["patchObject"]="patch object",t["patchFunction"]="patch function"})(E||(E={}));const I="undefined"!==typeof window,T=!1,A=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof global&&global.global===global?global:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function O(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}function S(t,e,n){const r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){P(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function k(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(n){}return e.status>=200&&e.status<=299}function C(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}const R="object"===typeof navigator?navigator:{userAgent:""},x=(()=>/Macintosh/.test(R.userAgent)&&/AppleWebKit/.test(R.userAgent)&&!/Safari/.test(R.userAgent))(),P=I?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!x?N:"msSaveOrOpenBlob"in R?D:L:()=>{};function N(t,e="download",n){const r=document.createElement("a");r.download=e,r.rel="noopener","string"===typeof t?(r.href=t,r.origin!==location.origin?k(r.href)?S(t,e,n):(r.target="_blank",C(r)):C(r)):(r.href=URL.createObjectURL(t),setTimeout((function(){URL.revokeObjectURL(r.href)}),4e4),setTimeout((function(){C(r)}),0))}function D(t,e="download",n){if("string"===typeof t)if(k(t))S(t,e,n);else{const e=document.createElement("a");e.href=t,e.target="_blank",setTimeout((function(){C(e)}))}else navigator.msSaveOrOpenBlob(O(t,n),e)}function L(t,e,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof t)return S(t,e,n);const i="application/octet-stream"===t.type,o=/constructor/i.test(String(A.HTMLElement))||"safari"in A,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&o||x)&&"undefined"!==typeof FileReader){const e=new FileReader;e.onloadend=function(){let t=e.result;if("string"!==typeof t)throw r=null,new Error("Wrong reader.result type");t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location.assign(t),r=null},e.readAsDataURL(t)}else{const e=URL.createObjectURL(t);r?r.location.assign(e):location.href=e,r=null,setTimeout((function(){URL.revokeObjectURL(e)}),4e4)}}function j(t,e){const n="🍍 "+t;"function"===typeof __VUE_DEVTOOLS_TOAST__?__VUE_DEVTOOLS_TOAST__(n,e):"error"===e?console.error(n):"warn"===e?console.warn(n):console.log(n)}function M(t){return"_a"in t&&"install"in t}function U(){if(!("clipboard"in navigator))return j("Your browser doesn't support the Clipboard API","error"),!0}function F(t){return!!(t instanceof Error&&t.message.toLowerCase().includes("document is not focused"))&&(j('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0)}async function V(t){if(!U())try{await navigator.clipboard.writeText(JSON.stringify(t.state.value)),j("Global state copied to clipboard.")}catch(e){if(F(e))return;j("Failed to serialize the state. Check the console for more details.","error"),console.error(e)}}async function B(t){if(!U())try{t.state.value=JSON.parse(await navigator.clipboard.readText()),j("Global state pasted from clipboard.")}catch(e){if(F(e))return;j("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(e)}}async function z(t){try{P(new Blob([JSON.stringify(t.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(e){j("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}let $;function q(){function t(){return new Promise(((t,e)=>{$.onchange=async()=>{const e=$.files;if(!e)return t(null);const n=e.item(0);return t(n?{text:await n.text(),file:n}:null)},$.oncancel=()=>t(null),$.onerror=e,$.click()}))}return $||($=document.createElement("input"),$.type="file",$.accept=".json"),t}async function H(t){try{const e=await q(),n=await e();if(!n)return;const{text:r,file:i}=n;t.state.value=JSON.parse(r),j(`Global state imported from "${i.name}".`)}catch(e){j("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}function K(t){return{_custom:{display:t}}}const W="🍍 Pinia (root)",G="_root";function J(t){return M(t)?{id:G,label:W}:{id:t.$id,label:t.$id}}function Q(t){if(M(t)){const e=Array.from(t._s.keys()),n=t._s,r={state:e.map((e=>({editable:!0,key:e,value:t.state.value[e]}))),getters:e.filter((t=>n.get(t)._getters)).map((t=>{const e=n.get(t);return{editable:!1,key:t,value:e._getters.reduce(((t,n)=>(t[n]=e[n],t)),{})}}))};return r}const e={state:Object.keys(t.$state).map((e=>({editable:!0,key:e,value:t.$state[e]})))};return t._getters&&t._getters.length&&(e.getters=t._getters.map((e=>({editable:!1,key:e,value:t[e]})))),t._customProperties.size&&(e.customProperties=Array.from(t._customProperties).map((e=>({editable:!0,key:e,value:t[e]})))),e}function Y(t){return t?Array.isArray(t)?t.reduce(((t,e)=>(t.keys.push(e.key),t.operations.push(e.type),t.oldValue[e.key]=e.oldValue,t.newValue[e.key]=e.newValue,t)),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:K(t.type),key:K(t.key),oldValue:t.oldValue,newValue:t.newValue}:{}}function X(t){switch(t){case E.direct:return"mutation";case E.patchFunction:return"$patch";case E.patchObject:return"$patch";default:return"unknown"}}let Z=!0;const tt=[],et="pinia:mutations",nt="pinia",{assign:rt}=Object,it=t=>"🍍 "+t;function ot(t,e){v({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:tt,app:t},(n=>{"function"!==typeof n.now&&j("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:et,label:"Pinia 🍍",color:15064968}),n.addInspector({id:nt,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{V(e)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await B(e),n.sendInspectorTree(nt),n.sendInspectorState(nt)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{z(e)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await H(e),n.sendInspectorTree(nt),n.sendInspectorState(nt)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:'Reset the state (with "$reset")',action:t=>{const n=e._s.get(t);n?"function"!==typeof n.$reset?j(`Cannot reset "${t}" store because it doesn't have a "$reset" method implemented.`,"warn"):(n.$reset(),j(`Store "${t}" reset.`)):j(`Cannot reset "${t}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent(((t,e)=>{const n=t.componentInstance&&t.componentInstance.proxy;if(n&&n._pStores){const e=t.componentInstance.proxy._pStores;Object.values(e).forEach((e=>{t.instanceData.state.push({type:it(e.$id),key:"state",editable:!0,value:e._isOptionsAPI?{_custom:{value:(0,r.IU)(e.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>e.$reset()}]}}:Object.keys(e.$state).reduce(((t,n)=>(t[n]=e.$state[n],t)),{})}),e._getters&&e._getters.length&&t.instanceData.state.push({type:it(e.$id),key:"getters",editable:!1,value:e._getters.reduce(((t,n)=>{try{t[n]=e[n]}catch(r){t[n]=r}return t}),{})})}))}})),n.on.getInspectorTree((n=>{if(n.app===t&&n.inspectorId===nt){let t=[e];t=t.concat(Array.from(e._s.values())),n.rootNodes=(n.filter?t.filter((t=>"$id"in t?t.$id.toLowerCase().includes(n.filter.toLowerCase()):W.toLowerCase().includes(n.filter.toLowerCase()))):t).map(J)}})),n.on.getInspectorState((n=>{if(n.app===t&&n.inspectorId===nt){const t=n.nodeId===G?e:e._s.get(n.nodeId);if(!t)return;t&&(n.state=Q(t))}})),n.on.editInspectorState(((n,r)=>{if(n.app===t&&n.inspectorId===nt){const t=n.nodeId===G?e:e._s.get(n.nodeId);if(!t)return j(`store "${n.nodeId}" not found`,"error");const{path:r}=n;M(t)?r.unshift("state"):1===r.length&&t._customProperties.has(r[0])&&!(r[0]in t.$state)||r.unshift("$state"),Z=!1,n.set(t,r,n.state.value),Z=!0}})),n.on.editComponentState((t=>{if(t.type.startsWith("🍍")){const n=t.type.replace(/^🍍\s*/,""),r=e._s.get(n);if(!r)return j(`store "${n}" not found`,"error");const{path:i}=t;if("state"!==i[0])return j(`Invalid path for store "${n}":\n${i}\nOnly state can be modified.`);i[0]="$state",Z=!1,t.set(r,i,t.state.value),Z=!0}}))}))}function st(t,e){tt.includes(it(e.$id))||tt.push(it(e.$id)),v({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:tt,app:t,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},(t=>{const n="function"===typeof t.now?t.now.bind(t):Date.now;e.$onAction((({after:r,onError:i,name:o,args:s})=>{const a=ct++;t.addTimelineEvent({layerId:et,event:{time:n(),title:"🛫 "+o,subtitle:"start",data:{store:K(e.$id),action:K(o),args:s},groupId:a}}),r((r=>{at=void 0,t.addTimelineEvent({layerId:et,event:{time:n(),title:"🛬 "+o,subtitle:"end",data:{store:K(e.$id),action:K(o),args:s,result:r},groupId:a}})})),i((r=>{at=void 0,t.addTimelineEvent({layerId:et,event:{time:n(),logType:"error",title:"💥 "+o,subtitle:"end",data:{store:K(e.$id),action:K(o),args:s,error:r},groupId:a}})}))}),!0),e._customProperties.forEach((o=>{(0,i.YP)((()=>(0,r.SU)(e[o])),((e,r)=>{t.notifyComponentUpdate(),t.sendInspectorState(nt),Z&&t.addTimelineEvent({layerId:et,event:{time:n(),title:"Change",subtitle:o,data:{newValue:e,oldValue:r},groupId:at}})}),{deep:!0})})),e.$subscribe((({events:r,type:i},o)=>{if(t.notifyComponentUpdate(),t.sendInspectorState(nt),!Z)return;const s={time:n(),title:X(i),data:rt({store:K(e.$id)},Y(r)),groupId:at};at=void 0,i===E.patchFunction?s.subtitle="⤵️":i===E.patchObject?s.subtitle="🧩":r&&!Array.isArray(r)&&(s.subtitle=r.type),r&&(s.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:r}}),t.addTimelineEvent({layerId:et,event:s})}),{detached:!0,flush:"sync"});const o=e._hotUpdate;e._hotUpdate=(0,r.Xl)((r=>{o(r),t.addTimelineEvent({layerId:et,event:{time:n(),title:"🔥 "+e.$id,subtitle:"HMR update",data:{store:K(e.$id),info:K("HMR update")}}}),t.notifyComponentUpdate(),t.sendInspectorTree(nt),t.sendInspectorState(nt)}));const{$dispose:s}=e;e.$dispose=()=>{s(),t.notifyComponentUpdate(),t.sendInspectorTree(nt),t.sendInspectorState(nt),t.getSettings().logStoreChanges&&j(`Disposed "${e.$id}" store 🗑`)},t.notifyComponentUpdate(),t.sendInspectorTree(nt),t.sendInspectorState(nt),t.getSettings().logStoreChanges&&j(`"${e.$id}" store installed 🆕`)}))}let at,ct=0;function ut(t,e){const n=e.reduce(((e,n)=>(e[n]=(0,r.IU)(t)[n],e)),{});for(const r in n)t[r]=function(){const e=ct,i=new Proxy(t,{get(...t){return at=e,Reflect.get(...t)},set(...t){return at=e,Reflect.set(...t)}});return n[r].apply(i,arguments)}}function lt({app:t,store:e,options:n}){if(!e.$id.startsWith("__hot:")){if(n.state&&(e._isOptionsAPI=!0),"function"===typeof n.state){ut(e,Object.keys(n.actions));const t=e._hotUpdate;(0,r.IU)(e)._hotUpdate=function(n){t.apply(this,arguments),ut(e,Object.keys(n._hmrPayload.actions))}}st(t,e)}}function ht(){const t=(0,r.B)(!0),e=t.run((()=>(0,r.iH)({})));let n=[],i=[];const s=(0,r.Xl)({install(t){b(s),o||(s._a=t,t.provide(w,s),t.config.globalProperties.$pinia=s,T&&ot(t,s),i.forEach((t=>n.push(t))),i=[])},use(t){return this._a||o?n.push(t):i.push(t),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return T&&"undefined"!==typeof Proxy&&s.use(lt),s}const ft=()=>{};function dt(t,e,n,i=ft){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),i())};return!n&&(0,r.nZ)()&&(0,r.EB)(o),o}function pt(t,...e){t.slice().forEach((t=>{t(...e)}))}const mt=t=>t();function gt(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],o=t[n];_(o)&&_(i)&&t.hasOwnProperty(n)&&!(0,r.dq)(i)&&!(0,r.PG)(i)?t[n]=gt(o,i):t[n]=i}return t}const yt=Symbol(),vt=new WeakMap;function bt(t){return o?!vt.has(t):!_(t)||!t.hasOwnProperty(yt)}const{assign:wt}=Object;function _t(t){return!(!(0,r.dq)(t)||!t.effect)}function Et(t,e,n,a){const{state:c,actions:u,getters:l}=e,h=n.state.value[t];let f;function d(){h||(o?s(n.state.value,t,c?c():{}):n.state.value[t]=c?c():{});const e=(0,r.BK)(n.state.value[t]);return wt(e,u,Object.keys(l||{}).reduce(((e,s)=>(e[s]=(0,r.Xl)((0,i.Fl)((()=>{b(n);const e=n._s.get(t);if(!o||e._r)return l[s].call(e,e)}))),e)),{}))}return f=It(t,d,e,n,a,!0),f}function It(t,e,n={},a,c,u){let l;const h=wt({actions:{}},n);const f={deep:!0};let d,p;let m,g=[],y=[];const v=a.state.value[t];u||v||(o?s(a.state.value,t,{}):a.state.value[t]={});const w=(0,r.iH)({});let _;function I(e){let n;d=p=!1,"function"===typeof e?(e(a.state.value[t]),n={type:E.patchFunction,storeId:t,events:m}):(gt(a.state.value[t],e),n={type:E.patchObject,payload:e,storeId:t,events:m});const r=_=Symbol();(0,i.Y3)().then((()=>{_===r&&(d=!0)})),p=!0,pt(g,n,a.state.value[t])}const A=u?function(){const{state:t}=n,e=t?t():{};this.$patch((t=>{wt(t,e)}))}:ft;function O(){l.stop(),g=[],y=[],a._s.delete(t)}function S(e,n){return function(){b(a);const r=Array.from(arguments),i=[],o=[];function s(t){i.push(t)}function c(t){o.push(t)}let u;pt(y,{args:r,name:e,store:R,after:s,onError:c});try{u=n.apply(this&&this.$id===t?this:R,r)}catch(l){throw pt(o,l),l}return u instanceof Promise?u.then((t=>(pt(i,t),t))).catch((t=>(pt(o,t),Promise.reject(t)))):(pt(i,u),u)}}const k=(0,r.Xl)({actions:{},getters:{},state:[],hotState:w}),C={_p:a,$id:t,$onAction:dt.bind(null,y),$patch:I,$reset:A,$subscribe(e,n={}){const r=dt(g,e,n.detached,(()=>o())),o=l.run((()=>(0,i.YP)((()=>a.state.value[t]),(r=>{("sync"===n.flush?p:d)&&e({storeId:t,type:E.direct,events:m},r)}),wt({},f,n))));return r},$dispose:O};o&&(C._r=!1);const R=(0,r.qj)(T?wt({_hmrPayload:k,_customProperties:(0,r.Xl)(new Set)},C):C);a._s.set(t,R);const x=a._a&&a._a.runWithContext||mt,P=a._e.run((()=>(l=(0,r.B)(),x((()=>l.run(e))))));for(const i in P){const e=P[i];if((0,r.dq)(e)&&!_t(e)||(0,r.PG)(e))u||(v&&bt(e)&&((0,r.dq)(e)?e.value=v[i]:gt(e,v[i])),o?s(a.state.value[t],i,e):a.state.value[t][i]=e);else if("function"===typeof e){const t=S(i,e);o?s(P,i,t):P[i]=t,h.actions[i]=e}else 0}if(o?Object.keys(P).forEach((t=>{s(R,t,P[t])})):(wt(R,P),wt((0,r.IU)(R),P)),Object.defineProperty(R,"$state",{get:()=>a.state.value[t],set:t=>{I((e=>{wt(e,t)}))}}),T){const t={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach((e=>{Object.defineProperty(R,e,wt({value:R[e]},t))}))}return o&&(R._r=!0),a._p.forEach((t=>{if(T){const e=l.run((()=>t({store:R,app:a._a,pinia:a,options:h})));Object.keys(e||{}).forEach((t=>R._customProperties.add(t))),wt(R,e)}else wt(R,l.run((()=>t({store:R,app:a._a,pinia:a,options:h}))))})),v&&u&&n.hydrate&&n.hydrate(R.$state,v),d=!0,p=!0,R}function Tt(t,e,n){let r,o;const s="function"===typeof e;function a(t,n){const a=(0,i.EM)();t=t||(a?(0,i.f3)(w,null):null),t&&b(t),t=p,t._s.has(r)||(s?It(r,e,o,t):Et(r,o,t));const c=t._s.get(r);return c}return"string"===typeof t?(r=t,o=s?n:e):(o=t,r=t.id),a.$id=r,a}},2483:function(t,e,n){"use strict";n.d(e,{PO:function(){return F},p7:function(){return ee},tv:function(){return re},yj:function(){return ie}});n(7658),n(1703),n(541);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof window;function s(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const i=e[r];n[r]=l(i)?i.map(t):t(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,f=t=>t.replace(h,"");function d(t,e,n="/"){let r,i={},o="",s="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),o=e.slice(c+1,a>-1?a:e.length),i=t(o)),a>-1&&(r=r||e.slice(0,a),s=e.slice(a,e.length)),r=_(null!=r?r:e,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function m(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function g(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(e.matched[r],n.matched[i])&&v(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function y(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function v(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!b(t[n],e[n]))return!1;return!0}function b(t,e){return l(t)?w(t,e):l(e)?w(e,t):t===e}function w(t,e){return l(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function _(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let o,s,a=n.length-1;for(o=0;o<r.length;o++)if(s=r[o],"."!==s){if(".."!==s)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var E,I;(function(t){t["pop"]="pop",t["push"]="push"})(E||(E={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(I||(I={}));function T(t){if(!t)if(o){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),f(t)}const A=/^[^#]+#/;function O(t,e){return t.replace(A,"#")+e}function S(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const k=()=>({left:window.pageXOffset,top:window.pageYOffset});function C(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=S(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function R(t,e){const n=history.state?history.state.position-e:-1;return n+t}const x=new Map;function P(t,e){x.set(t,e)}function N(t){const e=x.get(t);return x.delete(t),e}let D=()=>location.protocol+"//"+location.host;function L(t,e){const{pathname:n,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){let e=i.includes(t.slice(o))?t.slice(o).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),m(n,"")}const s=m(n,t);return s+r+i}function j(t,e,n,r){let i=[],o=[],s=null;const c=({state:o})=>{const a=L(t,location),c=n.value,u=e.value;let l=0;if(o){if(n.value=a,e.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:l,type:E.pop,direction:l?l>0?I.forward:I.back:I.unknown})}))};function u(){s=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return o.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:k()}),"")}function f(){for(const t of o)t();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:f}}function M(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?k():null}}function U(t){const{history:e,location:n}=window,r={value:L(t,n)},i={value:e.state};function o(r,o,s){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:D()+t+r;try{e[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(t,n){const s=a({},e.state,M(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});o(t,s,!0),r.value=t}function c(t,n){const s=a({},i.value,e.state,{forward:t,scroll:k()});o(s.current,s,!0);const c=a({},M(r.value,t,null),{position:s.position+1},n);o(t,c,!1),r.value=t}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:s}}function F(t){t=T(t);const e=U(t),n=j(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=a({location:"",base:t,go:r,createHref:O.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function V(t){return"string"===typeof t||t&&"object"===typeof t}function B(t){return"string"===typeof t||"symbol"===typeof t}const z={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$=Symbol("");var q;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(q||(q={}));function H(t,e){return a(new Error,{type:t,[$]:!0},e)}function K(t,e){return t instanceof Error&&$ in t&&(null==e||!!(t.type&e))}const W="[^/]+?",G={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function Q(t,e){const n=a({},G,e),r=[];let i=n.start?"^":"";const o=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let e=0;e<a.length;e++){const r=a[e];let s=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(J,"\\$&"),s+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:u}=r;o.push({name:t,repeatable:n,optional:c});const l=u||W;if(l!==W){s+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+h.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(f=c&&a.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),i+=f,s+=20,c&&(s+=-8),n&&(s+=-20),".*"===l&&(s+=-50)}t.push(s)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function c(t){const e=t.match(s),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=o[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function u(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:o,repeatable:s,optional:a}=t,c=o in e?e[o]:"";if(l(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:s,score:r,keys:o,parse:c,stringify:u}}function Y(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function X(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=Y(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(Z(r))return 1;if(Z(i))return-1}return i.length-r.length}function Z(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tt={type:0,value:""},et=/[a-zA-Z0-9_]/;function nt(t){if(!t)return[[]];if("/"===t)return[[tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:et.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function rt(t,e,n){const r=Q(nt(t.path),n);const i=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function it(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function o(t,n,r){const i=!r,c=st(t);c.aliasOf=r&&r.record;const h=lt(e,t),f=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let d,p;for(const e of f){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(d=rt(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),i&&t.name&&!ct(d)&&s(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)o(t[e],d,r&&r.children[e])}r=r||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return p?()=>{s(p)}:u}function s(t){if(B(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(s),e.alias.forEach(s))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(s),t.alias.forEach(s))}}function c(){return n}function l(t){let e=0;while(e<n.length&&X(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ht(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ct(t)&&r.set(t.record.name,t)}function h(t,e){let i,o,s,c={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw H(1,{location:t});0,s=i.record.name,c=a(ot(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&ot(t.params,i.keys.map((t=>t.name)))),o=i.stringify(c)}else if("path"in t)o=t.path,i=n.find((t=>t.re.test(o))),i&&(c=i.parse(o),s=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw H(1,{location:t,currentLocation:e});s=i.record.name,c=a({},e.params,t.params),o=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:s,path:o,params:c,matched:u,meta:ut(u)}}return e=lt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>o(t))),{addRoute:o,resolve:h,removeRoute:s,getRoutes:c,getRecordMatcher:i}}function ot(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function st(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:at(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function at(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ct(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ut(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function lt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ht(t,e){return e.children.some((e=>e===t||ht(t,e)))}const ft=/#/g,dt=/&/g,pt=/\//g,mt=/=/g,gt=/\?/g,yt=/\+/g,vt=/%5B/g,bt=/%5D/g,wt=/%5E/g,_t=/%60/g,Et=/%7B/g,It=/%7C/g,Tt=/%7D/g,At=/%20/g;function Ot(t){return encodeURI(""+t).replace(It,"|").replace(vt,"[").replace(bt,"]")}function St(t){return Ot(t).replace(Et,"{").replace(Tt,"}").replace(wt,"^")}function kt(t){return Ot(t).replace(yt,"%2B").replace(At,"+").replace(ft,"%23").replace(dt,"%26").replace(_t,"`").replace(Et,"{").replace(Tt,"}").replace(wt,"^")}function Ct(t){return kt(t).replace(mt,"%3D")}function Rt(t){return Ot(t).replace(ft,"%23").replace(gt,"%3F")}function xt(t){return null==t?"":Rt(t).replace(pt,"%2F")}function Pt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Nt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(yt," "),n=t.indexOf("="),o=Pt(n<0?t:t.slice(0,n)),s=n<0?null:Pt(t.slice(n+1));if(o in e){let t=e[o];l(t)||(t=e[o]=[t]),t.push(s)}else e[o]=s}return e}function Dt(t){let e="";for(let n in t){const r=t[n];if(n=Ct(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=l(r)?r.map((t=>t&&kt(t))):[r&&kt(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Lt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const jt=Symbol(""),Mt=Symbol(""),Ut=Symbol(""),Ft=Symbol(""),Vt=Symbol("");function Bt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function zt(t,e,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((s,a)=>{const c=t=>{!1===t?a(H(4,{from:n,to:e})):t instanceof Error?a(t):V(t)?a(H(2,{from:e,to:t})):(o&&r.enterCallbacks[i]===o&&"function"===typeof t&&o.push(t),s())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function $t(t,e,n,r){const i=[];for(const o of t){0;for(const t in o.components){let a=o.components[t];if("beforeRouteEnter"===e||o.instances[t])if(qt(a)){const s=a.__vccOpts||a,c=s[e];c&&i.push(zt(c,n,r,o,t))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${o.path}"`));const a=s(i)?i.default:i;o.components[t]=a;const c=a.__vccOpts||a,u=c[e];return u&&zt(u,n,r,o,t)()}))))}}}return i}function qt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Ht(t){const e=(0,r.f3)(Ut),n=(0,r.f3)(Ft),o=(0,r.Fl)((()=>e.resolve((0,i.SU)(t.to)))),s=(0,r.Fl)((()=>{const{matched:t}=o.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(y.bind(null,r));if(s>-1)return s;const a=Qt(t[e-2]);return e>1&&Qt(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,t[e-2])):s})),a=(0,r.Fl)((()=>s.value>-1&&Jt(n.params,o.value.params))),c=(0,r.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&v(n.params,o.value.params)));function l(n={}){return Gt(n)?e[(0,i.SU)(t.replace)?"replace":"push"]((0,i.SU)(t.to)).catch(u):Promise.resolve()}return{route:o,href:(0,r.Fl)((()=>o.value.href)),isActive:a,isExactActive:c,navigate:l}}const Kt=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ht,setup(t,{slots:e}){const n=(0,i.qj)(Ht(t)),{options:o}=(0,r.f3)(Ut),s=(0,r.Fl)((()=>({[Yt(t.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Yt(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Wt=Kt;function Gt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Qt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yt=(t,e,n)=>null!=t?t:null!=e?e:n,Xt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const o=(0,r.f3)(Vt),s=(0,r.Fl)((()=>t.route||o.value)),c=(0,r.f3)(Mt,0),u=(0,r.Fl)((()=>{let t=(0,i.SU)(c);const{matched:e}=s.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.Fl)((()=>s.value.matched[u.value]));(0,r.JJ)(Mt,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(jt,l),(0,r.JJ)(Vt,s);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,i,o])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&y(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=s.value,o=t.name,c=l.value,u=c&&c.components[o];if(!u)return Zt(n.default,{Component:u,route:i});const f=c.props[o],d=f?!0===f?i.params:"function"===typeof f?f(i):f:null,p=t=>{t.component.isUnmounted&&(c.instances[o]=null)},m=(0,r.h)(u,a({},d,e,{onVnodeUnmounted:p,ref:h}));return Zt(n.default,{Component:m,route:i})||m}}});function Zt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Xt;function ee(t){const e=it(t.routes,t),n=t.parseQuery||Nt,s=t.stringifyQuery||Dt,h=t.history;const f=Bt(),m=Bt(),y=Bt(),v=(0,i.XI)(z);let b=z;o&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=c.bind(null,(t=>""+t)),_=c.bind(null,xt),I=c.bind(null,Pt);function T(t,n){let r,i;return B(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function A(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function O(){return e.getRoutes().map((t=>t.record))}function S(t){return!!e.getRecordMatcher(t)}function x(t,r){if(r=a({},r||v.value),"string"===typeof t){const i=d(n,t,r.path),o=e.resolve({path:i.path},r),s=h.createHref(i.fullPath);return a(i,o,{params:I(o.params),hash:Pt(i.hash),redirectedFrom:void 0,href:s})}let i;if("path"in t)i=a({},t,{path:d(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];i=a({},t,{params:_(e)}),r.params=_(r.params)}const o=e.resolve(i,r),c=t.hash||"";o.params=w(I(o.params));const u=p(s,a({},t,{hash:St(c),path:o.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:s===Dt?Lt(t.query):t.query||{}},o,{redirectedFrom:void 0,href:l})}function D(t){return"string"===typeof t?d(n,t,v.value.path):a({},t)}function L(t,e){if(b!==t)return H(8,{from:e,to:t})}function j(t){return F(t)}function M(t){return j(a(D(t),{replace:!0}))}function U(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=D(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function F(t,e){const n=b=x(t),r=v.value,i=t.state,o=t.force,c=!0===t.replace,u=U(n);if(u)return F(a(D(u),{state:"object"===typeof u?a({},i,u.state):i,force:o,replace:c}),e||n);const l=n;let h;return l.redirectedFrom=e,!o&&g(s,r,n)&&(h=H(16,{to:l,from:r}),rt(r,r,!0,!1)),(h?Promise.resolve(h):q(l,r)).catch((t=>K(t)?K(t,2)?t:nt(t):tt(t,l,r))).then((t=>{if(t){if(K(t,2))return F(a({replace:c},D(t.to),{state:"object"===typeof t.to?a({},i,t.to.state):i,force:o}),e||l)}else t=G(l,r,!0,c,i);return W(l,r,t),t}))}function V(t,e){const n=L(t,e);return n?Promise.reject(n):Promise.resolve()}function $(t){const e=at.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function q(t,e){let n;const[r,i,o]=ne(t,e);n=$t(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(zt(r,t,e))}));const s=V.bind(null,t,e);return n.push(s),ut(n).then((()=>{n=[];for(const r of f.list())n.push(zt(r,t,e));return n.push(s),ut(n)})).then((()=>{n=$t(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(zt(r,t,e))}));return n.push(s),ut(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(zt(i,t,e));else n.push(zt(r.beforeEnter,t,e));return n.push(s),ut(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=$t(o,"beforeRouteEnter",t,e),n.push(s),ut(n)))).then((()=>{n=[];for(const r of m.list())n.push(zt(r,t,e));return n.push(s),ut(n)})).catch((t=>K(t,8)?t:Promise.reject(t)))}function W(t,e,n){for(const r of y.list())$((()=>r(t,e,n)))}function G(t,e,n,r,i){const s=L(t,e);if(s)return s;const c=e===z,u=o?history.state:{};n&&(r||c?h.replace(t.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(t.fullPath,i)),v.value=t,rt(t,e,n,c),nt()}let J;function Q(){J||(J=h.listen(((t,e,n)=>{if(!ct.listening)return;const r=x(t),i=U(r);if(i)return void F(a(i,{replace:!0}),r).catch(u);b=r;const s=v.value;o&&P(R(s.fullPath,n.delta),k()),q(r,s).catch((t=>K(t,12)?t:K(t,2)?(F(t.to,r).then((t=>{K(t,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),tt(t,r,s)))).then((t=>{t=t||G(r,s,!1),t&&(n.delta&&!K(t,8)?h.go(-n.delta,!1):n.type===E.pop&&K(t,20)&&h.go(-1,!1)),W(r,s,t)})).catch(u)})))}let Y,X=Bt(),Z=Bt();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function et(){return Y&&v.value!==z?Promise.resolve():new Promise(((t,e)=>{X.add([t,e])}))}function nt(t){return Y||(Y=!t,Q(),X.list().forEach((([e,n])=>t?n(t):e())),X.reset()),t}function rt(e,n,i,s){const{scrollBehavior:a}=t;if(!o||!a)return Promise.resolve();const c=!i&&N(R(e.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,c))).then((t=>t&&C(t))).catch((t=>tt(t,e,n)))}const ot=t=>h.go(t);let st;const at=new Set,ct={currentRoute:v,listening:!0,addRoute:T,removeRoute:A,hasRoute:S,getRoutes:O,resolve:x,options:t,push:j,replace:M,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:f.add,beforeResolve:m.add,afterEach:y.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",Wt),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),o&&!st&&v.value===z&&(st=!0,j(h.location).catch((t=>{0})));const n={};for(const i in z)n[i]=(0,r.Fl)((()=>v.value[i]));t.provide(Ut,e),t.provide(Ft,(0,i.qj)(n)),t.provide(Vt,v);const s=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(b=z,J&&J(),J=null,v.value=z,st=!1,Y=!1),s()}}};function ut(t){return t.reduce(((t,e)=>t.then((()=>$(e)))),Promise.resolve())}return ct}function ne(t,e){const n=[],r=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let s=0;s<o;s++){const o=e.matched[s];o&&(t.matched.find((t=>y(t,o)))?r.push(o):n.push(o));const a=t.matched[s];a&&(e.matched.find((t=>y(t,a)))||i.push(a))}return[n,r,i]}function re(){return(0,r.f3)(Ut)}function ie(){return(0,r.f3)(Ft)}}}]);
//# sourceMappingURL=chunk-vendors.87b2e7e7.js.map