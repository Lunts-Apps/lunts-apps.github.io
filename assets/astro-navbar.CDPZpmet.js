import{r as e,t}from"./react.MgD3mx3I.js";import{i as n,o as r,t as i}from"./jsx-runtime.D0D0xG74.js";import{a,o,s}from"./global-styles.DQ2Tzk09.js";import{n as c,t as l}from"./free-brands-svg-icons.y1OFPFCd.js";var u=e(t(),1),d=i();n.add(c,l);var f=`/assets/bitsquid-logo.svg`,p=`/assets/lunts-logo.svg`,m=s.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${e=>e.$isLunts?a.lunts.primary:a.bitsquid.primary};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: ${e=>e.$isScrolled?`0 2px 20px rgba(0, 0, 0, 0.3)`:`none`};
`,h=s.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 60px;
  }
`,g=s.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    transform: scale(0.9);
    
    &:hover {
      transform: scale(0.95);
    }
  }
`,_=s.img`
  height: ${e=>e.$isLunts?`28px`:`40px`};
  width: auto;
  filter: ${e=>e.$isLunts?`brightness(0) invert(1)`:`none`};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: ${e=>e.$isLunts?`28px`:`35px`};
  }
`,v=s.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    background: ${e=>e.$isLunts?a.lunts.primary:a.bitsquid.primary};
    flex-direction: column;
    padding: 2rem 1rem 2rem 1rem;
    transform: translateX(${e=>e.$isOpen?`0`:`-100%`});
    transition: transform 0.3s ease;
    box-shadow: ${e=>e.$isOpen?`2px 0 10px rgba(0, 0, 0, 0.3)`:`none`};
    overflow-y: auto;
    z-index: 999;
    gap: 0;
  }
`,y=s.a`
  color: ${e=>e.$isLunts?`white`:a.bitsquid.contrast};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;

  ${e=>e.$isActive&&`
    background: ${e.$isLunts?a.lunts.secondaryDark:a.bitsquid.accent1};
    color: white;
  `}

  &:hover {
    background: ${e=>e.$isLunts?a.lunts.secondaryDark:a.bitsquid.accent1};
    color: white;
    transform: translateY(-2px);
  }

  &.desktop-only {
    @media (max-width: 768px) {
      display: none !important;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 1.2rem 1rem;
    font-size: 1.1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0;
    
    &:hover, &:active, &:focus {
      background: ${e=>e.$isLunts?a.lunts.secondaryDark:a.bitsquid.accent1};
      color: white;
      transform: none;
    }
    
    &:last-child {
      border-bottom: none;
    }
  }
`,b=s.div`
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,x=s.button`
  width: 100%;
  background: none;
  border: none;
  color: ${e=>e.$isLunts?`white`:a.bitsquid.contrast};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  display: none;

  ${e=>e.$isActive&&`
    background: ${e.$isLunts?a.lunts.secondaryDark:a.bitsquid.accent1};
    color: white;
  `}

  &:hover {
    background: ${e=>e.$isLunts?a.lunts.secondaryDark:a.bitsquid.accent1};
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    padding: 1.2rem 1rem;
    font-size: 1.1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0;
    
    &:hover, &:active, &:focus {
      background: ${e=>e.$isLunts?a.lunts.secondaryDark:a.bitsquid.accent1};
      color: white;
      transform: none;
    }

    .chevron {
      transition: transform 0.3s ease;
      transform: rotate(${e=>e.$isExpanded?`180deg`:`0deg`});
    }
  }
