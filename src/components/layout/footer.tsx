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
`;

const FooterContent = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

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
              href="https://tiktok.com" 
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
