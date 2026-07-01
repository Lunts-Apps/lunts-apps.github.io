import React, { useEffect, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import AstroNavbar from './astro-navbar';
import AstroFooter from './astro-footer';

library.add(fas, fab);

interface AstroPageComponentProps {
  lang: string;
  currentPath: string;
  Content: React.ComponentType<{ lang?: string }>;
}

const AstroPageComponent: React.FC<AstroPageComponentProps> = ({ lang, currentPath, Content }) => {
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
    );
  }

  return (
    <>
      <AstroNavbar lang={lang} currentPath={currentPath} />
      <Content lang={lang} />
      <AstroFooter lang={lang} currentPath={currentPath} />
    </>
  );
};

export default AstroPageComponent;