`,S=s.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${e=>e.$isLunts?a.lunts.primary:a.bitsquid.secondary};
  min-width: 250px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1rem 0;
  opacity: ${e=>+!!e.$isOpen};
  visibility: ${e=>e.$isOpen?`visible`:`hidden`};
  transform: translateY(${e=>e.$isOpen?`0`:`-10px`});
  transition: all 0.3s ease;
  z-index: 1001;

  @media (max-width: 768px) {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    margin: 0 1rem 0.5rem 1rem;
    padding: ${e=>e.$isMobileExpanded?`0.8rem 0`:`0`};
    max-height: ${e=>e.$isMobileExpanded?`200px`:`0`};
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`,C=s.a`
  display: block;
  color: ${e=>e.$isLunts?`white`:a.bitsquid.contrast};
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.$isLunts?a.lunts.secondaryDark:a.bitsquid.accent1};
    color: white;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    text-align: left;
    font-size: 1rem;
    border-radius: 6px;
    margin: 0 0.5rem;
    position: relative;
    
    &:before {
      content: '→';
      margin-right: 0.8rem;
      opacity: 0.7;
      transition: all 0.3s ease;
    }
    
    &:hover, &:active, &:focus {
      background: ${e=>e.$isLunts?a.lunts.secondaryDark:a.bitsquid.accent1};
      color: white;
      transform: translateX(4px);
      
      &:before {
        opacity: 1;
        transform: translateX(4px);
      }
    }
  }
`,w=s.div`
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 1rem;
    margin-top: 1rem;
  }
`,T=s.button`
  background: transparent;
  border: 1px solid ${e=>e.$isLunts?`white`:a.bitsquid.accent1};
  color: ${e=>e.$isLunts?`white`:a.bitsquid.contrast};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${e=>e.$isLunts?a.lunts.secondaryDark:a.bitsquid.accent1};
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 1rem;
    font-size: 1rem;
    
    &:hover, &:active, &:focus {
      background: ${e=>e.$isLunts?a.lunts.secondaryDark:a.bitsquid.accent1};
      color: white;
    }
  }
`,E=s.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${e=>e.$isLunts?a.lunts.primary:a.bitsquid.secondary};
  min-width: 150px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 0.5rem 0;
  opacity: ${e=>+!!e.$isOpen};
  visibility: ${e=>e.$isOpen?`visible`:`hidden`};
  transform: translateY(${e=>e.$isOpen?`0`:`-10px`});
  transition: all 0.3s ease;
  z-index: 1001;

  @media (max-width: 768px) {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background: transparent;
    padding: 0;
    margin-top: 0.5rem;
  }
`,D=s.button`
  display: block;
  width: 100%;
  background: none;
  border: none;
  color: ${e=>e.$isLunts?`white`:a.bitsquid.contrast};
  text-decoration: none;
  padding: 0.75rem 1rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.$isLunts?a.lunts.secondaryDark:a.bitsquid.accent1};
    color: white;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 0.8rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    
    &:hover, &:active, &:focus {
      background: ${e=>e.$isLunts?a.lunts.secondaryDark:a.bitsquid.accent1};
      color: white;
    }
    
    &:last-child {
      border-bottom: none;
    }
  }
`,O=s.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${e=>e.$isOpen?`block`:`none`};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`,k=s.button`
  display: none;
  background: none;
  border: none;
  color: ${e=>e.$isLunts?`white`:a.bitsquid.contrast};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`,A=s.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0 2rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 1rem;
  }
`,j=s.img`
  height: ${e=>e.$isLunts?`32px`:`45px`};
  width: auto;
  filter: ${e=>e.$isLunts?`brightness(0) invert(1)`:`none`};
  transition: all 0.3s ease;
