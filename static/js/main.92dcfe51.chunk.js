(this.webpackJsonphello_antony=this.webpackJsonphello_antony||[]).push([[0],{17:function(e,t,a){e.exports={Contact:"Contact_Contact__1MEg0",container:"Contact_container__d9gaW",heading:"Contact_heading__3Tmo2",inputForm:"Contact_inputForm__1FWzX",input:"Contact_input__2bqVz",textArea:"Contact_textArea__fjeEt",error:"Contact_error__3FOhG",submitBtn:"Contact_submitBtn__M-Y-O",socialLinks:"Contact_socialLinks__1gmts",socialLink:"Contact_socialLink__2cxwQ"}},26:function(e,t,a){e.exports={Sidebar:"Sidebar_Sidebar__2cMuk",displaySidebar:"Sidebar_displaySidebar__1UQzs",container:"Sidebar_container__3y47m",navLinks:"Sidebar_navLinks__2h7ds",socialLinks:"Sidebar_socialLinks__2-W28",socialLink:"Sidebar_socialLink__3cDD6",closeIcon:"Sidebar_closeIcon__QG4eC"}},37:function(e,t,a){e.exports={center:"Home_center__fnBrv",container:"Home_container__X7tHM",nextButton:"Home_nextButton__nOFqx",skill:"Home_skill__GcSNV",contactButton:"Home_contactButton__vV1Ku"}},40:function(e,t,a){e.exports={Navbar:"Navbar_Navbar__2wHZY",container:"Navbar_container__2ZlCE",hamburger:"Navbar_hamburger__2LbEL",navLinks:"Navbar_navLinks__Ubhdc"}},442:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(4),s=a.n(n),i=a(116),r=a.n(i),o=a(28),l=a(16),j=a(52),b=a.n(j),d=a(117),u=a.n(d),h=s.a.createContext(),O=function(e){var t=e.children,a=Object(n.useState)(""),s=Object(l.a)(a,2),i=s[0],r=s[1],d=Object(n.useState)(!1),O=Object(l.a)(d,2),m=O[0],x=O[1],p=Object(n.useState)({name:"",email:"",text:""}),g=Object(l.a)(p,2),v=g[0],f=g[1],k=Object(n.useState)(!1),N=Object(l.a)(k,2),_=N[0],S=N[1],w=Object(n.useState)(""),A=Object(l.a)(w,2),E=A[0],L=A[1];return Object(c.jsx)(h.Provider,{value:{path:i,setPath:r,isSidebarOpen:m,setIsSidebarOpen:x,message:v,setMessage:f,handleSubmit:function(e){if(e.preventDefault(),Object(j.init)("user_fYt095UpiVJ0Jl86oMnEq"),""===v.name)return S(!0),L("Please provide your name"),void setTimeout((function(){S(!1),L("")}),3e3);if(!u.a.isEmail(v.email))return S(!0),L("Please provide a valid email"),void setTimeout((function(){S(!1),L("")}),3e3);S(!1);var t={to_email:v.email,to_name:v.name},a={from_name:v.name,from_email:v.email,from_message:v.text};b.a.send("service_jwh9inb","template_x8ywtfn",a).then((function(e){console.log("SUCCESS!",e.status,e.text),200===e.status&&b.a.send("service_jwh9inb","template_xh8t5kb",t).then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))}),(function(e){console.log("FAILED...",e)})),f((function(e){return Object(o.a)(Object(o.a)({},e),{},{name:"",email:"",text:""})})),S(!0),L("Hey ".concat(v.name,", I have sent you an email,")),setTimeout((function(){S(!1),L("")}),5e3)},isError:_,error:E},children:t})},m=function(){return Object(n.useContext)(h)},x=a(14),p=a(10),g=a(40),v=a.n(g),f=a(36),k=a(0),N=function(){var e=m(),t=e.path,a=e.setIsSidebarOpen;return Object(c.jsx)("nav",{className:v.a.Navbar,style:"home"===t?{background:"transparent"}:{background:"#000000"},children:Object(c.jsxs)("div",{className:v.a.container,children:[Object(c.jsx)(x.b,{to:"/",children:Object(c.jsxs)("h1",{children:["Antony ",Object(c.jsx)("span",{children:"Chiramel"})]})}),Object(c.jsx)(k.b.Provider,{value:{size:"48px",className:v.a.hamburger},children:Object(c.jsx)(f.b,{onClick:function(){return a(!0)}})}),Object(c.jsxs)("ul",{className:v.a.navLinks,children:[Object(c.jsx)("li",{children:Object(c.jsx)(x.b,{to:"/",className:"home"===t?"active":null,children:"home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(x.b,{to:"/about",className:"about"===t?"active":null,children:"about"})}),Object(c.jsx)("li",{children:Object(c.jsx)(x.b,{to:"/projects",className:"projects"===t?"active":null,children:"projects"})}),Object(c.jsx)("li",{children:Object(c.jsx)(x.b,{to:"/contact",className:"contact"===t?"active":null,children:"contact"})})]})]})})},_=a(24),S=a(119),w=a(26),A=a.n(w),E=function(){var e=m(),t=e.path,a=e.isSidebarOpen,n=e.setIsSidebarOpen;return Object(c.jsx)("nav",{className:a?A.a.displaySidebar:A.a.Sidebar,children:Object(c.jsxs)("div",{className:A.a.container,children:[Object(c.jsx)(k.b.Provider,{value:{size:"48px",className:A.a.closeIcon},children:Object(c.jsx)(S.a,{onClick:function(){return n(!1)}})}),Object(c.jsxs)("ul",{className:A.a.navLinks,children:[Object(c.jsx)("li",{children:Object(c.jsx)(x.b,{to:"/",className:"home"===t?"active":null,onClick:function(){return n(!1)},children:"home"})}),Object(c.jsx)("hr",{}),Object(c.jsx)("li",{children:Object(c.jsx)(x.b,{to:"/about",className:"about"===t?"active":null,onClick:function(){return n(!1)},children:"about"})}),Object(c.jsx)("hr",{}),Object(c.jsx)("li",{children:Object(c.jsx)(x.b,{to:"/projects",className:"projects"===t?"active":null,onClick:function(){return n(!1)},children:"projects"})}),Object(c.jsx)("hr",{}),Object(c.jsx)("li",{children:Object(c.jsx)(x.b,{to:"/contact",className:"contact"===t?"active":null,onClick:function(){return n(!1)},children:"contact"})}),Object(c.jsx)("hr",{})]}),Object(c.jsxs)("div",{className:A.a.socialLinks,children:[Object(c.jsx)("a",{href:"https://facebook.com/tony.chiramel.009",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(k.b.Provider,{value:{size:"32px",className:A.a.socialLink},children:Object(c.jsx)(_.a,{})})}),Object(c.jsx)("a",{href:"https://github.com/5thComrade",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(k.b.Provider,{value:{size:"32px",className:A.a.socialLink},children:Object(c.jsx)(_.b,{})})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/antony-chiramel-a40a3a169",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(k.b.Provider,{value:{size:"32px",className:A.a.socialLink},children:Object(c.jsx)(_.d,{})})}),Object(c.jsx)("a",{href:"https://www.instagram.com/5th_comrade/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(k.b.Provider,{value:{size:"32px",className:A.a.socialLink},children:Object(c.jsx)(_.c,{})})})]})]})})},L=a(120),I=a.n(L),M=function(){var e=Object(n.useState)("".concat(window.innerHeight,"px")),t=Object(l.a)(e,2),a=(t[0],t[1]),i=Object(n.useState)("".concat(window.innerWidth,"px")),r=Object(l.a)(i,2),o=(r[0],r[1]),j=function(){a("".concat(window.innerHeight,"px")),o("".concat(window.innerWidth,"px"))};return Object(n.useEffect)((function(){return j(),window.addEventListener("resize",j),function(){window.removeEventListener("resize",j)}})),Object(c.jsx)(s.a.Fragment,{children:Object(c.jsx)(I.a,{params:{particles:{number:{value:100,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"}},opacity:{value:.7,random:!1,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:2,size_min:.1,sync:!1}},line_linked:{enable_auto:!0,distance:150,color:"#fff",opacity:.5,width:1,condensed_mode:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}})})},y=a(37),z=a.n(y),P=a(121),C=function(){var e=m().setPath,t=Object(n.useState)(["Web Designer","Frontend Developer","Chai lover"]),a=Object(l.a)(t,1)[0],i=Object(n.useState)(""),r=Object(l.a)(i,2),o=r[0],j=r[1],b=Object(n.useState)(0),d=Object(l.a)(b,2),u=d[0],h=d[1],O=Object(n.useState)(!1),p=Object(l.a)(O,2),g=p[0],v=p[1];return Object(n.useEffect)((function(){var e;o===a[u]||g?(v(!0),""===o?(h((function(e){return 0===e?1:2===e?0:e+1})),v(!1)):o===a[u]?setTimeout((function(){j((function(e){return e.substring(0,e.length-1)}))}),2e3):setTimeout((function(){j((function(e){return e.substring(0,e.length-1)}))}),200)):(e=a[u],setTimeout((function(){j(e.substring(0,o.length+1))}),200))}),[o,u]),Object(n.useEffect)((function(){e("home")}),[]),Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)(M,{}),Object(c.jsx)("div",{className:z.a.center,children:Object(c.jsxs)("div",{className:z.a.container,children:[Object(c.jsx)("h1",{children:"Hi,"}),Object(c.jsxs)("h1",{children:["I am Antony ",Object(c.jsx)("span",{children:"Chiramel."})]}),Object(c.jsxs)("h1",{children:["I am a ",Object(c.jsx)("span",{className:z.a.skill,children:o})]}),Object(c.jsxs)(x.b,{to:"/about",className:z.a.nextButton,children:["About Me",Object(c.jsx)(k.b.Provider,{value:{size:"32px"},children:Object(c.jsx)(f.a,{})})]}),Object(c.jsx)(x.b,{to:"/contact",className:z.a.contactButton,children:Object(c.jsx)(k.b.Provider,{value:{size:"64px"},children:Object(c.jsx)(P.a,{})})})]})})]})},R=a(8),H=a.n(R),K=a.p+"static/media/Cognizant.7a805a96.svg",B=function(){var e=m().setPath;return Object(n.useEffect)((function(){e("about")}),[]),Object(c.jsx)("section",{className:H.a.About,children:Object(c.jsxs)("div",{className:H.a.container,children:[Object(c.jsxs)("div",{className:H.a.Me,children:[Object(c.jsxs)("div",{className:H.a.bio,children:[Object(c.jsx)("h1",{className:H.a.heading,children:"about me"}),Object(c.jsxs)("p",{children:["I turn your ideas into"," ",Object(c.jsx)("span",{children:"Minimum Viable Software Products"}),", on time and on budget."]}),Object(c.jsx)("br",{}),Object(c.jsxs)("p",{children:["My elixir is ",Object(c.jsx)("span",{children:"Tea"})," and weapons are ",Object(c.jsx)("span",{children:"AdobeXD"}),", ",Object(c.jsx)("span",{children:"VSCode"}),", and ",Object(c.jsx)("span",{children:"Breaking Bad"}),"."]}),Object(c.jsxs)("p",{children:["I follow football and I know for sure,"," ",Object(c.jsx)("span",{children:"Manchester is Red"}),"."]}),Object(c.jsx)("br",{}),Object(c.jsxs)("p",{children:["Most beautiful city is ",Object(c.jsx)("span",{children:"Bengaluru"})," and most beautiful language, ",Object(c.jsx)("span",{children:"JavaScript"}),"."]})]}),Object(c.jsx)("a",{href:"#worked",children:Object(c.jsx)(k.b.Provider,{value:{size:"80px",className:H.a.downArrow},children:Object(c.jsx)(_.e,{})})})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:H.a.Worked,id:"worked",children:Object(c.jsxs)("div",{className:H.a.Me,children:[Object(c.jsx)("h1",{className:H.a.heading,children:"worked with"}),Object(c.jsxs)("div",{className:H.a.logos,children:[Object(c.jsx)("img",{src:K,alt:"cognizant",className:H.a.logo}),Object(c.jsx)("img",{src:"data:image/png;base64,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",alt:"teamlease",className:H.a.logo})]}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{}),Object(c.jsx)("h1",{className:H.a.heading,children:"my services"}),Object(c.jsxs)("div",{className:H.a.services,children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:H.a.point}),"web development"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:H.a.point}),"UI/UX design"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:H.a.point}),"e-commerce website design"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:H.a.point}),"business development"]})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:H.a.point}),"infrastructure management"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:H.a.point}),"SEO optimization"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:H.a.point}),"help you finish your pizza"]})]})]}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:H.a.nextPage,children:[Object(c.jsx)("p",{children:"Still doubt my skills?"}),Object(c.jsxs)(x.b,{to:"/projects",className:H.a.nextButton,children:["Projects",Object(c.jsx)(k.b.Provider,{value:{size:"32px"},children:Object(c.jsx)(f.a,{})})]})]})]})})]})})},G=function(){var e=m().setPath;return Object(n.useEffect)((function(){e("projects")}),[]),Object(c.jsx)("section",{className:"page",children:Object(c.jsx)("h2",{children:"Projects Page"})})},T=a(17),D=a.n(T),J=function(){var e=m(),t=e.setPath,a=e.message,s=e.setMessage,i=e.handleSubmit,r=e.isError,j=e.error,b=Object(n.useState)("Say Hi!"),d=Object(l.a)(b,2),u=d[0],h=d[1];return Object(n.useEffect)((function(){t("contact")}),[]),Object(c.jsx)("section",{className:D.a.Contact,children:Object(c.jsxs)("div",{className:D.a.container,children:[Object(c.jsx)("h1",{className:D.a.heading,children:"Ola amigo!"}),Object(c.jsxs)("form",{className:D.a.inputForm,children:[Object(c.jsx)("input",{name:"name",className:D.a.input,placeholder:"name (required)",type:"text",value:a.name,onChange:function(e){s(Object(o.a)(Object(o.a)({},a),{},{name:e.target.value}))}}),Object(c.jsx)("input",{name:"email",className:D.a.input,placeholder:"email (required)",type:"email",value:a.email,onChange:function(e){s(Object(o.a)(Object(o.a)({},a),{},{email:e.target.value}))}}),Object(c.jsx)("textarea",{name:"message",className:D.a.textArea,placeholder:"your message",value:a.text,onChange:function(e){s(Object(o.a)(Object(o.a)({},a),{},{text:e.target.value}))}}),Object(c.jsx)("p",{className:D.a.error,children:r?j:null}),Object(c.jsx)("button",{type:"submit",className:D.a.submitBtn,onMouseEnter:function(){return h("Let's get coffee!")},onMouseLeave:function(){return h("Say Hi!")},onClick:function(e){return i(e)},disabled:r,children:u})]}),Object(c.jsxs)("div",{className:D.a.socialLinks,children:[Object(c.jsx)("a",{href:"https://facebook.com/tony.chiramel.009",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(k.b.Provider,{value:{size:"40px",className:D.a.socialLink},children:Object(c.jsx)(_.a,{})})}),Object(c.jsx)("a",{href:"https://github.com/5thComrade",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(k.b.Provider,{value:{size:"40px",className:D.a.socialLink},children:Object(c.jsx)(_.b,{})})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/antony-chiramel-a40a3a169",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(k.b.Provider,{value:{size:"40px",className:D.a.socialLink},children:Object(c.jsx)(_.d,{})})}),Object(c.jsx)("a",{href:"https://www.instagram.com/5th_comrade/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(k.b.Provider,{value:{size:"40px",className:D.a.socialLink},children:Object(c.jsx)(_.c,{})})})]})]})})},U=function(){var e=m().setPath;return Object(n.useEffect)((function(){e("")}),[]),Object(c.jsx)("section",{className:"page",children:Object(c.jsx)("h2",{children:"404 Page"})})};var q=function(){return Object(c.jsxs)(x.a,{children:[Object(c.jsx)(N,{}),Object(c.jsx)(E,{}),Object(c.jsxs)(p.c,{children:[Object(c.jsx)(p.a,{exact:!0,path:"/",children:Object(c.jsx)(C,{})}),Object(c.jsx)(p.a,{path:"/about",children:Object(c.jsx)(B,{})}),Object(c.jsx)(p.a,{path:"/projects",children:Object(c.jsx)(G,{})}),Object(c.jsx)(p.a,{path:"/contact",children:Object(c.jsx)(J,{})}),Object(c.jsx)(p.a,{path:"*",children:Object(c.jsx)(U,{})})]})]})};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{children:Object(c.jsx)(q,{})})}),document.getElementById("root"))},8:function(e,t,a){e.exports={About:"About_About__1MrfL",container:"About_container___d6DB",heading:"About_heading__3_FlL",bio:"About_bio__3qKwY",Me:"About_Me__SIQS0",downArrow:"About_downArrow__LFNlU",glow:"About_glow__3o3t7",Worked:"About_Worked__pRMMr",logos:"About_logos__2Dmlf",logo:"About_logo__VJk2j",services:"About_services__36e4h",point:"About_point__3k_UE",nextPage:"About_nextPage__1L139",nextButton:"About_nextButton__3MsAn"}}},[[442,1,2]]]);
//# sourceMappingURL=main.92dcfe51.chunk.js.map