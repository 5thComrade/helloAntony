(this.webpackJsonphello_antony=this.webpackJsonphello_antony||[]).push([[0],{17:function(e,t,a){e.exports={Contact:"Contact_Contact__1MEg0",container:"Contact_container__d9gaW",heading:"Contact_heading__3Tmo2",inputForm:"Contact_inputForm__1FWzX",input:"Contact_input__2bqVz",textArea:"Contact_textArea__fjeEt",submitBtn:"Contact_submitBtn__M-Y-O",socialLinks:"Contact_socialLinks__1gmts",socialLink:"Contact_socialLink__2cxwQ"}},24:function(e,t,a){e.exports={Sidebar:"Sidebar_Sidebar__2cMuk",displaySidebar:"Sidebar_displaySidebar__1UQzs",container:"Sidebar_container__3y47m",navLinks:"Sidebar_navLinks__2h7ds",socialLinks:"Sidebar_socialLinks__2-W28",socialLink:"Sidebar_socialLink__3cDD6",closeIcon:"Sidebar_closeIcon__QG4eC"}},340:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(4),s=a.n(n),i=a(95),r=a.n(i),o=a(26),l=a(16),j=s.a.createContext(),b=function(e){var t=e.children,a=Object(n.useState)(""),s=Object(l.a)(a,2),i=s[0],r=s[1],b=Object(n.useState)(!1),d=Object(l.a)(b,2),h=d[0],u=d[1],O=Object(n.useState)({name:"",email:"",text:""}),x=Object(l.a)(O,2),m=x[0],p=x[1];return Object(c.jsx)(j.Provider,{value:{path:i,setPath:r,isSidebarOpen:h,setIsSidebarOpen:u,message:m,setMessage:p,handleSubmit:function(e){e.preventDefault(),console.log(m.name,m.email,m.text),p((function(e){return Object(o.a)(Object(o.a)({},e),{},{name:"",email:"",text:""})}))}},children:t})},d=function(){return Object(n.useContext)(j)},h=a(13),u=a(9),O=a(37),x=a.n(O),m=a(34),p=a(0),g=function(){var e=d(),t=e.path,a=e.setIsSidebarOpen;return Object(c.jsx)("nav",{className:x.a.Navbar,style:"home"===t?{background:"transparent"}:{background:"#000000"},children:Object(c.jsxs)("div",{className:x.a.container,children:[Object(c.jsx)(h.b,{to:"/",children:Object(c.jsxs)("h1",{children:["Antony ",Object(c.jsx)("span",{children:"Chiramel"})]})}),Object(c.jsx)(p.b.Provider,{value:{size:"48px",className:x.a.hamburger},children:Object(c.jsx)(m.b,{onClick:function(){return a(!0)}})}),Object(c.jsxs)("ul",{className:x.a.navLinks,children:[Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/",className:"home"===t?"active":null,children:"home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/about",className:"about"===t?"active":null,children:"about"})}),Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/projects",className:"projects"===t?"active":null,children:"projects"})}),Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/contact",className:"contact"===t?"active":null,children:"contact"})})]})]})})},v=a(22),f=a(97),k=a(24),N=a.n(k),S=function(){var e=d(),t=e.path,a=e.isSidebarOpen,n=e.setIsSidebarOpen;return Object(c.jsx)("nav",{className:a?N.a.displaySidebar:N.a.Sidebar,children:Object(c.jsxs)("div",{className:N.a.container,children:[Object(c.jsx)(p.b.Provider,{value:{size:"48px",className:N.a.closeIcon},children:Object(c.jsx)(f.a,{onClick:function(){return n(!1)}})}),Object(c.jsxs)("ul",{className:N.a.navLinks,children:[Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/",className:"home"===t?"active":null,onClick:function(){return n(!1)},children:"home"})}),Object(c.jsx)("hr",{}),Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/about",className:"about"===t?"active":null,onClick:function(){return n(!1)},children:"about"})}),Object(c.jsx)("hr",{}),Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/projects",className:"projects"===t?"active":null,onClick:function(){return n(!1)},children:"projects"})}),Object(c.jsx)("hr",{}),Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/contact",className:"contact"===t?"active":null,onClick:function(){return n(!1)},children:"contact"})}),Object(c.jsx)("hr",{})]}),Object(c.jsxs)("div",{className:N.a.socialLinks,children:[Object(c.jsx)("a",{href:"https://facebook.com/tony.chiramel.009",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(p.b.Provider,{value:{size:"32px",className:N.a.socialLink},children:Object(c.jsx)(v.a,{})})}),Object(c.jsx)("a",{href:"https://github.com/5thComrade",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(p.b.Provider,{value:{size:"32px",className:N.a.socialLink},children:Object(c.jsx)(v.b,{})})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/antony-chiramel-a40a3a169",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(p.b.Provider,{value:{size:"32px",className:N.a.socialLink},children:Object(c.jsx)(v.d,{})})}),Object(c.jsx)("a",{href:"https://www.instagram.com/5th_comrade/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(p.b.Provider,{value:{size:"32px",className:N.a.socialLink},children:Object(c.jsx)(v.c,{})})})]})]})})},_=a(98),w=a.n(_),A=function(){var e=Object(n.useState)("".concat(window.innerHeight,"px")),t=Object(l.a)(e,2),a=(t[0],t[1]),i=Object(n.useState)("".concat(window.innerWidth,"px")),r=Object(l.a)(i,2),o=(r[0],r[1]),j=function(){a("".concat(window.innerHeight,"px")),o("".concat(window.innerWidth,"px"))};return Object(n.useEffect)((function(){return j(),window.addEventListener("resize",j),function(){window.removeEventListener("resize",j)}})),Object(c.jsx)(s.a.Fragment,{children:Object(c.jsx)(w.a,{params:{particles:{number:{value:100,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"}},opacity:{value:.7,random:!1,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:2,size_min:.1,sync:!1}},line_linked:{enable_auto:!0,distance:150,color:"#fff",opacity:.5,width:1,condensed_mode:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}})})},E=a(35),L=a.n(E),I=a(99),M=function(){var e=d().setPath,t=Object(n.useState)(["Web Designer","Frontend Developer","Chai lover"]),a=Object(l.a)(t,1)[0],i=Object(n.useState)(""),r=Object(l.a)(i,2),o=r[0],j=r[1],b=Object(n.useState)(0),u=Object(l.a)(b,2),O=u[0],x=u[1],g=Object(n.useState)(!1),v=Object(l.a)(g,2),f=v[0],k=v[1];return Object(n.useEffect)((function(){var e;o===a[O]||f?(k(!0),""===o?(x((function(e){return 0===e?1:2===e?0:e+1})),k(!1)):o===a[O]?setTimeout((function(){j((function(e){return e.substring(0,e.length-1)}))}),2e3):setTimeout((function(){j((function(e){return e.substring(0,e.length-1)}))}),200)):(e=a[O],setTimeout((function(){j(e.substring(0,o.length+1))}),200))}),[o,O]),Object(n.useEffect)((function(){e("home")}),[]),Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)(A,{}),Object(c.jsx)("div",{className:L.a.center,children:Object(c.jsxs)("div",{className:L.a.container,children:[Object(c.jsx)("h1",{children:"Hi,"}),Object(c.jsxs)("h1",{children:["I am Antony ",Object(c.jsx)("span",{children:"Chiramel."})]}),Object(c.jsxs)("h1",{children:["I am a ",Object(c.jsx)("span",{className:L.a.skill,children:o})]}),Object(c.jsxs)(h.b,{to:"/about",className:L.a.nextButton,children:["About Me",Object(c.jsx)(p.b.Provider,{value:{size:"32px"},children:Object(c.jsx)(m.a,{})})]}),Object(c.jsx)(h.b,{to:"/contact",className:L.a.contactButton,children:Object(c.jsx)(p.b.Provider,{value:{size:"64px"},children:Object(c.jsx)(I.a,{})})})]})})]})},y=a(7),z=a.n(y),P=a.p+"static/media/Cognizant.7a805a96.svg",R=function(){var e=d().setPath;return Object(n.useEffect)((function(){e("about")}),[]),Object(c.jsx)("section",{className:z.a.About,children:Object(c.jsxs)("div",{className:z.a.container,children:[Object(c.jsxs)("div",{className:z.a.Me,children:[Object(c.jsxs)("div",{className:z.a.bio,children:[Object(c.jsx)("h1",{className:z.a.heading,children:"about me"}),Object(c.jsxs)("p",{children:["I turn your ideas into"," ",Object(c.jsx)("span",{children:"Minimum Viable Software Products"}),", on time and on budget."]}),Object(c.jsx)("br",{}),Object(c.jsxs)("p",{children:["My elixir is ",Object(c.jsx)("span",{children:"Tea"})," and weapons are ",Object(c.jsx)("span",{children:"AdobeXD"}),", ",Object(c.jsx)("span",{children:"VSCode"}),", and ",Object(c.jsx)("span",{children:"Breaking Bad"}),"."]}),Object(c.jsxs)("p",{children:["I follow football and I know for sure,"," ",Object(c.jsx)("span",{children:"Manchester is Red"}),"."]}),Object(c.jsx)("br",{}),Object(c.jsxs)("p",{children:["Most beautiful city is ",Object(c.jsx)("span",{children:"Bengaluru"})," and most beautiful language, ",Object(c.jsx)("span",{children:"JavaScript"}),"."]})]}),Object(c.jsx)("a",{href:"#worked",children:Object(c.jsx)(p.b.Provider,{value:{size:"80px",className:z.a.downArrow},children:Object(c.jsx)(v.e,{})})})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:z.a.Worked,id:"worked",children:Object(c.jsxs)("div",{className:z.a.Me,children:[Object(c.jsx)("h1",{className:z.a.heading,children:"worked with"}),Object(c.jsxs)("div",{className:z.a.logos,children:[Object(c.jsx)("img",{src:P,alt:"cognizant",className:z.a.logo}),Object(c.jsx)("img",{src:"data:image/png;base64,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",alt:"teamlease",className:z.a.logo})]}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{}),Object(c.jsx)("h1",{className:z.a.heading,children:"my services"}),Object(c.jsxs)("div",{className:z.a.services,children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:z.a.point}),"web development"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:z.a.point}),"UI/UX design"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:z.a.point}),"e-commerce website design"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:z.a.point}),"business development"]})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:z.a.point}),"infrastructure management"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:z.a.point}),"SEO optimization"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:z.a.point}),"help you finish your pizza"]})]})]}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:z.a.nextPage,children:[Object(c.jsx)("p",{children:"Still doubt my skills?"}),Object(c.jsxs)(h.b,{to:"/projects",className:z.a.nextButton,children:["Projects",Object(c.jsx)(p.b.Provider,{value:{size:"32px"},children:Object(c.jsx)(m.a,{})})]})]})]})})]})})},K=function(){var e=d().setPath;return Object(n.useEffect)((function(){e("projects")}),[]),Object(c.jsx)("section",{className:"page",children:Object(c.jsx)("h2",{children:"Projects Page"})})},B=a(17),H=a.n(B),G=function(){var e=d(),t=e.setPath,a=e.message,s=e.setMessage,i=e.handleSubmit,r=Object(n.useState)("Say Hi!"),j=Object(l.a)(r,2),b=j[0],h=j[1];return Object(n.useEffect)((function(){t("contact")}),[]),Object(c.jsx)("section",{className:H.a.Contact,children:Object(c.jsxs)("div",{className:H.a.container,children:[Object(c.jsx)("h1",{className:H.a.heading,children:"Ola amigo!"}),Object(c.jsxs)("form",{className:H.a.inputForm,children:[Object(c.jsx)("input",{name:"name",className:H.a.input,placeholder:"name (required)",type:"text",value:a.name,onChange:function(e){s(Object(o.a)(Object(o.a)({},a),{},{name:e.target.value}))}}),Object(c.jsx)("input",{name:"email",className:H.a.input,placeholder:"email (required)",type:"email",value:a.email,onChange:function(e){s(Object(o.a)(Object(o.a)({},a),{},{email:e.target.value}))}}),Object(c.jsx)("textarea",{name:"message",className:H.a.textArea,placeholder:"your message",value:a.text,onChange:function(e){s(Object(o.a)(Object(o.a)({},a),{},{text:e.target.value}))}}),Object(c.jsx)("button",{type:"submit",className:H.a.submitBtn,onMouseEnter:function(){return h("Let's get coffee!")},onMouseLeave:function(){return h("Say Hi!")},onClick:function(e){return i(e)},children:b})]}),Object(c.jsxs)("div",{className:H.a.socialLinks,children:[Object(c.jsx)("a",{href:"https://facebook.com/tony.chiramel.009",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(p.b.Provider,{value:{size:"40px",className:H.a.socialLink},children:Object(c.jsx)(v.a,{})})}),Object(c.jsx)("a",{href:"https://github.com/5thComrade",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(p.b.Provider,{value:{size:"40px",className:H.a.socialLink},children:Object(c.jsx)(v.b,{})})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/antony-chiramel-a40a3a169",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(p.b.Provider,{value:{size:"40px",className:H.a.socialLink},children:Object(c.jsx)(v.d,{})})}),Object(c.jsx)("a",{href:"https://www.instagram.com/5th_comrade/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(p.b.Provider,{value:{size:"40px",className:H.a.socialLink},children:Object(c.jsx)(v.c,{})})})]})]})})},C=function(){var e=d().setPath;return Object(n.useEffect)((function(){e("")}),[]),Object(c.jsx)("section",{className:"page",children:Object(c.jsx)("h2",{children:"404 Page"})})};var T=function(){return Object(c.jsxs)(h.a,{children:[Object(c.jsx)(g,{}),Object(c.jsx)(S,{}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",children:Object(c.jsx)(M,{})}),Object(c.jsx)(u.a,{path:"/about",children:Object(c.jsx)(R,{})}),Object(c.jsx)(u.a,{path:"/projects",children:Object(c.jsx)(K,{})}),Object(c.jsx)(u.a,{path:"/contact",children:Object(c.jsx)(G,{})}),Object(c.jsx)(u.a,{path:"*",children:Object(c.jsx)(C,{})})]})]})};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(b,{children:Object(c.jsx)(T,{})})}),document.getElementById("root"))},35:function(e,t,a){e.exports={center:"Home_center__fnBrv",container:"Home_container__X7tHM",nextButton:"Home_nextButton__nOFqx",skill:"Home_skill__GcSNV",contactButton:"Home_contactButton__vV1Ku"}},37:function(e,t,a){e.exports={Navbar:"Navbar_Navbar__2wHZY",container:"Navbar_container__2ZlCE",hamburger:"Navbar_hamburger__2LbEL",navLinks:"Navbar_navLinks__Ubhdc"}},7:function(e,t,a){e.exports={About:"About_About__1MrfL",container:"About_container___d6DB",heading:"About_heading__3_FlL",bio:"About_bio__3qKwY",Me:"About_Me__SIQS0",downArrow:"About_downArrow__LFNlU",glow:"About_glow__3o3t7",Worked:"About_Worked__pRMMr",logos:"About_logos__2Dmlf",logo:"About_logo__VJk2j",services:"About_services__36e4h",point:"About_point__3k_UE",nextPage:"About_nextPage__1L139",nextButton:"About_nextButton__3MsAn"}}},[[340,1,2]]]);
//# sourceMappingURL=main.53887656.chunk.js.map