`,M=({lang:e,currentPath:t})=>{let{t:n,i18n:i,ready:a}=r(),[s,c]=(0,u.useState)(a),[l,M]=(0,u.useState)(!1),[N,P]=(0,u.useState)(!1),[F,I]=(0,u.useState)(!1),[L,R]=(0,u.useState)(!1),[z,B]=(0,u.useState)(!1),V=t.includes(`/products/lunts`);if((0,u.useEffect)(()=>{a&&!s&&c(!0)},[a,s]),(0,u.useEffect)(()=>{if(i.isInitialized)c(!0);else{let e=()=>c(!0);return i.on(`initialized`,e),()=>{i.off(`initialized`,e)}}},[i]),(0,u.useEffect)(()=>{let e=()=>{M(window.scrollY>50)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]),!s)return(0,d.jsx)(m,{$isLunts:V,$isScrolled:!1,style:{visibility:`hidden`},children:(0,d.jsx)(h,{children:(0,d.jsx)(`div`,{style:{height:70}})})});let H=e=>{let n=t.replace(/^\/[a-z]{2}/,``);window.location.href=`/${e}${n}`},U=e=>{switch(e){case`en`:return n(`language.english`);case`es`:return n(`language.spanish`);case`fr`:return n(`language.french`);default:return n(`language.english`)}},W=e=>{let n=t.replace(/^\/[a-z]{2}/,``);return n===e||e===`/`&&n===``},G=()=>{P(!N)},K=()=>{P(!1),B(!1)},q=()=>{B(!z)},J=()=>{window.scrollTo({top:0,behavior:`smooth`})};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(O,{$isOpen:N,onClick:K}),(0,d.jsx)(m,{$isLunts:V,$isScrolled:l,children:(0,d.jsxs)(h,{children:[(0,d.jsx)(g,{href:`/${e}`,$isLunts:V,children:V?(0,d.jsx)(_,{src:p,alt:`Lunts`,$isLunts:V,onClick:J}):(0,d.jsx)(_,{src:f,alt:`Bitsquid`,$isLunts:V,onClick:J})}),(0,d.jsxs)(v,{$isOpen:N,$isLunts:V,children:[(0,d.jsx)(A,{children:V?(0,d.jsx)(j,{src:p,alt:`Lunts`,$isLunts:V}):(0,d.jsx)(j,{src:f,alt:`Bitsquid`,$isLunts:V})}),(0,d.jsx)(y,{href:`/${e}`,$isActive:W(`/`),$isLunts:V,onClick:()=>{K(),J()},children:n(`nav.home`)}),(0,d.jsxs)(b,{onMouseEnter:()=>I(!0),onMouseLeave:()=>I(!1),children:[(0,d.jsxs)(y,{href:`/${e}/products`,$isActive:W(`/products`),$isLunts:V,onClick:()=>{K(),J()},style:{display:`block`},className:`desktop-only`,children:[n(`nav.products`),` `,(0,d.jsx)(o,{icon:`chevron-down`})]}),(0,d.jsxs)(x,{$isActive:W(`/products`),$isLunts:V,$isExpanded:z,onClick:q,children:[n(`nav.products`),(0,d.jsx)(o,{icon:`chevron-down`,className:`chevron`})]}),(0,d.jsx)(S,{$isOpen:F,$isLunts:V,$isMobileExpanded:z,children:(0,d.jsxs)(C,{href:`/${e}/products/lunts`,$isLunts:V,onClick:()=>{K(),J()},children:[`Lunts - `,n(`products.lunts.subtitle`)]})})]}),(0,d.jsx)(y,{href:`/${e}/jobs`,$isActive:W(`/jobs`),$isLunts:V,onClick:()=>{K(),J()},children:n(`nav.jobs`)}),(0,d.jsx)(y,{href:`/${e}/contact`,$isActive:W(`/contact`),$isLunts:V,onClick:()=>{K(),J()},children:n(`nav.contact`)}),(0,d.jsxs)(w,{children:[(0,d.jsxs)(T,{onClick:()=>R(!L),$isLunts:V,children:[U(e||`en`),` `,(0,d.jsx)(o,{icon:`globe`})]}),(0,d.jsxs)(E,{$isOpen:L,$isLunts:V,children:[(0,d.jsx)(D,{onClick:()=>{H(`en`),R(!1),K()},$isLunts:V,children:n(`language.english`)}),(0,d.jsx)(D,{onClick:()=>{H(`es`),R(!1),K()},$isLunts:V,children:n(`language.spanish`)}),(0,d.jsx)(D,{onClick:()=>{H(`fr`),R(!1),K()},$isLunts:V,children:n(`language.french`)})]})]})]}),(0,d.jsx)(k,{onClick:G,$isLunts:V,children:(0,d.jsx)(o,{icon:N?`times`:`bars`})})]})})]})};export{M as default};