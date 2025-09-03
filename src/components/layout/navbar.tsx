import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../styles/global-styles';
import bitsquidLogo from '../../assets/bitsquid-logo.svg';
import luntsLogo from '../../assets/lunts-logo.svg';

const NavbarContainer = styled.nav<{ $isLunts?: boolean; $isScrolled?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.$isLunts ? colors.lunts.primary : colors.bitsquid.primary};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: ${props => props.$isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.3)' : 'none'};
`;

const NavContent = styled.div`
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
`;

const Logo = styled(Link)<{ $isLunts?: boolean }>`
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
`;

const LogoImage = styled.img<{ $isLunts?: boolean }>`
  height: ${props => props.$isLunts ? '28px' : '40px'};
  width: auto;
  filter: ${props => props.$isLunts ? 'brightness(0) invert(1)' : 'none'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: ${props => props.$isLunts ? '28px' : '35px'};
  }
`;

const NavLinks = styled.div<{ $isOpen?: boolean; $isLunts?: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    background: ${props => props.$isLunts ? colors.lunts.primary : colors.bitsquid.primary};
    flex-direction: column;
    padding: 80px 1rem 2rem 1rem;
    transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
    box-shadow: ${props => props.$isOpen ? '2px 0 10px rgba(0, 0, 0, 0.3)' : 'none'};
    overflow-y: auto;
    z-index: 999;
    gap: 0;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean; $isLunts?: boolean }>`
  color: ${props => props.$isLunts ? 'white' : colors.bitsquid.contrast};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;

  ${props => props.$isActive && `
    background: ${props.$isLunts ? colors.lunts.secondaryDark : colors.bitsquid.accent1};
    color: white;
  `}

  &:hover {
    background: ${props => props.$isLunts ? colors.lunts.secondaryDark : colors.bitsquid.accent1};
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 1.2rem 1rem;
    font-size: 1.1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0;
    
    &:hover, &:active, &:focus {
      background: ${props => props.$isLunts ? colors.lunts.secondaryDark : colors.bitsquid.accent1};
      color: white;
      transform: none;
    }
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const ProductsDropdown = styled.div`
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 0.5rem;
  }
`;

const DropdownContent = styled.div<{ $isOpen?: boolean; $isLunts?: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${props => props.$isLunts ? colors.lunts.primary : colors.bitsquid.secondary};
  min-width: 250px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1rem 0;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'});
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
    margin-top: 1rem;
  }
`;

const DropdownLink = styled(Link)<{ $isLunts?: boolean }>`
  display: block;
  color: ${props => props.$isLunts ? 'white' : colors.bitsquid.contrast};
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$isLunts ? colors.lunts.secondaryDark : colors.bitsquid.accent1};
    color: white;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    text-align: center;
    
    &:hover, &:active, &:focus {
      background: ${props => props.$isLunts ? colors.lunts.secondaryDark : colors.bitsquid.accent1};
      color: white;
    }
  }
`;

const LanguageSelector = styled.div`
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 1rem;
    margin-top: 1rem;
  }
`;

const LanguageButton = styled.button<{ $isLunts?: boolean }>`
  background: transparent;
  border: 1px solid ${props => props.$isLunts ? 'white' : colors.bitsquid.accent1};
  color: ${props => props.$isLunts ? 'white' : colors.bitsquid.contrast};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.$isLunts ? colors.lunts.secondaryDark : colors.bitsquid.accent1};
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 1rem;
    font-size: 1rem;
    
    &:hover, &:active, &:focus {
      background: ${props => props.$isLunts ? colors.lunts.secondaryDark : colors.bitsquid.accent1};
      color: white;
    }
  }
`;

const LanguageDropdown = styled.div<{ $isOpen?: boolean; $isLunts?: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${props => props.$isLunts ? colors.lunts.primary : colors.bitsquid.secondary};
  min-width: 150px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 0.5rem 0;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'});
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
`;

const LanguageOption = styled.button<{ $isLunts?: boolean }>`
  display: block;
  width: 100%;
  background: none;
  border: none;
  color: ${props => props.$isLunts ? 'white' : colors.bitsquid.contrast};
  text-decoration: none;
  padding: 0.75rem 1rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$isLunts ? colors.lunts.secondaryDark : colors.bitsquid.accent1};
    color: white;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 0.8rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    
    &:hover, &:active, &:focus {
      background: ${props => props.$isLunts ? colors.lunts.secondaryDark : colors.bitsquid.accent1};
      color: white;
    }
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const MobileMenuOverlay = styled.div<{ $isOpen?: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`;

