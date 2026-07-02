import{r as e,t}from"./react.MgD3mx3I.js";import{o as n,t as r}from"./jsx-runtime.D0D0xG74.js";import{a as i,o as a,s as o}from"./global-styles.DQ2Tzk09.js";import"./fontawesome-icons.DK8JdbCl.js";var s=e(t(),1),c=r(),l=`/assets/bitsquid-logo.svg`,u=`/assets/lunts-logo.svg`,d=o.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${e=>e.$isLunts?i.lunts.primary:i.bitsquid.primary};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: ${e=>e.$isScrolled?`0 2px 20px rgba(0, 0, 0, 0.3)`:`none`};
`,f=o.div`
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
`,p=o.a`
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
`,m=o.img`
  height: ${e=>e.$isLunts?`28px`:`40px`};
  width: auto;
  filter: ${e=>e.$isLunts?`brightness(0) invert(1)`:`none`};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: ${e=>e.$isLunts?`28px`:`35px`};
  }
`,h=o.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    background: ${e=>e.$isLunts?i.lunts.primary:i.bitsquid.primary};
    flex-direction: column;
    padding: 2rem 1rem 2rem 1rem;
    transform: translateX(${e=>e.$isOpen?`0`:`-100%`});
    transition: transform 0.3s ease;
    box-shadow: ${e=>e.$isOpen?`2px 0 10px rgba(0, 0, 0, 0.3)`:`none`};
    overflow-y: auto;
    z-index: 999;
    gap: 0;
  }
`,g=o.a`
  color: ${e=>e.$isLunts?`white`:i.bitsquid.contrast};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;

  ${e=>e.$isActive&&`
    background: ${e.$isLunts?i.lunts.secondaryDark:i.bitsquid.accent1};
    color: white;
  `}

  &:hover {
    background: ${e=>e.$isLunts?i.lunts.secondaryDark:i.bitsquid.accent1};
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
      background: ${e=>e.$isLunts?i.lunts.secondaryDark:i.bitsquid.accent1};
      color: white;
      transform: none;
    }
    
    &:last-child {
      border-bottom: none;
    }
  }
`,_=o.div`
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,v=o.button`
  width: 100%;
  background: none;
  border: none;
  color: ${e=>e.$isLunts?`white`:i.bitsquid.contrast};
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
    background: ${e.$isLunts?i.lunts.secondaryDark:i.bitsquid.accent1};
    color: white;
  `}

  &:hover {
    background: ${e=>e.$isLunts?i.lunts.secondaryDark:i.bitsquid.accent1};
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
      background: ${e=>e.$isLunts?i.lunts.secondaryDark:i.bitsquid.accent1};
      color: white;
      transform: none;
    }

    .chevron {
      transition: transform 0.3s ease;
      transform: rotate(${e=>e.$isExpanded?`180deg`:`0deg`});
    }
  }
`,y=o.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${e=>e.$isLunts?i.lunts.primary:i.bitsquid.secondary};
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
`,b=o.a`
  display: block;
  color: ${e=>e.$isLunts?`white`:i.bitsquid.contrast};
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.$isLunts?i.lunts.secondaryDark:i.bitsquid.accent1};
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
      background: ${e=>e.$isLunts?i.lunts.secondaryDark:i.bitsquid.accent1};
      color: white;
      transform: translateX(4px);
      
      &:before {
        opacity: 1;
        transform: translateX(4px);
      }
    }
  }
`,x=o.div`
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 1rem;
    margin-top: 1rem;
  }
`,S=o.button`
  background: transparent;
  border: 1px solid ${e=>e.$isLunts?`white`:i.bitsquid.accent1};
  color: ${e=>e.$isLunts?`white`:i.bitsquid.contrast};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${e=>e.$isLunts?i.lunts.secondaryDark:i.bitsquid.accent1};
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 1rem;
    font-size: 1rem;
    
    &:hover, &:active, &:focus {
      background: ${e=>e.$isLunts?i.lunts.secondaryDark:i.bitsquid.accent1};
      color: white;
    }
  }
