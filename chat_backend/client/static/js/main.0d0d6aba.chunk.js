(this["webpackJsonpchat-front"]=this["webpackJsonpchat-front"]||[]).push([[0],{110:function(e){e.exports=JSON.parse('{"a":{"API":"/api","SOCKET_HOST":""}}')},134:function(e,t,n){},135:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(11),o=n.n(i),r=(n(134),n(8)),s=(n(135),n(245)),l=n(26),d=n(14),j=n(9),u=n(249),h=n(248),b=n(226),O="USER_ADD_VERYTIFICATION_ID",x="GET_CONTACTS_TO_STATE",p="SET_IS_AUTHENTICATED",f="USER_SET_IS_ONLINE",g="USER_CHECK_BY_TOKEN",m=" USER_LOGOUT",v={_id:"",phone:"",username:"",surname:"",firstname:"",isVerified:!1,authenticated:!1,is_online:null,errorMessage:null,isLoading:!1,contacts:[]},y=function(e,t){switch(t.type){case O:return Object(j.a)(Object(j.a)({},e),t.payload);case x:return Object(j.a)(Object(j.a)({},e),{contacts:t.payload});case p:return Object(j.a)(Object(j.a)({},e),{authenticated:t.payload});case g:case f:return Object(j.a)(Object(j.a)({},e),t.payload);case m:return Object(j.a)({},v);default:return Object(j.a)({},e)}},_=n(109),C=n.n(_),S=n(110).a,w=window.localStorage.getItem("x-auth-token"),E=Object(j.a)({},w&&{"x-auth-token":w}),T=C.a.create({baseURL:S.API,headers:E}),I=function(e){T.get("/auth/check-user",{headers:{"x-auth-token":window.localStorage.getItem("x-auth-token")}}).then((function(t){e({type:g,payload:t.data}),e({type:p,payload:!0}),console.log("Auth suceeded")})).catch((function(t){e({type:p,payload:!1}),e({type:m}),console.log(t)}))},k=n(111),R=n.n(k)()(S.SOCKET_HOST);R.on("disconnect",(function(){console.log("Disconnected")}));var A=R,D=n(2),F=Object(c.createContext)();function L(e){var t=e.children,n=Object(c.useReducer)(y,v),a=Object(r.a)(n,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){var e;e=o,i._id,T.get("/users").then((function(t){e({type:x,payload:t.data})})).catch((function(e){console.log(e)}))}),[i._id]),Object(c.useEffect)((function(){I(o)}),[]),Object(c.useEffect)((function(){A.on("user_set_online_status",(function(e){o({type:f,payload:{is_online:e}})})),A.on("contacts_chats_is_online",(function(e){console.log(null===e||void 0===e?void 0:e.online_state,e.user_id)}))}),[]),Object(D.jsx)(F.Provider,{value:{userState:i,userDispatch:o},children:Object(D.jsx)(F.Consumer,{children:function(){return t}})})}var N=function(e){var t=Object(c.useContext)(F),n=t.userState,a=t.userDispatch;return e?[a]:[n,a]};function z(){var e=N(),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(d.g)(),o=Object(c.useRef)(),s=Object(c.useRef)(),l=Object(c.useState)({password:"",phone:""}),O=Object(r.a)(l,2),x=O[0],p=O[1];return Object(c.useEffect)((function(){console.log(n)}),[n]),Object(D.jsx)(u.a,{style:{maxWidth:"600px",padding:"20px",width:"100%",margin:"auto",display:"flex",alignItems:"center",flexDirection:"column"},component:"div",children:n.authenticated?"Already LOgged In":Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(u.a,{style:{fontSize:"24px",padding:"10px"},children:"Login"}),Object(D.jsx)(u.a,{style:{padding:"10px",width:"80%"},children:Object(D.jsx)(h.a,{onChange:function(e){p((function(t){return Object(j.a)(Object(j.a)({},t),{phone:e.target.value})}))},ref:s,style:{width:"100%"},size:"small",id:"phone",label:"Phone",variant:"outlined"})}),Object(D.jsx)(u.a,{style:{padding:"10px",width:"80%"},children:Object(D.jsx)(h.a,{onChange:function(e){p((function(t){return Object(j.a)(Object(j.a)({},t),{password:e.target.value})}))},type:"password",ref:o,style:{width:"100%"},size:"small",id:"password",label:"Password",variant:"outlined"})}),Object(D.jsx)(b.a,{onClick:function(){!function(e,t,n){T.post("/auth/login",{phone:t.phone,password:t.password}).then((function(t){window.localStorage.setItem("x-auth-token",t.data.token),I(e),n.push("/")})).catch((function(e){console.log(e)}))}(a,x,i)},style:{minWidth:"50%",marginTop:"20px"},variant:"contained",color:"primary",children:"Get Verification Code"})]})})}function P(){var e=N(),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)({phone:""}),o=Object(r.a)(i,2),s=o[0],d=o[1],x=Object(c.useState)(0),p=Object(r.a)(x,2),f=p[0],g=p[1],m=Object(c.useState)(0),v=Object(r.a)(m,2),y=v[0],_=v[1],C=function(){return setTimeout((function(){_(new Date(null===n||void 0===n?void 0:n.expires)-new Date)}),1e3)},S=Object(c.useCallback)(C,[C]);return Object(c.useEffect)((function(){var e;return 1===f&&(e=S()),function(){clearTimeout(e)}}),[f,S]),Object(D.jsx)(u.a,{style:{maxWidth:"600px",padding:"20px",width:"100%",margin:"auto",display:"flex",alignItems:"center",flexDirection:"column"},component:"div",children:n.authenticated?"Already LOgged In":Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(u.a,{style:{fontSize:"24px",padding:"10px"},children:"SignUp"}),0===f?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(u.a,{style:{padding:"10px",width:"80%"},children:Object(D.jsx)(h.a,{onChange:function(e){d((function(t){return Object(j.a)(Object(j.a)({},t),{phone:e.target.value})}))},style:{width:"100%"},size:"small",id:"phone",label:"Phone",variant:"outlined"})}),Object(D.jsx)(b.a,{onClick:function(){!function(e,t,n){console.log("Pre request phone",t),T.post("/auth/request-send-sms",{phone:t}).then((function(t){e({type:O,payload:{verify_id:t.data._id,expires_veritification:t.data.expiry}}),n((function(e){return++e}))})).catch((function(e){console.log(e)}))}(a,s.phone,g)},style:{minWidth:"50%",marginTop:"20px"},variant:"contained",color:"primary",children:"Get Verification Code"})]}):1===f?Object(D.jsxs)(D.Fragment,{children:[y,Object(D.jsx)(u.a,{style:{padding:"10px",width:"80%"},children:Object(D.jsx)(h.a,{onChange:function(e){d((function(t){return Object(j.a)(Object(j.a)({},t),{code:e.target.value})}))},style:{width:"100%"},size:"small",id:"code",label:"Code",variant:"outlined"})}),Object(D.jsx)(b.a,{onClick:function(){!function(e,t){T.post("/auth/confirm",{phone:e.phone,code:e.code,_id:e.verify_id}).then((function(e){t((function(e){return++e}))})).catch((function(e){console.log(e)}))}(s,g)},style:{minWidth:"50%",marginTop:"20px"},variant:"contained",color:"primary",children:"Get Verification Code"})]}):2===f?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(u.a,{style:{padding:"10px",width:"80%"},children:Object(D.jsx)(h.a,{style:{width:"100%"},size:"small",id:"code",label:"Firstname",variant:"outlined"})}),Object(D.jsx)(u.a,{style:{padding:"10px",width:"80%"},children:Object(D.jsx)(h.a,{style:{width:"100%"},size:"small",id:"code",label:"Lastname",variant:"outlined"})}),Object(D.jsx)(u.a,{style:{padding:"10px",width:"80%"},children:Object(D.jsx)(h.a,{style:{width:"100%"},size:"small",id:"code",label:"Password",variant:"outlined"})}),Object(D.jsx)(u.a,{style:{padding:"10px",width:"80%"},children:Object(D.jsx)(h.a,{style:{width:"100%"},size:"small",id:"code",label:"Password (Retype)",variant:"outlined"})}),Object(D.jsx)(b.a,{onClick:function(){g((function(e){return++e}))},style:{minWidth:"50%",marginTop:"20px"},variant:"contained",color:"primary",children:"Get Verification Code"})]}):Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(l.b,{to:"/",children:"Bosh sahifaga "})})]})})}var G=n(116),M="MESSAGE_NEW_MESSAGE",U="MESSAGE_LOADING_START",W="MESSAGE_LOADING_SUCCESS",H="MESSAGE_LOADING_ERROR",q={isLoading:!1,error:null,messages:[]},B=function(e,t){switch(t.type){case M:return Object(j.a)(Object(j.a)({},e),{},{messages:[].concat(Object(G.a)(e.messages),[t.payload])});case U:return Object(j.a)(Object(j.a)({},e),{},{loading:t.payload});case W:return Object(j.a)(Object(j.a)({},e),{},{messages:t.payload});case H:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload});default:return Object(j.a)({},q)}},V=Object(c.createContext)();function K(e){var t=e.children,n=Object(c.useReducer)(B,q),a=Object(r.a)(n,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){A.on("send_message_request_to_client",(function(e){o({type:M,payload:e}),console.log(e)})),A.on("send_message_error",(function(e){o({type:H,payload:e})}))}),[]),Object(D.jsx)(V.Provider,{value:{messageState:i,messageDispatch:o},children:Object(D.jsx)(V.Consumer,{children:function(){return t}})})}var Y=function(e){var t=Object(c.useContext)(V),n=t.messageState,a=t.messageDispatch;return e?[a]:[n,a]};function J(){var e=N(),t=Object(r.a)(e,1)[0];return Object(D.jsx)("div",{children:Object(D.jsxs)(D.Fragment,{children:[(null===t||void 0===t?void 0:t.authenticated)?Object(D.jsx)(d.a,{to:"/chat"}):"",Object(D.jsx)(l.b,{to:"/login",children:"Login "}),Object(D.jsx)(l.b,{to:"/sign-up",children:"SignUp "}),Object(D.jsx)(l.b,{to:"/chat",children:"Chat "})]})})}var X=n(246),Q=n(119),Z=n(193),$=n(227),ee=n(228),te=n(250),ne=n(229),ce="ACTIVE_CHAT_INFOs_SET",ae=function(e,t,n){localStorage.setItem("current_chat_id",t),localStorage.setItem("current_chat_type",n),e({type:ce,payload:{chat_id:t,chat_type:n}})},ie={chat_id:null,chat_type:"NONE",chat_messages:[],loading:!1,error:null},oe=function(e,t){switch(t.type){case ce:return Object(j.a)(Object(j.a)({},e),{chat_id:t.payload.chat_id,chat_type:t.payload.chat_type});default:return Object(j.a)({},e)}},re=Object(c.createContext)();function se(e){var t=e.children,n=Object(c.useReducer)(oe,ie),a=Object(r.a)(n,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("current_chat_id"),t=localStorage.getItem("current_chat_type");e&&t&&ae(o,e,t)}),[]),Object(D.jsx)(re.Provider,{value:{activeChatState:i,activeChatDispatch:o},children:Object(D.jsx)(re.Consumer,{children:function(){return t}})})}var le=function(e){var t=Object(c.useContext)(re),n=t.activeChatState,a=t.activeChatDispatch;return e?[a]:[n,a]};function de(){var e=N(),t=Object(r.a)(e,1)[0],n=le(),a=Object(r.a)(n,2),i=a[0],o=a[1],s=Y(),l=Object(r.a)(s,1)[0];Object(c.useEffect)((function(){console.log(l)}),[l]);var d={backgroundColor:"#8e9be4",color:"white",width:"25px",height:"25px",borderRadius:"50%",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center"};return Object(D.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",overflow:"hidden"},children:t&&((null===t||void 0===t?void 0:t.contacts.length)>0?Object(D.jsx)(D.Fragment,{children:t.contacts.map((function(e,n){var c=null===l||void 0===l?void 0:l.messages.filter((function(t){return t.from!==e._id&&t.to!==e._id||t.isRead?"":t}));return e._id===t._id?"":Object(D.jsxs)(Z.a,{onClick:function(){return ae(o,e._id,"USER",null===l||void 0===l||l.messages)},selected:i.chat_id===e._id,button:!0,divider:!0,children:[Object(D.jsx)($.a,{children:Object(D.jsx)(ee.a,{color:"primary",invisible:!(null===e||void 0===e?void 0:e.online),overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:Object(D.jsx)(te.a,{alt:"".concat(null===e||void 0===e?void 0:e.lastname," ").concat(null===e||void 0===e?void 0:e.firstname," "),src:"/static/images/avatar/1.jpg"})})}),Object(D.jsx)(ne.a,{primary:"".concat(null===e||void 0===e?void 0:e.lastname," ").concat(null===e||void 0===e?void 0:e.firstname," ")}),Object(D.jsx)(u.a,{style:d,children:c.length})]},n)}))}):Object(D.jsx)(D.Fragment,{children:"Sizda hali Userlar yo'q"}))})}var je=n(43),ue=n(58),he=n(230),be=n(231),Oe=n(232);function xe(e){var t=e.isOpen,n=e.setIsOpen,c=e.callback,a=function(){n(!1)};return Object(D.jsxs)(he.a,{open:t,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(D.jsx)(be.a,{id:"alert-dialog-title",children:"Xabarni chindan O'chirmoqchimisiz?"}),Object(D.jsxs)(Oe.a,{children:[Object(D.jsx)(b.a,{onClick:a,color:"danger",autoFocus:!0,children:"Yo'q"}),Object(D.jsx)(b.a,{onClick:function(){n(!1),c()},color:"primary",children:"Ha"})]})]})}function pe(e){var t=e.message,n=e.sended,a=N(),i=Object(r.a)(a,2),o=(i[0],i[1],{display:"flex",width:"100%",justifyContent:n?"flex-end":"flex-start"}),s="compoennt_".concat(t._id),l={padding:"4px 6px",lineHeight:"10px",borderRadius:"7px",margin:"2px",marginLeft:n?"auto":"10px",marginRight:n?"10px":"auto",fontSize:"12px",flexDirection:"column",fontWeight:400,color:"#565656",fontFamily:"Roboto",maxWidth:"60%",display:"flex",width:"fit-content",backgroundColor:n?"rgb(119, 139, 253)":"#efeff"},d=Object(c.useState)(!1),j=Object(r.a)(d,2),h=j[0],b=j[1];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(xe,{isOpen:h,setIsOpen:b,callback:function(){return e=null===t||void 0===t?void 0:t._id,void console.log(e);var e}}),Object(D.jsx)(u.a,{style:o,children:Object(D.jsx)(je.c,{className:"context-menu-display",id:s,children:Object(D.jsxs)(Q.a,{variant:"outlined",style:l,children:[Object(D.jsx)(ue.a,{children:t.text}),Object(D.jsx)(u.a,{style:{display:"flex",marginLeft:"auto",color:n?"blue":"#6d6d6dde"},children:function(){var e=new Date(null===t||void 0===t?void 0:t.createdAt);return"".concat(e.getHours(),":").concat(e.getMinutes())}})]})})}),Object(D.jsxs)(je.a,{animation:"fade",id:s,children:[Object(D.jsx)(je.b,{onClick:function(){b(!0)},children:"Delete"}),Object(D.jsx)(je.b,{children:"Menu Item 2"}),Object(D.jsx)(je.b,{children:"Menu Item 3"}),Object(D.jsx)(je.b,{children:"Menu Item 4"})]})]})}var fe=n(233);function ge(){var e=le(),t=Object(r.a)(e,1)[0],n=Object(c.useRef)(),a=N(),i=Object(r.a)(a,1)[0],o=Y(),s=Object(r.a)(o,1)[0],l=Object(c.useState)(!1),d=Object(r.a)(l,2),j=d[0],h=d[1],O=function(){var e={from:null===i||void 0===i?void 0:i._id,to:null===t||void 0===t?void 0:t.chat_id,text:n.current.value};A.emit("send_message_request_to_server",e),n.current.value=""},x=s.messages.filter((function(e){return e.from===t.chat_id||e.to===t.chat_id?e:""}));return Object(D.jsx)(u.a,{style:{height:"100%",display:"flex",position:"relative",flexDirection:"column"},children:t.chat_id&&"NONE"!==t.chat_type?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(u.a,{style:{padding:"3px",maxHeight:"93%",height:"93%",overflowY:"scroll",overflowX:"hidden"},children:Object(D.jsx)(u.a,{children:x.length<=0?Object(D.jsx)(D.Fragment,{children:"No messages found"}):Object(D.jsx)(D.Fragment,{children:x.map((function(e,n){return Object(D.jsx)(pe,{message:e,sended:t.chat_id===e.to},n)}))})})}),Object(D.jsxs)(u.a,{style:{height:"38px",minHeight:"25px",display:"flex",borderTop:"1px solid rgba(0, 0, 0, 0.54)"},children:[Object(D.jsx)(b.a,{color:"primary"}),Object(D.jsx)("input",{onChange:function(e){""==e.target.value?h(!1):h(!0)},onKeyPress:function(e){13===e.which&&j&&O(),""==e.target.value?h(!1):h(!0)},ref:n,placeholder:"Write message here...",style:{fontSize:"16px",width:"100%",outline:"none",border:"none"}}),Object(D.jsxs)(b.a,{color:"primary",disabled:!j,onClick:O,children:[" ",Object(D.jsx)(fe.a,{})," "]})]})]}):Object(D.jsx)(D.Fragment,{children:" SIZDA CHATLAR YO'Q"})})}var me=n(240),ve=n(241),ye=n(238),_e=n(117),Ce=n(244),Se=n(242),we=n(243),Ee=n(225),Te=n(234),Ie=n(251),ke=n(252),Re=n(235),Ae=n(236),De=n(237),Fe=n(239),Le=Object(c.createContext)();function Ne(e){var t=e.children,n=Object(c.useState)(!1),i=Object(r.a)(n,2),o=i[0],s=i[1],l=N(),d=Object(r.a)(l,1)[0],j=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&s(e)}};return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("div",{children:Object(D.jsx)(a.a.Fragment,{children:Object(D.jsx)(ke.a,{anchor:"left",open:o,onClose:j(!1),children:Object(D.jsxs)("div",{style:{width:240},role:"presentation",onKeyDown:j(!1),children:[Object(D.jsx)(Ee.a,{children:Object(D.jsxs)(Z.a,{div:!0,style:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:[Object(D.jsx)(ue.a,{children:"".concat(null===d||void 0===d?void 0:d.lastname,"  ").concat(null===d||void 0===d?void 0:d.firstname)}),Object(D.jsx)(ne.a,{primary:null===d||void 0===d?void 0:d.phone})]})}),Object(D.jsx)(Te.a,{}),Object(D.jsxs)(Ee.a,{children:[Object(D.jsxs)(Z.a,{button:!0,children:[Object(D.jsx)($.a,{children:Object(D.jsx)(Re.a,{})}),Object(D.jsx)(ne.a,{primary:"Contacts"})]}),Object(D.jsxs)(Z.a,{button:!0,children:[Object(D.jsx)($.a,{children:Object(D.jsx)(Ae.a,{})}),Object(D.jsx)(ne.a,{primary:"Settings"})]}),Object(D.jsxs)(Z.a,{button:!0,children:[Object(D.jsx)($.a,{children:Object(D.jsx)(De.a,{})}),Object(D.jsx)(ne.a,{primary:"Night Mode"}),Object(D.jsx)(Ie.a,{color:"primary"})]}),Object(D.jsxs)(Z.a,{button:!0,children:[Object(D.jsx)($.a,{children:Object(D.jsx)(Fe.a,{})}),Object(D.jsx)(ne.a,{primary:"About"})]})]})]})})})}),Object(D.jsx)(Le.Provider,{value:{setOpen:s},children:Object(D.jsx)(Le.Consumer,{children:function(){return t}})})]})}function ze(){var e=N(),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(d.g)(),o=Object(c.useState)(null),s=Object(r.a)(o,2),l=s[0],j=s[1],u=Boolean(l),h=function(){j(null)},b=[Object(c.useContext)(Le).setOpen],O=Object(r.a)(b,1)[0];return Object(D.jsx)(me.a,{style:{height:"100%",justifyContent:"flex-start"},position:"static",children:Object(D.jsxs)(ve.a,{style:{height:"70%"},children:[Object(D.jsx)(ye.a,{onClick:function(){O(!0)},edge:"start",color:"inherit","aria-label":"menu",children:Object(D.jsx)(Se.a,{})}),Object(D.jsx)(ue.a,{variant:"h6",style:{flexGrow:1},children:n.is_online?"Online":"Offline"}),Object(D.jsx)(ue.a,{variant:"h6",children:"".concat(null===n||void 0===n?void 0:n.lastname," ").concat(null===n||void 0===n?void 0:n.firstname)}),Object(D.jsxs)("div",{children:[Object(D.jsx)(ye.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},color:"inherit",children:Object(D.jsx)(we.a,{})}),Object(D.jsxs)(_e.a,{id:"menu-appbar",anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:h,children:[Object(D.jsx)(Ce.a,{onClick:h,children:"Profile"}),Object(D.jsx)(Ce.a,{onClick:h,children:"My account"}),Object(D.jsx)(Ce.a,{style:{color:"red"},onClick:function(){!function(e,t){window.localStorage.removeItem("x-auth-token"),e({type:m}),t.push("/")}(a,i)},children:"Logout"})]})]})]})})}function Pe(){var e=N(),t=Object(r.a)(e,2),n=t[0],a=(t[1],Y()),i=Object(r.a)(a,2),o=(i[0],i[1]);Object(c.useEffect)((function(){var e;(e=o)({type:U,payload:!0}),T.get("/messages").then((function(t){e({type:W,payload:t.data})})).catch((function(t){e({type:H,payload:t})})),e({type:U,payload:!1})}),[o]);return Object(D.jsxs)(D.Fragment,{children:[(null===n||void 0===n?void 0:n.authenticated)?"":Object(D.jsx)(d.a,{to:"/"}),Object(D.jsxs)(s.a,{style:{height:"100vh",padding:"0",width:"100%"},children:[Object(D.jsx)(u.a,{style:{height:"8%"},children:Object(D.jsx)(ze,{})}),Object(D.jsxs)(X.a,{style:{height:"92%"},container:!0,spacing:1,children:[Object(D.jsx)(X.a,{style:{height:"100%",paddingRight:"0"},item:!0,xs:3,children:Object(D.jsx)(Q.a,{style:{height:"100%",marginTop:"5px",borderTopRightRadius:"0px",borderBottomRightRadius:"0px"},children:Object(D.jsx)(de,{})})}),Object(D.jsx)(X.a,{item:!0,style:{paddingLeft:"3px"},xs:9,children:Object(D.jsx)(Q.a,{style:{height:"100%",marginTop:"5px",borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px"},children:Object(D.jsx)(ge,{})})})]})]})]})}var Ge=function(){var e=N(),t=Object(r.a)(e,1)[0],n=Y(),a=Object(r.a)(n,1)[0];Object(c.useEffect)((function(){console.log(a)}),[a]);var i=t._id;return Object(c.useEffect)((function(){var e;i&&(e=i,A.emit("connect_private_room",e))}),[i]),Object(D.jsx)("div",{className:"App",children:Object(D.jsx)(l.a,{children:Object(D.jsxs)(d.d,{children:[Object(D.jsx)(d.b,{path:"/",component:J,exact:!0}),Object(D.jsx)(d.b,{path:"/chat",component:Pe}),Object(D.jsx)(d.b,{path:"/login",children:Object(D.jsx)(s.a,{style:{height:"100vh",alignItems:"center",display:"flex"},children:Object(D.jsx)(z,{})})}),Object(D.jsx)(d.b,{path:"/sign-up",children:Object(D.jsx)(s.a,{style:{height:"100vh",alignItems:"center",display:"flex"},children:Object(D.jsx)(P,{})})})]})})})},Me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,254)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(L,{children:Object(D.jsx)(se,{children:Object(D.jsx)(Ne,{children:Object(D.jsx)(K,{children:Object(D.jsx)(Ge,{})})})})})}),document.getElementById("root")),Me()}},[[191,1,2]]]);
//# sourceMappingURL=main.0d0d6aba.chunk.js.map