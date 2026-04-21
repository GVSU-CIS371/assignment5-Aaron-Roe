(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const be={},Hr=[],Wt=()=>{},dd=()=>!1,Xo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Yo=n=>n.startsWith("onUpdate:"),Ze=Object.assign,Zc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},P_=Object.prototype.hasOwnProperty,Ee=(n,e)=>P_.call(n,e),re=Array.isArray,zr=n=>yi(n)==="[object Map]",pd=n=>yi(n)==="[object Set]",eh=n=>yi(n)==="[object Date]",le=n=>typeof n=="function",qe=n=>typeof n=="string",wt=n=>typeof n=="symbol",we=n=>n!==null&&typeof n=="object",gd=n=>(we(n)||le(n))&&le(n.then)&&le(n.catch),md=Object.prototype.toString,yi=n=>md.call(n),V_=n=>yi(n).slice(8,-1),_d=n=>yi(n)==="[object Object]",Zo=n=>qe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$s=Yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},k_=/-\w/g,Nt=ea(n=>n.replace(k_,e=>e.slice(1).toUpperCase())),D_=/\B([A-Z])/g,Ar=ea(n=>n.replace(D_,"-$1").toLowerCase()),yd=ea(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ha=ea(n=>n?`on${yd(n)}`:""),zt=(n,e)=>!Object.is(n,e),ao=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},vd=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},el=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let th;const ta=()=>th||(th=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cs(n){if(re(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=qe(r)?M_(r):cs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(n)||we(n))return n}const N_=/;(?![^(]*\))/g,O_=/:([^]+)/,x_=/\/\*[^]*?\*\//g;function M_(n){const e={};return n.replace(x_,"").split(N_).forEach(t=>{if(t){const r=t.split(O_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function tl(n){let e="";if(qe(n))e=n;else if(re(n))for(let t=0;t<n.length;t++){const r=tl(n[t]);r&&(e+=r+" ")}else if(we(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const L_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",F_=Yc(L_);function Ed(n){return!!n||n===""}function U_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=ri(n[r],e[r]);return t}function ri(n,e){if(n===e)return!0;let t=eh(n),r=eh(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=wt(n),r=wt(e),t||r)return n===e;if(t=re(n),r=re(e),t||r)return t&&r?U_(n,e):!1;if(t=we(n),r=we(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const c=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!ri(n[a],e[a]))return!1}}return String(n)===String(e)}const Td=n=>!!(n&&n.__v_isRef===!0),cr=n=>qe(n)?n:n==null?"":re(n)||we(n)&&(n.toString===md||!le(n.toString))?Td(n)?cr(n.value):JSON.stringify(n,Id,2):String(n),Id=(n,e)=>Td(e)?Id(n,e.value):zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[za(r,i)+" =>"]=s,t),{})}:pd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>za(t))}:wt(e)?za(e):we(e)&&!re(e)&&!_d(e)?String(e):e,za=(n,e="")=>{var t;return wt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class wd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=it,!e&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=it;try{return it=this,e()}finally{it=t}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){this._on>0&&--this._on===0&&(it=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ad(n){return new wd(n)}function bd(){return it}function B_(n,e=!1){it&&it.cleanups.push(n)}let Re;const Wa=new WeakSet;class Sd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&it.active&&it.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wa.has(this)&&(Wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nh(this),Pd(this);const e=Re,t=Ot;Re=this,Ot=!0;try{return this.fn()}finally{Vd(this),Re=e,Ot=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)sl(e);this.deps=this.depsTail=void 0,nh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pc(this)&&this.run()}get dirty(){return pc(this)}}let Rd=0,qs,Hs;function Cd(n,e=!1){if(n.flags|=8,e){n.next=Hs,Hs=n;return}n.next=qs,qs=n}function nl(){Rd++}function rl(){if(--Rd>0)return;if(Hs){let e=Hs;for(Hs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;qs;){let e=qs;for(qs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Pd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),sl(r),j_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function pc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function kd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===si)||(n.globalVersion=si,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!pc(n))))return;n.flags|=2;const e=n.dep,t=Re,r=Ot;Re=n,Ot=!0;try{Pd(n);const s=n.fn(n._value);(e.version===0||zt(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Re=t,Ot=r,Vd(n),n.flags&=-3}}function sl(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)sl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function j_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ot=!0;const Dd=[];function mn(){Dd.push(Ot),Ot=!1}function _n(){const n=Dd.pop();Ot=n===void 0?!0:n}function nh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Re;Re=void 0;try{e()}finally{Re=t}}}let si=0;class $_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class il{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Re||!Ot||Re===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Re)t=this.activeLink=new $_(Re,this),Re.deps?(t.prevDep=Re.depsTail,Re.depsTail.nextDep=t,Re.depsTail=t):Re.deps=Re.depsTail=t,Nd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Re.depsTail,t.nextDep=void 0,Re.depsTail.nextDep=t,Re.depsTail=t,Re.deps===t&&(Re.deps=r)}return t}trigger(e){this.version++,si++,this.notify(e)}notify(e){nl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{rl()}}}function Nd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Nd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const wo=new WeakMap,pr=Symbol(""),gc=Symbol(""),ii=Symbol("");function at(n,e,t){if(Ot&&Re){let r=wo.get(n);r||wo.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new il),s.map=r,s.key=t),s.track()}}function ln(n,e,t,r,s,i){const a=wo.get(n);if(!a){si++;return}const c=l=>{l&&l.trigger()};if(nl(),e==="clear")a.forEach(c);else{const l=re(n),h=l&&Zo(t);if(l&&t==="length"){const d=Number(r);a.forEach((p,_)=>{(_==="length"||_===ii||!wt(_)&&_>=d)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(ii)),e){case"add":l?h&&c(a.get("length")):(c(a.get(pr)),zr(n)&&c(a.get(gc)));break;case"delete":l||(c(a.get(pr)),zr(n)&&c(a.get(gc)));break;case"set":zr(n)&&c(a.get(pr));break}}rl()}function q_(n,e){const t=wo.get(n);return t&&t.get(e)}function Mr(n){const e=_e(n);return e===n?e:(at(e,"iterate",ii),Tt(n)?e:e.map(Mt))}function na(n){return at(n=_e(n),"iterate",ii),n}function qt(n,e){return yn(n)?Zr(pn(n)?Mt(e):e):Mt(e)}const H_={__proto__:null,[Symbol.iterator](){return Ka(this,Symbol.iterator,n=>qt(this,n))},concat(...n){return Mr(this).concat(...n.map(e=>re(e)?Mr(e):e))},entries(){return Ka(this,"entries",n=>(n[1]=qt(this,n[1]),n))},every(n,e){return on(this,"every",n,e,void 0,arguments)},filter(n,e){return on(this,"filter",n,e,t=>t.map(r=>qt(this,r)),arguments)},find(n,e){return on(this,"find",n,e,t=>qt(this,t),arguments)},findIndex(n,e){return on(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return on(this,"findLast",n,e,t=>qt(this,t),arguments)},findLastIndex(n,e){return on(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return on(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ga(this,"includes",n)},indexOf(...n){return Ga(this,"indexOf",n)},join(n){return Mr(this).join(n)},lastIndexOf(...n){return Ga(this,"lastIndexOf",n)},map(n,e){return on(this,"map",n,e,void 0,arguments)},pop(){return Ds(this,"pop")},push(...n){return Ds(this,"push",n)},reduce(n,...e){return rh(this,"reduce",n,e)},reduceRight(n,...e){return rh(this,"reduceRight",n,e)},shift(){return Ds(this,"shift")},some(n,e){return on(this,"some",n,e,void 0,arguments)},splice(...n){return Ds(this,"splice",n)},toReversed(){return Mr(this).toReversed()},toSorted(n){return Mr(this).toSorted(n)},toSpliced(...n){return Mr(this).toSpliced(...n)},unshift(...n){return Ds(this,"unshift",n)},values(){return Ka(this,"values",n=>qt(this,n))}};function Ka(n,e,t){const r=na(n),s=r[e]();return r!==n&&!Tt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const z_=Array.prototype;function on(n,e,t,r,s,i){const a=na(n),c=a!==n&&!Tt(n),l=a[e];if(l!==z_[e]){const p=l.apply(n,i);return c?Mt(p):p}let h=t;a!==n&&(c?h=function(p,_){return t.call(this,qt(n,p),_,n)}:t.length>2&&(h=function(p,_){return t.call(this,p,_,n)}));const d=l.call(a,h,r);return c&&s?s(d):d}function rh(n,e,t,r){const s=na(n),i=s!==n&&!Tt(n);let a=t,c=!1;s!==n&&(i?(c=r.length===0,a=function(h,d,p){return c&&(c=!1,h=qt(n,h)),t.call(this,h,qt(n,d),p,n)}):t.length>3&&(a=function(h,d,p){return t.call(this,h,d,p,n)}));const l=s[e](a,...r);return c?qt(n,l):l}function Ga(n,e,t){const r=_e(n);at(r,"iterate",ii);const s=r[e](...t);return(s===-1||s===!1)&&sa(t[0])?(t[0]=_e(t[0]),r[e](...t)):s}function Ds(n,e,t=[]){mn(),nl();const r=_e(n)[e].apply(n,t);return rl(),_n(),r}const W_=Yc("__proto__,__v_isRef,__isVue"),Od=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(wt));function K_(n){wt(n)||(n=String(n));const e=_e(this);return at(e,"has",n),e.hasOwnProperty(n)}class xd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?ry:Ud:i?Fd:Ld).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let l;if(a&&(l=H_[t]))return l;if(t==="hasOwnProperty")return K_}const c=Reflect.get(e,t,xe(e)?e:r);if((wt(t)?Od.has(t):W_(t))||(s||at(e,"get",t),i))return c;if(xe(c)){const l=a&&Zo(t)?c:c.value;return s&&we(l)?_c(l):l}return we(c)?s?_c(c):ra(c):c}}class Md extends xd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=re(e)&&Zo(t);if(!this._isShallow){const h=yn(i);if(!Tt(r)&&!yn(r)&&(i=_e(i),r=_e(r)),!a&&xe(i)&&!xe(r))return h||(i.value=r),!0}const c=a?Number(t)<e.length:Ee(e,t),l=Reflect.set(e,t,r,xe(e)?e:s);return e===_e(s)&&(c?zt(r,i)&&ln(e,"set",t,r):ln(e,"add",t,r)),l}deleteProperty(e,t){const r=Ee(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&ln(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!wt(t)||!Od.has(t))&&at(e,"has",t),r}ownKeys(e){return at(e,"iterate",re(e)?"length":pr),Reflect.ownKeys(e)}}class G_ extends xd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Q_=new Md,J_=new G_,X_=new Md(!0);const mc=n=>n,Ji=n=>Reflect.getPrototypeOf(n);function Y_(n,e,t){return function(...r){const s=this.__v_raw,i=_e(s),a=zr(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),d=t?mc:e?Zr:Mt;return!e&&at(i,"iterate",l?gc:pr),Ze(Object.create(h),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:c?[d(p[0]),d(p[1])]:d(p),done:_}}})}}function Xi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Z_(n,e){const t={get(s){const i=this.__v_raw,a=_e(i),c=_e(s);n||(zt(s,c)&&at(a,"get",s),at(a,"get",c));const{has:l}=Ji(a),h=e?mc:n?Zr:Mt;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&at(_e(s),"iterate",pr),s.size},has(s){const i=this.__v_raw,a=_e(i),c=_e(s);return n||(zt(s,c)&&at(a,"has",s),at(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=_e(c),h=e?mc:n?Zr:Mt;return!n&&at(l,"iterate",pr),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return Ze(t,n?{add:Xi("add"),set:Xi("set"),delete:Xi("delete"),clear:Xi("clear")}:{add(s){const i=_e(this),a=Ji(i),c=_e(s),l=!e&&!Tt(s)&&!yn(s)?c:s;return a.has.call(i,l)||zt(s,l)&&a.has.call(i,s)||zt(c,l)&&a.has.call(i,c)||(i.add(l),ln(i,"add",l,l)),this},set(s,i){!e&&!Tt(i)&&!yn(i)&&(i=_e(i));const a=_e(this),{has:c,get:l}=Ji(a);let h=c.call(a,s);h||(s=_e(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?zt(i,d)&&ln(a,"set",s,i):ln(a,"add",s,i),this},delete(s){const i=_e(this),{has:a,get:c}=Ji(i);let l=a.call(i,s);l||(s=_e(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&ln(i,"delete",s,void 0),h},clear(){const s=_e(this),i=s.size!==0,a=s.clear();return i&&ln(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Y_(s,n,e)}),t}function ol(n,e){const t=Z_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Ee(t,s)&&s in r?t:r,s,i)}const ey={get:ol(!1,!1)},ty={get:ol(!1,!0)},ny={get:ol(!0,!1)};const Ld=new WeakMap,Fd=new WeakMap,Ud=new WeakMap,ry=new WeakMap;function sy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iy(n){return n.__v_skip||!Object.isExtensible(n)?0:sy(V_(n))}function ra(n){return yn(n)?n:al(n,!1,Q_,ey,Ld)}function oy(n){return al(n,!1,X_,ty,Fd)}function _c(n){return al(n,!0,J_,ny,Ud)}function al(n,e,t,r,s){if(!we(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=iy(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function pn(n){return yn(n)?pn(n.__v_raw):!!(n&&n.__v_isReactive)}function yn(n){return!!(n&&n.__v_isReadonly)}function Tt(n){return!!(n&&n.__v_isShallow)}function sa(n){return n?!!n.__v_raw:!1}function _e(n){const e=n&&n.__v_raw;return e?_e(e):n}function cl(n){return!Ee(n,"__v_skip")&&Object.isExtensible(n)&&vd(n,"__v_skip",!0),n}const Mt=n=>we(n)?ra(n):n,Zr=n=>we(n)?_c(n):n;function xe(n){return n?n.__v_isRef===!0:!1}function Bd(n){return ay(n,!1)}function ay(n,e){return xe(n)?n:new cy(n,e)}class cy{constructor(e,t){this.dep=new il,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:_e(e),this._value=t?e:Mt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Tt(e)||yn(e);e=r?e:_e(e),zt(e,t)&&(this._rawValue=e,this._value=r?e:Mt(e),this.dep.trigger())}}function Ie(n){return xe(n)?n.value:n}const ly={get:(n,e,t)=>e==="__v_raw"?n:Ie(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return xe(s)&&!xe(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function jd(n){return pn(n)?n:new Proxy(n,ly)}function uy(n){const e=re(n)?new Array(n.length):{};for(const t in n)e[t]=fy(n,t);return e}class hy{constructor(e,t,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=wt(t)?t:String(t),this._raw=_e(e);let s=!0,i=e;if(!re(e)||wt(this._key)||!Zo(this._key))do s=!sa(i)||Tt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Ie(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&xe(this._raw[this._key])){const t=this._object[this._key];if(xe(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return q_(this._raw,this._key)}}function fy(n,e,t){return new hy(n,e,t)}class dy{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new il(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return Cd(this,!0),!0}get value(){const e=this.dep.track();return kd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function py(n,e,t=!1){let r,s;return le(n)?r=n:(r=n.get,s=n.set),new dy(r,s,t)}const Yi={},Ao=new WeakMap;let lr;function gy(n,e=!1,t=lr){if(t){let r=Ao.get(t);r||Ao.set(t,r=[]),r.push(n)}}function my(n,e,t=be){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=z=>s?z:Tt(z)||s===!1||s===0?un(z,1):un(z);let d,p,_,b,V=!1,N=!1;if(xe(n)?(p=()=>n.value,V=Tt(n)):pn(n)?(p=()=>h(n),V=!0):re(n)?(N=!0,V=n.some(z=>pn(z)||Tt(z)),p=()=>n.map(z=>{if(xe(z))return z.value;if(pn(z))return h(z);if(le(z))return l?l(z,2):z()})):le(n)?e?p=l?()=>l(n,2):n:p=()=>{if(_){mn();try{_()}finally{_n()}}const z=lr;lr=d;try{return l?l(n,3,[b]):n(b)}finally{lr=z}}:p=Wt,e&&s){const z=p,oe=s===!0?1/0:s;p=()=>un(z(),oe)}const x=bd(),Q=()=>{d.stop(),x&&x.active&&Zc(x.effects,d)};if(i&&e){const z=e;e=(...oe)=>{z(...oe),Q()}}let $=N?new Array(n.length).fill(Yi):Yi;const G=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const oe=d.run();if(s||V||(N?oe.some((ye,I)=>zt(ye,$[I])):zt(oe,$))){_&&_();const ye=lr;lr=d;try{const I=[oe,$===Yi?void 0:N&&$[0]===Yi?[]:$,b];$=oe,l?l(e,3,I):e(...I)}finally{lr=ye}}}else d.run()};return c&&c(G),d=new Sd(p),d.scheduler=a?()=>a(G,!1):G,b=z=>gy(z,!1,d),_=d.onStop=()=>{const z=Ao.get(d);if(z){if(l)l(z,4);else for(const oe of z)oe();Ao.delete(d)}},e?r?G(!0):$=d.run():a?a(G.bind(null,!0),!0):d.run(),Q.pause=d.pause.bind(d),Q.resume=d.resume.bind(d),Q.stop=Q,Q}function un(n,e=1/0,t){if(e<=0||!we(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,xe(n))un(n.value,e,t);else if(re(n))for(let r=0;r<n.length;r++)un(n[r],e,t);else if(pd(n)||zr(n))n.forEach(r=>{un(r,e,t)});else if(_d(n)){for(const r in n)un(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&un(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vi(n,e,t,r){try{return r?n(...r):n()}catch(s){ia(s,e,t)}}function Yt(n,e,t,r){if(le(n)){const s=vi(n,e,t,r);return s&&gd(s)&&s.catch(i=>{ia(i,e,t)}),s}if(re(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Yt(n[i],e,t,r));return s}}function ia(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||be;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,l,h)===!1)return}c=c.parent}if(i){mn(),vi(i,null,10,[n,l,h]),_n();return}}_y(n,t,s,r,a)}function _y(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const pt=[];let jt=-1;const Wr=[];let Dn=null,Fr=0;const $d=Promise.resolve();let bo=null;function qd(n){const e=bo||$d;return n?e.then(this?n.bind(this):n):e}function yy(n){let e=jt+1,t=pt.length;for(;e<t;){const r=e+t>>>1,s=pt[r],i=oi(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function ll(n){if(!(n.flags&1)){const e=oi(n),t=pt[pt.length-1];!t||!(n.flags&2)&&e>=oi(t)?pt.push(n):pt.splice(yy(e),0,n),n.flags|=1,Hd()}}function Hd(){bo||(bo=$d.then(Wd))}function vy(n){re(n)?Wr.push(...n):Dn&&n.id===-1?Dn.splice(Fr+1,0,n):n.flags&1||(Wr.push(n),n.flags|=1),Hd()}function sh(n,e,t=jt+1){for(;t<pt.length;t++){const r=pt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;pt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function zd(n){if(Wr.length){const e=[...new Set(Wr)].sort((t,r)=>oi(t)-oi(r));if(Wr.length=0,Dn){Dn.push(...e);return}for(Dn=e,Fr=0;Fr<Dn.length;Fr++){const t=Dn[Fr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Dn=null,Fr=0}}const oi=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Wd(n){try{for(jt=0;jt<pt.length;jt++){const e=pt[jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jt<pt.length;jt++){const e=pt[jt];e&&(e.flags&=-2)}jt=-1,pt.length=0,zd(),bo=null,(pt.length||Wr.length)&&Wd()}}let lt=null,Kd=null;function So(n){const e=lt;return lt=n,Kd=n&&n.type.__scopeId||null,e}function Ms(n,e=lt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&gh(-1);const i=So(e);let a;try{a=n(...s)}finally{So(i),r._d&&gh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ns(n,e){if(lt===null)return n;const t=la(lt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=be]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&un(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function or(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(mn(),Yt(l,t,8,[n.el,c,n,e]),_n())}}function Ey(n,e){if(gt){let t=gt.provides;const r=gt.parent&&gt.parent.provides;r===t&&(t=gt.provides=Object.create(r)),t[n]=e}}function zs(n,e,t=!1){const r=Tp();if(r||gr){let s=gr?gr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&le(e)?e.call(r&&r.proxy):e}}function Ty(){return!!(Tp()||gr)}const Iy=Symbol.for("v-scx"),wy=()=>zs(Iy);function co(n,e,t){return Gd(n,e,t)}function Gd(n,e,t=be){const{immediate:r,deep:s,flush:i,once:a}=t,c=Ze({},t),l=e&&r||!e&&i!=="post";let h;if(ci){if(i==="sync"){const b=wy();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=Wt,b.resume=Wt,b.pause=Wt,b}}const d=gt;c.call=(b,V,N)=>Yt(b,d,V,N);let p=!1;i==="post"?c.scheduler=b=>{_t(b,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(b,V)=>{V?b():ll(b)}),c.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const _=my(n,e,c);return ci&&(h?h.push(_):l&&_()),_}function Ay(n,e,t){const r=this.proxy,s=qe(n)?n.includes(".")?Qd(r,n):()=>r[n]:n.bind(r,r);let i;le(e)?i=e:(i=e.handler,t=e);const a=Ti(this),c=Gd(s,i.bind(r),t);return a(),c}function Qd(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const by=Symbol("_vte"),Sy=n=>n.__isTeleport,Ry=Symbol("_leaveCb");function ul(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ul(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ei(n,e){return le(n)?Ze({name:n.name},e,{setup:n}):n}function Jd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ih(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ro=new WeakMap;function Ws(n,e,t,r,s=!1){if(re(n)){n.forEach((N,x)=>Ws(N,e&&(re(e)?e[x]:e),t,r,s));return}if(Kr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ws(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?la(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,d=c.refs===be?c.refs={}:c.refs,p=c.setupState,_=_e(p),b=p===be?dd:N=>ih(d,N)?!1:Ee(_,N),V=(N,x)=>!(x&&ih(d,x));if(h!=null&&h!==l){if(oh(e),qe(h))d[h]=null,b(h)&&(p[h]=null);else if(xe(h)){const N=e;V(h,N.k)&&(h.value=null),N.k&&(d[N.k]=null)}}if(le(l))vi(l,c,12,[a,d]);else{const N=qe(l),x=xe(l);if(N||x){const Q=()=>{if(n.f){const $=N?b(l)?p[l]:d[l]:V()||!n.k?l.value:d[n.k];if(s)re($)&&Zc($,i);else if(re($))$.includes(i)||$.push(i);else if(N)d[l]=[i],b(l)&&(p[l]=d[l]);else{const G=[i];V(l,n.k)&&(l.value=G),n.k&&(d[n.k]=G)}}else N?(d[l]=a,b(l)&&(p[l]=a)):x&&(V(l,n.k)&&(l.value=a),n.k&&(d[n.k]=a))};if(a){const $=()=>{Q(),Ro.delete(n)};$.id=-1,Ro.set(n,$),_t($,t)}else oh(n),Q()}}}function oh(n){const e=Ro.get(n);e&&(e.flags|=8,Ro.delete(n))}ta().requestIdleCallback;ta().cancelIdleCallback;const Kr=n=>!!n.type.__asyncLoader,Xd=n=>n.type.__isKeepAlive;function Cy(n,e){Yd(n,"a",e)}function Py(n,e){Yd(n,"da",e)}function Yd(n,e,t=gt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(oa(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Xd(s.parent.vnode)&&Vy(r,e,t,s),s=s.parent}}function Vy(n,e,t,r){const s=oa(e,n,r,!0);ep(()=>{Zc(r[e],s)},t)}function oa(n,e,t=gt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{mn();const c=Ti(t),l=Yt(e,t,n,a);return c(),_n(),l});return r?s.unshift(i):s.push(i),i}}const An=n=>(e,t=gt)=>{(!ci||n==="sp")&&oa(n,(...r)=>e(...r),t)},ky=An("bm"),Zd=An("m"),Dy=An("bu"),Ny=An("u"),Oy=An("bum"),ep=An("um"),xy=An("sp"),My=An("rtg"),Ly=An("rtc");function Fy(n,e=gt){oa("ec",n,e)}const Uy=Symbol.for("v-ndc");function Nn(n,e,t,r){let s;const i=t,a=re(n);if(a||qe(n)){const c=a&&pn(n);let l=!1,h=!1;c&&(l=!Tt(n),h=yn(n),n=na(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(l?h?Zr(Mt(n[d])):Mt(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(we(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(n[d],d,l,i)}}else s=[];return s}function lo(n,e,t={},r,s){if(lt.ce||lt.parent&&Kr(lt.parent)&&lt.parent.ce){const h=Object.keys(t).length>0;return e!=="default"&&(t.name=e),pe(),On(Ue,null,[It("slot",t,r)],h?-2:64)}let i=n[e];i&&i._c&&(i._d=!1),pe();const a=i&&tp(i(t)),c=t.key||a&&a.key,l=On(Ue,{key:(c&&!wt(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&n._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function tp(n){return n.some(e=>dl(e)?!(e.type===vn||e.type===Ue&&!tp(e.children)):!0)?n:null}const yc=n=>n?Ip(n)?la(n):yc(n.parent):null,Ks=Ze(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>yc(n.parent),$root:n=>yc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>rp(n),$forceUpdate:n=>n.f||(n.f=()=>{ll(n.update)}),$nextTick:n=>n.n||(n.n=qd.bind(n.proxy)),$watch:n=>Ay.bind(n)}),Qa=(n,e)=>n!==be&&!n.__isScriptSetup&&Ee(n,e),By={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Qa(r,e))return a[e]=1,r[e];if(s!==be&&Ee(s,e))return a[e]=2,s[e];if(Ee(i,e))return a[e]=3,i[e];if(t!==be&&Ee(t,e))return a[e]=4,t[e];vc&&(a[e]=0)}}const h=Ks[e];let d,p;if(h)return e==="$attrs"&&at(n.attrs,"get",""),h(n);if((d=c.__cssModules)&&(d=d[e]))return d;if(t!==be&&Ee(t,e))return a[e]=4,t[e];if(p=l.config.globalProperties,Ee(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Qa(s,e)?(s[e]=t,!0):r!==be&&Ee(r,e)?(r[e]=t,!0):Ee(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},c){let l;return!!(t[c]||n!==be&&c[0]!=="$"&&Ee(n,c)||Qa(e,c)||Ee(i,c)||Ee(r,c)||Ee(Ks,c)||Ee(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ee(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ah(n){return re(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let vc=!0;function jy(n){const e=rp(n),t=n.proxy,r=n.ctx;vc=!1,e.beforeCreate&&ch(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:_,beforeUpdate:b,updated:V,activated:N,deactivated:x,beforeDestroy:Q,beforeUnmount:$,destroyed:G,unmounted:z,render:oe,renderTracked:ye,renderTriggered:I,errorCaptured:m,serverPrefetch:y,expose:T,inheritAttrs:A,components:S,directives:E,filters:ht}=e;if(h&&$y(h,r,null),a)for(const ce in a){const ge=a[ce];le(ge)&&(r[ce]=ge.bind(t))}if(s){const ce=s.call(t,t);we(ce)&&(n.data=ra(ce))}if(vc=!0,i)for(const ce in i){const ge=i[ce],Ct=le(ge)?ge.bind(t,t):le(ge.get)?ge.get.bind(t,t):Wt,Zn=!le(ge)&&le(ge.set)?ge.set.bind(t):Wt,tn=Ap({get:Ct,set:Zn});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>tn.value,set:He=>tn.value=He})}if(c)for(const ce in c)np(c[ce],r,t,ce);if(l){const ce=le(l)?l.call(t):l;Reflect.ownKeys(ce).forEach(ge=>{Ey(ge,ce[ge])})}d&&ch(d,n,"c");function ke(ce,ge){re(ge)?ge.forEach(Ct=>ce(Ct.bind(t))):ge&&ce(ge.bind(t))}if(ke(ky,p),ke(Zd,_),ke(Dy,b),ke(Ny,V),ke(Cy,N),ke(Py,x),ke(Fy,m),ke(Ly,ye),ke(My,I),ke(Oy,$),ke(ep,z),ke(xy,y),re(T))if(T.length){const ce=n.exposed||(n.exposed={});T.forEach(ge=>{Object.defineProperty(ce,ge,{get:()=>t[ge],set:Ct=>t[ge]=Ct,enumerable:!0})})}else n.exposed||(n.exposed={});oe&&n.render===Wt&&(n.render=oe),A!=null&&(n.inheritAttrs=A),S&&(n.components=S),E&&(n.directives=E),y&&Jd(n)}function $y(n,e,t=Wt){re(n)&&(n=Ec(n));for(const r in n){const s=n[r];let i;we(s)?"default"in s?i=zs(s.from||r,s.default,!0):i=zs(s.from||r):i=zs(s),xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ch(n,e,t){Yt(re(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function np(n,e,t,r){let s=r.includes(".")?Qd(t,r):()=>t[r];if(qe(n)){const i=e[n];le(i)&&co(s,i)}else if(le(n))co(s,n.bind(t));else if(we(n))if(re(n))n.forEach(i=>np(i,e,t,r));else{const i=le(n.handler)?n.handler.bind(t):e[n.handler];le(i)&&co(s,i,n)}}function rp(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>Co(l,h,a,!0)),Co(l,e,a)),we(e)&&i.set(e,l),l}function Co(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Co(n,i,t,!0),s&&s.forEach(a=>Co(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=qy[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const qy={data:lh,props:uh,emits:uh,methods:Ls,computed:Ls,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Ls,directives:Ls,watch:zy,provide:lh,inject:Hy};function lh(n,e){return e?n?function(){return Ze(le(n)?n.call(this,this):n,le(e)?e.call(this,this):e)}:e:n}function Hy(n,e){return Ls(Ec(n),Ec(e))}function Ec(n){if(re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ls(n,e){return n?Ze(Object.create(null),n,e):e}function uh(n,e){return n?re(n)&&re(e)?[...new Set([...n,...e])]:Ze(Object.create(null),ah(n),ah(e??{})):e}function zy(n,e){if(!n)return e;if(!e)return n;const t=Ze(Object.create(null),n);for(const r in e)t[r]=dt(n[r],e[r]);return t}function sp(){return{app:null,config:{isNativeTag:dd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wy=0;function Ky(n,e){return function(r,s=null){le(r)||(r=Ze({},r)),s!=null&&!we(s)&&(s=null);const i=sp(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Wy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Av,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(h,...p)):le(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,_){if(!l){const b=h._ceVNode||It(r,s);return b.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),n(b,d,_),l=!0,h._container=d,d.__vue_app__=h,la(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Yt(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=gr;gr=h;try{return d()}finally{gr=p}}};return h}}let gr=null;const Gy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Nt(e)}Modifiers`]||n[`${Ar(e)}Modifiers`];function Qy(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||be;let s=t;const i=e.startsWith("update:"),a=i&&Gy(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>qe(d)?d.trim():d)),a.number&&(s=t.map(el)));let c,l=r[c=Ha(e)]||r[c=Ha(Nt(e))];!l&&i&&(l=r[c=Ha(Ar(e))]),l&&Yt(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Yt(h,n,6,s)}}const Jy=new WeakMap;function ip(n,e,t=!1){const r=t?Jy:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!le(n)){const l=h=>{const d=ip(h,e,!0);d&&(c=!0,Ze(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(we(n)&&r.set(n,null),null):(re(i)?i.forEach(l=>a[l]=null):Ze(a,i),we(n)&&r.set(n,a),a)}function aa(n,e){return!n||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(n,e[0].toLowerCase()+e.slice(1))||Ee(n,Ar(e))||Ee(n,e))}function hh(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:_,setupState:b,ctx:V,inheritAttrs:N}=n,x=So(n);let Q,$;try{if(t.shapeFlag&4){const z=s||r,oe=z;Q=Ht(h.call(oe,z,d,p,b,_,V)),$=c}else{const z=e;Q=Ht(z.length>1?z(p,{attrs:c,slots:a,emit:l}):z(p,null)),$=e.props?c:Xy(c)}}catch(z){Gs.length=0,ia(z,n,1),Q=It(vn)}let G=Q;if($&&N!==!1){const z=Object.keys($),{shapeFlag:oe}=G;z.length&&oe&7&&(i&&z.some(Yo)&&($=Yy($,i)),G=es(G,$,!1,!0))}return t.dirs&&(G=es(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(t.dirs):t.dirs),t.transition&&ul(G,t.transition),Q=G,So(x),Q}const Xy=n=>{let e;for(const t in n)(t==="class"||t==="style"||Xo(t))&&((e||(e={}))[t]=n[t]);return e},Yy=(n,e)=>{const t={};for(const r in n)(!Yo(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Zy(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?fh(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(op(a,r,_)&&!aa(h,_))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?fh(r,a,h):!0:!!a;return!1}function fh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(op(e,n,i)&&!aa(t,i))return!0}return!1}function op(n,e,t){const r=n[t],s=e[t];return t==="style"&&we(r)&&we(s)?!ri(r,s):r!==s}function ev({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const ap={},cp=()=>Object.create(ap),lp=n=>Object.getPrototypeOf(n)===ap;function tv(n,e,t,r=!1){const s={},i=cp();n.propsDefaults=Object.create(null),up(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:oy(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function nv(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=_e(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(aa(n.emitsOptions,_))continue;const b=e[_];if(l)if(Ee(i,_))b!==i[_]&&(i[_]=b,h=!0);else{const V=Nt(_);s[V]=Tc(l,c,V,b,n,!1)}else b!==i[_]&&(i[_]=b,h=!0)}}}else{up(n,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Ee(e,p)&&((d=Ar(p))===p||!Ee(e,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=Tc(l,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ee(e,p))&&(delete i[p],h=!0)}h&&ln(n.attrs,"set","")}function up(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if($s(l))continue;const h=e[l];let d;s&&Ee(s,d=Nt(l))?!i||!i.includes(d)?t[d]=h:(c||(c={}))[d]=h:aa(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=_e(t),h=c||be;for(let d=0;d<i.length;d++){const p=i[d];t[p]=Tc(s,l,p,h[p],n,!Ee(h,p))}}return a}function Tc(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=Ee(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&le(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=Ti(s);r=h[t]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Ar(t))&&(r=!0))}return r}const rv=new WeakMap;function hp(n,e,t=!1){const r=t?rv:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!le(n)){const d=p=>{l=!0;const[_,b]=hp(p,e,!0);Ze(a,_),b&&c.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return we(n)&&r.set(n,Hr),Hr;if(re(i))for(let d=0;d<i.length;d++){const p=Nt(i[d]);dh(p)&&(a[p]=be)}else if(i)for(const d in i){const p=Nt(d);if(dh(p)){const _=i[d],b=a[p]=re(_)||le(_)?{type:_}:Ze({},_),V=b.type;let N=!1,x=!0;if(re(V))for(let Q=0;Q<V.length;++Q){const $=V[Q],G=le($)&&$.name;if(G==="Boolean"){N=!0;break}else G==="String"&&(x=!1)}else N=le(V)&&V.name==="Boolean";b[0]=N,b[1]=x,(N||Ee(b,"default"))&&c.push(p)}}const h=[a,c];return we(n)&&r.set(n,h),h}function dh(n){return n[0]!=="$"&&!$s(n)}const hl=n=>n==="_"||n==="_ctx"||n==="$stable",fl=n=>re(n)?n.map(Ht):[Ht(n)],sv=(n,e,t)=>{if(e._n)return e;const r=Ms((...s)=>fl(e(...s)),t);return r._c=!1,r},fp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(hl(s))continue;const i=n[s];if(le(i))e[s]=sv(s,i,r);else if(i!=null){const a=fl(i);e[s]=()=>a}}},dp=(n,e)=>{const t=fl(e);n.slots.default=()=>t},pp=(n,e,t)=>{for(const r in e)(t||!hl(r))&&(n[r]=e[r])},iv=(n,e,t)=>{const r=n.slots=cp();if(n.vnode.shapeFlag&32){const s=e._;s?(pp(r,e,t),t&&vd(r,"_",s,!0)):fp(e,r)}else e&&dp(n,e)},ov=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=be;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:pp(s,e,t):(i=!e.$stable,fp(e,s)),a=e}else e&&(dp(n,e),a={default:1});if(i)for(const c in s)!hl(c)&&a[c]==null&&delete s[c]},_t=hv;function av(n){return cv(n)}function cv(n,e){const t=ta();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:_,setScopeId:b=Wt,insertStaticContent:V}=n,N=(v,w,P,F=null,O=null,L=null,q=void 0,j=null,U=!!w.dynamicChildren)=>{if(v===w)return;v&&!Os(v,w)&&(F=nn(v),He(v,O,L,!0),v=null),w.patchFlag===-2&&(U=!1,w.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:H}=w;switch(M){case ca:x(v,w,P,F);break;case vn:Q(v,w,P,F);break;case Xa:v==null&&$(w,P,F,q);break;case Ue:S(v,w,P,F,O,L,q,j,U);break;default:H&1?oe(v,w,P,F,O,L,q,j,U):H&6?E(v,w,P,F,O,L,q,j,U):(H&64||H&128)&&M.process(v,w,P,F,O,L,q,j,U,Ut)}Y!=null&&O?Ws(Y,v&&v.ref,L,w||v,!w):Y==null&&v&&v.ref!=null&&Ws(v.ref,null,L,v,!0)},x=(v,w,P,F)=>{if(v==null)r(w.el=c(w.children),P,F);else{const O=w.el=v.el;w.children!==v.children&&h(O,w.children)}},Q=(v,w,P,F)=>{v==null?r(w.el=l(w.children||""),P,F):w.el=v.el},$=(v,w,P,F)=>{[v.el,v.anchor]=V(v.children,w,P,F,v.el,v.anchor)},G=({el:v,anchor:w},P,F)=>{let O;for(;v&&v!==w;)O=_(v),r(v,P,F),v=O;r(w,P,F)},z=({el:v,anchor:w})=>{let P;for(;v&&v!==w;)P=_(v),s(v),v=P;s(w)},oe=(v,w,P,F,O,L,q,j,U)=>{if(w.type==="svg"?q="svg":w.type==="math"&&(q="mathml"),v==null)ye(w,P,F,O,L,q,j,U);else{const M=v.el&&v.el._isVueCE?v.el:null;try{M&&M._beginPatch(),y(v,w,O,L,q,j,U)}finally{M&&M._endPatch()}}},ye=(v,w,P,F,O,L,q,j)=>{let U,M;const{props:Y,shapeFlag:H,transition:J,dirs:Z}=v;if(U=v.el=a(v.type,L,Y&&Y.is,Y),H&8?d(U,v.children):H&16&&m(v.children,U,null,F,O,Ja(v,L),q,j),Z&&or(v,null,F,"created"),I(U,v,v.scopeId,q,F),Y){for(const ae in Y)ae!=="value"&&!$s(ae)&&i(U,ae,null,Y[ae],L,F);"value"in Y&&i(U,"value",null,Y.value,L),(M=Y.onVnodeBeforeMount)&&Bt(M,F,v)}Z&&or(v,null,F,"beforeMount");const ee=lv(O,J);ee&&J.beforeEnter(U),r(U,w,P),((M=Y&&Y.onVnodeMounted)||ee||Z)&&_t(()=>{try{M&&Bt(M,F,v),ee&&J.enter(U),Z&&or(v,null,F,"mounted")}finally{}},O)},I=(v,w,P,F,O)=>{if(P&&b(v,P),F)for(let L=0;L<F.length;L++)b(v,F[L]);if(O){let L=O.subTree;if(w===L||yp(L.type)&&(L.ssContent===w||L.ssFallback===w)){const q=O.vnode;I(v,q,q.scopeId,q.slotScopeIds,O.parent)}}},m=(v,w,P,F,O,L,q,j,U=0)=>{for(let M=U;M<v.length;M++){const Y=v[M]=j?cn(v[M]):Ht(v[M]);N(null,Y,w,P,F,O,L,q,j)}},y=(v,w,P,F,O,L,q)=>{const j=w.el=v.el;let{patchFlag:U,dynamicChildren:M,dirs:Y}=w;U|=v.patchFlag&16;const H=v.props||be,J=w.props||be;let Z;if(P&&ar(P,!1),(Z=J.onVnodeBeforeUpdate)&&Bt(Z,P,w,v),Y&&or(w,v,P,"beforeUpdate"),P&&ar(P,!0),(H.innerHTML&&J.innerHTML==null||H.textContent&&J.textContent==null)&&d(j,""),M?T(v.dynamicChildren,M,j,P,F,Ja(w,O),L):q||ge(v,w,j,null,P,F,Ja(w,O),L,!1),U>0){if(U&16)A(j,H,J,P,O);else if(U&2&&H.class!==J.class&&i(j,"class",null,J.class,O),U&4&&i(j,"style",H.style,J.style,O),U&8){const ee=w.dynamicProps;for(let ae=0;ae<ee.length;ae++){const ve=ee[ae],De=H[ve],Le=J[ve];(Le!==De||ve==="value")&&i(j,ve,De,Le,O,P)}}U&1&&v.children!==w.children&&d(j,w.children)}else!q&&M==null&&A(j,H,J,P,O);((Z=J.onVnodeUpdated)||Y)&&_t(()=>{Z&&Bt(Z,P,w,v),Y&&or(w,v,P,"updated")},F)},T=(v,w,P,F,O,L,q)=>{for(let j=0;j<w.length;j++){const U=v[j],M=w[j],Y=U.el&&(U.type===Ue||!Os(U,M)||U.shapeFlag&198)?p(U.el):P;N(U,M,Y,null,F,O,L,q,!0)}},A=(v,w,P,F,O)=>{if(w!==P){if(w!==be)for(const L in w)!$s(L)&&!(L in P)&&i(v,L,w[L],null,O,F);for(const L in P){if($s(L))continue;const q=P[L],j=w[L];q!==j&&L!=="value"&&i(v,L,j,q,O,F)}"value"in P&&i(v,"value",w.value,P.value,O)}},S=(v,w,P,F,O,L,q,j,U)=>{const M=w.el=v?v.el:c(""),Y=w.anchor=v?v.anchor:c("");let{patchFlag:H,dynamicChildren:J,slotScopeIds:Z}=w;Z&&(j=j?j.concat(Z):Z),v==null?(r(M,P,F),r(Y,P,F),m(w.children||[],P,Y,O,L,q,j,U)):H>0&&H&64&&J&&v.dynamicChildren&&v.dynamicChildren.length===J.length?(T(v.dynamicChildren,J,P,O,L,q,j),(w.key!=null||O&&w===O.subTree)&&gp(v,w,!0)):ge(v,w,P,Y,O,L,q,j,U)},E=(v,w,P,F,O,L,q,j,U)=>{w.slotScopeIds=j,v==null?w.shapeFlag&512?O.ctx.activate(w,P,F,q,U):ht(w,P,F,O,L,q,U):Ft(v,w,U)},ht=(v,w,P,F,O,L,q)=>{const j=v.component=yv(v,F,O);if(Xd(v)&&(j.ctx.renderer=Ut),vv(j,!1,q),j.asyncDep){if(O&&O.registerDep(j,ke,q),!v.el){const U=j.subTree=It(vn);Q(null,U,w,P),v.placeholder=U.el}}else ke(j,v,w,P,O,L,q)},Ft=(v,w,P)=>{const F=w.component=v.component;if(Zy(v,w,P))if(F.asyncDep&&!F.asyncResolved){ce(F,w,P);return}else F.next=w,F.update();else w.el=v.el,F.vnode=w},ke=(v,w,P,F,O,L,q)=>{const j=()=>{if(v.isMounted){let{next:H,bu:J,u:Z,parent:ee,vnode:ae}=v;{const tt=mp(v);if(tt){H&&(H.el=ae.el,ce(v,H,q)),tt.asyncDep.then(()=>{_t(()=>{v.isUnmounted||M()},O)});return}}let ve=H,De;ar(v,!1),H?(H.el=ae.el,ce(v,H,q)):H=ae,J&&ao(J),(De=H.props&&H.props.onVnodeBeforeUpdate)&&Bt(De,ee,H,ae),ar(v,!0);const Le=hh(v),At=v.subTree;v.subTree=Le,N(At,Le,p(At.el),nn(At),v,O,L),H.el=Le.el,ve===null&&ev(v,Le.el),Z&&_t(Z,O),(De=H.props&&H.props.onVnodeUpdated)&&_t(()=>Bt(De,ee,H,ae),O)}else{let H;const{el:J,props:Z}=w,{bm:ee,m:ae,parent:ve,root:De,type:Le}=v,At=Kr(w);ar(v,!1),ee&&ao(ee),!At&&(H=Z&&Z.onVnodeBeforeMount)&&Bt(H,ve,w),ar(v,!0);{De.ce&&De.ce._hasShadowRoot()&&De.ce._injectChildStyle(Le,v.parent?v.parent.type:void 0);const tt=v.subTree=hh(v);N(null,tt,P,F,v,O,L),w.el=tt.el}if(ae&&_t(ae,O),!At&&(H=Z&&Z.onVnodeMounted)){const tt=w;_t(()=>Bt(H,ve,tt),O)}(w.shapeFlag&256||ve&&Kr(ve.vnode)&&ve.vnode.shapeFlag&256)&&v.a&&_t(v.a,O),v.isMounted=!0,w=P=F=null}};v.scope.on();const U=v.effect=new Sd(j);v.scope.off();const M=v.update=U.run.bind(U),Y=v.job=U.runIfDirty.bind(U);Y.i=v,Y.id=v.uid,U.scheduler=()=>ll(Y),ar(v,!0),M()},ce=(v,w,P)=>{w.component=v;const F=v.vnode.props;v.vnode=w,v.next=null,nv(v,w.props,F,P),ov(v,w.children,P),mn(),sh(v),_n()},ge=(v,w,P,F,O,L,q,j,U=!1)=>{const M=v&&v.children,Y=v?v.shapeFlag:0,H=w.children,{patchFlag:J,shapeFlag:Z}=w;if(J>0){if(J&128){Zn(M,H,P,F,O,L,q,j,U);return}else if(J&256){Ct(M,H,P,F,O,L,q,j,U);return}}Z&8?(Y&16&&tr(M,O,L),H!==M&&d(P,H)):Y&16?Z&16?Zn(M,H,P,F,O,L,q,j,U):tr(M,O,L,!0):(Y&8&&d(P,""),Z&16&&m(H,P,F,O,L,q,j,U))},Ct=(v,w,P,F,O,L,q,j,U)=>{v=v||Hr,w=w||Hr;const M=v.length,Y=w.length,H=Math.min(M,Y);let J;for(J=0;J<H;J++){const Z=w[J]=U?cn(w[J]):Ht(w[J]);N(v[J],Z,P,null,O,L,q,j,U)}M>Y?tr(v,O,L,!0,!1,H):m(w,P,F,O,L,q,j,U,H)},Zn=(v,w,P,F,O,L,q,j,U)=>{let M=0;const Y=w.length;let H=v.length-1,J=Y-1;for(;M<=H&&M<=J;){const Z=v[M],ee=w[M]=U?cn(w[M]):Ht(w[M]);if(Os(Z,ee))N(Z,ee,P,null,O,L,q,j,U);else break;M++}for(;M<=H&&M<=J;){const Z=v[H],ee=w[J]=U?cn(w[J]):Ht(w[J]);if(Os(Z,ee))N(Z,ee,P,null,O,L,q,j,U);else break;H--,J--}if(M>H){if(M<=J){const Z=J+1,ee=Z<Y?w[Z].el:F;for(;M<=J;)N(null,w[M]=U?cn(w[M]):Ht(w[M]),P,ee,O,L,q,j,U),M++}}else if(M>J)for(;M<=H;)He(v[M],O,L,!0),M++;else{const Z=M,ee=M,ae=new Map;for(M=ee;M<=J;M++){const Ge=w[M]=U?cn(w[M]):Ht(w[M]);Ge.key!=null&&ae.set(Ge.key,M)}let ve,De=0;const Le=J-ee+1;let At=!1,tt=0;const Sn=new Array(Le);for(M=0;M<Le;M++)Sn[M]=0;for(M=Z;M<=H;M++){const Ge=v[M];if(De>=Le){He(Ge,O,L,!0);continue}let bt;if(Ge.key!=null)bt=ae.get(Ge.key);else for(ve=ee;ve<=J;ve++)if(Sn[ve-ee]===0&&Os(Ge,w[ve])){bt=ve;break}bt===void 0?He(Ge,O,L,!0):(Sn[bt-ee]=M+1,bt>=tt?tt=bt:At=!0,N(Ge,w[bt],P,null,O,L,q,j,U),De++)}const vs=At?uv(Sn):Hr;for(ve=vs.length-1,M=Le-1;M>=0;M--){const Ge=ee+M,bt=w[Ge],Oi=w[Ge+1],kr=Ge+1<Y?Oi.el||_p(Oi):F;Sn[M]===0?N(null,bt,P,kr,O,L,q,j,U):At&&(ve<0||M!==vs[ve]?tn(bt,P,kr,2):ve--)}}},tn=(v,w,P,F,O=null)=>{const{el:L,type:q,transition:j,children:U,shapeFlag:M}=v;if(M&6){tn(v.component.subTree,w,P,F);return}if(M&128){v.suspense.move(w,P,F);return}if(M&64){q.move(v,w,P,Ut);return}if(q===Ue){r(L,w,P);for(let H=0;H<U.length;H++)tn(U[H],w,P,F);r(v.anchor,w,P);return}if(q===Xa){G(v,w,P);return}if(F!==2&&M&1&&j)if(F===0)j.beforeEnter(L),r(L,w,P),_t(()=>j.enter(L),O);else{const{leave:H,delayLeave:J,afterLeave:Z}=j,ee=()=>{v.ctx.isUnmounted?s(L):r(L,w,P)},ae=()=>{L._isLeaving&&L[Ry](!0),H(L,()=>{ee(),Z&&Z()})};J?J(L,ee,ae):ae()}else r(L,w,P)},He=(v,w,P,F=!1,O=!1)=>{const{type:L,props:q,ref:j,children:U,dynamicChildren:M,shapeFlag:Y,patchFlag:H,dirs:J,cacheIndex:Z,memo:ee}=v;if(H===-2&&(O=!1),j!=null&&(mn(),Ws(j,null,P,v,!0),_n()),Z!=null&&(w.renderCache[Z]=void 0),Y&256){w.ctx.deactivate(v);return}const ae=Y&1&&J,ve=!Kr(v);let De;if(ve&&(De=q&&q.onVnodeBeforeUnmount)&&Bt(De,w,v),Y&6)er(v.component,P,F);else{if(Y&128){v.suspense.unmount(P,F);return}ae&&or(v,null,w,"beforeUnmount"),Y&64?v.type.remove(v,w,P,Ut,F):M&&!M.hasOnce&&(L!==Ue||H>0&&H&64)?tr(M,w,P,!1,!0):(L===Ue&&H&384||!O&&Y&16)&&tr(U,w,P),F&&ze(v)}const Le=ee!=null&&Z==null;(ve&&(De=q&&q.onVnodeUnmounted)||ae||Le)&&_t(()=>{De&&Bt(De,w,v),ae&&or(v,null,w,"unmounted"),Le&&(v.el=null)},P)},ze=v=>{const{type:w,el:P,anchor:F,transition:O}=v;if(w===Ue){Pa(P,F);return}if(w===Xa){z(v);return}const L=()=>{s(P),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(v.shapeFlag&1&&O&&!O.persisted){const{leave:q,delayLeave:j}=O,U=()=>q(P,L);j?j(v.el,L,U):U()}else L()},Pa=(v,w)=>{let P;for(;v!==w;)P=_(v),s(v),v=P;s(w)},er=(v,w,P)=>{const{bum:F,scope:O,job:L,subTree:q,um:j,m:U,a:M}=v;ph(U),ph(M),F&&ao(F),O.stop(),L&&(L.flags|=8,He(q,v,w,P)),j&&_t(j,w),_t(()=>{v.isUnmounted=!0},w)},tr=(v,w,P,F=!1,O=!1,L=0)=>{for(let q=L;q<v.length;q++)He(v[q],w,P,F,O)},nn=v=>{if(v.shapeFlag&6)return nn(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const w=_(v.anchor||v.el),P=w&&w[by];return P?_(P):w};let _s=!1;const Ni=(v,w,P)=>{let F;v==null?w._vnode&&(He(w._vnode,null,null,!0),F=w._vnode.component):N(w._vnode||null,v,w,null,null,null,P),w._vnode=v,_s||(_s=!0,sh(F),zd(),_s=!1)},Ut={p:N,um:He,m:tn,r:ze,mt:ht,mc:m,pc:ge,pbc:T,n:nn,o:n};return{render:Ni,hydrate:void 0,createApp:Ky(Ni)}}function Ja({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ar({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function lv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function gp(n,e,t=!1){const r=n.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=cn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&gp(a,c)),c.type===ca&&(c.patchFlag===-1&&(c=s[i]=cn(c)),c.el=a.el),c.type===vn&&!c.el&&(c.el=a.el)}}function uv(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function mp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mp(e)}function ph(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function _p(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?_p(e.subTree):null}const yp=n=>n.__isSuspense;function hv(n,e){e&&e.pendingBranch?re(n)?e.effects.push(...n):e.effects.push(n):vy(n)}const Ue=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),vn=Symbol.for("v-cmt"),Xa=Symbol.for("v-stc"),Gs=[];let Et=null;function pe(n=!1){Gs.push(Et=n?null:[])}function fv(){Gs.pop(),Et=Gs[Gs.length-1]||null}let ai=1;function gh(n,e=!1){ai+=n,n<0&&Et&&e&&(Et.hasOnce=!0)}function vp(n){return n.dynamicChildren=ai>0?Et||Hr:null,fv(),ai>0&&Et&&Et.push(n),n}function Se(n,e,t,r,s,i){return vp(Je(n,e,t,r,s,i,!0))}function On(n,e,t,r,s){return vp(It(n,e,t,r,s,!0))}function dl(n){return n?n.__v_isVNode===!0:!1}function Os(n,e){return n.type===e.type&&n.key===e.key}const Ep=({key:n})=>n??null,uo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?qe(n)||xe(n)||le(n)?{i:lt,r:n,k:e,f:!!t}:n:null);function Je(n,e=null,t=null,r=0,s=null,i=n===Ue?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ep(e),ref:e&&uo(e),scopeId:Kd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return c?(pl(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=qe(t)?8:16),ai>0&&!a&&Et&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Et.push(l),l}const It=dv;function dv(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===Uy)&&(n=vn),dl(n)){const c=es(n,e,!0);return t&&pl(c,t),ai>0&&!i&&Et&&(c.shapeFlag&6?Et[Et.indexOf(n)]=c:Et.push(c)),c.patchFlag=-2,c}if(wv(n)&&(n=n.__vccOpts),e){e=pv(e);let{class:c,style:l}=e;c&&!qe(c)&&(e.class=tl(c)),we(l)&&(sa(l)&&!re(l)&&(l=Ze({},l)),e.style=cs(l))}const a=qe(n)?1:yp(n)?128:Sy(n)?64:we(n)?4:le(n)?2:0;return Je(n,e,t,r,s,a,i,!0)}function pv(n){return n?sa(n)||lp(n)?Ze({},n):n:null}function es(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?gv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Ep(h),ref:e&&e.ref?t&&i?re(i)?i.concat(uo(e)):[i,uo(e)]:uo(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ue?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&es(n.ssContent),ssFallback:n.ssFallback&&es(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&ul(d,l.clone(d)),d}function Ur(n=" ",e=0){return It(ca,null,n,e)}function Qs(n="",e=!1){return e?(pe(),On(vn,null,n)):It(vn,null,n)}function Ht(n){return n==null||typeof n=="boolean"?It(vn):re(n)?It(Ue,null,n.slice()):dl(n)?cn(n):It(ca,null,String(n))}function cn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:es(n)}function pl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(re(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!lp(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:lt},t=32):(e=String(e),r&64?(t=16,e=[Ur(e)]):t=8);n.children=e,n.shapeFlag|=t}function gv(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=tl([e.class,r.class]));else if(s==="style")e.style=cs([e.style,r.style]);else if(Xo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!Yo(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function Bt(n,e,t,r=null){Yt(n,e,7,[t,r])}const mv=sp();let _v=0;function yv(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||mv,i={uid:_v++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hp(r,s),emitsOptions:ip(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qy.bind(null,i),n.ce&&n.ce(i),i}let gt=null;const Tp=()=>gt||lt;let Po,Ic;{const n=ta(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Po=e("__VUE_INSTANCE_SETTERS__",t=>gt=t),Ic=e("__VUE_SSR_SETTERS__",t=>ci=t)}const Ti=n=>{const e=gt;return Po(n),n.scope.on(),()=>{n.scope.off(),Po(e)}},mh=()=>{gt&&gt.scope.off(),Po(null)};function Ip(n){return n.vnode.shapeFlag&4}let ci=!1;function vv(n,e=!1,t=!1){e&&Ic(e);const{props:r,children:s}=n.vnode,i=Ip(n);tv(n,r,i,e),iv(n,s,t||e);const a=i?Ev(n,e):void 0;return e&&Ic(!1),a}function Ev(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,By);const{setup:r}=t;if(r){mn();const s=n.setupContext=r.length>1?Iv(n):null,i=Ti(n),a=vi(r,n,0,[n.props,s]),c=gd(a);if(_n(),i(),(c||n.sp)&&!Kr(n)&&Jd(n),c){if(a.then(mh,mh),e)return a.then(l=>{_h(n,l)}).catch(l=>{ia(l,n,0)});n.asyncDep=a}else _h(n,a)}else wp(n)}function _h(n,e,t){le(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:we(e)&&(n.setupState=jd(e)),wp(n)}function wp(n,e,t){const r=n.type;n.render||(n.render=r.render||Wt);{const s=Ti(n);mn();try{jy(n)}finally{_n(),s()}}}const Tv={get(n,e){return at(n,"get",""),n[e]}};function Iv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Tv),slots:n.slots,emit:n.emit,expose:e}}function la(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(jd(cl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ks)return Ks[t](n)},has(e,t){return t in e||t in Ks}})):n.proxy}function wv(n){return le(n)&&"__vccOpts"in n}const Ap=(n,e)=>py(n,e,ci),Av="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wc;const yh=typeof window<"u"&&window.trustedTypes;if(yh)try{wc=yh.createPolicy("vue",{createHTML:n=>n})}catch{}const bp=wc?n=>wc.createHTML(n):n=>n,bv="http://www.w3.org/2000/svg",Sv="http://www.w3.org/1998/Math/MathML",an=typeof document<"u"?document:null,vh=an&&an.createElement("template"),Rv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?an.createElementNS(bv,n):e==="mathml"?an.createElementNS(Sv,n):t?an.createElement(n,{is:t}):an.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>an.createTextNode(n),createComment:n=>an.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>an.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{vh.innerHTML=bp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=vh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Cv=Symbol("_vtc");function Pv(n,e,t){const r=n[Cv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Eh=Symbol("_vod"),Vv=Symbol("_vsh"),kv=Symbol(""),Dv=/(?:^|;)\s*display\s*:/;function Nv(n,e,t){const r=n.style,s=qe(t);let i=!1;if(t&&!s){if(e)if(qe(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&ho(r,c,"")}else for(const a in e)t[a]==null&&ho(r,a,"");for(const a in t)a==="display"&&(i=!0),ho(r,a,t[a])}else if(s){if(e!==t){const a=r[kv];a&&(t+=";"+a),r.cssText=t,i=Dv.test(t)}}else e&&n.removeAttribute("style");Eh in n&&(n[Eh]=i?r.display:"",n[Vv]&&(r.display="none"))}const Th=/\s*!important$/;function ho(n,e,t){if(re(t))t.forEach(r=>ho(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Ov(n,e);Th.test(t)?n.setProperty(Ar(r),t.replace(Th,""),"important"):n[r]=t}}const Ih=["Webkit","Moz","ms"],Ya={};function Ov(n,e){const t=Ya[e];if(t)return t;let r=Nt(e);if(r!=="filter"&&r in n)return Ya[e]=r;r=yd(r);for(let s=0;s<Ih.length;s++){const i=Ih[s]+r;if(i in n)return Ya[e]=i}return e}const wh="http://www.w3.org/1999/xlink";function Ah(n,e,t,r,s,i=F_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(wh,e.slice(6,e.length)):n.setAttributeNS(wh,e,t):t==null||i&&!Ed(t)?n.removeAttribute(e):n.setAttribute(e,i?"":wt(t)?String(t):t)}function bh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?bp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Ed(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function hr(n,e,t,r){n.addEventListener(e,t,r)}function xv(n,e,t,r){n.removeEventListener(e,t,r)}const Sh=Symbol("_vei");function Mv(n,e,t,r,s=null){const i=n[Sh]||(n[Sh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Lv(e);if(r){const h=i[e]=Bv(r,s);hr(n,c,h,l)}else a&&(xv(n,c,a,l),i[e]=void 0)}}const Rh=/(?:Once|Passive|Capture)$/;function Lv(n){let e;if(Rh.test(n)){e={};let r;for(;r=n.match(Rh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ar(n.slice(2)),e]}let Za=0;const Fv=Promise.resolve(),Uv=()=>Za||(Fv.then(()=>Za=0),Za=Date.now());function Bv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Yt(jv(r,t.value),e,5,[r])};return t.value=n,t.attached=Uv(),t}function jv(n,e){if(re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ch=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,$v=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Pv(n,r,a):e==="style"?Nv(n,t,r):Xo(e)?Yo(e)||Mv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qv(n,e,r,a))?(bh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ah(n,e,r,a,i,e!=="value")):n._isVueCE&&(Hv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!qe(r)))?bh(n,Nt(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Ah(n,e,r,a))};function qv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ch(e)&&le(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ch(e)&&qe(t)?!1:e in n}function Hv(n,e){const t=n._def.props;if(!t)return!1;const r=Nt(e);return Array.isArray(t)?t.some(s=>Nt(s)===r):Object.keys(t).some(s=>Nt(s)===r)}const Vo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return re(e)?t=>ao(e,t):e};function zv(n){n.target.composing=!0}function Ph(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gr=Symbol("_assign");function Vh(n,e,t){return e&&(n=n.trim()),t&&(n=el(n)),n}const Wv={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Gr]=Vo(s);const i=r||s.props&&s.props.type==="number";hr(n,e?"change":"input",a=>{a.target.composing||n[Gr](Vh(n.value,t,i))}),(t||i)&&hr(n,"change",()=>{n.value=Vh(n.value,t,i)}),e||(hr(n,"compositionstart",zv),hr(n,"compositionend",Ph),hr(n,"change",Ph))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Gr]=Vo(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?el(n.value):n.value,l=e??"";if(c===l)return;const h=n.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l)}},Zi={created(n,{value:e},t){n.checked=ri(e,t.props.value),n[Gr]=Vo(t),hr(n,"change",()=>{n[Gr](Kv(n))})},beforeUpdate(n,{value:e,oldValue:t},r){n[Gr]=Vo(r),e!==t&&(n.checked=ri(e,r.props.value))}};function Kv(n){return"_value"in n?n._value:n.value}const Gv=Ze({patchProp:$v},Rv);let kh;function Qv(){return kh||(kh=av(Gv))}const Jv=((...n)=>{const e=Qv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Yv(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Xv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Xv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Yv(n){return qe(n)?document.querySelector(n):n}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Sp;const ua=n=>Sp=n,Rp=Symbol();function Ac(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Js;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Js||(Js={}));function Zv(){const n=Ad(!0),e=n.run(()=>Bd({}));let t=[],r=[];const s=cl({install(i){ua(s),s._a=i,i.provide(Rp,s),i.config.globalProperties.$pinia=s,r.forEach(a=>t.push(a)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Cp=()=>{};function Dh(n,e,t,r=Cp){n.add(e);const s=()=>{n.delete(e)&&r()};return!t&&bd()&&B_(s),s}function Lr(n,...e){n.forEach(t=>{t(...e)})}const eE=n=>n(),Nh=Symbol(),ec=Symbol();function bc(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];Ac(s)&&Ac(r)&&n.hasOwnProperty(t)&&!xe(r)&&!pn(r)?n[t]=bc(s,r):n[t]=r}return n}const tE=Symbol();function nE(n){return!Ac(n)||!Object.prototype.hasOwnProperty.call(n,tE)}const{assign:kn}=Object;function rE(n){return!!(xe(n)&&n.effect)}function sE(n,e,t,r){const{state:s,actions:i,getters:a}=e,c=t.state.value[n];let l;function h(){c||(t.state.value[n]=s?s():{});const d=uy(t.state.value[n]);return kn(d,i,Object.keys(a||{}).reduce((p,_)=>(p[_]=cl(Ap(()=>{ua(t);const b=t._s.get(n);return a[_].call(b,b)})),p),{}))}return l=Pp(n,h,e,t,r,!0),l}function Pp(n,e,t={},r,s,i){let a;const c=kn({actions:{}},t),l={deep:!0};let h,d,p=new Set,_=new Set,b;const V=r.state.value[n];!i&&!V&&(r.state.value[n]={});let N;function x(m){let y;h=d=!1,typeof m=="function"?(m(r.state.value[n]),y={type:Js.patchFunction,storeId:n,events:b}):(bc(r.state.value[n],m),y={type:Js.patchObject,payload:m,storeId:n,events:b});const T=N=Symbol();qd().then(()=>{N===T&&(h=!0)}),d=!0,Lr(p,y,r.state.value[n])}const Q=i?function(){const{state:y}=t,T=y?y():{};this.$patch(A=>{kn(A,T)})}:Cp;function $(){a.stop(),p.clear(),_.clear(),r._s.delete(n)}const G=(m,y="")=>{if(Nh in m)return m[ec]=y,m;const T=function(){ua(r);const A=Array.from(arguments),S=new Set,E=new Set;function ht(ce){S.add(ce)}function Ft(ce){E.add(ce)}Lr(_,{args:A,name:T[ec],store:oe,after:ht,onError:Ft});let ke;try{ke=m.apply(this&&this.$id===n?this:oe,A)}catch(ce){throw Lr(E,ce),ce}return ke instanceof Promise?ke.then(ce=>(Lr(S,ce),ce)).catch(ce=>(Lr(E,ce),Promise.reject(ce))):(Lr(S,ke),ke)};return T[Nh]=!0,T[ec]=y,T},z={_p:r,$id:n,$onAction:Dh.bind(null,_),$patch:x,$reset:Q,$subscribe(m,y={}){const T=Dh(p,m,y.detached,()=>A()),A=a.run(()=>co(()=>r.state.value[n],S=>{(y.flush==="sync"?d:h)&&m({storeId:n,type:Js.direct,events:b},S)},kn({},l,y)));return T},$dispose:$},oe=ra(z);r._s.set(n,oe);const I=(r._a&&r._a.runWithContext||eE)(()=>r._e.run(()=>(a=Ad()).run(()=>e({action:G}))));for(const m in I){const y=I[m];if(xe(y)&&!rE(y)||pn(y))i||(V&&nE(y)&&(xe(y)?y.value=V[m]:bc(y,V[m])),r.state.value[n][m]=y);else if(typeof y=="function"){const T=G(y,m);I[m]=T,c.actions[m]=y}}return kn(oe,I),kn(_e(oe),I),Object.defineProperty(oe,"$state",{get:()=>r.state.value[n],set:m=>{x(y=>{kn(y,m)})}}),r._p.forEach(m=>{kn(oe,a.run(()=>m({store:oe,app:r._a,pinia:r,options:c})))}),V&&i&&t.hydrate&&t.hydrate(oe.$state,V),h=!0,d=!0,oe}/*! #__NO_SIDE_EFFECTS__ */function iE(n,e,t){let r;const s=typeof e=="function";r=s?t:e;function i(a,c){const l=Ty();return a=a||(l?zs(Rp,null):null),a&&ua(a),a=Sp,a._s.has(n)||(s?Pp(n,e,r,a):sE(n,r,a)),a._s.get(n)}return i.$id=n,i}function oE(n,e){if(n==null)return;let t=n;for(let r=0;r<e.length;r++){if(t===void 0||t[e[r]]===void 0)return;if(t===null||t[e[r]]===null)return null;t=t[e[r]]}return t}function gl(n,e,t){if(t.length===0)return e;const r=t[0];return t.length>1&&(e=gl(typeof n!="object"||n===null||!Object.prototype.hasOwnProperty.call(n,r)?Number.isInteger(Number(t[1]))?[]:{}:n[r],e,Array.prototype.slice.call(t,1))),Number.isInteger(Number(r))&&Array.isArray(n)?n.slice()[r]:Object.assign({},n,{[r]:e})}function Vp(n,e){if(n==null||e.length===0)return n;if(e.length===1){if(n==null)return n;if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.slice.call(n,0).splice(e[0],1);const t={};for(const r in n)t[r]=n[r];return delete t[e[0]],t}if(n[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.concat.call([],n);const t={};for(const r in n)t[r]=n[r];return t}return gl(n,Vp(n[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function kp(n,e){return e.map(t=>t.split(".")).map(t=>[t,oE(n,t)]).filter(t=>t[1]!==void 0).reduce((t,r)=>gl(t,r[1],r[0]),{})}function Dp(n,e){return e.map(t=>t.split(".")).reduce((t,r)=>Vp(t,r),n)}function Oh(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a,beforeHydrate:c,afterHydrate:l},h,d=!0){try{d&&(c==null||c(h));const p=e.getItem(r);if(p){const _=t.deserialize(p),b=i?kp(_,i):_,V=a?Dp(b,a):b;n.$patch(V)}d&&(l==null||l(h))}catch(p){s&&console.error("[pinia-plugin-persistedstate]",p)}}function xh(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a}){try{const c=i?kp(n,i):n,l=a?Dp(c,a):c,h=t.serialize(l);e.setItem(r,h)}catch(c){s&&console.error("[pinia-plugin-persistedstate]",c)}}function aE(n,e){return typeof n=="function"?n(e):typeof n=="string"?n:e}function cE(n,e,t){const{pinia:r,store:s,options:{persist:i=t}}=n;if(!i)return;// v8 ignore if -- @preserve
if(!(s.$id in r.state.value)){const c=r._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:c=!0}={})=>{a.forEach(l=>{Oh(s,l,n,c)})},s.$persist=()=>{a.forEach(c=>{xh(s.$state,c)})},a.forEach(c=>{Oh(s,c,n),s.$subscribe((l,h)=>xh(h,c),{detached:!0})})}function lE(n={}){return function(e){cE(e,t=>{const r=aE(t.key,e.store.$id);return{key:(n.key?n.key:s=>s)(r),debug:t.debug??n.debug??!1,serializer:t.serializer??n.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>JSON.parse(s)},storage:t.storage??n.storage??window.localStorage,beforeHydrate:t.beforeHydrate??n.beforeHydrate,afterHydrate:t.afterHydrate??n.afterHydrate,pick:t.pick,omit:t.omit}},n.auto??!1)}}var uE=lE();const br=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},hE={},fE={class:"carafe"};function dE(n,e){return pe(),Se("div",fE,[lo(n.$slots,"top",{},void 0,!0),lo(n.$slots,"mid",{},void 0,!0),lo(n.$slots,"bottom",{},void 0,!0)])}const pE=br(hE,[["render",dE],["__scopeId","data-v-43d2bfc5"]]),gE={},mE={class:"mug"};function _E(n,e){return pe(),Se("div",mE,[lo(n.$slots,"default")])}const yE=br(gE,[["render",_E]]),Mh=["Hot","Cold"],vE=()=>{};var Lh={};/**
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
 */const Np=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},EE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Op={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(_=64)),r.push(t[d],t[p],t[_],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Np(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):EE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new TE;const _=i<<2|c>>4;if(r.push(_),h!==64){const b=c<<4&240|h>>2;if(r.push(b),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class TE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const IE=function(n){const e=Np(n);return Op.encodeByteArray(e,!0)},ko=function(n){return IE(n).replace(/\./g,"")},xp=function(n){try{return Op.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AE=()=>wE().__FIREBASE_DEFAULTS__,bE=()=>{if(typeof process>"u"||typeof Lh>"u")return;const n=Lh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},SE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xp(n[1]);return e&&JSON.parse(e)},ha=()=>{try{return vE()||AE()||bE()||SE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mp=n=>{var e,t;return(t=(e=ha())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},RE=n=>{const e=Mp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Lp=()=>{var n;return(n=ha())===null||n===void 0?void 0:n.config},Fp=n=>{var e;return(e=ha())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class CE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Up(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function PE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ko(JSON.stringify(t)),ko(JSON.stringify(a)),""].join(".")}const Xs={};function VE(){const n={prod:[],emulator:[]};for(const e of Object.keys(Xs))Xs[e]?n.emulator.push(e):n.prod.push(e);return n}function kE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Fh=!1;function Bp(n,e){if(typeof window>"u"||typeof document>"u"||!ls(window.location.host)||Xs[n]===e||Xs[n]||Fh)return;Xs[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=VE().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function l(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Fh=!0,a()},_}function d(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=kE(r),b=t("text"),V=document.getElementById(b)||document.createElement("span"),N=t("learnmore"),x=document.getElementById(N)||document.createElement("a"),Q=t("preprendIcon"),$=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const G=_.element;c(G),d(x,N);const z=h();l($,Q),G.append($,V,x,z),document.body.appendChild(G)}i?(V.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function NE(){var n;const e=(n=ha())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ME(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LE(){const n=ut();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function FE(){return!NE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function UE(){try{return typeof indexedDB=="object"}catch{return!1}}function BE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const jE="FirebaseError";class bn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=jE,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?$E(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new bn(s,c,r)}}function $E(n,e){return n.replace(qE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qE=/\{\$([^}]+)}/g;function HE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function vr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Uh(i)&&Uh(a)){if(!vr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Uh(n){return n!==null&&typeof n=="object"}/**
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
 */function wi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zE(n,e){const t=new WE(n,e);return t.subscribe.bind(t)}class WE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");KE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=tc),s.error===void 0&&(s.error=tc),s.complete===void 0&&(s.complete=tc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function tc(){}/**
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
 */function mt(n){return n&&n._delegate?n._delegate:n}class Er{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ur="[DEFAULT]";/**
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
 */class GE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new CE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JE(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QE(n){return n===ur?void 0:n}function JE(n){return n.instantiationMode==="EAGER"}/**
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
 */class XE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new GE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const YE={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},ZE=he.INFO,eT={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},tT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=eT[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=ZE,this._logHandler=tT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const nT=(n,e)=>e.some(t=>n instanceof t);let Bh,jh;function rT(){return Bh||(Bh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sT(){return jh||(jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jp=new WeakMap,Sc=new WeakMap,$p=new WeakMap,nc=new WeakMap,_l=new WeakMap;function iT(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Un(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&jp.set(t,n)}).catch(()=>{}),_l.set(e,n),e}function oT(n){if(Sc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Sc.set(n,e)}let Rc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||$p.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Un(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function aT(n){Rc=n(Rc)}function cT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(rc(this),e,...t);return $p.set(r,e.sort?e.sort():[e]),Un(r)}:sT().includes(n)?function(...e){return n.apply(rc(this),e),Un(jp.get(this))}:function(...e){return Un(n.apply(rc(this),e))}}function lT(n){return typeof n=="function"?cT(n):(n instanceof IDBTransaction&&oT(n),nT(n,rT())?new Proxy(n,Rc):n)}function Un(n){if(n instanceof IDBRequest)return iT(n);if(nc.has(n))return nc.get(n);const e=lT(n);return e!==n&&(nc.set(n,e),_l.set(e,n)),e}const rc=n=>_l.get(n);function uT(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Un(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Un(a.result),l.oldVersion,l.newVersion,Un(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const hT=["get","getKey","getAll","getAllKeys","count"],fT=["put","add","delete","clear"],sc=new Map;function $h(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(sc.get(e))return sc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=fT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hT.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return sc.set(e,i),i}aT(n=>({...n,get:(e,t,r)=>$h(e,t)||n.get(e,t,r),has:(e,t)=>!!$h(e,t)||n.has(e,t)}));/**
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
 */class dT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function pT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cc="@firebase/app",qh="0.13.2";/**
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
 */const En=new ml("@firebase/app"),gT="@firebase/app-compat",mT="@firebase/analytics-compat",_T="@firebase/analytics",yT="@firebase/app-check-compat",vT="@firebase/app-check",ET="@firebase/auth",TT="@firebase/auth-compat",IT="@firebase/database",wT="@firebase/data-connect",AT="@firebase/database-compat",bT="@firebase/functions",ST="@firebase/functions-compat",RT="@firebase/installations",CT="@firebase/installations-compat",PT="@firebase/messaging",VT="@firebase/messaging-compat",kT="@firebase/performance",DT="@firebase/performance-compat",NT="@firebase/remote-config",OT="@firebase/remote-config-compat",xT="@firebase/storage",MT="@firebase/storage-compat",LT="@firebase/firestore",FT="@firebase/ai",UT="@firebase/firestore-compat",BT="firebase",jT="11.10.0";/**
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
 */const Pc="[DEFAULT]",$T={[Cc]:"fire-core",[gT]:"fire-core-compat",[_T]:"fire-analytics",[mT]:"fire-analytics-compat",[vT]:"fire-app-check",[yT]:"fire-app-check-compat",[ET]:"fire-auth",[TT]:"fire-auth-compat",[IT]:"fire-rtdb",[wT]:"fire-data-connect",[AT]:"fire-rtdb-compat",[bT]:"fire-fn",[ST]:"fire-fn-compat",[RT]:"fire-iid",[CT]:"fire-iid-compat",[PT]:"fire-fcm",[VT]:"fire-fcm-compat",[kT]:"fire-perf",[DT]:"fire-perf-compat",[NT]:"fire-rc",[OT]:"fire-rc-compat",[xT]:"fire-gcs",[MT]:"fire-gcs-compat",[LT]:"fire-fst",[UT]:"fire-fst-compat",[FT]:"fire-vertex","fire-js":"fire-js",[BT]:"fire-js-all"};/**
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
 */const Do=new Map,qT=new Map,Vc=new Map;function Hh(n,e){try{n.container.addComponent(e)}catch(t){En.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ts(n){const e=n.name;if(Vc.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Vc.set(e,n);for(const t of Do.values())Hh(t,n);for(const t of qT.values())Hh(t,n);return!0}function yl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const HT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new Ii("app","Firebase",HT);/**
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
 */class zT{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
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
 */const us=jT;function qp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Bn.create("bad-app-name",{appName:String(s)});if(t||(t=Lp()),!t)throw Bn.create("no-options");const i=Do.get(s);if(i){if(vr(t,i.options)&&vr(r,i.config))return i;throw Bn.create("duplicate-app",{appName:s})}const a=new XE(s);for(const l of Vc.values())a.addComponent(l);const c=new zT(t,r,a);return Do.set(s,c),c}function Hp(n=Pc){const e=Do.get(n);if(!e&&n===Pc&&Lp())return qp();if(!e)throw Bn.create("no-app",{appName:n});return e}function jn(n,e,t){var r;let s=(r=$T[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(c.join(" "));return}ts(new Er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const WT="firebase-heartbeat-database",KT=1,li="firebase-heartbeat-store";let ic=null;function zp(){return ic||(ic=uT(WT,KT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(li)}catch(t){console.warn(t)}}}}).catch(n=>{throw Bn.create("idb-open",{originalErrorMessage:n.message})})),ic}async function GT(n){try{const t=(await zp()).transaction(li),r=await t.objectStore(li).get(Wp(n));return await t.done,r}catch(e){if(e instanceof bn)En.warn(e.message);else{const t=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(t.message)}}}async function zh(n,e){try{const r=(await zp()).transaction(li,"readwrite");await r.objectStore(li).put(e,Wp(n)),await r.done}catch(t){if(t instanceof bn)En.warn(t.message);else{const r=Bn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});En.warn(r.message)}}}function Wp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const QT=1024,JT=30;class XT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ZT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>JT){const a=eI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wh(),{heartbeatsToSend:r,unsentEntries:s}=YT(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return En.warn(t),""}}}function Wh(){return new Date().toISOString().substring(0,10)}function YT(n,e=QT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Kh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Kh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ZT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UE()?BE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await GT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return zh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return zh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Kh(n){return ko(JSON.stringify({version:2,heartbeats:n})).length}function eI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function tI(n){ts(new Er("platform-logger",e=>new dT(e),"PRIVATE")),ts(new Er("heartbeat",e=>new XT(e),"PRIVATE")),jn(Cc,qh,n),jn(Cc,qh,"esm2017"),jn("fire-js","")}tI("");var Gh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $n,Kp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function y(){}y.prototype=m.prototype,I.D=m.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(T,A,S){for(var E=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)E[ht-2]=arguments[ht];return m.prototype[A].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,y){y||(y=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(A=0;16>A;++A)T[A]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=I.g[0],y=I.g[1],A=I.g[2];var S=I.g[3],E=m+(S^y&(A^S))+T[0]+3614090360&4294967295;m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[2]+606105819&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[3]+3250441966&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(S^y&(A^S))+T[4]+4118548399&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[6]+2821735955&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[7]+4249261313&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(S^y&(A^S))+T[8]+1770035416&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[10]+4294925233&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[11]+2304563134&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(S^y&(A^S))+T[12]+1804603682&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[14]+2792965006&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[15]+1236535329&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(A^S&(y^A))+T[1]+4129170786&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[11]+643717713&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[0]+3921069994&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(y^A))+T[5]+3593408605&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[15]+3634488961&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[4]+3889429448&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(y^A))+T[9]+568446438&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[3]+4107603335&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[8]+1163531501&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(y^A))+T[13]+2850285829&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[7]+1735328473&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[12]+2368359562&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(y^A^S)+T[5]+4294588738&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[11]+1839030562&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[14]+4259657740&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^S)+T[1]+2763975236&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[7]+4139469664&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[10]+3200236656&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^S)+T[13]+681279174&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[3]+3572445317&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[6]+76029189&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^S)+T[9]+3654602809&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[15]+530742520&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[2]+3299628645&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(A^(y|~S))+T[0]+4096336452&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[14]+2878612391&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[5]+4237533241&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~S))+T[12]+1700485571&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[10]+4293915773&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[1]+2240044497&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~S))+T[8]+1873313359&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[6]+2734768916&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[13]+1309151649&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~S))+T[4]+4149444226&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[2]+718787259&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var y=m-this.blockSize,T=this.B,A=this.h,S=0;S<m;){if(A==0)for(;S<=y;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<m;)if(T[A++]=I.charCodeAt(S++),A==this.blockSize){s(this,T),A=0;break}}else for(;S<m;)if(T[A++]=I[S++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var y=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=y&255,y/=256;for(this.u(I),I=Array(16),m=y=0;4>m;++m)for(var T=0;32>T;T+=8)I[y++]=this.g[m]>>>T&255;return I};function i(I,m){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=m(I)}function a(I,m){this.h=m;for(var y=[],T=!0,A=I.length-1;0<=A;A--){var S=I[A]|0;T&&S==m||(y[A]=S,T=!1)}this.g=y}var c={};function l(I){return-128<=I&&128>I?i(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return x(h(-I));for(var m=[],y=1,T=0;I>=y;T++)m[T]=I/y|0,y*=4294967296;return new a(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return x(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),T=p,A=0;A<I.length;A+=8){var S=Math.min(8,I.length-A),E=parseInt(I.substring(A,A+S),m);8>S?(S=h(Math.pow(m,S)),T=T.j(S).add(h(E))):(T=T.j(y),T=T.add(h(E)))}return T}var p=l(0),_=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(N(this))return-x(this).m();for(var I=0,m=1,y=0;y<this.g.length;y++){var T=this.i(y);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(N(this))return"-"+x(this).toString(I);for(var m=h(Math.pow(I,6)),y=this,T="";;){var A=z(y,m).g;y=Q(y,A.j(m));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=A,V(y))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function N(I){return I.h==-1}n.l=function(I){return I=Q(this,I),N(I)?-1:V(I)?0:1};function x(I){for(var m=I.g.length,y=[],T=0;T<m;T++)y[T]=~I.g[T];return new a(y,~I.h).add(_)}n.abs=function(){return N(this)?x(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0,A=0;A<=m;A++){var S=T+(this.i(A)&65535)+(I.i(A)&65535),E=(S>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);T=E>>>16,S&=65535,E&=65535,y[A]=E<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function Q(I,m){return I.add(x(m))}n.j=function(I){if(V(this)||V(I))return p;if(N(this))return N(I)?x(this).j(x(I)):x(x(this).j(I));if(N(I))return x(this.j(x(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var m=this.g.length+I.g.length,y=[],T=0;T<2*m;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<I.g.length;A++){var S=this.i(T)>>>16,E=this.i(T)&65535,ht=I.i(A)>>>16,Ft=I.i(A)&65535;y[2*T+2*A]+=E*Ft,$(y,2*T+2*A),y[2*T+2*A+1]+=S*Ft,$(y,2*T+2*A+1),y[2*T+2*A+1]+=E*ht,$(y,2*T+2*A+1),y[2*T+2*A+2]+=S*ht,$(y,2*T+2*A+2)}for(T=0;T<m;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=m;T<2*m;T++)y[T]=0;return new a(y,0)};function $(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function G(I,m){this.g=I,this.h=m}function z(I,m){if(V(m))throw Error("division by zero");if(V(I))return new G(p,p);if(N(I))return m=z(x(I),m),new G(x(m.g),x(m.h));if(N(m))return m=z(I,x(m)),new G(x(m.g),m.h);if(30<I.g.length){if(N(I)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,T=m;0>=T.l(I);)y=oe(y),T=oe(T);var A=ye(y,1),S=ye(T,1);for(T=ye(T,2),y=ye(y,2);!V(T);){var E=S.add(T);0>=E.l(I)&&(A=A.add(y),S=E),T=ye(T,1),y=ye(y,1)}return m=Q(I,A.j(m)),new G(A,m)}for(A=p;0<=I.l(m);){for(y=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(y),E=S.j(m);N(E)||0<E.l(I);)y-=T,S=h(y),E=S.j(m);V(S)&&(S=_),A=A.add(S),I=Q(I,E)}return new G(A,I)}n.A=function(I){return z(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)&I.i(T);return new a(y,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)|I.i(T);return new a(y,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)^I.i(T);return new a(y,this.h^I.h)};function oe(I){for(var m=I.g.length+1,y=[],T=0;T<m;T++)y[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(y,I.h)}function ye(I,m){var y=m>>5;m%=32;for(var T=I.g.length-y,A=[],S=0;S<T;S++)A[S]=0<m?I.i(S+y)>>>m|I.i(S+y+1)<<32-m:I.i(S+y);return new a(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Kp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,$n=a}).apply(typeof Gh<"u"?Gh:typeof self<"u"?self:typeof window<"u"?window:{});var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gp,Fs,Qp,fo,kc,Jp,Xp,Yp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof eo=="object"&&eo];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,R={next:function(){if(!g&&f<o.length){var C=f++;return{value:u(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function _(o,u,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,_.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,R,C){for(var B=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)B[Ae-2]=arguments[Ae];return u.prototype[R].apply(g,B)}}function N(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function x(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const R=o.length||0,C=g.length||0;o.length=R+C;for(let B=0;B<C;B++)o[R+B]=g[B]}else o.push(g)}}class Q{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(o){return/^[\s\xa0]*$/.test(o)}function G(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var oe=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ye(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function m(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let C=0;C<y.length;C++)f=y[C],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function A(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Ct;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ht{constructor(){this.h=this.g=null}add(u,f){const g=Ft.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ft=new Q(()=>new ke,o=>o.reset());class ke{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,ge=!1,Ct=new ht,Zn=()=>{const o=c.Promise.resolve(void 0);ce=()=>{o.then(tn)}};var tn=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Ft;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ge=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var Pa=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function er(o,u){if(ze.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{z(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:tr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&er.aa.h.call(this)}}V(er,ze);var tr={2:"touch",3:"pen",4:"mouse"};er.prototype.h=function(){er.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),_s=0;function Ni(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++_s,this.da=this.fa=!1}function Ut(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ys(o){this.src=o,this.g={},this.h=0}ys.prototype.add=function(o,u,f,g,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var B=w(o,u,g,R);return-1<B?(u=o[B],f||(u.fa=!1)):(u=new Ni(u,this.src,C,!!g,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=R)&&Array.prototype.splice.call(g,R,1),C&&(Ut(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function w(o,u,f,g){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return R}return-1}var P="closure_lm_"+(1e6*Math.random()|0),F={};function O(o,u,f,g,R){if(Array.isArray(u)){for(var C=0;C<u.length;C++)O(o,u[C],f,g,R);return null}return f=Z(f),o&&o[nn]?o.K(u,f,h(g)?!!g.capture:!1,R):L(o,u,f,!1,g,R)}function L(o,u,f,g,R,C){if(!u)throw Error("Invalid event type");var B=h(R)?!!R.capture:!!R,Ae=H(o);if(Ae||(o[P]=Ae=new ys(o)),f=Ae.add(u,f,g,B,C),f.proxy)return f;if(g=q(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)Pa||(R=B),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(M(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function q(){function o(f){return u.call(o.src,o.listener,f)}const u=Y;return o}function j(o,u,f,g,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)j(o,u[C],f,g,R);else g=h(g)?!!g.capture:!!g,f=Z(f),o&&o[nn]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],f=w(C,f,g,R),-1<f&&(Ut(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=H(o))&&(u=o.g[u.toString()],o=-1,u&&(o=w(u,f,g,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[nn])v(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(M(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=H(u))?(v(f,o),f.h==0&&(f.src=null,u[P]=null)):Ut(o)}}}function M(o){return o in F?F[o]:F[o]="on"+o}function Y(o,u){if(o.da)o=!0;else{u=new er(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&U(o),o=f.call(g,u)}return o}function H(o){return o=o[P],o instanceof ys?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function ee(){He.call(this),this.i=new ys(this),this.M=this,this.F=null}V(ee,He),ee.prototype[nn]=!0,ee.prototype.removeEventListener=function(o,u,f,g){j(this,o,u,f,g)};function ae(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new ze(u,o);else if(u instanceof ze)u.target=u.target||o;else{var R=u;u=new ze(g,o),T(u,R)}if(R=!0,f)for(var C=f.length-1;0<=C;C--){var B=u.g=f[C];R=ve(B,g,!0,u)&&R}if(B=u.g=o,R=ve(B,g,!0,u)&&R,R=ve(B,g,!1,u)&&R,f)for(C=0;C<f.length;C++)B=u.g=f[C],R=ve(B,g,!1,u)&&R}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Ut(f[g]);delete o.g[u],o.h--}}this.F=null},ee.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},ee.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function ve(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,C=0;C<u.length;++C){var B=u[C];if(B&&!B.da&&B.capture==f){var Ae=B.listener,Qe=B.ha||B.src;B.fa&&v(o.i,B),R=Ae.call(Qe,g)!==!1&&R}}return R&&!g.defaultPrevented}function De(o,u,f){if(typeof o=="function")f&&(o=_(o,f));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Le(o){o.g=De(()=>{o.g=null,o.i&&(o.i=!1,Le(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class At extends He{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Le(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(o){He.call(this),this.h=o,this.g={}}V(tt,He);var Sn=[];function vs(o){ye(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}tt.prototype.N=function(){tt.aa.N.call(this),vs(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ge=c.JSON.stringify,bt=c.JSON.parse,Oi=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function kr(){}kr.prototype.h=null;function lu(o){return o.h||(o.h=o.i())}function uu(){}var Es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Va(){ze.call(this,"d")}V(Va,ze);function ka(){ze.call(this,"c")}V(ka,ze);var nr={},hu=null;function xi(){return hu=hu||new ee}nr.La="serverreachability";function fu(o){ze.call(this,nr.La,o)}V(fu,ze);function Ts(o){const u=xi();ae(u,new fu(u))}nr.STAT_EVENT="statevent";function du(o,u){ze.call(this,nr.STAT_EVENT,o),this.stat=u}V(du,ze);function ft(o){const u=xi();ae(u,new du(u,o))}nr.Ma="timingevent";function pu(o,u){ze.call(this,nr.Ma,o),this.size=u}V(pu,ze);function Is(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ws(){this.g=!0}ws.prototype.xa=function(){this.g=!1};function o_(o,u,f,g,R,C){o.info(function(){if(o.g)if(C)for(var B="",Ae=C.split("&"),Qe=0;Qe<Ae.length;Qe++){var me=Ae[Qe].split("=");if(1<me.length){var nt=me[0];me=me[1];var rt=nt.split("_");B=2<=rt.length&&rt[1]=="type"?B+(nt+"="+me+"&"):B+(nt+"=redacted&")}}else B=null;else B=C;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+B})}function a_(o,u,f,g,R,C,B){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+C+" "+B})}function Dr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+l_(o,f)+(g?" "+g:"")})}function c_(o,u){o.info(function(){return"TIMEOUT: "+u})}ws.prototype.info=function(){};function l_(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return Ge(f)}catch{return u}}var Mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Da;function Li(){}V(Li,kr),Li.prototype.g=function(){return new XMLHttpRequest},Li.prototype.i=function(){return{}},Da=new Li;function Rn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mu}function mu(){this.i=null,this.g="",this.h=!1}var _u={},Na={};function Oa(o,u,f){o.L=1,o.v=ji(rn(u)),o.m=f,o.P=!0,yu(o,null)}function yu(o,u){o.F=Date.now(),Fi(o),o.A=rn(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Du(f.i,"t",g),o.C=0,f=o.j.J,o.h=new mu,o.g=Ju(o.j,f?u:null,!o.m),0<o.O&&(o.M=new At(_(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Sn[0]=R.toString()),R=Sn);for(var C=0;C<R.length;C++){var B=O(f,R[C],g||u.handleEvent,!1,u.h||u);if(!B)break;u.g[B.key]=B}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ts(),o_(o.i,o.u,o.A,o.l,o.R,o.m)}Rn.prototype.ca=function(o){o=o.target;const u=this.M;u&&sn(o)==3?u.j():this.Y(o)},Rn.prototype.Y=function(o){try{if(o==this.g)e:{const rt=sn(this.g);var u=this.g.Ba();const xr=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||Uu(this.g)))){this.J||rt!=4||u==7||(u==8||0>=xr?Ts(3):Ts(2)),xa(this);var f=this.g.Z();this.X=f;t:if(vu(this)){var g=Uu(this.g);o="";var R=g.length,C=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rr(this),As(this);var B="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(C&&u==R-1)});g.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,a_(this.i,this.u,this.A,this.l,this.R,rt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,Qe=this.g;if((Ae=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Ae)){var me=Ae;break t}}me=null}if(f=me)Dr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ma(this,f);else{this.o=!1,this.s=3,ft(12),rr(this),As(this);break e}}if(this.P){f=!0;let Pt;for(;!this.J&&this.C<B.length;)if(Pt=u_(this,B),Pt==Na){rt==4&&(this.s=4,ft(14),f=!1),Dr(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==_u){this.s=4,ft(15),Dr(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else Dr(this.i,this.l,Pt,null),Ma(this,Pt);if(vu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||B.length!=0||this.h.h||(this.s=1,ft(16),f=!1),this.o=this.o&&f,!f)Dr(this.i,this.l,B,"[Invalid Chunked Response]"),rr(this),As(this);else if(0<B.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),$a(nt),nt.M=!0,ft(11))}}else Dr(this.i,this.l,B,null),Ma(this,B);rt==4&&rr(this),this.o&&!this.J&&(rt==4?Wu(this.j,this):(this.o=!1,Fi(this)))}else R_(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),rr(this),As(this)}}}catch{}finally{}};function vu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function u_(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Na:(f=Number(u.substring(f,g)),isNaN(f)?_u:(g+=1,g+f>u.length?Na:(u=u.slice(g,g+f),o.C=g+f,u)))}Rn.prototype.cancel=function(){this.J=!0,rr(this)};function Fi(o){o.S=Date.now()+o.I,Eu(o,o.I)}function Eu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Is(_(o.ba,o),u)}function xa(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Rn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(c_(this.i,this.A),this.L!=2&&(Ts(),ft(17)),rr(this),this.s=2,As(this)):Eu(this,this.S-o)};function As(o){o.j.G==0||o.J||Wu(o.j,o)}function rr(o){xa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,vs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ma(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||La(f.h,o))){if(!o.K&&La(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Ki(f),zi(f);else break e;ja(f),ft(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=Is(_(f.Za,f),6e3));if(1>=wu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ir(f,11)}else if((o.K||f.g==o)&&Ki(f),!$(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let me=R[u];if(f.T=me[0],me=me[1],f.G==2)if(me[0]=="c"){f.K=me[1],f.ia=me[2];const nt=me[3];nt!=null&&(f.la=nt,f.j.info("VER="+f.la));const rt=me[4];rt!=null&&(f.Aa=rt,f.j.info("SVER="+f.Aa));const xr=me[5];xr!=null&&typeof xr=="number"&&0<xr&&(g=1.5*xr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Pt=o.g;if(Pt){const Qi=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qi){var C=g.h;C.g||Qi.indexOf("spdy")==-1&&Qi.indexOf("quic")==-1&&Qi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Fa(C,C.h),C.h=null))}if(g.D){const qa=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;qa&&(g.ya=qa,Pe(g.I,g.D,qa))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var B=o;if(g.qa=Qu(g,g.J?g.ia:null,g.W),B.K){Au(g.h,B);var Ae=B,Qe=g.L;Qe&&(Ae.I=Qe),Ae.B&&(xa(Ae),Fi(Ae)),g.g=B}else Hu(g);0<f.i.length&&Wi(f)}else me[0]!="stop"&&me[0]!="close"||ir(f,7);else f.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?ir(f,7):Ba(f):me[0]!="noop"&&f.l&&f.l.ta(me),f.v=0)}}Ts(4)}catch{}}var h_=class{constructor(o,u){this.g=o,this.map=u}};function Tu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Iu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function wu(o){return o.h?1:o.g?o.g.size:0}function La(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Fa(o,u){o.g?o.g.add(u):o.h=u}function Au(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Tu.prototype.cancel=function(){if(this.i=bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function bu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return N(o.i)}function f_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function d_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Su(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=d_(o),g=f_(o),R=g.length,C=0;C<R;C++)u.call(void 0,g[C],f&&f[C],o)}var Ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function p_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),R=null;if(0<=g){var C=o[f].substring(0,g);R=o[f].substring(g+1)}else C=o[f];u(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function sr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof sr){this.h=o.h,Ui(this,o.j),this.o=o.o,this.g=o.g,Bi(this,o.s),this.l=o.l;var u=o.i,f=new Rs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Cu(this,f),this.m=o.m}else o&&(u=String(o).match(Ru))?(this.h=!1,Ui(this,u[1]||"",!0),this.o=bs(u[2]||""),this.g=bs(u[3]||"",!0),Bi(this,u[4]),this.l=bs(u[5]||"",!0),Cu(this,u[6]||"",!0),this.m=bs(u[7]||"")):(this.h=!1,this.i=new Rs(null,this.h))}sr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ss(u,Pu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ss(u,Pu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Ss(f,f.charAt(0)=="/"?__:m_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Ss(f,v_)),o.join("")};function rn(o){return new sr(o)}function Ui(o,u,f){o.j=f?bs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Bi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Cu(o,u,f){u instanceof Rs?(o.i=u,E_(o.i,o.h)):(f||(u=Ss(u,y_)),o.i=new Rs(u,o.h))}function Pe(o,u,f){o.i.set(u,f)}function ji(o){return Pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function bs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ss(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,g_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function g_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Pu=/[#\/\?@]/g,m_=/[#\?:]/g,__=/[#\?]/g,y_=/[#\?@]/g,v_=/#/g;function Rs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Cn(o){o.g||(o.g=new Map,o.h=0,o.i&&p_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Rs.prototype,n.add=function(o,u){Cn(this),this.i=null,o=Nr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Vu(o,u){Cn(o),u=Nr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function ku(o,u){return Cn(o),u=Nr(o,u),o.g.has(u)}n.forEach=function(o,u){Cn(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)},n.na=function(){Cn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const R=o[g];for(let C=0;C<R.length;C++)f.push(u[g])}return f},n.V=function(o){Cn(this);let u=[];if(typeof o=="string")ku(this,o)&&(u=u.concat(this.g.get(Nr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return Cn(this),this.i=null,o=Nr(this,o),ku(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Du(o,u,f){Vu(o,u),0<f.length&&(o.i=null,o.g.set(Nr(o,u),N(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const C=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var R=C;B[g]!==""&&(R+="="+encodeURIComponent(String(B[g]))),o.push(R)}}return this.i=o.join("&")};function Nr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function E_(o,u){u&&!o.j&&(Cn(o),o.i=null,o.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(Vu(this,g),Du(this,R,f))},o)),o.j=u}function T_(o,u){const f=new ws;if(c.Image){const g=new Image;g.onload=b(Pn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=b(Pn,f,"TestLoadImage: error",!1,u,g),g.onabort=b(Pn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(Pn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function I_(o,u){const f=new ws,g=new AbortController,R=setTimeout(()=>{g.abort(),Pn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(R),C.ok?Pn(f,"TestPingServer: ok",!0,u):Pn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Pn(f,"TestPingServer: error",!1,u)})}function Pn(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function w_(){this.g=new Oi}function A_(o,u,f){const g=f||"";try{Su(o,function(R,C){let B=R;h(R)&&(B=Ge(R)),u.push(g+C+"="+encodeURIComponent(B))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function $i(o){this.l=o.Ub||null,this.j=o.eb||!1}V($i,kr),$i.prototype.g=function(){return new qi(this.l,this.j)},$i.prototype.i=(function(o){return function(){return o}})({});function qi(o,u){ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(qi,ee),n=qi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ps(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ps(this)),this.g&&(this.readyState=3,Ps(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Cs(this):Ps(this),this.readyState==3&&Nu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Cs(this))},n.Qa=function(o){this.g&&(this.response=o,Cs(this))},n.ga=function(){this.g&&Cs(this)};function Cs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ps(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Ps(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ou(o){let u="";return ye(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ua(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Ou(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Pe(o,u,f))}function Oe(o){ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Oe,ee);var b_=/^https?$/i,S_=["POST","PUT"];n=Oe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Da.g(),this.v=this.o?lu(this.o):lu(Da),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){xu(this,C);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(S_,u,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,B]of f)this.g.setRequestHeader(C,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){xu(this,C)}};function xu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Mu(o),Hi(o)}function Mu(o){o.A||(o.A=!0,ae(o,"complete"),ae(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ae(this,"complete"),ae(this,"abort"),Hi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hi(this,!0)),Oe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Lu(this):this.bb())},n.bb=function(){Lu(this)};function Lu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||sn(o)!=4||o.Z()!=2)){if(o.u&&sn(o)==4)De(o.Ea,0,o);else if(ae(o,"readystatechange"),sn(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=B===0){var R=String(o.D).match(Ru)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),g=!b_.test(R?R.toLowerCase():"")}f=g}if(f)ae(o,"complete"),ae(o,"success");else{o.m=6;try{var C=2<sn(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Mu(o)}}finally{Hi(o)}}}}function Hi(o,u){if(o.g){Fu(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ae(o,"ready");try{f.onreadystatechange=g}catch{}}}function Fu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function sn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),bt(u)}};function Uu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function R_(o){const u={};o=(o.g&&2<=sn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if($(o[g]))continue;var f=A(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[R]||[];u[R]=C,C.push(f)}I(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Bu(o){this.Aa=0,this.i=[],this.j=new ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vs("baseRetryDelayMs",5e3,o),this.cb=Vs("retryDelaySeedMs",1e4,o),this.Wa=Vs("forwardChannelMaxRetries",2,o),this.wa=Vs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Tu(o&&o.concurrentRequestLimit),this.Da=new w_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Bu.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,g){ft(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Qu(this,null,this.W),Wi(this)};function Ba(o){if(ju(o),o.G==3){var u=o.U++,f=rn(o.I);if(Pe(f,"SID",o.K),Pe(f,"RID",u),Pe(f,"TYPE","terminate"),ks(o,f),u=new Rn(o,o.j,u),u.L=2,u.v=ji(rn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Ju(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Fi(u)}Gu(o)}function zi(o){o.g&&($a(o),o.g.cancel(),o.g=null)}function ju(o){zi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ki(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Wi(o){if(!Iu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ce||Zn(),ge||(ce(),ge=!0),Ct.add(u,o),o.B=0}}function C_(o,u){return wu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Is(_(o.Ga,o,u),Ku(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Rn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=qu(this,R,u),f=rn(this.I),Pe(f,"RID",o),Pe(f,"CVER",22),this.D&&Pe(f,"X-HTTP-Session-Id",this.D),ks(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(Ou(C)))+"&"+u:this.m&&Ua(f,this.m,C)),Fa(this.h,R),this.Ua&&Pe(f,"TYPE","init"),this.P?(Pe(f,"$req",u),Pe(f,"SID","null"),R.T=!0,Oa(R,f,null)):Oa(R,f,u),this.G=2}}else this.G==3&&(o?$u(this,o):this.i.length==0||Iu(this.h)||$u(this))};function $u(o,u){var f;u?f=u.l:f=o.U++;const g=rn(o.I);Pe(g,"SID",o.K),Pe(g,"RID",f),Pe(g,"AID",o.T),ks(o,g),o.m&&o.o&&Ua(g,o.m,o.o),f=new Rn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=qu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Fa(o.h,f),Oa(f,g,u)}function ks(o,u){o.H&&ye(o.H,function(f,g){Pe(u,g,f)}),o.l&&Su({},function(f,g){Pe(u,g,f)})}function qu(o,u,f){f=Math.min(o.i.length,f);var g=o.l?_(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const B=["count="+f];C==-1?0<f?(C=R[0].g,B.push("ofs="+C)):C=0:B.push("ofs="+C);let Ae=!0;for(let Qe=0;Qe<f;Qe++){let me=R[Qe].g;const nt=R[Qe].map;if(me-=C,0>me)C=Math.max(0,R[Qe].g-100),Ae=!1;else try{A_(nt,B,"req"+me+"_")}catch{g&&g(nt)}}if(Ae){g=B.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function Hu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ce||Zn(),ge||(ce(),ge=!0),Ct.add(u,o),o.v=0}}function ja(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Is(_(o.Fa,o),Ku(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,zu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Is(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),zi(this),zu(this))};function $a(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function zu(o){o.g=new Rn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=rn(o.qa);Pe(u,"RID","rpc"),Pe(u,"SID",o.K),Pe(u,"AID",o.T),Pe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Pe(u,"TO",o.ja),Pe(u,"TYPE","xmlhttp"),ks(o,u),o.m&&o.o&&Ua(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=ji(rn(u)),f.m=null,f.P=!0,yu(f,o)}n.Za=function(){this.C!=null&&(this.C=null,zi(this),ja(this),ft(19))};function Ki(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Wu(o,u){var f=null;if(o.g==u){Ki(o),$a(o),o.g=null;var g=2}else if(La(o.h,u))f=u.D,Au(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;g=xi(),ae(g,new pu(g,f)),Wi(o)}else Hu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&C_(o,u)||g==2&&ja(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:ir(o,5);break;case 4:ir(o,10);break;case 3:ir(o,6);break;default:ir(o,2)}}}function Ku(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function ir(o,u){if(o.j.info("Error code "+u),u==2){var f=_(o.fb,o),g=o.Xa;const R=!g;g=new sr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ui(g,"https"),ji(g),R?T_(g.toString(),f):I_(g.toString(),f)}else ft(2);o.G=0,o.l&&o.l.sa(u),Gu(o),ju(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Gu(o){if(o.G=0,o.ka=[],o.l){const u=bu(o.h);(u.length!=0||o.i.length!=0)&&(x(o.ka,u),x(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Qu(o,u,f){var g=f instanceof sr?rn(f):new sr(f);if(g.g!="")u&&(g.g=u+"."+g.g),Bi(g,g.s);else{var R=c.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var C=new sr(null);g&&Ui(C,g),u&&(C.g=u),R&&Bi(C,R),f&&(C.l=f),g=C}return f=o.D,u=o.ya,f&&u&&Pe(g,f,u),Pe(g,"VER",o.la),ks(o,g),g}function Ju(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Oe(new $i({eb:f})):new Oe(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xu(){}n=Xu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Gi(){}Gi.prototype.g=function(o,u){return new vt(o,u)};function vt(o,u){ee.call(this),this.g=new Bu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!$(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Or(this)}V(vt,ee),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Ba(this.g)},vt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Ge(o),o=f);u.i.push(new h_(u.Ya++,o)),u.G==3&&Wi(u)},vt.prototype.N=function(){this.g.l=null,delete this.j,Ba(this.g),delete this.g,vt.aa.N.call(this)};function Yu(o){Va.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(Yu,Va);function Zu(){ka.call(this),this.status=1}V(Zu,ka);function Or(o){this.g=o}V(Or,Xu),Or.prototype.ua=function(){ae(this.g,"a")},Or.prototype.ta=function(o){ae(this.g,new Yu(o))},Or.prototype.sa=function(o){ae(this.g,new Zu)},Or.prototype.ra=function(){ae(this.g,"b")},Gi.prototype.createWebChannel=Gi.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Yp=function(){return new Gi},Xp=function(){return xi()},Jp=nr,kc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mi.NO_ERROR=0,Mi.TIMEOUT=8,Mi.HTTP_ERROR=6,fo=Mi,gu.COMPLETE="complete",Qp=gu,uu.EventType=Es,Es.OPEN="a",Es.CLOSE="b",Es.ERROR="c",Es.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Fs=uu,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,Gp=Oe}).apply(typeof eo<"u"?eo:typeof self<"u"?self:typeof window<"u"?window:{});const Qh="@firebase/firestore",Jh="4.8.0";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let hs="11.10.0";/**
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
 */const Tr=new ml("@firebase/firestore");function Br(){return Tr.logLevel}function W(n,...e){if(Tr.logLevel<=he.DEBUG){const t=e.map(vl);Tr.debug(`Firestore (${hs}): ${n}`,...t)}}function Tn(n,...e){if(Tr.logLevel<=he.ERROR){const t=e.map(vl);Tr.error(`Firestore (${hs}): ${n}`,...t)}}function Wn(n,...e){if(Tr.logLevel<=he.WARN){const t=e.map(vl);Tr.warn(`Firestore (${hs}): ${n}`,...t)}}function vl(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function te(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Zp(n,r,t)}function Zp(n,e,t){let r=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Tn(r),new Error(r)}function Te(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Zp(e,s,r)}function ie(n,e){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends bn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class eg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ot.UNAUTHENTICATED)))}shutdown(){}}class rI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class sI{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Te(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string",31837,{l:r}),new eg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class iI{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class oI{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new iI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ot.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Xh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Te(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Xh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Xh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function cI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function tg(){return new TextEncoder}/**
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
 */class El{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=cI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function Dc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=tg(),a=lI(i.encode(Yh(n,t)),i.encode(Yh(e,t)));return a!==0?a:ue(r,s)}}t+=r>65535?2:1}return ue(n.length,e.length)}function Yh(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function lI(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function ns(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const Zh="__name__";class $t{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return $t.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $t?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=$t.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=$t.isNumericId(e),s=$t.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?$t.extractNumericId(e).compare($t.extractNumericId(t)):Dc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $n.fromString(e.substring(4,e.length-2))}}class Ce extends $t{construct(e,t,r){return new Ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Ce(t)}static emptyPath(){return new Ce([])}}const uI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends $t{construct(e,t,r){return new Ye(e,t,r)}static isValidIdentifier(e){return uI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zh}static keyField(){return new Ye([Zh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new K(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new K(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(t)}static emptyPath(){return new Ye([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ce.fromString(e))}static fromName(e){return new X(Ce.fromString(e).popFirst(5))}static empty(){return new X(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ce(e.slice()))}}/**
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
 */function ng(n,e,t){if(!t)throw new K(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function hI(n,e,t,r){if(e===!0&&r===!0)throw new K(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ef(n){if(!X.isDocumentKey(n))throw new K(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function tf(n){if(X.isDocumentKey(n))throw new K(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function rg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te(12329,{type:typeof n})}function Hn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fa(n);throw new K(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ai(n,e){if(!rg(n))throw new K(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new K(k.INVALID_ARGUMENT,t);return!0}/**
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
 */const nf=-62135596800,rf=1e6;class Ve{static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*rf);return new Ve(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<nf)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rf}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ai(e,Ve._jsonSchema))return new Ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-nf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ve._jsonSchemaVersion="firestore/timestamp/1.0",Ve._jsonSchema={type:je("string",Ve._jsonSchemaVersion),seconds:je("number"),nanoseconds:je("number")};/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ve(0,0))}static max(){return new se(new Ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ui=-1;function fI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ve(t+1,0):new Ve(t,r));return new Kn(s,X.empty(),e)}function dI(n){return new Kn(n.readTime,n.key,ui)}class Kn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Kn(se.min(),X.empty(),ui)}static max(){return new Kn(se.max(),X.empty(),ui)}}function pI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const gI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function fs(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==gI)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):D.reject(t)}static resolve(e){return new D(((t,r)=>{t(e)}))}static reject(e){return new D(((t,r)=>{r(e)}))}static waitFor(e){return new D(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(l=>r(l)))})),a=!0,i===s&&t()}))}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next((s=>s?D.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new D(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next((d=>{a[h]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,t){return new D(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function _I(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ds(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class da{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}da.ue=-1;/**
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
 */const Tl=-1;function pa(n){return n==null}function No(n){return n===0&&1/n==-1/0}function yI(n){return typeof n=="number"&&Number.isInteger(n)&&!No(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const sg="";function vI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=sf(e)),e=EI(n.get(t),e);return sf(e)}function EI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case sg:t+="";break;default:t+=i}}return t}function sf(n){return n+sg+""}/**
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
 */function of(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Sr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ig(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ne{constructor(e,t){this.comparator=e,this.root=t||Xe.EMPTY}insert(e,t){return new Ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Xe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class We{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new af(this.data.getIterator())}getIteratorFrom(e){return new af(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new We(this.comparator);return t.data=e,t}}class af{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new kt([])}unionWith(e){let t=new We(Ye.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new kt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class og extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new og("Invalid base64 string: "+i):i}})(e);return new et(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new et(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const TI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gn(n){if(Te(!!n,39018),typeof n=="string"){let e=0;const t=TI.exec(n);if(Te(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(n.seconds),nanos:Me(n.nanos)}}function Me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Qn(n){return typeof n=="string"?et.fromBase64String(n):et.fromUint8Array(n)}/**
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
 */const ag="server_timestamp",cg="__type__",lg="__previous_value__",ug="__local_write_time__";function Il(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[cg])===null||t===void 0?void 0:t.stringValue)===ag}function ga(n){const e=n.mapValue.fields[lg];return Il(e)?ga(e):e}function hi(n){const e=Gn(n.mapValue.fields[ug].timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class II{constructor(e,t,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const Oo="(default)";class fi{constructor(e,t){this.projectId=e,this.database=t||Oo}static empty(){return new fi("","")}get isDefaultDatabase(){return this.database===Oo}isEqual(e){return e instanceof fi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const hg="__type__",wI="__max__",no={mapValue:{}},fg="__vector__",xo="value";function Jn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Il(n)?4:bI(n)?9007199254740991:AI(n)?10:11:te(28295,{value:n})}function Zt(n,e){if(n===e)return!0;const t=Jn(n);if(t!==Jn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return hi(n).isEqual(hi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Gn(s.timestampValue),c=Gn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Qn(s.bytesValue).isEqual(Qn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Me(s.doubleValue),c=Me(i.doubleValue);return a===c?No(a)===No(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return ns(n.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(of(a)!==of(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Zt(a[l],c[l])))return!1;return!0})(n,e);default:return te(52216,{left:n})}}function di(n,e){return(n.values||[]).find((t=>Zt(t,e)))!==void 0}function rs(n,e){if(n===e)return 0;const t=Jn(n),r=Jn(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Me(i.integerValue||i.doubleValue),l=Me(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return cf(n.timestampValue,e.timestampValue);case 4:return cf(hi(n),hi(e));case 5:return Dc(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Qn(i),l=Qn(a);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ue(c[h],l[h]);if(d!==0)return d}return ue(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=ue(Me(i.latitude),Me(a.latitude));return c!==0?c:ue(Me(i.longitude),Me(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return lf(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,l,h,d;const p=i.fields||{},_=a.fields||{},b=(c=p[xo])===null||c===void 0?void 0:c.arrayValue,V=(l=_[xo])===null||l===void 0?void 0:l.arrayValue,N=ue(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:lf(b,V)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===no.mapValue&&a===no.mapValue)return 0;if(i===no.mapValue)return 1;if(a===no.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const _=Dc(l[p],d[p]);if(_!==0)return _;const b=rs(c[l[p]],h[d[p]]);if(b!==0)return b}return ue(l.length,d.length)})(n.mapValue,e.mapValue);default:throw te(23264,{le:t})}}function cf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Gn(n),r=Gn(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function lf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=rs(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function ss(n){return Nc(n)}function Nc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Gn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Qn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return X.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Nc(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Nc(t.fields[a])}`;return s+"}"})(n.mapValue):te(61005,{value:n})}function po(n){switch(Jn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ga(n);return e?16+po(e):16;case 5:return 2*n.stringValue.length;case 6:return Qn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+po(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Sr(r.fields,((i,a)=>{s+=i.length+po(a)})),s})(n.mapValue);default:throw te(13486,{value:n})}}function uf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Oc(n){return!!n&&"integerValue"in n}function wl(n){return!!n&&"arrayValue"in n}function hf(n){return!!n&&"nullValue"in n}function ff(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function go(n){return!!n&&"mapValue"in n}function AI(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[hg])===null||t===void 0?void 0:t.stringValue)===fg}function Ys(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Sr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Ys(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ys(n.arrayValue.values[t]);return e}return Object.assign({},n)}function bI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===wI}/**
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
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!go(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(t)}setAll(e){let t=Ye.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Ys(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());go(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];go(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Sr(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new St(Ys(this.value))}}function dg(n){const e=[];return Sr(n.fields,((t,r)=>{const s=new Ye([t]);if(go(r)){const i=dg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new kt(e)}/**
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
 */class ct{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,se.min(),se.min(),se.min(),St.empty(),0)}static newFoundDocument(e,t,r,s){return new ct(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new ct(e,2,t,se.min(),se.min(),St.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,se.min(),se.min(),St.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mo{constructor(e,t){this.position=e,this.inclusive=t}}function df(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=rs(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function pf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Zt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Lo{constructor(e,t="asc"){this.field=e,this.dir=t}}function SI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class pg{}class Be extends pg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new CI(e,t,r):t==="array-contains"?new kI(e,r):t==="in"?new DI(e,r):t==="not-in"?new NI(e,r):t==="array-contains-any"?new OI(e,r):new Be(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new PI(e,r):new VI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(rs(t,this.value)):t!==null&&Jn(this.value)===Jn(t)&&this.matchesComparison(rs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends pg{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Lt(e,t)}matches(e){return gg(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function gg(n){return n.op==="and"}function mg(n){return RI(n)&&gg(n)}function RI(n){for(const e of n.filters)if(e instanceof Lt)return!1;return!0}function xc(n){if(n instanceof Be)return n.field.canonicalString()+n.op.toString()+ss(n.value);if(mg(n))return n.filters.map((e=>xc(e))).join(",");{const e=n.filters.map((t=>xc(t))).join(",");return`${n.op}(${e})`}}function _g(n,e){return n instanceof Be?(function(r,s){return s instanceof Be&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)})(n,e):n instanceof Lt?(function(r,s){return s instanceof Lt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&_g(a,s.filters[c])),!0):!1})(n,e):void te(19439)}function yg(n){return n instanceof Be?(function(t){return`${t.field.canonicalString()} ${t.op} ${ss(t.value)}`})(n):n instanceof Lt?(function(t){return t.op.toString()+" {"+t.getFilters().map(yg).join(" ,")+"}"})(n):"Filter"}class CI extends Be{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class PI extends Be{constructor(e,t){super(e,"in",t),this.keys=vg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class VI extends Be{constructor(e,t){super(e,"not-in",t),this.keys=vg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function vg(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>X.fromName(r.referenceValue)))}class kI extends Be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wl(t)&&di(t.arrayValue,this.value)}}class DI extends Be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&di(this.value.arrayValue,t)}}class NI extends Be{constructor(e,t){super(e,"not-in",t)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!di(this.value.arrayValue,t)}}class OI extends Be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wl(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>di(this.value.arrayValue,r)))}}/**
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
 */class xI{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function gf(n,e=null,t=[],r=[],s=null,i=null,a=null){return new xI(n,e,t,r,s,i,a)}function Al(n){const e=ie(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>xc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),pa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>ss(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>ss(r))).join(",")),e.Pe=t}return e.Pe}function bl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!SI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!_g(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!pf(n.startAt,e.startAt)&&pf(n.endAt,e.endAt)}function Mc(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class bi{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function MI(n,e,t,r,s,i,a,c){return new bi(n,e,t,r,s,i,a,c)}function Sl(n){return new bi(n)}function mf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Eg(n){return n.collectionGroup!==null}function Zs(n){const e=ie(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new We(Ye.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Lo(i,r))})),t.has(Ye.keyField().canonicalString())||e.Te.push(new Lo(Ye.keyField(),r))}return e.Te}function Kt(n){const e=ie(n);return e.Ie||(e.Ie=LI(e,Zs(n))),e.Ie}function LI(n,e){if(n.limitType==="F")return gf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Lo(s.field,i)}));const t=n.endAt?new Mo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Mo(n.startAt.position,n.startAt.inclusive):null;return gf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Lc(n,e){const t=n.filters.concat([e]);return new bi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Fc(n,e,t){return new bi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ma(n,e){return bl(Kt(n),Kt(e))&&n.limitType===e.limitType}function Tg(n){return`${Al(Kt(n))}|lt:${n.limitType}`}function jr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>yg(s))).join(", ")}]`),pa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>ss(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>ss(s))).join(",")),`Target(${r})`})(Kt(n))}; limitType=${n.limitType})`}function _a(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=df(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,Zs(r),s)||r.endAt&&!(function(a,c,l){const h=df(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,Zs(r),s))})(n,e)}function FI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ig(n){return(e,t)=>{let r=!1;for(const s of Zs(n)){const i=UI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function UI(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?rs(l,h):te(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:n.dir})}}/**
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
 */class Rr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Sr(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return ig(this.inner)}size(){return this.innerSize}}/**
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
 */const BI=new Ne(X.comparator);function In(){return BI}const wg=new Ne(X.comparator);function Us(...n){let e=wg;for(const t of n)e=e.insert(t.key,t);return e}function Ag(n){let e=wg;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function fr(){return ei()}function bg(){return ei()}function ei(){return new Rr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const jI=new Ne(X.comparator),$I=new We(X.comparator);function fe(...n){let e=$I;for(const t of n)e=e.add(t);return e}const qI=new We(ue);function HI(){return qI}/**
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
 */function Rl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:No(e)?"-0":e}}function Sg(n){return{integerValue:""+n}}function zI(n,e){return yI(e)?Sg(e):Rl(n,e)}/**
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
 */class ya{constructor(){this._=void 0}}function WI(n,e,t){return n instanceof Fo?(function(s,i){const a={fields:{[cg]:{stringValue:ag},[ug]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Il(i)&&(i=ga(i)),i&&(a.fields[lg]=i),{mapValue:a}})(t,e):n instanceof pi?Cg(n,e):n instanceof gi?Pg(n,e):(function(s,i){const a=Rg(s,i),c=_f(a)+_f(s.Ee);return Oc(a)&&Oc(s.Ee)?Sg(c):Rl(s.serializer,c)})(n,e)}function KI(n,e,t){return n instanceof pi?Cg(n,e):n instanceof gi?Pg(n,e):t}function Rg(n,e){return n instanceof Uo?(function(r){return Oc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Fo extends ya{}class pi extends ya{constructor(e){super(),this.elements=e}}function Cg(n,e){const t=Vg(e);for(const r of n.elements)t.some((s=>Zt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class gi extends ya{constructor(e){super(),this.elements=e}}function Pg(n,e){let t=Vg(e);for(const r of n.elements)t=t.filter((s=>!Zt(s,r)));return{arrayValue:{values:t}}}class Uo extends ya{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function _f(n){return Me(n.integerValue||n.doubleValue)}function Vg(n){return wl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function GI(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof pi&&s instanceof pi||r instanceof gi&&s instanceof gi?ns(r.elements,s.elements,Zt):r instanceof Uo&&s instanceof Uo?Zt(r.Ee,s.Ee):r instanceof Fo&&s instanceof Fo})(n.transform,e.transform)}class QI{constructor(e,t){this.version=e,this.transformResults=t}}class gn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class va{}function kg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ng(n.key,gn.none()):new Si(n.key,n.data,gn.none());{const t=n.data,r=St.empty();let s=new We(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Cr(n.key,r,new kt(s.toArray()),gn.none())}}function JI(n,e,t){n instanceof Si?(function(s,i,a){const c=s.value.clone(),l=vf(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Cr?(function(s,i,a){if(!mo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=vf(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Dg(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function ti(n,e,t,r){return n instanceof Si?(function(i,a,c,l){if(!mo(i.precondition,a))return c;const h=i.value.clone(),d=Ef(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof Cr?(function(i,a,c,l){if(!mo(i.precondition,a))return c;const h=Ef(i.fieldTransforms,l,a),d=a.data;return d.setAll(Dg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,a,c){return mo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function XI(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Rg(r.transform,s||null);i!=null&&(t===null&&(t=St.empty()),t.set(r.field,i))}return t||null}function yf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ns(r,s,((i,a)=>GI(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Si extends va{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cr extends va{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dg(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function vf(n,e,t){const r=new Map;Te(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,KI(a,c,t[s]))}return r}function Ef(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,WI(i,a,e))}return r}class Ng extends va{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YI extends va{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ZI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&JI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ti(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ti(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=bg();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=kg(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(se.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),fe())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,((t,r)=>yf(t,r)))&&ns(this.baseMutations,e.baseMutations,((t,r)=>yf(t,r)))}}class Cl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Te(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return jI})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Cl(e,t,r,s)}}/**
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
 */class ew{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class tw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Fe,de;function nw(n){switch(n){case k.OK:return te(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return te(15467,{code:n})}}function Og(n){if(n===void 0)return Tn("GRPC error has no .code"),k.UNKNOWN;switch(n){case Fe.OK:return k.OK;case Fe.CANCELLED:return k.CANCELLED;case Fe.UNKNOWN:return k.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return k.INTERNAL;case Fe.UNAVAILABLE:return k.UNAVAILABLE;case Fe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Fe.NOT_FOUND:return k.NOT_FOUND;case Fe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Fe.ABORTED:return k.ABORTED;case Fe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Fe.DATA_LOSS:return k.DATA_LOSS;default:return te(39323,{code:n})}}(de=Fe||(Fe={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const rw=new $n([4294967295,4294967295],0);function Tf(n){const e=tg().encode(n),t=new Kp;return t.update(e),new Uint8Array(t.digest())}function If(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $n([t,r],0),new $n([s,i],0)]}class Pl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Bs(`Invalid padding: ${t}`);if(r<0)throw new Bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=$n.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply($n.fromNumber(r)));return s.compare(rw)===1&&(s=new $n([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Tf(e),[r,s]=If(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Pl(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=Tf(e),[r,s]=If(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ea{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ri.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ea(se.min(),s,new Ne(ue),In(),fe())}}class Ri{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ri(r,t,fe(),fe(),fe())}}/**
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
 */class _o{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class xg{constructor(e,t){this.targetId=e,this.De=t}}class Mg{constructor(e,t,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class wf{constructor(){this.ve=0,this.Ce=Af(),this.Fe=et.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=fe(),t=fe(),r=fe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}})),new Ri(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Af()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Te(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class sw{constructor(e){this.We=e,this.Ge=new Map,this.ze=In(),this.je=ro(),this.Je=ro(),this.He=new Ne(ue)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Mc(i))if(r===0){const a=new X(i.path);this.Xe(t,a,ct.newNoDocument(a,se.min()))}else Te(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),l=c?this.ut(c,e,a):1;if(l!==0){this.rt(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Qn(r).toUint8Array()}catch(l){if(l instanceof og)return Wn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Pl(a,s,i)}catch(l){return Wn(l instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&Mc(c.target)){const l=new X(c.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,ct.newNoDocument(l,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=fe();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.st(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new Ea(e,t,this.He,this.ze,r);return this.ze=In(),this.je=ro(),this.Je=ro(),this.He=new Ne(ue),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new wf,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new We(ue),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new We(ue),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||W("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new wf),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ro(){return new Ne(X.comparator)}function Af(){return new Ne(X.comparator)}const iw={asc:"ASCENDING",desc:"DESCENDING"},ow={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aw={and:"AND",or:"OR"};class cw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Uc(n,e){return n.useProto3Json||pa(e)?e:{value:e}}function Bo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function lw(n,e){return Bo(n,e.toTimestamp())}function Gt(n){return Te(!!n,49232),se.fromTimestamp((function(t){const r=Gn(t);return new Ve(r.seconds,r.nanos)})(n))}function Vl(n,e){return Bc(n,e).canonicalString()}function Bc(n,e){const t=(function(s){return new Ce(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Fg(n){const e=Ce.fromString(n);return Te(qg(e),10190,{key:e.toString()}),e}function jc(n,e){return Vl(n.databaseId,e.path)}function oc(n,e){const t=Fg(e);if(t.get(1)!==n.databaseId.projectId)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(Bg(t))}function Ug(n,e){return Vl(n.databaseId,e)}function uw(n){const e=Fg(n);return e.length===4?Ce.emptyPath():Bg(e)}function $c(n){return new Ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bg(n){return Te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function bf(n,e,t){return{name:jc(n,e),fields:t.value.mapValue.fields}}function hw(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Te(d===void 0||typeof d=="string",58123),et.fromBase64String(d||"")):(Te(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),et.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?k.UNKNOWN:Og(h.code);return new K(d,h.message||"")})(a);t=new Mg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=oc(n,r.document.name),i=Gt(r.document.updateTime),a=r.document.createTime?Gt(r.document.createTime):se.min(),c=new St({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];t=new _o(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=oc(n,r.document),i=r.readTime?Gt(r.readTime):se.min(),a=ct.newNoDocument(s,i),c=r.removedTargetIds||[];t=new _o([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=oc(n,r.document),i=r.removedTargetIds||[];t=new _o([],i,s,null)}else{if(!("filter"in e))return te(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new tw(s,i),c=r.targetId;t=new xg(c,a)}}return t}function fw(n,e){let t;if(e instanceof Si)t={update:bf(n,e.key,e.value)};else if(e instanceof Ng)t={delete:jc(n,e.key)};else if(e instanceof Cr)t={update:bf(n,e.key,e.data),updateMask:Tw(e.fieldMask)};else{if(!(e instanceof YI))return te(16599,{Rt:e.type});t={verify:jc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Fo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof pi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof gi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Uo)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw te(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:lw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)})(n,e.precondition)),t}function dw(n,e){return n&&n.length>0?(Te(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Gt(s.updateTime):Gt(i);return a.isEqual(se.min())&&(a=Gt(i)),new QI(a,s.transformResults||[])})(t,e)))):[]}function pw(n,e){return{documents:[Ug(n,e.path)]}}function gw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ug(n,s);const i=(function(h){if(h.length!==0)return $g(Lt.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(_){return{field:$r(_.field),direction:yw(_.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Uc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:s}}function mw(n){let e=uw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Te(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const _=jg(p);return _ instanceof Lt&&mg(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((_=>(function(V){return new Lo(qr(V.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(_)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let _;return _=typeof p=="object"?p.value:p,pa(_)?null:_})(t.limit));let l=null;t.startAt&&(l=(function(p){const _=!!p.before,b=p.values||[];return new Mo(b,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const _=!p.before,b=p.values||[];return new Mo(b,_)})(t.endAt)),MI(e,s,a,i,c,"F",l,h)}function _w(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function jg(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=qr(t.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=qr(t.unaryFilter.field);return Be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qr(t.unaryFilter.field);return Be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=qr(t.unaryFilter.field);return Be.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Be.create(qr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Lt.create(t.compositeFilter.filters.map((r=>jg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}})(t.compositeFilter.op))})(n):te(30097,{filter:n})}function yw(n){return iw[n]}function vw(n){return ow[n]}function Ew(n){return aw[n]}function $r(n){return{fieldPath:n.canonicalString()}}function qr(n){return Ye.fromServerFormat(n.fieldPath)}function $g(n){return n instanceof Be?(function(t){if(t.op==="=="){if(ff(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NAN"}};if(hf(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ff(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NAN"}};if(hf(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(t.field),op:vw(t.op),value:t.value}}})(n):n instanceof Lt?(function(t){const r=t.getFilters().map((s=>$g(s)));return r.length===1?r[0]:{compositeFilter:{op:Ew(t.op),filters:r}}})(n):te(54877,{filter:n})}function Tw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function qg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Fn{constructor(e,t,r,s,i=se.min(),a=se.min(),c=et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Iw{constructor(e){this.gt=e}}function ww(n){const e=mw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fc(e,e.limit,"L"):e}/**
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
 */class Aw{constructor(){this.Dn=new bw}addToCollectionParentIndex(e,t){return this.Dn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Kn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Kn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class bw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new We(Ce.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new We(Ce.comparator)).toArray()}}/**
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
 */const Sf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hg=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(Hg,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
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
 */class is{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new is(0)}static ur(){return new is(-1)}}/**
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
 */const Rf="LruGarbageCollector",Sw=1048576;function Cf([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class Rw{constructor(e){this.Tr=e,this.buffer=new We(Cf),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Cf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Cw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(Rf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ds(t)?W(Rf,"Ignoring IndexedDB error during garbage collection: ",t):await fs(t)}await this.Rr(3e5)}))}}class Pw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return D.resolve(da.ue);const r=new Rw(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Sf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sf):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),Br()<=he.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Vw(n,e){return new Pw(n,e)}/**
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
 */class kw{constructor(){this.changes=new Rr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Dw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Nw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&ti(r.mutation,s,kt.empty(),Ve.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,fe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=fe()){const s=fr();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Us();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=fr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,fe())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=In();const a=ei(),c=(function(){return ei()})();return t.forEach(((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Cr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ti(d.mutation,h,d.mutation.getFieldMask(),Ve.now())):a.set(h.key,kt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,d)=>a.set(h,d))),t.forEach(((h,d)=>{var p;return c.set(h,new Dw(d,(p=a.get(h))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=ei();let s=new Ne(((a,c)=>a-c)),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let d=r.get(l)||kt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||fe()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=bg();d.forEach((_=>{if(!i.has(_)){const b=kg(t.get(_),r.get(_));b!==null&&p.set(_,b),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return D.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Eg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(fr());let c=ui,l=i;return a.next((h=>D.forEach(h,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next((_=>{l=l.insert(d,_)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,fe()))).next((d=>({batchId:c,changes:Ag(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((r=>{let s=Us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Us();return this.indexManager.getCollectionParents(e,i).next((c=>D.forEach(c,(l=>{const h=(function(p,_){return new bi(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((p,_)=>{a=a.insert(p,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ct.newInvalidDocument(d)))}));let c=Us();return a.forEach(((l,h)=>{const d=i.get(l);d!==void 0&&ti(d.mutation,h,kt.empty(),Ve.now()),_a(t,h)&&(c=c.insert(l,h))})),c}))}}/**
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
 */class Ow{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return D.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Gt(s.createTime)}})(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:ww(s.bundledQuery),readTime:Gt(s.readTime)}})(t)),D.resolve()}}/**
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
 */class xw{constructor(){this.overlays=new Ne(X.comparator),this.kr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=fr();return D.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=fr(),i=t.length+1,a=new X(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ne(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=fr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=fr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=s)););return D.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ew(t,r));let i=this.kr.get(t);i===void 0&&(i=fe(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class kl{constructor(){this.qr=new We(Ke.Qr),this.$r=new We(Ke.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Ke(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Ke(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new X(new Ce([])),r=new Ke(t,e),s=new Ke(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new X(new Ce([])),r=new Ke(t,e),s=new Ke(t,e+1);let i=fe();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Ke(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return X.comparator(e.key,t.key)||ue(e.Hr,t.Hr)}static Ur(e,t){return ue(e.Hr,t.Hr)||X.comparator(e.key,t.key)}}/**
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
 */class Lw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new We(Ke.Qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ZI(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new Ke(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Tl:this.er-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ke(t,0),s=new Ke(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new We(ue);return t.forEach((s=>{const i=new Ke(s,0),a=new Ke(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),D.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new Ke(new X(i),0);let c=new We(ue);return this.Yr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),a),D.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Te(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return D.forEach(t.mutations,(s=>{const i=new Ke(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Ke(t,0),s=this.Yr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Fw{constructor(e){this.ni=e,this.docs=(function(){return new Ne(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let r=In();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))})),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=In();const a=t.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||pI(dI(d),r)<=0||(s.has(d.key)||_a(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){te(9500)}ri(e,t){return D.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Uw(this)}getSize(e){return D.resolve(this.size)}}class Uw extends kw{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),D.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class Bw{constructor(e){this.persistence=e,this.ii=new Rr((t=>Al(t)),bl),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.si=0,this.oi=new kl,this.targetCount=0,this._i=is.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),D.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new is(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.hr(t),D.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),D.waitFor(i).next((()=>s))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.oi.containsKey(t))}}/**
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
 */class zg{constructor(e,t){this.ai={},this.overlays={},this.ui=new da(0),this.ci=!1,this.ci=!0,this.li=new Mw,this.referenceDelegate=e(this),this.hi=new Bw(this),this.indexManager=new Aw,this.remoteDocumentCache=(function(s){return new Fw(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Iw(t),this.Ti=new Ow(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new xw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Lw(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){W("MemoryPersistence","Starting transaction:",e);const s=new jw(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return D.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class jw extends mI{constructor(e){super(),this.currentSequenceNumber=e}}class Dl{constructor(e){this.persistence=e,this.Ai=new kl,this.Ri=null}static Vi(e){return new Dl(e)}get mi(){if(this.Ri)return this.Ri;throw te(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.mi,(r=>{const s=X.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,se.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return D.or([()=>D.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class jo{constructor(e,t){this.persistence=e,this.gi=new Rr((r=>vI(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Vw(this,t)}static Vi(e,t){return new jo(e,t)}Ii(){}di(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return D.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?D.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,se.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=po(e.data.value)),t}Sr(e,t,r){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Nl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=fe(),s=fe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Nl(e,t.fromCache,r,s)}}/**
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
 */class $w{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class qw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return FE()?8:_I(ut())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new $w;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Br()<=he.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",jr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(Br()<=he.DEBUG&&W("QueryEngine","Query:",jr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Br()<=he.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",jr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):D.resolve())}ps(e,t){if(mf(t))return D.resolve(null);let r=Kt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Fc(t,null,"F"),r=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=fe(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(t,c);return this.Ds(t,h,a,l.readTime)?this.ps(e,Fc(t,null,"F")):this.vs(e,h,t,l)}))))})))))}ys(e,t,r,s){return mf(t)||s.isEqual(se.min())?D.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?D.resolve(null):(Br()<=he.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jr(t)),this.vs(e,a,t,fI(s,ui)).next((c=>c)))}))}bs(e,t){let r=new We(Ig(e));return t.forEach(((s,i)=>{_a(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Br()<=he.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",jr(t)),this.gs.getDocumentsMatchingQuery(e,t,Kn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Ol="LocalStore",Hw=3e8;class zw{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Ne(ue),this.Ms=new Rr((i=>Al(i)),bl),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Nw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Ww(n,e,t,r){return new zw(n,e,t,r)}async function Wg(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=fe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function Kw(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,d){const p=h.batch,_=p.keys();let b=D.resolve();return _.forEach((V=>{b=b.next((()=>d.getEntry(l,V))).next((N=>{const x=h.docVersions.get(V);Te(x!==null,48541),N.version.compareTo(x)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),d.addEntry(N)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=fe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Kg(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Gw(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((d,p)=>{const _=s.get(p);if(!_)return;c.push(t.hi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.hi.addMatchingKeys(i,d.addedDocuments,p))));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(et.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),(function(N,x,Q){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Hw?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0})(_,b,d)&&c.push(t.hi.updateTargetData(i,b))}));let l=In(),h=fe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(Qw(i,a,e.documentUpdates).next((d=>{l=d.Ls,h=d.ks}))),!r.isEqual(se.min())){const d=t.hi.getLastRemoteSnapshotVersion(i).next((p=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return D.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(t.Fs=s,i)))}function Qw(n,e,t){let r=fe(),s=fe();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=In();return t.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):W(Ol,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Ls:a,ks:s}}))}function Jw(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Tl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Xw(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,D.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new Fn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function qc(n,e,t){const r=ie(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!ds(a))throw a;W(Ol,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Pf(n,e,t){const r=ie(n);let s=se.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const p=ie(l),_=p.Ms.get(d);return _!==void 0?D.resolve(p.Fs.get(_)):p.hi.getTargetData(h,d)})(r,a,Kt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:se.min(),t?i:fe()))).next((c=>(Yw(r,FI(e),c),{documents:c,qs:i})))))}function Yw(n,e,t){let r=n.xs.get(e)||se.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Vf{constructor(){this.activeTargetIds=HI()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zw{constructor(){this.Fo=new Vf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Vf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class eA{xo(e){}shutdown(){}}/**
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
 */const kf="ConnectivityMonitor";class Df{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(kf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(kf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let so=null;function Hc(){return so===null?so=(function(){return 268435456+Math.round(2147483648*Math.random())})():so++,"0x"+so.toString(16)}/**
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
 */const ac="RestConnection",tA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class nA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Oo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Hc(),c=this.Go(e,t.toUriEncodedString());W(ac,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:h}=new URL(c),d=ls(h);return this.jo(e,c,l,r,d).then((p=>(W(ac,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Wn(ac,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+hs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=tA[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class rA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const st="WebChannelConnection";class sA extends nA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Hc();return new Promise(((c,l)=>{const h=new Gp;h.setWithCredentials(!0),h.listenOnce(Qp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case fo.NO_ERROR:const p=h.getResponseJson();W(st,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case fo.TIMEOUT:W(st,`RPC '${e}' ${a} timed out`),l(new K(k.DEADLINE_EXCEEDED,"Request time out"));break;case fo.HTTP_ERROR:const _=h.getStatus();if(W(st,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const N=(function(Q){const $=Q.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf($)>=0?$:k.UNKNOWN})(V.status);l(new K(N,V.message))}else l(new K(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new K(k.UNAVAILABLE,"Connection failed."));break;default:te(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{W(st,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);W(st,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)}))}P_(e,t,r){const s=Hc(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Yp(),c=Xp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");W(st,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.T_(p);let _=!1,b=!1;const V=new rA({Ho:x=>{b?W(st,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(_||(W(st,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),W(st,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},Yo:()=>p.close()}),N=(x,Q,$)=>{x.listen(Q,(G=>{try{$(G)}catch(z){setTimeout((()=>{throw z}),0)}}))};return N(p,Fs.EventType.OPEN,(()=>{b||(W(st,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),N(p,Fs.EventType.CLOSE,(()=>{b||(b=!0,W(st,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(p))})),N(p,Fs.EventType.ERROR,(x=>{b||(b=!0,Wn(st,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),V.__(new K(k.UNAVAILABLE,"The operation could not be completed")))})),N(p,Fs.EventType.MESSAGE,(x=>{var Q;if(!b){const $=x.data[0];Te(!!$,16349);const G=$,z=(G==null?void 0:G.error)||((Q=G[0])===null||Q===void 0?void 0:Q.error);if(z){W(st,`RPC '${e}' stream ${s} received error:`,z);const oe=z.status;let ye=(function(y){const T=Fe[y];if(T!==void 0)return Og(T)})(oe),I=z.message;ye===void 0&&(ye=k.INTERNAL,I="Unknown error status: "+oe+" with message "+z.message),b=!0,V.__(new K(ye,I)),p.close()}else W(st,`RPC '${e}' stream ${s} received:`,$),V.a_($)}})),N(c,Jp.STAT_EVENT,(x=>{x.stat===kc.PROXY?W(st,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===kc.NOPROXY&&W(st,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function cc(){return typeof document<"u"?document:null}/**
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
 */function Ta(n){return new cw(n,!0)}/**
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
 */class Gg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Nf="PersistentStream";class Qg{constructor(e,t,r,s,i,a,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Gg(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Tn(t.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new K(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return W(Nf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(W(Nf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iA extends Qg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=hw(this.serializer,e),r=(function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Gt(a.readTime):se.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=$c(this.serializer),t.addTarget=(function(i,a){let c;const l=a.target;if(c=Mc(l)?{documents:pw(i,l)}:{query:gw(i,l).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Lg(i,a.resumeToken);const h=Uc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){c.readTime=Bo(i,a.snapshotVersion.toTimestamp());const h=Uc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=_w(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=$c(this.serializer),t.removeTarget=e,this.k_(t)}}class oA extends Qg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=dw(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=$c(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>fw(this.serializer,r)))};this.k_(t)}}/**
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
 */class aA{}class cA extends aA{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Bc(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(k.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,Bc(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(k.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class lA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Tn(t),this._a=!1):W("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Ir="RemoteStore";class uA{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Pr(this)&&(W(Ir,"Restarting streams for network reachability change."),await(async function(l){const h=ie(l);h.Ia.add(4),await Ci(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Ia(h)})(this))}))})),this.Aa=new lA(r,s)}}async function Ia(n){if(Pr(n))for(const e of n.da)await e(!0)}async function Ci(n){for(const e of n.da)await e(!1)}function Jg(n,e){const t=ie(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Fl(t)?Ll(t):ps(t).x_()&&Ml(t,e))}function xl(n,e){const t=ie(n),r=ps(t);t.Ta.delete(e),r.x_()&&Xg(t,e),t.Ta.size===0&&(r.x_()?r.B_():Pr(t)&&t.Aa.set("Unknown"))}function Ml(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ps(n).H_(e)}function Xg(n,e){n.Ra.$e(e),ps(n).Y_(e)}function Ll(n){n.Ra=new sw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ps(n).start(),n.Aa.aa()}function Fl(n){return Pr(n)&&!ps(n).M_()&&n.Ta.size>0}function Pr(n){return ie(n).Ia.size===0}function Yg(n){n.Ra=void 0}async function hA(n){n.Aa.set("Online")}async function fA(n){n.Ta.forEach(((e,t)=>{Ml(n,e)}))}async function dA(n,e){Yg(n),Fl(n)?(n.Aa.la(e),Ll(n)):n.Aa.set("Unknown")}async function pA(n,e,t){if(n.Aa.set("Online"),e instanceof Mg&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){W(Ir,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $o(n,r)}else if(e instanceof _o?n.Ra.Ye(e):e instanceof xg?n.Ra.it(e):n.Ra.et(e),!t.isEqual(se.min()))try{const r=await Kg(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const d=i.Ta.get(l);if(!d)return;i.Ta.set(l,d.withResumeToken(et.EMPTY_BYTE_STRING,d.snapshotVersion)),Xg(i,l);const p=new Fn(d.target,l,h,d.sequenceNumber);Ml(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){W(Ir,"Failed to raise snapshot:",r),await $o(n,r)}}async function $o(n,e,t){if(!ds(e))throw e;n.Ia.add(1),await Ci(n),n.Aa.set("Offline"),t||(t=()=>Kg(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{W(Ir,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Ia(n)}))}function Zg(n,e){return e().catch((t=>$o(n,t,e)))}async function wa(n){const e=ie(n),t=Xn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Tl;for(;gA(e);)try{const s=await Jw(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,mA(e,s)}catch(s){await $o(e,s)}em(e)&&tm(e)}function gA(n){return Pr(n)&&n.Pa.length<10}function mA(n,e){n.Pa.push(e);const t=Xn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function em(n){return Pr(n)&&!Xn(n).M_()&&n.Pa.length>0}function tm(n){Xn(n).start()}async function _A(n){Xn(n).na()}async function yA(n){const e=Xn(n);for(const t of n.Pa)e.X_(t.mutations)}async function vA(n,e,t){const r=n.Pa.shift(),s=Cl.from(r,e,t);await Zg(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await wa(n)}async function EA(n,e){e&&Xn(n).Z_&&await(async function(r,s){if((function(a){return nw(a)&&a!==k.ABORTED})(s.code)){const i=r.Pa.shift();Xn(r).N_(),await Zg(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await wa(r)}})(n,e),em(n)&&tm(n)}async function Of(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),W(Ir,"RemoteStore received new credentials");const r=Pr(t);t.Ia.add(3),await Ci(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ia(t)}async function TA(n,e){const t=ie(n);e?(t.Ia.delete(2),await Ia(t)):e||(t.Ia.add(2),await Ci(t),t.Aa.set("Unknown"))}function ps(n){return n.Va||(n.Va=(function(t,r,s){const i=ie(t);return i.ia(),new iA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:hA.bind(null,n),e_:fA.bind(null,n),n_:dA.bind(null,n),J_:pA.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Fl(n)?Ll(n):n.Aa.set("Unknown")):(await n.Va.stop(),Yg(n))}))),n.Va}function Xn(n){return n.ma||(n.ma=(function(t,r,s){const i=ie(t);return i.ia(),new oA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:_A.bind(null,n),n_:EA.bind(null,n),ea:yA.bind(null,n),ta:vA.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await wa(n)):(await n.ma.stop(),n.Pa.length>0&&(W(Ir,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Ul{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Ul(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bl(n,e){if(Tn("AsyncQueue",`${e}: ${n}`),ds(n))return new K(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Qr{static emptySet(e){return new Qr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=Us(),this.sortedSet=new Ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Qr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class xf{constructor(){this.fa=new Ne(X.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):te(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class os{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new os(e,t,Qr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class IA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class wA{constructor(){this.queries=Mf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=Mf(),i.forEach(((a,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new K(k.ABORTED,"Firestore shutting down"))}}function Mf(){return new Rr((n=>Tg(n)),ma)}async function nm(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new IA,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Bl(a,`Initialization of query '${jr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&jl(t)}async function rm(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function AA(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&jl(t)}function bA(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function jl(n){n.Da.forEach((e=>{e.next()}))}var zc,Lf;(Lf=zc||(zc={})).Fa="default",Lf.Cache="cache";class sm{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==zc.Cache}}/**
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
 */class im{constructor(e){this.key=e}}class om{constructor(e){this.key=e}}class SA{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=fe(),this.mutatedKeys=fe(),this.Xa=Ig(e),this.eu=new Qr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new xf,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const _=s.get(d),b=_a(this.query,p)?p:null,V=!!_&&this.mutatedKeys.has(_.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let x=!1;_&&b?_.data.isEqual(b.data)?V!==N&&(r.track({type:3,doc:b}),x=!0):this.iu(_,b)||(r.track({type:2,doc:b}),x=!0,(l&&this.Xa(b,l)>0||h&&this.Xa(b,h)<0)&&(c=!0)):!_&&b?(r.track({type:0,doc:b}),x=!0):_&&!b&&(r.track({type:1,doc:_}),x=!0,(l||h)&&(c=!0)),x&&(b?(a=a.add(b),i=N?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,p)=>(function(b,V){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{At:x})}};return N(b)-N(V)})(d.type,p.type)||this.Xa(d.doc,p.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,h=l!==this.Ya;return this.Ya=l,a.length!==0||h?{snapshot:new os(this.query,e.eu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new xf,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=fe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new om(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new im(r))})),t}uu(e){this.Ha=e.qs,this.Za=fe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return os.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const $l="SyncEngine";class RA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class CA{constructor(e){this.key=e,this.lu=!1}}class PA{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Rr((c=>Tg(c)),ma),this.Tu=new Map,this.Iu=new Set,this.du=new Ne(X.comparator),this.Eu=new Map,this.Au=new kl,this.Ru={},this.Vu=new Map,this.mu=is.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function VA(n,e,t=!0){const r=fm(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await am(r,e,t,!0),s}async function kA(n,e){const t=fm(n);await am(t,e,!0,!1)}async function am(n,e,t,r){const s=await Xw(n.localStore,Kt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await DA(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Jg(n.remoteStore,s),c}async function DA(n,e,t,r,s){n.gu=(p,_,b)=>(async function(N,x,Q,$){let G=x.view.nu(Q);G.Ds&&(G=await Pf(N.localStore,x.query,!1).then((({documents:I})=>x.view.nu(I,G))));const z=$&&$.targetChanges.get(x.targetId),oe=$&&$.targetMismatches.get(x.targetId)!=null,ye=x.view.applyChanges(G,N.isPrimaryClient,z,oe);return Uf(N,x.targetId,ye._u),ye.snapshot})(n,p,_,b);const i=await Pf(n.localStore,e,!0),a=new SA(e,i.qs),c=a.nu(i.documents),l=Ri.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);Uf(n,t,h._u);const d=new RA(e,t,a);return n.Pu.set(e,d),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function NA(n,e,t){const r=ie(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!ma(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await qc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&xl(r.remoteStore,s.targetId),Wc(r,s.targetId)})).catch(fs)):(Wc(r,s.targetId),await qc(r.localStore,s.targetId,!0))}async function OA(n,e){const t=ie(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),xl(t.remoteStore,r.targetId))}async function xA(n,e,t){const r=$A(n);try{const s=await(function(a,c){const l=ie(a),h=Ve.now(),d=c.reduce(((b,V)=>b.add(V.key)),fe());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=In(),N=fe();return l.Os.getEntries(b,d).next((x=>{V=x,V.forEach(((Q,$)=>{$.isValidDocument()||(N=N.add(Q))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,V))).next((x=>{p=x;const Q=[];for(const $ of c){const G=XI($,p.get($.key).overlayedDocument);G!=null&&Q.push(new Cr($.key,G,dg(G.value.mapValue),gn.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,Q,c)})).next((x=>{_=x;const Q=x.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(b,x.batchId,Q)}))})).then((()=>({batchId:_.batchId,changes:Ag(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Ru[a.currentUser.toKey()];h||(h=new Ne(ue)),h=h.insert(c,l),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,t),await Pi(r,s.changes),await wa(r.remoteStore)}catch(s){const i=Bl(s,"Failed to persist write");t.reject(i)}}async function cm(n,e){const t=ie(n);try{const r=await Gw(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Te(a.lu,14607):s.removedDocuments.size>0&&(Te(a.lu,42227),a.lu=!1))})),await Pi(t,r,e)}catch(r){await fs(r)}}function Ff(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach(((d,p)=>{for(const _ of p.wa)_.va(c)&&(h=!0)})),h&&jl(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MA(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Ne(X.comparator);a=a.insert(i,ct.newNoDocument(i,se.min()));const c=fe().add(i),l=new Ea(se.min(),new Map,new Ne(ue),a,c);await cm(r,l),r.du=r.du.remove(i),r.Eu.delete(e),ql(r)}else await qc(r.localStore,e,!1).then((()=>Wc(r,e,t))).catch(fs)}async function LA(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await Kw(t.localStore,e);um(t,r,null),lm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Pi(t,s)}catch(s){await fs(s)}}async function FA(n,e,t){const r=ie(n);try{const s=await(function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Te(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>l.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);um(r,e,t),lm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Pi(r,s)}catch(s){await fs(s)}}function lm(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function um(n,e,t){const r=ie(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Wc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||hm(n,r)}))}function hm(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(xl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),ql(n))}function Uf(n,e,t){for(const r of t)r instanceof im?(n.Au.addReference(r.key,e),UA(n,r)):r instanceof om?(W($l,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||hm(n,r.key)):te(19791,{yu:r})}function UA(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(W($l,"New document in limbo: "+t),n.Iu.add(r),ql(n))}function ql(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new X(Ce.fromString(e)),r=n.mu.next();n.Eu.set(r,new CA(t)),n.du=n.du.insert(t,r),Jg(n.remoteStore,new Fn(Kt(Sl(t.path)),r,"TargetPurposeLimboResolution",da.ue))}}async function Pi(n,e,t){const r=ie(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{a.push(r.gu(l,e,t).then((h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Nl.Es(l.targetId,h);i.push(p)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(l,h){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>D.forEach(h,(_=>D.forEach(_.Is,(b=>d.persistence.referenceDelegate.addReference(p,_.targetId,b))).next((()=>D.forEach(_.ds,(b=>d.persistence.referenceDelegate.removeReference(p,_.targetId,b)))))))))}catch(p){if(!ds(p))throw p;W(Ol,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const b=d.Fs.get(_),V=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(V);d.Fs=d.Fs.insert(_,N)}}})(r.localStore,i))}async function BA(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){W($l,"User change. New user:",e.toKey());const r=await Wg(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new K(k.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pi(t,r.Bs)}}function jA(n,e){const t=ie(n),r=t.Eu.get(e);if(r&&r.lu)return fe().add(r.key);{let s=fe();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function fm(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=cm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MA.bind(null,e),e.hu.J_=AA.bind(null,e.eventManager),e.hu.pu=bA.bind(null,e.eventManager),e}function $A(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FA.bind(null,e),e}class qo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ta(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Ww(this.persistence,new qw,e.initialUser,this.serializer)}Du(e){return new zg(Dl.Vi,this.serializer)}bu(e){return new Zw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qo.provider={build:()=>new qo};class qA extends qo{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Te(this.persistence.referenceDelegate instanceof jo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Cw(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new zg((r=>jo.Vi(r,t)),this.serializer)}}class Kc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ff(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BA.bind(null,this.syncEngine),await TA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new wA})()}createDatastore(e){const t=Ta(e.databaseInfo.databaseId),r=(function(i){return new sA(i)})(e.databaseInfo);return(function(i,a,c,l){return new cA(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new uA(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ff(this.syncEngine,t,0)),(function(){return Df.C()?new Df:new eA})())}createSyncEngine(e,t){return(function(s,i,a,c,l,h,d){const p=new PA(s,i,a,c,l,h);return d&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=ie(s);W(Ir,"RemoteStore shutting down."),i.Ia.add(5),await Ci(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Kc.provider={build:()=>new Kc};/**
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
 *//**
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
 */class dm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Yn="FirestoreClient";class HA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=El.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{W(Yn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(W(Yn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Bl(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function lc(n,e){n.asyncQueue.verifyOperationInProgress(),W(Yn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Wg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Wn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Wn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Bf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await zA(n);W(Yn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Of(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Of(e.remoteStore,s))),n._onlineComponents=e}async function zA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W(Yn,"Using user provided OfflineComponentProvider");try{await lc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Wn("Error using user provided cache. Falling back to memory cache: "+t),await lc(n,new qo)}}else W(Yn,"Using default OfflineComponentProvider"),await lc(n,new qA(void 0));return n._offlineComponents}async function pm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W(Yn,"Using user provided OnlineComponentProvider"),await Bf(n,n._uninitializedComponentsProvider._online)):(W(Yn,"Using default OnlineComponentProvider"),await Bf(n,new Kc))),n._onlineComponents}function WA(n){return pm(n).then((e=>e.syncEngine))}async function Gc(n){const e=await pm(n),t=e.eventManager;return t.onListen=VA.bind(null,e.syncEngine),t.onUnlisten=NA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=OA.bind(null,e.syncEngine),t}function KA(n,e,t={}){const r=new qn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const d=new dm({next:_=>{d.Ou(),a.enqueueAndForget((()=>rm(i,p))),_.fromCache&&l.source==="server"?h.reject(new K(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new sm(c,d,{includeMetadataChanges:!0,ka:!0});return nm(i,p)})(await Gc(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function gm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const jf=new Map;/**
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
 */const mm="firestore.googleapis.com",$f=!0;class qf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mm,this.ssl=$f}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:$f;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Sw)throw new K(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Aa{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new nI;switch(r.type){case"firstParty":return new oI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=jf.get(t);r&&(W("ComponentProvider","Removing Datastore"),jf.delete(t),r.terminate())})(this),Promise.resolve()}}function GA(n,e,t,r={}){var s;n=Hn(n,Aa);const i=ls(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(Up(`https://${l}`),Bp("Firestore",!0)),a.host!==mm&&a.host!==l&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!vr(h,c)&&(n._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ot.MOCK_USER;else{d=PE(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new K(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(_)}n._authCredentials=new rI(new eg(d,p))}}/**
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
 */class Vr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class $e{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ai(t,$e._jsonSchema))return new $e(e,r||null,new X(Ce.fromString(t.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:je("string",$e._jsonSchemaVersion),referencePath:je("string")};class zn extends Vr{constructor(e,t,r){super(e,t,Sl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new X(e))}withConverter(e){return new zn(this.firestore,e,this._path)}}function io(n,e,...t){if(n=mt(n),ng("collection","path",e),n instanceof Aa){const r=Ce.fromString(e,...t);return tf(r),new zn(n,null,r)}{if(!(n instanceof $e||n instanceof zn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return tf(r),new zn(n.firestore,null,r)}}function QA(n,e,...t){if(n=mt(n),arguments.length===1&&(e=El.newId()),ng("doc","path",e),n instanceof Aa){const r=Ce.fromString(e,...t);return ef(r),new $e(n,null,new X(r))}{if(!(n instanceof $e||n instanceof zn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return ef(r),new $e(n.firestore,n instanceof zn?n.converter:null,new X(r))}}/**
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
 */const Hf="AsyncQueue";class zf{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Gg(this,"async_queue_retry"),this.oc=()=>{const r=cc();r&&W(Hf,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=cc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=cc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new qn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ds(e))throw e;W(Hf,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Tn("INTERNAL UNHANDLED ERROR: ",Wf(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Ul.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&te(47125,{hc:Wf(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Wf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function Kf(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class mi extends Aa{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new zf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zf(e),this._firestoreClient=void 0,await e}}}function JA(n,e){const t=typeof n=="object"?n:Hp(),r=typeof n=="string"?n:Oo,s=yl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=RE("firestore");i&&GA(s,...i)}return s}function Hl(n){if(n._terminated)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||XA(n),n._firestoreClient}function XA(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,l,h,d){return new II(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,gm(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new HA(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
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
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(et.fromBase64String(e))}catch(t){throw new K(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rt(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ai(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:je("string",Rt._jsonSchemaVersion),bytes:je("string")};/**
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
 */class zl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _m{constructor(e){this._methodName=e}}/**
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
 */class Qt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qt._jsonSchemaVersion}}static fromJSON(e){if(Ai(e,Qt._jsonSchema))return new Qt(e.latitude,e.longitude)}}Qt._jsonSchemaVersion="firestore/geoPoint/1.0",Qt._jsonSchema={type:je("string",Qt._jsonSchemaVersion),latitude:je("number"),longitude:je("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Jt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ai(e,Jt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Jt(e.vectorValues);throw new K(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jt._jsonSchemaVersion="firestore/vectorValue/1.0",Jt._jsonSchema={type:je("string",Jt._jsonSchemaVersion),vectorValues:je("object")};/**
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
 */const YA=/^__.*__$/;class ZA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Si(e,this.data,t,this.fieldTransforms)}}function ym(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{Ec:n})}}class Wl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Wl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ho(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(ym(this.Ec)&&YA.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class eb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ta(e)}Dc(e,t,r,s=!1){return new Wl({Ec:e,methodName:t,bc:r,path:Ye.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vm(n){const e=n._freezeSettings(),t=Ta(n._databaseId);return new eb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tb(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);Im("Data must be an object, but it was:",a,r);const c=Em(r,a);let l,h;if(i.merge)l=new kt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const _=rb(e,p,t);if(!a.contains(_))throw new K(k.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);ib(d,_)||d.push(_)}l=new kt(d),h=a.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=a.fieldTransforms;return new ZA(new St(c),l,h)}function nb(n,e,t,r=!1){return Kl(t,n.Dc(r?4:3,e))}function Kl(n,e){if(Tm(n=mt(n)))return Im("Unsupported field value:",e,n),Em(n,e);if(n instanceof _m)return(function(r,s){if(!ym(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=Kl(c,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:Bo(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bo(s.serializer,i)}}if(r instanceof Qt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:Lg(s.serializer,r._byteString)};if(r instanceof $e){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Jt)return(function(a,c){return{mapValue:{fields:{[hg]:{stringValue:fg},[xo]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return Rl(c.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${fa(r)}`)})(n,e)}function Em(n,e){const t={};return ig(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sr(n,((r,s)=>{const i=Kl(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Tm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ve||n instanceof Qt||n instanceof Rt||n instanceof $e||n instanceof _m||n instanceof Jt)}function Im(n,e,t){if(!Tm(t)||!rg(t)){const r=fa(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function rb(n,e,t){if((e=mt(e))instanceof zl)return e._internalPath;if(typeof e=="string")return wm(n,e);throw Ho("Field path arguments must be of type string or ",n,!1,void 0,t)}const sb=new RegExp("[~\\*/\\[\\]]");function wm(n,e,t){if(e.search(sb)>=0)throw Ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new zl(...e.split("."))._internalPath}catch{throw Ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ho(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new K(k.INVALID_ARGUMENT,c+n+l)}function ib(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Am{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ob(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ob extends Am{data(){return super.data()}}function Gl(n,e){return typeof e=="string"?wm(n,e):e instanceof zl?e._internalPath:e._delegate._internalPath}/**
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
 */function bm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ql{}class ab extends Ql{}function cb(n,e,...t){let r=[];e instanceof Ql&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((l=>l instanceof Jl)).length,c=i.filter((l=>l instanceof ba)).length;if(a>1||a>0&&c>0)throw new K(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class ba extends ab{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ba(e,t,r)}_apply(e){const t=this._parse(e);return Sm(e._query,t),new Vr(e.firestore,e.converter,Lc(e._query,t))}_parse(e){const t=vm(e.firestore);return(function(i,a,c,l,h,d,p){let _;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new K(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Qf(p,d);const V=[];for(const N of p)V.push(Gf(l,i,N));_={arrayValue:{values:V}}}else _=Gf(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Qf(p,d),_=nb(c,a,p,d==="in"||d==="not-in");return Be.create(h,d,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function lb(n,e,t){const r=e,s=Gl("where",n);return ba._create(s,r,t)}class Jl extends Ql{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Jl(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Lt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)Sm(a,l),a=Lc(a,l)})(e._query,t),new Vr(e.firestore,e.converter,Lc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Gf(n,e,t){if(typeof(t=mt(t))=="string"){if(t==="")throw new K(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Eg(e)&&t.indexOf("/")!==-1)throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ce.fromString(t));if(!X.isDocumentKey(r))throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return uf(n,new X(r))}if(t instanceof $e)return uf(n,t._key);throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fa(t)}.`)}function Qf(n,e){if(!Array.isArray(n)||n.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Sm(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ub{convertValue(e,t="none"){switch(Jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Sr(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[xo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>Me(a.doubleValue)));return new Jt(i)}convertGeoPoint(e){return new Qt(Me(e.latitude),Me(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ga(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(hi(e));default:return null}}convertTimestamp(e){const t=Gn(e);return new Ve(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ce.fromString(e);Te(qg(r),9688,{name:e});const s=new fi(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||Tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function hb(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class js{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mr extends Am{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Gl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=mr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}mr._jsonSchemaVersion="firestore/documentSnapshot/1.0",mr._jsonSchema={type:je("string",mr._jsonSchemaVersion),bundleSource:je("string","DocumentSnapshot"),bundleName:je("string"),bundle:je("string")};class yo extends mr{data(e={}){return super.data(e)}}class _r{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new js(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new yo(this._firestore,this._userDataWriter,r.key,r,new js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new yo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new js(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new yo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new js(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:fb(c.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_r._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=El.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function fb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:n})}}_r._jsonSchemaVersion="firestore/querySnapshot/1.0",_r._jsonSchema={type:je("string",_r._jsonSchemaVersion),bundleSource:je("string","QuerySnapshot"),bundleName:je("string"),bundle:je("string")};class Xl extends ub{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,t)}}function uc(n){n=Hn(n,Vr);const e=Hn(n.firestore,mi),t=Hl(e),r=new Xl(e);return bm(n._query),KA(t,n._query).then((s=>new _r(e,r,n,s)))}function db(n,e,t){n=Hn(n,$e);const r=Hn(n.firestore,mi),s=hb(n.converter,e);return gb(r,[tb(vm(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,gn.none())])}function pb(n,...e){var t,r,s;n=mt(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Kf(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Kf(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(n instanceof $e)h=Hn(n.firestore,mi),d=Sl(n._key.path),l={next:p=>{e[a]&&e[a](mb(h,n,p))},error:e[a+1],complete:e[a+2]};else{const p=Hn(n,Vr);h=Hn(p.firestore,mi),d=p._query;const _=new Xl(h);l={next:b=>{e[a]&&e[a](new _r(h,_,p,b))},error:e[a+1],complete:e[a+2]},bm(n._query)}return(function(_,b,V,N){const x=new dm(N),Q=new sm(b,x,V);return _.asyncQueue.enqueueAndForget((async()=>nm(await Gc(_),Q))),()=>{x.Ou(),_.asyncQueue.enqueueAndForget((async()=>rm(await Gc(_),Q)))}})(Hl(h),d,c,l)}function gb(n,e){return(function(r,s){const i=new qn;return r.asyncQueue.enqueueAndForget((async()=>xA(await WA(r),s,i))),i.promise})(Hl(n),e)}function mb(n,e,t){const r=t.docs.get(e._key),s=new Xl(n);return new mr(n,s,e._key,r,new js(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){hs=s})(us),ts(new Er("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new mi(new sI(r.getProvider("auth-internal")),new aI(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fi(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),jn(Qh,Jh,e),jn(Qh,Jh,"esm2017")})();var _b="firebase",yb="11.10.0";/**
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
 */jn(_b,yb,"app");function Yl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Rm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vb=Rm,Cm=new Ii("auth","Firebase",Rm());/**
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
 */const zo=new ml("@firebase/auth");function Eb(n,...e){zo.logLevel<=he.WARN&&zo.warn(`Auth (${us}): ${n}`,...e)}function vo(n,...e){zo.logLevel<=he.ERROR&&zo.error(`Auth (${us}): ${n}`,...e)}/**
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
 */function en(n,...e){throw eu(n,...e)}function xt(n,...e){return eu(n,...e)}function Zl(n,e,t){const r=Object.assign(Object.assign({},vb()),{[e]:t});return new Ii("auth","Firebase",r).create(e,{appName:n.name})}function yr(n){return Zl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tb(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&en(n,"argument-error"),Zl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Cm.create(n,...e)}function ne(n,e,...t){if(!n)throw eu(e,...t)}function fn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vo(e),new Error(e)}function wn(n,e){n||fn(e)}/**
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
 */function Qc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ib(){return Jf()==="http:"||Jf()==="https:"}function Jf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function wb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ib()||xE()||"connection"in navigator)?navigator.onLine:!0}function Ab(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Vi{constructor(e,t){this.shortDelay=e,this.longDelay=t,wn(t>e,"Short delay should be less than long delay!"),this.isMobile=DE()||ME()}get(){return wb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tu(n,e){wn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Pm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Sb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Rb=new Vi(3e4,6e4);function nu(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function gs(n,e,t,r,s={}){return Vm(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=wi(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return OE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ls(n.emulatorConfig.host)&&(h.credentials="include"),Pm.fetch()(await km(n,n.config.apiHost,t,c),h)})}async function Vm(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},bb),e);try{const s=new Pb(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw oo(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw oo(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw oo(n,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Zl(n,d,h);en(n,d)}}catch(s){if(s instanceof bn)throw s;en(n,"network-request-failed",{message:String(s)})}}async function Cb(n,e,t,r,s={}){const i=await gs(n,e,t,r,s);return"mfaPendingCredential"in i&&en(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function km(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?tu(n.config,s):`${n.config.apiScheme}://${s}`;return Sb.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Pb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),Rb.get())})}}function oo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=xt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function Vb(n,e){return gs(n,"POST","/v1/accounts:delete",e)}async function Wo(n,e){return gs(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ni(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kb(n,e=!1){const t=mt(n),r=await t.getIdToken(e),s=ru(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ni(hc(s.auth_time)),issuedAtTime:ni(hc(s.iat)),expirationTime:ni(hc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function hc(n){return Number(n)*1e3}function ru(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=xp(t);return s?JSON.parse(s):(vo("Failed to decode base64 JWT payload"),null)}catch(s){return vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xf(n){const e=ru(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _i(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof bn&&Db(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Db({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Nb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Jc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ko(n){var e;const t=n.auth,r=await n.getIdToken(),s=await _i(n,Wo(t,{idToken:r}));ne(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Dm(i.providerUserInfo):[],c=xb(n.providerData,a),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Jc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function Ob(n){const e=mt(n);await Ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xb(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Dm(n){return n.map(e=>{var{providerId:t}=e,r=Yl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Mb(n,e){const t=await Vm(n,{},async()=>{const r=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await km(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&ls(n.emulatorConfig.host)&&(l.credentials="include"),Pm.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Lb(n,e){return gs(n,"POST","/v2/accounts:revokeToken",nu(n,e))}/**
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
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Xf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Mb(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Jr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function Vn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Dt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Yl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await _i(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kb(this,e)}reload(){return Ob(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(yr(this.auth));const e=await this.getIdToken();return await _i(this,Vb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,h,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(c=t.tenantId)!==null&&c!==void 0?c:void 0,x=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,Q=(h=t.createdAt)!==null&&h!==void 0?h:void 0,$=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:G,emailVerified:z,isAnonymous:oe,providerData:ye,stsTokenManager:I}=t;ne(G&&I,e,"internal-error");const m=Jr.fromJSON(this.name,I);ne(typeof G=="string",e,"internal-error"),Vn(p,e.name),Vn(_,e.name),ne(typeof z=="boolean",e,"internal-error"),ne(typeof oe=="boolean",e,"internal-error"),Vn(b,e.name),Vn(V,e.name),Vn(N,e.name),Vn(x,e.name),Vn(Q,e.name),Vn($,e.name);const y=new Dt({uid:G,auth:e,email:_,emailVerified:z,displayName:p,isAnonymous:oe,photoURL:V,phoneNumber:b,tenantId:N,stsTokenManager:m,createdAt:Q,lastLoginAt:$});return ye&&Array.isArray(ye)&&(y.providerData=ye.map(T=>Object.assign({},T))),x&&(y._redirectEventId=x),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Jr;s.updateFromServerResponse(t);const i=new Dt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ko(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Dm(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Jr;c.updateFromIdToken(r);const l=new Dt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Jc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const Yf=new Map;function dn(n){wn(n instanceof Function,"Expected a class definition");let e=Yf.get(n);return e?(wn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yf.set(n,e),e)}/**
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
 */class Nm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Nm.type="NONE";const Zf=Nm;/**
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
 */function Eo(n,e,t){return`firebase:${n}:${e}:${t}`}class Xr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Wo(this.auth,{idToken:e}).catch(()=>{});return t?Dt._fromGetAccountInfoResponse(this.auth,t,e):null}return Dt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Xr(dn(Zf),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||dn(Zf);const a=Eo(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const _=await Wo(e,{idToken:d}).catch(()=>{});if(!_)break;p=await Dt._fromGetAccountInfoResponse(e,_,d)}else p=Dt._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Xr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Xr(i,e,r))}}/**
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
 */function ed(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Om(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Um(e))return"Blackberry";if(Bm(e))return"Webos";if(xm(e))return"Safari";if((e.includes("chrome/")||Mm(e))&&!e.includes("edge/"))return"Chrome";if(Fm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Om(n=ut()){return/firefox\//i.test(n)}function xm(n=ut()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mm(n=ut()){return/crios\//i.test(n)}function Lm(n=ut()){return/iemobile/i.test(n)}function Fm(n=ut()){return/android/i.test(n)}function Um(n=ut()){return/blackberry/i.test(n)}function Bm(n=ut()){return/webos/i.test(n)}function su(n=ut()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Fb(n=ut()){var e;return su(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ub(){return LE()&&document.documentMode===10}function jm(n=ut()){return su(n)||Fm(n)||Bm(n)||Um(n)||/windows phone/i.test(n)||Lm(n)}/**
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
 */function $m(n,e=[]){let t;switch(n){case"Browser":t=ed(ut());break;case"Worker":t=`${ed(ut())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${us}/${r}`}/**
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
 */class Bb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function jb(n,e={}){return gs(n,"GET","/v2/passwordPolicy",nu(n,e))}/**
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
 */const $b=6;class qb{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:$b,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Hb{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new td(this),this.idTokenSubscription=new td(this),this.beforeStateQueue=new Bb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Wo(this,{idToken:e}),r=await Dt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Vt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ko(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ab()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(yr(this));const t=e?mt(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jb(this),t=new qb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Lb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dn(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[dn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$m(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Eb(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Sa(n){return mt(n)}class td{constructor(e){this.auth=e,this.observer=null,this.addObserver=zE(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let iu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zb(n){iu=n}function Wb(n){return iu.loadJS(n)}function Kb(){return iu.gapiScript}function Gb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Qb(n,e){const t=yl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(vr(i,e??{}))return s;en(s,"already-initialized")}return t.initialize({options:e})}function Jb(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(dn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Xb(n,e,t){const r=Sa(n);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=qm(e),{host:a,port:c}=Yb(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(vr(h,r.config.emulator)&&vr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ls(a)?(Up(`${i}//${a}${l}`),Bp("Auth",!0)):Zb()}function qm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Yb(n){const e=qm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:nd(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:nd(a)}}}function nd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Zb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Hm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,t){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
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
 */async function Yr(n,e){return Cb(n,"POST","/v1/accounts:signInWithIdp",nu(n,e))}/**
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
 */const e0="http://localhost";class wr extends Hm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):en("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Yl(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new wr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Yr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Yr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yr(e,t)}buildRequest(){const e={requestUri:e0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wi(t)}return e}}/**
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
 */class ou{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ki extends ou{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xn extends ki{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
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
 */class hn extends ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return hn.credential(t,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
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
 */class Mn extends ki{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
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
 */class Ln extends ki{constructor(){super("twitter.com")}static credential(e,t){return wr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ln.credential(t,r)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
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
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Dt._fromIdTokenResponse(e,r,s),a=rd(r);return new as({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=rd(r);return new as({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function rd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Go extends bn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Go(e,t,r,s)}}function zm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(n,i,e,r):i})}async function t0(n,e,t=!1){const r=await _i(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return as._forOperation(n,"link",r)}/**
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
 */async function n0(n,e,t=!1){const{auth:r}=n;if(Vt(r.app))return Promise.reject(yr(r));const s="reauthenticate";try{const i=await _i(n,zm(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=ru(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(n.uid===c,r,"user-mismatch"),as._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
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
 */async function r0(n,e,t=!1){if(Vt(n.app))return Promise.reject(yr(n));const r="signIn",s=await zm(n,r,e),i=await as._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function s0(n,e,t,r){return mt(n).onIdTokenChanged(e,t,r)}function i0(n,e,t){return mt(n).beforeAuthStateChanged(e,t)}function o0(n,e,t,r){return mt(n).onAuthStateChanged(e,t,r)}function a0(n){return mt(n).signOut()}const Qo="__sak";/**
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
 */class Wm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qo,"1"),this.storage.removeItem(Qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const c0=1e3,l0=10;class Km extends Wm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Ub()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,l0):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},c0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Km.type="LOCAL";const u0=Km;/**
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
 */class Gm extends Wm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gm.type="SESSION";const Qm=Gm;/**
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
 */function h0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ra(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await h0(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ra.receivers=[];/**
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
 */function au(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class f0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=au("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Xt(){return window}function d0(n){Xt().location.href=n}/**
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
 */function Jm(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function p0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function g0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function m0(){return Jm()?self:null}/**
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
 */const Xm="firebaseLocalStorageDb",_0=1,Jo="firebaseLocalStorage",Ym="fbase_key";class Di{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ca(n,e){return n.transaction([Jo],e?"readwrite":"readonly").objectStore(Jo)}function y0(){const n=indexedDB.deleteDatabase(Xm);return new Di(n).toPromise()}function Xc(){const n=indexedDB.open(Xm,_0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Jo,{keyPath:Ym})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Jo)?e(r):(r.close(),await y0(),e(await Xc()))})})}async function sd(n,e,t){const r=Ca(n,!0).put({[Ym]:e,value:t});return new Di(r).toPromise()}async function v0(n,e){const t=Ca(n,!1).get(e),r=await new Di(t).toPromise();return r===void 0?null:r.value}function id(n,e){const t=Ca(n,!0).delete(e);return new Di(t).toPromise()}const E0=800,T0=3;class Zm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>T0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ra._getInstance(m0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await p0(),!this.activeServiceWorker)return;this.sender=new f0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||g0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xc();return await sd(e,Qo,"1"),await id(e,Qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>sd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>v0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>id(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ca(s,!1).getAll();return new Di(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),E0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zm.type="LOCAL";const I0=Zm;new Vi(3e4,6e4);/**
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
 */function e_(n,e){return e?dn(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class cu extends Hm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function w0(n){return r0(n.auth,new cu(n),n.bypassAuthState)}function A0(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),n0(t,new cu(n),n.bypassAuthState)}async function b0(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),t0(t,new cu(n),n.bypassAuthState)}/**
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
 */class t_{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return w0;case"linkViaPopup":case"linkViaRedirect":return b0;case"reauthViaPopup":case"reauthViaRedirect":return A0;default:en(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const S0=new Vi(2e3,1e4);async function R0(n,e,t){if(Vt(n.app))return Promise.reject(xt(n,"operation-not-supported-in-this-environment"));const r=Sa(n);Tb(n,e,ou);const s=e_(r,t);return new dr(r,"signInViaPopup",e,s).executeNotNull()}class dr extends t_{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dr.currentPopupAction&&dr.currentPopupAction.cancel(),dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,S0.get())};e()}}dr.currentPopupAction=null;/**
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
 */const C0="pendingRedirect",To=new Map;class P0 extends t_{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const r=await V0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function V0(n,e){const t=N0(e),r=D0(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function k0(n,e){To.set(n._key(),e)}function D0(n){return dn(n._redirectPersistence)}function N0(n){return Eo(C0,n.config.apiKey,n.name)}async function O0(n,e,t=!1){if(Vt(n.app))return Promise.reject(yr(n));const r=Sa(n),s=e_(r,e),a=await new P0(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const x0=600*1e3;class M0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!L0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!n_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(xt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=x0&&this.cachedEventUids.clear(),this.cachedEventUids.has(od(e))}saveEventToCache(e){this.cachedEventUids.add(od(e)),this.lastProcessedEventTime=Date.now()}}function od(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function n_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function L0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return n_(n);default:return!1}}/**
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
 */async function F0(n,e={}){return gs(n,"GET","/v1/projects",e)}/**
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
 */const U0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,B0=/^https?/;async function j0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await F0(n);for(const t of e)try{if($0(t))return}catch{}en(n,"unauthorized-domain")}function $0(n){const e=Qc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!B0.test(t))return!1;if(U0.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const q0=new Vi(3e4,6e4);function ad(){const n=Xt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function H0(n){return new Promise((e,t)=>{var r,s,i;function a(){ad(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ad(),t(xt(n,"network-request-failed"))},timeout:q0.get()})}if(!((s=(r=Xt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Xt().gapi)===null||i===void 0)&&i.load)a();else{const c=Gb("iframefcb");return Xt()[c]=()=>{gapi.load?a():t(xt(n,"network-request-failed"))},Wb(`${Kb()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Io=null,e})}let Io=null;function z0(n){return Io=Io||H0(n),Io}/**
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
 */const W0=new Vi(5e3,15e3),K0="__/auth/iframe",G0="emulator/auth/iframe",Q0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},J0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function X0(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?tu(e,G0):`https://${n.config.authDomain}/${K0}`,r={apiKey:e.apiKey,appName:n.name,v:us},s=J0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${wi(r).slice(1)}`}async function Y0(n){const e=await z0(n),t=Xt().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:X0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Q0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=xt(n,"network-request-failed"),c=Xt().setTimeout(()=>{i(a)},W0.get());function l(){Xt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const Z0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eS=500,tS=600,nS="_blank",rS="http://localhost";class cd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sS(n,e,t,r=eS,s=tS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Z0),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ut().toLowerCase();t&&(c=Mm(h)?nS:t),Om(h)&&(e=e||rS,l.scrollbars="yes");const d=Object.entries(l).reduce((_,[b,V])=>`${_}${b}=${V},`,"");if(Fb(h)&&c!=="_self")return iS(e||"",c),new cd(null);const p=window.open(e||"",c,d);ne(p,n,"popup-blocked");try{p.focus()}catch{}return new cd(p)}function iS(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const oS="__/auth/handler",aS="emulator/auth/handler",cS=encodeURIComponent("fac");async function ld(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:us,eventId:s};if(e instanceof ou){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",HE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof ki){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),h=l?`#${cS}=${encodeURIComponent(l)}`:"";return`${lS(n)}?${wi(c).slice(1)}${h}`}function lS({config:n}){return n.emulator?tu(n,aS):`https://${n.authDomain}/${oS}`}/**
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
 */const fc="webStorageSupport";class uS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qm,this._completeRedirectFn=O0,this._overrideRedirectResult=k0}async _openPopup(e,t,r,s){var i;wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await ld(e,t,r,Qc(),s);return sS(e,a,au())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await ld(e,t,r,Qc(),s);return d0(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Y0(e),r=new M0(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fc,{type:fc},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[fc];a!==void 0&&t(!!a),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=j0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return jm()||xm()||su()}}const hS=uS;var ud="@firebase/auth",hd="1.10.8";/**
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
 */class fS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pS(n){ts(new Er("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$m(n)},h=new Hb(r,s,i,l);return Jb(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ts(new Er("auth-internal",e=>{const t=Sa(e.getProvider("auth").getImmediate());return(r=>new fS(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(ud,hd,dS(n)),jn(ud,hd,"esm2017")}/**
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
 */const gS=300,mS=Fp("authIdTokenMaxAge")||gS;let fd=null;const _S=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>mS)return;const s=t==null?void 0:t.token;fd!==s&&(fd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yS(n=Hp()){const e=yl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Qb(n,{popupRedirectResolver:hS,persistence:[I0,u0,Qm]}),r=Fp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=_S(i.toString());i0(t,a,()=>a(t.currentUser)),s0(t,c=>a(c))}}const s=Mp("auth");return s&&Xb(t,`http://${s}`),t}function vS(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}zb({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=xt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",vS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pS("Browser");const ES={apiKey:"AIzaSyBApGKsvDV9jzS6D_g6T8cqdy6Ouq-jmPI",authDomain:"beverageshop-200f7.firebaseapp.com",projectId:"beverageshop-200f7",storageBucket:"beverageshop-200f7.firebasestorage.app",messagingSenderId:"971744798579",appId:"1:971744798579:web:35c36a3d1a2ceec50bc706"},r_=qp(ES),xs=JA(r_),dc=yS(r_),ms=iE("BeverageStore",{state:()=>({temps:Mh,currentTemp:Mh[0],bases:[{id:"b1",name:"Black Tea",color:"#8B4513"},{id:"b2",name:"Green Tea",color:"#C8E6C9"},{id:"b3",name:"Coffee",color:"#6F4E37"}],currentBase:{id:"b1",name:"Black Tea",color:"#8B4513"},syrups:[{id:"s1",name:"No Syrup",color:"transparent"},{id:"s2",name:"Vanilla",color:"#FFEFD5"},{id:"s3",name:"Caramel",color:"#DAA520"},{id:"s4",name:"Hazelnut",color:"#6B4423"}],currentSyrup:{id:"s1",name:"No Syrup",color:"transparent"},creamers:[{id:"c1",name:"No Cream",color:"transparent"},{id:"c2",name:"Milk",color:"AliceBlue"},{id:"c3",name:"Cream",color:"#F5F5DC"},{id:"c4",name:"Half & Half",color:"#FFFACD"}],currentCreamer:{id:"c1",name:"No Cream",color:"transparent"},beverages:[],currentBeverage:null,currentName:"",user:null,unsubscribe:null}),actions:{async init(){try{const n=await uc(io(xs,"bases"));n.docs.length>0&&(this.bases=n.docs.map(r=>r.data()),this.currentBase=this.bases[0]);const e=await uc(io(xs,"creamers"));e.docs.length>0&&(this.creamers=e.docs.map(r=>r.data()),this.currentCreamer=this.creamers[0]);const t=await uc(io(xs,"syrups"));t.docs.length>0&&(this.syrups=t.docs.map(r=>r.data()),this.currentSyrup=this.syrups[0])}catch{console.log("Using demo data (Firebase not configured yet)")}},setUser(n){if(this.user=n,this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null),n){const e=cb(io(xs,"beverages"),lb("userId","==",n.uid));this.unsubscribe=pb(e,t=>{this.beverages=t.docs.map(r=>r.data()),this.beverages.length>0&&(this.currentBeverage=this.beverages[0])})}else this.beverages=[],this.currentBeverage=null},async makeBeverage(){if(!this.user)return"No user logged in, please sign in first.";if(!this.currentBase||!this.currentSyrup||!this.currentCreamer||!this.currentName)return"Please complete all beverage options and the name before making a beverage.";const n={id:`${Date.now()}-${this.user.uid}`,name:this.currentName,temp:this.currentTemp,base:this.currentBase,syrup:this.currentSyrup,creamer:this.currentCreamer};return await db(QA(xs,"beverages",n.id),{...n,userId:this.user.uid}),this.currentName="",`Beverage ${n.name} made successfully!`},showBeverage(){}}}),TS=Ei({__name:"Syrup",setup(n){const e=ms();return(t,r)=>{var s;return pe(),Se("div",{class:"syrup",style:cs({"--texture-color":(s=Ie(e).currentSyrup)==null?void 0:s.color})},null,4)}}}),IS=br(TS,[["__scopeId","data-v-969d30c3"]]),wS=Ei({__name:"Base",setup(n){const e=ms();return(t,r)=>{var s;return pe(),Se("div",{class:"baseBeverage",style:cs({backgroundColor:(s=Ie(e).currentBase)==null?void 0:s.color})},null,4)}}}),AS=br(wS,[["__scopeId","data-v-f853ce7d"]]),bS={class:"froth"},SS=Ei({__name:"Creamer",setup(n){const e=ms();return(t,r)=>(pe(),Se("div",bS,[(pe(),Se(Ue,null,Nn(5,()=>{var s;return Je("div",{class:"foam",style:cs({backgroundColor:(s=Ie(e).currentCreamer)==null?void 0:s.color})},null,4)}),64))]))}}),RS=br(SS,[["__scopeId","data-v-416a324e"]]),CS={},PS={id:"steam"},VS={class:"stream"};function kS(n,e){return pe(),Se("div",PS,[(pe(),Se(Ue,null,Nn(3,()=>Je("div",VS)),64))])}const DS=br(CS,[["render",kS]]),NS={},OS={id:"condensation"},xS={class:"flake"};function MS(n,e){return pe(),Se("div",OS,[(pe(),Se(Ue,null,Nn(3,()=>Je("div",xS)),64))])}const LS=br(NS,[["render",MS]]),FS=Ei({__name:"Beverage",props:{isIced:{type:Boolean}},setup(n){const e=ms();return(t,r)=>(pe(),On(yE,null,{default:Ms(()=>[n.isIced?(pe(),On(LS,{key:0})):(pe(),On(DS,{key:1})),It(pE,null,{top:Ms(()=>{var s;return[((s=Ie(e).currentCreamer)==null?void 0:s.color)!=="transparent"?(pe(),On(RS,{key:0})):Qs("",!0)]}),mid:Ms(()=>{var s;return[((s=Ie(e).currentSyrup)==null?void 0:s.color)!=="transparent"?(pe(),On(IS,{key:0})):Qs("",!0)]}),bottom:Ms(()=>[It(AS)]),_:1})]),_:1}))}}),US={class:"app-container"},BS={class:"selection-row"},jS=["value"],$S={class:"selection-row"},qS=["value"],HS={class:"selection-row"},zS=["value"],WS={class:"selection-row"},KS=["value"],GS=["disabled"],QS={key:2,class:"message"},JS={key:3,class:"message"},XS={key:4,class:"saved-beverages"},YS=["onChange"],ZS=Ei({__name:"App",setup(n){const e=ms(),t=Bd("");Zd(()=>{o0(dc,c=>{e.setUser(c)})});async function r(){try{const c=new hn;await R0(dc,c),t.value="Signed in successfully!"}catch(c){t.value=`Error: ${c.message}`}}async function s(){await a0(dc),t.value="Signed out successfully!"}async function i(){const c=await e.makeBeverage();t.value=c}function a(c){e.currentBeverage=c,e.currentTemp=c.temp,e.currentBase=c.base,e.currentSyrup=c.syrup,e.currentCreamer=c.creamer,e.currentName=c.name}return(c,l)=>(pe(),Se("div",US,[It(FS,{isIced:Ie(e).currentTemp==="Cold"},null,8,["isIced"]),Je("div",BS,[(pe(!0),Se(Ue,null,Nn(Ie(e).temps,h=>(pe(),Se("label",{key:h},[Ns(Je("input",{type:"radio",name:"temperature",value:h,"onUpdate:modelValue":l[0]||(l[0]=d=>Ie(e).currentTemp=d)},null,8,jS),[[Zi,Ie(e).currentTemp]]),Ur(" "+cr(h),1)]))),128))]),Je("div",$S,[(pe(!0),Se(Ue,null,Nn(Ie(e).bases,h=>(pe(),Se("label",{key:h.id},[Ns(Je("input",{type:"radio",name:"bases",value:h,"onUpdate:modelValue":l[1]||(l[1]=d=>Ie(e).currentBase=d)},null,8,qS),[[Zi,Ie(e).currentBase]]),Ur(" "+cr(h.name),1)]))),128))]),Je("div",HS,[(pe(!0),Se(Ue,null,Nn(Ie(e).syrups,h=>(pe(),Se("label",{key:h.id},[Ns(Je("input",{type:"radio",name:"syrups",value:h,"onUpdate:modelValue":l[2]||(l[2]=d=>Ie(e).currentSyrup=d)},null,8,zS),[[Zi,Ie(e).currentSyrup]]),Ur(" "+cr(h.name),1)]))),128))]),Je("div",WS,[(pe(!0),Se(Ue,null,Nn(Ie(e).creamers,h=>(pe(),Se("label",{key:h.id},[Ns(Je("input",{type:"radio",name:"creamers",value:h,"onUpdate:modelValue":l[3]||(l[3]=d=>Ie(e).currentCreamer=d)},null,8,KS),[[Zi,Ie(e).currentCreamer]]),Ur(" "+cr(h.name),1)]))),128))]),Ie(e).user?(pe(),Se("button",{key:1,onClick:s,class:"auth-btn"},"Sign out")):(pe(),Se("button",{key:0,onClick:r,class:"auth-btn"}," Sign in with Google ")),Ns(Je("input",{type:"text",placeholder:"Beverage Name","onUpdate:modelValue":l[4]||(l[4]=h=>Ie(e).currentName=h),class:"beverage-input"},null,512),[[Wv,Ie(e).currentName]]),Je("button",{onClick:i,disabled:!Ie(e).user,class:"make-btn"}," ☕ Make Beverage ",8,GS),t.value?(pe(),Se("p",QS,cr(t.value),1)):Qs("",!0),Ie(e).user?Qs("",!0):(pe(),Se("p",JS," Please sign in to save your beverage. ")),Ie(e).user&&Ie(e).beverages.length>0?(pe(),Se("div",XS,[l[5]||(l[5]=Je("h3",null,"Your Saved Beverages:",-1)),(pe(!0),Se(Ue,null,Nn(Ie(e).beverages,h=>(pe(),Se("label",{key:h.id},[Je("input",{type:"radio",name:"savedBeverage",onChange:d=>a(h)},null,40,YS),Ur(" "+cr(h.name),1)]))),128))])):Qs("",!0)]))}}),s_=Zv();s_.use(uE);const i_=Jv(ZS);i_.use(s_);i_.mount("#app");const eR=ms();eR.init();
