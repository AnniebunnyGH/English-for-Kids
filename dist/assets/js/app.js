!function(e){var a={};function t(i){if(a[i])return a[i].exports;var r=a[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=a,t.d=function(e,a,i){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)t.d(i,r,function(a){return e[a]}.bind(null,r));return i},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="/",t(t.s=5)}([function(e,a,t){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(a){if(void 0===e[a]){var t=document.querySelector(a);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[a]=t}return e[a]}}(),n=[];function d(e){for(var a=-1,t=0;t<n.length;t++)if(n[t].identifier===e){a=t;break}return a}function c(e,a){for(var t={},i=[],r=0;r<e.length;r++){var o=e[r],c=a.base?o[0]+a.base:o[0],s=t[c]||0,u="".concat(c," ").concat(s);t[c]=s+1;var m=d(u),l={css:o[1],media:o[2],sourceMap:o[3]};-1!==m?(n[m].references++,n[m].updater(l)):n.push({identifier:u,updater:S(l,a),references:1}),i.push(u)}return i}function s(e){var a=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){a.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(a);else{var n=o(e.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(a)}return a}var u,m=(u=[],function(e,a){return u[e]=a,u.filter(Boolean).join("\n")});function l(e,a,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=m(a,r);else{var o=document.createTextNode(r),n=e.childNodes;n[a]&&e.removeChild(n[a]),n.length?e.insertBefore(o,n[a]):e.appendChild(o)}}function g(e,a,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,f=0;function S(e,a){var t,i,r;if(a.singleton){var o=f++;t=p||(p=s(a)),i=l.bind(null,t,o,!1),r=l.bind(null,t,o,!0)}else t=s(a),i=g.bind(null,t,a),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;i(e=a)}else r()}}e.exports=function(e,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=r());var t=c(e=e||[],a);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var r=d(t[i]);n[r].references--}for(var o=c(e,a),s=0;s<t.length;s++){var u=d(t[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}t=o}}}},function(e,a,t){var i=t(0),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},n=(i(r,o),r.locals?r.locals:{});e.exports=n},function(e,a,t){},function(e,a,t){var i=t(0),r=t(4);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},n=(i(r,o),r.locals?r.locals:{});e.exports=n},function(e,a,t){},function(e,a,t){"use strict";function i(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,a){if(!e)return;if("string"==typeof e)return r(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,a)}(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o,n=!0,d=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return n=e.done,e},e:function(e){d=!0,o=e},f:function(){try{n||null==i.return||i.return()}finally{if(d)throw o}}}}function r(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,i=new Array(a);t<a;t++)i[t]=e[t];return i}function o(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}t.r(a);var n=function(){function e(a,t){var r=this;if(function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e),this._audio=new Audio,"train"){this._mode="train",this._cardSets=a,this._cardSetNameArr=a[0];for(var o=0;o<this._cardSetNameArr.length;o++)this._cardSetNameArr[o]=this._cardSetNameArr[o].replace(/ /g,"");console.log(this._cardSetNameArr);var n=document.createElement("nav");n.id="main-menu",n.classList.add("nav-button"),n.classList.add("active"),n.innerHTML="<p>Main Page</p>",document.querySelector("section#side-menu").appendChild(n);var d,c=i(this.cardSetNameArr);try{for(c.s();!(d=c.n()).done;){var s=d.value,u=document.createElement("nav"),m=document.createElement("div");u.id=s.replace(/ /g,""),u.classList.add("nav-button"),u.innerHTML="<p>".concat(s,"</p>"),m.classList.add("card"),m.classList.add("main-card"),m.id="Card"+s.replace(/ /g,""),m.innerHTML='<img src="assets/'.concat(this.cardSets[this.cardSetNameArr.indexOf(s)+1][0].image,'">\n      <div><span>').concat(s[0].toUpperCase()+s.slice(1),"</span></div>"),document.querySelector("section#side-menu").appendChild(u),document.querySelector("section#content-block").appendChild(m)}}catch(e){c.e(e)}finally{c.f()}document.addEventListener("click",(function(e){var a=null;if(null!=e.target.closest("nav")?a=e.target.closest("nav"):null!=e.target.closest("div.card")?a=e.target.closest("div.card"):null!=e.target.closest(".menu-button")?a=e.target.closest(".menu-button"):e.target==document.querySelector("section#side-menu")?a=document.querySelector("section#side-menu"):null!=e.target.closest("div.mode-button")&&(a=e.target.closest("div.mode-button")),null!=a)switch(a.classList[0]){case"nav-button":document.querySelector("nav.active").classList.remove("active"),a.classList.add("active"),r.changeCardSet(a.id);break;case"card":if(a.classList.contains("main-card"))document.querySelector("nav.active").classList.remove("active"),document.querySelector("nav#".concat(a.id.slice(4))).classList.add("active"),r.changeCardSet(a.id.slice(4));else if(document.querySelector("#game-button").classList.contains("game")){if(!r._audio.src.includes("success.mp3")){var t=e.target.closest(".card"),i="assets/"+r.cardSets[r.cardSetNameArr.indexOf(document.querySelector("nav.active").id)+1][r.cardSetNameArr.indexOf(t.id.slice(4))].audioSrc;if(String(r._audio.src).includes(i)){var o=document.createElement("img");o.src="assets/img/star-win.svg",document.querySelector(".rating").appendChild(o),r._audio.src="assets/audio/success.mp3",r._audio.autoplay=!0,r.playGame()}else{var n=document.createElement("img");n.src="assets/img/star.svg",document.querySelector(".rating").appendChild(n);var d=new Audio;d.src="assets/audio/error.mp3",d.autoplay=!0,console.log(r.cardSetNameArr)}document.querySelectorAll(".rating img").length>15&&document.querySelector(".rating img").remove()}}else{var c=e.target.closest(".card");e.target==a.querySelector("img.rotate-button")?(c.classList.add("rotate"),setTimeout((function(){var e=r.cardSets[r.cardSetNameArr.indexOf(document.querySelector("nav.active").id)+1][r.cardSetNameArr.indexOf(c.id.slice(4))].translation;c.querySelector("span").innerHTML=e[0].toUpperCase()+e.slice(1),a.querySelector("img.rotate-button").classList.add("active")}),250),setTimeout((function(){c.classList.add("rotateComplite")}),500)):(r._audio.src="assets/".concat(r.cardSets[r.cardSetNameArr.indexOf(document.querySelector("nav.active").id)+1][r.cardSetNameArr.indexOf(c.id.slice(4))].audioSrc),r._audio.autoplay=!0)}break;case"menu-button":a.classList.contains("active")?(a.classList.remove("active"),document.querySelector("section#side-menu").classList.remove("active")):(a.classList.add("active"),document.querySelector("section#side-menu").classList.add("active"));break;case"mode-button":r.createGameMode(r.mode)}a!=document.querySelector(".menu-button")&&a!=document.querySelector("section#side-menu")&&(document.querySelector(".menu-button").classList.remove("active"),document.querySelector("section#side-menu").classList.remove("active"))}));var l=null;document.addEventListener("mouseover",(function(){null==l?l=event.target.closest("div.card.rotate"):null==event.target.closest("div.card.rotateComplite")&&l.classList.contains("rotateComplite")&&(l.classList.remove("rotate"),l.classList.remove("rotateComplite"),console.log("2"),setTimeout((function(){var e=r.cardSets[r.cardSetNameArr.indexOf(document.querySelector("nav.active").id)+1][r.cardSetNameArr.indexOf(l.id.slice(4))].word;l.querySelector("span").innerHTML=e[0].toUpperCase()+e.slice(1),l.querySelector("img.rotate-button").classList.remove("active")}),250),setTimeout((function(){l=null}),500))}))}}var a,t,r;return a=e,(t=[{key:"changeCardSet",value:function(e){if("main-menu"==e){var a,t=i(this.cardSetNameArr);try{for(t.s();!(a=t.n()).done;){var r=a.value;console.log(this.cardSetNameArr);var o=document.querySelectorAll("div.card")[this.cardSetNameArr.indexOf(r)];o.classList.add("main-card"),o.innerHTML='<img src="assets/'.concat(this.cardSets[this.cardSetNameArr.indexOf(r)+1][0].image,'">\n        <div><span>').concat(r[0].toUpperCase()+r.slice(1),"</span></div>")}}catch(e){t.e(e)}finally{t.f()}}else{console.log(this.cardSetNameArr+"    "+e),console.log(this.cardSets[this.cardSetNameArr.indexOf(e)+1]);var n,d=this.cardSets[this.cardSetNameArr.indexOf(e)+1],c=i(d);try{for(c.s();!(n=c.n()).done;){var s=n.value,u=document.querySelectorAll("div.card")[d.indexOf(s)];u.classList.remove("main-card"),u.innerHTML='<img src="assets/'.concat(s.image,'" class="card-img">\n        <div class="card-info"><span id="').concat(s.word,'">').concat(s.word[0].toUpperCase()+s.word.slice(1),'</span><img src="assets/img/rotate.png" class="rotate-button"></div>')}}catch(e){c.e(e)}finally{c.f()}}}},{key:"playGame",value:function(){var e=Math.floor(6.9*Math.random()+.5);console.log(e),console.log(this.cardSetNameArr),this._audio.src="assets/".concat(this.cardSets[this.cardSetNameArr.indexOf(document.querySelector("nav.active").id)+1][e].audioSrc),this._audio.autoplay=!0}},{key:"createGameMode",value:function(e){var a=this;"train"==this.mode?(this._mode="game",document.querySelector("section#content-block").classList.add("game"),document.querySelector("section#side-menu").classList.add("game"),document.querySelector("section#game-button").classList.add("game"),document.querySelector("header .mode-button").classList.add("game"),document.querySelector("header .mode-button span").innerHTML="GAME",document.querySelector("#game-button").addEventListener("click",(function(){"main-menu"!=document.querySelector("#side-menu .active").id&&a.playGame()}))):(this._mode="train",document.querySelector("header .mode-button span").innerHTML="TRAIN",document.querySelectorAll(".game").forEach((function(e){return e.classList.remove("game")})))}},{key:"cardSets",get:function(){return this._cardSets},set:function(e){this._cardSets=e}},{key:"cardSetNameArr",get:function(){return this._cardSetNameArr}},{key:"mode",get:function(){return this._mode},set:function(e){this._mode=e}}])&&o(a.prototype,t),r&&o(a,r),e}(),d=[["Action set A","Action set A1","Action set A2","Action set B","Animal set A","Animal set B","Clothes","Emotions"],[{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}]],c=(t(1),t(3),new n(d));console.log(c._mainCardSet)}]);