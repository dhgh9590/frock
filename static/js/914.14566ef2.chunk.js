"use strict";(self.webpackChunkfrock=self.webpackChunkfrock||[]).push([[914],{914:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var c=n(433),i=n(439),s=n(791),o="costume_section1__rN6xO",l="costume_container__4CdxD",r="costume_sort__yl09P",u="costume_active__i1AFV",a="costume_item_wrap__xUUee",m="costume_item__-8fGt",d="costume_item_img__vDXy+",h="costume_page_wrap__ozVz5",f="costume_visible__sBWe6",_=n(483),x=n(174),j=n(871),g=n(434),p=n(906),N=n(184),v=function(){var t=(0,j.s0)(),e=(0,g.I0)(),n=((0,j.UO)().id,(0,s.useState)()),v=(0,i.Z)(n,2),S=v[0],k=v[1],Z=(0,s.useState)(0),b=(0,i.Z)(Z,2),C=b[0],w=b[1],I=(0,s.useState)(0),y=(0,i.Z)(I,2),D=(y[0],y[1]),E=(0,s.useState)(1),G=(0,i.Z)(E,2),O=G[0],P=G[1],U=(0,s.useState)([1,2,3]),z=(0,i.Z)(U,2),T=z[0],V=(z[1],T.length,(0,s.useState)()),A=(0,i.Z)(V,2),B=(A[0],A[1],(0,s.useState)()),F=(0,i.Z)(B,2),H=F[0],L=F[1],M=(0,s.useState)(0),R=(0,i.Z)(M,2),W=R[0],X=R[1];function $(t){fetch("https://dhgh9590.github.io/forck_json/main/costume.json").then((function(t){return t.json()})).then((function(e){k(e[t])}))}function q(t){localStorage.setItem("pageNum",t)}return(0,s.useEffect)((function(){$(localStorage.getItem("pageNum"))}),[]),(0,N.jsx)("div",{children:(0,N.jsx)("section",{className:o,children:(0,N.jsxs)("div",{className:l,children:[(0,N.jsxs)("div",{className:a,children:[(0,N.jsxs)("div",{className:r,children:[(0,N.jsx)("button",{onClick:function(){!function(){var t=(0,c.Z)(S);t.sort((function(t,e){return t.title<e.title?-1:t.title==e.title?0:t.title>e.title?1:void 0})),k(t)}(),L(0),X(0)},className:0==H?"".concat(u):null,children:"Name Sort"}),0==W?(0,N.jsx)("button",{onClick:function(){!function(){var t=(0,c.Z)(S);t.sort((function(t,e){return t.price-e.price})),k(t)}(),L(1),X(1)},className:1==H?"".concat(u):null,children:"Low Price Sort"}):(0,N.jsx)("button",{onClick:function(){!function(){var t=(0,c.Z)(S);t.sort((function(t,e){return e.price-t.price})),k(t)}(),L(1),X(0)},className:1==H?"".concat(u):null,children:"High Price Sort"})]}),(0,N.jsx)("ul",{children:S&&S.map((function(n,c){return(0,N.jsx)("li",{onClick:function(){t("/Detail/".concat(n.id)),e((0,p.EM)(n))},children:(0,N.jsxs)("div",{className:m,children:[(0,N.jsx)("div",{className:d,children:(0,N.jsx)("img",{src:n.url,alt:""})}),(0,N.jsx)("em",{children:n.filter}),(0,N.jsx)("h3",{children:n.title}),(0,N.jsxs)("strong",{children:["$ ",n.price]})]})},c)}))})]}),(0,N.jsx)("div",{className:h,children:(0,N.jsxs)("ul",{children:[(0,N.jsx)("li",{onClick:function(){O>=3&&P(O-=3),w(0),q(2),$(2)},className:0==C?f:null,children:(0,N.jsx)("button",{children:(0,N.jsx)(_.G,{icon:x.EyR})})}),T&&T.map((function(t,e){return(0,N.jsx)("li",{className:localStorage.getItem("pageNum")==e||localStorage.getItem("pageNum")==e+3?u:null,children:(0,N.jsx)("button",{onClick:function(t){q(t.currentTarget.textContent-1),$(localStorage.getItem("pageNum")),window.scrollTo({top:0,behavior:"smooth"})},children:O+e})},e)})),(0,N.jsx)("li",{onClick:function(){P(O+=3),w(1),q(3),$(3),D(1)},className:1==C?f:null,children:(0,N.jsx)("button",{children:(0,N.jsx)(_.G,{icon:x.yOZ})})})]})})]})})})}}}]);
//# sourceMappingURL=914.14566ef2.chunk.js.map