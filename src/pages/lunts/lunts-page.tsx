import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, Container } from '../../styles/global-styles';
import luntsIsoLogo from '../../assets/lunts-iso-logo.svg';

const LuntsContainer = styled.div`
  min-height: 100vh;
  padding-top: 70px;
  background: ${colors.lunts.background};
  color: ${colors.lunts.text};
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${colors.lunts.primary} 0%, ${colors.lunts.secondary} 100%);
  padding: 5rem 0;
  color: white;
  position: relative;
  overflow: hidden;

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
`;

const HeroContent = styled(Container)`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const LuntsLogo = styled.div`
  width: 120px;
  height: 120px;
  background: ${colors.lunts.primary};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  img {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    
    img {
      width: 70px;
      height: 70px;
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.3rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto 3rem;
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 600px;
  aspect-ratio: 16/9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255, 255, 255, 0.3);
  margin: 2rem auto 0;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 1.5rem auto 0;
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 16px;
  background: ${colors.lunts.background};
  border: 2px solid ${colors.lunts.accent};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(255, 111, 74, 0.2);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${colors.lunts.primary}, ${colors.lunts.secondary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: white;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${colors.lunts.text};
`;

const FeatureDescription = styled.p`
  color: ${colors.lunts.text};
  line-height: 1.6;
  opacity: 0.8;
`;

const DownloadSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, ${colors.lunts.secondary} 0%, ${colors.lunts.secondaryDark} 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

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
`;

const DownloadTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const DownloadButtons = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 3rem 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: white;
  color: ${colors.lunts.secondary};
  text-decoration: none;
  padding: 1.5rem 2rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  min-width: 200px;
  flex: 0 0 auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;

    .title {
      font-weight: 700;
      font-size: 1.2rem;
      white-space: nowrap;
    }

    .subtitle {
      font-size: 0.9rem;
      opacity: 0.7;
      white-space: nowrap;
    }
  }

  @media (max-width: 768px) {
    width: 240px;
    min-width: 240px;
    max-width: 240px;
    padding: 1.2rem 1.5rem;
    justify-content: flex-start;

    .icon {
      font-size: 1.8rem;
    }

    .text {
      .title {
        font-size: 1.1rem;
      }

      .subtitle {
        font-size: 0.85rem;
      }
    }
  }
`;

const LegalSection = styled.section`
  padding: 3rem 0;
  background: ${colors.lunts.background};
  text-align: center;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const LegalLink = styled(Link)`
  color: ${colors.lunts.primary};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 2px solid ${colors.lunts.primary};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.lunts.primary};
    color: white;
  }
`;

const LuntsPage: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const getVideoEmbedUrl = () => {
    switch (lang) {
      case 'es':
        return 'https://www.youtube.com/embed/8kgAXmBIuTY?autoplay=1&rel=0';
      case 'fr':
        return 'https://www.youtube.com/embed/eLoWZNH3YSc?autoplay=1&rel=0';
      default:
        return 'https://www.youtube.com/embed/0jSEvBaDDZ8?autoplay=1&rel=0';
    }
  };

  // Function to scroll to top when clicking legal links
  const handleLegalLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LuntsContainer>
      <HeroSection>
        <HeroContent>
          <LuntsLogo>
            <img src={luntsIsoLogo} alt="Lunts" />
          </LuntsLogo>
          
          <HeroTitle>{t('products.lunts.title')}</HeroTitle>
          <HeroSubtitle>{t('products.lunts.subtitle')}</HeroSubtitle>
          <HeroDescription>{t('products.lunts.description')}</HeroDescription>
          
          <VideoContainer>
            <iframe
              src={getVideoEmbedUrl()}
              title="Lunts Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoContainer>

          <HeroActions style={{ marginTop: '3rem' }}>
            <DownloadButton 
              href="https://play.google.com/store/apps/details?id=com.bitsquid.lunts"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                background: 'white', 
                color: colors.lunts.primary,
                border: `2px solid ${colors.lunts.primary}`
              }}
            >
              <div className="icon">
                <FontAwesomeIcon icon={['fab', 'google-play']} />
              </div>
              <div className="text">
                <div className="title">{t('products.lunts.downloadSection.googlePlay')}</div>
                <div className="subtitle">{t('products.lunts.downloadSection.downloadAndroid')}</div>
              </div>
            </DownloadButton>

            <DownloadButton 
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                background: 'white', 
                color: colors.lunts.primary,
                border: `2px solid ${colors.lunts.primary}`
              }}
            >
              <div className="icon">
                <FontAwesomeIcon icon={['fab', 'apple']} />
              </div>
              <div className="text">
                <div className="title">{t('products.lunts.downloadSection.appStore')}</div>
                <div className="subtitle">{t('products.lunts.downloadSection.downloadIOS')}</div>
              </div>
            </DownloadButton>
          </HeroActions>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <Container>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', color: colors.lunts.text }}>
            {t('products.lunts.features.title')}
          </h2>
          
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>
                <FontAwesomeIcon icon="graduation-cap" />
              </FeatureIcon>
              <FeatureTitle>{t('products.lunts.features.university.title')}</FeatureTitle>
              <FeatureDescription>
                {t('products.lunts.features.university.description')}
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <FontAwesomeIcon icon="gift" />
              </FeatureIcon>
              <FeatureTitle>{t('products.lunts.features.benefits.title')}</FeatureTitle>
              <FeatureDescription>
                {t('products.lunts.features.benefits.description')}
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <FontAwesomeIcon icon="shield-alt" />
              </FeatureIcon>
              <FeatureTitle>{t('products.lunts.features.safety.title')}</FeatureTitle>
              <FeatureDescription>
                {t('products.lunts.features.safety.description')}
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <FontAwesomeIcon icon="calendar" />
              </FeatureIcon>
              <FeatureTitle>{t('products.lunts.features.events.title')}</FeatureTitle>
              <FeatureDescription>
                {t('products.lunts.features.events.description')}
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      <DownloadSection>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <DownloadTitle>{t('products.lunts.downloadSection.title')}</DownloadTitle>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            {t('products.lunts.downloadSection.description')}
          </p>
          
          <DownloadButtons>
            <DownloadButton 
              href="https://play.google.com/store/apps/details?id=com.bitsquid.lunts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <FontAwesomeIcon icon={['fab', 'google-play']} />
              </div>
              <div className="text">
                <div className="title">{t('products.lunts.downloadSection.googlePlay')}</div>
                <div className="subtitle">{t('products.lunts.downloadSection.downloadAndroid')}</div>
              </div>
            </DownloadButton>

            <DownloadButton 
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <FontAwesomeIcon icon={['fab', 'apple']} />
              </div>
              <div className="text">
                <div className="title">{t('products.lunts.downloadSection.appStore')}</div>
                <div className="subtitle">{t('products.lunts.downloadSection.downloadIOS')}</div>
              </div>
            </DownloadButton>
          </DownloadButtons>
        </Container>
      </DownloadSection>

      <LegalSection>
        <Container>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: colors.lunts.text }}>
            {t('products.lunts.legalSection.title')}
          </h3>
          <LegalLinks>
            <LegalLink to={`/${lang}/products/lunts/privacy-policy`} onClick={handleLegalLinkClick}>
              {t('products.lunts.privacyPolicy')}
            </LegalLink>
            <LegalLink to={`/${lang}/products/lunts/terms-and-conditions`} onClick={handleLegalLinkClick}>
              {t('products.lunts.termsConditions')}
            </LegalLink>
          </LegalLinks>
        </Container>
      </LegalSection>
    </LuntsContainer>
  );
};

export default LuntsPage;
