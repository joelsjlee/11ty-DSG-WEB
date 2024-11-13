(function(D,R){typeof exports=="object"&&typeof module<"u"?R(exports,require("d3"),require("dayjs")):typeof define=="function"&&define.amd?define(["exports","d3","dayjs"],R):(D=typeof globalThis<"u"?globalThis:D||self,R(D.d3=D.d3||{},D.d3,D.dayjs))})(this,function(D,R,Q){"use strict";function Ot(t){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t){for(const n in t)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:()=>t[n]})}}return e.default=t,Object.freeze(e)}const f=Ot(R),Pt="div.tooltip {        position: absolute;        text-align: center;        padding: 10px 20px 10px 10px; /* Extra padding on the right for the X button */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: auto;        min-width: 150px; /* Minimum width to accommodate shorter text */        white-space: nowrap; /* Prevent text wrapping */      }      div.tooltip .close-btn {        position: absolute;        top: 5px;        right: 5px;        padding: 2px 5px;        cursor: pointer;        font-weight: bold;        color: #333;        font-size: 14px;      }      div.tooltip .close-btn:hover {        color: red;      }";function j(t){f.select("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id","tooltip").text(Pt);let e;function n(i){e&&e.remove(),e=f.select("body").append("div").attr("class","tooltip"),e.html(`<span class="close-btn">×</span>${t.apply(null,arguments)}`).style("opacity",.85).style("top",i.pageY-60+"px");const o=e.node().getBoundingClientRect().width;e.style("left",i.pageX-o/2+"px"),e.select(".close-btn").on("click",r),document.addEventListener("click",s)}function r(){e&&(e.transition().duration(100).style("opacity",0).remove(),e=null,document.removeEventListener("click",s))}function s(i){const o=e&&e.node().contains(i.target),a=i.target.tagName==="rect"&&i.target.parentNode.classList.contains("task");!o&&!a&&r()}return{show:n,hide:r}}function Yt(t){return f.max(t.nodes().map(e=>e.getComputedTextLength()))}function Rt(t){return function(e){return e.length>t?e.slice(0,t-1)+"…":e}}const q=1,Lt=2;function ot(t,e){let n=["#FFF","#FFF"],r=f.scaleOrdinal(n),s=5,i,o="#AAA",a=40,u=3e3,l;function h(p){let v=e.domain(),b=j(A=>A),S=f.scaleOrdinal(n),N=f.scaleOrdinal(n.reverse()),$=Rt(a),C=p.selectAll(".row").data(v,e).order(),g=C.enter().append("g").attr("class","row"),y=C.exit(),w=C.select("text");C=C.merge(g).attr("transform",A=>"translate(0,"+e(A)+")"),y.remove(),g.append("rect").attr("y",.5).attr("width",u).attr("height",e.bandwidth()).attr("stroke",o).attr("stroke-width",.75).attr("fill",S),g.append("path").attr("stroke",N),w=w.merge(g.append("text").attr("y",e.bandwidth()/2).attr("dy","0.32em").on("mouseover",function(A,m){f.select(this).text()!=m&&b.show(m)}).on("mouseout",b.hide)).text($),l===void 0&&(l=Yt(w)+2*s,l=t===q?u-l:l),i=t===q?[0,l]:[l,u],w.attr("text-anchor",t===q?"start":"end").attr("dx",t===q?s:-s).attr("x",l),p.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke",o).attr("stroke-width",1.75).attr("d","M"+(l+.5)+",0.5V"+e.range()[1])}return h.draw_ticks=function(p,v){p.selectAll(".row").select("path").attr("d",v.map(b=>"M"+b+",1v"+(e.bandwidth()-1)).join(""))},h.scale=function(p){return arguments.length?(e=p,h):e},h.width=function(p){return arguments.length?(u=p,h):u},h.colors=function(p){return arguments.length?(n=p,h):n},h.padding=function(p){return arguments.length?(s=p,h):s},h.range=function(p){return arguments.length?(i=p,h):i},h.trim=function(p){return arguments.length?(a=p,h):a},h.offset=function(p){return arguments.length?(l=p,h):l},h.colorscale=function(p){return arguments.length?(r=p,h):r},h}function lt(t){return ot(Lt,t)}function at(t){return ot(q,t)}var ct=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ut(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ht={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(ct,function(){var n,r,s=1e3,i=6e4,o=36e5,a=864e5,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=31536e6,h=2628e6,p=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,v={years:l,months:h,days:a,hours:o,minutes:i,seconds:s,milliseconds:1,weeks:6048e5},b=function(m){return m instanceof w},S=function(m,d,c){return new w(m,c,d.$l)},N=function(m){return r.p(m)+"s"},$=function(m){return m<0},C=function(m){return $(m)?Math.ceil(m):Math.floor(m)},g=function(m){return Math.abs(m)},y=function(m,d){return m?$(m)?{negative:!0,format:""+g(m)+d}:{negative:!1,format:""+m+d}:{negative:!1,format:""}},w=function(){function m(c,x,k){var _=this;if(this.$d={},this.$l=k,c===void 0&&(this.$ms=0,this.parseFromMilliseconds()),x)return S(c*v[N(x)],this);if(typeof c=="number")return this.$ms=c,this.parseFromMilliseconds(),this;if(typeof c=="object")return Object.keys(c).forEach(function(T){_.$d[N(T)]=c[T]}),this.calMilliseconds(),this;if(typeof c=="string"){var E=c.match(p);if(E){var F=E.slice(2).map(function(T){return T!=null?Number(T):0});return this.$d.years=F[0],this.$d.months=F[1],this.$d.weeks=F[2],this.$d.days=F[3],this.$d.hours=F[4],this.$d.minutes=F[5],this.$d.seconds=F[6],this.calMilliseconds(),this}}return this}var d=m.prototype;return d.calMilliseconds=function(){var c=this;this.$ms=Object.keys(this.$d).reduce(function(x,k){return x+(c.$d[k]||0)*v[k]},0)},d.parseFromMilliseconds=function(){var c=this.$ms;this.$d.years=C(c/l),c%=l,this.$d.months=C(c/h),c%=h,this.$d.days=C(c/a),c%=a,this.$d.hours=C(c/o),c%=o,this.$d.minutes=C(c/i),c%=i,this.$d.seconds=C(c/s),c%=s,this.$d.milliseconds=c},d.toISOString=function(){var c=y(this.$d.years,"Y"),x=y(this.$d.months,"M"),k=+this.$d.days||0;this.$d.weeks&&(k+=7*this.$d.weeks);var _=y(k,"D"),E=y(this.$d.hours,"H"),F=y(this.$d.minutes,"M"),T=this.$d.seconds||0;this.$d.milliseconds&&(T+=this.$d.milliseconds/1e3,T=Math.round(1e3*T)/1e3);var B=y(T,"S"),Tt=c.negative||x.negative||_.negative||E.negative||F.negative||B.negative,Dt=E.format||F.format||B.format?"T":"",W=(Tt?"-":"")+"P"+c.format+x.format+_.format+Dt+E.format+F.format+B.format;return W==="P"||W==="-P"?"P0D":W},d.toJSON=function(){return this.toISOString()},d.format=function(c){var x=c||"YYYY-MM-DDTHH:mm:ss",k={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return x.replace(u,function(_,E){return E||String(k[_])})},d.as=function(c){return this.$ms/v[N(c)]},d.get=function(c){var x=this.$ms,k=N(c);return k==="milliseconds"?x%=1e3:x=k==="weeks"?C(x/v[k]):this.$d[k],x||0},d.add=function(c,x,k){var _;return _=x?c*v[N(x)]:b(c)?c.$ms:S(c,this).$ms,S(this.$ms+_*(k?-1:1),this)},d.subtract=function(c,x){return this.add(c,x,!0)},d.locale=function(c){var x=this.clone();return x.$l=c,x},d.clone=function(){return S(this.$ms,this)},d.humanize=function(c){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!c)},d.valueOf=function(){return this.asMilliseconds()},d.milliseconds=function(){return this.get("milliseconds")},d.asMilliseconds=function(){return this.as("milliseconds")},d.seconds=function(){return this.get("seconds")},d.asSeconds=function(){return this.as("seconds")},d.minutes=function(){return this.get("minutes")},d.asMinutes=function(){return this.as("minutes")},d.hours=function(){return this.get("hours")},d.asHours=function(){return this.as("hours")},d.days=function(){return this.get("days")},d.asDays=function(){return this.as("days")},d.weeks=function(){return this.get("weeks")},d.asWeeks=function(){return this.as("weeks")},d.months=function(){return this.get("months")},d.asMonths=function(){return this.as("months")},d.years=function(){return this.get("years")},d.asYears=function(){return this.as("years")},m}(),A=function(m,d,c){return m.add(d.years()*c,"y").add(d.months()*c,"M").add(d.days()*c,"d").add(d.hours()*c,"h").add(d.minutes()*c,"m").add(d.seconds()*c,"s").add(d.milliseconds()*c,"ms")};return function(m,d,c){n=c,r=c().$utils(),c.duration=function(_,E){var F=c.locale();return S(_,{$l:F},E)},c.isDuration=b;var x=d.prototype.add,k=d.prototype.subtract;d.prototype.add=function(_,E){return b(_)?A(this,_,1):x.bind(this)(_,E)},d.prototype.subtract=function(_,E){return b(_)?A(this,_,-1):k.bind(this)(_,E)}}})})(ht);var zt=ht.exports;const Ht=ut(zt);var ft={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(ct,function(){return function(n,r,s){n=n||{};var i=r.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(l,h,p,v){return i.fromToBase(l,h,p,v)}s.en.relativeTime=o,i.fromToBase=function(l,h,p,v,b){for(var S,N,$,C=p.$locale().relativeTime||o,g=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],y=g.length,w=0;w<y;w+=1){var A=g[w];A.d&&(S=v?s(l).diff(p,A.d,!0):p.diff(l,A.d,!0));var m=(n.rounding||Math.round)(Math.abs(S));if($=S>0,m<=A.r||!A.r){m<=1&&w>0&&(A=g[w-1]);var d=C[A.l];b&&(m=b(""+m)),N=typeof d=="string"?d.replace("%d",m):d(m,h,A.l,$);break}}if(h)return N;var c=$?C.future:C.past;return typeof c=="function"?c(N):c.replace("%s",N)},i.to=function(l,h){return a(l,h,this,!0)},i.from=function(l,h){return a(l,h,this)};var u=function(l){return l.$u?s.utc():s()};i.toNow=function(l){return this.to(u(this),l)},i.fromNow=function(l){return this.from(u(this),l)}}})})(ft);var qt=ft.exports;const Vt=ut(qt);Q.extend(Ht),Q.extend(Vt);function dt(t,e){return Q.duration(e-t).humanize()}function pt(){const t=Array.prototype.slice.call(arguments,0);return function(e){return t.reduce((n,r)=>r(n),e)}}function U(t){return function(e){return t===void 0?e:e[t]}}var tt="http://www.w3.org/1999/xhtml";const mt={svg:"http://www.w3.org/2000/svg",xhtml:tt,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function gt(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),mt.hasOwnProperty(e)?{space:mt[e],local:t}:t}function It(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===tt&&e.documentElement.namespaceURI===tt?e.createElement(t):e.createElementNS(n,t)}}function Wt(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function yt(t){var e=gt(t);return(e.local?Wt:It)(e)}function Xt(){}function _t(t){return t==null?Xt:function(){return this.querySelector(t)}}function Ut(t){typeof t!="function"&&(t=_t(t));for(var e=this._groups,n=e.length,r=new Array(n),s=0;s<n;++s)for(var i=e[s],o=i.length,a=r[s]=new Array(o),u,l,h=0;h<o;++h)(u=i[h])&&(l=t.call(u,u.__data__,h,i))&&("__data__"in u&&(l.__data__=u.__data__),a[h]=l);return new O(r,this._parents)}function wt(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function Zt(){return[]}function Gt(t){return t==null?Zt:function(){return this.querySelectorAll(t)}}function Kt(t){return function(){return wt(t.apply(this,arguments))}}function Jt(t){typeof t=="function"?t=Kt(t):t=Gt(t);for(var e=this._groups,n=e.length,r=[],s=[],i=0;i<n;++i)for(var o=e[i],a=o.length,u,l=0;l<a;++l)(u=o[l])&&(r.push(t.call(u,u.__data__,l,o)),s.push(u));return new O(r,s)}function Qt(t){return function(){return this.matches(t)}}function xt(t){return function(e){return e.matches(t)}}var jt=Array.prototype.find;function te(t){return function(){return jt.call(this.children,t)}}function ee(){return this.firstElementChild}function ne(t){return this.select(t==null?ee:te(typeof t=="function"?t:xt(t)))}var re=Array.prototype.filter;function se(){return Array.from(this.children)}function ie(t){return function(){return re.call(this.children,t)}}function oe(t){return this.selectAll(t==null?se:ie(typeof t=="function"?t:xt(t)))}function le(t){typeof t!="function"&&(t=Qt(t));for(var e=this._groups,n=e.length,r=new Array(n),s=0;s<n;++s)for(var i=e[s],o=i.length,a=r[s]=[],u,l=0;l<o;++l)(u=i[l])&&t.call(u,u.__data__,l,i)&&a.push(u);return new O(r,this._parents)}function vt(t){return new Array(t.length)}function ae(){return new O(this._enter||this._groups.map(vt),this._parents)}function Z(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Z.prototype={constructor:Z,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function ce(t){return function(){return t}}function ue(t,e,n,r,s,i){for(var o=0,a,u=e.length,l=i.length;o<l;++o)(a=e[o])?(a.__data__=i[o],r[o]=a):n[o]=new Z(t,i[o]);for(;o<u;++o)(a=e[o])&&(s[o]=a)}function he(t,e,n,r,s,i,o){var a,u,l=new Map,h=e.length,p=i.length,v=new Array(h),b;for(a=0;a<h;++a)(u=e[a])&&(v[a]=b=o.call(u,u.__data__,a,e)+"",l.has(b)?s[a]=u:l.set(b,u));for(a=0;a<p;++a)b=o.call(t,i[a],a,i)+"",(u=l.get(b))?(r[a]=u,u.__data__=i[a],l.delete(b)):n[a]=new Z(t,i[a]);for(a=0;a<h;++a)(u=e[a])&&l.get(v[a])===u&&(s[a]=u)}function fe(t){return t.__data__}function de(t,e){if(!arguments.length)return Array.from(this,fe);var n=e?he:ue,r=this._parents,s=this._groups;typeof t!="function"&&(t=ce(t));for(var i=s.length,o=new Array(i),a=new Array(i),u=new Array(i),l=0;l<i;++l){var h=r[l],p=s[l],v=p.length,b=pe(t.call(h,h&&h.__data__,l,r)),S=b.length,N=a[l]=new Array(S),$=o[l]=new Array(S),C=u[l]=new Array(v);n(h,p,N,$,C,b,e);for(var g=0,y=0,w,A;g<S;++g)if(w=N[g]){for(g>=y&&(y=g+1);!(A=$[y])&&++y<S;);w._next=A||null}}return o=new O(o,r),o._enter=a,o._exit=u,o}function pe(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function me(){return new O(this._exit||this._groups.map(vt),this._parents)}function ge(t,e,n){var r=this.enter(),s=this,i=this.exit();return typeof t=="function"?(r=t(r),r&&(r=r.selection())):r=r.append(t+""),e!=null&&(s=e(s),s&&(s=s.selection())),n==null?i.remove():n(i),r&&s?r.merge(s).order():s}function ye(t){for(var e=t.selection?t.selection():t,n=this._groups,r=e._groups,s=n.length,i=r.length,o=Math.min(s,i),a=new Array(s),u=0;u<o;++u)for(var l=n[u],h=r[u],p=l.length,v=a[u]=new Array(p),b,S=0;S<p;++S)(b=l[S]||h[S])&&(v[S]=b);for(;u<s;++u)a[u]=n[u];return new O(a,this._parents)}function _e(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var r=t[e],s=r.length-1,i=r[s],o;--s>=0;)(o=r[s])&&(i&&o.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(o,i),i=o);return this}function we(t){t||(t=xe);function e(p,v){return p&&v?t(p.__data__,v.__data__):!p-!v}for(var n=this._groups,r=n.length,s=new Array(r),i=0;i<r;++i){for(var o=n[i],a=o.length,u=s[i]=new Array(a),l,h=0;h<a;++h)(l=o[h])&&(u[h]=l);u.sort(e)}return new O(s,this._parents).order()}function xe(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function ve(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function Ae(){return Array.from(this)}function be(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],s=0,i=r.length;s<i;++s){var o=r[s];if(o)return o}return null}function $e(){let t=0;for(const e of this)++t;return t}function ke(){return!this.node()}function Se(t){for(var e=this._groups,n=0,r=e.length;n<r;++n)for(var s=e[n],i=0,o=s.length,a;i<o;++i)(a=s[i])&&t.call(a,a.__data__,i,s);return this}function Me(t){return function(){this.removeAttribute(t)}}function Ce(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Ee(t,e){return function(){this.setAttribute(t,e)}}function Ne(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function Fe(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function Te(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function De(t,e){var n=gt(t);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((e==null?n.local?Ce:Me:typeof e=="function"?n.local?Te:Fe:n.local?Ne:Ee)(n,e))}function At(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Be(t){return function(){this.style.removeProperty(t)}}function Oe(t,e,n){return function(){this.style.setProperty(t,e,n)}}function Pe(t,e,n){return function(){var r=e.apply(this,arguments);r==null?this.style.removeProperty(t):this.style.setProperty(t,r,n)}}function Ye(t,e,n){return arguments.length>1?this.each((e==null?Be:typeof e=="function"?Pe:Oe)(t,e,n??"")):Re(this.node(),t)}function Re(t,e){return t.style.getPropertyValue(e)||At(t).getComputedStyle(t,null).getPropertyValue(e)}function Le(t){return function(){delete this[t]}}function ze(t,e){return function(){this[t]=e}}function He(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function qe(t,e){return arguments.length>1?this.each((e==null?Le:typeof e=="function"?He:ze)(t,e)):this.node()[t]}function bt(t){return t.trim().split(/^|\s+/)}function et(t){return t.classList||new $t(t)}function $t(t){this._node=t,this._names=bt(t.getAttribute("class")||"")}$t.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function kt(t,e){for(var n=et(t),r=-1,s=e.length;++r<s;)n.add(e[r])}function St(t,e){for(var n=et(t),r=-1,s=e.length;++r<s;)n.remove(e[r])}function Ve(t){return function(){kt(this,t)}}function Ie(t){return function(){St(this,t)}}function We(t,e){return function(){(e.apply(this,arguments)?kt:St)(this,t)}}function Xe(t,e){var n=bt(t+"");if(arguments.length<2){for(var r=et(this.node()),s=-1,i=n.length;++s<i;)if(!r.contains(n[s]))return!1;return!0}return this.each((typeof e=="function"?We:e?Ve:Ie)(n,e))}function Ue(){this.textContent=""}function Ze(t){return function(){this.textContent=t}}function Ge(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function Ke(t){return arguments.length?this.each(t==null?Ue:(typeof t=="function"?Ge:Ze)(t)):this.node().textContent}function Je(){this.innerHTML=""}function Qe(t){return function(){this.innerHTML=t}}function je(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function tn(t){return arguments.length?this.each(t==null?Je:(typeof t=="function"?je:Qe)(t)):this.node().innerHTML}function en(){this.nextSibling&&this.parentNode.appendChild(this)}function nn(){return this.each(en)}function rn(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function sn(){return this.each(rn)}function on(t){var e=typeof t=="function"?t:yt(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function ln(){return null}function an(t,e){var n=typeof t=="function"?t:yt(t),r=e==null?ln:typeof e=="function"?e:_t(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function cn(){var t=this.parentNode;t&&t.removeChild(this)}function un(){return this.each(cn)}function hn(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function fn(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function dn(t){return this.select(t?fn:hn)}function pn(t){return arguments.length?this.property("__data__",t):this.node().__data__}function mn(t){return function(e){t.call(this,e,this.__data__)}}function gn(t){return t.trim().split(/^|\s+/).map(function(e){var n="",r=e.indexOf(".");return r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),{type:e,name:n}})}function yn(t){return function(){var e=this.__on;if(e){for(var n=0,r=-1,s=e.length,i;n<s;++n)i=e[n],(!t.type||i.type===t.type)&&i.name===t.name?this.removeEventListener(i.type,i.listener,i.options):e[++r]=i;++r?e.length=r:delete this.__on}}}function _n(t,e,n){return function(){var r=this.__on,s,i=mn(e);if(r){for(var o=0,a=r.length;o<a;++o)if((s=r[o]).type===t.type&&s.name===t.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=i,s.options=n),s.value=e;return}}this.addEventListener(t.type,i,n),s={type:t.type,name:t.name,value:e,listener:i,options:n},r?r.push(s):this.__on=[s]}}function wn(t,e,n){var r=gn(t+""),s,i=r.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var u=0,l=a.length,h;u<l;++u)for(s=0,h=a[u];s<i;++s)if((o=r[s]).type===h.type&&o.name===h.name)return h.value}return}for(a=e?_n:yn,s=0;s<i;++s)this.each(a(r[s],e,n));return this}function Mt(t,e,n){var r=At(t),s=r.CustomEvent;typeof s=="function"?s=new s(e,n):(s=r.document.createEvent("Event"),n?(s.initEvent(e,n.bubbles,n.cancelable),s.detail=n.detail):s.initEvent(e,!1,!1)),t.dispatchEvent(s)}function xn(t,e){return function(){return Mt(this,t,e)}}function vn(t,e){return function(){return Mt(this,t,e.apply(this,arguments))}}function An(t,e){return this.each((typeof e=="function"?vn:xn)(t,e))}function*bn(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],s=0,i=r.length,o;s<i;++s)(o=r[s])&&(yield o)}var $n=[null];function O(t,e){this._groups=t,this._parents=e}function kn(){return this}O.prototype={constructor:O,select:Ut,selectAll:Jt,selectChild:ne,selectChildren:oe,filter:le,data:de,enter:ae,exit:me,join:ge,merge:ye,selection:kn,order:_e,sort:we,call:ve,nodes:Ae,node:be,size:$e,empty:ke,each:Se,attr:De,style:Ye,property:qe,classed:Xe,text:Ke,html:tn,raise:nn,lower:sn,append:on,insert:an,remove:un,clone:dn,datum:pn,on:wn,dispatch:An,[Symbol.iterator]:bn};function Ct(t){return typeof t=="string"?new O([document.querySelectorAll(t)],[document.documentElement]):new O([wt(t)],$n)}var G=0,V=0;const Sn=["#4285f4","#db4437","#f4b400","#0f9d58","#ab47bc","#5e97f5","#e06055","#f5bf26","#33ab71","#b762c6","#00acc1","#ff855f","#9e9d24","#26b8ca","#ff7043"];function Mn(t){const e=window.getComputedStyle(t,null).getPropertyValue("font-size");return parseFloat(e)}function Et(t){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}${n}${r}`}function I(t,e){return"translate("+t+","+e+")"}function Cn(){document.querySelectorAll('g.task[class*=" --"]').forEach(function(e){e.style.display="none"})}function K(t,e,n){const s=f.select(t).attr("class");let i=!1;e.selectAll("g.row").each(function(g){const w=f.select(this).attr("class");if(w==s)i=!0;else if(i){let m=this.getAttribute("transform"),d=parseFloat(m.split("(")[1].split(",")[0].trim()),c=parseFloat(m.split(",")[1].split(")")[0].trim());this.setAttribute("transform",`translate(${d},${c+n})`);var A=w.split(" ")[1];document.querySelectorAll(`g.task.${A} rect`).forEach(function(_){_.setAttribute("y",parseFloat(_.getAttribute("y"))+n)}),document.querySelectorAll(`g.task.${A} text`).forEach(function(_){_.setAttribute("y",parseFloat(_.getAttribute("y"))+n)})}}),f.selectAll(".tick line").each(function(){const g=f.select(this),y=parseFloat(g.attr("y1"));isNaN(y)||g.attr("y1",y+n)});const o=document.querySelector('path[stroke-width="1.75"]');let u=o.getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/),l=parseFloat(u[1]),h=parseFloat(u[2]),v=parseFloat(u[3])+n;o.setAttribute("d",`M${l},${h}V${v}`);const b=f.select("g.x.axis.bottom-axis");let S=b.attr("transform"),N=parseFloat(S.split("(")[1].split(",")[0].trim()),C=parseFloat(S.split(",")[1].split(")")[0].trim())+n;b.attr("transform",`translate(${N}, ${C})`)}function Nt(t,e){e.forEach(function(r){document.querySelectorAll(`g.row.${r}`).forEach(function(i){i.style.display="block"})});const n=f.select(t).attr("class").split(" ")[1];f.selectAll(`g.task.${n}`).each(function(r){var s=r[1].replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g,"");if(s==n.replace(/--/g,""))f.select(this).style("display","none");else if(s!=n.replace(/--/g,"")){f.select(this).style("display","block");var i=(e.indexOf(s)+1)*38;let o=f.select(this),a=o.attr("transform"),u=parseFloat(a.split("(")[1].split(",")[0].trim()),l=parseFloat(a.split(",")[1].split(")")[0].trim()),h=l+i;o.attr("transform",`translate(${u}, ${l})`).transition().duration(1e3).attr("transform",`translate(${u}, ${h})`).on("start",()=>{Ct(`g.task.${s}`).style("display","none")}).on("end",()=>{o.style("display","none"),o.attr("transform",`translate(${u}, ${l})`),Ct(`g.task.${s}`).style("display","block")})}})}function Ft(t,e){return new Promise(n=>{const r=f.select(t).attr("class").split(" ")[1];f.selectAll(`g.task:not(.${r})`).each(function(s){var i=s[1].replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g,"");if(e.includes(i)){f.select(this).style("display","block");var o=(e.indexOf(i)+1)*38;let a=f.select(this),u=a.attr("transform"),l=parseFloat(u.split("(")[1].split(",")[0].trim()),h=parseFloat(u.split(",")[1].split(")")[0].trim()),p=h-o;a.transition().duration(1e3).attr("transform",`translate(${l}, ${p})`).on("end",()=>{f.selectAll(`g.${r}`).style("display","block"),a.style("display","none"),a.attr("transform",`translate(${l}, ${h})`),e.forEach(function(v){document.querySelectorAll(`.${v}`).forEach(function(S){S.style.display="none"})}),n()})}})})}function J(t,e){const r=f.select(t).attr("class"),s=[];let i=!1,o=!1;return e.selectAll("g.row").each(function(a){const l=f.select(this).attr("class");l==r?i=!0:i&&l.split(" ")[2]=="timelineheader"?o=!0:i&&!o&&s.push(l.split(" ")[1])}),s}function En(){const t=document.getElementById("collapseAllButton");t.disabled=!0;let e=[];f.selectAll("g.row.timelineheader text").each(function(){if(f.select(this).text()==="-"){const r=this.parentNode,s=J(r,f.select(r.parentNode)),i=s.length*38;let o=Ft(r,s).then(()=>{K(r,f.select(r.parentNode),-i),f.select(this).text("+").style("font-size","20px")});e.push(o)}}),Promise.all(e).then(()=>{t.disabled=!1})}window.collapseAll=En;function Nn(){const t=document.getElementById("expandAllButton");t.disabled=!0;let e=[];f.selectAll("g.row.timelineheader text").each(function(){if(f.select(this).text()==="+"){const r=this.parentNode,s=J(r,f.select(r.parentNode)),i=s.length*38;let o=new Promise(a=>{Nt(r,s),K(r,f.select(r.parentNode),i),a()}).then(()=>{f.select(this).text("-").style("font-size","30px")});e.push(o)}}),Promise.all(e).then(()=>{t.disabled=!1})}window.expandAll=Nn;function Fn(t){let e=Sn,n=5,r=2,s=!1,i=!1,o,a,u=0,l=U(0),h=U(1),p=U(2),v=U(3);console.log(t);function b(g,y){const w=g.select("text"),A=g.select("rect"),m=A.attr("width")-2*n,d=h(y);w.text(d);let c=w.node().getComputedTextLength();if(c>m){const x=m<0?0:m/c,k=Math.floor(d.length*x);w.text(k>2?d.slice(0,k-2)+"…":"")}}function S(g,y,w){const A=g.select("text").node(),m=A.getBBox(),d=w.scale().domain().indexOf(l(y)),c=w.colorscale()(d),x=g.selectAll("rect.bckg").data([y]).join("rect").attr("class","bckg").attr("fill",c).attr("x",m.x-n+r).attr("y",m.y-2).attr("width",m.width+n-r).attr("height",m.height);g.node().insertBefore(x.node(),A)}function N(g,y){g.each(function(w,A){const m=f.select(this.parentNode);v(w)-p(w)?b(m,w):S(m,w,y)})}function $(g){const y=g.datum(),w=new Set(f.map(y,l)),A=new j(C),m=f.scaleOrdinal(e);o=o||[f.min(y,p),f.max(y,v)],i&&(o=f.extent(o.concat(new Date))),g.each(function(d){const c=a||this.getBoundingClientRect().width-15,x=w.size*(Mn(this)+4*n),k=f.scaleBand().domain(w).range([0,x]),_=f.scaleTime().domain(o),E=(s?at:lt)(k).width(c),F=f.select(this).selectAll("svg").data([1]).join("svg");F.attr("class","timeline").attr("width",c).attr("height",x+40);const T=F.append("g").attr("transform","translate(0,20)"),B=T.append("g").attr("class","y axis").call(E);let W=document.querySelector('path[stroke-width="1.75"]').getAttribute("d").match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/),nt=parseFloat(W[1]);B.selectAll("text").on("mouseover",function(){f.select(this).style("text-decoration","underline")}).on("mouseout",function(){f.select(this).style("text-decoration","none")}).attr("text-anchor",function(M){return M.startsWith(" •")?"middle":"end"}).attr("x",function(M){return M.startsWith(" •")?nt/2:nt-.5}).style("cursor","pointer").style("font-weight",function(M){return M.startsWith(" •")?"bold":"normal"}).style("background","none").on("click",function(M,z){const Y=z.replace(/ • /g,"").replace("Topic, ","").replace(" ","%20"),H=`https://www.primarysourcecoop.org/publications/${t}/search#q%3D%2Bsubject%3A%22${Y}%22`;window.open(H,"_blank")}),B.selectAll("g.row").each(function(M){const z=f.select(this).datum();f.select(this).classed(f.select(this).datum().replace(/•/g,"").replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g,""),!0),z.startsWith(" •")&&f.select(this).classed("timelineheader",!0).append("text").attr("x",nt-10).attr("y",25).text("-").style("text-anchor","end").style("cursor","pointer").style("font-size","30px").attr("fill","black").style("-ms-user-select","none").style("-webkit-user-select","none").style("user-select","none")}),B.selectAll("g.row.timelineheader text").on("click",function(M,z){const st=f.select(this).text();if(st==="+"){G-=1,V+=1,console.log("Collapsed: ",G),console.log("Expanded: ",V);let Y=J(this.parentNode,B),H=Y.length*38;Nt(this.parentNode,Y),K(this.parentNode,B,H),f.select(this).text()==="+"?f.select(this).text("-").style("font-size","30px"):f.select(this).text("+")}else if(st==="-"){G+=1,V-=1,console.log("Collapsed: ",G),console.log("Expanded: ",V);let Y=J(this.parentNode,B),H=Y.length*38;Ft(this.parentNode,Y).then(()=>{K(this.parentNode,B,-H)}),f.select(this).text()==="-"?f.select(this).text("+").style("font-size","20px"):f.select(this).text("-")}else{const H=z.replace(/ • /g,"").replace("Topic, ","").replace(" ","%20"),it=`https://www.primarysourcecoop.org/publications/${t}/search#q%3D%2Bsubject%3A%22${H}%22`;window.open(it,"_blank")}}),V=f.selectAll("text").filter(function(){return this.textContent.startsWith(" •")}).size();let P=E.range();_.range([P[0]+n,P[1]-n]).clamp(!0);const rt=f.axisBottom(_),X=T.append("g").attr("class","x axis").attr("transform",I(0,0)).call(rt);X.selectAll(".tick text").attr("dy","-1.5em"),X.selectAll(".tick line").attr("y2","-5").attr("y1",x);const Tn=f.axisBottom(_);F.append("g").attr("class","x axis bottom-axis").attr("transform",I(0,x+20)).call(Tn).selectAll(".tick line").attr("y2","5"),B.on("offset",()=>{P=E.range(),_.range([P[0]+n,P[1]-n]).clamp(!0),rt.ticks(Math.min((P[1]-P[0])/70,10)),X.call(rt),L.attr("transform",M=>I(_(p(M)),k(l(M)))).selectAll("rect").attr("width",M=>_(v(M))-_(p(M))||r).call(M=>N(M,E)),B.call(E.draw_ticks,_.ticks().map(_))}),X.select(".domain").remove(),X.selectAll(".tick line").attr("stroke","#AAA");const Dn=_.ticks().map(_);B.call(E.draw_ticks,Dn);let L=T.selectAll("g.task").data(d);L.exit().remove();const Bt=L.enter().append("g").classed("task",!0);Bt.each(function(M){const z=l(M).replace(/•/g,"").replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g,"");f.select(this).classed(z,!0)}).append("rect").style("opacity",1).attr("y",n).style("cursor","pointer").attr("height",k.bandwidth()-2*n).on("click",A.show).style("fill",pt(h,m)),L=L.merge(Bt),L.attr("transform",M=>I(P[0],k(l(M)))).selectAll("rect").attr("width",0),L.transition().duration(u).attr("transform",M=>I(_(p(M)),k(l(M)))).selectAll("rect").attr("width",M=>_(v(M))-_(p(M))||r),i&&T.append("path").attr("stroke","red").attr("d","M"+_(new Date)+",0.5V"+x)}),Cn()}return $.dates=function(g){return arguments.length?(o=g,$):o},$.width=function(g){return arguments.length?(a=g,$):a},$.today=function(g){return arguments.length?(i=g,$):i},$.colors=function(g){return arguments.length?(e=g,$):e},$.padding=function(g){return arguments.length?(n=g,$):n},$.milestone_width=function(g){return arguments.length?(r=g,$):r},$.reversed=function(g){return arguments.length?(s=g,$):s},$.duration=function(g){return arguments.length?(u=g,$):u},$;function C(g,y){const w=pt(f.isoParse,f.timeFormat("%Y")),A=`<b>${h(y)}</b><hr style="margin: 2px 0 2px 0">${w(p(y))}`,m=v(y)-p(y)?` - ${w(v(y))}, ${dt(p(y),v(y))}`:"";let c=String(y[1]).replace(/ /g,"%20").replace("Topic,%20","");const x=Et(y[2]),k=Et(y[3]),E=`<br><a href="${`https://www.primarysourcecoop.org/publications/${t}/search#q%3D%2Bsubject%3A%22${c}%22%20%2Bdate_when%3A%5B${x}%20TO%20${k}%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning`}" target="_blank">${y[4]} Docs</a>`;return`${A}${m}${E}`}}D.durationFormat=dt,D.timeline=Fn,D.timelineAxisLeft=lt,D.timelineAxisRight=at,D.tooltip=j,Object.keys(R).forEach(t=>{t!=="default"&&!Object.prototype.hasOwnProperty.call(D,t)&&Object.defineProperty(D,t,{enumerable:!0,get:()=>R[t]})}),Object.defineProperty(D,Symbol.toStringTag,{value:"Module"})});
