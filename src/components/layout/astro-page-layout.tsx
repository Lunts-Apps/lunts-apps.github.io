import React from 'react';
import '../../i18n';
import { GlobalStyle } from '../../styles/global-styles';
import AstroNavbar from './astro-navbar';
import AstroFooter from './astro-footer';

import '../../utils/fontawesome-icons';


interface AstroPageLayoutProps {
  lang: string;
  currentPath: string;
  children: React.ReactNode;
}

const AstroPageLayout: React.FC<AstroPageLayoutProps> = ({ lang, currentPath, children }) => {
  return (
    <>
      <GlobalStyle />
      <AstroNavbar lang={lang} currentPath={currentPath} />
      {children}
      <AstroFooter lang={lang} currentPath={currentPath} />
    </>
  );
};

export default AstroPageLayout;