const MobileMenuButton = styled.button<{ $isLunts?: boolean }>`
  display: none;
  background: none;
  border: none;
  color: ${props => props.$isLunts ? 'white' : colors.bitsquid.contrast};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  // Check if we're on a Lunts page
  const isLuntsPage = location.pathname.includes('/products/lunts');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (newLang: string) => {
    const currentPath = location.pathname.replace(/^\/[a-z]{2}/, '');
    window.location.href = `/${newLang}${currentPath}`;
  };

  const getLanguageName = (langCode: string) => {
    switch (langCode) {
      case 'en': return t('language.english');
      case 'es': return t('language.spanish');
      case 'fr': return t('language.french');
      default: return t('language.english');
    }
  };

  const isActiveRoute = (path: string) => {
    const currentPath = location.pathname.replace(/^\/[a-z]{2}/, '');
    return currentPath === path || (path === '/' && currentPath === '');
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to scroll to top when clicking header links
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <MobileMenuOverlay $isOpen={isMobileMenuOpen} onClick={handleMobileMenuClose} />
      <NavbarContainer $isLunts={isLuntsPage} $isScrolled={isScrolled}>
        <NavContent>
          <Logo to={`/${lang}`} $isLunts={isLuntsPage}>
            {isLuntsPage ? (
              <LogoImage 
                src={luntsLogo} 
                alt="Lunts" 
                $isLunts={isLuntsPage}
                onClick={handleLinkClick}
              />
            ) : (
              <LogoImage 
                src={bitsquidLogo} 
                alt="Bitsquid" 
                $isLunts={isLuntsPage}
                onClick={handleLinkClick}
              />
            )}
          </Logo>

          <NavLinks $isOpen={isMobileMenuOpen} $isLunts={isLuntsPage}>
          <NavLink 
            to={`/${lang}`} 
            $isActive={isActiveRoute('/')}
            $isLunts={isLuntsPage}
            onClick={() => {
              handleMobileMenuClose();
              handleLinkClick();
            }}
          >
            {t('nav.home')}
          </NavLink>

          <ProductsDropdown
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <NavLink 
              to={`/${lang}/products`}
              $isActive={isActiveRoute('/products')}
              $isLunts={isLuntsPage}
              onClick={() => {
                handleMobileMenuClose();
                handleLinkClick();
              }}
            >
              {t('nav.products')} <FontAwesomeIcon icon="chevron-down" />
            </NavLink>
            <DropdownContent $isOpen={isProductsDropdownOpen} $isLunts={isLuntsPage}>
              <DropdownLink 
                to={`/${lang}/products/lunts`} 
                $isLunts={isLuntsPage}
                onClick={() => {
                  handleMobileMenuClose();
                  handleLinkClick();
                }}
              >
                Lunts - {t('products.lunts.subtitle')}
              </DropdownLink>
            </DropdownContent>
          </ProductsDropdown>

          <NavLink 
            to={`/${lang}/jobs`}
            $isActive={isActiveRoute('/jobs')}
            $isLunts={isLuntsPage}
            onClick={() => {
              handleMobileMenuClose();
              handleLinkClick();
            }}
          >
            {t('nav.jobs')}
          </NavLink>

          <NavLink 
            to={`/${lang}/contact`}
            $isActive={isActiveRoute('/contact')}
            $isLunts={isLuntsPage}
            onClick={() => {
              handleMobileMenuClose();
              handleLinkClick();
            }}
          >
            {t('nav.contact')}
          </NavLink>

          <LanguageSelector>
            <LanguageButton 
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              $isLunts={isLuntsPage}
            >
              {getLanguageName(lang || 'en')} <FontAwesomeIcon icon="globe" />
            </LanguageButton>
            <LanguageDropdown $isOpen={isLanguageDropdownOpen} $isLunts={isLuntsPage}>
              <LanguageOption 
                onClick={() => {
                  changeLanguage('en');
                  setIsLanguageDropdownOpen(false);
                  handleMobileMenuClose();
                }} 
                $isLunts={isLuntsPage}
              >
                {t('language.english')}
              </LanguageOption>
              <LanguageOption 
                onClick={() => {
                  changeLanguage('es');
                  setIsLanguageDropdownOpen(false);
                  handleMobileMenuClose();
                }} 
                $isLunts={isLuntsPage}
              >
                {t('language.spanish')}
              </LanguageOption>
              <LanguageOption 
                onClick={() => {
                  changeLanguage('fr');
                  setIsLanguageDropdownOpen(false);
                  handleMobileMenuClose();
                }} 
                $isLunts={isLuntsPage}
              >
                {t('language.french')}
              </LanguageOption>
            </LanguageDropdown>
          </LanguageSelector>
        </NavLinks>

        <MobileMenuButton 
          onClick={handleMobileMenuToggle}
          $isLunts={isLuntsPage}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? "times" : "bars"} />
        </MobileMenuButton>
      </NavContent>
    </NavbarContainer>
    </>
  );
};

export default Navbar;
