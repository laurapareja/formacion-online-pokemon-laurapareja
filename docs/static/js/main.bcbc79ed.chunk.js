(window["webpackJsonpprueba-1-formacion-online"]=window["webpackJsonpprueba-1-formacion-online"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(16),a(6)),i=a(7),s=a(9),u=a(8),m=a(2),p=a(10),f=(a(17),function(e){var t=e.getFilterName;return r.a.createElement("div",{className:"filterName"},r.a.createElement("label",{htmlFor:"filterName"}),r.a.createElement("input",{placeholder:"Search for Pokemon",type:"text",id:"filterName",className:"filterName",onChange:t}),r.a.createElement("i",{className:"fas fa-search"}))}),k=(a(18),function(e){var t=e.getFilterName;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"body"},r.a.createElement("img",{src:"./images/pokedex.png",alt:"logo Pokedex",className:"logoPokedex"}),r.a.createElement("img",{src:"./images/pikachubackground.png",alt:"logo Pokedex",className:"logoPikachu"}),r.a.createElement(f,{getFilterName:t})))}),d=(a(19),function(e){var t=e.type;return r.a.createElement("div",{className:"pokeTypeItem"},t)}),h=(a(20),function(e){var t=e.pokemon,a=e.index,n=1===t.types.length?"pokeTypeContainer alone":"pokeTypeContainer";return r.a.createElement("div",{className:"pokeCard ".concat(function(e){if(1!==e.types.length)return"".concat(e.types[1])}(t)," ").concat(function(e){if(1===e.types.length)return"".concat(e.types[0])}(t)),key:a},r.a.createElement("div",{className:"pokeCard"},r.a.createElement("small",{className:"pokeId"},"ID / ",a),r.a.createElement("img",{className:"pokePicture",src:t.picture,alt:t.name}),r.a.createElement("h2",{className:"pokeName"},t.name),r.a.createElement("div",{className:n},t.types.map((function(e,t){return r.a.createElement(d,{key:t,index:t+1,type:e})})))),r.a.createElement("div",{className:"pokeCardBack ".concat(function(e){if(1!==e.types.length)return"".concat(e.types[0])}(t))}))}),E=(a(21),function(e){var t=e.pokemones,a=e.query;return r.a.createElement("ul",{className:"pokeList"},function(e,t){return e.filter((function(e){return e.name.includes(t)})).map((function(e,t){return r.a.createElement("li",{key:t,className:"pokeItemList"},r.a.createElement(h,{key:t,index:t+1,pokemon:e}))}))}(t,a))}),g=function(e){var t=e.classIcon,a=e.socialLink,n=e.linkText;return r.a.createElement("div",null,r.a.createElement("i",{className:t}),r.a.createElement("a",{className:"footer_link",target:"_blank",rel:"noopener noreferrer",href:a},n))},N=(a(22),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"copy"},"Licencia || \xa9 2019"),r.a.createElement("img",{src:"./images/laurapareja.png",alt:"logoLaura",className:"logoLauraPareja"}),r.a.createElement("div",null,r.a.createElement(g,{classIcon:"fab fa-linkedin",socialLink:"https://www.linkedin.com/in/laurapareja/",linkText:"/in/laurapareja"}),r.a.createElement(g,{classIcon:"fab fa-github",socialLink:"https://github.com/laurapareja",linkText:"/laurapareja"}),r.a.createElement(g,{classIcon:"fab fa-twitter-square",socialLink:"https://twitter.com/_laurapareja_",linkText:"@_laurapareja_"})))}),y=a(1),v=a.n(y),b=a(3),x=function(){var e=Object(b.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.results.map(function(){var e=Object(b.a)(v.a.mark((function e(t){var a,n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,r=n.types.map((function(e){return e.type.name})),c={name:t.name,picture:n.sprites.front_default,types:r},e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=(a(24),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={pokemones:[],query:""},a.getFilterName=a.getFilterName.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;x().then((function(e){return Promise.all(e)})).then((function(t){e.setState({pokemones:t})}))}},{key:"getFilterName",value:function(e){var t=e.currentTarget.value.toLowerCase();return this.setState({query:t})}},{key:"render",value:function(){return null===this.state?r.a.createElement("div",null,"Loading"):r.a.createElement("div",{className:"page"},r.a.createElement(k,{getFilterName:this.getFilterName}),r.a.createElement(E,{pokemones:this.state.pokemones,query:this.state.query}),r.a.createElement(N,null))}}]),t}(r.a.Component));o.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.bcbc79ed.chunk.js.map