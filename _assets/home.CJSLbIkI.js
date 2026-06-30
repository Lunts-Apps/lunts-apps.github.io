import{r as e,t}from"./react.MgD3mx3I.js";import{o as n,t as r}from"./jsx-runtime.D0D0xG74.js";import{a as i,i as a,n as o,o as s,s as c,t as l}from"./global-styles.DQ2Tzk09.js";var u=e(t(),1),d=r(),f=c.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`,p=c.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${e=>e.$currentIndex*100}%);
`,m=c.div`
  min-width: 100%;
  height: 400px;
  background: ${e=>e.$background};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>e.$isBanner?`transparent`:`rgba(0, 0, 0, 0.2)`};
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 250px;
    padding: 1rem;

    ${e=>e.$isBanner&&`
      background-size: contain;
      background-position: center;
      background-color: #000;
    `}
  }
`,h=c.div`
  text-align: center;
  color: white;
  position: relative;
  z-index: 2;
  max-width: 600px;
`,g=c.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  ${e=>e.$isBanner&&`
    font-size: 4rem;
    font-weight: 300;
    letter-spacing: 0.2em;
    text-transform: lowercase;
    margin-bottom: 0;
    filter: blur(1px);
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6);
    animation: glow 3s ease-in-out infinite alternate;
    
    @keyframes glow {
      from {
        filter: blur(1px);
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6);
      }
      to {
        filter: blur(2px);
        text-shadow: 0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 0.8);
      }
    }
  `}

  @media (max-width: 768px) {
    font-size: ${e=>e.$isBanner?`3rem`:`2rem`};
    margin-bottom: 1rem;
  }
`,_=c.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`,v=c(l)`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 25;
  touch-action: manipulation;
  min-height: 44px;
  min-width: 120px;
  cursor: pointer;

  &:hover {
    background: white;
    color: ${i.bitsquid.primary};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    background: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    min-height: 48px;
    min-width: 140px;
    font-size: 1rem;
    padding: 12px 20px;
    border-width: 2px;
    z-index: 30;
    
    &:hover {
      transform: none;
    }
    
    &:active {
      background: white;
      color: ${i.bitsquid.primary};
      transform: scale(0.98);
    }
  }
`,y=c.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: 5;
  transform: translateY(-50%);
  pointer-events: none;

  @media (max-width: 768px) {
    top: auto;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    transform: none;
    justify-content: space-between;
  }
`,b=c.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  pointer-events: auto;

  &:hover {
    background: white;
    color: ${i.bitsquid.primary};
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
    border: 1px solid white;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`,x=c.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.8rem;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }
`,S=c.button`
  width: ${e=>e.$isActive?`24px`:`8px`};
  height: 8px;
  border-radius: 4px;
  border: none;
  background: ${e=>e.$isActive?`white`:`rgba(255, 255, 255, 0.4)`};
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    background: white;
    transform: scale(1.1);
    
    &::before {
      transform: translateX(100%);
    }
  }

  ${e=>e.$isActive&&`
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
  `}
`,C=({items:e,autoPlay:t=!0,autoPlayInterval:n=1e4})=>{let[r,i]=(0,u.useState)(0);(0,u.useEffect)(()=>{if(!t)return;let r=setInterval(()=>{i(t=>(t+1)%e.length)},n);return()=>clearInterval(r)},[t,n,e.length]);let a=()=>{i(t=>(t-1+e.length)%e.length)},o=()=>{i(t=>(t+1)%e.length)},c=e=>{i(e)},l=(e,t)=>{t.preventDefault(),t.stopPropagation(),e(),window.scrollTo({top:0,behavior:`smooth`})};return(0,d.jsxs)(f,{children:[(0,d.jsx)(p,{$currentIndex:r,children:e.map(e=>(0,d.jsx)(m,{$background:e.background,$isBanner:e.isBanner,children:(0,d.jsxs)(h,{children:[(0,d.jsx)(g,{$isBanner:e.isBanner,children:e.title}),!e.isBanner&&(0,d.jsx)(_,{children:e.description}),!e.isBanner&&(0,d.jsx)(v,{onClick:t=>l(e.buttonAction,t),onTouchEnd:t=>l(e.buttonAction,t),children:e.buttonText})]})},e.id))}),(0,d.jsxs)(y,{children:[(0,d.jsx)(b,{onClick:a,children:(0,d.jsx)(s,{icon:`chevron-left`})}),(0,d.jsx)(b,{onClick:o,children:(0,d.jsx)(s,{icon:`chevron-right`})})]}),(0,d.jsx)(x,{children:e.map((e,t)=>(0,d.jsx)(S,{$isActive:t===r,onClick:()=>c(t)},t))})]})},w=c.div`
  min-height: 100vh;
  padding-top: 70px;
