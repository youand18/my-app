(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,r,t){},15:function(e,r){function t(e,r){for(var t=0,s=0;s<7;s++)for(var n=s;n<e.length;n+=7)if(e[n]==r){if((t+=1)>=4)return!0}else t=0;return!1}function s(e,r){for(var t=0,s=0;s<e.length;s++)if(s%7==0&&(t=0),e[s]==r){if((t+=1)>=4)return!0}else t=0;return!1}function n(e,r){for(var t=0,s=0;s<e.length/2;s++)if(e[s]==r){if(t=1,s%7<=3)for(var n=s;t>0;)if(e[n+8]==r){if(++t>=4)return!0;n+=8}else t=0;if(t=1,s%7>=3)for(var a=s;t>0;)if(e[a+6]==r){if(++t>=4)return!0;a+=6}else t=0}return!1}e.exports={winCheck:function(e,r){var a=t(e,r),i=s(e,r),c=n(e,r);return 1==a||1==i||1==c?(console.log("Win condition met"),r):null},verticalCheck:t,horizontalCheck:s,diagonalCheck:n}},8:function(e,r,t){"use strict";t.r(r);var s=t(2),n=t(3),a=t(5),i=t(4),c=t(1),u=t.n(c),d=t(7),l=t.n(d),h=(t(13),t(0)),o=t(15),j=function(e){Object(a.a)(t,e);var r=Object(i.a)(t);function t(){return Object(s.a)(this,t),r.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{style:{color:"blue"},children:"Connect Four!"})})}}]),t}(u.a.Component);function b(e){return Object(h.jsx)("button",{className:"square",onClick:e.onClick,style:{backgroundColor:e.value}})}var f=function(e){Object(a.a)(t,e);var r=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=r.call(this,e)).state={squares:Array(42).fill(null),filled:Array(42).fill(!1),redIsNext:!0},n}return Object(n.a)(t,[{key:"resetBoard",value:function(){this.setState({squares:Array(42).fill(null),redIsNext:!0})}},{key:"blueTakeTurn",value:function(){for(var e=0;!0===this.state.filled[e];)e=this.getrandomint(42);var r=this.state.squares.slice();o.winCheck(this.state.squares,this.state.redIsNext?"blue":"red")||("blue"===r[e]&&this.blueTakeTurn(),r[e]=this.state.redIsNext?"red":"blue",this.setState({squares:r,redIsNext:!this.state.redIsNext,filled:!0}))}},{key:"handleClick",value:function(e){var r=this.state.squares.slice();o.winCheck(this.state.squares,this.state.redIsNext?"blue":"red")||r[e]||(r[e]=this.state.redIsNext?"red":"blue",this.setState({squares:r,redIsNext:!this.state.redIsNext,filled:!0}))}},{key:"getRandomInt",value:function(e){return Math.floor(Math.random()*e)}},{key:"renderSquare",value:function(e){var r=this;return Object(h.jsx)(b,{value:this.state.squares[e],onClick:function(){return r.handleClick(e)}})}},{key:"renderReset",value:function(e){var r=this;if(e)return Object(h.jsx)(b,{value:0,onClick:function(){return r.resetBoard()}})}},{key:"render",value:function(){var e,r,t=!1,s=this.state.redIsNext?"blue":"red",n=o.winCheck(this.state.squares,s);return null!=n?(r="Click to Reset",t=!0,e="Winner: "+n):(r="",e="Next player: "+(this.state.redIsNext?"Red":"Blue")),this.state.redIsNext||this.blueTakeTurn(),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"status",children:e}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3),this.renderSquare(4),this.renderSquare(5),this.renderSquare(6)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(7),this.renderSquare(8),this.renderSquare(9),this.renderSquare(10),this.renderSquare(11),this.renderSquare(12),this.renderSquare(13)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(14),this.renderSquare(15),this.renderSquare(16),this.renderSquare(17),this.renderSquare(18),this.renderSquare(19),this.renderSquare(20)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(21),this.renderSquare(22),this.renderSquare(23),this.renderSquare(24),this.renderSquare(25),this.renderSquare(26),this.renderSquare(27)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(28),this.renderSquare(29),this.renderSquare(30),this.renderSquare(31),this.renderSquare(32),this.renderSquare(33),this.renderSquare(34)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(35),this.renderSquare(36),this.renderSquare(37),this.renderSquare(38),this.renderSquare(39),this.renderSquare(40),this.renderSquare(41)]}),Object(h.jsx)("div",{className:"reset",children:r}),Object(h.jsx)("div",{className:"resetSquare",children:this.renderReset(t)})]})}}]),t}(u.a.Component),v=function(e){Object(a.a)(t,e);var r=Object(i.a)(t);function t(){return Object(s.a)(this,t),r.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{style:{color:"red"},children:"Rules"}),Object(h.jsx)("p",{children:"- Red plays first "}),Object(h.jsx)("p",{children:"- They click on any unplayed square to take their turn"}),Object(h.jsx)("p",{children:"- Once red plays, blue goes in the same manner"}),Object(h.jsx)("p",{children:"- Play continues until one side gets four in a row"}),Object(h.jsx)("p",{children:"- In the case of the board filling up, neither player wins"})]})}}]),t}(u.a.Component),O=function(e){Object(a.a)(t,e);var r=Object(i.a)(t);function t(){return Object(s.a)(this,t),r.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Made by David Sanders for CSCI 310: JavaScript"}),Object(h.jsx)("p",{children:"v 0.1.6.3"})]})}}]),t}(u.a.Component),q=function(e){Object(a.a)(t,e);var r=Object(i.a)(t);function t(){return Object(s.a)(this,t),r.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"page",children:Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(j,{}),Object(h.jsxs)("div",{className:"game",children:[Object(h.jsx)("div",{className:"game-board",children:Object(h.jsx)(f,{})}),Object(h.jsx)("div",{className:"game-info",children:Object(h.jsx)("div",{children:Object(h.jsx)(v,{})})})]}),Object(h.jsx)(O,{})]})})}}]),t}(u.a.Component);l.a.render(Object(h.jsx)(q,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.5631c55a.chunk.js.map