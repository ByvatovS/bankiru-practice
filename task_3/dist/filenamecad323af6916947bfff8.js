(()=>{var t={651:()=>{function t(t){console.log(t.target.parentNode.parentNode.parentNode.querySelector(".card-header__text").textContent)}document.querySelectorAll(".card-button").forEach((e=>{e.addEventListener("click",t)})),function(t){for(const t of[{id:1,name:"Очень длинное предложение...",logo:"Alfa-bank",rate:10,period:"200 дн.",amount:{min:300,max:1e4},url:""},{id:2,name:"Очень длинное предложене...",logo:"Alfa-bank",rate:20,period:"300 дн.",amount:{min:3e3,max:4e5},url:""}]){let e=document.getElementById(t.id).querySelector(".deposit-card_alignment");e.querySelector(".card-header__text").textContent=t.name;const r=e.querySelectorAll(".card-body-text-row .card-body-text-row__el2 "),n=Array.from(r);n[0].textContent="от "+String(t.rate)+"%",n[1].textContent=t.period,n[2].textContent=String(t.amount.min)+"-"+String(t.amount.max)+" ₽"}}()}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var c=e[n]={exports:{}};return t[n](c,c.exports,r),c.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{"use strict";r.p;const t=r.p+"assets/Icon (1).svg",e=r.p+"assets/Icon (2).svg",n=r.p+"assets/Icon (3).svg",o=r.p+"assets/Icon (4).svg",c=r.p+"assets/Icon (5).svg",s=r.p+"assets/Icon (6).svg",a=r.p+"assets/Icon (7).svg",i=r.p+"assets/wallet-dynamic-gradient.png",d=(r.p,r.p,r.p,document.getElementById("img_loc")),l=document.getElementById("img_exit"),m=document.getElementById("img_dzen"),g=document.getElementById("img_twit"),u=document.getElementById("img_vk"),p=document.getElementById("img_tel"),y=document.getElementById("img_clMstr"),f=document.getElementById("img_wallet");d.src=t,l.src=e,m.src=n,g.src=o,u.src=c,p.src=s,y.src=a,f.src=i,r(651)})()})();