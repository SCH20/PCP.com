/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.4.1/LICENSE
 */
!function(t,r){"use strict";"function"==typeof define&&define.amd?define("js/3rd/es5-shim.min",[],r):"object"==typeof exports?module.exports=r():t.returnExports=r()}(this,(function(){var t,r,e=Array,n=e.prototype,o=Object,i=o.prototype,a=Function.prototype,u=String,l=u.prototype,c=Number,f=c.prototype,s=n.slice,p=n.splice,h=n.push,v=n.unshift,y=n.concat,g=a.call,d=a.apply,w=Math.max,b=Math.min,m=i.toString,T="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,x=Function.prototype.toString,O=function(t){try{return x.call(t),!0}catch(t){return!1}},E="[object Function]",S="[object GeneratorFunction]";t=function(t){if("function"!=typeof t)return!1;if(T)return O(t);var r=m.call(t);return r===E||r===S};var j,I=RegExp.prototype.exec,D=function(t){try{return I.call(t),!0}catch(t){return!1}},N="[object RegExp]";r=function(t){return"object"==typeof t&&(T?D(t):m.call(t)===N)};var M=String.prototype.valueOf,k=function(t){try{return M.call(t),!0}catch(t){return!1}},F="[object String]";j=function(t){return"string"==typeof t||"object"==typeof t&&(T?k(t):m.call(t)===F)};var R=o.defineProperty&&function(){try{var t={};for(var r in o.defineProperty(t,"x",{enumerable:!1,value:t}),t)return!1;return t.x===t}catch(t){return!1}}(),U=function(t){var r;return r=R?function(t,r,e,n){!n&&r in t||o.defineProperty(t,r,{configurable:!0,enumerable:!1,writable:!0,value:e})}:function(t,r,e,n){!n&&r in t||(t[r]=e)},function(e,n,o){for(var i in n)t.call(n,i)&&r(e,i,n[i],o)}}(i.hasOwnProperty),A=function(t){var r=typeof t;return null===t||"object"!==r&&"function"!==r},$=c.isNaN||function(t){return t!=t},P={ToInteger:function(t){var r=+t;return $(r)?r=0:0!==r&&r!==1/0&&r!==-1/0&&(r=(r>0||-1)*Math.floor(Math.abs(r))),r},ToPrimitive:function(r){var e,n,o;if(A(r))return r;if(n=r.valueOf,t(n)&&(e=n.call(r),A(e)))return e;if(o=r.toString,t(o)&&(e=o.call(r),A(e)))return e;throw new TypeError},ToObject:function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return o(t)},ToUint32:function(t){return t>>>0}},C=function(){};U(a,{bind:function(r){var e=this;if(!t(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var n,i=s.call(arguments,1),a=function(){if(this instanceof n){var t=e.apply(this,y.call(i,s.call(arguments)));return o(t)===t?t:this}return e.apply(r,y.call(i,s.call(arguments)))},u=w(0,e.length-i.length),l=[],c=0;c<u;c++)h.call(l,"$"+c);return n=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this, arguments); }")(a),e.prototype&&(C.prototype=e.prototype,n.prototype=new C,C.prototype=null),n}});var Z=g.bind(i.hasOwnProperty),q=g.bind(i.toString),z=g.bind(s),J=d.bind(s),B=g.bind(l.slice),G=g.bind(l.split),H=g.bind(l.indexOf),L=g.bind(h),X=g.bind(i.propertyIsEnumerable),Y=g.bind(n.sort),K=e.isArray||function(t){return"[object Array]"===q(t)},Q=1!==[].unshift(0);U(n,{unshift:function(){return v.apply(this,arguments),this.length}},Q),U(e,{isArray:K});var V=o("a"),W="a"!==V[0]||!(0 in V),_=function(t){var r=!0,e=!0;return t&&(t.call("foo",(function(t,e,n){"object"!=typeof n&&(r=!1)})),t.call([1],(function(){"use strict";e="string"==typeof this}),"x")),!!t&&r&&e};U(n,{forEach:function(r){var e,n=P.ToObject(this),o=W&&j(this)?G(this,""):n,i=-1,a=P.ToUint32(o.length);if(arguments.length>1&&(e=arguments[1]),!t(r))throw new TypeError("Array.prototype.forEach callback must be a function");for(;++i<a;)i in o&&(void 0===e?r(o[i],i,n):r.call(e,o[i],i,n))}},!_(n.forEach)),U(n,{map:function(r){var n,o=P.ToObject(this),i=W&&j(this)?G(this,""):o,a=P.ToUint32(i.length),u=e(a);if(arguments.length>1&&(n=arguments[1]),!t(r))throw new TypeError("Array.prototype.map callback must be a function");for(var l=0;l<a;l++)l in i&&(u[l]=void 0===n?r(i[l],l,o):r.call(n,i[l],l,o));return u}},!_(n.map)),U(n,{filter:function(r){var e,n,o=P.ToObject(this),i=W&&j(this)?G(this,""):o,a=P.ToUint32(i.length),u=[];if(arguments.length>1&&(n=arguments[1]),!t(r))throw new TypeError("Array.prototype.filter callback must be a function");for(var l=0;l<a;l++)l in i&&(e=i[l],(void 0===n?r(e,l,o):r.call(n,e,l,o))&&L(u,e));return u}},!_(n.filter)),U(n,{every:function(r){var e,n=P.ToObject(this),o=W&&j(this)?G(this,""):n,i=P.ToUint32(o.length);if(arguments.length>1&&(e=arguments[1]),!t(r))throw new TypeError("Array.prototype.every callback must be a function");for(var a=0;a<i;a++)if(a in o&&!(void 0===e?r(o[a],a,n):r.call(e,o[a],a,n)))return!1;return!0}},!_(n.every)),U(n,{some:function(r){var e,n=P.ToObject(this),o=W&&j(this)?G(this,""):n,i=P.ToUint32(o.length);if(arguments.length>1&&(e=arguments[1]),!t(r))throw new TypeError("Array.prototype.some callback must be a function");for(var a=0;a<i;a++)if(a in o&&(void 0===e?r(o[a],a,n):r.call(e,o[a],a,n)))return!0;return!1}},!_(n.some));var tt=!1;n.reduce&&(tt="object"==typeof n.reduce.call("es5",(function(t,r,e,n){return n}))),U(n,{reduce:function(r){var e=P.ToObject(this),n=W&&j(this)?G(this,""):e,o=P.ToUint32(n.length);if(!t(r))throw new TypeError("Array.prototype.reduce callback must be a function");if(0===o&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var i,a=0;if(arguments.length>=2)i=arguments[1];else for(;;){if(a in n){i=n[a++];break}if(++a>=o)throw new TypeError("reduce of empty array with no initial value")}for(;a<o;a++)a in n&&(i=r(i,n[a],a,e));return i}},!tt);var rt=!1;n.reduceRight&&(rt="object"==typeof n.reduceRight.call("es5",(function(t,r,e,n){return n}))),U(n,{reduceRight:function(r){var e,n=P.ToObject(this),o=W&&j(this)?G(this,""):n,i=P.ToUint32(o.length);if(!t(r))throw new TypeError("Array.prototype.reduceRight callback must be a function");if(0===i&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var a=i-1;if(arguments.length>=2)e=arguments[1];else for(;;){if(a in o){e=o[a--];break}if(--a<0)throw new TypeError("reduceRight of empty array with no initial value")}if(a<0)return e;do{a in o&&(e=r(e,o[a],a,n))}while(a--);return e}},!rt);var et=n.indexOf&&-1!==[0,1].indexOf(1,2);U(n,{indexOf:function(t){var r=W&&j(this)?G(this,""):P.ToObject(this),e=P.ToUint32(r.length);if(0===e)return-1;var n=0;for(arguments.length>1&&(n=P.ToInteger(arguments[1])),n=n>=0?n:w(0,e+n);n<e;n++)if(n in r&&r[n]===t)return n;return-1}},et);var nt=n.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3);U(n,{lastIndexOf:function(t){var r=W&&j(this)?G(this,""):P.ToObject(this),e=P.ToUint32(r.length);if(0===e)return-1;var n=e-1;for(arguments.length>1&&(n=b(n,P.ToInteger(arguments[1]))),n=n>=0?n:e-Math.abs(n);n>=0;n--)if(n in r&&t===r[n])return n;return-1}},nt);var ot=function(){var t=[1,2],r=t.splice();return 2===t.length&&K(r)&&0===r.length}();U(n,{splice:function(t,r){return 0===arguments.length?[]:p.apply(this,arguments)}},!ot);var it=function(){var t={};return n.splice.call(t,0,0,1),1===t.length}();U(n,{splice:function(t,r){if(0===arguments.length)return[];var e=arguments;return this.length=w(P.ToInteger(this.length),0),arguments.length>0&&"number"!=typeof r&&((e=z(arguments)).length<2?L(e,this.length-t):e[1]=P.ToInteger(r)),p.apply(this,e)}},!it);var at=function(){var t=new e(1e5);return t[8]="x",t.splice(1,1),7===t.indexOf("x")}(),ut=function(){var t=[];return t[256]="a",t.splice(257,0,"b"),"a"===t[256]}();U(n,{splice:function(t,r){for(var e,n=P.ToObject(this),o=[],i=P.ToUint32(n.length),a=P.ToInteger(t),l=a<0?w(i+a,0):b(a,i),c=b(w(P.ToInteger(r),0),i-l),f=0;f<c;)e=u(l+f),Z(n,e)&&(o[f]=n[e]),f+=1;var s,p=z(arguments,2),h=p.length;if(h<c){for(f=l;f<i-c;)e=u(f+c),s=u(f+h),Z(n,e)?n[s]=n[e]:delete n[s],f+=1;for(f=i;f>i-c+h;)delete n[f-1],f-=1}else if(h>c)for(f=i-c;f>l;)e=u(f+c-1),s=u(f+h-1),Z(n,e)?n[s]=n[e]:delete n[s],f-=1;f=l;for(var v=0;v<p.length;++v)n[f]=p[v],f+=1;return n.length=i-c+h,o}},!at||!ut);var lt,ct=n.join;try{lt="1,2,3"!==Array.prototype.join.call("123",",")}catch(t){lt=!0}lt&&U(n,{join:function(t){var r=void 0===t?",":t;return ct.call(j(this)?G(this,""):this,r)}},lt);var ft="1,2"!==[1,2].join(void 0);ft&&U(n,{join:function(t){var r=void 0===t?",":t;return ct.call(this,r)}},ft);var st=function(t){for(var r=P.ToObject(this),e=P.ToUint32(r.length),n=0;n<arguments.length;)r[e+n]=arguments[n],n+=1;return r.length=e+n,e+n},pt=function(){var t={};return 1!==Array.prototype.push.call(t,void 0)||1!==t.length||void 0!==t[0]||!Z(t,0)}();U(n,{push:function(t){return K(this)?h.apply(this,arguments):st.apply(this,arguments)}},pt);var ht=function(){var t=[];return 1!==t.push(void 0)||1!==t.length||void 0!==t[0]||!Z(t,0)}();U(n,{push:st},ht),U(n,{slice:function(t,r){var e=j(this)?G(this,""):this;return J(e,arguments)}},W);var vt=function(){try{return[1,2].sort(null),[1,2].sort({}),!0}catch(t){}return!1}(),yt=function(){try{return[1,2].sort(/a/),!1}catch(t){}return!0}(),gt=function(){try{return[1,2].sort(void 0),!0}catch(t){}return!1}();U(n,{sort:function(r){if(void 0===r)return Y(this);if(!t(r))throw new TypeError("Array.prototype.sort callback must be a function");return Y(this,r)}},vt||!gt||!yt);var dt=!{toString:null}.propertyIsEnumerable("toString"),wt=function(){}.propertyIsEnumerable("prototype"),bt=!Z("x","0"),mt=function(t){var r=t.constructor;return r&&r.prototype===t},Tt={$window:!0,$console:!0,$parent:!0,$self:!0,$frame:!0,$frames:!0,$frameElement:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$external:!0},xt=function(){if("undefined"==typeof window)return!1;for(var t in window)try{!Tt["$"+t]&&Z(window,t)&&null!==window[t]&&"object"==typeof window[t]&&mt(window[t])}catch(t){return!0}return!1}(),Ot=function(t){if("undefined"==typeof window||!xt)return mt(t);try{return mt(t)}catch(t){return!1}},Et=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],St=Et.length,jt=function(t){return"[object Arguments]"===q(t)},It=function(r){return null!==r&&"object"==typeof r&&"number"==typeof r.length&&r.length>=0&&!K(r)&&t(r.callee)},Dt=jt(arguments)?jt:It;U(o,{keys:function(r){var e=t(r),n=Dt(r),o=null!==r&&"object"==typeof r,i=o&&j(r);if(!o&&!e&&!n)throw new TypeError("Object.keys called on a non-object");var a=[],l=wt&&e;if(i&&bt||n)for(var c=0;c<r.length;++c)L(a,u(c));if(!n)for(var f in r)l&&"prototype"===f||!Z(r,f)||L(a,u(f));if(dt)for(var s=Ot(r),p=0;p<St;p++){var h=Et[p];s&&"constructor"===h||!Z(r,h)||L(a,h)}return a}});var Nt=o.keys&&function(){return 2===o.keys(arguments).length}(1,2),Mt=o.keys&&function(){var t=o.keys(arguments);return 1!==arguments.length||1!==t.length||1!==t[0]}(1),kt=o.keys;U(o,{keys:function(t){return Dt(t)?kt(z(t)):kt(t)}},!Nt||Mt);var Ft=-621987552e5,Rt="-000001",Ut=Date.prototype.toISOString&&-1===new Date(Ft).toISOString().indexOf(Rt),At=Date.prototype.toISOString&&"1969-12-31T23:59:59.999Z"!==new Date(-1).toISOString();U(Date.prototype,{toISOString:function(){var t,r,e,n,o;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(n=this.getUTCFullYear(),o=this.getUTCMonth(),n+=Math.floor(o/12),t=[(o=(o%12+12)%12)+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],n=(n<0?"-":n>9999?"+":"")+B("00000"+Math.abs(n),0<=n&&n<=9999?-4:-6),r=t.length;r--;)(e=t[r])<10&&(t[r]="0"+e);return n+"-"+z(t,0,2).join("-")+"T"+z(t,2).join(":")+"."+B("000"+this.getUTCMilliseconds(),-3)+"Z"}},Ut||At);var $t=function(){try{return Date.prototype.toJSON&&null===new Date(NaN).toJSON()&&-1!==new Date(Ft).toJSON().indexOf(Rt)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(t){return!1}}();$t||(Date.prototype.toJSON=function(r){var e=o(this),n=P.ToPrimitive(e);if("number"==typeof n&&!isFinite(n))return null;var i=e.toISOString;if(!t(i))throw new TypeError("toISOString property is not callable");return i.call(e)});var Pt=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),Ct=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z")),Zt=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(Zt||Ct||!Pt){var qt=Math.pow(2,31)-1,zt=$(new Date(1970,0,1,0,0,0,qt+1).getTime());Date=function(t){var r=function(e,n,o,i,a,l,c){var f,s=arguments.length;if(this instanceof t){var p=l,h=c;if(zt&&s>=7&&c>qt){var v=Math.floor(c/qt)*qt,y=Math.floor(v/1e3);p+=y,h-=1e3*y}f=1===s&&u(e)===e?new t(r.parse(e)):s>=7?new t(e,n,o,i,a,p,h):s>=6?new t(e,n,o,i,a,p):s>=5?new t(e,n,o,i,a):s>=4?new t(e,n,o,i):s>=3?new t(e,n,o):s>=2?new t(e,n):s>=1?new t(e):new t}else f=t.apply(this,arguments);return A(f)||U(f,{constructor:r},!0),f},e=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),n=[0,31,59,90,120,151,181,212,243,273,304,334,365],o=function(t,r){var e=r>1?1:0;return n[r]+Math.floor((t-1969+e)/4)-Math.floor((t-1901+e)/100)+Math.floor((t-1601+e)/400)+365*(t-1970)},i=function(r){var e=0,n=r;if(zt&&n>qt){var o=Math.floor(n/qt)*qt,i=Math.floor(o/1e3);e+=i,n-=1e3*i}return c(new t(1970,0,1,0,0,e,n))};for(var a in t)Z(t,a)&&(r[a]=t[a]);U(r,{now:t.now,UTC:t.UTC},!0),r.prototype=t.prototype,U(r.prototype,{constructor:r},!0);return U(r,{parse:function(r){var n=e.exec(r);if(n){var a,u=c(n[1]),l=c(n[2]||1)-1,f=c(n[3]||1)-1,s=c(n[4]||0),p=c(n[5]||0),h=c(n[6]||0),v=Math.floor(1e3*c(n[7]||0)),y=Boolean(n[4]&&!n[8]),g="-"===n[9]?1:-1,d=c(n[10]||0),w=c(n[11]||0),b=p>0||h>0||v>0;return s<(b?24:25)&&p<60&&h<60&&v<1e3&&l>-1&&l<12&&d<24&&w<60&&f>-1&&f<o(u,l+1)-o(u,l)&&(a=1e3*(60*((a=60*(24*(o(u,l)+f)+s+d*g))+p+w*g)+h)+v,y&&(a=i(a)),-864e13<=a&&a<=864e13)?a:NaN}return t.parse.apply(this,arguments)}}),r}(Date)}Date.now||(Date.now=function(){return(new Date).getTime()});var Jt=f.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0)),Bt={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function(t,r){for(var e=-1,n=r;++e<Bt.size;)n+=t*Bt.data[e],Bt.data[e]=n%Bt.base,n=Math.floor(n/Bt.base)},divide:function(t){for(var r=Bt.size,e=0;--r>=0;)e+=Bt.data[r],Bt.data[r]=Math.floor(e/t),e=e%t*Bt.base},numToString:function(){for(var t=Bt.size,r="";--t>=0;)if(""!==r||0===t||0!==Bt.data[t]){var e=u(Bt.data[t]);""===r?r=e:r+=B("0000000",0,7-e.length)+e}return r},pow:function t(r,e,n){return 0===e?n:e%2==1?t(r,e-1,n*r):t(r*r,e/2,n)},log:function(t){for(var r=0,e=t;e>=4096;)r+=12,e/=4096;for(;e>=2;)r+=1,e/=2;return r}},Gt=function(t){var r,e,n,o,i,a,l,f;if(r=c(t),(r=$(r)?0:Math.floor(r))<0||r>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(e=c(this),$(e))return"NaN";if(e<=-1e21||e>=1e21)return u(e);if(n="",e<0&&(n="-",e=-e),o="0",e>1e-21)if(a=(i=Bt.log(e*Bt.pow(2,69,1))-69)<0?e*Bt.pow(2,-i,1):e/Bt.pow(2,i,1),a*=4503599627370496,(i=52-i)>0){for(Bt.multiply(0,a),l=r;l>=7;)Bt.multiply(1e7,0),l-=7;for(Bt.multiply(Bt.pow(10,l,1),0),l=i-1;l>=23;)Bt.divide(1<<23),l-=23;Bt.divide(1<<l),Bt.multiply(1,1),Bt.divide(2),o=Bt.numToString()}else Bt.multiply(0,a),Bt.multiply(1<<-i,0),o=Bt.numToString()+B("0.00000000000000000000",2,2+r);return o=r>0?(f=o.length)<=r?n+B("0.0000000000000000000",0,r-f+2)+o:n+B(o,0,f-r)+"."+B(o,f-r):n+o};U(f,{toFixed:Gt},Jt);var Ht=function(){try{return"1"===1..toPrecision(void 0)}catch(t){return!0}}(),Lt=f.toPrecision;U(f,{toPrecision:function(t){return void 0===t?Lt.call(this):Lt.call(this,t)}},Ht),2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?function(){var t=void 0===/()??/.exec("")[1],e=Math.pow(2,32)-1;l.split=function(n,o){var i=String(this);if(void 0===n&&0===o)return[];if(!r(n))return G(this,n,o);var a,u,l,c,f=[],s=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(n.sticky?"y":""),p=0,v=new RegExp(n.source,s+"g");t||(a=new RegExp("^"+v.source+"$(?!\\s)",s));var y=void 0===o?e:P.ToUint32(o);for(u=v.exec(i);u&&!((l=u.index+u[0].length)>p&&(L(f,B(i,p,u.index)),!t&&u.length>1&&u[0].replace(a,(function(){for(var t=1;t<arguments.length-2;t++)void 0===arguments[t]&&(u[t]=void 0)})),u.length>1&&u.index<i.length&&h.apply(f,z(u,1)),c=u[0].length,p=l,f.length>=y));)v.lastIndex===u.index&&v.lastIndex++,u=v.exec(i);return p===i.length?!c&&v.test("")||L(f,""):L(f,B(i,p)),f.length>y?B(f,0,y):f}}():"0".split(void 0,0).length&&(l.split=function(t,r){return void 0===t&&0===r?[]:G(this,t,r)});var Xt=l.replace,Yt=function(){var t=[];return"x".replace(/x(.)?/g,(function(r,e){L(t,e)})),1===t.length&&void 0===t[0]}();Yt||(l.replace=function(e,n){var o=t(n),i=r(e)&&/\)[*?]/.test(e.source);if(o&&i){return Xt.call(this,e,(function(t){var r=arguments.length,o=e.lastIndex;e.lastIndex=0;var i=e.exec(t)||[];return e.lastIndex=o,L(i,arguments[r-2],arguments[r-1]),n.apply(this,i)}))}return Xt.call(this,e,n)});var Kt=l.substr,Qt="".substr&&"b"!=="0b".substr(-1);U(l,{substr:function(t,r){var e=t;return t<0&&(e=w(this.length+t,0)),Kt.call(this,e,r)}},Qt);var Vt="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",Wt="​",_t="["+Vt+"]",tr=new RegExp("^"+_t+_t+"*"),rr=new RegExp(_t+_t+"*$"),er=l.trim&&(Vt.trim()||!Wt.trim());U(l,{trim:function(){if(null==this)throw new TypeError("can't convert "+this+" to object");return u(this).replace(tr,"").replace(rr,"")}},er);var nr=l.lastIndexOf&&-1!=="abcあい".lastIndexOf("あい",2);U(l,{lastIndexOf:function(t){if(null==this)throw new TypeError("can't convert "+this+" to object");for(var r=u(this),e=u(t),n=arguments.length>1?c(arguments[1]):NaN,o=$(n)?1/0:P.ToInteger(n),i=b(w(o,0),r.length),a=e.length,l=i+a;l>0;){l=w(0,l-a);var f=H(B(r,l,i+a),e);if(-1!==f)return l+f}return-1}},nr);var or=l.lastIndexOf;if(U(l,{lastIndexOf:function(t){return or.apply(this,arguments)}},1!==l.lastIndexOf.length),8===parseInt(Vt+"08")&&22===parseInt(Vt+"0x16")||(parseInt=function(t){var r=/^[\-+]?0[xX]/;return function(e,n){var o=u(e).trim(),i=c(n)||(r.test(o)?16:10);return t(o,i)}}(parseInt)),"RangeError: test"!==String(new RangeError("test"))){var ir=function(){if(null==this)throw new TypeError("can't convert "+this+" to object");var t=this.name;void 0===t?t="Error":"string"!=typeof t&&(t=u(t));var r=this.message;return void 0===r?r="":"string"!=typeof r&&(r=u(r)),t?r?t+": "+r:t:r};Error.prototype.toString=ir}if(R){var ar=function(t,r){if(X(t,r)){var e=Object.getOwnPropertyDescriptor(t,r);e.enumerable=!1,Object.defineProperty(t,r,e)}};ar(Error.prototype,"message"),""!==Error.prototype.message&&(Error.prototype.message=""),ar(Error.prototype,"name")}if("/a/gim"!==String(/a/gim)){var ur=function(){var t="/"+this.source+"/";return this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),t};RegExp.prototype.toString=ur}})),window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};