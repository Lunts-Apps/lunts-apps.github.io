import{t as e}from"./react.MgD3mx3I.js";import{o as t,t as n}from"./jsx-runtime.D0D0xG74.js";import{a as r,c as i,i as a,n as o,o as s,s as c}from"./global-styles.DQ2Tzk09.js";e();var l=n(),u=c.div`
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 80px;
  background: linear-gradient(135deg, ${r.bitsquid.primary} 0%, ${r.bitsquid.secondary} 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 60px;
  }
`,d=c(o)`
  text-align: center;
  color: ${r.bitsquid.contrast};
  max-width: 800px;
`,f=i`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`,p=i`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`,m=c.div`
  margin-bottom: 3rem;
  position: relative;
`,h=c.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, ${r.bitsquid.accent1}, ${r.bitsquid.accent2});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 3rem;
  color: white;
  animation: ${f} 3s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(155, 93, 229, 0.3);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }
`,g=c.div`
  position: absolute;
  top: ${e=>e.$top};
  left: ${e=>e.$left};
  width: 40px;
  height: 40px;
  background: rgba(155, 93, 229, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${r.bitsquid.accent1};
  font-size: 1.2rem;
  animation: ${f} 4s ease-in-out infinite;
  animation-delay: ${e=>e.$delay}s;
  z-index: 1;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
`,_=c(a)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  animation: ${p} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,v=c.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${r.bitsquid.accent1};

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`,y=c.p`
  font-size: 1.3rem;
  line-height: 1.7;
  color: ${r.bitsquid.neutral};
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`,b=c.p`
  font-size: 1.1rem;
  color: ${r.bitsquid.accent2};
  font-weight: 500;
  margin-top: 2rem;
  animation: ${p} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,x=c.div`
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(155, 93, 229, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(155, 93, 229, 0.2);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${r.bitsquid.contrast};
  }

  p {
    font-size: 1.1rem;
    color: ${r.bitsquid.neutral};
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`,S=()=>{let{t:e}=t();return(0,l.jsx)(u,{children:(0,l.jsxs)(d,{children:[(0,l.jsxs)(m,{children:[(0,l.jsx)(h,{children:(0,l.jsx)(s,{icon:`briefcase`})}),(0,l.jsx)(g,{$delay:0,$top:`10%`,$left:`20%`,children:(0,l.jsx)(s,{icon:`rocket`})}),(0,l.jsx)(g,{$delay:1,$top:`30%`,$left:`80%`,children:(0,l.jsx)(s,{icon:`lightbulb`})}),(0,l.jsx)(g,{$delay:2,$top:`70%`,$left:`15%`,children:(0,l.jsx)(s,{icon:`users`})}),(0,l.jsx)(g,{$delay:1.5,$top:`60%`,$left:`85%`,children:(0,l.jsx)(s,{icon:`code`})})]}),(0,l.jsx)(_,{children:e(`jobs.title`)}),(0,l.jsx)(v,{children:e(`jobs.noPositions`)}),(0,l.jsx)(y,{children:e(`jobs.description`)}),(0,l.jsxs)(b,{children:[`✨ `,e(`jobs.stayTuned`),` ✨`]}),(0,l.jsxs)(x,{children:[(0,l.jsx)(`h3`,{children:e(`jobs.getInTouch`)}),(0,l.jsxs)(`p`,{children:[(0,l.jsx)(s,{icon:`envelope`}),`bitsquidcorp@gmail.com`]}),(0,l.jsxs)(`p`,{children:[(0,l.jsx)(s,{icon:`building`}),`NIT: 901713594`]})]})]})})};export{S as default};