`,T=c.section`
  background: linear-gradient(135deg, #000000 0%, ${i.bitsquid.primary} 30%, ${i.bitsquid.secondary} 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

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
`,E=c(o)`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`,D=c.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: ${i.bitsquid.contrast};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,O=c.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: ${i.bitsquid.neutral};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`,k=c.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: ${i.bitsquid.neutral};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`,A=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 2rem 0;
  }
`,j=c.div`
  background: rgba(155, 93, 229, 0.1);
  border: 1px solid rgba(155, 93, 229, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(155, 93, 229, 0.2);
  }
`,M=c.div`
  width: 50px;
  height: 50px;
  background: ${i.bitsquid.accent1};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.2rem;
  color: white;
`,N=c.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${i.bitsquid.contrast};
`,P=c.p`
  font-size: 0.9rem;
  color: ${i.bitsquid.neutral};
  line-height: 1.5;
`,F=c.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 2rem 0 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 2rem;
    margin: 1.5rem 0 2rem;
  }
`,I=c.div`
  text-align: center;
`,L=c.div`
  font-size: 2rem;
  font-weight: 800;
  color: ${i.bitsquid.accent1};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,R=c.div`
  font-size: 0.9rem;
  color: ${i.bitsquid.neutral};
  text-transform: uppercase;
  letter-spacing: 1px;
`,z=c.section`
  padding: 4rem 0;
  background: ${i.bitsquid.secondary};
`,B=c.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, ${i.bitsquid.secondary} 0%, ${i.bitsquid.primary} 100%);
`,V=c(o)`
  text-align: center;
  max-width: 800px;
`,H=c.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${i.bitsquid.neutral};
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,U=c.section`
  padding: 4rem 0;
  background: ${i.bitsquid.primary};
  position: relative;
  overflow: hidden;

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
`,W=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  position: relative;
  z-index: 1;
`,G=c.div`
  background: ${i.bitsquid.secondary};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(155, 93, 229, 0.2);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(155, 93, 229, 0.3);
  }
`,K=c.div`
  width: 80px;
  height: 80px;
  background: ${i.bitsquid.accent1};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: white;
