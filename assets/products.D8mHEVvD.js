import{t as e}from"./react.MgD3mx3I.js";import{o as t,t as n}from"./jsx-runtime.D0D0xG74.js";import{a as r,n as i,o as a,s as o,t as s}from"./global-styles.DQ2Tzk09.js";e();var c=n(),l=o.div`
  min-height: 100vh;
  padding-top: 70px;
`,u=o.section`
  background: linear-gradient(135deg, ${r.bitsquid.primary} 0%, ${r.bitsquid.secondary} 100%);
  padding: 4rem 0;
  text-align: center;
`,d=o(i)`
  color: ${r.bitsquid.contrast};
`,f=o.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,p=o.p`
  font-size: 1.3rem;
  color: ${r.bitsquid.neutral};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,m=o.section`
  padding: 4rem 0;
  background: ${r.bitsquid.primary};
`,h=o.div`
  background: linear-gradient(135deg, ${r.lunts.primary} 0%, ${r.lunts.secondary} 100%);
  border-radius: 20px;
  padding: 4rem;
  margin: 2rem 0;
  color: white;
  position: relative;
  overflow: hidden;

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

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1rem 0;
  }
`,g=o.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`,_=o.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,v=o.div`
  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;

    @media (max-width: 768px) {
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    opacity: 0.95;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
  }
`,y=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`,b=o(s)`
  background: white;
  color: ${r.lunts.primary};
  border: 2px solid white;
  min-width: 200px;

  &:hover {
    background: transparent;
    color: white;
    border-color: white;
  }
`,x=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,S=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);

  .icon {
    width: 40px;
    height: 40px;
    background: white;
    color: ${r.lunts.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }

  .text {
    font-weight: 500;
  }
`,C=o.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,w=o.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 2px solid white;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: white;
    color: ${r.lunts.primary};
    transform: translateY(-2px);
  }

  .icon {
    font-size: 1.5rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .title {
      font-weight: 600;
      font-size: 1rem;
    }

    .subtitle {
      font-size: 0.8rem;
      opacity: 0.8;
    }
  }
`,T=o.div`
  width: 100%;
  max-width: 500px;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin: 0 auto;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,E=({lang:e})=>{let{t:n}=t();return(0,c.jsxs)(l,{children:[(0,c.jsx)(u,{children:(0,c.jsxs)(d,{children:[(0,c.jsx)(f,{children:n(`products.title`)}),(0,c.jsx)(p,{children:n(`products.subtitle`)})]})}),(0,c.jsx)(m,{children:(0,c.jsx)(i,{children:(0,c.jsx)(h,{children:(0,c.jsxs)(g,{children:[(0,c.jsxs)(v,{children:[(0,c.jsx)(`h2`,{children:n(`products.lunts.title`)}),(0,c.jsx)(`h3`,{children:n(`products.lunts.subtitle`)}),(0,c.jsx)(`p`,{children:n(`products.lunts.description`)}),(0,c.jsx)(y,{children:(0,c.jsx)(b,{onClick:()=>window.location.href=`/${e}/products/lunts`,children:n(`products.lunts.download`)})}),(0,c.jsxs)(C,{children:[(0,c.jsxs)(w,{href:`https://play.google.com/store/apps/details?id=com.bitsquid.lunts`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,c.jsx)(`div`,{className:`icon`,children:(0,c.jsx)(a,{icon:[`fab`,`google-play`]})}),(0,c.jsxs)(`div`,{className:`text`,children:[(0,c.jsx)(`div`,{className:`title`,children:`Google Play`}),(0,c.jsx)(`div`,{className:`subtitle`,children:`Download for Android`})]})]}),(0,c.jsxs)(w,{href:`https://www.apple.com/app-store/`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,c.jsx)(`div`,{className:`icon`,children:(0,c.jsx)(a,{icon:[`fab`,`apple`]})}),(0,c.jsxs)(`div`,{className:`text`,children:[(0,c.jsx)(`div`,{className:`title`,children:`App Store`}),(0,c.jsx)(`div`,{className:`subtitle`,children:`Download for iOS`})]})]})]})]}),(0,c.jsxs)(_,{children:[(0,c.jsx)(T,{children:(0,c.jsx)(`iframe`,{src:(()=>{switch(e){case`es`:return`https://www.youtube.com/embed/8kgAXmBIuTY?autoplay=1&rel=0`;case`fr`:return`https://www.youtube.com/embed/eLoWZNH3YSc?autoplay=1&rel=0`;default:return`https://www.youtube.com/embed/0jSEvBaDDZ8?autoplay=1&&rel=0`}})(),title:`Lunts Presentation`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,allowFullScreen:!0})}),(0,c.jsxs)(x,{children:[(0,c.jsxs)(S,{children:[(0,c.jsx)(`div`,{className:`icon`,children:(0,c.jsx)(a,{icon:`graduation-cap`})}),(0,c.jsx)(`div`,{className:`text`,children:n(`products.lunts.features.university.title`)})]}),(0,c.jsxs)(S,{children:[(0,c.jsx)(`div`,{className:`icon`,children:(0,c.jsx)(a,{icon:`gift`})}),(0,c.jsx)(`div`,{className:`text`,children:n(`products.lunts.features.benefits.title`)})]}),(0,c.jsxs)(S,{children:[(0,c.jsx)(`div`,{className:`icon`,children:(0,c.jsx)(a,{icon:`shield-alt`})}),(0,c.jsx)(`div`,{className:`text`,children:n(`products.lunts.features.safety.title`)})]}),(0,c.jsxs)(S,{children:[(0,c.jsx)(`div`,{className:`icon`,children:(0,c.jsx)(a,{icon:`calendar`})}),(0,c.jsx)(`div`,{className:`text`,children:n(`products.lunts.features.events.title`)})]})]})]})]})})})})]})};export{E as default};