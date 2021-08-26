(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),s=(n(91),n(49)),o=n(46),l=n(149),u=Object(l.a)((function(e){return Object(o.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"},heading:{color:"rgba(0,183,255, 1)"},image:{paddingTop:"20px"}},e.breakpoints.down("sm"),{mainApp:{flexDirection:"column-reverse"}})})),d=n(160),p=n(161),j=n(155),b=n(164),f=n(159),m=n.p+"static/media/memories.9cfa8a46.png",h=Object(l.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",flexDirection:"column",justifyContent:"space-between",margin:"10px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),x=n(73),g=n.n(x),O=n(152),v=n(154),y=n(163),E=n(156),C=n(157),T=n(77),w=n.n(T),_=n(75),k=n.n(_),L=n(76),I=n.n(L),D=n(17),N=n(18),S=n.n(N),A=n(35),F=n(36),P=n.n(F),R="https://mern-koli.herokuapp.com/posts",z=function(e,t){return P.a.patch("".concat(R,"/").concat(e),t)},B=function(e){return P.a.delete("".concat(R,"/").concat(e))},M=function(e){return P.a.patch("".concat(R,"/").concat(e,"/likePost"))},W={FETCH_ALL:"FETCH_ALL",CREATE:"CREATE",UPDATE:"UPDATE",DELETE:"DELETE",LIKE_POST:"LIKE_POST"},H=n(5);var U=function(e){var t=e.post,n=e.setCurrentId,a=h(),r=Object(D.b)();return Object(H.jsxs)(O.a,{className:a.card,children:[Object(H.jsx)(v.a,{className:a.media,component:"div",image:t.selectedFile,title:t.title}),Object(H.jsx)("div",{className:a.overlay,children:Object(H.jsx)(j.a,{variant:"h6",children:t.creator})}),Object(H.jsx)("div",{className:a.overlay2,children:Object(H.jsx)(y.a,{style:{color:"white"},size:"small",onClick:function(){return n(t._id)},children:Object(H.jsx)(k.a,{fontSize:"medium"})})}),Object(H.jsxs)("div",{className:a.details,children:[Object(H.jsx)(j.a,{variant:"body2",children:g()(t.createdAt).fromNow()}),Object(H.jsx)(j.a,{variant:"body2",color:"textSecondary",children:t.tags&&t.tags.map((function(e){return"#".concat(e," ")}))})]}),Object(H.jsx)(j.a,{variant:"h5",className:a.title,gutterBottom:!0,children:t.title}),Object(H.jsx)(E.a,{children:Object(H.jsx)(j.a,{component:"p",color:"textSecondary",children:t.message})}),Object(H.jsxs)(C.a,{className:a.cardActions,children:[Object(H.jsxs)(y.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(A.a)(S.a.mark((function t(n){var a,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M(e);case 3:a=t.sent,r=a.data,n({type:W.LIKE_POST,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("like post error: ",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(H.jsx)(I.a,{fontSize:"small"}),"\xa0 Like \xa0",t.likeCount]}),Object(H.jsxs)(y.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(A.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B(e);case 3:n({type:W.DELETE,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("delete post error: ",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(H.jsx)(w.a,{fontSize:"small"}),"Delete"]})]})]})},K=n(158),X=Object(l.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}));var V=function(e){var t=e.setCurrentId,n=X(),a=Object(D.c)((function(e){return e.posts}));return a.length?Object(H.jsx)(f.a,{className:n.container,alignItems:"stretch",container:!0,spacing:3,children:a.map((function(e){return Object(H.jsx)(f.a,{item:!0,xs:12,sm:6,children:Object(H.jsx)(U,{setCurrentId:t,post:e})},e._id)}))}):Object(H.jsx)(K.a,{})},q=n(19),J=Object(l.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"15px 0"},buttonSubmit:{marginBottom:10}}})),G=n(78),Q=n.n(G),Y=n(82),Z=n(162);var $=function(e){var t=e.currentId,n=(e.setCurrentId,J()),r=Object(a.useState)({creator:"",title:"",tags:"",selectedFile:"",message:""}),c=Object(s.a)(r,2),i=c[0],o=c[1],l=Object(D.b)(),u=Object(D.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null}));return Object(a.useEffect)((function(){u&&o(u)}),[u]),Object(H.jsx)(Y.a,{className:n.paper,children:Object(H.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(n.form," ").concat(n.root),onSubmit:function(e){e.preventDefault(),t?(console.log("updating post with id: ".concat(t)),l(function(e,t){return function(){var n=Object(A.a)(S.a.mark((function n(a){var r,c;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,z(e,t);case 3:r=n.sent,c=r.data,a({type:W.UPDATE,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log("update post action: ",n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(t,i))):l(function(e){return function(){var t=Object(A.a)(S.a.mark((function t(n){var a,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,P.a.post(R,c);case 3:a=t.sent,r=a.data,n({type:W.CREATE,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(i)),console.log("form submit,",i),o({creator:"",title:"",tags:"",selectedFile:"",message:""})},children:[Object(H.jsxs)(j.a,{variant:"h6",children:[t?"Editing ":"Time for ","a Memory"]}),Object(H.jsx)(Z.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:i.creator,required:!0,onChange:function(e){return o(Object(q.a)(Object(q.a)({},i),{},{creator:e.target.value}))}}),Object(H.jsx)(Z.a,{name:"title",variant:"outlined",label:"Title",required:!0,fullWidth:!0,value:i.title,onChange:function(e){return o(Object(q.a)(Object(q.a)({},i),{},{title:e.target.value}))}}),Object(H.jsx)(Z.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:i.message,onChange:function(e){return o(Object(q.a)(Object(q.a)({},i),{},{message:e.target.value}))}}),Object(H.jsx)(Z.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:i.tags,onChange:function(e){return o(Object(q.a)(Object(q.a)({},i),{},{tags:e.target.value.split(",")}))}}),Object(H.jsx)("div",{className:n.fileInput,children:Object(H.jsx)(Q.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return o(Object(q.a)(Object(q.a)({},i),{},{selectedFile:t}))}})}),Object(H.jsx)(y.a,{className:n.buttonSubmit,color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Remember"}),Object(H.jsx)(y.a,{variant:"contained",color:"secondary",size:"small",fullWidth:!0,onClick:function(){o({creator:"",title:"",tags:"",selectedFile:"",message:""}),console.log("clear form: ",i)},children:"Clear"})]})})};var ee=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],c=u(),i=Object(D.b)();return Object(a.useEffect)((function(){i(function(){var e=Object(A.a)(S.a.mark((function e(t){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get(R);case 3:n=e.sent,a=n.data,console.log("FETCH_ALL:, ",a),t({type:W.FETCH_ALL,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("fetching posts from db error: ",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[i]),Object(H.jsxs)(d.a,{maxwidth:"lg",children:[Object(H.jsx)(p.a,{className:c.appBar,position:"static",color:"inherit",children:Object(H.jsxs)(j.a,{className:c.heading,variant:"h2",align:"center",children:["Memories ",Object(H.jsx)("img",{className:c.image,src:m,alt:"memories",height:"60"})]})}),Object(H.jsx)(b.a,{in:!0,children:Object(H.jsx)(d.a,{children:Object(H.jsxs)(f.a,{className:c.mainApp,container:!0,justifyContent:"space-between",alignItems:"stretch",spacing:3,children:[Object(H.jsx)(f.a,{item:!0,xs:12,sm:7,children:Object(H.jsx)(V,{setCurrentId:r})}),Object(H.jsx)(f.a,{item:!0,xs:12,sm:4,children:Object(H.jsx)($,{currentId:n,setCurrentId:r})})]})})})]})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,165)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},ne=n(34),ae=n(79),re=n(80),ce=Object(ne.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"CREATE":return[].concat(Object(re.a)(e),[t.payload]);case"UPDATE":case"LIKE_POST":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),ie=[ae.a],se=Object(ne.d)(ce,Object(ne.c)(ne.a.apply(void 0,ie),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));i.a.render(Object(H.jsx)(r.a.StrictMode,{children:Object(H.jsx)(D.a,{store:se,children:Object(H.jsx)(ee,{})})}),document.getElementById("root")),te()},91:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.ec027aea.chunk.js.map