"use strict";(self.webpackChunkyourpet_frontend=self.webpackChunkyourpet_frontend||[]).push([[703],{4814:function(n,e,t){t.d(e,{$:function(){return c}});var r,i=t(1413),o=t(168),a=t(6444).ZP.section(r||(r=(0,o.Z)(["\n  height: calc(100vh - 88px);\n  padding-top: ",";\n  padding-bottom: ",";\n\n  @media screen and (",") {\n    height: calc(100vh - 96px);\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n\n  @media screen and (",") {\n    height: calc(100vh - 88px);\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n"])),(function(n){return n.padTopSm||"40px"}),(function(n){return n.padBottomSM||"100px"}),(function(n){return n.theme.media.mdToLg}),(function(n){return n.padTopMd||"80px"}),(function(n){return n.padBottomMd||"192px"}),(function(n){return n.theme.media.lg}),(function(n){return n.padTopLg||"80px"}),(function(n){return n.padBottomLg||"103px"})),s=t(184),c=function(n){return(0,s.jsx)(a,(0,i.Z)({},n))}},4136:function(n,e,t){t.d(e,{FS:function(){return i},JI:function(){return s},fd:function(){return o},jE:function(){return a}});var r=t(5282),i=(t(7427),r.object().shape({email:r.string().email("Enter a Valid Email").required("Email is Required"),password:r.string().required("Enter Your Password").min(8,"Password Should be minimum 8 character").max(50,"Too long")}),r.object().shape({email:r.string().email("Enter a Valid Email").required("Email is Required"),password:r.string().required("Enter Your Password").min(6,"Password should be minimum 6 character").max(16,"Too long").matches(/[0-9]/,"Password requires a number").matches(/[a-z]/,"Password requires a lowercase letter").matches(/[A-Z]/,"Password requires an uppercase letter"),confirm:r.string().oneOf([r.ref("password")],"Password does not matched").required("Confirm Password is Required")})),o=r.object().shape({title:r.string().when("category",{is:function(n){return"my pet"!==n},then:r.string().min(2,"Minimum 2 characters").max(50,"Maximum 50 characters").required("Enter a title"),otherwise:r.string()}),date:r.date().max(new Date,'Must be less than "now"').required("Choose a date of birth"),breed:r.string("Must be a string").min(2,"Minimum 2 characters").max(16,"Maximum 16 characters").required("Enter a pet`s breed "),name:r.string().min(2,"Minimum 2 characters").max(16,"Maximum 16 characters").required("Enter a pet`s name"),location:r.string().when("category",{is:function(n){return"my pet"!==n},then:r.string().matches(/^[A-Z][A-Za-z ]+$/,"Starts with capitalize character").required("Enter your location"),otherwise:r.string()}),price:r.number().when("category",{is:function(n){return"sell"===n},then:r.number().moreThan(0,"Price must be greater than 0").required("Enter a price"),otherwise:r.number()}),comments:r.string().min(8,"Minimum 8 characters").max(350,"Maximum 350 characters"),sex:r.string().when("category",{is:function(n){return"sell"===n||"lost-found"===n||"for-free"===n},then:r.string().oneOf(["female","male"]).required("Choose a pet`s sex"),otherwise:r.string()}),category:r.string().oneOf(["my pet","sell","lost-found","for-free"]).required(),file:r.mixed().required("Upload pet`s photo").test("fileType","Only image files are allowed",(function(n){return!n||["image/jpg","image/jpeg","image/png"].includes(n.type)})).test("fileSize","File size is too large",(function(n){return(null===n||void 0===n?void 0:n.size)<=3145728}))}),a=r.object().shape({name:r.string().min(2,"min 2 characters").max(20,"max 20 characters").required("Set your name"),email:r.string().email("Enter a valid email").required("Set your email"),birthday:r.date().max(new Date,'Must be less than "now"').required("Choose  your birthday"),city:r.string().matches(/^[A-Z][a-zA-Z]*$/,"Starts with capitalize character"),phone:r.string().matches(/^\+\d{12}$/,"UA format number")}),s=r.object().shape({file:r.mixed().test("fileType","Only image files are allowed",(function(n){return!n||["image/jpg","image/jpeg","image/png"].includes(n.type)}))})},5558:function(n,e,t){t.d(e,{M7:function(){return g},Py:function(){return h},im:function(){return x}});var r,i,o,a=t(168),s=t(6444),c=t(3622),u=t(1052),m=t(9054),d=t(9588),l=t(8058),p=t(8569),f=t(6168),h=s.ZP.div(r||(r=(0,a.Z)(["\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n\n  background-repeat: no-repeat;\n  background-position: center -70px;\n  background-size: 100%;\n\n  background-image: url(",");\n\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n\n  @media screen and (",") {\n    background-size: 100%;\n    background-position: center -100px;\n    background-image: url(",");\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n\n  @media screen and (",") {\n    background-image: url(",");\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n"])),u,m,c.r.media.md,d,l,c.r.media.lg,p,f),g=s.ZP.div(i||(i=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 40px;\n\n  @media screen and (",") {\n  }\n\n  @media screen and (",") {\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 32px;\n  }\n"])),c.r.media.md,c.r.media.lg),x=s.ZP.div(o||(o=(0,a.Z)(["\n  position: relative;\n"])))},3703:function(n,e,t){t.r(e),t.d(e,{default:function(){return mn}});var r,i,o,a,s,c,u,m,d,l,p,f,h,g,x,b,w,y,Z=t(4814),j=t(5861),v=t(9439),P=t(4687),k=t.n(P),z=t(2791),q=t(9434),S=t(7601),E=t(5705),M=t(4136),C=t(8255),T=t(168),W=t(6444),A=W.ZP.svg(r||(r=(0,T.Z)(["\n  display: block;\n  fill: transparent;\n  stroke: currentColor;\n"]))),B=t(3439),L=t(184),O=function(){return(0,L.jsx)(A,{width:24,height:24,children:(0,L.jsx)("use",{href:B.Z+"#icon-eye-closed"})})},F=function(){return(0,L.jsx)(A,{width:24,height:24,children:(0,L.jsx)("use",{href:B.Z+"#icon-eye-open"})})},R=function(){return(0,L.jsx)(A,{width:24,height:24,children:(0,L.jsx)("use",{href:B.Z+"#icon-cross-small"})})},$=function(){return(0,L.jsx)(A,{width:24,height:24,children:(0,L.jsx)("use",{href:B.Z+"#icon-check",color:"#00C3AD"})})},D=t(1087),V=t(3622),Y=W.ZP.div(i||(i=(0,T.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 280px;\n  box-shadow: ",";\n  border-radius: 40px;\n  background-color: ",";\n  padding: 40px 12px;\n\n  @media screen and (",") {\n    width: 608px;\n    padding: 60px 75px;\n  }\n"])),(function(n){return n.theme.shadows.mainShadow}),(function(n){return n.theme.colors.clearWhite}),(function(n){return n.theme.media.md})),I=(0,W.ZP)(E.l0)(o||(o=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),J=W.ZP.div(a||(a=(0,T.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n  margin-top: 40px;\n  margin-bottom: 40px;\n\n  @media screen and (",") {\n    gap: 32px;\n    margin-bottom: 52px;\n  }\n  @media screen and (",") {\n    margin-bottom: 40px;\n  }\n"])),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),U=W.ZP.h2(s||(s=(0,T.Z)(["\n  font-family: ",";\n  font-style: normal;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.37;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: ",";\n\n  @media screen and (",") {\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.37;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.fontSizes[5]}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.media.md}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.fontSizes[14]})),_=(0,W.ZP)(E.gN)(c||(c=(0,T.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: ",";\n  font-style: normal;\n  font-weight: ",";\n  height: 48px;\n  font-size: ",";\n  padding: 12px 16px;\n  width: 100%;\n  border: 1px solid;\n  border-color: ",";\n  border-radius: 40px;\n  cursor: pointer;\n  outline: none;\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.error?n.theme.colors.red:n.valid?n.theme.colors.green:n.theme.colors.blue})),N=W.ZP.button(u||(u=(0,T.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: ",";\n  font-style: normal;\n  font-weight: ",";\n  font-size: ",";\n  width: 100%;\n  border: none;\n  border-radius: 40px;\n  height: 48px;\n  cursor: pointer;\n  background: ",";\n  margin-bottom: 24px;\n  color: ",";\n\n   &:hover{\n    background: ",";\n     transition-duration: 250ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  @media screen and (",") {\n    margin-bottom: 16px;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.clearWhite}),(function(n){return n.theme.colors.blueDark}),(function(n){return n.theme.media.md})),G=W.ZP.p(m||(m=(0,T.Z)(["\n  font-family: ",";\n  font-style: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: ",";\n"])),V.r.fonts.main,(function(n){return n.theme.colors.grey})),H=W.ZP.span(d||(d=(0,T.Z)(["\n  margin-left: 3px;\n"]))),K=(0,W.ZP)(D.OL)(l||(l=(0,T.Z)(["\n  color: ",";\n  line-height: 1.33;\n"])),(function(n){return n.theme.colors.blue})),Q=W.ZP.span(p||(p=(0,T.Z)(["\n  position: absolute;\n  cursor: pointer;\n  color: ",";\n  top: 13px;\n  right: 40px;\n  @media screen and (",") {\n    top: 86px;\n    top: 12px;\n  }\n"])),(function(n){return n.error?n.theme.colors.red:n.theme.colors.green}),(function(n){return n.theme.media.md})),X=W.ZP.span(f||(f=(0,T.Z)(["\n  color: ",";\n  position: absolute;\n  cursor: pointer;\n  top: 86px;\n  right: ",";\n  @media screen and (",") {\n    top: 92px;\n  }\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.position||"15px"}),(function(n){return n.theme.media.md})),nn=W.ZP.span(h||(h=(0,T.Z)(["\n  color: ",";\n  position: absolute;\n  cursor: pointer;\n  top: 156px;\n  right: ",";\n  @media screen and (",") {\n    top: 172px;\n  }\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.position||"15px"}),(function(n){return n.theme.media.md})),en=W.ZP.div(g||(g=(0,T.Z)(["\n  position: absolute;\n  font-family: ",";\n  font-style: normal;\n  font-weight: ",";\n  font-size: 12px;\n  line-height: 16px;\n  color: ",";\n  top: 50px;\n  left: 16px;\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.colors.red})),tn=W.ZP.div(x||(x=(0,T.Z)(["\n  position: absolute;\n  font-family: ",";\n  font-style: normal;\n  font-weight: ",";\n  font-size: 12px;\n  line-height: 1.33;\n  color: ",";\n  top: 123px;\n  left: 16px;\n  @media screen and (",") {\n    top: 130px;\n    left: 16px;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.colors.red}),(function(n){return n.theme.media.md})),rn=W.ZP.div(b||(b=(0,T.Z)(["\n  position: absolute;\n  font-family: ",";\n  font-style: normal;\n  font-weight: ",";\n  font-size: 12px;\n  line-height: 1.33;\n  color: ",";\n  top: 195px;\n  left: 16px;\n  @media screen and (",") {\n    top: 210px;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.colors.red}),(function(n){return n.theme.media.md})),on=W.ZP.div(w||(w=(0,T.Z)(["\n  position: absolute;\n  font-family: ",";\n  font-style: normal;\n  font-weight: ",";\n  font-size: 12px;\n  line-height: 1.33;\n  color: ",";\n  top: 123px;\n  left: 16px;\n  @media screen and (",") {\n    top: 130px;\n    left: 16px;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.media.md})),an=W.ZP.div(y||(y=(0,T.Z)(["\n  position: absolute;\n  font-family: ",";\n  font-style: normal;\n  font-weight: ",";\n  font-size: 12px;\n  line-height: 1.33;\n  color: ",";\n  top: 195px;\n  left: 16px;\n  @media screen and (",") {\n    top: 210px;\n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.media.md})),sn={email:"",password:"",confirm:""},cn=function(){var n=(0,z.useState)(O),e=(0,v.Z)(n,2),t=e[0],r=e[1],i=(0,z.useState)("password"),o=(0,v.Z)(i,2),a=o[0],s=o[1],c=(0,z.useState)(O),u=(0,v.Z)(c,2),m=u[0],d=u[1],l=(0,z.useState)("password"),p=(0,v.Z)(l,2),f=p[0],h=p[1],g=(0,q.I0)(),x=function(){var n=(0,j.Z)(k().mark((function n(e,t){var r,i,o,a;return k().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.email,i=e.password,o=t.resetForm,n.prev=2,n.next=5,g((0,S.z2)({email:r,password:i}));case 5:a=n.sent,console.log(a),"Success"===a.payload.response.status&&o(),(0,C.h)("success","You have successfully registered"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(e,t){return n.apply(this,arguments)}}(),b=function(n){"password"===a?(s("text"),r(F)):(s("password"),r(O))},w=function(n){"password"===f?(h("text"),d(F)):(h("password"),d(O))};return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(Y,{children:(0,L.jsx)(E.J9,{initialValues:sn,validationSchema:M.FS,onSubmit:x,children:function(n){var e=n.errors,r=n.touched;return(0,L.jsxs)(I,{autoComplete:"off",children:[(0,L.jsx)(U,{children:"Registration"}),(0,L.jsxs)(J,{children:[(0,L.jsx)(_,{type:"text",name:"email",placeholder:"Email",valid:r.email&&!e.email?"true":void 0,error:r.email&&e.email}),(0,L.jsx)(E.Bc,{name:"email",type:"email",id:"email",render:function(n){return(0,L.jsx)(en,{children:n})}}),e.email&&r.email&&(0,L.jsx)(Q,{error:e.email&&r.email&&"false",children:(0,L.jsx)(R,{})}),r.email&&!e.email&&(0,L.jsx)(Q,{error:e.email&&r.email&&"false",children:(0,L.jsx)($,{})}),(0,L.jsx)(_,{type:a,id:"password",name:"password",placeholder:"Password",valid:r.password&&!e.password?"true":void 0,error:r.password&&e.password}),r.password&&e.password&&(0,L.jsx)(E.Bc,{name:"password",type:"password",render:function(n){return(0,L.jsx)(tn,{children:n})}}),r.password&&!e.password&&(0,L.jsx)(on,{children:"Password is secure"}),r.password&&!e.password&&(0,L.jsx)(X,{position:"40px",error:e.password&&r.password&&"false",children:(0,L.jsx)($,{})}),(0,L.jsx)(X,{onClick:b,children:t}),(0,L.jsx)(_,{type:f,name:"confirm",id:"confirm",placeholder:"Confirm password",valid:r.confirm&&!e.confirm?"true":void 0,error:r.confirm&&e.confirm}),r.confirm&&!e.confirm&&(0,L.jsx)(nn,{position:"40px",error:e.confirm&&r.confirm&&"false",children:(0,L.jsx)($,{})}),(0,L.jsx)(nn,{onClick:w,children:m}),r.confirm&&e.confirm&&(0,L.jsx)(E.Bc,{name:"confirm",type:"confirm",render:function(n){return(0,L.jsx)(rn,{children:n})}}),r.confirm&&!e.confirm&&(0,L.jsx)(an,{children:"Passwords is matched"})]}),(0,L.jsx)(N,{type:"submit",children:"Registration"}),(0,L.jsxs)(G,{children:["Already have an account?",(0,L.jsx)(H,{children:(0,L.jsx)(K,{to:"/login",children:"Login"})})]})]})}})})})},un=t(5558),mn=function(){return(0,L.jsx)(un.Py,{children:(0,L.jsx)(Z.$,{padTopSm:"24px",padTopMd:"56px",padTopLg:"24px",children:(0,L.jsx)(cn,{})})})}},8569:function(n,e,t){n.exports=t.p+"static/media/bg-lg@1x.c858cf00f281710d12a7.png"},6168:function(n,e,t){n.exports=t.p+"static/media/bg-lg@2x.3bb0c95d770a3c0d43e0.png"},9588:function(n,e,t){n.exports=t.p+"static/media/bg-md@1x.4b7823b740bd183f37c8.png"},8058:function(n,e,t){n.exports=t.p+"static/media/bg-md@2x.4b63024f94f69f2fa858.png"},1052:function(n,e,t){n.exports=t.p+"static/media/bg-sm@1x.e0ccc0295a60f99a5241.png"},9054:function(n,e,t){n.exports=t.p+"static/media/bg-sm@2x.f0d5ccaaa60dcd004b66.png"}}]);
//# sourceMappingURL=703.99f0693b.chunk.js.map