import{r as e,t}from"./react.MgD3mx3I.js";import{o as n,t as r}from"./jsx-runtime.D0D0xG74.js";import{a as i,o as a,r as o,s,t as c}from"./global-styles.DQ2Tzk09.js";var l=e(t(),1),u=r(),d=s.div`
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 80px;
  background: linear-gradient(135deg, ${i.bitsquid.primary} 0%, ${i.bitsquid.secondary} 100%);

  @media (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 60px;
  }
`,f=s(o)`
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1.5rem;
  }
`,p=s.div`
  color: ${i.bitsquid.contrast};

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${i.bitsquid.neutral};
    margin-bottom: 3rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
  }
`,m=s.div`
  background: rgba(155, 93, 229, 0.1);
  border: 1px solid rgba(155, 93, 229, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: ${i.bitsquid.contrast};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: ${i.bitsquid.neutral};
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`,h=s.form`
  background: ${i.bitsquid.secondary};
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,g=s.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${i.bitsquid.contrast};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`,_=s.div`
  margin-bottom: 1.5rem;
`,v=s.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: ${i.bitsquid.contrast};
  margin-bottom: 0.5rem;
`,y=s.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(155, 93, 229, 0.3);
  border-radius: 8px;
  background: ${i.bitsquid.primary};
  color: ${i.bitsquid.contrast};
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${i.bitsquid.accent1};
    box-shadow: 0 0 0 3px rgba(155, 93, 229, 0.1);
  }

  &::placeholder {
    color: ${i.bitsquid.neutral};
  }
`,b=s.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(155, 93, 229, 0.3);
  border-radius: 8px;
  background: ${i.bitsquid.primary};
  color: ${i.bitsquid.contrast};
  font-size: 1rem;
  font-family: inherit;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${i.bitsquid.accent1};
    box-shadow: 0 0 0 3px rgba(155, 93, 229, 0.1);
  }

  &::placeholder {
    color: ${i.bitsquid.neutral};
  }
`,x=s(c)`
  width: 100%;
  margin-top: 1rem;
  position: relative;
  
  ${e=>e.$isLoading&&`
    opacity: 0.7;
    cursor: not-allowed;
  `}
`,S=s.div`
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
  
  ${e=>e.type===`success`&&`
    background: rgba(72, 155, 125, 0.2);
    border: 1px solid rgba(72, 155, 125, 0.3);
    color: #4CAF50;
  `}
  
  ${e=>e.type===`error`&&`
    background: rgba(255, 75, 92, 0.2);
    border: 1px solid rgba(255, 75, 92, 0.3);
    color: #FF4B5C;
  `}
`,C=()=>{let{t:e}=n(),[t,r]=(0,l.useState)({name:``,email:``,message:``}),[i,o]=(0,l.useState)(!1),[s,c]=(0,l.useState)(null),C=e=>{let{name:t,value:n}=e.target;r(e=>({...e,[t]:n}))};return(0,u.jsx)(d,{children:(0,u.jsxs)(f,{children:[(0,u.jsxs)(p,{children:[(0,u.jsx)(`h1`,{children:e(`contact.title`)}),(0,u.jsx)(`p`,{children:e(`contact.subtitle`)}),(0,u.jsxs)(m,{children:[(0,u.jsxs)(`h3`,{children:[(0,u.jsx)(a,{icon:`envelope`}),e(`contact.info.email`)]}),(0,u.jsxs)(`p`,{children:[(0,u.jsx)(a,{icon:`paper-plane`}),`bitsquidcorp@gmail.com`]})]}),(0,u.jsxs)(m,{children:[(0,u.jsxs)(`h3`,{children:[(0,u.jsx)(a,{icon:`building`}),`Company Information`]}),(0,u.jsxs)(`p`,{children:[(0,u.jsx)(a,{icon:`id-card`}),e(`contact.info.nit`),`: 901713594`]}),(0,u.jsxs)(`p`,{children:[(0,u.jsx)(a,{icon:`map-marker-alt`}),`Colombia`]})]}),(0,u.jsxs)(m,{children:[(0,u.jsxs)(`h3`,{children:[(0,u.jsx)(a,{icon:`clock`}),`Response Time`]}),(0,u.jsxs)(`p`,{children:[(0,u.jsx)(a,{icon:`reply`}),`We typically respond within 24-48 hours`]})]})]}),(0,u.jsxs)(h,{onSubmit:async t=>{t.preventDefault(),o(!0),c(null);try{await new Promise(e=>setTimeout(e,2e3)),c({type:`success`,message:e(`contact.form.success`)}),r({name:``,email:``,message:``})}catch{c({type:`error`,message:e(`contact.form.error`)})}finally{o(!1)}},children:[(0,u.jsx)(g,{children:`Send us a Message`}),(0,u.jsxs)(_,{children:[(0,u.jsx)(v,{htmlFor:`name`,children:e(`contact.form.name`)}),(0,u.jsx)(y,{type:`text`,id:`name`,name:`name`,value:t.name,onChange:C,placeholder:e(`contact.form.name`),required:!0})]}),(0,u.jsxs)(_,{children:[(0,u.jsx)(v,{htmlFor:`email`,children:e(`contact.form.email`)}),(0,u.jsx)(y,{type:`email`,id:`email`,name:`email`,value:t.email,onChange:C,placeholder:e(`contact.form.email`),required:!0})]}),(0,u.jsxs)(_,{children:[(0,u.jsx)(v,{htmlFor:`message`,children:e(`contact.form.message`)}),(0,u.jsx)(b,{id:`message`,name:`message`,value:t.message,onChange:C,placeholder:e(`contact.form.message`),required:!0})]}),(0,u.jsx)(x,{type:`submit`,$isLoading:i,disabled:i,children:i?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{icon:`spinner`,spin:!0}),` `,e(`contact.form.sending`)]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{icon:`paper-plane`}),` `,e(`contact.form.send`)]})}),s&&(0,u.jsx)(S,{type:s.type,children:s.message})]})]})})};export{C as default};