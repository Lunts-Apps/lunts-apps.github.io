import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GlobalStyle } from './styles/global-styles';
import './i18n';

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Components
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Home from './pages/home';
import Products from './pages/products';
import Jobs from './pages/jobs';
import Contact from './pages/contact';
import LuntsPage from './pages/lunts/lunts-page';
import LuntsPrivacyPolicy from './pages/lunts/privacy-policy';
import LuntsTermsConditions from './pages/lunts/terms-conditions';

// Add FontAwesome icons to library
library.add(fas, fab);

// ✅ Language wrapper component
const LanguageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const supportedLanguages = ['en', 'es', 'fr'];

    if (lang && supportedLanguages.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else {
      // ✅ Redirect to default language if invalid or missing
      const newPath = location.pathname.replace(/^\/[^/]+/, '/en');
      navigate(newPath, { replace: true });
    }
  }, [lang, i18n, navigate, location]);

  return <>{children}</>;
};

// ✅ Main App component
const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router basename="/bitsquid-website">
        <Routes>
          {/* Redirect root to default language */}
          <Route path="/" element={<Navigate to="/en" replace />} />

          {/* Language-based routes */}
          <Route
            path="/:lang/*"
            element={
              <LanguageWrapper>
                <div className="App">
                  <Navbar />
                  <main>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/lunts" element={<LuntsPage />} />
                      <Route path="/products/lunts/privacy-policy" element={<LuntsPrivacyPolicy />} />
                      <Route path="/products/lunts/terms-and-conditions" element={<LuntsTermsConditions />} />
                      <Route path="/jobs" element={<Jobs />} />
                      <Route path="/contact" element={<Contact />} />
                      {/* Catch all route for 404 */}
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </LanguageWrapper>
            }
          />

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