`,q=c.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${i.bitsquid.contrast};
`,J=c.p`
  color: ${i.bitsquid.neutral};
  line-height: 1.6;
`,Y=({lang:e})=>{let{t}=n(),r=e=>{window.location.href=e,window.scrollTo({top:0,behavior:`smooth`})},c=[{id:1,title:``,description:``,buttonText:``,buttonAction:()=>r(`/${e}/products`),background:`url(/assets/bitsquid-banner.png)`,isBanner:!0},{id:2,title:t(`home.carousel.bitsquid.title`),description:t(`home.carousel.bitsquid.description`),buttonText:t(`home.carousel.bitsquid.button`),buttonAction:()=>r(`/${e}/products`),background:`linear-gradient(135deg, ${i.bitsquid.primary}, #1a1a1a)`},{id:3,title:t(`home.carousel.lunts.title`),description:t(`home.carousel.lunts.description`),buttonText:t(`home.carousel.lunts.button`),buttonAction:()=>r(`/${e}/products/lunts`),background:`linear-gradient(135deg, ${i.lunts.primary}, ${i.lunts.secondary})`},{id:4,title:t(`home.carousel.technology.title`),description:t(`home.carousel.technology.description`),buttonText:t(`home.carousel.technology.button`),buttonAction:()=>r(`/${e}/products`),background:`linear-gradient(135deg, ${i.bitsquid.secondary}, ${i.bitsquid.accent1})`}];return(0,d.jsxs)(w,{children:[(0,d.jsx)(T,{children:(0,d.jsxs)(E,{children:[(0,d.jsx)(D,{children:t(`home.welcome`)}),(0,d.jsx)(O,{children:t(`home.subtitle`)}),(0,d.jsx)(k,{children:t(`home.description`)}),(0,d.jsxs)(A,{children:[(0,d.jsxs)(j,{onClick:()=>r(`/${e}/products/lunts`),children:[(0,d.jsx)(M,{children:(0,d.jsx)(s,{icon:`mobile-alt`})}),(0,d.jsx)(N,{children:t(`home.sections.highlights.mobileApps.title`)}),(0,d.jsx)(P,{children:t(`home.sections.highlights.mobileApps.description`)})]}),(0,d.jsxs)(j,{onClick:()=>r(`/${e}/products/lunts`),children:[(0,d.jsx)(M,{children:(0,d.jsx)(s,{icon:`heart`})}),(0,d.jsx)(N,{children:t(`home.sections.highlights.luntsDating.title`)}),(0,d.jsx)(P,{children:t(`home.sections.highlights.luntsDating.description`)})]}),(0,d.jsxs)(j,{onClick:()=>r(`/${e}/products/lunts`),children:[(0,d.jsx)(M,{children:(0,d.jsx)(s,{icon:`globe`})}),(0,d.jsx)(N,{children:t(`home.sections.highlights.globalReach.title`)}),(0,d.jsx)(P,{children:t(`home.sections.highlights.globalReach.description`)})]})]}),(0,d.jsxs)(F,{children:[(0,d.jsxs)(I,{children:[(0,d.jsx)(L,{children:`2023`}),(0,d.jsx)(R,{children:t(`home.stats.founded`)})]}),(0,d.jsxs)(I,{children:[(0,d.jsx)(L,{children:`1+`}),(0,d.jsx)(R,{children:t(`home.stats.applications`)})]}),(0,d.jsxs)(I,{children:[(0,d.jsx)(L,{children:`100%`}),(0,d.jsx)(R,{children:t(`home.stats.innovation`)})]})]}),(0,d.jsx)(l,{onClick:()=>r(`/${e}/products`),children:t(`home.cta`)})]})}),(0,d.jsx)(z,{children:(0,d.jsxs)(o,{children:[(0,d.jsx)(a,{children:t(`home.sections.innovation.title`)}),(0,d.jsx)(C,{items:c})]})}),(0,d.jsx)(B,{children:(0,d.jsxs)(V,{children:[(0,d.jsx)(a,{children:t(`home.sections.about.title`)}),(0,d.jsx)(H,{children:t(`home.sections.about.description1`)}),(0,d.jsx)(H,{children:t(`home.sections.about.description2`)})]})}),(0,d.jsx)(U,{children:(0,d.jsxs)(o,{style:{position:`relative`,zIndex:1},children:[(0,d.jsx)(a,{children:t(`home.sections.whyChoose.title`)}),(0,d.jsxs)(W,{children:[(0,d.jsxs)(G,{children:[(0,d.jsx)(K,{children:(0,d.jsx)(s,{icon:`rocket`})}),(0,d.jsx)(q,{children:t(`home.sections.whyChoose.features.innovation.title`)}),(0,d.jsx)(J,{children:t(`home.sections.whyChoose.features.innovation.description`)})]}),(0,d.jsxs)(G,{children:[(0,d.jsx)(K,{children:(0,d.jsx)(s,{icon:`users`})}),(0,d.jsx)(q,{children:t(`home.sections.whyChoose.features.userCentered.title`)}),(0,d.jsx)(J,{children:t(`home.sections.whyChoose.features.userCentered.description`)})]}),(0,d.jsxs)(G,{children:[(0,d.jsx)(K,{children:(0,d.jsx)(s,{icon:`shield-alt`})}),(0,d.jsx)(q,{children:t(`home.sections.whyChoose.features.security.title`)}),(0,d.jsx)(J,{children:t(`home.sections.whyChoose.features.security.description`)})]})]})]})})]})};export{Y as default};