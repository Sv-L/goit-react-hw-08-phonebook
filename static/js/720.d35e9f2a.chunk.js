"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[720],{7720:(e,n,t)=>{t.r(n),t.d(n,{default:()=>T});var r=t(9456),a=t(5805);const s=e=>e.contacts.error,i=e=>e.contacts.isLoading,o=e=>e.contacts.items;var d=t(6977),l=t(3336),c=t(632),x=t(5865),m=t(5187),p=t(3404),h=t(3892),u=t(579);const f=()=>{const e=(0,r.d4)(o),n=(0,r.wA)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(l.A,{elevation:16,sx:{margin:"0",padding:"20px",display:"flex",justifyContent:"center",alignItems:"center",width:"500px"},children:(0,u.jsxs)(c.A,{sx:{display:"flex",flexDirection:"column"},children:[(0,u.jsx)(x.A,{children:"New contact"}),(0,u.jsx)(h.l1,{initialValues:{name:"",number:""},validate:e=>{const n={};return e.name?/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*$/.test(e.name)||(n.name="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan"):n.name="Name is required",e.number?/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/.test(e.number)||(n.number="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"):n.number="Number is required",n},onSubmit:async(t,r)=>{let{name:s,number:i}=t,{resetForm:o}=r;if((n=>{if(e){const t=n.toLowerCase();return e.some((e=>e.name.toLowerCase()===t))}return!1})(s))a.Notify.failure("".concat(s," is already in contacts."));else{const e={name:s,number:i};await n((0,d.K$)(e))}document.activeElement.blur(),o()},children:(0,u.jsx)(h.lV,{children:(0,u.jsxs)(c.A,{sx:{display:"flex",flexDirection:"column"},children:[(0,u.jsx)(h.D0,{as:m.A,type:"text",name:"name",label:"Name",variant:"filled",sx:{mb:2,mt:2},required:!0}),(0,u.jsx)(h.Kw,{name:"name",component:"div"}),(0,u.jsx)(h.D0,{as:m.A,type:"tel",name:"number",label:"Number",variant:"filled",sx:{mb:2,width:"450px"},required:!0}),(0,u.jsx)(h.Kw,{name:"number",component:"div"}),(0,u.jsx)(p.A,{type:"submit",variant:"outlined",children:"Add contact"})]})})})]})})})};var g=t(3834),b=t(7392),j=t(3471),A=t(5721),w=t(1322);const y=()=>{const e=(0,r.d4)(o),n=(0,r.d4)(g.vD),t=(0,r.wA)(),a=()=>{const t=n.toLowerCase();return e?e.filter((e=>e.name.toLowerCase().includes(t))):[]};return a().length>0?(0,u.jsx)(A.A,{sx:{padding:"20px",backgroundColor:"#fff",height:"350px",overflow:"auto"},children:a().map((e=>{let{id:n,name:r,number:a}=e;return(0,u.jsxs)(w.Ay,{sx:{width:"600px",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px",border:"1px solid gray",borderRadius:"3px",padding:"5px"},children:[(0,u.jsx)(x.A,{sx:{width:"200px",overflow:"hidden"},children:r}),(0,u.jsx)(x.A,{sx:{width:"200px",overflow:"hidden"},children:a}),(0,u.jsx)(b.A,{"aria-label":"delete",onClick:()=>t((0,d.MO)(n)),children:(0,u.jsx)(j.A,{sx:{fill:"none",stroke:"#3498db"}})})]},n)}))}):""!==n?(0,u.jsx)(x.A,{sx:{width:"350px",textAlign:"center",padding:"20px",backgroundColor:"#fff",height:"350px"},children:"There are no saved contacts with this name."}):(0,u.jsx)(x.A,{sx:{width:"350px",textAlign:"center",padding:"20px",backgroundColor:"#fff",height:"350px"},children:"There are no contacts."})},v=()=>{const e=(0,r.d4)(s);return(0,u.jsx)(x.A,{sx:{width:"380px",height:"300px",backgroundColor:"#fff",textAlign:"center",paddingTop:"20px"},children:e})};var C=t(9190),k=t(9859),_=t(1787),N=t(6360);const D=()=>{const e=(0,r.wA)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(C.A,{htmlFor:"outlined-adornment-amount",children:"Find contacts by name"}),(0,u.jsx)(k.A,{sx:{width:"500px",backgroundColor:"#fff",marginBottom:"15px",marginTop:"10px"},type:"text",name:"filter",onChange:n=>{const t=n.currentTarget.value.trim();e((0,g.yo)(t))},startAdornment:(0,u.jsx)(_.A,{position:"start",children:(0,u.jsx)(N.A,{})}),labelwidth:60})]})};var F=t(53),L=t(5043);const T=()=>{const e=(0,r.d4)(i),n=(0,r.d4)(s),t=(0,r.wA)();return(0,L.useEffect)((()=>{t((0,d.oe)())}),[t]),(0,u.jsxs)(l.A,{elevation:16,sx:{padding:"20px",display:"flex",gap:"20px",justifyContent:"center",alignItems:"start"},children:[(0,u.jsx)(f,{}),(0,u.jsxs)(l.A,{elevation:16,sx:{margin:"0",padding:"20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,u.jsx)(D,{}),e?(0,u.jsx)(F.A,{}):n?(0,u.jsx)(v,{}):(0,u.jsx)(y,{})]})]})}}}]);
//# sourceMappingURL=720.d35e9f2a.chunk.js.map