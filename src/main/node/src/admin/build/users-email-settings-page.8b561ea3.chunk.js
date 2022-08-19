"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[8418],{56555:($,C,a)=>{a.r(C),a.d(C,{default:()=>Me});var e=a(32735),h=a(84968),T=a(5636),o=a(10938),U=a(29270),B=a(16540),P=a(11856),u=a(13087),s=a(13810),g=(l,n,t)=>new Promise((c,m)=>{var p=d=>{try{v(t.next(d))}catch(f){m(f)}},E=d=>{try{v(t.throw(d))}catch(f){m(f)}},v=d=>d.done?c(d.value):Promise.resolve(d.value).then(p,E);v((t=t.apply(l,n)).next())});const I=()=>g(void 0,null,function*(){const{data:l}=yield s.be.get((0,s.Gc)("email-templates"));return l}),O=l=>s.be.put((0,s.Gc)("email-templates"),l);var L=a(60216),i=a.n(L),r=a(53214),y=a(28004),b=a(95602),V=a(20763),W=a(78752),ee=a(95717),K=a.n(ee),te=a(23101),ae=a.n(te),le=a(88677),ne=a.n(le),se=Object.defineProperty,Q=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,w=(l,n,t)=>n in l?se(l,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[n]=t,j=(l,n)=>{for(var t in n||(n={}))oe.call(n,t)&&w(l,t,n[t]);if(Q)for(var t of Q(n))re.call(n,t)&&w(l,t,n[t]);return l};const z=({canUpdate:l,onEditClick:n})=>{const{formatMessage:t}=(0,T.useIntl)();return e.createElement(r.Table,{colCount:3,rowCount:3},e.createElement(r.Thead,null,e.createElement(r.Tr,null,e.createElement(r.Th,{width:"1%"},e.createElement(y.VisuallyHidden,null,t({id:(0,s.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),e.createElement(r.Th,null,e.createElement(b.Typography,{variant:"sigma",textColor:"neutral600"},t({id:(0,s.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),e.createElement(r.Th,{width:"1%"},e.createElement(y.VisuallyHidden,null,t({id:(0,s.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),e.createElement(r.Tbody,null,e.createElement(r.Tr,j({},(0,o.onRowClick)({fn:()=>n("reset_password")})),e.createElement(r.Td,null,e.createElement(W.Icon,null,e.createElement(ae(),{"aria-label":t({id:"global.reset-password",defaultMessage:"Reset password"})}))),e.createElement(r.Td,null,e.createElement(b.Typography,null,t({id:"global.reset-password",defaultMessage:"Reset password"}))),e.createElement(r.Td,j({},o.stopPropagation),e.createElement(V.IconButton,{onClick:()=>n("reset_password"),label:t({id:(0,s.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:l&&e.createElement(K(),null)}))),e.createElement(r.Tr,j({},(0,o.onRowClick)({fn:()=>n("email_confirmation")})),e.createElement(r.Td,null,e.createElement(W.Icon,null,e.createElement(ne(),{"aria-label":t({id:(0,s.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),e.createElement(r.Td,null,e.createElement(b.Typography,null,t({id:(0,s.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),e.createElement(r.Td,j({},o.stopPropagation),e.createElement(V.IconButton,{onClick:()=>n("email_confirmation"),label:t({id:(0,s.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:l&&e.createElement(K(),null)})))))};z.propTypes={canUpdate:i().bool.isRequired,onEditClick:i().func.isRequired};const ie=z;var me=a(83281),F=a(4122),S=a(78330),X=a(44526),N=a(71657),de=a(90353),M=a(5173);const ue=M.Ry().shape({options:M.Ry().shape({from:M.Ry().shape({name:M.Z_().required(o.translatedErrors.required),email:M.Z_().email(o.translatedErrors.email).required(o.translatedErrors.required)}).required(),response_email:M.Z_().email(o.translatedErrors.email),object:M.Z_().required(o.translatedErrors.required),message:M.Z_().required(o.translatedErrors.required)}).required(o.translatedErrors.required)}),Y=({template:l,onToggle:n,onSubmit:t})=>{const{formatMessage:c}=(0,T.useIntl)();return e.createElement(F.ModalLayout,{onClose:n,labelledBy:`${c({id:(0,s.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${c({id:(0,s.OB)(l.display),defaultMessage:l.display})}`},e.createElement(F.ModalHeader,null,e.createElement(N.Breadcrumbs,{label:`${c({id:(0,s.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${c({id:(0,s.OB)(l.display),defaultMessage:l.display})}`},e.createElement(N.Crumb,null,c({id:(0,s.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),e.createElement(N.Crumb,null,c({id:(0,s.OB)(l.display),defaultMessage:l.display})))),e.createElement(me.Formik,{onSubmit:t,initialValues:l,validateOnChange:!1,validationSchema:ue,enableReinitialize:!0},({errors:m,values:p,handleChange:E,isSubmitting:v})=>{var d,f,A,G,D,Z,H;return e.createElement(o.Form,null,e.createElement(F.ModalBody,null,e.createElement(S.Grid,{gap:5},e.createElement(S.GridItem,{col:6,s:12},e.createElement(o.GenericInput,{intlLabel:{id:(0,s.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:E,value:p.options.from.name,error:(f=(d=m==null?void 0:m.options)==null?void 0:d.from)==null?void 0:f.name,type:"text"})),e.createElement(S.GridItem,{col:6,s:12},e.createElement(o.GenericInput,{intlLabel:{id:(0,s.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:E,value:p.options.from.email,error:(G=(A=m==null?void 0:m.options)==null?void 0:A.from)==null?void 0:G.email,type:"text"})),e.createElement(S.GridItem,{col:6,s:12},e.createElement(o.GenericInput,{intlLabel:{id:(0,s.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:E,value:p.options.response_email,error:(D=m==null?void 0:m.options)==null?void 0:D.response_email,type:"text"})),e.createElement(S.GridItem,{col:6,s:12},e.createElement(o.GenericInput,{intlLabel:{id:(0,s.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:E,value:p.options.object,error:(Z=m==null?void 0:m.options)==null?void 0:Z.object,type:"text"})),e.createElement(S.GridItem,{col:12,s:12},e.createElement(de.Textarea,{label:c({id:(0,s.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",onChange:E,value:p.options.message,error:((H=m==null?void 0:m.options)==null?void 0:H.message)&&c({id:m.options.message,defaultMessage:m.options.message})})))),e.createElement(F.ModalFooter,{startActions:e.createElement(X.Button,{onClick:n,variant:"tertiary"},"Cancel"),endActions:e.createElement(X.Button,{loading:v,type:"submit"},"Finish")}))}))};Y.propTypes={template:i().shape({display:i().string,icon:i().string,options:i().shape({from:i().shape({name:i().string,email:i().string}),message:i().string,object:i().string,response_email:i().string})}).isRequired,onSubmit:i().func.isRequired,onToggle:i().func.isRequired};const ce=Y;var pe=Object.defineProperty,Ee=Object.defineProperties,fe=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,k=(l,n,t)=>n in l?pe(l,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[n]=t,ye=(l,n)=>{for(var t in n||(n={}))ve.call(n,t)&&k(l,t,n[t]);if(J)for(var t of J(n))ge.call(n,t)&&k(l,t,n[t]);return l},he=(l,n)=>Ee(l,fe(n)),Te=(l,n,t)=>new Promise((c,m)=>{var p=d=>{try{v(t.next(d))}catch(f){m(f)}},E=d=>{try{v(t.throw(d))}catch(f){m(f)}},v=d=>d.done?c(d.value):Promise.resolve(d.value).then(p,E);v((t=t.apply(l,n)).next())});const Pe=()=>e.createElement(o.CheckPagePermissions,{permissions:u.Z.readEmailTemplates},e.createElement(Oe,null)),Oe=()=>{const{formatMessage:l}=(0,T.useIntl)(),{trackUsage:n}=(0,o.useTracking)(),{notifyStatus:t}=(0,U.useNotifyAT)(),c=(0,o.useNotification)(),{lockApp:m,unlockApp:p}=(0,o.useOverlayBlocker)(),E=(0,e.useRef)(n),v=(0,h.useQueryClient)();(0,o.useFocusWhenNavigate)();const[d,f]=(0,e.useState)(!1),[A,G]=(0,e.useState)(null),D=(0,e.useMemo)(()=>({update:u.Z.updateEmailTemplates}),[]),{isLoading:Z,allowedActions:{canUpdate:H}}=(0,o.useRBAC)(D),{status:Be,data:q}=(0,h.useQuery)("email-templates",()=>I(),{onSuccess:()=>{t(l({id:(0,s.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError:()=>{c({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),be=Z||Be!=="success",x=()=>{f(R=>!R)},Re=R=>{G(R),x()},_=(0,h.useMutation)(R=>O({"email-templates":R}),{onSuccess:()=>Te(void 0,null,function*(){yield v.invalidateQueries("email-templates"),c({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),E.current("didEditEmailTemplates"),p(),x()}),onError:()=>{c({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),p()},refetchActive:!0}),{isLoading:Ce}=_,Ie=R=>{m(),E.current("willEditEmailTemplates");const Le=he(ye({},q),{[A]:R});_.mutate(Le)};return be?e.createElement(B.Main,{"aria-busy":"true"},e.createElement(o.SettingsPageTitle,{name:l({id:(0,s.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(P.HeaderLayout,{title:l({id:(0,s.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(P.ContentLayout,null,e.createElement(o.LoadingIndicatorPage,null))):e.createElement(B.Main,{"aria-busy":Ce},e.createElement(o.SettingsPageTitle,{name:l({id:(0,s.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(P.HeaderLayout,{title:l({id:(0,s.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(P.ContentLayout,null,e.createElement(ie,{onEditClick:Re,canUpdate:H}),d&&e.createElement(ce,{template:q[A],onToggle:x,onSubmit:Ie})))},Me=Pe},54080:($,C,a)=>{a.d(C,{Z:()=>P});var e=a(43653),h=a.n(e),T=a(10938),o=a.n(T),U=(u,s,g)=>new Promise((I,O)=>{var L=y=>{try{r(g.next(y))}catch(b){O(b)}},i=y=>{try{r(g.throw(y))}catch(b){O(b)}},r=y=>y.done?I(y.value):Promise.resolve(y.value).then(L,i);r((g=g.apply(u,s)).next())});const B=h().create({baseURL:"http://localhost:1337"});B.interceptors.request.use(u=>U(void 0,null,function*(){return u.headers={Authorization:`Bearer ${T.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},u}),u=>{Promise.reject(u)}),B.interceptors.response.use(u=>u,u=>{var s;throw((s=u.response)==null?void 0:s.status)===401&&(T.auth.clearAppStorage(),window.location.reload()),u});const P=B},13810:($,C,a)=>{a.d(C,{be:()=>e.Z,YX:()=>o,Gc:()=>P,OB:()=>u.Z});var e=a(54080),h=a(92891);const o=s=>Object.keys(s).reduce((g,I)=>{const O=s[I].controllers,L=Object.keys(O).reduce((i,r)=>((0,h.isEmpty)(O[r])||(i[r]=O[r]),i),{});return(0,h.isEmpty)(L)||(g[I]={controllers:L}),g},{});var U=a(46354);const P=s=>`/${U.Z}/${s}`;var u=a(39650)}}]);
