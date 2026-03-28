(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yr="162",hl=0,go=1,ul=2,fc=1,pc=2,Mn=3,zn=0,Ne=1,Ze=2,Nn=0,bi=1,_o=2,vo=3,xo=4,dl=5,Jn=100,fl=101,pl=102,yo=103,Mo=104,ml=200,gl=201,_l=202,vl=203,Or=204,zr=205,xl=206,yl=207,Ml=208,Sl=209,El=210,bl=211,wl=212,Tl=213,Al=214,Cl=0,Rl=1,Pl=2,Ls=3,Ll=4,Il=5,Dl=6,Nl=7,mc=0,Fl=1,Ul=2,Fn=0,Ol=1,zl=2,Bl=3,gc=4,Gl=5,Hl=6,Vl=7,_c=300,Ai=301,Ci=302,Br=303,Gr=304,zs=306,Hr=1e3,Je=1001,Vr=1002,Re=1003,So=1004,Fi=1005,Ie=1006,$s=1007,ei=1008,Un=1009,kl=1010,Wl=1011,$r=1012,vc=1013,Dn=1014,Sn=1015,Xi=1016,xc=1017,yc=1018,ni=1020,jl=1021,Qe=1023,Xl=1024,ql=1025,ii=1026,Ri=1027,Yl=1028,Mc=1029,$l=1030,Sc=1031,Ec=1033,Ks=33776,Zs=33777,Js=33778,Qs=33779,Eo=35840,bo=35841,wo=35842,To=35843,bc=36196,Ao=37492,Co=37496,Ro=37808,Po=37809,Lo=37810,Io=37811,Do=37812,No=37813,Fo=37814,Uo=37815,Oo=37816,zo=37817,Bo=37818,Go=37819,Ho=37820,Vo=37821,tr=36492,ko=36494,Wo=36495,Kl=36283,jo=36284,Xo=36285,qo=36286,Zl=3200,Jl=3201,wc=0,Ql=1,In="",Ke="srgb",Hn="srgb-linear",Kr="display-p3",Bs="display-p3-linear",Is="linear",ie="srgb",Ds="rec709",Ns="p3",si=7680,Yo=519,th=512,eh=513,nh=514,Tc=515,ih=516,sh=517,rh=518,oh=519,$o=35044,Ko="300 es",kr=1035,En=2e3,Fs=2001;class Li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],er=Math.PI/180,Wr=180/Math.PI;function Yi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[r&255]+we[r>>8&255]+we[r>>16&255]+we[r>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function De(r,t,e){return Math.max(t,Math.min(e,r))}function ah(r,t){return(r%t+t)%t}function nr(r,t,e){return(1-e)*r+e*t}function Zo(r){return(r&r-1)===0&&r!==0}function jr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ui(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,s,o,a,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],_=i[0],f=i[3],p=i[6],v=i[1],x=i[4],M=i[7],A=i[2],b=i[5],w=i[8];return s[0]=o*_+a*v+c*A,s[3]=o*f+a*x+c*b,s[6]=o*p+a*M+c*w,s[1]=l*_+h*v+d*A,s[4]=l*f+h*x+d*b,s[7]=l*p+h*M+d*w,s[2]=u*_+m*v+g*A,s[5]=u*f+m*x+g*b,s[8]=u*p+m*M+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*s,m=l*s-o*c,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*s-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ir.makeScale(t,e)),this}rotate(t){return this.premultiply(ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(ir.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ir=new Ot;function Ac(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Us(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ch(){const r=Us("canvas");return r.style.display="block",r}const Jo={};function lh(r){r in Jo||(Jo[r]=!0,console.warn(r))}const Qo=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ta=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ns={[Hn]:{transfer:Is,primaries:Ds,toReference:r=>r,fromReference:r=>r},[Ke]:{transfer:ie,primaries:Ds,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Bs]:{transfer:Is,primaries:Ns,toReference:r=>r.applyMatrix3(ta),fromReference:r=>r.applyMatrix3(Qo)},[Kr]:{transfer:ie,primaries:Ns,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ta),fromReference:r=>r.applyMatrix3(Qo).convertLinearToSRGB()}},hh=new Set([Hn,Bs]),Jt={enabled:!0,_workingColorSpace:Hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!hh.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=ns[t].toReference,i=ns[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ns[r].primaries},getTransfer:function(r){return r===In?Is:ns[r].transfer}};function wi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function sr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ri;class Cc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ri===void 0&&(ri=Us("canvas")),ri.width=t.width,ri.height=t.height;const n=ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Us("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=wi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uh=0;class Rc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(rr(i[o].image)):s.push(rr(i[o]))}else s=rr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function rr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Cc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dh=0;class Fe extends Li{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=Je,i=Je,s=Ie,o=ei,a=Qe,c=Un,l=Fe.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Yi(),this.name="",this.source=new Rc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hr:t.x=t.x-Math.floor(t.x);break;case Je:t.x=t.x<0?0:1;break;case Vr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hr:t.y=t.y-Math.floor(t.y);break;case Je:t.y=t.y<0?0:1;break;case Vr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=_c;Fe.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,i=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,M=(m+1)/2,A=(p+1)/2,b=(h+u)/4,w=(d+_)/4,L=(g+f)/4;return x>M&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=w/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=L/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=w/s,i=L/s),this.set(n,i,s,e),this}let v=Math.sqrt((f-g)*(f-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fh extends Li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Rc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends fh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Pc extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ph extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let $i=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||l!==m||h!==g){let f=1-a;const p=c*u+l*m+h*g+d*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),b=Math.atan2(A,p*v);f=Math.sin(f*b)/A,a=Math.sin(a*b)/A}const M=a*v;if(c=c*f+u*M,l=l*f+m*M,h=h*f+g*M,d=d*f+_*M,f===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*d+c*m-l*u,t[e+1]=c*g+h*u+l*d-a*m,t[e+2]=l*g+h*m+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(s/2),u=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"YZX":this._x=u*h*d+l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d-u*m*g;break;case"XZY":this._x=u*h*d-l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ea.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ea.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-s*d,this.z=i+c*d+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return or.copy(this).projectOnVector(t),this.sub(or)}reflect(t){return this.sub(or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const or=new D,ea=new $i;class Ki{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xe):Xe.fromBufferAttribute(s,o),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),is.copy(n.boundingBox)),is.applyMatrix4(t.matrixWorld),this.union(is)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),ss.subVectors(this.max,Oi),oi.subVectors(t.a,Oi),ai.subVectors(t.b,Oi),ci.subVectors(t.c,Oi),bn.subVectors(ai,oi),wn.subVectors(ci,ai),Wn.subVectors(oi,ci);let e=[0,-bn.z,bn.y,0,-wn.z,wn.y,0,-Wn.z,Wn.y,bn.z,0,-bn.x,wn.z,0,-wn.x,Wn.z,0,-Wn.x,-bn.y,bn.x,0,-wn.y,wn.x,0,-Wn.y,Wn.x,0];return!ar(e,oi,ai,ci,ss)||(e=[1,0,0,0,1,0,0,0,1],!ar(e,oi,ai,ci,ss))?!1:(rs.crossVectors(bn,wn),e=[rs.x,rs.y,rs.z],ar(e,oi,ai,ci,ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new D,new D,new D,new D,new D,new D,new D,new D],Xe=new D,is=new Ki,oi=new D,ai=new D,ci=new D,bn=new D,wn=new D,Wn=new D,Oi=new D,ss=new D,rs=new D,jn=new D;function ar(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){jn.fromArray(r,s);const a=i.x*Math.abs(jn.x)+i.y*Math.abs(jn.y)+i.z*Math.abs(jn.z),c=t.dot(jn),l=e.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const mh=new Ki,zi=new D,cr=new D;let Gs=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zi.subVectors(t,this.center);const e=zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(zi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zi.copy(t.center).add(cr)),this.expandByPoint(zi.copy(t.center).sub(cr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const dn=new D,lr=new D,os=new D,Tn=new D,hr=new D,as=new D,ur=new D;let Zr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){lr.copy(t).add(e).multiplyScalar(.5),os.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(lr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(os),a=Tn.dot(this.direction),c=-Tn.dot(os),l=Tn.lengthSq(),h=Math.abs(1-o*o);let d,u,m,g;if(h>0)if(d=o*c-a,u=o*a-c,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,m=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(lr).addScaledVector(os,u),m}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,i,s){hr.subVectors(e,t),as.subVectors(n,t),ur.crossVectors(hr,as);let o=this.direction.dot(ur),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,t);const c=a*this.direction.dot(as.crossVectors(Tn,as));if(c<0)return null;const l=a*this.direction.dot(hr.cross(Tn));if(l<0||c+l>o)return null;const h=-a*Tn.dot(ur);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ae{constructor(t,e,n,i,s,o,a,c,l,h,d,u,m,g,_,f){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,d,u,m,g,_,f)}set(t,e,n,i,s,o,a,c,l,h,d,u,m,g,_,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/li.setFromMatrixColumn(t,0).length(),s=1/li.setFromMatrixColumn(t,1).length(),o=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,m=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+g*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,m=c*d,g=l*h,_=l*d;e[0]=u+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,m=c*d,g=l*h,_=l*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,m=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=g*l-m,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gh,t,_h)}lookAt(t,e,n){const i=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),An.crossVectors(n,ze),An.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),An.crossVectors(n,ze)),An.normalize(),cs.crossVectors(ze,An),i[0]=An.x,i[4]=cs.x,i[8]=ze.x,i[1]=An.y,i[5]=cs.y,i[9]=ze.y,i[2]=An.z,i[6]=cs.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],v=n[3],x=n[7],M=n[11],A=n[15],b=i[0],w=i[4],L=i[8],G=i[12],y=i[1],C=i[5],V=i[9],N=i[13],R=i[2],F=i[6],I=i[10],$=i[14],z=i[3],W=i[7],K=i[11],Q=i[15];return s[0]=o*b+a*y+c*R+l*z,s[4]=o*w+a*C+c*F+l*W,s[8]=o*L+a*V+c*I+l*K,s[12]=o*G+a*N+c*$+l*Q,s[1]=h*b+d*y+u*R+m*z,s[5]=h*w+d*C+u*F+m*W,s[9]=h*L+d*V+u*I+m*K,s[13]=h*G+d*N+u*$+m*Q,s[2]=g*b+_*y+f*R+p*z,s[6]=g*w+_*C+f*F+p*W,s[10]=g*L+_*V+f*I+p*K,s[14]=g*G+_*N+f*$+p*Q,s[3]=v*b+x*y+M*R+A*z,s[7]=v*w+x*C+M*F+A*W,s[11]=v*L+x*V+M*I+A*K,s[15]=v*G+x*N+M*$+A*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+s*c*d-i*l*d-s*a*u+n*l*u+i*a*m-n*c*m)+_*(+e*c*m-e*l*u+s*o*u-i*o*m+i*l*h-s*c*h)+f*(+e*l*d-e*a*m-s*o*d+n*o*m+s*a*h-n*l*h)+p*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],v=d*f*l-_*u*l+_*c*m-a*f*m-d*c*p+a*u*p,x=g*u*l-h*f*l-g*c*m+o*f*m+h*c*p-o*u*p,M=h*_*l-g*d*l+g*a*m-o*_*m-h*a*p+o*d*p,A=g*d*c-h*_*c-g*a*u+o*_*u+h*a*f-o*d*f,b=e*v+n*x+i*M+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=v*w,t[1]=(_*u*s-d*f*s-_*i*m+n*f*m+d*i*p-n*u*p)*w,t[2]=(a*f*s-_*c*s+_*i*l-n*f*l-a*i*p+n*c*p)*w,t[3]=(d*c*s-a*u*s-d*i*l+n*u*l+a*i*m-n*c*m)*w,t[4]=x*w,t[5]=(h*f*s-g*u*s+g*i*m-e*f*m-h*i*p+e*u*p)*w,t[6]=(g*c*s-o*f*s-g*i*l+e*f*l+o*i*p-e*c*p)*w,t[7]=(o*u*s-h*c*s+h*i*l-e*u*l-o*i*m+e*c*m)*w,t[8]=M*w,t[9]=(g*d*s-h*_*s-g*n*m+e*_*m+h*n*p-e*d*p)*w,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*w,t[11]=(h*a*s-o*d*s-h*n*l+e*d*l+o*n*m-e*a*m)*w,t[12]=A*w,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*f+e*d*f)*w,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*f-e*a*f)*w,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,d=a+a,u=s*l,m=s*h,g=s*d,_=o*h,f=o*d,p=a*d,v=c*l,x=c*h,M=c*d,A=n.x,b=n.y,w=n.z;return i[0]=(1-(_+p))*A,i[1]=(m+M)*A,i[2]=(g-x)*A,i[3]=0,i[4]=(m-M)*b,i[5]=(1-(u+p))*b,i[6]=(f+v)*b,i[7]=0,i[8]=(g+x)*w,i[9]=(f-v)*w,i[10]=(1-(u+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=li.set(i[0],i[1],i[2]).length();const o=li.set(i[4],i[5],i[6]).length(),a=li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],qe.copy(this);const l=1/s,h=1/o,d=1/a;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=d,qe.elements[9]*=d,qe.elements[10]*=d,e.setFromRotationMatrix(qe),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=En){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let m,g;if(a===En)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Fs)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=En){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*l,m=(n+i)*h;let g,_;if(a===En)g=(o+s)*d,_=-2*d;else if(a===Fs)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const li=new D,qe=new ae,gh=new D(0,0,0),_h=new D(1,1,1),An=new D,cs=new D,ze=new D,na=new ae,ia=new $i;class ln{constructor(t=0,e=0,n=0,i=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return na.makeRotationFromQuaternion(t),this.setFromRotationMatrix(na,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ia.setFromEuler(this),this.setFromQuaternion(ia,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Jr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vh=0;const sa=new D,hi=new $i,fn=new ae,ls=new D,Bi=new D,xh=new D,yh=new $i,ra=new D(1,0,0),oa=new D(0,1,0),aa=new D(0,0,1),Mh={type:"added"},Sh={type:"removed"},dr={type:"childadded",child:null},fr={type:"childremoved",child:null};class Ee extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new D,e=new ln,n=new $i,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ot}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(ra,t)}rotateY(t){return this.rotateOnAxis(oa,t)}rotateZ(t){return this.rotateOnAxis(aa,t)}translateOnAxis(t,e){return sa.copy(t).applyQuaternion(this.quaternion),this.position.add(sa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ra,t)}translateY(t){return this.translateOnAxis(oa,t)}translateZ(t){return this.translateOnAxis(aa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ls.copy(t):ls.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Bi,ls,this.up):fn.lookAt(ls,Bi,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(fn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Mh),dr.child=t,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sh),fr.child=t,this.dispatchEvent(fr),fr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,t,xh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,yh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DEFAULT_UP=new D(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new D,pn=new D,pr=new D,mn=new D,ui=new D,di=new D,ca=new D,mr=new D,gr=new D,_r=new D;class an{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ye.subVectors(t,e),i.cross(Ye);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ye.subVectors(i,e),pn.subVectors(n,e),pr.subVectors(t,e);const o=Ye.dot(Ye),a=Ye.dot(pn),c=Ye.dot(pr),l=pn.dot(pn),h=pn.dot(pr),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,m=(l*c-a*h)*u,g=(o*h-a*c)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,mn.x),c.addScaledVector(o,mn.y),c.addScaledVector(a,mn.z),c)}static isFrontFacing(t,e,n,i){return Ye.subVectors(n,e),pn.subVectors(t,e),Ye.cross(pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Ye.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return an.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ui.subVectors(i,n),di.subVectors(s,n),mr.subVectors(t,n);const c=ui.dot(mr),l=di.dot(mr);if(c<=0&&l<=0)return e.copy(n);gr.subVectors(t,i);const h=ui.dot(gr),d=di.dot(gr);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ui,o);_r.subVectors(t,s);const m=ui.dot(_r),g=di.dot(_r);if(g>=0&&m<=g)return e.copy(s);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(di,a);const f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return ca.subVectors(s,i),a=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(ca,a);const p=1/(f+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(ui,o).addScaledVector(di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},hs={h:0,s:0,l:0};function vr(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=ah(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=vr(o,s,t+1/3),this.g=vr(o,s,t),this.b=vr(o,s,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ke){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=Lc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return Jt.fromWorkingColorSpace(Te.copy(this),t),Math.round(De(Te.r*255,0,255))*65536+Math.round(De(Te.g*255,0,255))*256+Math.round(De(Te.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,i=Te.g,s=Te.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Ke){Jt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,i=Te.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(hs);const n=nr(Cn.h,hs.h,e),i=nr(Cn.s,hs.s,e),s=nr(Cn.l,hs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Ct;Ct.NAMES=Lc;let Eh=0,Ii=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=bi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Or,this.blendDst=zr,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Or&&(n.blendSrc=this.blendSrc),this.blendDst!==zr&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Qr extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new D,us=new zt;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return lh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)us.fromBufferAttribute(this,e),us.applyMatrix3(t),this.setXY(e,us.x,us.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$o&&(t.usage=this.usage),t}}class Ic extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Dc extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bh=0;const ke=new ae,xr=new Ee,fi=new D,Be=new Ki,Gi=new Ki,ve=new D;class Ue extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ac(t)?Dc:Ic)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return xr.lookAt(t),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Be.setFromBufferAttribute(s),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Gi.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Be.min,Gi.min),Be.expandByPoint(ve),ve.addVectors(Be.max,Gi.max),Be.expandByPoint(ve)):(Be.expandByPoint(Gi.min),Be.expandByPoint(Gi.max))}Be.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)ve.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ve));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ve.fromBufferAttribute(a,l),c&&(fi.fromBufferAttribute(t,l),ve.add(fi)),i=Math.max(i,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new D,c[L]=new D;const l=new D,h=new D,d=new D,u=new zt,m=new zt,g=new zt,_=new D,f=new D;function p(L,G,y){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,G),d.fromBufferAttribute(n,y),u.fromBufferAttribute(s,L),m.fromBufferAttribute(s,G),g.fromBufferAttribute(s,y),h.sub(l),d.sub(l),m.sub(u),g.sub(u);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(C),f.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),a[L].add(_),a[G].add(_),a[y].add(_),c[L].add(f),c[G].add(f),c[y].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,G=v.length;L<G;++L){const y=v[L],C=y.start,V=y.count;for(let N=C,R=C+V;N<R;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const x=new D,M=new D,A=new D,b=new D;function w(L){A.fromBufferAttribute(i,L),b.copy(A);const G=a[L];x.copy(G),x.sub(A.multiplyScalar(A.dot(G))).normalize(),M.crossVectors(b,G);const C=M.dot(c[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,C)}for(let L=0,G=v.length;L<G;++L){const y=v[L],C=y.start,V=y.count;for(let N=C,R=C+V;N<R;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new D,s=new D,o=new D,a=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),_=t.getX(u+1),f=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[m++]}return new cn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],m=t(u,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const la=new ae,Xn=new Zr,ds=new Gs,ha=new D,pi=new D,mi=new D,gi=new D,yr=new D,fs=new D,ps=new zt,ms=new zt,gs=new zt,ua=new D,da=new D,fa=new D,_s=new D,vs=new D;class ft extends Ee{constructor(t=new Ue,e=new Qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){fs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(yr.fromBufferAttribute(d,t),o?fs.addScaledVector(yr,h):fs.addScaledVector(yr.sub(e),h))}e.add(fs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(s),Xn.copy(t.ray).recast(t.near),!(ds.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(ds,ha)===null||Xn.origin.distanceToSquared(ha)>(t.far-t.near)**2))&&(la.copy(s).invert(),Xn.copy(t.ray).applyMatrix4(la),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const f=u[g],p=o[f.materialIndex],v=Math.max(f.start,m.start),x=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let M=v,A=x;M<A;M+=3){const b=a.getX(M),w=a.getX(M+1),L=a.getX(M+2);i=xs(this,p,t,n,l,h,d,b,w,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const v=a.getX(f),x=a.getX(f+1),M=a.getX(f+2);i=xs(this,o,t,n,l,h,d,v,x,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const f=u[g],p=o[f.materialIndex],v=Math.max(f.start,m.start),x=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let M=v,A=x;M<A;M+=3){const b=M,w=M+1,L=M+2;i=xs(this,p,t,n,l,h,d,b,w,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const v=f,x=f+1,M=f+2;i=xs(this,o,t,n,l,h,d,v,x,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function wh(r,t,e,n,i,s,o,a){let c;if(t.side===Ne?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===zn,a),c===null)return null;vs.copy(a),vs.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(vs);return l<e.near||l>e.far?null:{distance:l,point:vs.clone(),object:r}}function xs(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,pi),r.getVertexPosition(c,mi),r.getVertexPosition(l,gi);const h=wh(r,t,e,n,pi,mi,gi,_s);if(h){i&&(ps.fromBufferAttribute(i,a),ms.fromBufferAttribute(i,c),gs.fromBufferAttribute(i,l),h.uv=an.getInterpolation(_s,pi,mi,gi,ps,ms,gs,new zt)),s&&(ps.fromBufferAttribute(s,a),ms.fromBufferAttribute(s,c),gs.fromBufferAttribute(s,l),h.uv1=an.getInterpolation(_s,pi,mi,gi,ps,ms,gs,new zt)),o&&(ua.fromBufferAttribute(o,a),da.fromBufferAttribute(o,c),fa.fromBufferAttribute(o,l),h.normal=an.getInterpolation(_s,pi,mi,gi,ua,da,fa,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new D,materialIndex:0};an.getNormal(pi,mi,gi,d.normal),h.face=d}return h}class Kt extends Ue{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(d,2));function g(_,f,p,v,x,M,A,b,w,L,G){const y=M/w,C=A/L,V=M/2,N=A/2,R=b/2,F=w+1,I=L+1;let $=0,z=0;const W=new D;for(let K=0;K<I;K++){const Q=K*C-N;for(let J=0;J<F;J++){const Et=J*y-V;W[_]=Et*v,W[f]=Q*x,W[p]=R,l.push(W.x,W.y,W.z),W[_]=0,W[f]=0,W[p]=b>0?1:-1,h.push(W.x,W.y,W.z),d.push(J/w),d.push(1-K/L),$+=1}}for(let K=0;K<L;K++)for(let Q=0;Q<w;Q++){const J=u+Q+F*K,Et=u+Q+F*(K+1),q=u+(Q+1)+F*(K+1),tt=u+(Q+1)+F*K;c.push(J,Et,tt),c.push(Et,q,tt),z+=6}a.addGroup(m,z,G),m+=z,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(r){const t={};for(let e=0;e<r.length;e++){const n=Pi(r[e]);for(const i in n)t[i]=n[i]}return t}function Th(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Nc(r){return r.getRenderTarget()===null?r.outputColorSpace:Jt.workingColorSpace}const Ah={clone:Pi,merge:Ce};var Ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ch,this.fragmentShader=Rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=Th(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fc extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new D,pa=new zt,ma=new zt;class We extends Fc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,pa,ma),e.subVectors(ma,pa)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(er*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _i=-90,vi=1;class Ph extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(_i,vi,t,e);i.layers=this.layers,this.add(i);const s=new We(_i,vi,t,e);s.layers=this.layers,this.add(s);const o=new We(_i,vi,t,e);o.layers=this.layers,this.add(o);const a=new We(_i,vi,t,e);a.layers=this.layers,this.add(a);const c=new We(_i,vi,t,e);c.layers=this.layers,this.add(c);const l=new We(_i,vi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Uc extends Fe{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ai,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lh extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Uc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ie}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Kt(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Nn});s.uniforms.tEquirect.value=e;const o=new ft(i,s),a=e.minFilter;return e.minFilter===ei&&(e.minFilter=Ie),new Ph(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Mr=new D,Ih=new D,Dh=new Ot;let Ln=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Mr.subVectors(n,e).cross(Ih.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Mr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dh.getNormalMatrix(t),i=this.coplanarPoint(Mr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const qn=new Gs,ys=new D;class to{constructor(t=new Ln,e=new Ln,n=new Ln,i=new Ln,s=new Ln,o=new Ln){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],m=i[8],g=i[9],_=i[10],f=i[11],p=i[12],v=i[13],x=i[14],M=i[15];if(n[0].setComponents(c-s,u-l,f-m,M-p).normalize(),n[1].setComponents(c+s,u+l,f+m,M+p).normalize(),n[2].setComponents(c+o,u+h,f+g,M+v).normalize(),n[3].setComponents(c-o,u-h,f-g,M-v).normalize(),n[4].setComponents(c-a,u-d,f-_,M-x).normalize(),e===En)n[5].setComponents(c+a,u+d,f+_,M+x).normalize();else if(e===Fs)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ys.x=i.normal.x>0?t.max.x:t.min.x,ys.y=i.normal.y>0?t.max.y:t.min.y,ys.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oc(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Nh(r,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,m=d.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,d,u),l.onUploadCallback();let _;if(d instanceof Float32Array)_=r.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=r.SHORT;else if(d instanceof Uint32Array)_=r.UNSIGNED_INT;else if(d instanceof Int32Array)_=r.INT;else if(d instanceof Int8Array)_=r.BYTE;else if(d instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,h,d){const u=h.array,m=h._updateRange,g=h.updateRanges;if(r.bindBuffer(d,l),m.count===-1&&g.length===0&&r.bufferSubData(d,0,u),g.length!==0){for(let _=0,f=g.length;_<f;_++){const p=g[_];e?r.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):r.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(e?r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}class On extends Ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){const v=p*u-o;for(let x=0;x<l;x++){const M=x*d-s;g.push(M,-v,0),_.push(0,0,1),f.push(x/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const x=v+l*p,M=v+l*(p+1),A=v+1+l*(p+1),b=v+1+l*p;m.push(x,M,b),m.push(M,A,b)}this.setIndex(m),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.width,t.height,t.widthSegments,t.heightSegments)}}var Fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,su=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ru=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ou=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",du=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Su=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Eu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Au=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Du=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ku=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ju=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$u=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ku=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,td=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ad=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ud=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$d=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,af=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,df=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:Fh,alphahash_pars_fragment:Uh,alphamap_fragment:Oh,alphamap_pars_fragment:zh,alphatest_fragment:Bh,alphatest_pars_fragment:Gh,aomap_fragment:Hh,aomap_pars_fragment:Vh,batching_pars_vertex:kh,batching_vertex:Wh,begin_vertex:jh,beginnormal_vertex:Xh,bsdfs:qh,iridescence_fragment:Yh,bumpmap_pars_fragment:$h,clipping_planes_fragment:Kh,clipping_planes_pars_fragment:Zh,clipping_planes_pars_vertex:Jh,clipping_planes_vertex:Qh,color_fragment:tu,color_pars_fragment:eu,color_pars_vertex:nu,color_vertex:iu,common:su,cube_uv_reflection_fragment:ru,defaultnormal_vertex:ou,displacementmap_pars_vertex:au,displacementmap_vertex:cu,emissivemap_fragment:lu,emissivemap_pars_fragment:hu,colorspace_fragment:uu,colorspace_pars_fragment:du,envmap_fragment:fu,envmap_common_pars_fragment:pu,envmap_pars_fragment:mu,envmap_pars_vertex:gu,envmap_physical_pars_fragment:Cu,envmap_vertex:_u,fog_vertex:vu,fog_pars_vertex:xu,fog_fragment:yu,fog_pars_fragment:Mu,gradientmap_pars_fragment:Su,lightmap_fragment:Eu,lightmap_pars_fragment:bu,lights_lambert_fragment:wu,lights_lambert_pars_fragment:Tu,lights_pars_begin:Au,lights_toon_fragment:Ru,lights_toon_pars_fragment:Pu,lights_phong_fragment:Lu,lights_phong_pars_fragment:Iu,lights_physical_fragment:Du,lights_physical_pars_fragment:Nu,lights_fragment_begin:Fu,lights_fragment_maps:Uu,lights_fragment_end:Ou,logdepthbuf_fragment:zu,logdepthbuf_pars_fragment:Bu,logdepthbuf_pars_vertex:Gu,logdepthbuf_vertex:Hu,map_fragment:Vu,map_pars_fragment:ku,map_particle_fragment:Wu,map_particle_pars_fragment:ju,metalnessmap_fragment:Xu,metalnessmap_pars_fragment:qu,morphinstance_vertex:Yu,morphcolor_vertex:$u,morphnormal_vertex:Ku,morphtarget_pars_vertex:Zu,morphtarget_vertex:Ju,normal_fragment_begin:Qu,normal_fragment_maps:td,normal_pars_fragment:ed,normal_pars_vertex:nd,normal_vertex:id,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:rd,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ad,iridescence_pars_fragment:cd,opaque_fragment:ld,packing:hd,premultiplied_alpha_fragment:ud,project_vertex:dd,dithering_fragment:fd,dithering_pars_fragment:pd,roughnessmap_fragment:md,roughnessmap_pars_fragment:gd,shadowmap_pars_fragment:_d,shadowmap_pars_vertex:vd,shadowmap_vertex:xd,shadowmask_pars_fragment:yd,skinbase_vertex:Md,skinning_pars_vertex:Sd,skinning_vertex:Ed,skinnormal_vertex:bd,specularmap_fragment:wd,specularmap_pars_fragment:Td,tonemapping_fragment:Ad,tonemapping_pars_fragment:Cd,transmission_fragment:Rd,transmission_pars_fragment:Pd,uv_pars_fragment:Ld,uv_pars_vertex:Id,uv_vertex:Dd,worldpos_vertex:Nd,background_vert:Fd,background_frag:Ud,backgroundCube_vert:Od,backgroundCube_frag:zd,cube_vert:Bd,cube_frag:Gd,depth_vert:Hd,depth_frag:Vd,distanceRGBA_vert:kd,distanceRGBA_frag:Wd,equirect_vert:jd,equirect_frag:Xd,linedashed_vert:qd,linedashed_frag:Yd,meshbasic_vert:$d,meshbasic_frag:Kd,meshlambert_vert:Zd,meshlambert_frag:Jd,meshmatcap_vert:Qd,meshmatcap_frag:tf,meshnormal_vert:ef,meshnormal_frag:nf,meshphong_vert:sf,meshphong_frag:rf,meshphysical_vert:of,meshphysical_frag:af,meshtoon_vert:cf,meshtoon_frag:lf,points_vert:hf,points_frag:uf,shadow_vert:df,shadow_frag:ff,sprite_vert:pf,sprite_frag:mf},rt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},on={basic:{uniforms:Ce([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ce([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ce([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ce([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ce([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ce([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ce([rt.points,rt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ce([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ce([rt.common,rt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ce([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ce([rt.sprite,rt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ce([rt.common,rt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ce([rt.lights,rt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};on.physical={uniforms:Ce([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Ms={r:0,b:0,g:0},Yn=new ln,gf=new ae;function _f(r,t,e,n,i,s,o){const a=new Ct(0);let c=s===!0?0:1,l,h,d=null,u=0,m=null;function g(f,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),v=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===zs)?(h===void 0&&(h=new ft(new Kt(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Pi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Yn.copy(p.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gf.makeRotationFromEuler(Yn)),h.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ie,(d!==x||u!==x.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,m=r.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ft(new On(2,2),new Gn({name:"BackgroundMaterial",uniforms:Pi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,m=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function _(f,p){f.getRGB(Ms,Nc(r)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,_(a,c)},render:g}}function vf(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=f(null);let l=c,h=!1;function d(R,F,I,$,z){let W=!1;if(o){const K=_($,I,F);l!==K&&(l=K,m(l.object)),W=p(R,$,I,z),W&&v(R,$,I,z)}else{const K=F.wireframe===!0;(l.geometry!==$.id||l.program!==I.id||l.wireframe!==K)&&(l.geometry=$.id,l.program=I.id,l.wireframe=K,W=!0)}z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,L(R,F,I,$),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function _(R,F,I){const $=I.wireframe===!0;let z=a[R.id];z===void 0&&(z={},a[R.id]=z);let W=z[F.id];W===void 0&&(W={},z[F.id]=W);let K=W[$];return K===void 0&&(K=f(u()),W[$]=K),K}function f(R){const F=[],I=[],$=[];for(let z=0;z<i;z++)F[z]=0,I[z]=0,$[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:I,attributeDivisors:$,object:R,attributes:{},index:null}}function p(R,F,I,$){const z=l.attributes,W=F.attributes;let K=0;const Q=I.getAttributes();for(const J in Q)if(Q[J].location>=0){const q=z[J];let tt=W[J];if(tt===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor)),q===void 0||q.attribute!==tt||tt&&q.data!==tt.data)return!0;K++}return l.attributesNum!==K||l.index!==$}function v(R,F,I,$){const z={},W=F.attributes;let K=0;const Q=I.getAttributes();for(const J in Q)if(Q[J].location>=0){let q=W[J];q===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(q=R.instanceColor));const tt={};tt.attribute=q,q&&q.data&&(tt.data=q.data),z[J]=tt,K++}l.attributes=z,l.attributesNum=K,l.index=$}function x(){const R=l.newAttributes;for(let F=0,I=R.length;F<I;F++)R[F]=0}function M(R){A(R,0)}function A(R,F){const I=l.newAttributes,$=l.enabledAttributes,z=l.attributeDivisors;I[R]=1,$[R]===0&&(r.enableVertexAttribArray(R),$[R]=1),z[R]!==F&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,F),z[R]=F)}function b(){const R=l.newAttributes,F=l.enabledAttributes;for(let I=0,$=F.length;I<$;I++)F[I]!==R[I]&&(r.disableVertexAttribArray(I),F[I]=0)}function w(R,F,I,$,z,W,K){K===!0?r.vertexAttribIPointer(R,F,I,z,W):r.vertexAttribPointer(R,F,I,$,z,W)}function L(R,F,I,$){if(n.isWebGL2===!1&&(R.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const z=$.attributes,W=I.getAttributes(),K=F.defaultAttributeValues;for(const Q in W){const J=W[Q];if(J.location>=0){let Et=z[Q];if(Et===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor)),Et!==void 0){const q=Et.normalized,tt=Et.itemSize,ht=e.get(Et);if(ht===void 0)continue;const wt=ht.buffer,xt=ht.type,mt=ht.bytesPerElement,$t=n.isWebGL2===!0&&(xt===r.INT||xt===r.UNSIGNED_INT||Et.gpuType===vc);if(Et.isInterleavedBufferAttribute){const Rt=Et.data,B=Rt.stride,ye=Et.offset;if(Rt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<J.locationSize;Mt++)A(J.location+Mt,Rt.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Mt=0;Mt<J.locationSize;Mt++)M(J.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,wt);for(let Mt=0;Mt<J.locationSize;Mt++)w(J.location+Mt,tt/J.locationSize,xt,q,B*mt,(ye+tt/J.locationSize*Mt)*mt,$t)}else{if(Et.isInstancedBufferAttribute){for(let Rt=0;Rt<J.locationSize;Rt++)A(J.location+Rt,Et.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Rt=0;Rt<J.locationSize;Rt++)M(J.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,wt);for(let Rt=0;Rt<J.locationSize;Rt++)w(J.location+Rt,tt/J.locationSize,xt,q,tt*mt,tt/J.locationSize*Rt*mt,$t)}}else if(K!==void 0){const q=K[Q];if(q!==void 0)switch(q.length){case 2:r.vertexAttrib2fv(J.location,q);break;case 3:r.vertexAttrib3fv(J.location,q);break;case 4:r.vertexAttrib4fv(J.location,q);break;default:r.vertexAttrib1fv(J.location,q)}}}}b()}function G(){V();for(const R in a){const F=a[R];for(const I in F){const $=F[I];for(const z in $)g($[z].object),delete $[z];delete F[I]}delete a[R]}}function y(R){if(a[R.id]===void 0)return;const F=a[R.id];for(const I in F){const $=F[I];for(const z in $)g($[z].object),delete $[z];delete F[I]}delete a[R.id]}function C(R){for(const F in a){const I=a[F];if(I[R.id]===void 0)continue;const $=I[R.id];for(const z in $)g($[z].object),delete $[z];delete I[R.id]}}function V(){N(),h=!0,l!==c&&(l=c,m(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:V,resetDefaultState:N,dispose:G,releaseStatesOfGeometry:y,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:M,disableUnusedAttributes:b}}function xf(r,t,e,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,d){r.drawArrays(s,h,d),e.update(d,s,1)}function c(h,d,u){if(u===0)return;let m,g;if(i)m=r,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,d,u),e.update(d,s,u)}function l(h,d,u){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(s,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function yf(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),f=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,M=o||t.has("OES_texture_float"),A=x&&M,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:b}}function Mf(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Ln,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,_=d.clipIntersection,f=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!f)s?h(null):l();else{const v=s?0:n,x=v*4;let M=p.clippingState||null;c.value=M,M=h(g,u,x,m);for(let A=0;A!==x;++A)M[A]=e[A];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){const _=d!==null?d.length:0;let f=null;if(_!==0){if(f=c.value,g!==!0||f===null){const p=m+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,M=m;x!==_;++x,M+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(f,M),f[M+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Sf(r){let t=new WeakMap;function e(o,a){return a===Br?o.mapping=Ai:a===Gr&&(o.mapping=Ci),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Br||a===Gr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Lh(c.height);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class zc extends Fc{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Si=4,ga=[.125,.215,.35,.446,.526,.582],Qn=20,Sr=new zc,_a=new Ct;let Er=null,br=0,wr=0;const Zn=(1+Math.sqrt(5))/2,xi=1/Zn,va=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Zn,xi),new D(0,Zn,-xi),new D(xi,0,Zn),new D(-xi,0,Zn),new D(Zn,xi,0),new D(-Zn,xi,0)];class xa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Er=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Er,br,wr),t.scissorTest=!1,Ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Er=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:Xi,format:Qe,colorSpace:Hn,depthBuffer:!1},i=ya(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ya(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ef(s)),this._blurMaterial=bf(s,t,e)}return i}_compileMaterial(t){const e=new ft(this._lodPlanes[0],t);this._renderer.compile(e,Sr)}_sceneToCubeUV(t,e,n,i){const a=new We(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(_a),h.toneMapping=Fn,h.autoClear=!1;const m=new Qr({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new ft(new Kt,m);let _=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(_a),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Ss(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ai||t.mapping===Ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ma());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Ss(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Sr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=va[(i-1)%va.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ft(this._lodPlanes[i],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Qn-1),_=s/g,f=isFinite(s)?1+Math.floor(h*_):Qn;f>Qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Qn}`);const p=[];let v=0;for(let w=0;w<Qn;++w){const L=w/_,G=Math.exp(-L*L/2);p.push(G),w===0?v+=G:w<f&&(v+=2*G)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const M=this._sizeLods[i],A=3*M*(i>x-Si?i-x+Si:0),b=4*(this._cubeSize-M);Ss(e,A,b,3*M,2*M),c.setRenderTarget(e),c.render(d,Sr)}}function Ef(r){const t=[],e=[],n=[];let i=r;const s=r-Si+1+ga.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-Si?c=ga[o-r+Si-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,f=2,p=1,v=new Float32Array(_*g*m),x=new Float32Array(f*g*m),M=new Float32Array(p*g*m);for(let b=0;b<m;b++){const w=b%3*2/3-1,L=b>2?0:-1,G=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];v.set(G,_*g*b),x.set(u,f*g*b);const y=[b,b,b,b,b,b];M.set(y,p*g*b)}const A=new Ue;A.setAttribute("position",new cn(v,_)),A.setAttribute("uv",new cn(x,f)),A.setAttribute("faceIndex",new cn(M,p)),t.push(A),i>Si&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ya(r,t,e){const n=new Bn(r,t,e);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function bf(r,t,e){const n=new Float32Array(Qn),i=new D(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ma(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Sa(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function eo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wf(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Br||c===Gr,h=c===Ai||c===Ci;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new xa(r)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new xa(r));const u=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Tf(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Af(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}u.removeEventListener("dispose",o),delete i[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],r.ARRAY_BUFFER)}}function l(d){const u=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let x=0,M=v.length;x<M;x+=3){const A=v[x+0],b=v[x+1],w=v[x+2];u.push(A,b,b,w,w,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const A=x+0,b=x+1,w=x+2;u.push(A,b,b,w,w,A)}}else return;const f=new(Ac(u)?Dc:Ic)(u,1);f.version=_;const p=s.get(d);p&&t.remove(p),s.set(d,f)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Cf(r,t,e,n){const i=n.isWebGL2;let s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){r.drawElements(s,g,a,m*c),e.update(g,s,1)}function d(m,g,_){if(_===0)return;let f,p;if(i)f=r,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,g,a,m*c,_),e.update(g,s,_)}function u(m,g,_){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<_;p++)this.render(m[p]/c,g[p]);else{f.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let p=0;for(let v=0;v<_;v++)p+=g[v];e.update(p,s,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Rf(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Pf(r,t){return r[0]-t[0]}function Lf(r,t){return Math.abs(t[1])-Math.abs(r[1])}function If(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new xe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let f=s.get(h);if(f===void 0||f.count!==_){let N=function(){C.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var m=N;f!==void 0&&f.texture.dispose();const p=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let w=0;p===!0&&(w=1),v===!0&&(w=2),x===!0&&(w=3);let L=h.attributes.position.count*w,G=1;L>t.maxTextureSize&&(G=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const y=new Float32Array(L*G*4*_),C=new Pc(y,L,G,_);C.type=Sn,C.needsUpdate=!0;const V=w*4;for(let R=0;R<_;R++){const F=M[R],I=A[R],$=b[R],z=L*G*4*R;for(let W=0;W<F.count;W++){const K=W*V;p===!0&&(o.fromBufferAttribute(F,W),y[z+K+0]=o.x,y[z+K+1]=o.y,y[z+K+2]=o.z,y[z+K+3]=0),v===!0&&(o.fromBufferAttribute(I,W),y[z+K+4]=o.x,y[z+K+5]=o.y,y[z+K+6]=o.z,y[z+K+7]=0),x===!0&&(o.fromBufferAttribute($,W),y[z+K+8]=o.x,y[z+K+9]=o.y,y[z+K+10]=o.z,y[z+K+11]=$.itemSize===4?o.w:1)}}f={count:_,texture:C,size:new zt(L,G)},s.set(h,f),h.addEventListener("dispose",N)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",l.morphTexture,e);else{let p=0;for(let x=0;x<u.length;x++)p+=u[x];const v=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",v),d.getUniforms().setValue(r,"morphTargetInfluences",u)}d.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{const g=u===void 0?0:u.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[h.id]=_}for(let M=0;M<g;M++){const A=_[M];A[0]=M,A[1]=u[M]}_.sort(Lf);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Pf);const f=h.morphAttributes.position,p=h.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const A=a[M],b=A[0],w=A[1];b!==Number.MAX_SAFE_INTEGER&&w?(f&&h.getAttribute("morphTarget"+M)!==f[b]&&h.setAttribute("morphTarget"+M,f[b]),p&&h.getAttribute("morphNormal"+M)!==p[b]&&h.setAttribute("morphNormal"+M,p[b]),i[M]=w,v+=w):(f&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),p&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const x=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Df(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Bc extends Fe{constructor(t,e,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:ii,h!==ii&&h!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ii&&(n=Dn),n===void 0&&h===Ri&&(n=ni),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Re,this.minFilter=c!==void 0?c:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gc=new Fe,Hc=new Bc(1,1);Hc.compareFunction=Tc;const Vc=new Pc,kc=new ph,Wc=new Uc,Ea=[],ba=[],wa=new Float32Array(16),Ta=new Float32Array(9),Aa=new Float32Array(4);function Di(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Ea[i];if(s===void 0&&(s=new Float32Array(i),Ea[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function me(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ge(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Hs(r,t){let e=ba[t];e===void 0&&(e=new Int32Array(t),ba[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Nf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Ff(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2fv(this.addr,t),ge(e,t)}}function Uf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;r.uniform3fv(this.addr,t),ge(e,t)}}function Of(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4fv(this.addr,t),ge(e,t)}}function zf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Aa.set(n),r.uniformMatrix2fv(this.addr,!1,Aa),ge(e,n)}}function Bf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Ta.set(n),r.uniformMatrix3fv(this.addr,!1,Ta),ge(e,n)}}function Gf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;wa.set(n),r.uniformMatrix4fv(this.addr,!1,wa),ge(e,n)}}function Hf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Vf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2iv(this.addr,t),ge(e,t)}}function kf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;r.uniform3iv(this.addr,t),ge(e,t)}}function Wf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4iv(this.addr,t),ge(e,t)}}function jf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Xf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2uiv(this.addr,t),ge(e,t)}}function qf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;r.uniform3uiv(this.addr,t),ge(e,t)}}function Yf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4uiv(this.addr,t),ge(e,t)}}function $f(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Hc:Gc;e.setTexture2D(t||s,i)}function Kf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||kc,i)}function Zf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wc,i)}function Jf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vc,i)}function Qf(r){switch(r){case 5126:return Nf;case 35664:return Ff;case 35665:return Uf;case 35666:return Of;case 35674:return zf;case 35675:return Bf;case 35676:return Gf;case 5124:case 35670:return Hf;case 35667:case 35671:return Vf;case 35668:case 35672:return kf;case 35669:case 35673:return Wf;case 5125:return jf;case 36294:return Xf;case 36295:return qf;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return Jf}}function tp(r,t){r.uniform1fv(this.addr,t)}function ep(r,t){const e=Di(t,this.size,2);r.uniform2fv(this.addr,e)}function np(r,t){const e=Di(t,this.size,3);r.uniform3fv(this.addr,e)}function ip(r,t){const e=Di(t,this.size,4);r.uniform4fv(this.addr,e)}function sp(r,t){const e=Di(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function rp(r,t){const e=Di(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function op(r,t){const e=Di(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function ap(r,t){r.uniform1iv(this.addr,t)}function cp(r,t){r.uniform2iv(this.addr,t)}function lp(r,t){r.uniform3iv(this.addr,t)}function hp(r,t){r.uniform4iv(this.addr,t)}function up(r,t){r.uniform1uiv(this.addr,t)}function dp(r,t){r.uniform2uiv(this.addr,t)}function fp(r,t){r.uniform3uiv(this.addr,t)}function pp(r,t){r.uniform4uiv(this.addr,t)}function mp(r,t,e){const n=this.cache,i=t.length,s=Hs(e,i);me(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Gc,s[o])}function gp(r,t,e){const n=this.cache,i=t.length,s=Hs(e,i);me(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||kc,s[o])}function _p(r,t,e){const n=this.cache,i=t.length,s=Hs(e,i);me(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Wc,s[o])}function vp(r,t,e){const n=this.cache,i=t.length,s=Hs(e,i);me(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Vc,s[o])}function xp(r){switch(r){case 5126:return tp;case 35664:return ep;case 35665:return np;case 35666:return ip;case 35674:return sp;case 35675:return rp;case 35676:return op;case 5124:case 35670:return ap;case 35667:case 35671:return cp;case 35668:case 35672:return lp;case 35669:case 35673:return hp;case 5125:return up;case 36294:return dp;case 36295:return fp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return vp}}class yp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qf(e.type)}}class Mp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xp(e.type)}}class Sp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Tr=/(\w+)(\])?(\[|\.)?/g;function Ca(r,t){r.seq.push(t),r.map[t.id]=t}function Ep(r,t,e){const n=r.name,i=n.length;for(Tr.lastIndex=0;;){const s=Tr.exec(n),o=Tr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ca(e,l===void 0?new yp(a,r,t):new Mp(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Sp(a),Ca(e,d)),e=d}}}class Ps{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Ep(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ra(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const bp=37297;let wp=0;function Tp(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Ap(r){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(r);let n;switch(t===e?n="":t===Ns&&e===Ds?n="LinearDisplayP3ToLinearSRGB":t===Ds&&e===Ns&&(n="LinearSRGBToLinearDisplayP3"),r){case Hn:case Bs:return[n,"LinearTransferOETF"];case Ke:case Kr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Pa(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Tp(r.getShaderSource(t),o)}else return i}function Cp(r,t){const e=Ap(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Rp(r,t){let e;switch(t){case Ol:e="Linear";break;case zl:e="Reinhard";break;case Bl:e="OptimizedCineon";break;case gc:e="ACESFilmic";break;case Hl:e="AgX";break;case Vl:e="Neutral";break;case Gl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Pp(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ei).join(`
`)}function Lp(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ei).join(`
`)}function Ip(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dp(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ei(r){return r!==""}function La(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ia(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xr(r){return r.replace(Np,Up)}const Fp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Up(r,t){let e=Ut[t];if(e===void 0){const n=Fp.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xr(e)}const Op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Da(r){return r.replace(Op,zp)}function zp(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Na(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(t+=`precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bp(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===fc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===pc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function Gp(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ai:case Ci:t="ENVMAP_TYPE_CUBE";break;case zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hp(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ci:t="ENVMAP_MODE_REFRACTION";break}return t}function Vp(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case mc:t="ENVMAP_BLENDING_MULTIPLY";break;case Fl:t="ENVMAP_BLENDING_MIX";break;case Ul:t="ENVMAP_BLENDING_ADD";break}return t}function kp(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Wp(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Bp(e),l=Gp(e),h=Hp(e),d=Vp(e),u=kp(e),m=e.isWebGL2?"":Pp(e),g=Lp(e),_=Ip(s),f=i.createProgram();let p,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ei).join(`
`),p.length>0&&(p+=`
`),v=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ei).join(`
`),v.length>0&&(v+=`
`)):(p=[Na(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ei).join(`
`),v=[m,Na(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Fn?Rp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Cp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ei).join(`
`)),o=Xr(o),o=La(o,e),o=Ia(o,e),a=Xr(a),a=La(a,e),a=Ia(a,e),o=Da(o),a=Da(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=x+p+o,A=x+v+a,b=Ra(i,i.VERTEX_SHADER,M),w=Ra(i,i.FRAGMENT_SHADER,A);i.attachShader(f,b),i.attachShader(f,w),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function L(V){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(f).trim(),R=i.getShaderInfoLog(b).trim(),F=i.getShaderInfoLog(w).trim();let I=!0,$=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,b,w);else{const z=Pa(i,b,"vertex"),W=Pa(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+N+`
`+z+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(R===""||F==="")&&($=!1);$&&(V.diagnostics={runnable:I,programLog:N,vertexShader:{log:R,prefix:p},fragmentShader:{log:F,prefix:v}})}i.deleteShader(b),i.deleteShader(w),G=new Ps(i,f),y=Dp(i,f)}let G;this.getUniforms=function(){return G===void 0&&L(this),G};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(f,bp)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wp++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=w,this}let jp=0;class Xp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qp(t),e.set(t,n)),n}}class qp{constructor(t){this.id=jp++,this.code=t,this.usedTimes=0}}function Yp(r,t,e,n,i,s,o){const a=new Jr,c=new Xp,l=new Set,h=[],d=i.isWebGL2,u=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,C,V,N,R){const F=N.fog,I=R.geometry,$=y.isMeshStandardMaterial?N.environment:null,z=(y.isMeshStandardMaterial?e:t).get(y.envMap||$),W=z&&z.mapping===zs?z.image.height:null,K=_[y.type];y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,J=Q!==void 0?Q.length:0;let Et=0;I.morphAttributes.position!==void 0&&(Et=1),I.morphAttributes.normal!==void 0&&(Et=2),I.morphAttributes.color!==void 0&&(Et=3);let q,tt,ht,wt;if(K){const Qt=on[K];q=Qt.vertexShader,tt=Qt.fragmentShader}else q=y.vertexShader,tt=y.fragmentShader,c.update(y),ht=c.getVertexShaderID(y),wt=c.getFragmentShaderID(y);const xt=r.getRenderTarget(),mt=R.isInstancedMesh===!0,$t=R.isBatchedMesh===!0,Rt=!!y.map,B=!!y.matcap,ye=!!z,Mt=!!y.aoMap,Ht=!!y.lightMap,bt=!!y.bumpMap,jt=!!y.normalMap,Bt=!!y.displacementMap,Vt=!!y.emissiveMap,ce=!!y.metalnessMap,P=!!y.roughnessMap,E=y.anisotropy>0,Y=y.clearcoat>0,Z=y.iridescence>0,nt=y.sheen>0,et=y.transmission>0,Dt=E&&!!y.anisotropyMap,Tt=Y&&!!y.clearcoatMap,ot=Y&&!!y.clearcoatNormalMap,ct=Y&&!!y.clearcoatRoughnessMap,Nt=Z&&!!y.iridescenceMap,it=Z&&!!y.iridescenceThicknessMap,he=nt&&!!y.sheenColorMap,kt=nt&&!!y.sheenRoughnessMap,yt=!!y.specularMap,gt=!!y.specularColorMap,_t=!!y.specularIntensityMap,Xt=et&&!!y.transmissionMap,Lt=et&&!!y.thicknessMap,se=!!y.gradientMap,U=!!y.alphaMap,at=y.alphaTest>0,k=!!y.alphaHash,st=!!y.extensions;let lt=Fn;y.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(lt=r.toneMapping);const Wt={isWebGL2:d,shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:tt,defines:y.defines,customVertexShaderID:ht,customFragmentShaderID:wt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:$t,instancing:mt,instancingColor:mt&&R.instanceColor!==null,instancingMorph:mt&&R.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:xt===null?r.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Hn,alphaToCoverage:!!y.alphaToCoverage,map:Rt,matcap:B,envMap:ye,envMapMode:ye&&z.mapping,envMapCubeUVHeight:W,aoMap:Mt,lightMap:Ht,bumpMap:bt,normalMap:jt,displacementMap:m&&Bt,emissiveMap:Vt,normalMapObjectSpace:jt&&y.normalMapType===Ql,normalMapTangentSpace:jt&&y.normalMapType===wc,metalnessMap:ce,roughnessMap:P,anisotropy:E,anisotropyMap:Dt,clearcoat:Y,clearcoatMap:Tt,clearcoatNormalMap:ot,clearcoatRoughnessMap:ct,iridescence:Z,iridescenceMap:Nt,iridescenceThicknessMap:it,sheen:nt,sheenColorMap:he,sheenRoughnessMap:kt,specularMap:yt,specularColorMap:gt,specularIntensityMap:_t,transmission:et,transmissionMap:Xt,thicknessMap:Lt,gradientMap:se,opaque:y.transparent===!1&&y.blending===bi&&y.alphaToCoverage===!1,alphaMap:U,alphaTest:at,alphaHash:k,combine:y.combine,mapUv:Rt&&f(y.map.channel),aoMapUv:Mt&&f(y.aoMap.channel),lightMapUv:Ht&&f(y.lightMap.channel),bumpMapUv:bt&&f(y.bumpMap.channel),normalMapUv:jt&&f(y.normalMap.channel),displacementMapUv:Bt&&f(y.displacementMap.channel),emissiveMapUv:Vt&&f(y.emissiveMap.channel),metalnessMapUv:ce&&f(y.metalnessMap.channel),roughnessMapUv:P&&f(y.roughnessMap.channel),anisotropyMapUv:Dt&&f(y.anisotropyMap.channel),clearcoatMapUv:Tt&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:it&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:kt&&f(y.sheenRoughnessMap.channel),specularMapUv:yt&&f(y.specularMap.channel),specularColorMapUv:gt&&f(y.specularColorMap.channel),specularIntensityMapUv:_t&&f(y.specularIntensityMap.channel),transmissionMapUv:Xt&&f(y.transmissionMap.channel),thicknessMapUv:Lt&&f(y.thicknessMap.channel),alphaMapUv:U&&f(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(jt||E),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!I.attributes.uv&&(Rt||U),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:R.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Et,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Rt&&y.map.isVideoTexture===!0&&Jt.getTransfer(y.map.colorSpace)===ie,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ze,flipSided:y.side===Ne,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:st&&y.extensions.derivatives===!0,extensionFragDepth:st&&y.extensions.fragDepth===!0,extensionDrawBuffers:st&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:st&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:st&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:st&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function v(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const V in y.defines)C.push(V),C.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(x(C,y),M(C,y),C.push(r.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function x(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function M(y,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.instancingMorph&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.normalMapObjectSpace&&a.enable(7),C.normalMapTangentSpace&&a.enable(8),C.clearcoat&&a.enable(9),C.iridescence&&a.enable(10),C.alphaTest&&a.enable(11),C.vertexColors&&a.enable(12),C.vertexAlphas&&a.enable(13),C.vertexUv1s&&a.enable(14),C.vertexUv2s&&a.enable(15),C.vertexUv3s&&a.enable(16),C.vertexTangents&&a.enable(17),C.anisotropy&&a.enable(18),C.alphaHash&&a.enable(19),C.batching&&a.enable(20),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.alphaToCoverage&&a.enable(20),y.push(a.mask)}function A(y){const C=_[y.type];let V;if(C){const N=on[C];V=Ah.clone(N.uniforms)}else V=y.uniforms;return V}function b(y,C){let V;for(let N=0,R=h.length;N<R;N++){const F=h[N];if(F.cacheKey===C){V=F,++V.usedTimes;break}}return V===void 0&&(V=new Wp(r,C,y,s),h.push(V)),V}function w(y){if(--y.usedTimes===0){const C=h.indexOf(y);h[C]=h[h.length-1],h.pop(),y.destroy()}}function L(y){c.remove(y)}function G(){c.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:A,acquireProgram:b,releaseProgram:w,releaseShaderCache:L,programs:h,dispose:G}}function $p(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Kp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Fa(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ua(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,m,g,_,f){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:f},r[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=m,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=f),t++,p}function a(d,u,m,g,_,f){const p=o(d,u,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function c(d,u,m,g,_,f){const p=o(d,u,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||Kp),n.length>1&&n.sort(u||Fa),i.length>1&&i.sort(u||Fa)}function h(){for(let d=t,u=r.length;d<u;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function Zp(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ua,r.set(n,[o])):i>=s.length?(o=new Ua,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Jp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ct};break;case"SpotLight":e={position:new D,direction:new D,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function Qp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let tm=0;function em(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function nm(r,t){const e=new Jp,n=Qp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);const s=new D,o=new ae,a=new ae;function c(h,d){let u=0,m=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let _=0,f=0,p=0,v=0,x=0,M=0,A=0,b=0,w=0,L=0,G=0;h.sort(em);const y=d===!0?Math.PI:1;for(let V=0,N=h.length;V<N;V++){const R=h[V],F=R.color,I=R.intensity,$=R.distance,z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*I*y,m+=F.g*I*y,g+=F.b*I*y;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],I);G++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*y),R.castShadow){const K=R.shadow,Q=n.get(R);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.directionalShadow[_]=Q,i.directionalShadowMap[_]=z,i.directionalShadowMatrix[_]=R.shadow.matrix,M++}i.directional[_]=W,_++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(F).multiplyScalar(I*y),W.distance=$,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[p]=W;const K=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,K.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[p]=K.matrix,R.castShadow){const Q=n.get(R);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.spotShadow[p]=Q,i.spotShadowMap[p]=z,b++}p++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(F).multiplyScalar(I),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[v]=W,v++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*y),W.distance=R.distance,W.decay=R.decay,R.castShadow){const K=R.shadow,Q=n.get(R);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,i.pointShadow[f]=Q,i.pointShadowMap[f]=z,i.pointShadowMatrix[f]=R.shadow.matrix,A++}i.point[f]=W,f++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(I*y),W.groundColor.copy(R.groundColor).multiplyScalar(I*y),i.hemi[x]=W,x++}}v>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const C=i.hash;(C.directionalLength!==_||C.pointLength!==f||C.spotLength!==p||C.rectAreaLength!==v||C.hemiLength!==x||C.numDirectionalShadows!==M||C.numPointShadows!==A||C.numSpotShadows!==b||C.numSpotMaps!==w||C.numLightProbes!==G)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=v,i.point.length=f,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=b+w-L,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=G,C.directionalLength=_,C.pointLength=f,C.spotLength=p,C.rectAreaLength=v,C.hemiLength=x,C.numDirectionalShadows=M,C.numPointShadows=A,C.numSpotShadows=b,C.numSpotMaps=w,C.numLightProbes=G,i.version=tm++)}function l(h,d){let u=0,m=0,g=0,_=0,f=0;const p=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const M=h[v];if(M.isDirectionalLight){const A=i.directional[u];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(M.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const A=i.point[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){const A=i.hemi[f];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(p),f++}}}return{setup:c,setupView:l,state:i}}function Oa(r,t){const e=new nm(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function im(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let c;return a===void 0?(c=new Oa(r,t),e.set(s,[c])):o>=a.length?(c=new Oa(r,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class sm extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rm extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,am=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cm(r,t,e){let n=new to;const i=new zt,s=new zt,o=new xe,a=new sm({depthPacking:Jl}),c=new rm,l={},h=e.maxTextureSize,d={[zn]:Ne,[Ne]:zn,[Ze]:Ze},u=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:om,fragmentShader:am}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ft(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let p=this.type;this.render=function(b,w,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const G=r.getRenderTarget(),y=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),V=r.state;V.setBlending(Nn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const N=p!==Mn&&this.type===Mn,R=p===Mn&&this.type!==Mn;for(let F=0,I=b.length;F<I;F++){const $=b[F],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const W=z.getFrameExtents();if(i.multiply(W),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/W.x),i.x=s.x*W.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/W.y),i.y=s.y*W.y,z.mapSize.y=s.y)),z.map===null||N===!0||R===!0){const Q=this.type!==Mn?{minFilter:Re,magFilter:Re}:{};z.map!==null&&z.map.dispose(),z.map=new Bn(i.x,i.y,Q),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const K=z.getViewportCount();for(let Q=0;Q<K;Q++){const J=z.getViewport(Q);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),V.viewport(o),z.updateMatrices($,Q),n=z.getFrustum(),M(w,L,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===Mn&&v(z,L),z.needsUpdate=!1}p=this.type,f.needsUpdate=!1,r.setRenderTarget(G,y,C)};function v(b,w){const L=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Bn(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,L,u,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,L,m,_,null)}function x(b,w,L,G){let y=null;const C=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)y=C;else if(y=L.isPointLight===!0?c:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=y.uuid,N=w.uuid;let R=l[V];R===void 0&&(R={},l[V]=R);let F=R[N];F===void 0&&(F=y.clone(),R[N]=F,w.addEventListener("dispose",A)),y=F}if(y.visible=w.visible,y.wireframe=w.wireframe,G===Mn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=r.properties.get(y);V.light=L}return y}function M(b,w,L,G,y){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Mn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const N=t.update(b),R=b.material;if(Array.isArray(R)){const F=N.groups;for(let I=0,$=F.length;I<$;I++){const z=F[I],W=R[z.materialIndex];if(W&&W.visible){const K=x(b,W,G,y);b.onBeforeShadow(r,b,w,L,N,K,z),r.renderBufferDirect(L,null,N,K,b,z),b.onAfterShadow(r,b,w,L,N,K,z)}}}else if(R.visible){const F=x(b,R,G,y);b.onBeforeShadow(r,b,w,L,N,F,null),r.renderBufferDirect(L,null,N,F,b,null),b.onAfterShadow(r,b,w,L,N,F,null)}}const V=b.children;for(let N=0,R=V.length;N<R;N++)M(V[N],w,L,G,y)}function A(b){b.target.removeEventListener("dispose",A);for(const L in l){const G=l[L],y=b.target.uuid;y in G&&(G[y].dispose(),delete G[y])}}}function lm(r,t,e){const n=e.isWebGL2;function i(){let U=!1;const at=new xe;let k=null;const st=new xe(0,0,0,0);return{setMask:function(lt){k!==lt&&!U&&(r.colorMask(lt,lt,lt,lt),k=lt)},setLocked:function(lt){U=lt},setClear:function(lt,Wt,Qt,Me,He){He===!0&&(lt*=Me,Wt*=Me,Qt*=Me),at.set(lt,Wt,Qt,Me),st.equals(at)===!1&&(r.clearColor(lt,Wt,Qt,Me),st.copy(at))},reset:function(){U=!1,k=null,st.set(-1,0,0,0)}}}function s(){let U=!1,at=null,k=null,st=null;return{setTest:function(lt){lt?mt(r.DEPTH_TEST):$t(r.DEPTH_TEST)},setMask:function(lt){at!==lt&&!U&&(r.depthMask(lt),at=lt)},setFunc:function(lt){if(k!==lt){switch(lt){case Cl:r.depthFunc(r.NEVER);break;case Rl:r.depthFunc(r.ALWAYS);break;case Pl:r.depthFunc(r.LESS);break;case Ls:r.depthFunc(r.LEQUAL);break;case Ll:r.depthFunc(r.EQUAL);break;case Il:r.depthFunc(r.GEQUAL);break;case Dl:r.depthFunc(r.GREATER);break;case Nl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}k=lt}},setLocked:function(lt){U=lt},setClear:function(lt){st!==lt&&(r.clearDepth(lt),st=lt)},reset:function(){U=!1,at=null,k=null,st=null}}}function o(){let U=!1,at=null,k=null,st=null,lt=null,Wt=null,Qt=null,Me=null,He=null;return{setTest:function(te){U||(te?mt(r.STENCIL_TEST):$t(r.STENCIL_TEST))},setMask:function(te){at!==te&&!U&&(r.stencilMask(te),at=te)},setFunc:function(te,Ae,en){(k!==te||st!==Ae||lt!==en)&&(r.stencilFunc(te,Ae,en),k=te,st=Ae,lt=en)},setOp:function(te,Ae,en){(Wt!==te||Qt!==Ae||Me!==en)&&(r.stencilOp(te,Ae,en),Wt=te,Qt=Ae,Me=en)},setLocked:function(te){U=te},setClear:function(te){He!==te&&(r.clearStencil(te),He=te)},reset:function(){U=!1,at=null,k=null,st=null,lt=null,Wt=null,Qt=null,Me=null,He=null}}}const a=new i,c=new s,l=new o,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,_=[],f=null,p=!1,v=null,x=null,M=null,A=null,b=null,w=null,L=null,G=new Ct(0,0,0),y=0,C=!1,V=null,N=null,R=null,F=null,I=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),z=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),z=W>=2);let Q=null,J={};const Et=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),tt=new xe().fromArray(Et),ht=new xe().fromArray(q);function wt(U,at,k,st){const lt=new Uint8Array(4),Wt=r.createTexture();r.bindTexture(U,Wt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qt=0;Qt<k;Qt++)n&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(at,0,r.RGBA,1,1,st,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(at+Qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return Wt}const xt={};xt[r.TEXTURE_2D]=wt(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=wt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(xt[r.TEXTURE_2D_ARRAY]=wt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=wt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),mt(r.DEPTH_TEST),c.setFunc(Ls),Bt(!1),Vt(go),mt(r.CULL_FACE),bt(Nn);function mt(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function $t(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function Rt(U,at){return m[U]!==at?(r.bindFramebuffer(U,at),m[U]=at,n&&(U===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=at),U===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=at)),!0):!1}function B(U,at){let k=_,st=!1;if(U){k=g.get(at),k===void 0&&(k=[],g.set(at,k));const lt=U.textures;if(k.length!==lt.length||k[0]!==r.COLOR_ATTACHMENT0){for(let Wt=0,Qt=lt.length;Wt<Qt;Wt++)k[Wt]=r.COLOR_ATTACHMENT0+Wt;k.length=lt.length,st=!0}}else k[0]!==r.BACK&&(k[0]=r.BACK,st=!0);if(st)if(e.isWebGL2)r.drawBuffers(k);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(k);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ye(U){return f!==U?(r.useProgram(U),f=U,!0):!1}const Mt={[Jn]:r.FUNC_ADD,[fl]:r.FUNC_SUBTRACT,[pl]:r.FUNC_REVERSE_SUBTRACT};if(n)Mt[yo]=r.MIN,Mt[Mo]=r.MAX;else{const U=t.get("EXT_blend_minmax");U!==null&&(Mt[yo]=U.MIN_EXT,Mt[Mo]=U.MAX_EXT)}const Ht={[ml]:r.ZERO,[gl]:r.ONE,[_l]:r.SRC_COLOR,[Or]:r.SRC_ALPHA,[El]:r.SRC_ALPHA_SATURATE,[Ml]:r.DST_COLOR,[xl]:r.DST_ALPHA,[vl]:r.ONE_MINUS_SRC_COLOR,[zr]:r.ONE_MINUS_SRC_ALPHA,[Sl]:r.ONE_MINUS_DST_COLOR,[yl]:r.ONE_MINUS_DST_ALPHA,[bl]:r.CONSTANT_COLOR,[wl]:r.ONE_MINUS_CONSTANT_COLOR,[Tl]:r.CONSTANT_ALPHA,[Al]:r.ONE_MINUS_CONSTANT_ALPHA};function bt(U,at,k,st,lt,Wt,Qt,Me,He,te){if(U===Nn){p===!0&&($t(r.BLEND),p=!1);return}if(p===!1&&(mt(r.BLEND),p=!0),U!==dl){if(U!==v||te!==C){if((x!==Jn||b!==Jn)&&(r.blendEquation(r.FUNC_ADD),x=Jn,b=Jn),te)switch(U){case bi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _o:r.blendFunc(r.ONE,r.ONE);break;case vo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case bi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _o:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case vo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,A=null,w=null,L=null,G.set(0,0,0),y=0,v=U,C=te}return}lt=lt||at,Wt=Wt||k,Qt=Qt||st,(at!==x||lt!==b)&&(r.blendEquationSeparate(Mt[at],Mt[lt]),x=at,b=lt),(k!==M||st!==A||Wt!==w||Qt!==L)&&(r.blendFuncSeparate(Ht[k],Ht[st],Ht[Wt],Ht[Qt]),M=k,A=st,w=Wt,L=Qt),(Me.equals(G)===!1||He!==y)&&(r.blendColor(Me.r,Me.g,Me.b,He),G.copy(Me),y=He),v=U,C=!1}function jt(U,at){U.side===Ze?$t(r.CULL_FACE):mt(r.CULL_FACE);let k=U.side===Ne;at&&(k=!k),Bt(k),U.blending===bi&&U.transparent===!1?bt(Nn):bt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),a.setMask(U.colorWrite);const st=U.stencilWrite;l.setTest(st),st&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),P(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?mt(r.SAMPLE_ALPHA_TO_COVERAGE):$t(r.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(U){V!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),V=U)}function Vt(U){U!==hl?(mt(r.CULL_FACE),U!==N&&(U===go?r.cullFace(r.BACK):U===ul?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):$t(r.CULL_FACE),N=U}function ce(U){U!==R&&(z&&r.lineWidth(U),R=U)}function P(U,at,k){U?(mt(r.POLYGON_OFFSET_FILL),(F!==at||I!==k)&&(r.polygonOffset(at,k),F=at,I=k)):$t(r.POLYGON_OFFSET_FILL)}function E(U){U?mt(r.SCISSOR_TEST):$t(r.SCISSOR_TEST)}function Y(U){U===void 0&&(U=r.TEXTURE0+$-1),Q!==U&&(r.activeTexture(U),Q=U)}function Z(U,at,k){k===void 0&&(Q===null?k=r.TEXTURE0+$-1:k=Q);let st=J[k];st===void 0&&(st={type:void 0,texture:void 0},J[k]=st),(st.type!==U||st.texture!==at)&&(Q!==k&&(r.activeTexture(k),Q=k),r.bindTexture(U,at||xt[U]),st.type=U,st.texture=at)}function nt(){const U=J[Q];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function et(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(U){tt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),tt.copy(U))}function _t(U){ht.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ht.copy(U))}function Xt(U,at){let k=d.get(at);k===void 0&&(k=new WeakMap,d.set(at,k));let st=k.get(U);st===void 0&&(st=r.getUniformBlockIndex(at,U.name),k.set(U,st))}function Lt(U,at){const st=d.get(at).get(U);h.get(at)!==st&&(r.uniformBlockBinding(at,st,U.__bindingPointIndex),h.set(at,st))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,J={},m={},g=new WeakMap,_=[],f=null,p=!1,v=null,x=null,M=null,A=null,b=null,w=null,L=null,G=new Ct(0,0,0),y=0,C=!1,V=null,N=null,R=null,F=null,I=null,tt.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:mt,disable:$t,bindFramebuffer:Rt,drawBuffers:B,useProgram:ye,setBlending:bt,setMaterial:jt,setFlipSided:Bt,setCullFace:Vt,setLineWidth:ce,setPolygonOffset:P,setScissorTest:E,activeTexture:Y,bindTexture:Z,unbindTexture:nt,compressedTexImage2D:et,compressedTexImage3D:Dt,texImage2D:kt,texImage3D:yt,updateUBOMapping:Xt,uniformBlockBinding:Lt,texStorage2D:it,texStorage3D:he,texSubImage2D:Tt,texSubImage3D:ot,compressedTexSubImage2D:ct,compressedTexSubImage3D:Nt,scissor:gt,viewport:_t,reset:se}}function hm(r,t,e,n,i,s,o){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new zt,d=new WeakMap;let u;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,E){return g?new OffscreenCanvas(P,E):Us("canvas")}function f(P,E,Y,Z){let nt=1;const et=ce(P);if((et.width>Z||et.height>Z)&&(nt=Z/Math.max(et.width,et.height)),nt<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Dt=E?jr:Math.floor,Tt=Dt(nt*et.width),ot=Dt(nt*et.height);u===void 0&&(u=_(Tt,ot));const ct=Y?_(Tt,ot):u;return ct.width=Tt,ct.height=ot,ct.getContext("2d").drawImage(P,0,0,Tt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Tt+"x"+ot+")."),ct}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function p(P){const E=ce(P);return Zo(E.width)&&Zo(E.height)}function v(P){return a?!1:P.wrapS!==Je||P.wrapT!==Je||P.minFilter!==Re&&P.minFilter!==Ie}function x(P,E){return P.generateMipmaps&&E&&P.minFilter!==Re&&P.minFilter!==Ie}function M(P){r.generateMipmap(P)}function A(P,E,Y,Z,nt=!1){if(a===!1)return E;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=E;if(E===r.RED&&(Y===r.FLOAT&&(et=r.R32F),Y===r.HALF_FLOAT&&(et=r.R16F),Y===r.UNSIGNED_BYTE&&(et=r.R8)),E===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(et=r.R8UI),Y===r.UNSIGNED_SHORT&&(et=r.R16UI),Y===r.UNSIGNED_INT&&(et=r.R32UI),Y===r.BYTE&&(et=r.R8I),Y===r.SHORT&&(et=r.R16I),Y===r.INT&&(et=r.R32I)),E===r.RG&&(Y===r.FLOAT&&(et=r.RG32F),Y===r.HALF_FLOAT&&(et=r.RG16F),Y===r.UNSIGNED_BYTE&&(et=r.RG8)),E===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(et=r.RG8UI),Y===r.UNSIGNED_SHORT&&(et=r.RG16UI),Y===r.UNSIGNED_INT&&(et=r.RG32UI),Y===r.BYTE&&(et=r.RG8I),Y===r.SHORT&&(et=r.RG16I),Y===r.INT&&(et=r.RG32I)),E===r.RGBA){const Dt=nt?Is:Jt.getTransfer(Z);Y===r.FLOAT&&(et=r.RGBA32F),Y===r.HALF_FLOAT&&(et=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(et=Dt===ie?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function b(P,E,Y){return x(P,Y)===!0||P.isFramebufferTexture&&P.minFilter!==Re&&P.minFilter!==Ie?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){return P===Re||P===So||P===Fi?r.NEAREST:r.LINEAR}function L(P){const E=P.target;E.removeEventListener("dispose",L),y(E),E.isVideoTexture&&d.delete(E)}function G(P){const E=P.target;E.removeEventListener("dispose",G),V(E)}function y(P){const E=n.get(P);if(E.__webglInit===void 0)return;const Y=P.source,Z=m.get(Y);if(Z){const nt=Z[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&C(P),Object.keys(Z).length===0&&m.delete(Y)}n.remove(P)}function C(P){const E=n.get(P);r.deleteTexture(E.__webglTexture);const Y=P.source,Z=m.get(Y);delete Z[E.__cacheKey],o.memory.textures--}function V(P){const E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let nt=0;nt<E.__webglFramebuffer[Z].length;nt++)r.deleteFramebuffer(E.__webglFramebuffer[Z][nt]);else r.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)r.deleteFramebuffer(E.__webglFramebuffer[Z]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=P.textures;for(let Z=0,nt=Y.length;Z<nt;Z++){const et=n.get(Y[Z]);et.__webglTexture&&(r.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(Y[Z])}n.remove(P)}let N=0;function R(){N=0}function F(){const P=N;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),N+=1,P}function I(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function $(P,E){const Y=n.get(P);if(P.isVideoTexture&&Bt(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(Y,P,E);return}}e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+E)}function z(P,E){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){ht(Y,P,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+E)}function W(P,E){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){ht(Y,P,E);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+E)}function K(P,E){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){wt(Y,P,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+E)}const Q={[Hr]:r.REPEAT,[Je]:r.CLAMP_TO_EDGE,[Vr]:r.MIRRORED_REPEAT},J={[Re]:r.NEAREST,[So]:r.NEAREST_MIPMAP_NEAREST,[Fi]:r.NEAREST_MIPMAP_LINEAR,[Ie]:r.LINEAR,[$s]:r.LINEAR_MIPMAP_NEAREST,[ei]:r.LINEAR_MIPMAP_LINEAR},Et={[th]:r.NEVER,[oh]:r.ALWAYS,[eh]:r.LESS,[Tc]:r.LEQUAL,[nh]:r.EQUAL,[rh]:r.GEQUAL,[ih]:r.GREATER,[sh]:r.NOTEQUAL};function q(P,E,Y){if(E.type===Sn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ie||E.magFilter===$s||E.magFilter===Fi||E.magFilter===ei||E.minFilter===Ie||E.minFilter===$s||E.minFilter===Fi||E.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(r.texParameteri(P,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Q[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,J[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,J[E.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==Je||E.wrapT!==Je)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,w(E.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Re&&E.minFilter!==Ie&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Et[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Re||E.minFilter!==Fi&&E.minFilter!==ei||E.type===Sn&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===Xi&&t.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function tt(P,E){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",L));const Z=E.source;let nt=m.get(Z);nt===void 0&&(nt={},m.set(Z,nt));const et=I(E);if(et!==P.__cacheKey){nt[et]===void 0&&(nt[et]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),nt[et].usedTimes++;const Dt=nt[P.__cacheKey];Dt!==void 0&&(nt[P.__cacheKey].usedTimes--,Dt.usedTimes===0&&C(E)),P.__cacheKey=et,P.__webglTexture=nt[et].texture}return Y}function ht(P,E,Y){let Z=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=r.TEXTURE_3D);const nt=tt(P,E),et=E.source;e.bindTexture(Z,P.__webglTexture,r.TEXTURE0+Y);const Dt=n.get(et);if(et.version!==Dt.__version||nt===!0){e.activeTexture(r.TEXTURE0+Y);const Tt=Jt.getPrimaries(Jt.workingColorSpace),ot=E.colorSpace===In?null:Jt.getPrimaries(E.colorSpace),ct=E.colorSpace===In||Tt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Nt=v(E)&&p(E.image)===!1;let it=f(E.image,Nt,!1,i.maxTextureSize);it=Vt(E,it);const he=p(it)||a,kt=s.convert(E.format,E.colorSpace);let yt=s.convert(E.type),gt=A(E.internalFormat,kt,yt,E.colorSpace,E.isVideoTexture);q(Z,E,he);let _t;const Xt=E.mipmaps,Lt=a&&E.isVideoTexture!==!0&&gt!==bc,se=Dt.__version===void 0||nt===!0,U=et.dataReady,at=b(E,it,he);if(E.isDepthTexture)gt=r.DEPTH_COMPONENT,a?E.type===Sn?gt=r.DEPTH_COMPONENT32F:E.type===Dn?gt=r.DEPTH_COMPONENT24:E.type===ni?gt=r.DEPTH24_STENCIL8:gt=r.DEPTH_COMPONENT16:E.type===Sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ii&&gt===r.DEPTH_COMPONENT&&E.type!==$r&&E.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Dn,yt=s.convert(E.type)),E.format===Ri&&gt===r.DEPTH_COMPONENT&&(gt=r.DEPTH_STENCIL,E.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ni,yt=s.convert(E.type))),se&&(Lt?e.texStorage2D(r.TEXTURE_2D,1,gt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,gt,it.width,it.height,0,kt,yt,null));else if(E.isDataTexture)if(Xt.length>0&&he){Lt&&se&&e.texStorage2D(r.TEXTURE_2D,at,gt,Xt[0].width,Xt[0].height);for(let k=0,st=Xt.length;k<st;k++)_t=Xt[k],Lt?U&&e.texSubImage2D(r.TEXTURE_2D,k,0,0,_t.width,_t.height,kt,yt,_t.data):e.texImage2D(r.TEXTURE_2D,k,gt,_t.width,_t.height,0,kt,yt,_t.data);E.generateMipmaps=!1}else Lt?(se&&e.texStorage2D(r.TEXTURE_2D,at,gt,it.width,it.height),U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,kt,yt,it.data)):e.texImage2D(r.TEXTURE_2D,0,gt,it.width,it.height,0,kt,yt,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Lt&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,at,gt,Xt[0].width,Xt[0].height,it.depth);for(let k=0,st=Xt.length;k<st;k++)_t=Xt[k],E.format!==Qe?kt!==null?Lt?U&&e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,_t.width,_t.height,it.depth,kt,_t.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,k,gt,_t.width,_t.height,it.depth,0,_t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,_t.width,_t.height,it.depth,kt,yt,_t.data):e.texImage3D(r.TEXTURE_2D_ARRAY,k,gt,_t.width,_t.height,it.depth,0,kt,yt,_t.data)}else{Lt&&se&&e.texStorage2D(r.TEXTURE_2D,at,gt,Xt[0].width,Xt[0].height);for(let k=0,st=Xt.length;k<st;k++)_t=Xt[k],E.format!==Qe?kt!==null?Lt?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,k,0,0,_t.width,_t.height,kt,_t.data):e.compressedTexImage2D(r.TEXTURE_2D,k,gt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?U&&e.texSubImage2D(r.TEXTURE_2D,k,0,0,_t.width,_t.height,kt,yt,_t.data):e.texImage2D(r.TEXTURE_2D,k,gt,_t.width,_t.height,0,kt,yt,_t.data)}else if(E.isDataArrayTexture)Lt?(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,at,gt,it.width,it.height,it.depth),U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,kt,yt,it.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,gt,it.width,it.height,it.depth,0,kt,yt,it.data);else if(E.isData3DTexture)Lt?(se&&e.texStorage3D(r.TEXTURE_3D,at,gt,it.width,it.height,it.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,kt,yt,it.data)):e.texImage3D(r.TEXTURE_3D,0,gt,it.width,it.height,it.depth,0,kt,yt,it.data);else if(E.isFramebufferTexture){if(se)if(Lt)e.texStorage2D(r.TEXTURE_2D,at,gt,it.width,it.height);else{let k=it.width,st=it.height;for(let lt=0;lt<at;lt++)e.texImage2D(r.TEXTURE_2D,lt,gt,k,st,0,kt,yt,null),k>>=1,st>>=1}}else if(Xt.length>0&&he){if(Lt&&se){const k=ce(Xt[0]);e.texStorage2D(r.TEXTURE_2D,at,gt,k.width,k.height)}for(let k=0,st=Xt.length;k<st;k++)_t=Xt[k],Lt?U&&e.texSubImage2D(r.TEXTURE_2D,k,0,0,kt,yt,_t):e.texImage2D(r.TEXTURE_2D,k,gt,kt,yt,_t);E.generateMipmaps=!1}else if(Lt){if(se){const k=ce(it);e.texStorage2D(r.TEXTURE_2D,at,gt,k.width,k.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,kt,yt,it)}else e.texImage2D(r.TEXTURE_2D,0,gt,kt,yt,it);x(E,he)&&M(Z),Dt.__version=et.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function wt(P,E,Y){if(E.image.length!==6)return;const Z=tt(P,E),nt=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Y);const et=n.get(nt);if(nt.version!==et.__version||Z===!0){e.activeTexture(r.TEXTURE0+Y);const Dt=Jt.getPrimaries(Jt.workingColorSpace),Tt=E.colorSpace===In?null:Jt.getPrimaries(E.colorSpace),ot=E.colorSpace===In||Dt===Tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const ct=E.isCompressedTexture||E.image[0].isCompressedTexture,Nt=E.image[0]&&E.image[0].isDataTexture,it=[];for(let k=0;k<6;k++)!ct&&!Nt?it[k]=f(E.image[k],!1,!0,i.maxCubemapSize):it[k]=Nt?E.image[k].image:E.image[k],it[k]=Vt(E,it[k]);const he=it[0],kt=p(he)||a,yt=s.convert(E.format,E.colorSpace),gt=s.convert(E.type),_t=A(E.internalFormat,yt,gt,E.colorSpace),Xt=a&&E.isVideoTexture!==!0,Lt=et.__version===void 0||Z===!0,se=nt.dataReady;let U=b(E,he,kt);q(r.TEXTURE_CUBE_MAP,E,kt);let at;if(ct){Xt&&Lt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,U,_t,he.width,he.height);for(let k=0;k<6;k++){at=it[k].mipmaps;for(let st=0;st<at.length;st++){const lt=at[st];E.format!==Qe?yt!==null?Xt?se&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,st,0,0,lt.width,lt.height,yt,lt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,st,_t,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?se&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,st,0,0,lt.width,lt.height,yt,gt,lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,st,_t,lt.width,lt.height,0,yt,gt,lt.data)}}}else{if(at=E.mipmaps,Xt&&Lt){at.length>0&&U++;const k=ce(it[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,U,_t,k.width,k.height)}for(let k=0;k<6;k++)if(Nt){Xt?se&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,it[k].width,it[k].height,yt,gt,it[k].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,_t,it[k].width,it[k].height,0,yt,gt,it[k].data);for(let st=0;st<at.length;st++){const Wt=at[st].image[k].image;Xt?se&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,st+1,0,0,Wt.width,Wt.height,yt,gt,Wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,st+1,_t,Wt.width,Wt.height,0,yt,gt,Wt.data)}}else{Xt?se&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,yt,gt,it[k]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,_t,yt,gt,it[k]);for(let st=0;st<at.length;st++){const lt=at[st];Xt?se&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,st+1,0,0,yt,gt,lt.image[k]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,st+1,_t,yt,gt,lt.image[k])}}}x(E,kt)&&M(r.TEXTURE_CUBE_MAP),et.__version=nt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function xt(P,E,Y,Z,nt,et){const Dt=s.convert(Y.format,Y.colorSpace),Tt=s.convert(Y.type),ot=A(Y.internalFormat,Dt,Tt,Y.colorSpace);if(!n.get(E).__hasExternalTextures){const Nt=Math.max(1,E.width>>et),it=Math.max(1,E.height>>et);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,et,ot,Nt,it,E.depth,0,Dt,Tt,null):e.texImage2D(nt,et,ot,Nt,it,0,Dt,Tt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),jt(E)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,nt,n.get(Y).__webglTexture,0,bt(E)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,nt,n.get(Y).__webglTexture,et),e.bindFramebuffer(r.FRAMEBUFFER,null)}function mt(P,E,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let Z=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(Y||jt(E)){const nt=E.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Sn?Z=r.DEPTH_COMPONENT32F:nt.type===Dn&&(Z=r.DEPTH_COMPONENT24));const et=bt(E);jt(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,Z,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,et,Z,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,Z,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){const Z=bt(E);Y&&jt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,E.width,E.height):jt(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const Z=E.textures;for(let nt=0;nt<Z.length;nt++){const et=Z[nt],Dt=s.convert(et.format,et.colorSpace),Tt=s.convert(et.type),ot=A(et.internalFormat,Dt,Tt,et.colorSpace),ct=bt(E);Y&&jt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,ot,E.width,E.height):jt(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,ot,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ot,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $t(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const Z=n.get(E.depthTexture).__webglTexture,nt=bt(E);if(E.depthTexture.format===ii)jt(E)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(E.depthTexture.format===Ri)jt(E)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Rt(P){const E=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");$t(E.__webglFramebuffer,P)}else if(Y){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]=r.createRenderbuffer(),mt(E.__webglDepthbuffer[Z],P,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),mt(E.__webglDepthbuffer,P,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function B(P,E,Y){const Z=n.get(P);E!==void 0&&xt(Z.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&Rt(P)}function ye(P){const E=P.texture,Y=n.get(P),Z=n.get(E);P.addEventListener("dispose",G);const nt=P.textures,et=P.isWebGLCubeRenderTarget===!0,Dt=nt.length>1,Tt=p(P)||a;if(Dt||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=E.version,o.memory.textures++),et){Y.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[ot]=[];for(let ct=0;ct<E.mipmaps.length;ct++)Y.__webglFramebuffer[ot][ct]=r.createFramebuffer()}else Y.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ot=0;ot<E.mipmaps.length;ot++)Y.__webglFramebuffer[ot]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Dt)if(i.drawBuffers)for(let ot=0,ct=nt.length;ot<ct;ot++){const Nt=n.get(nt[ot]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=r.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&jt(P)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ot=0;ot<nt.length;ot++){const ct=nt[ot];Y.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[ot]);const Nt=s.convert(ct.format,ct.colorSpace),it=s.convert(ct.type),he=A(ct.internalFormat,Nt,it,ct.colorSpace,P.isXRRenderTarget===!0),kt=bt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,he,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,Y.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),mt(Y.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),q(r.TEXTURE_CUBE_MAP,E,Tt);for(let ot=0;ot<6;ot++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let ct=0;ct<E.mipmaps.length;ct++)xt(Y.__webglFramebuffer[ot][ct],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ct);else xt(Y.__webglFramebuffer[ot],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);x(E,Tt)&&M(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let ot=0,ct=nt.length;ot<ct;ot++){const Nt=nt[ot],it=n.get(Nt);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),q(r.TEXTURE_2D,Nt,Tt),xt(Y.__webglFramebuffer,P,Nt,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,0),x(Nt,Tt)&&M(r.TEXTURE_2D)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ot=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,Z.__webglTexture),q(ot,E,Tt),a&&E.mipmaps&&E.mipmaps.length>0)for(let ct=0;ct<E.mipmaps.length;ct++)xt(Y.__webglFramebuffer[ct],P,E,r.COLOR_ATTACHMENT0,ot,ct);else xt(Y.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,ot,0);x(E,Tt)&&M(ot),e.unbindTexture()}P.depthBuffer&&Rt(P)}function Mt(P){const E=p(P)||a,Y=P.textures;for(let Z=0,nt=Y.length;Z<nt;Z++){const et=Y[Z];if(x(et,E)){const Dt=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Tt=n.get(et).__webglTexture;e.bindTexture(Dt,Tt),M(Dt),e.unbindTexture()}}}function Ht(P){if(a&&P.samples>0&&jt(P)===!1){const E=P.textures,Y=P.width,Z=P.height;let nt=r.COLOR_BUFFER_BIT;const et=[],Dt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=n.get(P),ot=E.length>1;if(ot)for(let ct=0;ct<E.length;ct++)e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let ct=0;ct<E.length;ct++){et.push(r.COLOR_ATTACHMENT0+ct),P.depthBuffer&&et.push(Dt);const Nt=Tt.__ignoreDepthValues!==void 0?Tt.__ignoreDepthValues:!1;if(Nt===!1&&(P.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),ot&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[ct]),Nt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Dt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Dt])),ot){const it=n.get(E[ct]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,it,0)}r.blitFramebuffer(0,0,Y,Z,0,0,Y,Z,nt,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let ct=0;ct<E.length;ct++){e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[ct]);const Nt=n.get(E[ct]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,Nt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}}function bt(P){return Math.min(i.maxSamples,P.samples)}function jt(P){const E=n.get(P);return a&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Bt(P){const E=o.render.frame;d.get(P)!==E&&(d.set(P,E),P.update())}function Vt(P,E){const Y=P.colorSpace,Z=P.format,nt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===kr||Y!==Hn&&Y!==In&&(Jt.getTransfer(Y)===ie?a===!1?t.has("EXT_sRGB")===!0&&Z===Qe?(P.format=kr,P.minFilter=Ie,P.generateMipmaps=!1):E=Cc.sRGBToLinear(E):(Z!==Qe||nt!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}function ce(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=R,this.setTexture2D=$,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=B,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=jt}function um(r,t,e){const n=e.isWebGL2;function i(s,o=In){let a;const c=Jt.getTransfer(o);if(s===Un)return r.UNSIGNED_BYTE;if(s===xc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===yc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===kl)return r.BYTE;if(s===Wl)return r.SHORT;if(s===$r)return r.UNSIGNED_SHORT;if(s===vc)return r.INT;if(s===Dn)return r.UNSIGNED_INT;if(s===Sn)return r.FLOAT;if(s===Xi)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===jl)return r.ALPHA;if(s===Qe)return r.RGBA;if(s===Xl)return r.LUMINANCE;if(s===ql)return r.LUMINANCE_ALPHA;if(s===ii)return r.DEPTH_COMPONENT;if(s===Ri)return r.DEPTH_STENCIL;if(s===kr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Yl)return r.RED;if(s===Mc)return r.RED_INTEGER;if(s===$l)return r.RG;if(s===Sc)return r.RG_INTEGER;if(s===Ec)return r.RGBA_INTEGER;if(s===Ks||s===Zs||s===Js||s===Qs)if(c===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ks)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ks)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Js)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Eo||s===bo||s===wo||s===To)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Eo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===To)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ao||s===Co)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ao)return c===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Co)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ro||s===Po||s===Lo||s===Io||s===Do||s===No||s===Fo||s===Uo||s===Oo||s===zo||s===Bo||s===Go||s===Ho||s===Vo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ro)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Po)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Io)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Do)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===No)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Uo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Oo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Go)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ho)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Vo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tr||s===ko||s===Wo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===tr)return c===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ko)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Wo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kl||s===jo||s===Xo||s===qo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===tr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===jo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ni?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class dm extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zt extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fm={type:"move"};class Ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fm)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Fe,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new Gn({extensions:{fragDepth:!0},vertexShader:pm,fragmentShader:mm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ft(new On(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class _m extends Li{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,m=null,g=null;const _=new gm,f=e.getContextAttributes();let p=null,v=null;const x=[],M=[],A=new zt;let b=null;const w=new We;w.layers.enable(1),w.viewport=new xe;const L=new We;L.layers.enable(2),L.viewport=new xe;const G=[w,L],y=new dm;y.layers.enable(1),y.layers.enable(2);let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=x[q];return tt===void 0&&(tt=new Ar,x[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=x[q];return tt===void 0&&(tt=new Ar,x[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=x[q];return tt===void 0&&(tt=new Ar,x[q]=tt),tt.getHandSpace()};function N(q){const tt=M.indexOf(q.inputSource);if(tt===-1)return;const ht=x[tt];ht!==void 0&&(ht.update(q.inputSource,q.frame,l||o),ht.dispatchEvent({type:q.type,data:q.inputSource}))}function R(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",F);for(let q=0;q<x.length;q++){const tt=M[q];tt!==null&&(M[q]=null,x[q].disconnect(tt))}C=null,V=null,_.reset(),t.setRenderTarget(p),m=null,u=null,d=null,i=null,v=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",R),i.addEventListener("inputsourceschange",F),f.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const tt={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Bn(m.framebufferWidth,m.framebufferHeight,{format:Qe,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let tt=null,ht=null,wt=null;f.depth&&(wt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=f.stencil?Ri:ii,ht=f.stencil?ni:Dn);const xt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(xt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Bn(u.textureWidth,u.textureHeight,{format:Qe,type:Un,depthTexture:new Bc(u.textureWidth,u.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0});const mt=t.properties.get(v);mt.__ignoreDepthValues=u.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Et.setContext(i),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(q){for(let tt=0;tt<q.removed.length;tt++){const ht=q.removed[tt],wt=M.indexOf(ht);wt>=0&&(M[wt]=null,x[wt].disconnect(ht))}for(let tt=0;tt<q.added.length;tt++){const ht=q.added[tt];let wt=M.indexOf(ht);if(wt===-1){for(let mt=0;mt<x.length;mt++)if(mt>=M.length){M.push(ht),wt=mt;break}else if(M[mt]===null){M[mt]=ht,wt=mt;break}if(wt===-1)break}const xt=x[wt];xt&&xt.connect(ht)}}const I=new D,$=new D;function z(q,tt,ht){I.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(ht.matrixWorld);const wt=I.distanceTo($),xt=tt.projectionMatrix.elements,mt=ht.projectionMatrix.elements,$t=xt[14]/(xt[10]-1),Rt=xt[14]/(xt[10]+1),B=(xt[9]+1)/xt[5],ye=(xt[9]-1)/xt[5],Mt=(xt[8]-1)/xt[0],Ht=(mt[8]+1)/mt[0],bt=$t*Mt,jt=$t*Ht,Bt=wt/(-Mt+Ht),Vt=Bt*-Mt;tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Vt),q.translateZ(Bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const ce=$t+Bt,P=Rt+Bt,E=bt-Vt,Y=jt+(wt-Vt),Z=B*Rt/P*ce,nt=ye*Rt/P*ce;q.projectionMatrix.makePerspective(E,Y,Z,nt,ce,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function W(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;_.texture!==null&&(q.near=_.depthNear,q.far=_.depthFar),y.near=L.near=w.near=q.near,y.far=L.far=w.far=q.far,(C!==y.near||V!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,V=y.far,w.near=C,w.far=V,L.near=C,L.far=V,w.updateProjectionMatrix(),L.updateProjectionMatrix(),q.updateProjectionMatrix());const tt=q.parent,ht=y.cameras;W(y,tt);for(let wt=0;wt<ht.length;wt++)W(ht[wt],tt);ht.length===2?z(y,w,L):y.projectionMatrix.copy(w.projectionMatrix),K(q,y,tt)};function K(q,tt,ht){ht===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(ht.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Wr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null};let Q=null;function J(q,tt){if(h=tt.getViewerPose(l||o),g=tt,h!==null){const ht=h.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let wt=!1;ht.length!==y.cameras.length&&(y.cameras.length=0,wt=!0);for(let mt=0;mt<ht.length;mt++){const $t=ht[mt];let Rt=null;if(m!==null)Rt=m.getViewport($t);else{const ye=d.getViewSubImage(u,$t);Rt=ye.viewport,mt===0&&(t.setRenderTargetTextures(v,ye.colorTexture,u.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(v))}let B=G[mt];B===void 0&&(B=new We,B.layers.enable(mt),B.viewport=new xe,G[mt]=B),B.matrix.fromArray($t.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray($t.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),mt===0&&(y.matrix.copy(B.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),wt===!0&&y.cameras.push(B)}const xt=i.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const mt=d.getDepthInformation(ht[0]);mt&&mt.isValid&&mt.texture&&_.init(t,mt,i.renderState)}}for(let ht=0;ht<x.length;ht++){const wt=M[ht],xt=x[ht];wt!==null&&xt!==void 0&&xt.update(wt,tt,l||o)}_.render(t,y),Q&&Q(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Et=new Oc;Et.setAnimationLoop(J),this.setAnimationLoop=function(q){Q=q},this.dispose=function(){}}}const $n=new ln,vm=new ae;function xm(r,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Nc(r)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,v,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),d(f,p)):p.isMeshPhongMaterial?(s(f,p),h(f,p)):p.isMeshStandardMaterial?(s(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,M)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,v,x):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ne&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ne&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const v=t.get(p),x=v.envMap,M=v.envMapRotation;if(x&&(f.envMap.value=x,$n.copy(M),$n.x*=-1,$n.y*=-1,$n.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),f.envMapRotation.value.setFromMatrix4(vm.makeRotationFromEuler($n)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const A=r._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*A,e(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,v,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*v,f.scale.value=x*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,v){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ne&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const v=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(v.matrixWorld),f.nearDistance.value=v.shadow.camera.near,f.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ym(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function l(v,x){let M=i[v.id];M===void 0&&(g(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",f));const A=x.program;n.updateUBOMapping(v,A);const b=t.render.frame;s[v.id]!==b&&(u(v),s[v.id]=b)}function h(v){const x=d();v.__bindingPointIndex=x;const M=r.createBuffer(),A=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=i[v.id],M=v.uniforms,A=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let b=0,w=M.length;b<w;b++){const L=Array.isArray(M[b])?M[b]:[M[b]];for(let G=0,y=L.length;G<y;G++){const C=L[G];if(m(C,b,G,A)===!0){const V=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let R=0;for(let F=0;F<N.length;F++){const I=N[F],$=_(I);typeof I=="number"||typeof I=="boolean"?(C.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,V+R,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=0,C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=0,C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=0):(I.toArray(C.__data,R),R+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(v,x,M,A){const b=v.value,w=x+"_"+M;if(A[w]===void 0)return typeof b=="number"||typeof b=="boolean"?A[w]=b:A[w]=b.clone(),!0;{const L=A[w];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return A[w]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function g(v){const x=v.uniforms;let M=0;const A=16;for(let w=0,L=x.length;w<L;w++){const G=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,C=G.length;y<C;y++){const V=G[y],N=Array.isArray(V.value)?V.value:[V.value];for(let R=0,F=N.length;R<F;R++){const I=N[R],$=_(I),z=M%A;z!==0&&A-z<$.boundary&&(M+=A-z),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=$.storage}}}const b=M%A;return b>0&&(M+=A-b),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function f(v){const x=v.target;x.removeEventListener("dispose",f);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class jc{constructor(t={}){const{canvas:e=ch(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this._useLegacyLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1;const x=this;let M=!1,A=0,b=0,w=null,L=-1,G=null;const y=new xe,C=new xe;let V=null;const N=new Ct(0);let R=0,F=e.width,I=e.height,$=1,z=null,W=null;const K=new xe(0,0,F,I),Q=new xe(0,0,F,I);let J=!1;const Et=new to;let q=!1,tt=!1,ht=null;const wt=new ae,xt=new zt,mt=new D,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Rt(){return w===null?$:1}let B=n;function ye(T,O){for(let j=0;j<T.length;j++){const X=T[j],H=e.getContext(X,O);if(H!==null)return H}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yr}`),e.addEventListener("webglcontextlost",se,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",at,!1),B===null){const O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),B=ye(O,T),B===null)throw ye(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Mt,Ht,bt,jt,Bt,Vt,ce,P,E,Y,Z,nt,et,Dt,Tt,ot,ct,Nt,it,he,kt,yt,gt,_t;function Xt(){Mt=new Tf(B),Ht=new yf(B,Mt,t),Mt.init(Ht),yt=new um(B,Mt,Ht),bt=new lm(B,Mt,Ht),jt=new Rf(B),Bt=new $p,Vt=new hm(B,Mt,bt,Bt,Ht,yt,jt),ce=new Sf(x),P=new wf(x),E=new Nh(B,Ht),gt=new vf(B,Mt,E,Ht),Y=new Af(B,E,jt,gt),Z=new Df(B,Y,E,jt),it=new If(B,Ht,Vt),ot=new Mf(Bt),nt=new Yp(x,ce,P,Mt,Ht,gt,ot),et=new xm(x,Bt),Dt=new Zp,Tt=new im(Mt,Ht),Nt=new _f(x,ce,P,bt,Z,u,c),ct=new cm(x,Z,Ht),_t=new ym(B,jt,Ht,bt),he=new xf(B,Mt,jt,Ht),kt=new Cf(B,Mt,jt,Ht),jt.programs=nt.programs,x.capabilities=Ht,x.extensions=Mt,x.properties=Bt,x.renderLists=Dt,x.shadowMap=ct,x.state=bt,x.info=jt}Xt();const Lt=new _m(x,B);this.xr=Lt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(F,I,!1))},this.getSize=function(T){return T.set(F,I)},this.setSize=function(T,O,j=!0){if(Lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,I=O,e.width=Math.floor(T*$),e.height=Math.floor(O*$),j===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(F*$,I*$).floor()},this.setDrawingBufferSize=function(T,O,j){F=T,I=O,$=j,e.width=Math.floor(T*j),e.height=Math.floor(O*j),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,O,j,X){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,O,j,X),bt.viewport(y.copy(K).multiplyScalar($).round())},this.getScissor=function(T){return T.copy(Q)},this.setScissor=function(T,O,j,X){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,O,j,X),bt.scissor(C.copy(Q).multiplyScalar($).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(T){bt.setScissorTest(J=T)},this.setOpaqueSort=function(T){z=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(T=!0,O=!0,j=!0){let X=0;if(T){let H=!1;if(w!==null){const ut=w.texture.format;H=ut===Ec||ut===Sc||ut===Mc}if(H){const ut=w.texture.type,vt=ut===Un||ut===Dn||ut===$r||ut===ni||ut===xc||ut===yc,St=Nt.getClearColor(),At=Nt.getClearAlpha(),Gt=St.r,Pt=St.g,It=St.b;vt?(m[0]=Gt,m[1]=Pt,m[2]=It,m[3]=At,B.clearBufferuiv(B.COLOR,0,m)):(g[0]=Gt,g[1]=Pt,g[2]=It,g[3]=At,B.clearBufferiv(B.COLOR,0,g))}else X|=B.COLOR_BUFFER_BIT}O&&(X|=B.DEPTH_BUFFER_BIT),j&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",se,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",at,!1),Dt.dispose(),Tt.dispose(),Bt.dispose(),ce.dispose(),P.dispose(),Z.dispose(),gt.dispose(),_t.dispose(),nt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",He),Lt.removeEventListener("sessionend",te),ht&&(ht.dispose(),ht=null),Ae.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=jt.autoReset,O=ct.enabled,j=ct.autoUpdate,X=ct.needsUpdate,H=ct.type;Xt(),jt.autoReset=T,ct.enabled=O,ct.autoUpdate=j,ct.needsUpdate=X,ct.type=H}function at(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function k(T){const O=T.target;O.removeEventListener("dispose",k),st(O)}function st(T){lt(T),Bt.remove(T)}function lt(T){const O=Bt.get(T).programs;O!==void 0&&(O.forEach(function(j){nt.releaseProgram(j)}),T.isShaderMaterial&&nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,j,X,H,ut){O===null&&(O=$t);const vt=H.isMesh&&H.matrixWorld.determinant()<0,St=ol(T,O,j,X,H);bt.setMaterial(X,vt);let At=j.index,Gt=1;if(X.wireframe===!0){if(At=Y.getWireframeAttribute(j),At===void 0)return;Gt=2}const Pt=j.drawRange,It=j.attributes.position;let le=Pt.start*Gt,Oe=(Pt.start+Pt.count)*Gt;ut!==null&&(le=Math.max(le,ut.start*Gt),Oe=Math.min(Oe,(ut.start+ut.count)*Gt)),At!==null?(le=Math.max(le,0),Oe=Math.min(Oe,At.count)):It!=null&&(le=Math.max(le,0),Oe=Math.min(Oe,It.count));const _e=Oe-le;if(_e<0||_e===1/0)return;gt.setup(H,X,St,j,At);let hn,oe=he;if(At!==null&&(hn=E.get(At),oe=kt,oe.setIndex(hn)),H.isMesh)X.wireframe===!0?(bt.setLineWidth(X.wireframeLinewidth*Rt()),oe.setMode(B.LINES)):oe.setMode(B.TRIANGLES);else if(H.isLine){let Ft=X.linewidth;Ft===void 0&&(Ft=1),bt.setLineWidth(Ft*Rt()),H.isLineSegments?oe.setMode(B.LINES):H.isLineLoop?oe.setMode(B.LINE_LOOP):oe.setMode(B.LINE_STRIP)}else H.isPoints?oe.setMode(B.POINTS):H.isSprite&&oe.setMode(B.TRIANGLES);if(H.isBatchedMesh)oe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)oe.renderInstances(le,_e,H.count);else if(j.isInstancedBufferGeometry){const Ft=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,js=Math.min(j.instanceCount,Ft);oe.renderInstances(le,_e,js)}else oe.render(le,_e)};function Wt(T,O,j){T.transparent===!0&&T.side===Ze&&T.forceSinglePass===!1?(T.side=Ne,T.needsUpdate=!0,es(T,O,j),T.side=zn,T.needsUpdate=!0,es(T,O,j),T.side=Ze):es(T,O,j)}this.compile=function(T,O,j=null){j===null&&(j=T),f=Tt.get(j),f.init(),v.push(f),j.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),T!==j&&T.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights(x._useLegacyLights);const X=new Set;return T.traverse(function(H){const ut=H.material;if(ut)if(Array.isArray(ut))for(let vt=0;vt<ut.length;vt++){const St=ut[vt];Wt(St,j,H),X.add(St)}else Wt(ut,j,H),X.add(ut)}),v.pop(),f=null,X},this.compileAsync=function(T,O,j=null){const X=this.compile(T,O,j);return new Promise(H=>{function ut(){if(X.forEach(function(vt){Bt.get(vt).currentProgram.isReady()&&X.delete(vt)}),X.size===0){H(T);return}setTimeout(ut,10)}Mt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Qt=null;function Me(T){Qt&&Qt(T)}function He(){Ae.stop()}function te(){Ae.start()}const Ae=new Oc;Ae.setAnimationLoop(Me),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(T){Qt=T,Lt.setAnimationLoop(T),T===null?Ae.stop():Ae.start()},Lt.addEventListener("sessionstart",He),Lt.addEventListener("sessionend",te),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(O),O=Lt.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,O,w),f=Tt.get(T,v.length),f.init(),v.push(f),wt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Et.setFromProjectionMatrix(wt),tt=this.localClippingEnabled,q=ot.init(this.clippingPlanes,tt),_=Dt.get(T,p.length),_.init(),p.push(_),en(T,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(z,W),this.info.render.frame++,q===!0&&ot.beginShadows();const j=f.state.shadowsArray;if(ct.render(j,T,O),q===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1)&&Nt.render(_,T),f.setupLights(x._useLegacyLights),O.isArrayCamera){const X=O.cameras;for(let H=0,ut=X.length;H<ut;H++){const vt=X[H];lo(_,T,vt,vt.viewport)}}else lo(_,T,O);w!==null&&(Vt.updateMultisampleRenderTarget(w),Vt.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(x,T,O),gt.resetDefaultState(),L=-1,G=null,v.pop(),v.length>0?f=v[v.length-1]:f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function en(T,O,j,X){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Et.intersectsSprite(T)){X&&mt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(wt);const vt=Z.update(T),St=T.material;St.visible&&_.push(T,vt,St,j,mt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Et.intersectsObject(T))){const vt=Z.update(T),St=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),mt.copy(T.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),mt.copy(vt.boundingSphere.center)),mt.applyMatrix4(T.matrixWorld).applyMatrix4(wt)),Array.isArray(St)){const At=vt.groups;for(let Gt=0,Pt=At.length;Gt<Pt;Gt++){const It=At[Gt],le=St[It.materialIndex];le&&le.visible&&_.push(T,vt,le,j,mt.z,It)}}else St.visible&&_.push(T,vt,St,j,mt.z,null)}}const ut=T.children;for(let vt=0,St=ut.length;vt<St;vt++)en(ut[vt],O,j,X)}function lo(T,O,j,X){const H=T.opaque,ut=T.transmissive,vt=T.transparent;f.setupLightsView(j),q===!0&&ot.setGlobalState(x.clippingPlanes,j),ut.length>0&&rl(H,ut,O,j),X&&bt.viewport(y.copy(X)),H.length>0&&ts(H,O,j),ut.length>0&&ts(ut,O,j),vt.length>0&&ts(vt,O,j),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function rl(T,O,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const ut=Ht.isWebGL2;ht===null&&(ht=new Bn(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?Xi:Un,minFilter:ei,samples:ut?4:0})),x.getDrawingBufferSize(xt),ut?ht.setSize(xt.x,xt.y):ht.setSize(jr(xt.x),jr(xt.y));const vt=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(N),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();const St=x.toneMapping;x.toneMapping=Fn,ts(T,j,X),Vt.updateMultisampleRenderTarget(ht),Vt.updateRenderTargetMipmap(ht);let At=!1;for(let Gt=0,Pt=O.length;Gt<Pt;Gt++){const It=O[Gt],le=It.object,Oe=It.geometry,_e=It.material,hn=It.group;if(_e.side===Ze&&le.layers.test(X.layers)){const oe=_e.side;_e.side=Ne,_e.needsUpdate=!0,ho(le,j,X,Oe,_e,hn),_e.side=oe,_e.needsUpdate=!0,At=!0}}At===!0&&(Vt.updateMultisampleRenderTarget(ht),Vt.updateRenderTargetMipmap(ht)),x.setRenderTarget(vt),x.setClearColor(N,R),x.toneMapping=St}function ts(T,O,j){const X=O.isScene===!0?O.overrideMaterial:null;for(let H=0,ut=T.length;H<ut;H++){const vt=T[H],St=vt.object,At=vt.geometry,Gt=X===null?vt.material:X,Pt=vt.group;St.layers.test(j.layers)&&ho(St,O,j,At,Gt,Pt)}}function ho(T,O,j,X,H,ut){T.onBeforeRender(x,O,j,X,H,ut),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,O,j,X,T,ut),H.transparent===!0&&H.side===Ze&&H.forceSinglePass===!1?(H.side=Ne,H.needsUpdate=!0,x.renderBufferDirect(j,O,X,H,T,ut),H.side=zn,H.needsUpdate=!0,x.renderBufferDirect(j,O,X,H,T,ut),H.side=Ze):x.renderBufferDirect(j,O,X,H,T,ut),T.onAfterRender(x,O,j,X,H,ut)}function es(T,O,j){O.isScene!==!0&&(O=$t);const X=Bt.get(T),H=f.state.lights,ut=f.state.shadowsArray,vt=H.state.version,St=nt.getParameters(T,H.state,ut,O,j),At=nt.getProgramCacheKey(St);let Gt=X.programs;X.environment=T.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(T.isMeshStandardMaterial?P:ce).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Gt===void 0&&(T.addEventListener("dispose",k),Gt=new Map,X.programs=Gt);let Pt=Gt.get(At);if(Pt!==void 0){if(X.currentProgram===Pt&&X.lightsStateVersion===vt)return fo(T,St),Pt}else St.uniforms=nt.getUniforms(T),T.onBuild(j,St,x),T.onBeforeCompile(St,x),Pt=nt.acquireProgram(St,At),Gt.set(At,Pt),X.uniforms=St.uniforms;const It=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=ot.uniform),fo(T,St),X.needsLights=cl(T),X.lightsStateVersion=vt,X.needsLights&&(It.ambientLightColor.value=H.state.ambient,It.lightProbe.value=H.state.probe,It.directionalLights.value=H.state.directional,It.directionalLightShadows.value=H.state.directionalShadow,It.spotLights.value=H.state.spot,It.spotLightShadows.value=H.state.spotShadow,It.rectAreaLights.value=H.state.rectArea,It.ltc_1.value=H.state.rectAreaLTC1,It.ltc_2.value=H.state.rectAreaLTC2,It.pointLights.value=H.state.point,It.pointLightShadows.value=H.state.pointShadow,It.hemisphereLights.value=H.state.hemi,It.directionalShadowMap.value=H.state.directionalShadowMap,It.directionalShadowMatrix.value=H.state.directionalShadowMatrix,It.spotShadowMap.value=H.state.spotShadowMap,It.spotLightMatrix.value=H.state.spotLightMatrix,It.spotLightMap.value=H.state.spotLightMap,It.pointShadowMap.value=H.state.pointShadowMap,It.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Pt,X.uniformsList=null,Pt}function uo(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Ps.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function fo(T,O){const j=Bt.get(T);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function ol(T,O,j,X,H){O.isScene!==!0&&(O=$t),Vt.resetTextureUnits();const ut=O.fog,vt=X.isMeshStandardMaterial?O.environment:null,St=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Hn,At=(X.isMeshStandardMaterial?P:ce).get(X.envMap||vt),Gt=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Pt=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),It=!!j.morphAttributes.position,le=!!j.morphAttributes.normal,Oe=!!j.morphAttributes.color;let _e=Fn;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(_e=x.toneMapping);const hn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,oe=hn!==void 0?hn.length:0,Ft=Bt.get(X),js=f.state.lights;if(q===!0&&(tt===!0||T!==G)){const Ve=T===G&&X.id===L;ot.setState(X,T,Ve)}let re=!1;X.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==js.state.version||Ft.outputColorSpace!==St||H.isBatchedMesh&&Ft.batching===!1||!H.isBatchedMesh&&Ft.batching===!0||H.isInstancedMesh&&Ft.instancing===!1||!H.isInstancedMesh&&Ft.instancing===!0||H.isSkinnedMesh&&Ft.skinning===!1||!H.isSkinnedMesh&&Ft.skinning===!0||H.isInstancedMesh&&Ft.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ft.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ft.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ft.instancingMorph===!1&&H.morphTexture!==null||Ft.envMap!==At||X.fog===!0&&Ft.fog!==ut||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ot.numPlanes||Ft.numIntersection!==ot.numIntersection)||Ft.vertexAlphas!==Gt||Ft.vertexTangents!==Pt||Ft.morphTargets!==It||Ft.morphNormals!==le||Ft.morphColors!==Oe||Ft.toneMapping!==_e||Ht.isWebGL2===!0&&Ft.morphTargetsCount!==oe)&&(re=!0):(re=!0,Ft.__version=X.version);let Vn=Ft.currentProgram;re===!0&&(Vn=es(X,O,H));let po=!1,Ni=!1,Xs=!1;const be=Vn.getUniforms(),kn=Ft.uniforms;if(bt.useProgram(Vn.program)&&(po=!0,Ni=!0,Xs=!0),X.id!==L&&(L=X.id,Ni=!0),po||G!==T){be.setValue(B,"projectionMatrix",T.projectionMatrix),be.setValue(B,"viewMatrix",T.matrixWorldInverse);const Ve=be.map.cameraPosition;Ve!==void 0&&Ve.setValue(B,mt.setFromMatrixPosition(T.matrixWorld)),Ht.logarithmicDepthBuffer&&be.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&be.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),G!==T&&(G=T,Ni=!0,Xs=!0)}if(H.isSkinnedMesh){be.setOptional(B,H,"bindMatrix"),be.setOptional(B,H,"bindMatrixInverse");const Ve=H.skeleton;Ve&&(Ht.floatVertexTextures?(Ve.boneTexture===null&&Ve.computeBoneTexture(),be.setValue(B,"boneTexture",Ve.boneTexture,Vt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(be.setOptional(B,H,"batchingTexture"),be.setValue(B,"batchingTexture",H._matricesTexture,Vt));const qs=j.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0&&Ht.isWebGL2===!0)&&it.update(H,j,Vn),(Ni||Ft.receiveShadow!==H.receiveShadow)&&(Ft.receiveShadow=H.receiveShadow,be.setValue(B,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(kn.envMap.value=At,kn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Ni&&(be.setValue(B,"toneMappingExposure",x.toneMappingExposure),Ft.needsLights&&al(kn,Xs),ut&&X.fog===!0&&et.refreshFogUniforms(kn,ut),et.refreshMaterialUniforms(kn,X,$,I,ht),Ps.upload(B,uo(Ft),kn,Vt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ps.upload(B,uo(Ft),kn,Vt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&be.setValue(B,"center",H.center),be.setValue(B,"modelViewMatrix",H.modelViewMatrix),be.setValue(B,"normalMatrix",H.normalMatrix),be.setValue(B,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ve=X.uniformsGroups;for(let Ys=0,ll=Ve.length;Ys<ll;Ys++)if(Ht.isWebGL2){const mo=Ve[Ys];_t.update(mo,Vn),_t.bind(mo,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function al(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function cl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,O,j){Bt.get(T.texture).__webglTexture=O,Bt.get(T.depthTexture).__webglTexture=j;const X=Bt.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const j=Bt.get(T);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,j=0){w=T,A=O,b=j;let X=!0,H=null,ut=!1,vt=!1;if(T){const At=Bt.get(T);At.__useDefaultFramebuffer!==void 0?(bt.bindFramebuffer(B.FRAMEBUFFER,null),X=!1):At.__webglFramebuffer===void 0?Vt.setupRenderTarget(T):At.__hasExternalTextures&&Vt.rebindTextures(T,Bt.get(T.texture).__webglTexture,Bt.get(T.depthTexture).__webglTexture);const Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(vt=!0);const Pt=Bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pt[O])?H=Pt[O][j]:H=Pt[O],ut=!0):Ht.isWebGL2&&T.samples>0&&Vt.useMultisampledRTT(T)===!1?H=Bt.get(T).__webglMultisampledFramebuffer:Array.isArray(Pt)?H=Pt[j]:H=Pt,y.copy(T.viewport),C.copy(T.scissor),V=T.scissorTest}else y.copy(K).multiplyScalar($).floor(),C.copy(Q).multiplyScalar($).floor(),V=J;if(bt.bindFramebuffer(B.FRAMEBUFFER,H)&&Ht.drawBuffers&&X&&bt.drawBuffers(T,H),bt.viewport(y),bt.scissor(C),bt.setScissorTest(V),ut){const At=Bt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,At.__webglTexture,j)}else if(vt){const At=Bt.get(T.texture),Gt=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,At.__webglTexture,j||0,Gt)}L=-1},this.readRenderTargetPixels=function(T,O,j,X,H,ut,vt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St){bt.bindFramebuffer(B.FRAMEBUFFER,St);try{const At=T.texture,Gt=At.format,Pt=At.type;if(Gt!==Qe&&yt.convert(Gt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Pt===Xi&&(Mt.has("EXT_color_buffer_half_float")||Ht.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(Pt!==Un&&yt.convert(Pt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pt===Sn&&(Ht.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-X&&j>=0&&j<=T.height-H&&B.readPixels(O,j,X,H,yt.convert(Gt),yt.convert(Pt),ut)}finally{const At=w!==null?Bt.get(w).__webglFramebuffer:null;bt.bindFramebuffer(B.FRAMEBUFFER,At)}}},this.copyFramebufferToTexture=function(T,O,j=0){const X=Math.pow(2,-j),H=Math.floor(O.image.width*X),ut=Math.floor(O.image.height*X);Vt.setTexture2D(O,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,T.x,T.y,H,ut),bt.unbindTexture()},this.copyTextureToTexture=function(T,O,j,X=0){const H=O.image.width,ut=O.image.height,vt=yt.convert(j.format),St=yt.convert(j.type);Vt.setTexture2D(j,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment),O.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,X,T.x,T.y,H,ut,vt,St,O.image.data):O.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,X,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,vt,O.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,X,T.x,T.y,vt,St,O.image),X===0&&j.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(T,O,j,X,H=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ut=Math.round(T.max.x-T.min.x),vt=Math.round(T.max.y-T.min.y),St=T.max.z-T.min.z+1,At=yt.convert(X.format),Gt=yt.convert(X.type);let Pt;if(X.isData3DTexture)Vt.setTexture3D(X,0),Pt=B.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)Vt.setTexture2DArray(X,0),Pt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const It=B.getParameter(B.UNPACK_ROW_LENGTH),le=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Oe=B.getParameter(B.UNPACK_SKIP_PIXELS),_e=B.getParameter(B.UNPACK_SKIP_ROWS),hn=B.getParameter(B.UNPACK_SKIP_IMAGES),oe=j.isCompressedTexture?j.mipmaps[H]:j.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,oe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,oe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,T.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,T.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?B.texSubImage3D(Pt,H,O.x,O.y,O.z,ut,vt,St,At,Gt,oe.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Pt,H,O.x,O.y,O.z,ut,vt,St,At,oe.data):B.texSubImage3D(Pt,H,O.x,O.y,O.z,ut,vt,St,At,Gt,oe),B.pixelStorei(B.UNPACK_ROW_LENGTH,It),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,le),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Oe),B.pixelStorei(B.UNPACK_SKIP_ROWS,_e),B.pixelStorei(B.UNPACK_SKIP_IMAGES,hn),H===0&&X.generateMipmaps&&B.generateMipmap(Pt),bt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Vt.setTextureCube(T,0):T.isData3DTexture?Vt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Vt.setTexture2DArray(T,0):Vt.setTexture2D(T,0),bt.unbindTexture()},this.resetState=function(){A=0,b=0,w=null,bt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Kr?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Bs?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Mm extends jc{}Mm.prototype.isWebGL1Renderer=!0;class Vs{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new Vs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sm extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xc extends Ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const za=new D,Ba=new D,Ga=new ae,Cr=new Zr,Es=new Gs;class Em extends Ee{constructor(t=new Ue,e=new Xc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)za.fromBufferAttribute(e,i-1),Ba.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=za.distanceTo(Ba);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(i),Es.radius+=s,t.ray.intersectsSphere(Es)===!1)return;Ga.copy(i).invert(),Cr.copy(t.ray).applyMatrix4(Ga);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new D,h=new D,d=new D,u=new D,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let x=p,M=v-1;x<M;x+=m){const A=g.getX(x),b=g.getX(x+1);if(l.fromBufferAttribute(f,A),h.fromBufferAttribute(f,b),Cr.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(u);L<t.near||L>t.far||e.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let x=p,M=v-1;x<M;x+=m){if(l.fromBufferAttribute(f,x),h.fromBufferAttribute(f,x+1),Cr.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(u);b<t.near||b>t.far||e.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ha=new D,Va=new D;class bm extends Em{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Ha.fromBufferAttribute(e,i),Va.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ha.distanceTo(Va);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Se extends Ue{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],m=[];let g=0;const _=[],f=n/2;let p=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(m,2));function v(){const M=new D,A=new D;let b=0;const w=(e-t)/n;for(let L=0;L<=s;L++){const G=[],y=L/s,C=y*(e-t)+t;for(let V=0;V<=i;V++){const N=V/i,R=N*c+a,F=Math.sin(R),I=Math.cos(R);A.x=C*F,A.y=-y*n+f,A.z=C*I,d.push(A.x,A.y,A.z),M.set(F,w,I).normalize(),u.push(M.x,M.y,M.z),m.push(N,1-y),G.push(g++)}_.push(G)}for(let L=0;L<i;L++)for(let G=0;G<s;G++){const y=_[G][L],C=_[G+1][L],V=_[G+1][L+1],N=_[G][L+1];h.push(y,C,N),h.push(C,V,N),b+=6}l.addGroup(p,b,0),p+=b}function x(M){const A=g,b=new zt,w=new D;let L=0;const G=M===!0?t:e,y=M===!0?1:-1;for(let V=1;V<=i;V++)d.push(0,f*y,0),u.push(0,y,0),m.push(.5,.5),g++;const C=g;for(let V=0;V<=i;V++){const R=V/i*c+a,F=Math.cos(R),I=Math.sin(R);w.x=G*I,w.y=f*y,w.z=G*F,d.push(w.x,w.y,w.z),u.push(0,y,0),b.x=F*.5+.5,b.y=I*.5*y+.5,m.push(b.x,b.y),g++}for(let V=0;V<i;V++){const N=A+V,R=C+V;M===!0?h.push(R,R+1,N):h.push(R+1,R,N),L+=3}l.addGroup(p,L,M===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ji extends Se{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ji(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class no extends Ue{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(s.slice(),3)),this.setAttribute("uv",new ee(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new D,M=new D,A=new D;for(let b=0;b<e.length;b+=3)m(e[b+0],x),m(e[b+1],M),m(e[b+2],A),c(x,M,A,v)}function c(v,x,M,A){const b=A+1,w=[];for(let L=0;L<=b;L++){w[L]=[];const G=v.clone().lerp(M,L/b),y=x.clone().lerp(M,L/b),C=b-L;for(let V=0;V<=C;V++)V===0&&L===b?w[L][V]=G:w[L][V]=G.clone().lerp(y,V/C)}for(let L=0;L<b;L++)for(let G=0;G<2*(b-L)-1;G++){const y=Math.floor(G/2);G%2===0?(u(w[L][y+1]),u(w[L+1][y]),u(w[L][y])):(u(w[L][y+1]),u(w[L+1][y+1]),u(w[L+1][y]))}}function l(v){const x=new D;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(v),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function h(){const v=new D;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const M=f(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;o.push(M,1-A)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const x=o[v+0],M=o[v+2],A=o[v+4],b=Math.max(x,M,A),w=Math.min(x,M,A);b>.9&&w<.1&&(x<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function m(v,x){const M=v*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){const v=new D,x=new D,M=new D,A=new D,b=new zt,w=new zt,L=new zt;for(let G=0,y=0;G<s.length;G+=9,y+=6){v.set(s[G+0],s[G+1],s[G+2]),x.set(s[G+3],s[G+4],s[G+5]),M.set(s[G+6],s[G+7],s[G+8]),b.set(o[y+0],o[y+1]),w.set(o[y+2],o[y+3]),L.set(o[y+4],o[y+5]),A.copy(v).add(x).add(M).divideScalar(3);const C=f(A);_(b,y+0,v,C),_(w,y+2,x,C),_(L,y+4,M,C)}}function _(v,x,M,A){A<0&&v.x===1&&(o[x]=v.x-1),M.x===0&&M.z===0&&(o[x]=A/2/Math.PI+.5)}function f(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.vertices,t.indices,t.radius,t.details)}}class io extends no{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new io(t.radius,t.detail)}}class so extends Ue{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let d=t;const u=(e-t)/i,m=new D,g=new zt;for(let _=0;_<=i;_++){for(let f=0;f<=n;f++){const p=s+f/n*o;m.x=d*Math.cos(p),m.y=d*Math.sin(p),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){const f=_*(n+1);for(let p=0;p<n;p++){const v=p+f,x=v,M=v+n+1,A=v+n+2,b=v+1;a.push(x,M,b),a.push(M,A,b)}}this.setIndex(a),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class je extends Ue{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new D,u=new D,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const b=A/e;d.x=-t*Math.cos(i+b*s)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(i+b*s)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),f.push(b+M,1-x),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const x=h[p][v+1],M=h[p][v],A=h[p+1][v],b=h[p+1][v+1];(p!==0||o>0)&&m.push(x,M,b),(p!==n-1||c<Math.PI)&&m.push(M,A,b)}this.setIndex(m),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ks extends Ue{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new D,d=new D,u=new D;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*s,f=m/n*Math.PI*2;d.x=(t+e*Math.cos(f))*Math.cos(_),d.y=(t+e*Math.cos(f))*Math.sin(_),d.z=e*Math.sin(f),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,f=(i+1)*(m-1)+g-1,p=(i+1)*(m-1)+g,v=(i+1)*m+g;o.push(_,f,v),o.push(f,p,v)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Zi extends Ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qc extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Rr=new ae,ka=new D,Wa=new D;class wm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ka.setFromMatrixPosition(t.matrixWorld),e.position.copy(ka),Wa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wa),e.updateMatrixWorld(),Rr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Tm extends wm{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ja extends qc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Tm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Am extends qc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xa=new ae;class Cm{constructor(t,e,n=0,i=1/0){this.ray=new Zr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xa.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xa),this}intersectObject(t,e=!0,n=[]){return qr(t,this,n,e),n.sort(qa),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)qr(t[i],this,n,e);return n.sort(qa),n}}function qa(r,t){return r.distance-t.distance}function qr(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)qr(i[s],t,e,!0)}}class Yc extends bm{constructor(t=10,e=10,n=4473924,i=8947848){n=new Ct(n),i=new Ct(i);const s=e/2,o=t/e,a=t/2,c=[],l=[];for(let u=0,m=0,g=-a;u<=e;u++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=u===s?n:i;_.toArray(l,m),m+=3,_.toArray(l,m),m+=3,_.toArray(l,m),m+=3,_.toArray(l,m),m+=3}const h=new Ue;h.setAttribute("position",new ee(c,3)),h.setAttribute("color",new ee(l,3));const d=new Xc({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yr);class Rm{constructor(t){this.canvas=t,this.envParams={lightIntensity:1,lightAngle:45,ambientIntensity:.4,colorTemperature:5500},this._initRenderer(),this._initScene(),this._initCamera(),this._initLights(),this._initGround(),this._onResize=this._onResize.bind(this),window.addEventListener("resize",this._onResize),this._onResize()}_initRenderer(){this.renderer=new jc({canvas:this.canvas,antialias:!0,alpha:!1}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=pc,this.renderer.toneMapping=gc,this.renderer.toneMappingExposure=1,this.renderer.outputColorSpace=Ke}_initScene(){this.scene=new Sm,this.scene.background=new Ct(989475),this.scene.fog=new Vs(989475,8,25)}_initCamera(){const t=this.canvas.clientWidth/this.canvas.clientHeight;this.camera=new We(50,t,.1,100),this.camera.position.set(1.2,1,1.5),this.camera.lookAt(0,.45,0),this._orbitAngle=Math.atan2(this.camera.position.z,this.camera.position.x),this._orbitRadius=Math.sqrt(this.camera.position.x**2+this.camera.position.z**2),this._orbitY=this.camera.position.y,this._isDragging=!1,this._lastMouse={x:0,y:0},this._dragMode=null,this._raycaster=new Cm,this._mouse=new zt,this._groundPlane=new Ln(new D(0,1,0),0),this.onRobotDragged=null,this.canvas.addEventListener("mousedown",e=>{e.shiftKey||e.button===2?this._dragMode="robot":this._dragMode="orbit",this._isDragging=!0,this._lastMouse={x:e.clientX,y:e.clientY}}),this.canvas.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("mouseup",()=>{this._isDragging=!1,this._dragMode=null}),window.addEventListener("mousemove",e=>{if(!this._isDragging)return;const n=e.clientX-this._lastMouse.x,i=e.clientY-this._lastMouse.y;if(this._dragMode==="orbit")this._orbitAngle+=n*.005,this._orbitY=Math.max(.3,Math.min(3,this._orbitY+i*.005)),this._lastMouse={x:e.clientX,y:e.clientY},this._updateCameraOrbit();else if(this._dragMode==="robot"){const s=this.canvas.getBoundingClientRect();this._mouse.x=(e.clientX-s.left)/s.width*2-1,this._mouse.y=-((e.clientY-s.top)/s.height)*2+1,this._raycaster.setFromCamera(this._mouse,this.camera);const o=new D;if(this._raycaster.ray.intersectPlane(this._groundPlane,o),o&&this.onRobotDragged){const a=(c,l,h)=>Math.max(l,Math.min(h,c));this.onRobotDragged(a(o.x,-2,2),a(o.z,-2,2))}this._lastMouse={x:e.clientX,y:e.clientY}}}),this.canvas.addEventListener("wheel",e=>{e.preventDefault(),this._orbitRadius=Math.max(.8,Math.min(5,this._orbitRadius+e.deltaY*.002)),this._updateCameraOrbit()},{passive:!1})}_updateCameraOrbit(){this.camera.position.x=Math.cos(this._orbitAngle)*this._orbitRadius,this.camera.position.z=Math.sin(this._orbitAngle)*this._orbitRadius,this.camera.position.y=this._orbitY,this.camera.lookAt(0,.45,0)}_initLights(){this.ambientLight=new Am(16777215,this.envParams.ambientIntensity),this.scene.add(this.ambientLight),this.mainLight=new ja(16777215,this.envParams.lightIntensity),this.mainLight.position.set(2,3,1),this.mainLight.castShadow=!0,this.mainLight.shadow.mapSize.set(2048,2048),this.mainLight.shadow.camera.near=.1,this.mainLight.shadow.camera.far=10,this.mainLight.shadow.camera.left=-2,this.mainLight.shadow.camera.right=2,this.mainLight.shadow.camera.top=2,this.mainLight.shadow.camera.bottom=-2,this.scene.add(this.mainLight),this.fillLight=new ja(8952251,.3),this.fillLight.position.set(-1,2,-1),this.scene.add(this.fillLight);const t=new Yc(6,30,1714746,1121578);t.position.y=.001,this.scene.add(t)}_initGround(){const t=new On(10,10),e=new Zi({color:857376,roughness:.9,metalness:.1});this.ground=new ft(t,e),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.scene.add(this.ground)}updateEnvironment(t){Object.assign(this.envParams,t),this.mainLight.intensity=this.envParams.lightIntensity,this.ambientLight.intensity=this.envParams.ambientIntensity;const e=this.envParams.lightAngle*Math.PI/180,n=3;this.mainLight.position.set(Math.cos(e)*n,2+Math.sin(e)*1.5,Math.sin(e)*n);const i=this.envParams.colorTemperature;this.mainLight.color.copy(this._kelvinToColor(i)),this.renderer.toneMappingExposure=.5+this.envParams.lightIntensity*.7}_kelvinToColor(t){const e=t/100;let n,i,s;return e<=66?(n=255,i=Math.max(0,Math.min(255,99.4708*Math.log(e)-161.1196)),s=e<=19?0:Math.max(0,Math.min(255,138.5177*Math.log(e-10)-305.0448))):(n=Math.max(0,Math.min(255,329.6987*Math.pow(e-60,-.1332))),i=Math.max(0,Math.min(255,288.1221*Math.pow(e-60,-.0755))),s=255),new Ct(n/255,i/255,s/255)}_onResize(){const t=this.canvas.parentElement,e=t.clientWidth,n=t.clientHeight;this.renderer.setSize(e,n),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}render(){this.renderer.render(this.scene,this.camera)}captureRGBFeatures(){const e=new Bn(8,8);this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.camera);const n=new Uint8Array(8*8*4);this.renderer.readRenderTargetPixels(e,0,0,8,8,n),this.renderer.setRenderTarget(null),e.dispose();const i=new Float32Array(8*8*3);for(let s=0;s<8*8;s++)i[s*3]=n[s*4]/255,i[s*3+1]=n[s*4+1]/255,i[s*3+2]=n[s*4+2]/255;return i}dispose(){window.removeEventListener("resize",this._onResize),this.renderer.dispose()}}const bs={baseHeight:.06,baseRadius:.06,shoulderHeight:.08,upperArmLength:.22,elbowSize:.03,lowerArmLength:.2,wristSize:.022,gripperLength:.07,gripperWidth:.012,gripperGap:.04,jointColor:2763306,armColor:15263976,gripperColor:3815994,accentColor:3900150};class Pm{constructor(){this.group=new Zt,this.joints={base:0,shoulder:-.6,elbow:1.2,wristPitch:-.5,wristRoll:0,wristYaw:0,gripperOpen:.5},this.torques=new Float32Array(6),this.isGripping=!1,this.contactForce=new D,this._buildArm()}_mat(t,e=.6,n=.35){return new Zi({color:t,metalness:e,roughness:n})}_buildArm(){const t=bs,e=new Se(t.baseRadius,t.baseRadius*1.15,t.baseHeight,24),n=new ft(e,this._mat(t.jointColor,.8,.2));n.castShadow=!0,this.basePivot=new Zt,this.basePivot.add(n),n.position.y=t.baseHeight/2,this.group.add(this.basePivot);const i=new ks(t.baseRadius*.9,.003,8,32),s=new ft(i,this._mat(t.accentColor,.3,.5));s.rotation.x=Math.PI/2,s.position.y=t.baseHeight,this.basePivot.add(s);const o=new Se(.035,.04,t.shoulderHeight,16),a=new ft(o,this._mat(t.jointColor));a.castShadow=!0,this.shoulderPivot=new Zt,this.shoulderPivot.position.y=t.baseHeight,a.position.y=t.shoulderHeight/2,this.shoulderPivot.add(a),this.basePivot.add(this.shoulderPivot);const c=new Kt(.032,t.upperArmLength,.028),l=new ft(c,this._mat(t.armColor,.4,.45));l.castShadow=!0,this.upperArmPivot=new Zt,this.upperArmPivot.position.y=t.shoulderHeight,l.position.y=t.upperArmLength/2,this.upperArmPivot.add(l),this.shoulderPivot.add(this.upperArmPivot);const h=new ft(new je(.025,12,12),this._mat(t.jointColor));h.castShadow=!0,this.upperArmPivot.add(h);const d=new ft(new je(t.elbowSize,12,12),this._mat(t.jointColor));d.castShadow=!0,this.elbowPivot=new Zt,this.elbowPivot.position.y=t.upperArmLength,this.elbowPivot.add(d),this.upperArmPivot.add(this.elbowPivot);const u=new Kt(.026,t.lowerArmLength,.024),m=new ft(u,this._mat(t.armColor,.4,.45));m.castShadow=!0,m.position.y=t.lowerArmLength/2,this.elbowPivot.add(m),this.wristPitchPivot=new Zt,this.wristPitchPivot.position.y=t.lowerArmLength,this.elbowPivot.add(this.wristPitchPivot);const g=new ft(new je(t.wristSize,12,12),this._mat(t.jointColor));g.castShadow=!0,this.wristPitchPivot.add(g),this.wristRollPivot=new Zt,this.wristPitchPivot.add(this.wristRollPivot),this.wristYawPivot=new Zt,this.wristRollPivot.add(this.wristYawPivot);const _=new Se(.018,.015,.02,12),f=new ft(_,this._mat(t.gripperColor));f.castShadow=!0,f.position.y=.01,this.wristYawPivot.add(f),this.gripperGroup=new Zt,this.gripperGroup.position.y=.02,this.wristYawPivot.add(this.gripperGroup);const p=new Kt(t.gripperWidth,t.gripperLength,.008),v=this._mat(t.gripperColor,.7,.3);this.leftFinger=new ft(p,v),this.leftFinger.castShadow=!0,this.leftFinger.position.set(0,t.gripperLength/2,0),this.leftFingerPivot=new Zt,this.leftFingerPivot.add(this.leftFinger),this.gripperGroup.add(this.leftFingerPivot),this.rightFinger=new ft(p,v),this.rightFinger.castShadow=!0,this.rightFinger.position.set(0,t.gripperLength/2,0),this.rightFingerPivot=new Zt,this.rightFingerPivot.add(this.rightFinger),this.gripperGroup.add(this.rightFingerPivot);const x=new Kt(t.gripperWidth+.002,.01,.012),M=this._mat(t.accentColor,.3,.5),A=new ft(x,M);A.position.y=t.gripperLength,this.leftFingerPivot.add(A);const b=new ft(x,M);b.position.y=t.gripperLength,this.rightFingerPivot.add(b),this.updateJoints()}updateJoints(){const t=this.joints,e=bs;this.basePivot.rotation.y=t.base,this.upperArmPivot.rotation.z=t.shoulder,this.elbowPivot.rotation.z=t.elbow,this.wristPitchPivot.rotation.z=t.wristPitch,this.wristRollPivot.rotation.y=t.wristRoll,this.wristYawPivot.rotation.z=t.wristYaw;const n=t.gripperOpen*e.gripperGap/2;this.leftFingerPivot.position.z=n,this.rightFingerPivot.position.z=-n}getEndEffectorPosition(){const t=new D(0,bs.gripperLength,0);return this.gripperGroup.localToWorld(t),t}getJointAngles(){const t=this.joints;return new Float32Array([t.base,t.shoulder,t.elbow,t.wristPitch,t.wristRoll,t.wristYaw])}computeIK(t,e){const n=bs,i=n.upperArmLength,s=n.lowerArmLength+n.gripperLength*.6,o=e+n.baseHeight+n.shoulderHeight,a=Math.atan2(t.z,t.x),c=Math.sqrt(t.x*t.x+t.z*t.z),l=t.y-o,h=c*c+l*l,d=Math.sqrt(h),u=i+s-.005,m=Math.abs(i-s)+.005;if(d>u||d<m){const w=Math.min(u,Math.max(m,d))/Math.max(d,.001);return this.computeIK({x:t.x*w,y:o+l*w,z:t.z*w},e)}const g=(h-i*i-s*s)/(2*i*s),_=-Math.acos(Math.max(-1,Math.min(1,g))),f=i+s*Math.cos(_),p=s*Math.sin(_),v=Math.atan2(l,c)-Math.atan2(p,f),x=v-Math.PI/2,M=_,A=-v-_-Math.PI/2;return{base:a,shoulder:x,elbow:M,wristPitch:A}}solveIK(t,e){const n=this.computeIK(t,e);return n?(this.joints.base=n.base,this.joints.shoulder=n.shoulder,this.joints.elbow=n.elbow,this.joints.wristPitch=n.wristPitch,this.updateJoints(),!0):!1}lerpJoints(t,e){const n=Math.min(1,Math.max(0,e));this.joints.base+=(t.base-this.joints.base)*n,this.joints.shoulder+=(t.shoulder-this.joints.shoulder)*n,this.joints.elbow+=(t.elbow-this.joints.elbow)*n,this.joints.wristPitch+=(t.wristPitch-this.joints.wristPitch)*n,this.updateJoints()}addToScene(t,e){this.group.position.y=e,t.add(this.group)}}function qt(r,t=.7,e=.1){return new Zi({color:r,roughness:t,metalness:e})}function Lm(r){return new Zi({color:r,roughness:.9,metalness:.05,side:Ze})}const $c={kitchen:{name:"Kitchen",icon:"🍳",floor:{color:9139029,size:8},walls:!0,wallColor:16117992,ambient:.5,lightColor:16774624,fogColor:2761240,tableHeight:.42,tableSize:[1.2,.03,.7],tableColor:3877402,props:["chair","chair","counter","fridge","plate","plate","mug","bowl","cutting_board"]},warehouse:{name:"Warehouse",icon:"🏭",floor:{color:5592405,size:10},walls:!0,wallColor:8947848,ambient:.35,lightColor:16777215,fogColor:1710623,tableHeight:.38,tableSize:[1.5,.04,.8],tableColor:6710886,props:["shelf","shelf","conveyor","pallet","crate","crate","barrel"]},park:{name:"Park / Outdoor",icon:"🌳",floor:{color:3828520,size:12},walls:!1,ambient:.6,lightColor:16776672,fogColor:1714709,tableHeight:.38,tableSize:[1,.04,.55],tableColor:5913114,props:["bench","tree","tree","bush","bush","rock","rock","lamppost"]},lab:{name:"Lab / Default",icon:"🔬",floor:{color:857376,size:6},walls:!1,ambient:.4,lightColor:16777215,fogColor:989475,tableHeight:.42,tableSize:[.9,.03,.6],tableColor:2760468,props:[]}},Im={chair(r,t,e,n=0){const i=new Zt;i.add(Object.assign(new ft(new Kt(.4,.03,.4),qt(5913120,.7,.15)),{position:new D(0,.44,0),castShadow:!0}));for(const[s,o]of[[-.16,-.16],[.16,-.16],[-.16,.16],[.16,.16]])i.add(Object.assign(new ft(new Se(.012,.012,.44,6),qt(3811861)),{position:new D(s,.22,o),castShadow:!0}));return i.add(Object.assign(new ft(new Kt(.38,.35,.025),qt(5913120,.7,.15)),{position:new D(0,.63,-.18),castShadow:!0})),i.position.set(t,0,e),i.rotation.y=n,r.add(i),i},counter(r,t,e,n=0){const i=new Zt;return i.add(Object.assign(new ft(new Kt(.8,.85,.5),qt(13945272,.6,.1)),{position:new D(0,.425,0),castShadow:!0,receiveShadow:!0})),i.add(Object.assign(new ft(new Kt(.84,.03,.54),qt(8947848,.3,.4)),{position:new D(0,.87,0),castShadow:!0})),i.position.set(t,0,e),i.rotation.y=n,r.add(i),i},fridge(r,t,e,n=0){const i=new Zt;return i.add(Object.assign(new ft(new Kt(.6,1.7,.6),qt(14474460,.3,.6)),{position:new D(0,.85,0),castShadow:!0})),i.add(Object.assign(new ft(new Se(.008,.008,.2,6),qt(10066329,.2,.8)),{position:new D(.25,1.1,.31),castShadow:!0})),i.position.set(t,0,e),i.rotation.y=n,r.add(i),i},plate(r,t,e){const n=new ft(new Se(.1,.09,.012,24),qt(15789284,.4,.1));return n.castShadow=!0,r.add(n),n.position.set(t,0,e),n},mug(r,t,e){const n=new Zt;n.add(Object.assign(new ft(new Se(.03,.028,.08,12),qt(12597547,.5,.1)),{position:new D(0,.04,0),castShadow:!0}));const i=new ft(new ks(.018,.004,6,12,Math.PI),qt(12597547,.5,.1));return i.rotation.z=Math.PI/2,i.position.set(.04,.04,0),n.add(i),n.position.set(t,0,e),r.add(n),n},bowl(r,t,e){const n=new ft(new je(.06,16,12,0,Math.PI*2,0,Math.PI/2),qt(15260872,.5,.05));return n.castShadow=!0,n.position.set(t,0,e),r.add(n),n},cutting_board(r,t,e){const n=new ft(new Kt(.25,.012,.15),qt(9136404,.8,.05));return n.castShadow=!0,n.rotation.y=Math.random()*.3,n.position.set(t,0,e),r.add(n),n},shelf(r,t,e,n=0){const i=new Zt;for(const s of[-.4,.4])i.add(Object.assign(new ft(new Kt(.04,1.8,.04),qt(5592405,.4,.6)),{position:new D(s,.9,0),castShadow:!0}));for(const s of[.35,.7,1.05,1.4])i.add(Object.assign(new ft(new Kt(.84,.02,.45),qt(6710886,.5,.4)),{position:new D(0,s,0),castShadow:!0}));return i.position.set(t,0,e),i.rotation.y=n,r.add(i),i},conveyor(r,t,e,n=0){const i=new Zt;i.add(Object.assign(new ft(new Kt(2,.03,.4),qt(2236962,.8,.2)),{position:new D(0,.35,0),castShadow:!0})),i.add(Object.assign(new ft(new Kt(2.1,.3,.08),qt(8947848,.4,.5)),{position:new D(0,.2,.2)})),i.add(Object.assign(new ft(new Kt(2.1,.3,.08),qt(8947848,.4,.5)),{position:new D(0,.2,-.2)}));for(const s of[-.9,0,.9])for(const o of[-.16,.16])i.add(Object.assign(new ft(new Se(.02,.02,.35,6),qt(7829367)),{position:new D(s,.175,o)}));return i.position.set(t,0,e),i.rotation.y=n,r.add(i),i},pallet(r,t,e){const n=new Zt;for(let i=0;i<5;i++)n.add(Object.assign(new ft(new Kt(.5,.02,.08),qt(9139029,.8,.05)),{position:new D(0,.1,-.2+i*.1),castShadow:!0}));for(const i of[-.15,0,.15])n.add(Object.assign(new ft(new Kt(.08,.08,.5),qt(9139029,.8,.05)),{position:new D(0,.05,i)}));return n.position.set(t,0,e),r.add(n),n},crate(r,t,e){const n=.2+Math.random()*.15,i=new ft(new Kt(n,n*.8,n),qt(9136404,.85,.05));return i.castShadow=!0,i.position.set(t,n*.4,e),i.rotation.y=Math.random()*.4,r.add(i),i},barrel(r,t,e){const n=new ft(new Se(.18,.16,.5,12),qt(4876938,.5,.4));return n.castShadow=!0,n.position.set(t,.25,e),r.add(n),n},tree(r,t,e){const n=new Zt;n.add(Object.assign(new ft(new Se(.06,.08,.8,8),qt(5913114,.85,.05)),{position:new D(0,.4,0),castShadow:!0}));const i=qt(2972190,.8,.05);return n.add(Object.assign(new ft(new ji(.4,.6,8),i),{position:new D(0,1,0),castShadow:!0})),n.add(Object.assign(new ft(new ji(.32,.5,8),i),{position:new D(0,1.35,0),castShadow:!0})),n.add(Object.assign(new ft(new ji(.22,.4,8),i),{position:new D(0,1.6,0),castShadow:!0})),n.position.set(t,0,e),r.add(n),n},bush(r,t,e){const n=new Zt,i=qt(3832362,.8,.05);return n.add(Object.assign(new ft(new je(.18,8,6),i),{position:new D(0,.15,0),castShadow:!0})),n.add(Object.assign(new ft(new je(.14,8,6),i),{position:new D(.1,.22,.08),castShadow:!0})),n.add(Object.assign(new ft(new je(.12,8,6),i),{position:new D(-.08,.2,-.06),castShadow:!0})),n.position.set(t,0,e),r.add(n),n},rock(r,t,e){const n=.08+Math.random()*.12,i=new ft(new io(n,1),qt(7829367,.85,.15));return i.castShadow=!0,i.position.set(t,n*.5,e),i.rotation.set(Math.random(),Math.random(),Math.random()),i.scale.y=.6+Math.random()*.3,r.add(i),i},bench(r,t,e,n=0){const i=new Zt,s=qt(7029286,.75,.1);i.add(Object.assign(new ft(new Kt(1,.04,.35),s),{position:new D(0,.42,0),castShadow:!0})),i.add(Object.assign(new ft(new Kt(1,.3,.03),s),{position:new D(0,.6,-.16),castShadow:!0}));const o=qt(3355443,.4,.7);for(const a of[-.4,.4])i.add(Object.assign(new ft(new Kt(.04,.42,.3),o),{position:new D(a,.21,0),castShadow:!0}));return i.position.set(t,0,e),i.rotation.y=n,r.add(i),i},lamppost(r,t,e){const n=new Zt,i=qt(2763306,.3,.7);return n.add(Object.assign(new ft(new Se(.025,.03,2.2,8),i),{position:new D(0,1.1,0),castShadow:!0})),n.add(Object.assign(new ft(new je(.08,8,6),qt(16777164,.3,.1)),{position:new D(0,2.25,0)})),n.add(Object.assign(new ft(new Se(.012,.012,.15,6),i),{position:new D(0,2.15,0)})),n.position.set(t,0,e),r.add(n),n}},Dm={kitchen:{chair:[{x:0,z:-.65,r:0},{x:0,z:.65,r:Math.PI}],counter:[{x:-1.2,z:0,r:Math.PI/2}],fridge:[{x:-1.6,z:-.8,r:0}],plate:[{x:.2,z:.12},{x:-.15,z:-.1}],mug:[{x:.35,z:-.15}],bowl:[{x:-.3,z:.15}],cutting_board:[{x:-.1,z:.22}]},warehouse:{shelf:[{x:-2,z:-1.5,r:0},{x:-2,z:1.5,r:0}],conveyor:[{x:1.5,z:0,r:Math.PI/2}],pallet:[{x:-1.5,z:0}],crate:[{x:-1.5,z:-.5},{x:-1.3,z:.4}],barrel:[{x:2,z:-1.2}]},park:{bench:[{x:1.5,z:0,r:-Math.PI/2}],tree:[{x:-2.5,z:-2},{x:2.5,z:2}],bush:[{x:-1.5,z:1.5},{x:1.8,z:-1.2}],rock:[{x:-.8,z:1.8},{x:1.2,z:-1.8}],lamppost:[{x:-2,z:0}]},lab:{}};class Nm{constructor(t){this.scene=t,this.tableHeight=.42,this.currentPreset="lab",this.currentObject=null,this.currentObjectMesh=null,this.targetPosition=new D(.25,this.tableHeight,0),this.collectPosition=new D(-.25,this.tableHeight+.1,0),this._envGroup=new Zt,this._envGroup.name="environment",t.add(this._envGroup),this._propsGroup=new Zt,this._propsGroup.name="props",t.add(this._propsGroup),this._tableGroup=new Zt,this._tableGroup.name="table",t.add(this._tableGroup),this.propMeshes=[],this.loadPreset("lab"),this._buildTargetMarker()}loadPreset(t){const e=$c[t];if(!e)return;this.currentPreset=t,this.tableHeight=e.tableHeight,this._clearGroup(this._envGroup),this._clearGroup(this._propsGroup),this._clearGroup(this._tableGroup),this.propMeshes=[];const n=new On(e.floor.size,e.floor.size),i=new ft(n,Lm(e.floor.color));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,this._envGroup.add(i);const s=new Yc(e.floor.size,e.floor.size*5,new Ct(e.floor.color).lerp(new Ct(16777215),.1),new Ct(e.floor.color).lerp(new Ct(16777215),.05));if(s.position.y=.002,this._envGroup.add(s),e.walls){const o=qt(e.wallColor,.85,.05),a=2.5,c=e.floor.size/2,l=new ft(new On(e.floor.size,a),o);l.position.set(0,a/2,-c),l.receiveShadow=!0,this._envGroup.add(l);const h=new ft(new On(e.floor.size,a),o);h.position.set(-c,a/2,0),h.rotation.y=Math.PI/2,h.receiveShadow=!0,this._envGroup.add(h)}return this._buildTable(e),this._buildProps(t,e),this.scene.fog=new Vs(e.fogColor,6,20),e}_buildTable(t){const[e,n,i]=t.tableSize,s=qt(t.tableColor,.75,.1);this.tabletop=new ft(new Kt(e,n,i),s),this.tabletop.position.y=this.tableHeight,this.tabletop.castShadow=!0,this.tabletop.receiveShadow=!0,this._tableGroup.add(this.tabletop);const o=new Se(.018,.018,this.tableHeight-n/2,8),a=qt(new Ct(t.tableColor).lerp(new Ct(0),.3),.6,.3),c=e/2-.06,l=i/2-.06;for(const[u,m]of[[-c,-l],[c,-l],[-c,l],[c,l]]){const g=new ft(o,a);g.position.set(u,(this.tableHeight-n/2)/2,m),g.castShadow=!0,this._tableGroup.add(g)}const h=new Kt(e+.01,.005,i+.01),d=new ft(h,qt(5592405,.3,.8));d.position.y=this.tableHeight+n/2,this._tableGroup.add(d)}_buildProps(t,e){const n=Dm[t]||{};for(const i of e.props){const s=Im[i];if(!s)continue;const o=n[i];if(!o||o.length===0)continue;const a=o.shift();if(!a)continue;const c=["plate","mug","bowl","cutting_board"].includes(i),l=c?this.tableHeight+.016:0,h=s(this._propsGroup,a.x,a.z,a.r||0);h&&c&&(h.position.y+=l),this.propMeshes.push(h)}}_buildTargetMarker(){const t=new so(.04,.05,32),e=new Qr({color:2278750,side:Ze,transparent:!0,opacity:.4});this.targetMarker=new ft(t,e),this.targetMarker.rotation.x=-Math.PI/2,this.targetMarker.position.set(-.25,this.tableHeight+.016,.1),this.scene.add(this.targetMarker)}_clearGroup(t){for(;t.children.length;){const e=t.children[0];if(t.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose()),e.children)for(;e.children.length;){const n=e.children[0];e.remove(n),n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()}}}spawnObject(t){this.currentObjectMesh&&(this.scene.remove(this.currentObjectMesh),this.currentObjectMesh.geometry.dispose(),this.currentObjectMesh.material.dispose()),this.currentObject=t;const e=t.physics,n=new Ct(e.color[0],e.color[1],e.color[2]);let i;switch(e.shape){case"sphere":i=new je(e.radius,24,24);break;case"cylinder":i=new Se(e.radius,e.radius,e.length||.1,16);break;case"box":i=new Kt(e.width||.1,e.height||.1,e.depth||.1);break;default:i=new je(.03,16,16)}const s=new Zi({color:n,roughness:e.surfaceTexture==="rough"?.8:.35,metalness:.05});this.currentObjectMesh=new ft(i,s),this.currentObjectMesh.castShadow=!0;const o=e.shape==="sphere"?e.radius:e.shape==="cylinder"?(e.length||.1)/2:(e.height||.1)/2;return this.objectRestY=this.tableHeight+.015+o,this.currentObjectMesh.position.set(this.targetPosition.x,this.objectRestY,this.targetPosition.z),this.scene.add(this.currentObjectMesh),this.currentObjectMesh}setObjectPosition(t,e,n){this.currentObjectMesh&&this.currentObjectMesh.position.set(t,e,n)}getObjectPosition(){return this.currentObjectMesh?this.currentObjectMesh.position.clone():new D}update(t){if(this.targetMarker){this.targetMarker.material.opacity=.25+.2*Math.sin(t*3);const e=1+.08*Math.sin(t*3);this.targetMarker.scale.set(e,e,1)}}}class tn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new S);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new S);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new tn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],m=n[7],g=n[8],_=i[0],f=i[1],p=i[2],v=i[3],x=i[4],M=i[5],A=i[6],b=i[7],w=i[8];return s[0]=o*_+a*v+c*A,s[1]=o*f+a*x+c*b,s[2]=o*p+a*M+c*w,s[3]=l*_+h*v+d*A,s[4]=l*f+h*x+d*b,s[5]=l*p+h*M+d*w,s[6]=u*_+m*v+g*A,s[7]=u*f+m*x+g*b,s[8]=u*p+m*M+g*w,e}scale(t,e){e===void 0&&(e=new tn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new S);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let c=3;const l=c;let h;const d=4;let u;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){const m=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*m;while(--h)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new tn);const e=3,n=6,i=Fm;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const h=n;let d;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){const u=i[s+n*o]/i[s+n*s];l=h;do d=h-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--l)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--l)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,d=e*c,u=n*a,m=n*c,g=i*c,_=s*o,f=s*a,p=s*c,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-p,v[3*0+2]=d+f,v[3*1+0]=h+p,v[3*1+1]=1-(l+g),v[3*1+2]=m-_,v[3*2+0]=d-f,v[3*2+1]=m+_,v[3*2+2]=1-(l+u),this}transpose(t){t===void 0&&(t=new tn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Fm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class S{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new S);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new S(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new S(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new tn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new S);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new S);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new S),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new S),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new S),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Um,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Om;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Ya),Ya.almostEquals(t,e)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);const Um=new S,Om=new S,Ya=new S;class Ge{constructor(t){t===void 0&&(t={}),this.lowerBound=new S,this.upperBound=new S,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,$a),l=$a),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Ge().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,c){const l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){const n=Ka,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Ka,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,m=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(g<0||m>g)}}const $a=new S,Ka=[new S,new S,new S,new S,new S,new S,new S,new S];class Za{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Kc{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class fe{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new S),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=zm,i=Bm;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new fe);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-s*c,e.y=i*h+o*c+s*a-n*l,e.z=s*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new fe);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new fe),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new S);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*s-c*i,d=l*i+c*n-o*s,u=l*s+o*i-a*n,m=-o*n-a*i-c*s;return e.x=h*l+m*-o+d*-c-u*-a,e.y=d*l+m*-a+u*-o-h*-c,e.z=u*l+m*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,m=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*m),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*a*c,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a+c*l*h),this}clone(){return new fe(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new fe);const i=this.x,s=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,h=t.z,d=t.w,u,m,g,_,f;return m=i*c+s*l+o*h+a*d,m<0&&(m=-m,c=-c,l=-l,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),_=Math.sin((1-e)*u)/g,f=Math.sin(e*u)/g):(_=1-e,f=e),n.x=_*i+f*c,n.y=_*s+f*l,n.z=_*o+f*h,n.w=_*a+f*d,n}integrate(t,e,n,i){i===void 0&&(i=new fe);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*l),i.y+=u*(o*d+a*c-s*h),i.z+=u*(a*d+s*l-o*c),i.w+=u*(-s*c-o*l-a*h),i}}const zm=new S,Bm=new S,Gm={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class dt{constructor(t){t===void 0&&(t={}),this.id=dt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}dt.idCounter=0;dt.types=Gm;class Yt{constructor(t){t===void 0&&(t={}),this.position=new S,this.quaternion=new fe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Yt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Yt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new S),n.vsub(t,i),e.conjugate(Ja),Ja.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new S),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new S),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new S),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Ja=new fe;class Ti extends dt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:dt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new S;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new S;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Ti.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new S,o=new S;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,c,l){const h=new S;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const _=h.dot(o);_>u&&(u=_,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],f=new S;f.copy(_),s.vmult(f,f),i.vadd(f,f),m.push(f)}d>=0&&this.clipFaceAgainstHull(o,t,e,m,a,c,l)}findSeparatingAxis(t,e,n,i,s,o,a,c){const l=new S,h=new S,d=new S,u=new S,m=new S,g=new S;let _=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let p=0;p!==f.uniqueAxes.length;p++){n.vmult(f.uniqueAxes[p],l);const v=f.testSepAxis(l,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(l))}else{const p=a?a.length:f.faces.length;for(let v=0;v<p;v++){const x=a?a[v]:v;l.copy(f.faceNormals[x]),n.vmult(l,l);const M=f.testSepAxis(l,t,e,n,i,s);if(M===!1)return!1;M<_&&(_=M,o.copy(l))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],h);const v=f.testSepAxis(h,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(h))}else{const p=c?c.length:t.faces.length;for(let v=0;v<p;v++){const x=c?c[v]:v;h.copy(t.faceNormals[x]),s.vmult(h,h);const M=f.testSepAxis(h,t,e,n,i,s);if(M===!1)return!1;M<_&&(_=M,o.copy(h))}}for(let p=0;p!==f.uniqueEdges.length;p++){n.vmult(f.uniqueEdges[p],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],m),u.cross(m,g),!g.almostZero()){g.normalize();const x=f.testSepAxis(g,t,e,n,i,s);if(x===!1)return!1;x<_&&(_=x,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;Ti.project(a,t,n,i,Pr),Ti.project(e,t,s,o,Lr);const c=Pr[0],l=Pr[1],h=Lr[0],d=Lr[1];if(c<d||h<l)return!1;const u=c-d,m=h-l;return u<m?u:m}calculateLocalInertia(t,e){const n=new S,i=new S;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const c=new S,l=new S,h=new S,d=new S,u=new S,m=new S,g=new S,_=new S,f=this,p=[],v=i,x=p;let M=-1,A=Number.MAX_VALUE;for(let y=0;y<f.faces.length;y++){c.copy(f.faceNormals[y]),n.vmult(c,c);const C=c.dot(t);C<A&&(A=C,M=y)}if(M<0)return;const b=f.faces[M];b.connectedFaces=[];for(let y=0;y<f.faces.length;y++)for(let C=0;C<f.faces[y].length;C++)b.indexOf(f.faces[y][C])!==-1&&y!==M&&b.connectedFaces.indexOf(y)===-1&&b.connectedFaces.push(y);const w=b.length;for(let y=0;y<w;y++){const C=f.vertices[b[y]],V=f.vertices[b[(y+1)%w]];C.vsub(V,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[M]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(C),n.vmult(m,m),e.vadd(m,m);const N=b.connectedFaces[y];g.copy(this.faceNormals[N]);const R=this.getPlaneConstantOfFace(N);_.copy(g),n.vmult(_,_);const F=R-_.dot(e);for(this.clipFaceAgainstPlane(v,x,_,F);v.length;)v.shift();for(;x.length;)v.push(x.shift())}g.copy(this.faceNormals[M]);const L=this.getPlaneConstantOfFace(M);_.copy(g),n.vmult(_,_);const G=L-_.dot(e);for(let y=0;y<v.length;y++){let C=_.dot(v[y])+G;if(C<=s&&(console.log(`clamped: depth=${C} to minDist=${s}`),C=s),C<=o){const V=v[y];if(C<=1e-6){const N={point:V,normal:_,depth:C};a.push(N)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+i,s<0)if(o<0){const d=new S;d.copy(l),e.push(d)}else{const d=new S;c.lerp(l,s/(s-o),d),e.push(d)}else if(o<0){const d=new S;c.lerp(l,s/(s-o),d),e.push(d),e.push(l)}c=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new S);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,c,l,h,d,u=new S;for(let m=0;m<s.length;m++){u.copy(s[m]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new S);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new S;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=e[n[o][0]],l=new S;t.vsub(c,l);const h=a.dot(l),d=new S;s.vsub(c,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=Hm;let c=0,l=0;const h=Vm,d=t.vertices;h.setZero(),Yt.vectorToLocalFrame(n,i,e,a),Yt.pointToLocalFrame(n,i,h,h);const u=h.dot(a);l=c=d[0].dot(a);for(let m=1;m<o;m++){const g=d[m].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=u,c-=u,l>c){const m=l;l=c,c=m}s[0]=c,s[1]=l}}const Pr=[],Lr=[];new S;const Hm=new S,Vm=new S;class qi extends dt{constructor(t){super({type:dt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=S,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new Ti({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new S),qi.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Pn.set(s[o][0],s[o][1],s[o][2]),e.vmult(Pn,Pn),t.vadd(Pn,Pn),n(Pn.x,Pn.y,Pn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;nn[0].set(s.x,s.y,s.z),nn[1].set(-s.x,s.y,s.z),nn[2].set(-s.x,-s.y,s.z),nn[3].set(-s.x,-s.y,-s.z),nn[4].set(s.x,-s.y,-s.z),nn[5].set(s.x,s.y,-s.z),nn[6].set(-s.x,s.y,-s.z),nn[7].set(s.x,-s.y,s.z);const o=nn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=nn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Pn=new S,nn=[new S,new S,new S,new S,new S,new S,new S,new S],ro={DYNAMIC:1,STATIC:2,KINEMATIC:4},oo={AWAKE:0,SLEEPY:1,SLEEPING:2};class pt extends Kc{constructor(t){t===void 0&&(t={}),super(),this.id=pt.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new S,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new S,this.force=new S;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?pt.STATIC:pt.DYNAMIC,typeof t.type==typeof pt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=pt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new fe,this.initQuaternion=new fe,this.previousQuaternion=new fe,this.interpolatedQuaternion=new fe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new S,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new tn,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new tn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new S(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new S(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Ge,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=pt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===pt.SLEEPING&&this.dispatchEvent(pt.wakeupEvent)}sleep(){this.sleepState=pt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===pt.AWAKE&&n<i?(this.sleepState=pt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(pt.sleepyEvent)):e===pt.SLEEPY&&n>i?this.wakeUp():e===pt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(pt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===pt.SLEEPING||this.type===pt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new S),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new S),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new S,s=new fe;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=km,o=Wm,a=this.quaternion,c=this.aabb,l=jm;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Xm,i=qm;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;this.sleepState===pt.SLEEPING&&this.wakeUp();const n=Ym;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;const n=$m,i=Km;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===pt.DYNAMIC&&(this.sleepState===pt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;this.sleepState===pt.SLEEPING&&this.wakeUp();const n=e,i=Zm;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Jm;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;const n=Qm,i=tg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=eg;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),qi.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new S;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===pt.DYNAMIC||this.type===pt.KINEMATIC)||this.sleepState===pt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*t;i.x+=a.x*m*u.x,i.y+=a.y*m*u.y,i.z+=a.z*m*u.z;const g=d.elements,_=this.angularFactor,f=c.x*_.x,p=c.y*_.y,v=c.z*_.z;s.x+=t*(g[0]*f+g[1]*p+g[2]*v),s.y+=t*(g[3]*f+g[4]*p+g[5]*v),s.z+=t*(g[6]*f+g[7]*p+g[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}pt.idCounter=0;pt.COLLIDE_EVENT_NAME="collide";pt.DYNAMIC=ro.DYNAMIC;pt.STATIC=ro.STATIC;pt.KINEMATIC=ro.KINEMATIC;pt.AWAKE=oo.AWAKE;pt.SLEEPY=oo.SLEEPY;pt.SLEEPING=oo.SLEEPING;pt.wakeupEvent={type:"wakeup"};pt.sleepyEvent={type:"sleepy"};pt.sleepEvent={type:"sleep"};const km=new S,Wm=new fe,jm=new Ge,Xm=new tn,qm=new tn;new tn;const Ym=new S,$m=new S,Km=new S,Zm=new S,Jm=new S,Qm=new S,tg=new S,eg=new S;class ng{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&pt.STATIC||t.sleepState===pt.SLEEPING)&&(e.type&pt.STATIC||e.sleepState===pt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=ig;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=sg,i=rg,s=og,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=s[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new S;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const ig=new S;new S;new fe;new S;const sg={keys:[]},rg=[],og=[];new S;new S;new S;class Zc extends ng{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Os{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let Jc,Qc,tl,el,nl,il,sl;const ao={CLOSEST:1,ANY:2,ALL:4};Jc=dt.types.SPHERE;Qc=dt.types.PLANE;tl=dt.types.BOX;el=dt.types.CYLINDER;nl=dt.types.CONVEXPOLYHEDRON;il=dt.types.HEIGHTFIELD;sl=dt.types.TRIMESH;class de{get[Jc](){return this._intersectSphere}get[Qc](){return this._intersectPlane}get[tl](){return this._intersectBox}get[el](){return this._intersectConvex}get[nl](){return this._intersectConvex}get[il](){return this._intersectHeightfield}get[sl](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new S),e===void 0&&(e=new S),this.from=t.clone(),this.to=e.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=de.ANY,this.result=new Os,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||de.ANY,this.result=e.result||new Os,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Qa),Ir.length=0,t.broadphase.aabbQuery(t,Qa,Ir),this.intersectBodies(Ir),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=ag,s=cg;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(Sg(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,c=this.direction,l=new S(0,0,1);e.vmult(l,l);const h=new S;o.vsub(n,h);const d=h.dot(l);a.vsub(n,h);const u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;const m=l.dot(c);if(Math.abs(m)<this.precision)return;const g=new S,_=new S,f=new S;o.vsub(n,g);const p=-l.dot(g)/m;c.scale(p,_),o.vadd(_,f),this.reportIntersection(l,f,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=lg;o.from.copy(this.from),o.to.copy(this.to),Yt.pointToLocalFrame(n,e,o.from,o.from),Yt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=hg;let c,l,h,d;c=l=0,h=d=t.data.length-1;const u=new Ge;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let m=c;m<h;m++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(m,g,!1),Yt.pointToWorldFrame(n,e,t.pillarOffset,ws),this._intersectConvex(t.pillarConvex,e,ws,i,s,tc),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),Yt.pointToWorldFrame(n,e,t.pillarOffset,ws),this._intersectConvex(t.pillarConvex,e,ws,i,s,tc)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,m=ug,g=dg;if(!(u<0))if(u===0)o.lerp(a,u,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const _=(-h-Math.sqrt(u))/(2*l),f=(-h+Math.sqrt(u))/(2*l);if(_>=0&&_<=1&&(o.lerp(a,_,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(o.lerp(a,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=fg,c=ec,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,m=this.direction,g=this.from,_=this.to,f=g.distanceTo(_),p=l?l.length:h.length,v=this.result;for(let x=0;!v.shouldStop&&x<p;x++){const M=l?l[x]:x,A=h[M],b=u[M],w=e,L=n;c.copy(d[A[0]]),w.vmult(c,c),c.vadd(L,c),c.vsub(g,c),w.vmult(b,a);const G=m.dot(a);if(Math.abs(G)<this.precision)continue;const y=a.dot(c)/G;if(!(y<0)){m.scale(y,Le),Le.vadd(g,Le),$e.copy(d[A[0]]),w.vmult($e,$e),L.vadd($e,$e);for(let C=1;!v.shouldStop&&C<A.length-1;C++){sn.copy(d[A[C]]),rn.copy(d[A[C+1]]),w.vmult(sn,sn),w.vmult(rn,rn),L.vadd(sn,sn),L.vadd(rn,rn);const V=Le.distanceTo(g);!(de.pointInTriangle(Le,$e,sn,rn)||de.pointInTriangle(Le,sn,$e,rn))||V>f||this.reportIntersection(a,Le,s,i,M)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=pg,c=yg,l=Mg,h=ec,d=mg,u=gg,m=_g,g=xg,_=vg,f=t.indices;t.vertices;const p=this.from,v=this.to,x=this.direction;l.position.copy(n),l.quaternion.copy(e),Yt.vectorToLocalFrame(n,e,x,d),Yt.pointToLocalFrame(n,e,p,u),Yt.pointToLocalFrame(n,e,v,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,m.vsub(u,d),d.normalize();const M=u.distanceSquared(m);t.tree.rayQuery(this,l,c);for(let A=0,b=c.length;!this.result.shouldStop&&A!==b;A++){const w=c[A];t.getNormal(w,a),t.getVertex(f[w*3],$e),$e.vsub(u,h);const L=d.dot(a),G=a.dot(h)/L;if(G<0)continue;d.scale(G,Le),Le.vadd(u,Le),t.getVertex(f[w*3+1],sn),t.getVertex(f[w*3+2],rn);const y=Le.distanceSquared(u);!(de.pointInTriangle(Le,sn,$e,rn)||de.pointInTriangle(Le,$e,sn,rn))||y>M||(Yt.vectorToWorldFrame(e,a,_),Yt.pointToWorldFrame(n,e,Le,g),this.reportIntersection(_,g,s,i,w))}c.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case de.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case de.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case de.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ti),n.vsub(e,Hi),t.vsub(e,Dr);const s=ti.dot(ti),o=ti.dot(Hi),a=ti.dot(Dr),c=Hi.dot(Hi),l=Hi.dot(Dr);let h,d;return(h=c*a-o*l)>=0&&(d=s*l-o*a)>=0&&h+d<s*c-o*o}}de.CLOSEST=ao.CLOSEST;de.ANY=ao.ANY;de.ALL=ao.ALL;const Qa=new Ge,Ir=[],Hi=new S,Dr=new S,ag=new S,cg=new fe,Le=new S,$e=new S,sn=new S,rn=new S;new S;new Os;const tc={faceList:[0]},ws=new S,lg=new de,hg=[],ug=new S,dg=new S,fg=new S;new S;new S;const ec=new S,pg=new S,mg=new S,gg=new S,_g=new S,vg=new S,xg=new S;new Ge;const yg=[],Mg=new Yt,ti=new S,Ts=new S;function Sg(r,t,e){e.vsub(r,ti);const n=ti.dot(t);return t.scale(n,Ts),Ts.vadd(r,Ts),e.distanceTo(Ts)}class Eg{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class nc{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Ji{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ji.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new nc,this.jacobianElementB=new nc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,ic),a.scale(h,sc),n.invInertiaWorldSolve.vmult(o,rc),i.invInertiaWorldSolve.vmult(c,oc),t.multiplyVectors(ic,rc)+e.multiplyVectors(sc,oc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+o;return a.vmult(t.rotational,As),l+=As.dot(t.rotational),c.vmult(e.rotational,As),l+=As.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=bg;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ji.idCounter=0;const ic=new S,sc=new S,rc=new S,oc=new S,As=new S,bg=new S;class wg extends Ji{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=Tg,l=Ag,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=Cg,_=this.jacobianElementA,f=this.jacobianElementB,p=this.ni;o.cross(p,c),a.cross(p,l),p.negate(_.spatial),c.negate(_.rotational),f.spatial.copy(p),f.rotational.copy(l),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const v=p.dot(g),x=this.restitution+1,M=x*u.dot(p)-x*h.dot(p)+m.dot(l)-d.dot(c),A=this.computeGiMf();return-v*e-M*n-t*A}getImpactVelocityAlongNormal(){const t=Rg,e=Pg,n=Lg,i=Ig,s=Dg;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const Tg=new S,Ag=new S,Cg=new S,Rg=new S,Pg=new S,Lg=new S,Ig=new S,Dg=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class ac extends Ji{constructor(t,e,n){super(t,e,-n,n),this.ri=new S,this.rj=new S,this.t=new S}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Ng,o=Fg,a=this.t;n.cross(a,s),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const Ng=new S,Fg=new S;class Ws{constructor(t,e,n){n=Eg.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Ws.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Ws.idCounter=0;class Qi{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Qi.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Qi.idCounter=0;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new de;new S;new S;new S;new S(1,0,0),new S(0,1,0),new S(0,0,1);new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class Nr extends dt{constructor(t){if(super({type:dt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new S);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=t[c]-s,i[c]=t[c]+s}}}new S;new S;new S;new S;new S;new S;new S;new S;new S;class Ug extends Ti{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],a=[],c=[],l=[],h=[],d=Math.cos,u=Math.sin;o.push(new S(-e*u(0),-n*.5,e*d(0))),l.push(0),o.push(new S(-t*u(0),n*.5,t*d(0))),h.push(1);for(let g=0;g<s;g++){const _=2*Math.PI/s*(g+1),f=2*Math.PI/s*(g+.5);g<s-1?(o.push(new S(-e*u(_),-n*.5,e*d(_))),l.push(2*g+2),o.push(new S(-t*u(_),n*.5,t*d(_))),h.push(2*g+3),c.push([2*g,2*g+1,2*g+3,2*g+2])):c.push([2*g,2*g+1,1,0]),(s%2===1||g<s/2)&&a.push(new S(-u(f),0,d(f)))}c.push(l),a.push(new S(0,1,0));const m=[];for(let g=0;g<h.length;g++)m.push(h[h.length-g-1]);c.push(m),super({vertices:o,faces:c,axes:a}),this.type=dt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}class Og extends dt{constructor(){super({type:dt.types.PLANE}),this.worldNormal=new S,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new S),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){gn.set(0,0,1),e.vmult(gn,gn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),gn.x===1?i.x=t.x:gn.x===-1&&(n.x=t.x),gn.y===1?i.y=t.y:gn.y===-1&&(n.y=t.y),gn.z===1?i.z=t.z:gn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const gn=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new Ge;new S;new Ge;new S;new S;new S;new S;new S;new S;new S;new Ge;new S;new Yt;new Ge;class zg{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Bg extends zg{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t;let d,u,m,g,_,f;if(a!==0)for(let M=0;M!==l;M++)c[M].updateSolveMassProperties();const p=Hg,v=Vg,x=Gg;p.length=a,v.length=a,x.length=a;for(let M=0;M!==a;M++){const A=o[M];x[M]=0,v[M]=A.computeB(h),p[M]=1/A.computeC()}if(a!==0){for(let b=0;b!==l;b++){const w=c[b],L=w.vlambda,G=w.wlambda;L.set(0,0,0),G.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let b=0;b!==a;b++){const w=o[b];d=v[b],u=p[b],f=x[b],_=w.computeGWlambda(),m=u*(d-_-w.eps*f),f+m<w.minForce?m=w.minForce-f:f+m>w.maxForce&&(m=w.maxForce-f),x[b]+=m,g+=m>0?m:-m,w.addToWlambda(m)}if(g*g<s)break}for(let b=0;b!==l;b++){const w=c[b],L=w.velocity,G=w.angularVelocity;w.vlambda.vmul(w.linearFactor,w.vlambda),L.vadd(w.vlambda,L),w.wlambda.vmul(w.angularFactor,w.wlambda),G.vadd(w.wlambda,G)}let M=o.length;const A=1/h;for(;M--;)o[M].multiplier=x[M]*A}return n}}const Gg=[],Hg=[],Vg=[];class kg{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Wg extends kg{constructor(){super(...arguments),this.type=S}constructObject(){return new S}}const ne={sphereSphere:dt.types.SPHERE,spherePlane:dt.types.SPHERE|dt.types.PLANE,boxBox:dt.types.BOX|dt.types.BOX,sphereBox:dt.types.SPHERE|dt.types.BOX,planeBox:dt.types.PLANE|dt.types.BOX,convexConvex:dt.types.CONVEXPOLYHEDRON,sphereConvex:dt.types.SPHERE|dt.types.CONVEXPOLYHEDRON,planeConvex:dt.types.PLANE|dt.types.CONVEXPOLYHEDRON,boxConvex:dt.types.BOX|dt.types.CONVEXPOLYHEDRON,sphereHeightfield:dt.types.SPHERE|dt.types.HEIGHTFIELD,boxHeightfield:dt.types.BOX|dt.types.HEIGHTFIELD,convexHeightfield:dt.types.CONVEXPOLYHEDRON|dt.types.HEIGHTFIELD,sphereParticle:dt.types.PARTICLE|dt.types.SPHERE,planeParticle:dt.types.PLANE|dt.types.PARTICLE,boxParticle:dt.types.BOX|dt.types.PARTICLE,convexParticle:dt.types.PARTICLE|dt.types.CONVEXPOLYHEDRON,cylinderCylinder:dt.types.CYLINDER,sphereCylinder:dt.types.SPHERE|dt.types.CYLINDER,planeCylinder:dt.types.PLANE|dt.types.CYLINDER,boxCylinder:dt.types.BOX|dt.types.CYLINDER,convexCylinder:dt.types.CONVEXPOLYHEDRON|dt.types.CYLINDER,heightfieldCylinder:dt.types.HEIGHTFIELD|dt.types.CYLINDER,particleCylinder:dt.types.PARTICLE|dt.types.CYLINDER,sphereTrimesh:dt.types.SPHERE|dt.types.TRIMESH,planeTrimesh:dt.types.PLANE|dt.types.TRIMESH};class jg{get[ne.sphereSphere](){return this.sphereSphere}get[ne.spherePlane](){return this.spherePlane}get[ne.boxBox](){return this.boxBox}get[ne.sphereBox](){return this.sphereBox}get[ne.planeBox](){return this.planeBox}get[ne.convexConvex](){return this.convexConvex}get[ne.sphereConvex](){return this.sphereConvex}get[ne.planeConvex](){return this.planeConvex}get[ne.boxConvex](){return this.boxConvex}get[ne.sphereHeightfield](){return this.sphereHeightfield}get[ne.boxHeightfield](){return this.boxHeightfield}get[ne.convexHeightfield](){return this.convexHeightfield}get[ne.sphereParticle](){return this.sphereParticle}get[ne.planeParticle](){return this.planeParticle}get[ne.boxParticle](){return this.boxParticle}get[ne.convexParticle](){return this.convexParticle}get[ne.cylinderCylinder](){return this.convexConvex}get[ne.sphereCylinder](){return this.sphereConvex}get[ne.planeCylinder](){return this.planeConvex}get[ne.boxCylinder](){return this.boxConvex}get[ne.convexCylinder](){return this.convexConvex}get[ne.heightfieldCylinder](){return this.heightfieldCylinder}get[ne.particleCylinder](){return this.particleCylinder}get[ne.sphereTrimesh](){return this.sphereTrimesh}get[ne.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Wg,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new wg(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(a.frictionGravity||a.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,_=g.length?g.pop():new ac(n,i,u*m),f=g.length?g.pop():new ac(n,i,u*m);return _.bi=f.bi=n,_.bj=f.bj=i,_.minForce=f.minForce=-u*m,_.maxForce=f.maxForce=u*m,_.ri.copy(t.ri),_.rj.copy(t.rj),f.ri.copy(t.ri),f.rj.copy(t.rj),t.ni.tangents(_.t,f.t),_.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),f.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),_.enabled=f.enabled=t.enabled,e.push(_,f),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Kn.setZero(),yi.setZero(),Mi.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Kn.vadd(e.ni,Kn),yi.vadd(e.ri,yi),Mi.vadd(e.rj,Mi)):(Kn.vsub(e.ni,Kn),yi.vadd(e.rj,yi),Mi.vadd(e.ri,Mi));const o=1/t;yi.scale(o,n.ri),Mi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Kn.normalize(),Kn.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=Yg,l=$g,h=Xg,d=qg;for(let u=0,m=t.length;u!==m;u++){const g=t[u],_=e[u];let f=null;g.material&&_.material&&(f=n.getContactMaterial(g.material,_.material)||null);const p=g.type&pt.KINEMATIC&&_.type&pt.STATIC||g.type&pt.STATIC&&_.type&pt.KINEMATIC||g.type&pt.KINEMATIC&&_.type&pt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],c),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const x=g.shapes[v];for(let M=0;M<_.shapes.length;M++){_.quaternion.mult(_.shapeOrientations[M],l),_.quaternion.vmult(_.shapeOffsets[M],d),d.vadd(_.position,d);const A=_.shapes[M];if(!(x.collisionFilterMask&A.collisionFilterGroup&&A.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+A.boundingSphereRadius)continue;let b=null;x.material&&A.material&&(b=n.getContactMaterial(x.material,A.material)||null),this.currentContactMaterial=b||f||n.defaultContactMaterial;const w=x.type|A.type,L=this[w];if(L){let G=!1;x.type<A.type?G=L.call(this,x,A,h,d,c,l,g,_,x,A,p):G=L.call(this,A,x,d,h,l,c,_,g,x,A,p),G&&p&&(n.shapeOverlapKeeper.set(x.id,A.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,n,i,s,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,c,l,h,d){const u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Cs),u.ni.scale(u.ni.dot(Cs),cc),Cs.vsub(cc,u.rj),-Cs.dot(u.ni)<=t.radius){if(d)return!0;const m=u.ri,g=u.rj;m.vadd(n,m),m.vsub(a.position,m),g.vadd(i,g),g.vsub(c.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}sphereBox(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool,m=M0;n.vsub(i,Rs),e.getSideNormals(m,o);const g=t.radius;let _=!1;const f=E0,p=b0,v=w0;let x=null,M=0,A=0,b=0,w=null;for(let I=0,$=m.length;I!==$&&_===!1;I++){const z=v0;z.copy(m[I]);const W=z.length();z.normalize();const K=Rs.dot(z);if(K<W+g&&K>0){const Q=x0,J=y0;Q.copy(m[(I+1)%3]),J.copy(m[(I+2)%3]);const Et=Q.length(),q=J.length();Q.normalize(),J.normalize();const tt=Rs.dot(Q),ht=Rs.dot(J);if(tt<Et&&tt>-Et&&ht<q&&ht>-q){const wt=Math.abs(K-W-g);if((w===null||wt<w)&&(w=wt,A=tt,b=ht,x=W,f.copy(z),p.copy(Q),v.copy(J),M++,d))return!0}}}if(M){_=!0;const I=this.createContactEquation(a,c,t,e,l,h);f.scale(-g,I.ri),I.ni.copy(f),I.ni.negate(I.ni),f.scale(x,f),p.scale(A,p),f.vadd(p,f),v.scale(b,v),f.vadd(v,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),I.rj.vadd(i,I.rj),I.rj.vsub(c.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let L=u.get();const G=S0;for(let I=0;I!==2&&!_;I++)for(let $=0;$!==2&&!_;$++)for(let z=0;z!==2&&!_;z++)if(L.set(0,0,0),I?L.vadd(m[0],L):L.vsub(m[0],L),$?L.vadd(m[1],L):L.vsub(m[1],L),z?L.vadd(m[2],L):L.vsub(m[2],L),i.vadd(L,G),G.vsub(n,G),G.lengthSquared()<g*g){if(d)return!0;_=!0;const W=this.createContactEquation(a,c,t,e,l,h);W.ri.copy(G),W.ri.normalize(),W.ni.copy(W.ri),W.ri.scale(g,W.ri),W.rj.copy(L),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),W.rj.vadd(i,W.rj),W.rj.vsub(c.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}u.release(L),L=null;const y=u.get(),C=u.get(),V=u.get(),N=u.get(),R=u.get(),F=m.length;for(let I=0;I!==F&&!_;I++)for(let $=0;$!==F&&!_;$++)if(I%3!==$%3){m[$].cross(m[I],y),y.normalize(),m[I].vadd(m[$],C),V.copy(n),V.vsub(C,V),V.vsub(i,V);const z=V.dot(y);y.scale(z,N);let W=0;for(;W===I%3||W===$%3;)W++;R.copy(n),R.vsub(N,R),R.vsub(C,R),R.vsub(i,R);const K=Math.abs(z),Q=R.length();if(K<m[W].length()&&Q<g){if(d)return!0;_=!0;const J=this.createContactEquation(a,c,t,e,l,h);C.vadd(N,J.rj),J.rj.copy(J.rj),R.negate(J.ni),J.ni.normalize(),J.ri.copy(J.rj),J.ri.vadd(i,J.ri),J.ri.vsub(n,J.ri),J.ri.normalize(),J.ri.scale(g,J.ri),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(c.position,J.rj),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}}u.release(y,C,V,N,R)}planeBox(t,e,n,i,s,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}convexConvex(t,e,n,i,s,o,a,c,l,h,d,u,m){const g=G0;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,m)){const _=[],f=H0;t.clipAgainstHull(n,s,e,i,o,g,-100,100,_);let p=0;for(let v=0;v!==_.length;v++){if(d)return!0;const x=this.createContactEquation(a,c,t,e,l,h),M=x.ri,A=x.rj;g.negate(x.ni),_[v].normal.negate(f),f.scale(_[v].depth,f),_[v].point.vadd(f,M),A.copy(_[v].point),M.vsub(n,M),A.vsub(i,A),M.vadd(n,M),M.vsub(a.position,M),A.vadd(i,A),A.vsub(c.position,A),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool;n.vsub(i,T0);const m=e.faceNormals,g=e.faces,_=e.vertices,f=t.radius;let p=!1;for(let v=0;v!==_.length;v++){const x=_[v],M=P0;o.vmult(x,M),i.vadd(M,M);const A=R0;if(M.vsub(n,A),A.lengthSquared()<f*f){if(d)return!0;p=!0;const b=this.createContactEquation(a,c,t,e,l,h);b.ri.copy(A),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(f,b.ri),M.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(c.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let v=0,x=g.length;v!==x&&p===!1;v++){const M=m[v],A=g[v],b=L0;o.vmult(M,b);const w=I0;o.vmult(_[A[0]],w),w.vadd(i,w);const L=D0;b.scale(-f,L),n.vadd(L,L);const G=N0;L.vsub(w,G);const y=G.dot(b),C=F0;if(n.vsub(w,C),y<0&&C.dot(b)>0){const V=[];for(let N=0,R=A.length;N!==R;N++){const F=u.get();o.vmult(_[A[N]],F),i.vadd(F,F),V.push(F)}if(_0(V,b,n)){if(d)return!0;p=!0;const N=this.createContactEquation(a,c,t,e,l,h);b.scale(-f,N.ri),b.negate(N.ni);const R=u.get();b.scale(-y,R);const F=u.get();b.scale(-f,F),n.vsub(i,N.rj),N.rj.vadd(F,N.rj),N.rj.vadd(R,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),u.release(R),u.release(F),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let I=0,$=V.length;I!==$;I++)u.release(V[I]);return}else for(let N=0;N!==A.length;N++){const R=u.get(),F=u.get();o.vmult(_[A[(N+1)%A.length]],R),o.vmult(_[A[(N+2)%A.length]],F),i.vadd(R,R),i.vadd(F,F);const I=A0;F.vsub(R,I);const $=C0;I.unit($);const z=u.get(),W=u.get();n.vsub(R,W);const K=W.dot($);$.scale(K,z),z.vadd(R,z);const Q=u.get();if(z.vsub(n,Q),K>0&&K*K<I.lengthSquared()&&Q.lengthSquared()<f*f){if(d)return!0;const J=this.createContactEquation(a,c,t,e,l,h);z.vsub(i,J.rj),z.vsub(n,J.ni),J.ni.normalize(),J.ni.scale(f,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(c.position,J.rj),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult);for(let Et=0,q=V.length;Et!==q;Et++)u.release(V[Et]);u.release(R),u.release(F),u.release(z),u.release(Q),u.release(W);return}u.release(R),u.release(F),u.release(z),u.release(Q),u.release(W)}for(let N=0,R=V.length;N!==R;N++)u.release(V[N])}}}planeConvex(t,e,n,i,s,o,a,c,l,h,d){const u=U0,m=O0;m.set(0,0,1),s.vmult(m,m);let g=0;const _=z0;for(let f=0;f!==e.vertices.length;f++)if(u.copy(e.vertices[f]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,_),m.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(a,c,t,e,l,h),x=B0;m.scale(m.dot(_),x),u.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(m),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,m=t.radius,g=e.elementSize,_=Q0,f=J0;Yt.pointToLocalFrame(i,o,n,f);let p=Math.floor((f.x-m)/g)-1,v=Math.ceil((f.x+m)/g)+1,x=Math.floor((f.y-m)/g)-1,M=Math.ceil((f.y+m)/g)+1;if(v<0||M<0||p>u.length||x>u[0].length)return;p<0&&(p=0),v<0&&(v=0),x<0&&(x=0),M<0&&(M=0),p>=u.length&&(p=u.length-1),v>=u.length&&(v=u.length-1),M>=u[0].length&&(M=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const A=[];e.getRectMinMax(p,x,v,M,A);const b=A[0],w=A[1];if(f.z-m>w||f.z+m<b)return;const L=this.result;for(let G=p;G<v;G++)for(let y=x;y<M;y++){const C=L.length;let V=!1;if(e.getConvexTrianglePillar(G,y,!1),Yt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.sphereConvex(t,e.pillarConvex,n,_,s,o,a,c,t,e,d)),d&&V||(e.getConvexTrianglePillar(G,y,!0),Yt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.sphereConvex(t,e.pillarConvex,n,_,s,o,a,c,t,e,d)),d&&V))return!0;if(L.length-C>2)return}}boxHeightfield(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,m=e.elementSize,g=t.boundingSphereRadius,_=K0,f=Z0,p=$0;Yt.pointToLocalFrame(i,o,n,p);let v=Math.floor((p.x-g)/m)-1,x=Math.ceil((p.x+g)/m)+1,M=Math.floor((p.y-g)/m)-1,A=Math.ceil((p.y+g)/m)+1;if(x<0||A<0||v>u.length||M>u[0].length)return;v<0&&(v=0),x<0&&(x=0),M<0&&(M=0),A<0&&(A=0),v>=u.length&&(v=u.length-1),x>=u.length&&(x=u.length-1),A>=u[0].length&&(A=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const b=[];e.getRectMinMax(v,M,x,A,b);const w=b[0],L=b[1];if(!(p.z-g>L||p.z+g<w))for(let G=v;G<x;G++)for(let y=M;y<A;y++){let C=!1;if(e.getConvexTrianglePillar(G,y,!1),Yt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(C=this.convexConvex(t,e.pillarConvex,n,_,s,o,a,c,null,null,d,f,null)),d&&C||(e.getConvexTrianglePillar(G,y,!0),Yt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(C=this.convexConvex(t,e.pillarConvex,n,_,s,o,a,c,null,null,d,f,null)),d&&C))return!0}}sphereParticle(t,e,n,i,s,o,a,c,l,h,d){const u=j0;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(c,a,e,t,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,c,l,h,d){const u=V0;u.set(0,0,1),a.quaternion.vmult(u,u);const m=k0;if(i.vsub(a.position,m),u.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(c,a,e,t,l,h);_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0);const f=W0;u.scale(u.dot(i),f),i.vsub(f,f),_.rj.copy(f),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexParticle(t,e,n,i,s,o,a,c,l,h,d){let u=-1;const m=q0,g=Y0;let _=null;const f=X0;if(f.copy(i),f.vsub(n,f),s.conjugate(lc),lc.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,v=t.faces.length;p!==v;p++){const x=[t.worldVertices[t.faces[p][0]]],M=t.worldFaceNormals[p];i.vsub(x[0],hc);const A=-M.dot(hc);if(_===null||Math.abs(A)<Math.abs(_)){if(d)return!0;_=A,u=p,m.copy(M)}}if(u!==-1){const p=this.createContactEquation(c,a,e,t,l,h);m.scale(_,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),m.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,x=p.rj;v.vadd(i,v),v.vsub(c.position,v),x.vadd(n,x),x.vsub(a.position,x),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexHeightfield(e,t,i,n,o,s,c,a,l,h,d)}particleCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexParticle(e,t,i,n,o,s,c,a,l,h,d)}sphereTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=i0,m=s0,g=r0,_=o0,f=a0,p=c0,v=d0,x=n0,M=t0,A=f0;Yt.pointToLocalFrame(i,o,n,f);const b=t.radius;v.lowerBound.set(f.x-b,f.y-b,f.z-b),v.upperBound.set(f.x+b,f.y+b,f.z+b),e.getTrianglesInAABB(v,A);const w=e0,L=t.radius*t.radius;for(let N=0;N<A.length;N++)for(let R=0;R<3;R++)if(e.getVertex(e.indices[A[N]*3+R],w),w.vsub(f,M),M.lengthSquared()<=L){if(x.copy(w),Yt.pointToWorldFrame(i,o,x,w),w.vsub(n,M),d)return!0;let F=this.createContactEquation(a,c,t,e,l,h);F.ni.copy(M),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.copy(w),F.rj.vsub(c.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let N=0;N<A.length;N++)for(let R=0;R<3;R++){e.getVertex(e.indices[A[N]*3+R],u),e.getVertex(e.indices[A[N]*3+(R+1)%3],m),m.vsub(u,g),f.vsub(m,p);const F=p.dot(g);f.vsub(u,p);let I=p.dot(g);if(I>0&&F<0&&(f.vsub(u,p),_.copy(g),_.normalize(),I=p.dot(_),_.scale(I,p),p.vadd(u,p),p.distanceTo(f)<t.radius)){if(d)return!0;const z=this.createContactEquation(a,c,t,e,l,h);p.vsub(f,z.ni),z.ni.normalize(),z.ni.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),Yt.pointToWorldFrame(i,o,p,p),p.vsub(c.position,z.rj),Yt.vectorToWorldFrame(o,z.ni,z.ni),Yt.vectorToWorldFrame(o,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}const G=l0,y=h0,C=u0,V=Qg;for(let N=0,R=A.length;N!==R;N++){e.getTriangleVertices(A[N],G,y,C),e.getNormal(A[N],V),f.vsub(G,p);let F=p.dot(V);if(V.scale(F,p),f.vsub(p,p),F=p.distanceTo(f),de.pointInTriangle(p,G,y,C)&&F<t.radius){if(d)return!0;let I=this.createContactEquation(a,c,t,e,l,h);p.vsub(f,I.ni),I.ni.normalize(),I.ni.scale(t.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),Yt.pointToWorldFrame(i,o,p,p),p.vsub(c.position,I.rj),Yt.vectorToWorldFrame(o,I.ni,I.ni),Yt.vectorToWorldFrame(o,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}A.length=0}planeTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=new S,m=Kg;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const _=new S;_.copy(u),Yt.pointToWorldFrame(i,o,_,u);const f=Zg;if(u.vsub(n,f),m.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(a,c,t,e,l,h);v.ni.copy(m);const x=Jg;m.scale(f.dot(m),x),u.vsub(x,x),v.ri.copy(x),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Kn=new S,yi=new S,Mi=new S,Xg=new S,qg=new S,Yg=new fe,$g=new fe,Kg=new S,Zg=new S,Jg=new S,Qg=new S,t0=new S;new S;const e0=new S,n0=new S,i0=new S,s0=new S,r0=new S,o0=new S,a0=new S,c0=new S,l0=new S,h0=new S,u0=new S,d0=new Ge,f0=[],Cs=new S,cc=new S,p0=new S,m0=new S,g0=new S;function _0(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=p0;r[(s+1)%i].vsub(o,a);const c=m0;a.cross(t,c);const l=g0;e.vsub(o,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Rs=new S,v0=new S,x0=new S,y0=new S,M0=[new S,new S,new S,new S,new S,new S],S0=new S,E0=new S,b0=new S,w0=new S,T0=new S,A0=new S,C0=new S,R0=new S,P0=new S,L0=new S,I0=new S,D0=new S,N0=new S,F0=new S;new S;new S;const U0=new S,O0=new S,z0=new S,B0=new S,G0=new S,H0=new S,V0=new S,k0=new S,W0=new S,j0=new S,lc=new fe,X0=new S;new S;const q0=new S,hc=new S,Y0=new S,$0=new S,K0=new S,Z0=[0],J0=new S,Q0=new S;class uc{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const h=n[c];for(;h>i[a];)a++;l=h===i[a],l||dc(t,h)}a=0;for(let c=0;c<o;c++){let l=!1;const h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||dc(e,h)}}}function dc(r,t){r.push((t&4294901760)>>16,t&65535)}const Fr=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class t_{constructor(){this.data={keys:[]}}get(t,e){const n=Fr(t,e);return this.data[n]}set(t,e,n){const i=Fr(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Fr(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class e_ extends Kc{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Zc,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Bg,this.constraints=[],this.narrowphase=new jg(this),this.collisionMatrix=new Za,this.collisionMatrixPrevious=new Za,this.bodyOverlapKeeper=new uc,this.shapeOverlapKeeper=new uc,this.contactmaterials=[],this.contactMaterialTable=new t_,this.defaultMaterial=new Qi("default"),this.defaultContactMaterial=new Ws(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Os?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=de.ALL,n.from=t,n.to=e,n.callback=i,Ur.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=de.ANY,n.from=t,n.to=e,n.result=i,Ur.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=de.CLOSEST,n.from=t,n.to=e,n.result=i,Ur.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof pt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=pe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=pe.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(pe.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=o_,i=a_,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=pt.DYNAMIC;let u=-1/0;const m=this.constraints,g=r_;c.length();const _=c.x,f=c.y,p=c.z;let v=0;for(l&&(u=pe.now()),v=0;v!==s;v++){const N=o[v];if(N.type===d){const R=N.force,F=N.mass;R.x+=F*_,R.y+=F*f,R.z+=F*p}}for(let N=0,R=this.subsystems.length;N!==R;N++)this.subsystems[N].update();l&&(u=pe.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=pe.now()-u);let x=m.length;for(v=0;v!==x;v++){const N=m[v];if(!N.collideConnected)for(let R=n.length-1;R>=0;R-=1)(N.bodyA===n[R]&&N.bodyB===i[R]||N.bodyB===n[R]&&N.bodyA===i[R])&&(n.splice(R,1),i.splice(R,1))}this.collisionMatrixTick(),l&&(u=pe.now());const M=s_,A=e.length;for(v=0;v!==A;v++)M.push(e[v]);e.length=0;const b=this.frictionEquations.length;for(v=0;v!==b;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,M,this.frictionEquations,g),l&&(h.narrowphase=pe.now()-u),l&&(u=pe.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const w=e.length;for(let N=0;N!==w;N++){const R=e[N],F=R.bi,I=R.bj,$=R.si,z=R.sj;let W;if(F.material&&I.material?W=this.getContactMaterial(F.material,I.material)||this.defaultContactMaterial:W=this.defaultContactMaterial,W.friction,F.material&&I.material&&(F.material.friction>=0&&I.material.friction>=0&&F.material.friction*I.material.friction,F.material.restitution>=0&&I.material.restitution>=0&&(R.restitution=F.material.restitution*I.material.restitution)),a.addEquation(R),F.allowSleep&&F.type===pt.DYNAMIC&&F.sleepState===pt.SLEEPING&&I.sleepState===pt.AWAKE&&I.type!==pt.STATIC){const K=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),Q=I.sleepSpeedLimit**2;K>=Q*2&&(F.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===pt.DYNAMIC&&I.sleepState===pt.SLEEPING&&F.sleepState===pt.AWAKE&&F.type!==pt.STATIC){const K=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),Q=F.sleepSpeedLimit**2;K>=Q*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,I,!0),this.collisionMatrixPrevious.get(F,I)||(Vi.body=I,Vi.contact=R,F.dispatchEvent(Vi),Vi.body=F,I.dispatchEvent(Vi)),this.bodyOverlapKeeper.set(F.id,I.id),this.shapeOverlapKeeper.set($.id,z.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=pe.now()-u,u=pe.now()),v=0;v!==s;v++){const N=o[v];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(x=m.length,v=0;v!==x;v++){const N=m[v];N.update();for(let R=0,F=N.equations.length;R!==F;R++){const I=N.equations[R];a.addEquation(I)}}a.solve(t,this),l&&(h.solve=pe.now()-u),a.removeAllEquations();const L=Math.pow;for(v=0;v!==s;v++){const N=o[v];if(N.type&d){const R=L(1-N.linearDamping,t),F=N.velocity;F.scale(R,F);const I=N.angularVelocity;if(I){const $=L(1-N.angularDamping,t);I.scale($,I)}}}this.dispatchEvent(i_),l&&(u=pe.now());const y=this.stepnumber%(this.quatNormalizeSkip+1)===0,C=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(t,y,C);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=pe.now()-u),this.stepnumber+=1,this.dispatchEvent(n_);let V=!0;if(this.allowSleep)for(V=!1,v=0;v!==s;v++){const N=o[v];N.sleepTick(this.time),N.sleepState!==pt.SLEEPING&&(V=!0)}this.hasActiveBodies=V}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(_n,vn),t){for(let s=0,o=_n.length;s<o;s+=2)ki.bodyA=this.getBodyById(_n[s]),ki.bodyB=this.getBodyById(_n[s+1]),this.dispatchEvent(ki);ki.bodyA=ki.bodyB=null}if(e){for(let s=0,o=vn.length;s<o;s+=2)Wi.bodyA=this.getBodyById(vn[s]),Wi.bodyB=this.getBodyById(vn[s+1]),this.dispatchEvent(Wi);Wi.bodyA=Wi.bodyB=null}_n.length=vn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(_n,vn),n){for(let s=0,o=_n.length;s<o;s+=2){const a=this.getShapeById(_n[s]),c=this.getShapeById(_n[s+1]);xn.shapeA=a,xn.shapeB=c,a&&(xn.bodyA=a.body),c&&(xn.bodyB=c.body),this.dispatchEvent(xn)}xn.bodyA=xn.bodyB=xn.shapeA=xn.shapeB=null}if(i){for(let s=0,o=vn.length;s<o;s+=2){const a=this.getShapeById(vn[s]),c=this.getShapeById(vn[s+1]);yn.shapeA=a,yn.shapeB=c,a&&(yn.bodyA=a.body),c&&(yn.bodyB=c.body),this.dispatchEvent(yn)}yn.bodyA=yn.bodyB=yn.shapeA=yn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ge;const Ur=new de,pe=globalThis.performance||{};if(!pe.now){let r=Date.now();pe.timing&&pe.timing.navigationStart&&(r=pe.timing.navigationStart),pe.now=()=>Date.now()-r}new S;const n_={type:"postStep"},i_={type:"preStep"},Vi={type:pt.COLLIDE_EVENT_NAME,body:null,contact:null},s_=[],r_=[],o_=[],a_=[],_n=[],vn=[],ki={type:"beginContact",bodyA:null,bodyB:null},Wi={type:"endContact",bodyA:null,bodyB:null},xn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},yn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class c_{constructor(){this.world=new e_({gravity:new S(0,-9.81,0)}),this.world.broadphase=new Zc,this.world.solver.iterations=10,this.world.defaultContactMaterial.friction=.3,this.world.defaultContactMaterial.restitution=.2,this.bodies={},this.contactData={force:0,point:null,normal:null},this._initGround(),this._initTable(),this._setupContactListener()}_initGround(){const t=new pt({mass:0,shape:new Og});t.quaternion.setFromEuler(-Math.PI/2,0,0),this.world.addBody(t),this.bodies.ground=t}_initTable(){const t=new pt({mass:0,shape:new qi(new S(.45,.015,.3)),position:new S(0,.42,0)});this.world.addBody(t),this.bodies.table=t}_setupContactListener(){this.world.addEventListener("postStep",()=>{var t;if(this.contactData={force:0,point:null,normal:null},this.bodies.object&&this.bodies.gripper){const e=this.world.contacts;for(const n of e){const i=n.bi===this.bodies.object||n.bj===this.bodies.object,s=n.bi===this.bodies.gripper||n.bj===this.bodies.gripper;if(i&&s&&n.equations.length>0){let o=0;for(const a of n.equations)o+=Math.abs(a.multiplier);this.contactData={force:o,point:(t=n.equations[0])!=null&&t.rj?{x:n.equations[0].rj.x,y:n.equations[0].rj.y,z:n.equations[0].rj.z}:null,normal:n.ni?{x:n.ni.x,y:n.ni.y,z:n.ni.z}:null}}}}})}setGravity(t){this.world.gravity.set(0,-t,0)}spawnObject(t,e){this.bodies.object&&this.world.removeBody(this.bodies.object);const n=t.physics;let i;switch(n.shape){case"sphere":i=new Nr(n.radius);break;case"cylinder":i=new Ug(n.radius,n.radius,n.length||.1,12);break;case"box":i=new qi(new S((n.width||.1)/2,(n.height||.1)/2,(n.depth||.1)/2));break;default:i=new Nr(.03)}const s=new pt({mass:n.mass,shape:i,position:new S(e.x,e.y,e.z),linearDamping:.4,angularDamping:.4}),o=new Qi;return o.friction=n.friction,o.restitution=n.restitution,s.material=o,this.world.addBody(s),this.bodies.object=s,s}updateGripper(t,e){if(!this.bodies.gripper){const n=new Nr(.02);this.bodies.gripper=new pt({mass:0,shape:n,type:pt.KINEMATIC}),this.world.addBody(this.bodies.gripper)}if(this.bodies.gripper.position.set(t.x,t.y,t.z),e&&this.bodies.object){const n=this.bodies.object,i=this.bodies.gripper,s=n.position.x-i.position.x,o=n.position.y-i.position.y,a=n.position.z-i.position.z;Math.sqrt(s*s+o*o+a*a)<.08&&(n.position.copy(i.position),n.position.y-=.03,n.velocity.set(0,0,0),n.angularVelocity.set(0,0,0))}}step(t){this.world.step(Math.min(t,1/30),t,3)}getObjectState(){const t=this.bodies.object;return t?{position:{x:t.position.x,y:t.position.y,z:t.position.z},velocity:{x:t.velocity.x,y:t.velocity.y,z:t.velocity.z},angularVelocity:{x:t.angularVelocity.x,y:t.angularVelocity.y,z:t.angularVelocity.z},contactForce:this.contactData.force,contactPoint:this.contactData.point}:null}updateObjectMaterial(t,e){this.bodies.object&&this.bodies.object.material&&(this.bodies.object.material.friction=t,this.bodies.object.material.restitution=e)}}class l_{constructor(){this.environment={temperature:22,humidity:45,lightIntensity:1,lightAngle:45,colorTemperature:5500,ambientIntensity:.4,gravity:9.81,airDensity:1.225,surfaceContamination:0,vibration:0},this.derived={effectiveFriction:.4,effectiveRestitution:.3,gripReliability:1,materialStiffness:1,sensorNoise:.01,dragCoefficient:0,thermalExpansion:0,surfaceSlip:0,jointStiffness:1,colorShift:[0,0,0]}}setEnvironment(t){return Object.assign(this.environment,t),this._recompute(),this.derived}computeObjectProperties(t){const e=this.environment,n=t,i=Math.abs(e.temperature-22)/30,s=1-.3*i*i,o=n.deformability>0?1+.5*(22-e.temperature)/40*n.deformability:1,a=(e.temperature-22)*(n.thermalConductivity||.4)*1e-5,c=1-e.humidity/100*.25,l=1+e.humidity/100*.05*n.deformability,h=1-e.surfaceContamination*.5,d=Math.max(.1,1-e.surfaceContamination*.4-e.humidity/100*.15),u=n.friction*s*c*h,m=1+(22-e.temperature)/100,g=Math.max(0,Math.min(1,n.restitution*m)),_=n.gripForceMin/(u/n.friction),f=n.gripForceMax*o,p=n.shape==="sphere"?Math.PI*n.radius*n.radius:n.shape==="cylinder"?n.radius*2*(n.length||.1):(n.width||.1)*(n.height||.1),v=.47*e.airDensity*p,x=Math.max(.001,.02/Math.max(.1,e.lightIntensity)+e.vibration*.005);return{effectiveFriction:Math.max(.05,u),effectiveRestitution:g,effectiveMass:n.mass*l,gripForceMin:_,gripForceMax:f,gripReliability:d,materialStiffness:o,thermalExpansion:a,dragCoefficient:v,sensorNoise:x,crossSection:p}}_recompute(){const t=this.environment;this.derived.sensorNoise=Math.max(.001,.02/Math.max(.1,t.lightIntensity)+t.vibration*.005);const e=t.temperature+273.15;this.derived.airDensity=101325/(287.05*e),t.airDensity=this.derived.airDensity,this.derived.jointStiffness=1+(22-t.temperature)*.002,this.derived.colorShift=this._computeColorShift(t.colorTemperature),this.derived.surfaceSlip=t.surfaceContamination*.5+t.humidity/100*.2}_computeColorShift(t){const e=(t-5500)/5e3;return[-e*.1,0,e*.1]}getEnvironmentVector(){const t=this.environment;return new Float32Array([t.temperature/50,t.humidity/100,t.lightIntensity,t.lightAngle/180,t.colorTemperature/1e4,t.gravity/15,t.surfaceContamination,t.vibration/50])}}class h_{constructor(){this.frameBuffer=[],this.maxBufferSize=1e5,this.totalFramesCollected=0,this.trajectoryCount=0,this.currentTrajectory=[],this.isRecording=!1}collectFrame(t,e,n,i,s){const o=t.getJointAngles(),a=t.getEndEffectorPosition(),c=e.getObjectState(),l=e.contactData,h={timestamp:performance.now(),jointAngles:new Float32Array(o),jointTorques:new Float32Array(t.torques),endEffector:new Float32Array([a.x,a.y,a.z]),gripperOpen:t.joints.gripperOpen,gripperContactForce:l.force,objectPosition:c?new Float32Array([c.position.x,c.position.y,c.position.z]):new Float32Array(3),objectVelocity:c?new Float32Array([c.velocity.x,c.velocity.y,c.velocity.z]):new Float32Array(3),environmentVector:new Float32Array(i),rgbFeatures:s?new Float32Array(s.slice(0,64)):new Float32Array(64)};return this.isRecording&&(this.currentTrajectory.push(h),this.totalFramesCollected++),h}frameToVector(t){const e=new Float32Array(95);return e.set(t.jointAngles,0),e.set(t.jointTorques,6),e.set(t.endEffector,12),e[15]=t.gripperOpen,e[16]=t.gripperContactForce,e.set(t.objectPosition,17),e.set(t.objectVelocity,20),e.set(t.environmentVector,23),e.set(t.rgbFeatures,31),e}startTrajectory(){this.isRecording=!0,this.currentTrajectory=[]}endTrajectory(){if(this.isRecording=!1,this.currentTrajectory.length>0){this.trajectoryCount++;const t={id:this.trajectoryCount,frames:this.currentTrajectory,length:this.currentTrajectory.length,timestamp:Date.now()};return this.currentTrajectory=[],this.frameBuffer.length>this.maxBufferSize&&this.frameBuffer.splice(0,this.frameBuffer.length-this.maxBufferSize),t}return null}getStats(){return{totalFrames:this.totalFramesCollected,trajectories:this.trajectoryCount,currentTrajectoryLength:this.currentTrajectory.length,isRecording:this.isRecording,bufferUsage:this.frameBuffer.length/this.maxBufferSize}}reset(){this.frameBuffer=[],this.totalFramesCollected=0,this.trajectoryCount=0,this.currentTrajectory=[],this.isRecording=!1}}class u_{constructor({sceneManager:t,robotArm:e,environment:n,physicsWorld:i,coSimBridge:s,sensorCollector:o,dataPipeline:a}){this.scene=t,this.robot=e,this.env=n,this.physics=i,this.cosim=s,this.sensor=o,this.pipeline=a,this.isRunning=!1,this.isPaused=!1,this.timeScale=1,this.simTime=0,this.realTime=0,this.frameCount=0,this.physicsHz=120,this.physicsDt=1/120,this.taskState="idle",this.taskProgress=0,this.taskCycleCount=0,this.taskSpeed=1,this.currentObjectDef=null,this.coSimProperties=null,this.objectStartPos={x:.25,y:.45,z:0},this.objectTargetPos={x:-.25,y:.55,z:0},this._rafHandle=null,this._lastTimestamp=0,this.simHours=0}start(){this.isRunning||(this.isRunning=!0,this.isPaused=!1,this._lastTimestamp=performance.now(),this._loop())}togglePause(){return this.isPaused=!this.isPaused,this.isPaused||(this._lastTimestamp=performance.now()),this.isPaused}stop(){this.isRunning=!1,this._rafHandle&&(cancelAnimationFrame(this._rafHandle),this._rafHandle=null)}setTimeScale(t){this.timeScale=Math.max(1,Math.min(100,t))}loadObject(t){this.currentObjectDef=t,this.coSimProperties=this.cosim.computeObjectProperties(t.physics),this.env.spawnObject(t);const e=this.env.getObjectPosition();return this.physics.spawnObject(t,e),this.physics.updateObjectMaterial(this.coSimProperties.effectiveFriction,this.coSimProperties.effectiveRestitution),this.taskState="idle",this.taskProgress=0,this.coSimProperties}startTask(){if(!this.currentObjectDef)return;const t=this.env.getObjectPosition();this._grabPos={x:t.x,y:t.y,z:t.z},this._placePos={x:-.2,y:0,z:.1},this.taskState="reaching",this.taskProgress=0,this.robot.joints.gripperOpen=1,this.sensor.startTrajectory()}_loop(){if(!this.isRunning||(this._rafHandle=requestAnimationFrame(()=>this._loop()),this.isPaused))return;const t=performance.now(),e=Math.min((t-this._lastTimestamp)/1e3,.05);this._lastTimestamp=t,this.realTime+=e;const n=e*this.timeScale,i=Math.min(Math.ceil(n/this.physicsDt),this.timeScale*4);let s=null;const o=this.timeScale<=5;for(let a=0;a<i;a++){const c=this.physicsDt;this.simTime+=c,this.simHours=this.simTime/3600,this._updateTask(c),this.robot.updateJoints();const l=this.robot.getEndEffectorPosition();this.physics.updateGripper(l,this.robot.isGripping),this.physics.step(c);const h=this.physics.getObjectState();if(h&&this.env.setObjectPosition(h.position.x,h.position.y,h.position.z),this.sensor.isRecording){const d=this.cosim.getEnvironmentVector();a===0&&o&&(s=this.scene.captureRGBFeatures()),this.sensor.collectFrame(this.robot,this.physics,this.cosim,d,s)}}this.env.update(this.simTime),this.scene.render(),this.frameCount++}_ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}_updateTask(t){if(this.taskState==="idle")return;const e=this.taskSpeed*1.2;this.taskProgress+=t*e;const n=this.env.tableHeight,i=Math.min(1,t*8);switch(this.taskState){case"reaching":{const s=this._ease(Math.min(1,this.taskProgress)),o=this._grabPos.x,a=this._grabPos.z,c=n+.18,l=n+.06;let h;if(s<.6){const u=s/.6;h={x:o*u,y:c+(1-u)*.1,z:a*u}}else{const u=(s-.6)/.4;h={x:o,y:c+(l-c)*u,z:a}}const d=this.robot.computeIK(h,n);d&&this.robot.lerpJoints(d,i),this.robot.joints.gripperOpen=1,this.robot.updateJoints(),this.taskProgress>=1&&(this.taskState="grasping",this.taskProgress=0);break}case"grasping":{const s=Math.min(1,this.taskProgress*2.5);this.robot.joints.gripperOpen=1-s*.95;const o=this.robot.computeIK({x:this._grabPos.x,y:n+.06,z:this._grabPos.z},n);if(o&&this.robot.lerpJoints(o,i),this.robot.updateJoints(),s>=1){if(this.robot.isGripping=!0,this.coSimProperties&&Math.random()>this.coSimProperties.gripReliability){this.robot.isGripping=!1,this.robot.joints.gripperOpen=.8,this.taskState="reaching",this.taskProgress=0;break}this.taskState="lifting",this.taskProgress=0}break}case"lifting":{const s=this._ease(Math.min(1,this.taskProgress)),a=this.robot.computeIK({x:this._grabPos.x,y:n+.06+s*.16,z:this._grabPos.z},n);a&&this.robot.lerpJoints(a,i),this.robot.updateJoints(),this.taskProgress>=1&&(this.taskState="moving",this.taskProgress=0);break}case"moving":{const s=this._ease(Math.min(1,this.taskProgress)),o=this._grabPos.x,a=this._grabPos.z,c=this._placePos.x,l=this._placePos.z,h=n+.24,d=this.robot.computeIK({x:o+(c-o)*s,y:h+Math.sin(s*Math.PI)*.06,z:a+(l-a)*s},n);d&&this.robot.lerpJoints(d,i),this.robot.updateJoints(),this.taskProgress>=1&&(this.taskState="placing",this.taskProgress=0);break}case"placing":{const s=this._ease(Math.min(1,this.taskProgress)),o=this.robot.computeIK({x:this._placePos.x,y:n+.24-s*.16,z:this._placePos.z},n);o&&this.robot.lerpJoints(o,i),this.robot.updateJoints(),this.taskProgress>=1&&(this.taskState="releasing",this.taskProgress=0);break}case"releasing":{const s=Math.min(1,this.taskProgress*2.5);this.robot.joints.gripperOpen=.05+s*.95,s>=.3&&(this.robot.isGripping=!1),this.robot.updateJoints(),s>=1&&(this.taskState="returning",this.taskProgress=0);break}case"returning":{const s=this._ease(Math.min(1,this.taskProgress));let o;if(s<.4){const c=s/.4;o={x:this._placePos.x*(1-c),y:n+.1+c*.16,z:this._placePos.z*(1-c)}}else{const c=(s-.4)/.6;o={x:.12*(1-c),y:n+.26-c*.02,z:0}}const a=this.robot.computeIK(o,n);if(a&&this.robot.lerpJoints(a,i),this.robot.joints.gripperOpen=.5,this.robot.updateJoints(),this.taskProgress>=1){const c=this.sensor.endTrajectory();c&&this.pipeline.processTrajectory(c,this.currentObjectDef,this.cosim.environment),this.taskCycleCount++,this._resetObject(),this.taskState="reaching",this.taskProgress=0,this.sensor.startTrajectory()}break}}}_resetObject(){if(this.currentObjectDef){const t={x:this.objectStartPos.x+(Math.random()-.5)*.08,y:this.objectStartPos.y,z:(Math.random()-.5)*.08};this.physics.spawnObject(this.currentObjectDef,t),this.env.setObjectPosition(t.x,t.y,t.z),this._grabPos={x:t.x,y:t.y,z:t.z},this._placePos={x:-.18+(Math.random()-.5)*.06,y:0,z:.08+(Math.random()-.5)*.06}}}getStats(){return{isRunning:this.isRunning,isPaused:this.isPaused,timeScale:this.timeScale,simTime:this.simTime,simHours:this.simHours,realTime:this.realTime,frameCount:this.frameCount,taskState:this.taskState,taskCycleCount:this.taskCycleCount,fps:this.frameCount/Math.max(.001,this.realTime)}}}class d_{constructor(t){this.cosim=t,this.enabled=!1,this.ranges={temperature:{min:-5,max:45,enabled:!0},humidity:{min:10,max:95,enabled:!0},lightIntensity:{min:.1,max:2,enabled:!0},lightAngle:{min:0,max:360,enabled:!0},colorTemperature:{min:2500,max:9e3,enabled:!0},ambientIntensity:{min:.05,max:.8,enabled:!0},gravity:{min:8,max:12,enabled:!1},surfaceContamination:{min:0,max:.8,enabled:!0},vibration:{min:0,max:15,enabled:!1}},this.randomizationCount=0,this.lastRandomization=null}randomize(){if(!this.enabled)return this.cosim.environment;const t={};for(const[e,n]of Object.entries(this.ranges))n.enabled&&(t[e]=n.min+Math.random()*(n.max-n.min));return this.cosim.setEnvironment(t),this.randomizationCount++,this.lastRandomization={...t},t}sweepParameter(t,e){const n=this.ranges[t];if(!n)return[];const i=[];for(let s=0;s<e;s++){const o=s/(e-1),a=n.min+o*(n.max-n.min),c={};for(const[l,h]of Object.entries(this.ranges))l===t?c[l]=a:h.enabled&&(c[l]=h.min+Math.random()*(h.max-h.min));i.push(c)}return i}getStats(){return{enabled:this.enabled,randomizationCount:this.randomizationCount,enabledDomains:Object.entries(this.ranges).filter(([,t])=>t.enabled).map(([t])=>t)}}}class f_{constructor(t=95,e=256,n=128){this.inputDim=t,this.hiddenDim=e,this.outputDim=n,this.W1=this._initWeights(t,e,42),this.b1=new Float32Array(e),this.W2=this._initWeights(e,n,137),this.b2=new Float32Array(n),this.lnGamma=new Float32Array(t).fill(1),this.lnBeta=new Float32Array(t).fill(0),this._runningMean=new Float32Array(t),this._runningVar=new Float32Array(t).fill(1),this._count=0,this._normBuf=new Float32Array(t),this._hiddenBuf=new Float32Array(e),this._outBuf=new Float32Array(n),this.totalEncoded=0,this.encodingTimeMs=0}_initWeights(t,e,n){const i=new Float32Array(t*e),s=Math.sqrt(3/t);let o=n;for(let a=0;a<i.length;a++){o=o*1664525+1013904223&4294967295;const c=(o>>>0)/4294967295;c<1/3?i[a]=s:c<2/3&&(i[a]=-s)}return i}_gelu(t){return .5*t*(1+Math.tanh(.7978845608*(t+.044715*t*t*t)))}_layerNorm(t,e){const n=t.length;let i=0;for(let a=0;a<n;a++)i+=t[a];i/=n;let s=0;for(let a=0;a<n;a++){const c=t[a]-i;s+=c*c}s/=n;const o=1/Math.sqrt(s+1e-5);for(let a=0;a<n;a++)e[a]=(t[a]-i)*o*this.lnGamma[a]+this.lnBeta[a]}_matVecMul(t,e,n,i,s,o){for(let a=0;a<o;a++){let c=n[a];for(let l=0;l<s;l++)c+=t[l*o+a]*e[l];i[a]=c}}_l2Normalize(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];e=Math.sqrt(e+1e-8);for(let n=0;n<t.length;n++)t[n]/=e}encode(t){const e=performance.now();this._layerNorm(t,this._normBuf),this._matVecMul(this.W1,this._normBuf,this.b1,this._hiddenBuf,this.inputDim,this.hiddenDim);for(let n=0;n<this.hiddenDim;n++)this._hiddenBuf[n]=this._gelu(this._hiddenBuf[n]);return this._matVecMul(this.W2,this._hiddenBuf,this.b2,this._outBuf,this.hiddenDim,this.outputDim),this._l2Normalize(this._outBuf),this.totalEncoded++,this.encodingTimeMs+=performance.now()-e,new Float32Array(this._outBuf)}encodeBatch(t){return t.map(e=>this.encode(e))}similarity(t,e){let n=0;for(let i=0;i<t.length;i++)n+=t[i]*e[i];return n}getStats(){return{totalEncoded:this.totalEncoded,avgTimeMs:this.totalEncoded>0?this.encodingTimeMs/this.totalEncoded:0,throughput:this.totalEncoded>0?Math.round(this.totalEncoded/(this.encodingTimeMs/1e3)):0}}}class p_{constructor(t,e,n){this.sensor=t,this.encoder=e,this.dataset=n,this.isProcessing=!1,this.processedTrajectories=0,this.processedFrames=0,this.totalEmbeddings=0,this.pipelineLatencyMs=0}processTrajectory(t,e,n){if(!t||t.frames.length===0)return null;const i=performance.now();this.isProcessing=!0;const s=[];for(const a of t.frames){const c=this.sensor.frameToVector(a),l=this.encoder.encode(c);s.push(l)}const o={id:`traj_${Date.now()}_${this.processedTrajectories}`,objectId:e.id||e.name,objectPath:e.path?e.path.join("."):"unknown",category:e.path?e.path[0]:"unknown",subcategory:e.path?e.path.slice(0,-1).join("."):"unknown",objectName:e.name,frameCount:t.frames.length,embeddings:s,summaryEmbedding:this._meanEmbedding(s),environment:{...n},timestamp:Date.now(),durationMs:t.frames.length>1?t.frames[t.frames.length-1].timestamp-t.frames[0].timestamp:0,success:this._evaluateSuccess(t)};return this.dataset.addTrajectory(o),this.processedTrajectories++,this.processedFrames+=t.frames.length,this.totalEmbeddings+=s.length,this.pipelineLatencyMs+=performance.now()-i,this.isProcessing=!1,o}_meanEmbedding(t){if(t.length===0)return new Float32Array(this.encoder.outputDim);const e=new Float32Array(t[0].length);for(const s of t)for(let o=0;o<e.length;o++)e[o]+=s[o];const n=t.length;for(let s=0;s<e.length;s++)e[s]/=n;let i=0;for(let s=0;s<e.length;s++)i+=e[s]*e[s];i=Math.sqrt(i+1e-8);for(let s=0;s<e.length;s++)e[s]/=i;return e}_evaluateSuccess(t){if(t.frames.length<5)return!1;const e=t.frames.slice(-5);return Math.max(...e.map(i=>i.objectPosition[1]))>.47}getStats(){return{processedTrajectories:this.processedTrajectories,processedFrames:this.processedFrames,totalEmbeddings:this.totalEmbeddings,avgLatencyMs:this.processedTrajectories>0?this.pipelineLatencyMs/this.processedTrajectories:0,isProcessing:this.isProcessing}}}class m_{constructor(){this.trajectories=new Map,this.allTrajectories=[],this.totalFrames=0,this.totalEmbeddings=0,this.categoryStats=new Map}addTrajectory(t){this.allTrajectories.push(t);const e=t.objectPath;this.trajectories.has(e)||this.trajectories.set(e,[]),this.trajectories.get(e).push(t),this.totalFrames+=t.frameCount,this.totalEmbeddings+=t.embeddings.length,this._updateCategoryStats(e,t)}_updateCategoryStats(t,e){this.categoryStats.has(t)||this.categoryStats.set(t,{count:0,successCount:0,totalFrames:0});const n=this.categoryStats.get(t);n.count++,e.success&&n.successCount++,n.totalFrames+=e.frameCount}getByPath(t){return this.trajectories.get(t)||[]}getCountForPath(t){let e=0;for(const[n,i]of this.trajectories)(n===t||n.startsWith(t+"."))&&(e+=i.length);return e}getStatsForPath(t){let e=0,n=0,i=0;for(const[s,o]of this.categoryStats)(s===t||s.startsWith(t+"."))&&(e+=o.count,n+=o.successCount,i+=o.totalFrames);return{count:e,successRate:e>0?(n/e*100).toFixed(1):0,avgFrames:e>0?Math.round(i/e):0}}getOverallStats(){var e;const t=this.allTrajectories.filter(n=>n.success).length;return{totalTrajectories:this.allTrajectories.length,totalFrames:this.totalFrames,totalEmbeddings:this.totalEmbeddings,successRate:this.allTrajectories.length>0?(t/this.allTrajectories.length*100).toFixed(1):0,categories:this.trajectories.size,embeddingDim:this.allTrajectories.length>0&&((e=this.allTrajectories[0].embeddings[0])==null?void 0:e.length)||128}}exportSummary(){return{metadata:{generated:new Date().toISOString(),platform:"Haptal Sim-to-Real",version:"0.1.0"},stats:this.getOverallStats(),categories:Object.fromEntries([...this.categoryStats.entries()].map(([t,e])=>[t,{trajectories:e.count,successRate:e.count>0?(e.successCount/e.count*100).toFixed(1)+"%":"0%",totalFrames:e.totalFrames}]))}}}const co={tactile:{name:"Tactile Datasets",icon:"🤲",children:{fruits:{name:"Fruits",icon:"🍎",children:{apple:{name:"Apple",icon:"🍎",physics:{mass:.2,radius:.04,shape:"sphere",friction:.4,restitution:.3,deformability:.15,surfaceTexture:"smooth",color:[.85,.12,.1],gripForceMin:.8,gripForceMax:8,thermalConductivity:.42}},banana:{name:"Banana",icon:"🍌",physics:{mass:.12,radius:.02,length:.18,shape:"cylinder",friction:.35,restitution:.15,deformability:.25,surfaceTexture:"smooth",color:[.95,.88,.2],gripForceMin:.5,gripForceMax:5,thermalConductivity:.35}},orange:{name:"Orange",icon:"🍊",physics:{mass:.18,radius:.038,shape:"sphere",friction:.55,restitution:.25,deformability:.12,surfaceTexture:"rough",color:[1,.55,0],gripForceMin:.7,gripForceMax:10,thermalConductivity:.38}},grape:{name:"Grape Cluster",icon:"🍇",physics:{mass:.08,radius:.015,shape:"sphere",friction:.3,restitution:.1,deformability:.35,surfaceTexture:"smooth",color:[.4,.1,.5],gripForceMin:.2,gripForceMax:3,thermalConductivity:.5}}}},vegetables:{name:"Vegetables",icon:"🥕",children:{tomato:{name:"Tomato",icon:"🍅",physics:{mass:.15,radius:.035,shape:"sphere",friction:.38,restitution:.2,deformability:.3,surfaceTexture:"smooth",color:[.9,.15,.1],gripForceMin:.4,gripForceMax:4,thermalConductivity:.52}},carrot:{name:"Carrot",icon:"🥕",physics:{mass:.08,radius:.015,length:.18,shape:"cylinder",friction:.45,restitution:.35,deformability:.05,surfaceTexture:"rough",color:[1,.5,0],gripForceMin:.6,gripForceMax:15,thermalConductivity:.6}},potato:{name:"Potato",icon:"🥔",physics:{mass:.17,radius:.035,shape:"sphere",friction:.5,restitution:.3,deformability:.03,surfaceTexture:"rough",color:[.6,.45,.25],gripForceMin:1,gripForceMax:20,thermalConductivity:.55}}}}}},warehouse:{name:"Warehouse Automation",icon:"🏭",children:{boxes:{name:"Boxes & Containers",icon:"📦",children:{cardboard_small:{name:"Small Cardboard Box",icon:"📦",physics:{mass:.35,width:.15,height:.1,depth:.12,shape:"box",friction:.55,restitution:.15,deformability:.2,surfaceTexture:"rough",color:[.72,.55,.35],gripForceMin:2,gripForceMax:50,thermalConductivity:.07}},cardboard_large:{name:"Large Cardboard Box",icon:"📦",physics:{mass:.8,width:.3,height:.2,depth:.25,shape:"box",friction:.55,restitution:.1,deformability:.18,surfaceTexture:"rough",color:[.68,.52,.32],gripForceMin:4,gripForceMax:50,thermalConductivity:.07}},plastic_container:{name:"Plastic Container",icon:"🗃️",physics:{mass:.25,width:.18,height:.08,depth:.12,shape:"box",friction:.35,restitution:.4,deformability:.02,surfaceTexture:"smooth",color:[.3,.5,.7],gripForceMin:1.5,gripForceMax:100,thermalConductivity:.19}}}},parcels:{name:"Parcels & Packages",icon:"📮",children:{envelope:{name:"Padded Envelope",icon:"✉️",physics:{mass:.1,width:.25,height:.01,depth:.18,shape:"box",friction:.5,restitution:.05,deformability:.4,surfaceTexture:"smooth",color:[.9,.85,.7],gripForceMin:.3,gripForceMax:20,thermalConductivity:.05}},bottle_package:{name:"Bottle Package",icon:"🧴",physics:{mass:.45,radius:.035,length:.2,shape:"cylinder",friction:.3,restitution:.35,deformability:.01,surfaceTexture:"smooth",color:[.85,.85,.9],gripForceMin:2,gripForceMax:80,thermalConductivity:.17}}}}}},medical:{name:"Medical & Lab",icon:"🏥",children:{instruments:{name:"Instruments",icon:"🔬",children:{syringe:{name:"Syringe",icon:"💉",physics:{mass:.015,radius:.006,length:.1,shape:"cylinder",friction:.25,restitution:.3,deformability:0,surfaceTexture:"smooth",color:[.9,.92,.95],gripForceMin:.2,gripForceMax:30,thermalConductivity:.2}},test_tube:{name:"Test Tube",icon:"🧪",physics:{mass:.025,radius:.008,length:.12,shape:"cylinder",friction:.2,restitution:.15,deformability:0,surfaceTexture:"smooth",color:[.85,.9,.95],gripForceMin:.3,gripForceMax:15,thermalConductivity:1}}}},supplies:{name:"Supplies",icon:"🩹",children:{bandage_roll:{name:"Bandage Roll",icon:"🩹",physics:{mass:.05,radius:.025,length:.04,shape:"cylinder",friction:.6,restitution:.1,deformability:.3,surfaceTexture:"rough",color:[.95,.95,.92],gripForceMin:.3,gripForceMax:10,thermalConductivity:.08}},medicine_bottle:{name:"Medicine Bottle",icon:"💊",physics:{mass:.08,radius:.018,length:.06,shape:"cylinder",friction:.3,restitution:.25,deformability:0,surfaceTexture:"smooth",color:[.4,.25,.15],gripForceMin:.5,gripForceMax:40,thermalConductivity:.17}}}}}},electronics:{name:"Electronics Assembly",icon:"🔌",children:{components:{name:"Components",icon:"🖥️",children:{circuit_board:{name:"Circuit Board",icon:"🟩",physics:{mass:.04,width:.08,height:.002,depth:.06,shape:"box",friction:.35,restitution:.2,deformability:0,surfaceTexture:"smooth",color:[.1,.5,.2],gripForceMin:.2,gripForceMax:8,thermalConductivity:.3}},usb_cable:{name:"USB Cable",icon:"🔌",physics:{mass:.03,radius:.004,length:.15,shape:"cylinder",friction:.4,restitution:.1,deformability:.6,surfaceTexture:"smooth",color:[.15,.15,.15],gripForceMin:.1,gripForceMax:15,thermalConductivity:.15}}}}}}};function g_(r=co){const t=[];function e(n,i){if(n.physics){t.push({...n,path:i,id:i.join(".")});return}if(n.children)for(const[s,o]of Object.entries(n.children))e(o,[...i,s]);else for(const[s,o]of Object.entries(n))typeof o=="object"&&o.name&&e(o,[...i,s])}for(const[n,i]of Object.entries(r))e(i,[n]);return t}class __{constructor(t,e,n){this.sim=t,this.randomizer=e,this.pipeline=n,this.isGenerating=!1,this.currentPlan=null,this.progress={current:0,total:0,phase:"idle"},this.stats={totalGenerated:0,totalSimHours:0,objectsCovered:new Set,environmentssampled:0}}createPlan({objects:t=null,repetitions:e=10,environments:n=5,timeScaleTarget:i=10}={}){const s=t||g_(),o={objects:s,repetitions:e,environments:n,timeScaleTarget:i,totalCycles:s.length*n*e,estimatedSimHours:s.length*n*e*8/3600,estimatedRealMinutes:null};return o.estimatedRealMinutes=o.estimatedSimHours*60/i,this.currentPlan=o,o}startGeneration(t=null){t&&(this.currentPlan=t),this.currentPlan&&(this.isGenerating=!0,this.progress={current:0,total:this.currentPlan.totalCycles,phase:"generating",currentObject:null,currentEnvironment:0,currentRepetition:0,objectIndex:0,envIndex:0,repIndex:0},this.randomizer.enabled=!0,this.sim.setTimeScale(this.currentPlan.timeScaleTarget),this._loadNextConfiguration())}stopGeneration(){this.isGenerating=!1,this.progress.phase="stopped",this.randomizer.enabled=!1}onCycleComplete(){if(!this.isGenerating)return;this.progress.current++,this.progress.repIndex++,this.stats.totalGenerated++,this.stats.totalSimHours=this.sim.simHours;const t=this.currentPlan;if(this.progress.repIndex>=t.repetitions){if(this.progress.repIndex=0,this.progress.envIndex++,this.stats.environmentssampled++,this.progress.envIndex>=t.environments&&(this.progress.envIndex=0,this.progress.objectIndex++,this.progress.objectIndex>=t.objects.length)){this.isGenerating=!1,this.progress.phase="complete";return}this._loadNextConfiguration()}}_loadNextConfiguration(){const e=this.currentPlan.objects[this.progress.objectIndex];this.progress.currentObject=e.name,this.stats.objectsCovered.add(e.id||e.name),this.randomizer.randomize(),this.sim.loadObject(e),this.sim.startTask()}getProgress(){return{...this.progress,percentage:this.progress.total>0?(this.progress.current/this.progress.total*100).toFixed(1):0}}getStats(){return{totalGenerated:this.stats.totalGenerated,totalSimHours:this.stats.totalSimHours.toFixed(2),objectsCovered:this.stats.objectsCovered.size,environmentsSampled:this.stats.environmentssampled,isGenerating:this.isGenerating}}}class v_{constructor(t,e,n,i,s){this.container=t,this.cosim=e,this.scene=n,this.physics=i,this.sim=s,this.onObjectSelected=null,this.onPresetSelected=null,this._build()}_build(){this.container.innerHTML="",this._addPresetSelector(),this._addRobotDragNote(),this._addGroup("Lighting",[this._slider("Light Intensity","lightIntensity",.05,2,.05,1,""),this._slider("Light Angle","lightAngle",0,360,1,45,"°"),this._slider("Color Temp","colorTemperature",2e3,9e3,100,5500,"K"),this._slider("Ambient","ambientIntensity",0,1,.05,.4,"")]),this._addGroup("Physical Environment",[this._slider("Temperature","temperature",-20,50,1,22,"°C"),this._slider("Humidity","humidity",0,100,1,45,"%"),this._slider("Gravity","gravity",.5,20,.1,9.81,"m/s²"),this._slider("Air Density","airDensity",.5,2,.01,1.225,"kg/m³")]),this._addGroup("Surface Conditions",[this._slider("Contamination","surfaceContamination",0,1,.01,0,""),this._slider("Vibration","vibration",0,50,.5,0,"Hz")]),this._addDerivedSection(),this._addObjectSelector()}_addPresetSelector(){const t=document.createElement("div");t.className="control-group";const e=document.createElement("div");e.className="control-group-title",e.innerHTML='<span class="dot"></span>Environment Preset',t.appendChild(e);const n=document.createElement("div");n.style.cssText="display:grid;grid-template-columns:1fr 1fr;gap:6px;";for(const[i,s]of Object.entries($c)){const o=document.createElement("div");o.className="object-card"+(i==="lab"?" selected":""),o.innerHTML=`<div class="obj-icon">${s.icon}</div><div class="obj-name">${s.name}</div>`,o.addEventListener("click",()=>{n.querySelectorAll(".object-card").forEach(a=>a.classList.remove("selected")),o.classList.add("selected"),this.onPresetSelected&&this.onPresetSelected(i)}),n.appendChild(o)}t.appendChild(n),this.container.appendChild(t)}_addRobotDragNote(){const t=document.createElement("div");t.className="control-group",t.style.padding="10px 20px",t.innerHTML=`
      <div style="font-size:10px;color:var(--text-muted);line-height:1.5;">
        <span style="color:var(--accent);font-weight:600;">SHIFT+DRAG</span> or
        <span style="color:var(--accent);font-weight:600;">RIGHT-CLICK DRAG</span>
        on viewport to reposition robot arm
      </div>`,this.container.appendChild(t)}_addGroup(t,e){const n=document.createElement("div");n.className="control-group";const i=document.createElement("div");i.className="control-group-title",i.innerHTML=`<span class="dot"></span>${t}`,n.appendChild(i);for(const s of e)n.appendChild(s);this.container.appendChild(n)}_slider(t,e,n,i,s,o,a){const c=document.createElement("div");c.className="control-row";const l=document.createElement("label");l.textContent=t;const h=document.createElement("input");h.type="range",h.min=n,h.max=i,h.step=s,h.value=o;const d=document.createElement("span");return d.className="value-display",d.textContent=`${o}${a}`,h.addEventListener("input",()=>{const u=parseFloat(h.value);d.textContent=`${Number.isInteger(u)?u:u.toFixed(s<1?2:0)}${a}`,this._onParamChange(e,u)}),c.appendChild(l),c.appendChild(h),c.appendChild(d),c}_onParamChange(t,e){if(this.cosim.setEnvironment({[t]:e}),["lightIntensity","lightAngle","colorTemperature","ambientIntensity"].includes(t)&&this.scene.updateEnvironment({[t]:e}),t==="gravity"&&this.physics.setGravity(e),this.sim.currentObjectDef){const n=this.cosim.computeObjectProperties(this.sim.currentObjectDef.physics);this.sim.coSimProperties=n,this.physics.updateObjectMaterial(n.effectiveFriction,n.effectiveRestitution),this._updateDerived(n)}}_addDerivedSection(){const t=document.createElement("div");t.className="control-group";const e=document.createElement("div");e.className="control-group-title",e.innerHTML='<span class="dot"></span>Derived Properties',t.appendChild(e),this._derivedContainer=document.createElement("div"),this._derivedContainer.id="derived-props",t.appendChild(this._derivedContainer),this._updateDerived(null),this.container.appendChild(t)}_updateDerived(t){if(!this._derivedContainer)return;const e=t?[["Eff. Friction",t.effectiveFriction.toFixed(3)],["Eff. Restitution",t.effectiveRestitution.toFixed(3)],["Grip Reliability",(t.gripReliability*100).toFixed(1)+"%"],["Grip Force Range",`${t.gripForceMin.toFixed(1)}-${t.gripForceMax.toFixed(1)}N`],["Sensor Noise",t.sensorNoise.toFixed(4)],["Stiffness",t.materialStiffness.toFixed(3)],["Drag Coeff",t.dragCoefficient.toFixed(5)]]:[["Eff. Friction","—"],["Eff. Restitution","—"],["Grip Reliability","—"],["Sensor Noise","—"]];this._derivedContainer.innerHTML=e.map(([n,i])=>`
      <div class="control-row">
        <label>${n}</label>
        <span class="value-display">${i}</span>
      </div>
    `).join("")}_addObjectSelector(){const t=document.createElement("div");t.className="object-selector";const e=document.createElement("div");e.className="control-group-title",e.innerHTML='<span class="dot"></span>Quick Object Select',t.appendChild(e);const n=document.createElement("div");n.className="object-grid";const i=[{id:"tactile.fruits.apple",icon:"🍎",name:"Apple"},{id:"tactile.fruits.banana",icon:"🍌",name:"Banana"},{id:"tactile.fruits.orange",icon:"🍊",name:"Orange"},{id:"warehouse.boxes.cardboard_small",icon:"📦",name:"Box"},{id:"medical.instruments.syringe",icon:"💉",name:"Syringe"},{id:"medical.instruments.test_tube",icon:"🧪",name:"Test Tube"},{id:"electronics.components.circuit_board",icon:"🟩",name:"PCB"},{id:"tactile.vegetables.tomato",icon:"🍅",name:"Tomato"}];for(const s of i){const o=document.createElement("div");o.className="object-card",o.innerHTML=`<div class="obj-icon">${s.icon}</div><div class="obj-name">${s.name}</div>`,o.addEventListener("click",()=>{n.querySelectorAll(".object-card").forEach(a=>a.classList.remove("selected")),o.classList.add("selected"),this.onObjectSelected&&this.onObjectSelected(s.id)}),n.appendChild(o)}t.appendChild(n),this.container.appendChild(t)}refresh(){this.sim.coSimProperties&&this._updateDerived(this.sim.coSimProperties)}}class x_{constructor(t,e){this.container=t,this.dataset=e,this.onObjectSelected=null,this.selectedPath=null,this._build()}_build(){this.container.innerHTML="";const t=document.createElement("div");t.className="taxonomy-tree";for(const[e,n]of Object.entries(co))t.appendChild(this._renderNode(n,[e],0));this.container.appendChild(t)}_renderNode(t,e,n){if(t.physics)return this._renderLeaf(t,e);const i=document.createElement("div");i.className="taxonomy-node";const s=e.join("."),o=this.dataset.getCountForPath(s),a=document.createElement("div");a.className="taxonomy-header";const c=document.createElement("span");c.className="expand-icon",c.textContent="▸";const l=document.createElement("span");l.className="node-icon",l.textContent=t.icon||"📁";const h=document.createElement("span");h.className="node-name",h.textContent=t.name;const d=document.createElement("span");d.className="node-count",d.textContent=o>0?o:"",d.dataset.path=s,a.appendChild(c),a.appendChild(l),a.appendChild(h),a.appendChild(d);const u=document.createElement("div");u.className="taxonomy-children";const m=t.children?Object.entries(t.children):[];for(const[g,_]of m)u.appendChild(this._renderNode(_,[...e,g],n+1));return n===0&&(u.classList.add("open"),c.classList.add("expanded")),a.addEventListener("click",()=>{u.classList.toggle("open"),c.classList.toggle("expanded")}),i.appendChild(a),i.appendChild(u),i}_renderLeaf(t,e){const n=e.join("."),i=document.createElement("div");i.className="taxonomy-leaf",i.dataset.path=n;const s=document.createElement("span");s.className="leaf-dot";const o=document.createElement("span");o.textContent=t.icon||"•",o.style.fontSize="14px",o.style.width="20px",o.style.textAlign="center";const a=document.createElement("span");a.textContent=t.name,a.style.flex="1";const c=document.createElement("span");return c.className="leaf-props",c.textContent=`${(t.physics.mass*1e3).toFixed(0)}g`,i.appendChild(s),i.appendChild(o),i.appendChild(a),i.appendChild(c),i.addEventListener("click",()=>{this.container.querySelectorAll(".taxonomy-leaf.selected").forEach(l=>l.classList.remove("selected")),i.classList.add("selected"),this.selectedPath=n,this.onObjectSelected&&this.onObjectSelected(n)}),i}refresh(){const t=this.container.querySelectorAll(".node-count");for(const e of t){const n=e.dataset.path;if(n){const i=this.dataset.getCountForPath(n);e.textContent=i>0?i:""}}}}class y_{constructor(t,e,n,i){this.container=t,this.sim=e,this.generator=n,this.randomizer=i,this._build()}_build(){this.container.innerHTML="",this.playBtn=this._btn("▶ Play","btn btn-primary btn-sm",()=>{if(!this.sim.isRunning)this.sim.start(),this.sim.currentObjectDef&&this.sim.taskState==="idle"&&this.sim.startTask();else{const e=this.sim.togglePause();this.playBtn.textContent=e?"▶ Play":"⏸ Pause"}this._updatePlayButton()}),this.container.appendChild(this.playBtn),this.container.appendChild(this._btn("⏹ Stop","btn btn-danger btn-sm",()=>{this.sim.stop(),this._updatePlayButton()})),this.container.appendChild(this._sep());const t=[1,2,5,10,25,50,100];this.speedIndicator=document.createElement("span"),this.speedIndicator.className="speed-indicator",this.speedIndicator.textContent="1x",this.container.appendChild(this.speedIndicator),this.container.appendChild(this._btn("−","btn btn-sm",()=>{const e=t.indexOf(this.sim.timeScale);e>0&&(this.sim.setTimeScale(t[e-1]),this.speedIndicator.textContent=`${t[e-1]}x`)})),this.container.appendChild(this._btn("+","btn btn-sm",()=>{const e=t.indexOf(this.sim.timeScale);if(e<t.length-1)this.sim.setTimeScale(t[e+1]),this.speedIndicator.textContent=`${t[e+1]}x`;else if(e===-1){const n=t.reduce((s,o)=>Math.abs(o-this.sim.timeScale)<Math.abs(s-this.sim.timeScale)?o:s),i=t.indexOf(n);i<t.length-1&&(this.sim.setTimeScale(t[i+1]),this.speedIndicator.textContent=`${t[i+1]}x`)}})),this.container.appendChild(this._sep()),this.timeDisplay=document.createElement("span"),this.timeDisplay.className="time-display",this.timeDisplay.textContent="0:00:00",this.container.appendChild(this.timeDisplay),this.container.appendChild(this._sep()),this.drToggle=this._btn("DR: OFF","btn btn-sm",()=>{this.randomizer.enabled=!this.randomizer.enabled,this.drToggle.textContent=`DR: ${this.randomizer.enabled?"ON":"OFF"}`,this.drToggle.style.color=this.randomizer.enabled?"#22c55e":""}),this.container.appendChild(this.drToggle),this.container.appendChild(this._btn("Batch Gen","btn btn-sm",()=>{if(this.generator.isGenerating)this.generator.stopGeneration();else{const e=this.generator.createPlan({repetitions:5,environments:3,timeScaleTarget:25});this.generator.startGeneration(e),this.sim.setTimeScale(25),this.speedIndicator.textContent="25x"}}))}_btn(t,e,n){const i=document.createElement("button");return i.className=e,i.textContent=t,i.addEventListener("click",n),i}_sep(){const t=document.createElement("div");return t.style.cssText="width:1px;height:24px;background:#2d3a4f;",t}_updatePlayButton(){this.sim.isRunning&&!this.sim.isPaused?this.playBtn.textContent="⏸ Pause":this.playBtn.textContent="▶ Play"}refresh(){const t=this.sim.getStats(),e=Math.floor(t.simTime/3600),n=Math.floor(t.simTime%3600/60),i=Math.floor(t.simTime%60);this.timeDisplay.textContent=`${e}:${String(n).padStart(2,"0")}:${String(i).padStart(2,"0")} sim`}}class M_{constructor(t,e,n,i,s,o){this.overlay=t,this.dataStats=e,this.sim=n,this.pipeline=i,this.encoder=s,this.dataset=o,this._buildOverlay(),this._buildDataStats()}_buildOverlay(){this.overlay.innerHTML="",this.badges={};const t=[{key:"simHours",label:"Sim Hours",cls:"accent"},{key:"trajectories",label:"Trajectories",cls:"green"},{key:"embeddings",label:"Embeddings",cls:"purple"},{key:"fps",label:"FPS",cls:"orange"},{key:"taskState",label:"Task State",cls:"cyan"}];for(const e of t){const n=document.createElement("div");n.className=`stat-badge ${e.cls}`,n.innerHTML=`
        <span class="stat-label">${e.label}</span>
        <span class="stat-value" id="stat-${e.key}">0</span>
      `,this.overlay.appendChild(n),this.badges[e.key]=n.querySelector(".stat-value")}}_buildDataStats(){this.dataStats.innerHTML="";const t=document.createElement("div");t.className="data-stats-title",t.textContent="Data Pipeline",this.dataStats.appendChild(t),this._dataStatsContainer=document.createElement("div"),this.dataStats.appendChild(this._dataStatsContainer);const e=document.createElement("div");e.className="data-stats-title",e.style.marginTop="16px",e.textContent="Embedding Preview",this.dataStats.appendChild(e),this.embeddingViz=document.createElement("div"),this.embeddingViz.className="embedding-vector";for(let i=0;i<64;i++){const s=document.createElement("div");s.className="embedding-bar",s.style.height="2px",this.embeddingViz.appendChild(s)}this.dataStats.appendChild(this.embeddingViz);const n=document.createElement("div");n.className="data-stats-title",n.style.marginTop="16px",n.textContent="Generation Progress",this.dataStats.appendChild(n),this.progressBar=document.createElement("div"),this.progressBar.className="progress-bar",this.progressBar.innerHTML='<div class="fill" style="width: 0%"></div>',this.dataStats.appendChild(this.progressBar),this.progressLabel=document.createElement("div"),this.progressLabel.className="data-stat-row",this.progressLabel.style.marginTop="6px",this.progressLabel.innerHTML='<span class="label">Progress</span><span class="value">0%</span>',this.dataStats.appendChild(this.progressLabel)}refresh(){const t=this.sim.getStats(),e=this.dataset.getOverallStats(),n=this.encoder.getStats(),i=this.pipeline.getStats();this.badges.simHours.textContent=t.simHours.toFixed(2),this.badges.trajectories.textContent=e.totalTrajectories,this.badges.embeddings.textContent=e.totalEmbeddings,this.badges.fps.textContent=Math.round(t.fps),this.badges.taskState.textContent=t.taskState,this._dataStatsContainer.innerHTML=[["Total Frames",e.totalFrames.toLocaleString()],["Success Rate",`${e.successRate}%`],["Categories",e.categories],["Embedding Dim",e.embeddingDim],["Encoder Speed",`${n.throughput}/s`],["Pipeline Latency",`${i.avgLatencyMs.toFixed(1)}ms`]].map(([s,o])=>`
      <div class="data-stat-row">
        <span class="label">${s}</span>
        <span class="value">${o}</span>
      </div>
    `).join(""),this._updateEmbeddingViz()}_updateEmbeddingViz(){const t=this.dataset.allTrajectories;if(t.length===0)return;const e=t[t.length-1];if(!e.summaryEmbedding)return;const n=this.embeddingViz.children,i=e.summaryEmbedding,s=Math.max(1,Math.floor(i.length/n.length));for(let o=0;o<n.length;o++){const a=Math.abs(i[o*s]||0),c=Math.max(2,a*30);n[o].style.height=`${c}px`;const l=(i[o*s]||0)>=0;n[o].style.background=l?"#3b82f6":"#a855f7"}}updateProgress(t){const e=this.progressBar.querySelector(".fill");e.style.width=`${t}%`,this.progressLabel.querySelector(".value").textContent=`${t}%`}}class S_{constructor(){const t=document.getElementById("render-canvas");this.scene=new Rm(t),this.robot=new Pm,this.env=new Nm(this.scene.scene),this.physics=new c_,this.cosim=new l_,this.sensor=new h_,this.encoder=new f_(95,256,128),this.dataset=new m_,this.pipeline=new p_(this.sensor,this.encoder,this.dataset),this.robot.addToScene(this.scene.scene,this.env.tableHeight),this.sim=new u_({sceneManager:this.scene,robotArm:this.robot,environment:this.env,physicsWorld:this.physics,coSimBridge:this.cosim,sensorCollector:this.sensor,dataPipeline:this.pipeline}),this.randomizer=new d_(this.cosim),this.generator=new __(this.sim,this.randomizer,this.pipeline);const e=this.sim._updateTask.bind(this.sim);this.sim._updateTask=i=>{const s=this.sim.taskCycleCount;e(i),this.sim.taskCycleCount>s&&this.generator.onCycleComplete()},this.controlPanel=new v_(document.getElementById("controls-container"),this.cosim,this.scene,this.physics,this.sim),this.datasetBrowser=new x_(document.getElementById("dataset-browser"),this.dataset),this.simControls=new y_(document.getElementById("sim-controls-bar"),this.sim,this.generator,this.randomizer),this.statsDisplay=new M_(document.getElementById("stats-overlay"),document.getElementById("data-stats"),this.sim,this.pipeline,this.encoder,this.dataset);const n=i=>{const s=this._resolveObject(i);s&&(this.sim.loadObject(s),this.controlPanel.refresh(),this.sim.isRunning||this.sim.start(),this.sim.taskState==="idle"&&this.sim.startTask())};this.controlPanel.onObjectSelected=n,this.datasetBrowser.onObjectSelected=n,this.controlPanel.onPresetSelected=i=>{const s=this.env.loadPreset(i);s&&(this.robot.group.position.set(0,s.tableHeight,0),this.sim.objectStartPos.y=s.tableHeight+.015,this.scene.updateEnvironment({ambientIntensity:s.ambient}),this.scene.scene.background=new Ct(s.fogColor),this.sim.currentObjectDef&&(this.sim.loadObject(this.sim.currentObjectDef),this.sim.startTask()))},this.scene.onRobotDragged=(i,s)=>{this.robot.group.position.x=i,this.robot.group.position.z=s},this._startUIRefresh(),n("tactile.fruits.apple"),console.log("[Haptal] Platform initialized"),console.log("[Haptal] Subsystems: Scene, Robot, Physics, CoSim, Encoder, Pipeline, Dataset"),console.log("[Haptal] Encoder: 95-dim input → 256-dim hidden → 128-dim embedding"),console.log("[Haptal] Ready for sim-to-real data generation")}_resolveObject(t){var i;const e=t.split(".");let n=co;for(const s of e)if(n=n[s]||((i=n==null?void 0:n.children)==null?void 0:i[s]),!n)return null;return!n||!n.physics?null:{...n,path:e,id:t}}_startUIRefresh(){setInterval(()=>{if(this.statsDisplay.refresh(),this.simControls.refresh(),this.datasetBrowser.refresh(),this.generator.isGenerating){const t=this.generator.getProgress();this.statsDisplay.updateProgress(parseFloat(t.percentage))}},250)}}document.addEventListener("DOMContentLoaded",()=>{window.haptal=new S_});