`,C=o.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${e=>e.$isLunts?i.lunts.primary:i.bitsquid.secondary};
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
`,w=o.button`
  display: block;
  width: 100%;
  background: none;
  border: none;
  color: ${e=>e.$isLunts?`white`:i.bitsquid.contrast};
  text-decoration: none;
  padding: 0.75rem 1rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.$isLunts?i.lunts.secondaryDark:i.bitsquid.accent1};
    color: white;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 0.8rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    
    &:hover, &:active, &:focus {
      background: ${e=>e.$isLunts?i.lunts.secondaryDark:i.bitsquid.accent1};
      color: white;
    }
    
    &:last-child {
      border-bottom: none;
    }
  }
`,T=o.div`
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
`,E=o.button`
  display: none;
  background: none;
  border: none;
  color: ${e=>e.$isLunts?`white`:i.bitsquid.contrast};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`,D=o.div`
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
`,O=o.img`
  height: ${e=>e.$isLunts?`32px`:`45px`};
  width: auto;
  filter: ${e=>e.$isLunts?`brightness(0) invert(1)`:`none`};
  transition: all 0.3s ease;
`,k=({lang:e,currentPath:t})=>{let{t:r,i18n:i,ready:o}=n(),[k,A]=(0,s.useState)(o),[j,M]=(0,s.useState)(!1),[N,P]=(0,s.useState)(!1),[F,I]=(0,s.useState)(!1),[L,R]=(0,s.useState)(!1),[z,B]=(0,s.useState)(!1),V=t.includes(`/products/lunts`);if((0,s.useEffect)(()=>{o&&!k&&A(!0)},[o,k]),(0,s.useEffect)(()=>{if(i.isInitialized)A(!0);else{let e=()=>A(!0);return i.on(`initialized`,e),()=>{i.off(`initialized`,e)}}},[i]),(0,s.useEffect)(()=>{let e=()=>{M(window.scrollY>50)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]),!k)return(0,c.jsx)(d,{$isLunts:V,$isScrolled:!1,style:{visibility:`hidden`},children:(0,c.jsx)(f,{children:(0,c.jsx)(`div`,{style:{height:70}})})});let H=e=>{let n=t.replace(/^\/[a-z]{2}/,``);window.location.href=`/${e}${n}`},U=e=>{switch(e){case`en`:return r(`language.english`);case`es`:return r(`language.spanish`);case`fr`:return r(`language.french`);default:return r(`language.english`)}},W=e=>{let n=t.replace(/^\/[a-z]{2}/,``);return n===e||e===`/`&&n===``},G=()=>{P(!N)},K=()=>{P(!1),B(!1)},q=()=>{B(!z)},J=()=>{window.scrollTo({top:0,behavior:`smooth`})};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(T,{$isOpen:N,onClick:K}),(0,c.jsx)(d,{$isLunts:V,$isScrolled:j,children:(0,c.jsxs)(f,{children:[(0,c.jsx)(p,{href:`/${e}`,$isLunts:V,children:V?(0,c.jsx)(m,{src:u,alt:`Lunts`,$isLunts:V,onClick:J}):(0,c.jsx)(m,{src:l,alt:`Bitsquid`,$isLunts:V,onClick:J})}),(0,c.jsxs)(h,{$isOpen:N,$isLunts:V,children:[(0,c.jsx)(D,{children:V?(0,c.jsx)(O,{src:u,alt:`Lunts`,$isLunts:V}):(0,c.jsx)(O,{src:l,alt:`Bitsquid`,$isLunts:V})}),(0,c.jsx)(g,{href:`/${e}`,$isActive:W(`/`),$isLunts:V,onClick:()=>{K(),J()},children:r(`nav.home`)}),(0,c.jsxs)(_,{onMouseEnter:()=>I(!0),onMouseLeave:()=>I(!1),children:[(0,c.jsxs)(g,{href:`/${e}/products`,$isActive:W(`/products`),$isLunts:V,onClick:()=>{K(),J()},style:{display:`block`},className:`desktop-only`,children:[r(`nav.products`),` `,(0,c.jsx)(a,{icon:`chevron-down`})]}),(0,c.jsxs)(v,{$isActive:W(`/products`),$isLunts:V,$isExpanded:z,onClick:q,children:[r(`nav.products`),(0,c.jsx)(a,{icon:`chevron-down`,className:`chevron`})]}),(0,c.jsx)(y,{$isOpen:F,$isLunts:V,$isMobileExpanded:z,children:(0,c.jsxs)(b,{href:`/${e}/products/lunts`,$isLunts:V,onClick:()=>{K(),J()},children:[`Lunts - `,r(`products.lunts.subtitle`)]})})]}),(0,c.jsx)(g,{href:`/${e}/jobs`,$isActive:W(`/jobs`),$isLunts:V,onClick:()=>{K(),J()},children:r(`nav.jobs`)}),(0,c.jsx)(g,{href:`/${e}/contact`,$isActive:W(`/contact`),$isLunts:V,onClick:()=>{K(),J()},children:r(`nav.contact`)}),(0,c.jsxs)(x,{children:[(0,c.jsxs)(S,{onClick:()=>R(!L),$isLunts:V,children:[U(e||`en`),` `,(0,c.jsx)(a,{icon:`globe`})]}),(0,c.jsxs)(C,{$isOpen:L,$isLunts:V,children:[(0,c.jsx)(w,{onClick:()=>{H(`en`),R(!1),K()},$isLunts:V,children:r(`language.english`)}),(0,c.jsx)(w,{onClick:()=>{H(`es`),R(!1),K()},$isLunts:V,children:r(`language.spanish`)}),(0,c.jsx)(w,{onClick:()=>{H(`fr`),R(!1),K()},$isLunts:V,children:r(`language.french`)})]})]})]}),(0,c.jsx)(E,{onClick:G,$isLunts:V,children:(0,c.jsx)(a,{icon:N?`times`:`bars`})})]})})]})};export{k as default};