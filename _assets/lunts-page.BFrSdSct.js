import{t as e}from"./react.MgD3mx3I.js";import{o as t,t as n}from"./jsx-runtime.D0D0xG74.js";import{a as r,n as i,o as a,s as o}from"./global-styles.DQ2Tzk09.js";e();var s=n(),c=o.div`
  min-height: 100vh;
  padding-top: 70px;
  background: ${r.lunts.background};
  color: ${r.lunts.text};
`,l=o.section`
  background: linear-gradient(135deg, ${r.lunts.primary} 0%, ${r.lunts.secondary} 100%);
  padding: 5rem 0;
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
`,u=o(i)`
  position: relative;
  z-index: 2;
  text-align: center;
`,d=o.div`
  width: 120px;
  height: 120px;
  background: ${r.lunts.primary};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  img {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    
    img {
      width: 70px;
      height: 70px;
    }
  }
`,f=o.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,p=o.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`,m=o.p`
  font-size: 1.3rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto 3rem;
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`,h=o.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`,g=o.div`
  width: 100%;
  max-width: 600px;
  aspect-ratio: 16/9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255, 255, 255, 0.3);
  margin: 2rem auto 0;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 1.5rem auto 0;
  }
`,_=o.section`
  padding: 5rem 0;
  background: white;
`,v=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`,y=o.div`
  text-align: center;
  padding: 2rem;
  border-radius: 16px;
  background: ${r.lunts.background};
  border: 2px solid ${r.lunts.accent};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(255, 111, 74, 0.2);
  }
`,b=o.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${r.lunts.primary}, ${r.lunts.secondary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: white;
`,x=o.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${r.lunts.text};
`,S=o.p`
  color: ${r.lunts.text};
  line-height: 1.6;
  opacity: 0.8;
`,C=o.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, ${r.lunts.secondary} 0%, ${r.lunts.secondaryDark} 100%);
  color: white;
  text-align: center;
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
`,w=o.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,T=o.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 3rem 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`,E=o.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: white;
  color: ${r.lunts.secondary};
  text-decoration: none;
  padding: 1.5rem 2rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  min-width: 200px;
  flex: 0 0 auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;

    .title {
      font-weight: 700;
      font-size: 1.2rem;
      white-space: nowrap;
    }

    .subtitle {
      font-size: 0.9rem;
      opacity: 0.7;
      white-space: nowrap;
    }
  }

  @media (max-width: 768px) {
    width: 240px;
    min-width: 240px;
    max-width: 240px;
    padding: 1.2rem 1.5rem;
    justify-content: flex-start;

    .icon {
      font-size: 1.8rem;
    }

    .text {
      .title {
        font-size: 1.1rem;
      }

      .subtitle {
        font-size: 0.85rem;
      }
    }
  }
`,D=o.section`
  padding: 3rem 0;
  background: ${r.lunts.background};
  text-align: center;
`,O=o.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`,k=o.a`
  color: ${r.lunts.primary};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 2px solid ${r.lunts.primary};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${r.lunts.primary};
    color: white;
  }
