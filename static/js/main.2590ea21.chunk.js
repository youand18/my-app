(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,r,t){},16:function(e,r){function t(e,r){for(var t=0,n=0;n<7;n++){for(var s=n;s<e.length;s+=7)if(e[s]==r){if((t+=1)>=4)return console.log("Vertical Check Win"),!0}else t=0;t=0}return!1}function n(e,r){for(var t=0,n=0;n<e.length;n++)if(n%7==0&&(t=0),e[n]==r){if((t+=1)>=4)return console.log("Horizontal Check win"),!0}else t=0;return!1}function s(e,r){for(var t=0,n=0;n<e.length/2;n++)if(e[n]==r){if(t=1,n%7<=3)for(var s=n;t>0;)if(e[s+8]==r){if(++t>=4)return console.log("Diagonal Check Win"),!0;s+=8}else t=0;if(t=1,n%7>=3)for(var a=n;t>0;)if(e[a+6]==r){if(++t>=4)return console.log("Diagonal Check Win"),!0;a+=6}else t=0}return!1}e.exports={winCheck:function(e,r){var a=t(e,r),i=n(e,r),l=s(e,r);return 1==a||1==i||1==l?(console.log("Win condition met"),r):null},verticalCheck:t,horizontalCheck:n,diagonalCheck:s}},8:function(e,r,t){"use strict";t.r(r);var n=t(2),s=t(3),a=t(5),i=t(4),l=t(1),o=t.n(l),c=t(7),u=t.n(c),d=(t(13),t(0)),h=(t(15),t(16)),b=function(e){Object(a.a)(t,e);var r=Object(i.a)(t);function t(){return Object(n.a)(this,t),r.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{style:{color:"blue"},children:"Connect Four!"})})}}]),t}(o.a.Component);function f(e){return Object(d.jsx)("button",{className:"square",onClick:e.onClick,style:{backgroundColor:e.value}})}var j=function(e){Object(a.a)(t,e);var r=Object(i.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=r.call(this,e)).state={squares:Array(42).fill(null),redIsNext:!0},s}return Object(s.a)(t,[{key:"resetBoard",value:function(){this.setState({squares:Array(42).fill(null),redIsNext:!0})}},{key:"getRandomInt",value:function(e){if(!h.winCheck(this.state.squares,this.state.redIsNext?"blue":"red")){var r=this.state.squares.slice(),t=Math.floor(Math.random()*e);return null===r[t]?t:(console.log("Random Int Reroll"),this.getRandomInt(42))}}},{key:"blueTakeRandomTurn",value:function(){var e=this.getRandomInt(42);console.log(e);var r=this.state.squares.slice();h.winCheck(this.state.squares,this.state.redIsNext?"blue":"red")||(r[e]="blue",console.log(this.state.squares),this.setState({squares:r,redIsNext:!0}))}},{key:"redTakeRandomTurn",value:function(){var e=this.getRandomInt(42);console.log(e);var r=this.state.squares.slice();h.winCheck(this.state.squares,this.state.redIsNext?"blue":"red")||(r[e]="red",console.log(this.state.squares),this.setState({squares:r,redIsNext:!1}))}},{key:"blueTakeDefensiveTurn",value:function(){var e,r=!1,t=this.state.squares.slice();if(!h.winCheck(this.state.squares,this.state.redIsNext?"blue":"red")){for(e=0;e<42;e++)if(null===t[e]){if(t[e]="blue",h.winCheck(t,"blue")){console.log("blue detected win"),r=!0;break}t=this.state.squares.slice()}for(var n=0,s=3;s>1;s--){for(e=0;e<42&&("red"===t[e]?n++:n=0,!(n>=s)||"blue"==t[e+1]&&"blue"==t[e-n]);e++);if(n>=s&&!r)console.log(n),null===t[e+1]?(console.log("Front Horizontal Defense"),t[e+1]="blue",r=!0):null===t[e-n]?(console.log("Back Horizontal Defense"),t[e-n]="blue",r=!0):(e=this.getRandomInt(42),console.log("Random Pick Inside of Horizontal Connected"),t[e]="blue",r=!0);else{var a=!1;n=0;for(var i=0;i<7;i++){for(e=i;e<42;e+=7)if("red"===t[e]){if(n+=1,console.log("Vertical Connected: "+n),n>=s&&("blue"!=t[e+7]||"blue"!=t[e-7*n])){console.log("vertical break"),a=!0;break}}else n=0;if(a)break;n=0}if(n>=s&&!r)console.log(n),e<=34&&null===t[e+7]?(console.log("Bottom Vertical Defense"),t[e+7]="blue",r=!0):null===t[e-7*n]?(console.log("Top Vertical Defense"),t[e-7*n]="blue",r=!0):(e=this.getRandomInt(42),console.log("Random Pick Inside of Vertical Connected"),t[e]="blue",r=!0);else{var l=void 0,o=!1;for(n=0,console.log("Diagonal here"),e=0;e<42;e++)if("red"===t[e]){if(n=1,e%7<=3&&!o)for(i=e;n>0;)if("red"===t[i+8]){if(i+=8,++n>=s){console.log("Diagonal Break"),l="left",o=!0,e=i;break}}else n=0;if(o||(n=1),e%7>=3&&!o)for(var c=e;n>0;)if("red"===t[c+6]){if(c+=6,++n>=s){console.log("Diagonal Break 2"),l="right",o=!0,e=c;break}}else n=0}n>=s&&!r&&(console.log("Diagonal Check 2"),"left"===l?e<34&&e%7<6&&null===t[e+8]?(console.log("Botton Left Diagonal Defense"),t[e+8]="blue",console.log(e),r=!0):null===t[e-8]&&(console.log("Top Left Diagonal Defense"),t[e-8]="blue",console.log(e),r=!0):"right"===l&&(e<35&&e%7>0&&null===t[e+6]?(console.log("Top Right Diagonal Defense"),t[e+6]="blue",console.log(e),r=!0):null===t[e-6]&&(console.log("Top Right Diagonal Defense"),t[e-6]="blue",console.log(e),r=!0))),s<3&&!r&&(e=this.getRandomInt(42),console.log("Random Pick Outside of Connected"),t[e]="blue",r=!0)}}if(console.log(this.state.squares),this.setState({squares:t,redIsNext:!0}),r)break}}}},{key:"handleClick",value:function(e){var r=this.state.squares.slice();h.winCheck(this.state.squares,this.state.redIsNext?"blue":"red")||r[e]||(r[e]=this.state.redIsNext?"red":"blue",this.setState({squares:r,redIsNext:!this.state.redIsNext}))}},{key:"renderSquare",value:function(e){var r=this;return Object(d.jsx)(f,{value:this.state.squares[e],onClick:function(){return r.handleClick(e)}})}},{key:"renderReset",value:function(e){var r=this;if(e)return Object(d.jsx)(f,{value:"green",onClick:function(){return r.resetBoard()}})}},{key:"fullBoard",value:function(){for(var e=0;e<42;e++)if(null===this.state.squares[e])return!1;return!0}},{key:"render",value:function(){var e,r,t=!1,n=this.fullBoard(),s=this.state.redIsNext?"blue":"red",a=h.winCheck(this.state.squares,s);return null!=a?(r="Click to Reset",t=!0,e="Winner: "+a):(r="",e="Next player: "+(this.state.redIsNext?"Red":"Blue")),n&&(e="Tie Game..."),"red"==s&&this.blueTakeDefensiveTurn(),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"status",children:e}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3),this.renderSquare(4),this.renderSquare(5),this.renderSquare(6)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(7),this.renderSquare(8),this.renderSquare(9),this.renderSquare(10),this.renderSquare(11),this.renderSquare(12),this.renderSquare(13)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(14),this.renderSquare(15),this.renderSquare(16),this.renderSquare(17),this.renderSquare(18),this.renderSquare(19),this.renderSquare(20)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(21),this.renderSquare(22),this.renderSquare(23),this.renderSquare(24),this.renderSquare(25),this.renderSquare(26),this.renderSquare(27)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(28),this.renderSquare(29),this.renderSquare(30),this.renderSquare(31),this.renderSquare(32),this.renderSquare(33),this.renderSquare(34)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare(35),this.renderSquare(36),this.renderSquare(37),this.renderSquare(38),this.renderSquare(39),this.renderSquare(40),this.renderSquare(41)]}),Object(d.jsx)("div",{className:"reset",children:r}),Object(d.jsx)("div",{className:"resetSquare",children:this.renderReset(t)})]})}}]),t}(o.a.Component),v=function(e){Object(a.a)(t,e);var r=Object(i.a)(t);function t(){return Object(n.a)(this,t),r.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{style:{color:"red"},children:"Rules"}),Object(d.jsx)("p",{children:"- Red plays first, picking a square to change to their color "}),Object(d.jsx)("p",{children:"- They click on any unplayed square to claim it on their turn"}),Object(d.jsx)("p",{children:"- Once red plays, blue goes in the same manner"}),Object(d.jsx)("p",{children:"- Play continues until one side gets four in a row"}),Object(d.jsx)("p",{children:"- In the case of the board filling up, neither player wins"})]})}}]),t}(o.a.Component),g=function(e){Object(a.a)(t,e);var r=Object(i.a)(t);function t(){return Object(n.a)(this,t),r.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Made by David Sanders for CSCI 310: JavaScript"}),Object(d.jsx)("p",{children:"v 0.1.9.91"})]})}}]),t}(o.a.Component),q=function(e){Object(a.a)(t,e);var r=Object(i.a)(t);function t(){return Object(n.a)(this,t),r.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(b,{}),Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)("div",{className:"game-board",children:Object(d.jsx)(j,{})}),Object(d.jsx)("div",{className:"game-info",children:Object(d.jsx)("div",{children:Object(d.jsx)(v,{})})})]}),Object(d.jsx)(g,{})]})})}}]),t}(o.a.Component);u.a.render(Object(d.jsx)(q,{}),document.getElementById("root")||document.createElement("div"))}},[[8,1,2]]]);
//# sourceMappingURL=main.2590ea21.chunk.js.map