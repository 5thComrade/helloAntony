(this.webpackJsonphello_antony=this.webpackJsonphello_antony||[]).push([[0],{21:function(e,t,c){e.exports={Sidebar:"Sidebar_Sidebar__2cMuk",displaySidebar:"Sidebar_displaySidebar__1UQzs",container:"Sidebar_container__3y47m",navLinks:"Sidebar_navLinks__2h7ds",socialLinks:"Sidebar_socialLinks__2-W28",socialLink:"Sidebar_socialLink__3cDD6",closeIcon:"Sidebar_closeIcon__QG4eC"}},28:function(e,t,c){e.exports={About:"About_About__1MrfL",container:"About_container___d6DB",AboutMe:"About_AboutMe__roa1_",WorkedWith:"About_WorkedWith__2FXTg"}},31:function(e,t,c){e.exports={center:"Home_center__fnBrv",container:"Home_container__X7tHM",nextButton:"Home_nextButton__nOFqx",skill:"Home_skill__GcSNV",contactButton:"Home_contactButton__vV1Ku"}},33:function(e,t,c){e.exports={Navbar:"Navbar_Navbar__2wHZY",container:"Navbar_container__2ZlCE",hamburger:"Navbar_hamburger__2LbEL",navLinks:"Navbar_navLinks__Ubhdc"}},338:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(4),s=c.n(a),i=c(93),r=c.n(i),o=c(20),j=s.a.createContext(),b=function(e){var t=e.children,c=Object(a.useState)(""),s=Object(o.a)(c,2),i=s[0],r=s[1],b=Object(a.useState)(!1),l=Object(o.a)(b,2),d=l[0],u=l[1];return Object(n.jsx)(j.Provider,{value:{path:i,setPath:r,isSidebarOpen:d,setIsSidebarOpen:u},children:t})},l=function(){return Object(a.useContext)(j)},d=c(13),u=c(8),h=c(33),O=c.n(h),x=c(45),m=c(0),v=function(){var e=l(),t=e.path,c=e.setIsSidebarOpen;return Object(n.jsx)("nav",{className:O.a.Navbar,children:Object(n.jsxs)("div",{className:O.a.container,children:[Object(n.jsx)(d.b,{to:"/",children:Object(n.jsxs)("h1",{children:["Antony ",Object(n.jsx)("span",{children:"Chiramel"})]})}),Object(n.jsx)(m.b.Provider,{value:{size:"48px",className:O.a.hamburger},children:Object(n.jsx)(x.b,{onClick:function(){return c(!0)}})}),Object(n.jsxs)("ul",{className:O.a.navLinks,children:[Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/",className:"home"===t?"active":null,children:"home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/about",className:"about"===t?"active":null,children:"about"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/projects",className:"projects"===t?"active":null,children:"projects"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/contact",className:"contact"===t?"active":null,children:"contact"})})]})]})})},_=c(34),p=c(95),f=c(21),N=c.n(f),k=function(){var e=l(),t=e.path,c=e.isSidebarOpen,a=e.setIsSidebarOpen;return Object(n.jsx)("nav",{className:c?N.a.displaySidebar:N.a.Sidebar,children:Object(n.jsxs)("div",{className:N.a.container,children:[Object(n.jsx)(m.b.Provider,{value:{size:"48px",className:N.a.closeIcon},children:Object(n.jsx)(p.a,{onClick:function(){return a(!1)}})}),Object(n.jsxs)("ul",{className:N.a.navLinks,children:[Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/",className:"home"===t?"active":null,onClick:function(){return a(!1)},children:"home"})}),Object(n.jsx)("hr",{}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/about",className:"about"===t?"active":null,onClick:function(){return a(!1)},children:"about"})}),Object(n.jsx)("hr",{}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/projects",className:"projects"===t?"active":null,onClick:function(){return a(!1)},children:"projects"})}),Object(n.jsx)("hr",{}),Object(n.jsx)("li",{children:Object(n.jsx)(d.b,{to:"/contact",className:"contact"===t?"active":null,onClick:function(){return a(!1)},children:"contact"})}),Object(n.jsx)("hr",{})]}),Object(n.jsxs)("div",{className:N.a.socialLinks,children:[Object(n.jsx)("a",{href:"https://facebook.com/tony.chiramel.009",target:"_blank",rel:"noreferrer",children:Object(n.jsx)(m.b.Provider,{value:{size:"32px",className:N.a.socialLink},children:Object(n.jsx)(_.a,{})})}),Object(n.jsx)("a",{href:"https://github.com/5thComrade",target:"_blank",rel:"noreferrer",children:Object(n.jsx)(m.b.Provider,{value:{size:"32px",className:N.a.socialLink},children:Object(n.jsx)(_.b,{})})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/antony-chiramel-a40a3a169",target:"_blank",rel:"noreferrer",children:Object(n.jsx)(m.b.Provider,{value:{size:"32px",className:N.a.socialLink},children:Object(n.jsx)(_.d,{})})}),Object(n.jsx)("a",{href:"https://www.instagram.com/5th_comrade/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)(m.b.Provider,{value:{size:"32px",className:N.a.socialLink},children:Object(n.jsx)(_.c,{})})})]})]})})},g=c(96),S=c.n(g),w=function(){var e=Object(a.useState)("".concat(window.innerHeight,"px")),t=Object(o.a)(e,2),c=(t[0],t[1]),i=Object(a.useState)("".concat(window.innerWidth,"px")),r=Object(o.a)(i,2),j=(r[0],r[1]),b=function(){c("".concat(window.innerHeight,"px")),j("".concat(window.innerWidth,"px"))};return Object(a.useEffect)((function(){return b(),window.addEventListener("resize",b),function(){window.removeEventListener("resize",b)}})),Object(n.jsx)(s.a.Fragment,{children:Object(n.jsx)(S.a,{params:{particles:{number:{value:100,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"}},opacity:{value:.7,random:!1,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:2,size_min:.1,sync:!1}},line_linked:{enable_auto:!0,distance:150,color:"#fff",opacity:.5,width:1,condensed_mode:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}})})},y=c(31),L=c.n(y),P=c(97),z=function(){var e=l().setPath,t=Object(a.useState)(["Web Designer","Frontend Developer","Chai lover"]),c=Object(o.a)(t,1)[0],i=Object(a.useState)(""),r=Object(o.a)(i,2),j=r[0],b=r[1],u=Object(a.useState)(0),h=Object(o.a)(u,2),O=h[0],v=h[1],_=Object(a.useState)(!1),p=Object(o.a)(_,2),f=p[0],N=p[1];return Object(a.useEffect)((function(){var e;j===c[O]||f?(N(!0),""===j?(v((function(e){return 0===e?1:2===e?0:e+1})),N(!1)):j===c[O]?setTimeout((function(){b((function(e){return e.substring(0,e.length-1)}))}),2e3):setTimeout((function(){b((function(e){return e.substring(0,e.length-1)}))}),200)):(e=c[O],setTimeout((function(){b(e.substring(0,j.length+1))}),200))}),[j,O]),Object(a.useEffect)((function(){e("home")}),[]),Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(w,{}),Object(n.jsx)("div",{className:L.a.center,children:Object(n.jsxs)("div",{className:L.a.container,children:[Object(n.jsx)("h1",{children:"Hi,"}),Object(n.jsxs)("h1",{children:["I am Antony ",Object(n.jsx)("span",{children:"Chiramel."})]}),Object(n.jsxs)("h1",{children:["I am a ",Object(n.jsx)("span",{className:L.a.skill,children:j})]}),Object(n.jsxs)(d.b,{to:"/about",className:L.a.nextButton,children:["About Me",Object(n.jsx)(m.b.Provider,{value:{size:"32px"},children:Object(n.jsx)(x.a,{})})]}),Object(n.jsx)(d.b,{to:"/contact",className:L.a.contactButton,children:Object(n.jsx)(m.b.Provider,{value:{size:"64px"},children:Object(n.jsx)(P.a,{})})})]})})]})},C=c(28),A=c.n(C),E=function(){var e=l().setPath;return Object(a.useEffect)((function(){e("about")}),[]),Object(n.jsx)("section",{className:A.a.About,children:Object(n.jsxs)("div",{className:A.a.container,children:[Object(n.jsx)("div",{className:A.a.AboutMe}),Object(n.jsx)("div",{className:A.a.WorkedWith}),Object(n.jsx)("div",{className:A.a.Services}),Object(n.jsx)("div",{className:A.a.NextPage})]})})},H=function(){var e=l().setPath;return Object(a.useEffect)((function(){e("projects")}),[]),Object(n.jsx)("section",{className:"page",children:Object(n.jsx)("h2",{children:"Projects Page"})})},W=function(){var e=l().setPath;return Object(a.useEffect)((function(){e("contact")}),[]),Object(n.jsx)("section",{className:"page",children:Object(n.jsx)("h2",{children:"Contact Page"})})},B=function(){var e=l().setPath;return Object(a.useEffect)((function(){e("")}),[]),Object(n.jsx)("section",{className:"page",children:Object(n.jsx)("h2",{children:"404 Page"})})};var I=function(){return Object(n.jsxs)(d.a,{children:[Object(n.jsx)(v,{}),Object(n.jsx)(k,{}),Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:"/",children:Object(n.jsx)(z,{})}),Object(n.jsx)(u.a,{path:"/about",children:Object(n.jsx)(E,{})}),Object(n.jsx)(u.a,{path:"/projects",children:Object(n.jsx)(H,{})}),Object(n.jsx)(u.a,{path:"/contact",children:Object(n.jsx)(W,{})}),Object(n.jsx)(u.a,{path:"*",children:Object(n.jsx)(B,{})})]})]})};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(b,{children:Object(n.jsx)(I,{})})}),document.getElementById("root"))}},[[338,1,2]]]);
//# sourceMappingURL=main.ffd79e10.chunk.js.map