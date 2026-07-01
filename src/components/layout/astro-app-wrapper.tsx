import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../../i18n';
import { GlobalStyle } from '../../styles/global-styles';

// Add all FontAwesome icons to the library
library.add(fas, fab);

interface AstroAppWrapperProps {
  lang: string;
  currentPath: string;
  children: React.ReactNode;
}

const AstroAppWrapper: React.FC<AstroAppWrapperProps> = ({ lang, currentPath, children }) => {
  const { i18n, ready } = useTranslation();
  const [isReady, setIsReady] = useState(ready);

  useEffect(() => {
    const supportedLanguages = ['en', 'es', 'fr'];
    
    const setLanguage = async () => {
      if (lang && supportedLanguages.includes(lang)) {
        if (i18n.language !== lang) {
          await i18n.changeLanguage(lang);
        }
      }
      setIsReady(true);
    };

    if (i18n.isInitialized) {
      setLanguage();
    } else {
      i18n.on('initialized', setLanguage);
    }

    const handleLanguageChanged = () => {
      setIsReady(true);
    };
    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('initialized', setLanguage);
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [lang, i18n]);

  if (!isReady) {
    return (
      <>
        <GlobalStyle />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', 
          backgroundColor: '#0B0C10',
          color: '#F9F9F9',
          fontFamily: "'League Spartan', sans-serif",
          fontSize: '1.2rem'
        }}>
          Loading...
        </div>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default AstroAppWrapper;