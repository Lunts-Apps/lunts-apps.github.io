import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, Container } from '../../styles/global-styles';

const FooterContainer = styled.footer<{ isLunts?: boolean }>`
  background: ${props => props.isLunts ? colors.lunts.primary : colors.bitsquid.primary};
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
  position: relative;
  overflow: hidden;

  /* Bitsquid sparkle animation (for all pages except Lunts) */
  ${props => !props.isLunts && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(2px 2px at 20px 30px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 40px 70px, ${colors.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 90px 40px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(1px 1px at 130px 80px, ${colors.bitsquid.accent2}, transparent),
        radial-gradient(2px 2px at 160px 30px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(1px 1px at 200px 90px, ${colors.bitsquid.accent1}, transparent),
        radial-gradient(2px 2px at 240px 50px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(1px 1px at 280px 20px, ${colors.bitsquid.accent2}, transparent),
        radial-gradient(1px 1px at 320px 100px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 360px 60px, ${colors.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 400px 10px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 440px 80px, ${colors.bitsquid.accent2}, transparent),
        radial-gradient(1px 1px at 480px 40px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 520px 90px, ${colors.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 560px 25px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 600px 70px, ${colors.bitsquid.accent2}, transparent),
        radial-gradient(1px 1px at 640px 50px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 680px 15px, ${colors.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 720px 85px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 760px 45px, ${colors.bitsquid.accent2}, transparent);
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
        radial-gradient(1px 1px at 50px 60px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 100px 20px, ${colors.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 150px 100px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 200px 40px, ${colors.bitsquid.accent2}, transparent),
        radial-gradient(1px 1px at 250px 80px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 300px 10px, ${colors.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 350px 70px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 400px 30px, ${colors.bitsquid.accent2}, transparent),
        radial-gradient(1px 1px at 450px 90px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 500px 50px, ${colors.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 550px 15px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 600px 85px, ${colors.bitsquid.accent2}, transparent),
        radial-gradient(1px 1px at 650px 35px, ${colors.bitsquid.contrast}, transparent),
        radial-gradient(2px 2px at 700px 75px, ${colors.bitsquid.accent1}, transparent),
        radial-gradient(1px 1px at 750px 25px, ${colors.bitsquid.contrast}, transparent);
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
  `}

  /* Lunts floating dots animation (only for Lunts page) */
  ${props => props.isLunts && `
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
  `}
`;

const FooterContent = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
    opacity: 0.9;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled(Link)<{ isLunts?: boolean }>`
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    color: ${props => props.isLunts ? colors.lunts.accent : colors.bitsquid.accent1};
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a<{ isLunts?: boolean }>`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    color: ${props => props.isLunts ? colors.lunts.accent : colors.bitsquid.accent1};
    transform: translateY(-3px);
  }
`;

const ContactInfo = styled.div`
  p {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.9;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  text-align: center;
  opacity: 0.7;
  font-size: 0.9rem;
  position: relative;
  z-index: 1;
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();

  // Check if we're on a Lunts page
  const isLuntsPage = location.pathname.includes('/products/lunts');

  // Function to scroll to top when clicking footer links
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer isLunts={isLuntsPage}>
      <FooterContent>
        <FooterSection>
          <h3>{isLuntsPage ? 'Lunts' : 'Bitsquid'}</h3>
          <p>{t('footer.description')}</p>
          <SocialLinks>
            <SocialLink 
              href="https://www.instagram.com/luntsapp" 
              target="_blank" 
              rel="noopener noreferrer"
              isLunts={isLuntsPage}
            >
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </SocialLink>
            <SocialLink 
              href="https://www.facebook.com/lunts.app.9" 
              target="_blank" 
              rel="noopener noreferrer"
              isLunts={isLuntsPage}
            >
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </SocialLink>
            <SocialLink 
              href="https://www.tiktok.com/@lunts.app" 
              target="_blank" 
              rel="noopener noreferrer"
              isLunts={isLuntsPage}
            >
              <FontAwesomeIcon icon={['fab', 'tiktok']} />
            </SocialLink>
            <SocialLink 
              href="https://www.youtube.com/@luntsapp3634" 
              target="_blank" 
              rel="noopener noreferrer"
              isLunts={isLuntsPage}
            >
              <FontAwesomeIcon icon={['fab', 'youtube']} />
            </SocialLink>
            <SocialLink 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              isLunts={isLuntsPage}
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>{t('footer.products')}</h3>
          <FooterLinks>
            <FooterLink to={`/${lang}/products/lunts`} isLunts={isLuntsPage} onClick={handleLinkClick}>
              Lunts - {t('products.lunts.subtitle')}
            </FooterLink>
            <FooterLink to={`/${lang}/products/lunts/privacy-policy`} isLunts={isLuntsPage} onClick={handleLinkClick}>
              {t('products.lunts.privacyPolicy')}
            </FooterLink>
            <FooterLink to={`/${lang}/products/lunts/terms-and-conditions`} isLunts={isLuntsPage} onClick={handleLinkClick}>
              {t('products.lunts.termsConditions')}
            </FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>{t('footer.contact')}</h3>
          <ContactInfo>
            <p>
              <FontAwesomeIcon icon="envelope" />
              {isLuntsPage ? 'lunts.info@gmail.com' : 'bitsquidcorp@gmail.com'}
            </p>
            {!isLuntsPage && (
              <p>
                <FontAwesomeIcon icon="building" />
                NIT: 901713594
              </p>
            )}
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <h3>{t('footer.legal')}</h3>
          <FooterLinks>
            <FooterLink to={`/${lang}/products/lunts/privacy-policy`} isLunts={isLuntsPage} onClick={handleLinkClick}>
              {t('legal.privacyPolicy.title')}
            </FooterLink>
            <FooterLink to={`/${lang}/products/lunts/terms-and-conditions`} isLunts={isLuntsPage} onClick={handleLinkClick}>
              {t('legal.termsConditions.title')}
            </FooterLink>
          </FooterLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Container>
          <p>
            © {new Date().getFullYear()} {isLuntsPage ? 'Lunts' : 'Bitsquid'}. {t('footer.rights')}
          </p>
        </Container>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
