import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';

import '../../utils/fontawesome-icons';


interface I18nWrapperProps {
  lang: string;
  children: React.ReactNode;
}

const I18nWrapper: React.FC<I18nWrapperProps> = ({ lang, children }) => {
  const { i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const supportedLanguages = ['en', 'es', 'fr'];
    let mounted = true;
    
    const setLanguage = async () => {
      try {
        if (lang && supportedLanguages.includes(lang)) {
          if (i18n.language !== lang) {
            await i18n.changeLanguage(lang);
          }
        }
        if (mounted) {
          setIsReady(true);
        }
      } catch (error) {
        console.error('Error changing language:', error);
        if (mounted) {
          setIsReady(true);
        }
      }
    };

    if (i18n.isInitialized) {
      if (i18n.language === lang || !lang) {
        setIsReady(true);
      } else {
        setLanguage();
      }
    } else {
      setIsReady(true); // Render anyway if i18n isn't initialized yet - default language
      const onInit = () => setLanguage();
      i18n.on('initialized', onInit);
      return () => { 
        mounted = false;
        i18n.off('initialized', onInit); 
      };
    }

    return () => { mounted = false; };
  }, [lang, i18n]);

  // Don't render children until i18n is ready with the correct language
  return (
    <>
      {isReady ? children : null}
    </>
  );
};

export default I18nWrapper;