`,A=({lang:e})=>{let{t:n}=t(),o=()=>{switch(e){case`es`:return`https://www.youtube.com/embed/8kgAXmBIuTY?autoplay=1&rel=0`;case`fr`:return`https://www.youtube.com/embed/eLoWZNH3YSc?autoplay=1&rel=0`;default:return`https://www.youtube.com/embed/0jSEvBaDDZ8?autoplay=1&rel=0`}},A=()=>{window.scrollTo({top:0,behavior:`smooth`})};return(0,s.jsxs)(c,{children:[(0,s.jsx)(l,{children:(0,s.jsxs)(u,{children:[(0,s.jsx)(d,{children:(0,s.jsx)(`img`,{src:`/assets/lunts-iso-logo.svg`,alt:`Lunts`})}),(0,s.jsx)(f,{children:n(`products.lunts.title`)}),(0,s.jsx)(p,{children:n(`products.lunts.subtitle`)}),(0,s.jsx)(m,{children:n(`products.lunts.description`)}),(0,s.jsx)(g,{children:(0,s.jsx)(`iframe`,{src:o(),title:`Lunts Presentation`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,allowFullScreen:!0})}),(0,s.jsxs)(h,{style:{marginTop:`3rem`},children:[(0,s.jsxs)(E,{href:`https://play.google.com/store/apps/details?id=com.bitsquid.lunts`,target:`_blank`,rel:`noopener noreferrer`,style:{background:`white`,color:r.lunts.primary,border:`2px solid ${r.lunts.primary}`},children:[(0,s.jsx)(`div`,{className:`icon`,children:(0,s.jsx)(a,{icon:[`fab`,`google-play`]})}),(0,s.jsxs)(`div`,{className:`text`,children:[(0,s.jsx)(`div`,{className:`title`,children:n(`products.lunts.downloadSection.googlePlay`)}),(0,s.jsx)(`div`,{className:`subtitle`,children:n(`products.lunts.downloadSection.downloadAndroid`)})]})]}),(0,s.jsxs)(E,{href:`https://www.apple.com/app-store/`,target:`_blank`,rel:`noopener noreferrer`,style:{background:`white`,color:r.lunts.primary,border:`2px solid ${r.lunts.primary}`},children:[(0,s.jsx)(`div`,{className:`icon`,children:(0,s.jsx)(a,{icon:[`fab`,`apple`]})}),(0,s.jsxs)(`div`,{className:`text`,children:[(0,s.jsx)(`div`,{className:`title`,children:n(`products.lunts.downloadSection.appStore`)}),(0,s.jsx)(`div`,{className:`subtitle`,children:n(`products.lunts.downloadSection.downloadIOS`)})]})]})]})]})}),(0,s.jsx)(_,{children:(0,s.jsxs)(i,{children:[(0,s.jsx)(`h2`,{style:{fontSize:`2.5rem`,textAlign:`center`,marginBottom:`1rem`,color:r.lunts.text},children:n(`products.lunts.features.title`)}),(0,s.jsxs)(v,{children:[(0,s.jsxs)(y,{children:[(0,s.jsx)(b,{children:(0,s.jsx)(a,{icon:`graduation-cap`})}),(0,s.jsx)(x,{children:n(`products.lunts.features.university.title`)}),(0,s.jsx)(S,{children:n(`products.lunts.features.university.description`)})]}),(0,s.jsxs)(y,{children:[(0,s.jsx)(b,{children:(0,s.jsx)(a,{icon:`gift`})}),(0,s.jsx)(x,{children:n(`products.lunts.features.benefits.title`)}),(0,s.jsx)(S,{children:n(`products.lunts.features.benefits.description`)})]}),(0,s.jsxs)(y,{children:[(0,s.jsx)(b,{children:(0,s.jsx)(a,{icon:`shield-alt`})}),(0,s.jsx)(x,{children:n(`products.lunts.features.safety.title`)}),(0,s.jsx)(S,{children:n(`products.lunts.features.safety.description`)})]}),(0,s.jsxs)(y,{children:[(0,s.jsx)(b,{children:(0,s.jsx)(a,{icon:`calendar`})}),(0,s.jsx)(x,{children:n(`products.lunts.features.events.title`)}),(0,s.jsx)(S,{children:n(`products.lunts.features.events.description`)})]})]})]})}),(0,s.jsx)(C,{children:(0,s.jsxs)(i,{style:{position:`relative`,zIndex:2},children:[(0,s.jsx)(w,{children:n(`products.lunts.downloadSection.title`)}),(0,s.jsx)(`p`,{style:{fontSize:`1.2rem`,marginBottom:`2rem`,opacity:.9},children:n(`products.lunts.downloadSection.description`)}),(0,s.jsxs)(T,{children:[(0,s.jsxs)(E,{href:`https://play.google.com/store/apps/details?id=com.bitsquid.lunts`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,s.jsx)(`div`,{className:`icon`,children:(0,s.jsx)(a,{icon:[`fab`,`google-play`]})}),(0,s.jsxs)(`div`,{className:`text`,children:[(0,s.jsx)(`div`,{className:`title`,children:n(`products.lunts.downloadSection.googlePlay`)}),(0,s.jsx)(`div`,{className:`subtitle`,children:n(`products.lunts.downloadSection.downloadAndroid`)})]})]}),(0,s.jsxs)(E,{href:`https://www.apple.com/app-store/`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,s.jsx)(`div`,{className:`icon`,children:(0,s.jsx)(a,{icon:[`fab`,`apple`]})}),(0,s.jsxs)(`div`,{className:`text`,children:[(0,s.jsx)(`div`,{className:`title`,children:n(`products.lunts.downloadSection.appStore`)}),(0,s.jsx)(`div`,{className:`subtitle`,children:n(`products.lunts.downloadSection.downloadIOS`)})]})]})]})]})}),(0,s.jsx)(D,{children:(0,s.jsxs)(i,{children:[(0,s.jsx)(`h3`,{style:{fontSize:`1.5rem`,marginBottom:`2rem`,color:r.lunts.text},children:n(`products.lunts.legalSection.title`)}),(0,s.jsxs)(O,{children:[(0,s.jsx)(k,{href:`/${e}/products/lunts/privacy-policy`,onClick:A,children:n(`products.lunts.privacyPolicy`)}),(0,s.jsx)(k,{href:`/${e}/products/lunts/terms-and-conditions`,onClick:A,children:n(`products.lunts.termsConditions`)})]})]})})]})};export{A as default};