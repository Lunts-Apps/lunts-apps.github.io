import{t as e}from"./react.MgD3mx3I.js";import{i as t,o as n,t as r}from"./jsx-runtime.D0D0xG74.js";import{a as i,n as a,o,s}from"./global-styles.DQ2Tzk09.js";import{n as c,t as l}from"./free-brands-svg-icons.y1OFPFCd.js";e();var u=r();t.add(c,l);var d=s.footer`
  background: ${e=>e.$isLunts?i.lunts.primary:i.bitsquid.primary};
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
  position: relative;
  overflow: hidden;

  /* Bitsquid sparkle animation (for all pages except Lunts) */
  ${e=>!e.$isLunts&&`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(2px 2px at 20px 30px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 40px 70px, ${i.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 90px 40px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(1px 1px at 130px 80px, ${i.bitsquid.accent2}, transparent),
        radial-gradient(2px 2px at 160px 30px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(1px 1px at 200px 90px, ${i.bitsquid.accent1}, transparent),
        radial-gradient(2px 2px at 240px 50px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(1px 1px at 280px 20px, ${i.bitsquid.accent2}, transparent),
        radial-gradient(1px 1px at 320px 100px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 360px 60px, ${i.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 400px 10px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 440px 80px, ${i.bitsquid.accent2}, transparent),
        radial-gradient(1px 1px at 480px 40px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 520px 90px, ${i.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 560px 25px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 600px 70px, ${i.bitsquid.accent2}, transparent),
        radial-gradient(1px 1px at 640px 50px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 680px 15px, ${i.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 720px 85px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 760px 45px, ${i.bitsquid.accent2}, transparent);
      background-repeat: repeat;
      background-size: 800px 120px;
      animation: sparkle 4s ease-in-out infinite alternate, drift 20s linear infinite;
      opacity: 0.8;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(1px 1px at 50px 60px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 100px 20px, ${i.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 150px 100px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 200px 40px, ${i.bitsquid.accent2}, transparent),
        radial-gradient(1px 1px at 250px 80px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 300px 10px, ${i.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 350px 70px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 400px 30px, ${i.bitsquid.accent2}, transparent),
        radial-gradient(1px 1px at 450px 90px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 500px 50px, ${i.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 550px 15px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 600px 85px, ${i.bitsquid.accent2}, transparent),
        radial-gradient(1px 1px at 650px 35px, ${i.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 700px 75px, ${i.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 750px 25px, ${i.bitsquid.contrast}, transparent);
      background-repeat: repeat;
      background-size: 800px 120px;
      animation: sparkle 3s ease-in-out infinite alternate-reverse, drift 25s linear infinite reverse;
      opacity: 0.6;
    }

    @keyframes sparkle {
      0% { 
        opacity: 0.3;
        transform: scale(0.8);
      }
      50% { 
        opacity: 0.9;
        transform: scale(1.1);
      }
      100% { 
        opacity: 0.5;
        transform: scale(0.9);
      }
    }

    @keyframes drift {
      0% { 
        transform: translateX(-100px) translateY(0px);
      }
      100% { 
        transform: translateX(100px) translateY(-50px);
      }
    }
  `}

  /* Lunts floating dots animation (only for Lunts page) */
  ${e=>e.$isLunts&&`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="white" opacity="0.1"/><circle cx="80" cy="40" r="1.5" fill="white" opacity="0.1"/><circle cx="40" cy="80" r="1" fill="white" opacity="0.1"/><circle cx="90" cy="90" r="2.5" fill="white" opacity="0.1"/></svg>') repeat;
      animation: float 20s linear infinite;
    }

    @keyframes float {
      0% { transform: translateX(0) translateY(0); }
      100% { transform: translateX(-100px) translateY(-100px); }
    }
  `}
`,f=s(a)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,p=s.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
    opacity: 0.9;
  }
`,m=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,h=s.a`
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    color: ${e=>e.$isLunts?i.lunts.accent:i.bitsquid.accent1};
    transform: translateX(5px);
  }
`,g=s.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,_=s.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    color: ${e=>e.$isLunts?i.lunts.accent:i.bitsquid.accent1};
    transform: translateY(-3px);
  }
`,v=s.div`
  p {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.9;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`,y=s.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  text-align: center;
  opacity: 0.7;
  font-size: 0.9rem;
  position: relative;
  z-index: 1;
`,b=({lang:e,currentPath:t})=>{let{t:r}=n(),i=t.includes(`/products/lunts`),s=()=>{window.scrollTo({top:0,behavior:`smooth`})};return(0,u.jsxs)(d,{$isLunts:i,children:[(0,u.jsxs)(f,{children:[(0,u.jsxs)(p,{children:[(0,u.jsx)(`h3`,{children:i?`Lunts`:`Bitsquid`}),(0,u.jsx)(`p`,{children:r(`footer.description`)}),(0,u.jsxs)(g,{children:[(0,u.jsx)(_,{href:`https://www.instagram.com/luntsapp`,target:`_blank`,rel:`noopener noreferrer`,$isLunts:i,children:(0,u.jsx)(o,{icon:[`fab`,`instagram`]})}),(0,u.jsx)(_,{href:`https://www.facebook.com/lunts.app.9`,target:`_blank`,rel:`noopener noreferrer`,$isLunts:i,children:(0,u.jsx)(o,{icon:[`fab`,`facebook`]})}),(0,u.jsx)(_,{href:`https://www.tiktok.com/@lunts.app`,target:`_blank`,rel:`noopener noreferrer`,$isLunts:i,children:(0,u.jsx)(o,{icon:[`fab`,`tiktok`]})}),(0,u.jsx)(_,{href:`https://www.youtube.com/@luntsapp3634`,target:`_blank`,rel:`noopener noreferrer`,$isLunts:i,children:(0,u.jsx)(o,{icon:[`fab`,`youtube`]})}),(0,u.jsx)(_,{href:`https://www.linkedin.com/company/bitsquid`,target:`_blank`,rel:`noopener noreferrer`,$isLunts:i,children:(0,u.jsx)(o,{icon:[`fab`,`linkedin`]})})]})]}),(0,u.jsxs)(p,{children:[(0,u.jsx)(`h3`,{children:r(`footer.products`)}),(0,u.jsxs)(m,{children:[(0,u.jsxs)(h,{href:`/${e}/products/lunts`,$isLunts:i,onClick:s,children:[`Lunts - `,r(`products.lunts.subtitle`)]}),(0,u.jsx)(h,{href:`/${e}/products/lunts/privacy-policy`,$isLunts:i,onClick:s,children:r(`products.lunts.privacyPolicy`)}),(0,u.jsx)(h,{href:`/${e}/products/lunts/terms-and-conditions`,$isLunts:i,onClick:s,children:r(`products.lunts.termsConditions`)})]})]}),(0,u.jsxs)(p,{children:[(0,u.jsx)(`h3`,{children:r(`footer.contact`)}),(0,u.jsxs)(v,{children:[(0,u.jsxs)(`p`,{children:[(0,u.jsx)(o,{icon:`envelope`}),i?`lunts.info@gmail.com`:`bitsquidcorp@gmail.com`]}),!i&&(0,u.jsxs)(`p`,{children:[(0,u.jsx)(o,{icon:`building`}),`NIT: 901713594`]})]})]}),(0,u.jsxs)(p,{children:[(0,u.jsx)(`h3`,{children:r(`footer.legal`)}),(0,u.jsxs)(m,{children:[(0,u.jsx)(h,{href:`/${e}/products/lunts/privacy-policy`,$isLunts:i,onClick:s,children:r(`legal.privacyPolicy.title`)}),(0,u.jsx)(h,{href:`/${e}/products/lunts/terms-and-conditions`,$isLunts:i,onClick:s,children:r(`legal.termsConditions.title`)})]})]})]}),(0,u.jsx)(y,{children:(0,u.jsx)(a,{children:(0,u.jsxs)(`p`,{children:[`© `,new Date().getFullYear(),` `,i?`Lunts`:`Bitsquid`,`. `,r(`footer.rights`)]})})})]})};export{b as default};