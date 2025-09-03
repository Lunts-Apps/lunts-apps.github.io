import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, Container, Button } from '../styles/global-styles';

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding-top: 70px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${colors.bitsquid.primary} 0%, ${colors.bitsquid.secondary} 100%);
  padding: 4rem 0;
  text-align: center;
`;

const HeroContent = styled(Container)`
  color: ${colors.bitsquid.contrast};
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: ${colors.bitsquid.neutral};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ProductsSection = styled.section`
  padding: 4rem 0;
  background: ${colors.bitsquid.primary};
`;

const LuntsShowcase = styled.div`
  background: linear-gradient(135deg, ${colors.lunts.primary} 0%, ${colors.lunts.secondary} 100%);
  border-radius: 20px;
  padding: 4rem;
  margin: 2rem 0;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/></svg>') repeat;
    animation: float 30s linear infinite;
  }

  @keyframes float {
    0% { transform: translateX(0) translateY(0); }
    100% { transform: translateX(-50px) translateY(-50px); }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1rem 0;
  }
`;

const LuntsContent = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const LuntsInfo = styled.div`
  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;

    @media (max-width: 768px) {
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    opacity: 0.95;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const LuntsActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const LuntsButton = styled(Button)`
  background: white;
  color: ${colors.lunts.primary};
  border: 2px solid white;
  min-width: 200px;

  &:hover {
    background: transparent;
    color: white;
    border-color: white;
  }
`;

const LuntsFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);

  .icon {
    width: 40px;
    height: 40px;
    background: white;
    color: ${colors.lunts.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }

  .text {
    font-weight: 500;
  }
`;

const DownloadSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 2px solid white;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: white;
    color: ${colors.lunts.primary};
    transform: translateY(-2px);
  }

  .icon {
    font-size: 1.5rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .title {
      font-weight: 600;
      font-size: 1rem;
    }

    .subtitle {
      font-size: 0.8rem;
      opacity: 0.8;
    }
  }
`;

const VideoSection = styled.div`
  margin-top: 2rem;
`;

const VideoButton = styled(Button)`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  backdrop-filter: blur(10px);

  &:hover {
    background: white;
    color: ${colors.lunts.primary};
  }
`;

const Products: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const getVideoUrl = () => {
    switch (lang) {
      case 'es':
        return 'https://www.youtube.com/watch?v=8kgAXmBIuTY';
      case 'fr':
        return 'https://www.youtube.com/watch?v=eLoWZNH3YSc';
      default:
        return 'https://www.youtube.com/watch?v=0jSEvBaDDZ8';
    }
  };

  return (
    <ProductsContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>{t('products.title')}</HeroTitle>
          <HeroSubtitle>{t('products.subtitle')}</HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ProductsSection>
        <Container>
          <LuntsShowcase>
            <LuntsContent>
              <LuntsInfo>
                <h2>{t('products.lunts.title')}</h2>
                <h3>{t('products.lunts.subtitle')}</h3>
                <p>{t('products.lunts.description')}</p>

                <LuntsActions>
                  <LuntsButton onClick={() => window.location.href = `/${lang}/products/lunts`}>
                    {t('products.lunts.download')}
                  </LuntsButton>

                  <VideoSection>
                    <VideoButton onClick={() => window.open(getVideoUrl(), '_blank')}>
                      <FontAwesomeIcon icon="play" /> {t('products.lunts.watchVideo')}
                    </VideoButton>
                  </VideoSection>
                </LuntsActions>

                <DownloadSection>
                  <DownloadButton 
                    href="https://play.google.com/store/apps/details?id=com.bitsquid.lunts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon">
                      <FontAwesomeIcon icon={['fab', 'google-play']} />
                    </div>
                    <div className="text">
                      <div className="title">Google Play</div>
                      <div className="subtitle">Download for Android</div>
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
                      <div className="title">App Store</div>
                      <div className="subtitle">Download for iOS</div>
                    </div>
                  </DownloadButton>
                </DownloadSection>
              </LuntsInfo>

              <LuntsFeatures>
                <FeatureItem>
                  <div className="icon">
                    <FontAwesomeIcon icon="graduation-cap" />
                  </div>
                  <div className="text">{t('products.lunts.features.university.title')}</div>
                </FeatureItem>

                <FeatureItem>
                  <div className="icon">
                    <FontAwesomeIcon icon="gift" />
                  </div>
                  <div className="text">{t('products.lunts.features.benefits.title')}</div>
                </FeatureItem>

                <FeatureItem>
                  <div className="icon">
                    <FontAwesomeIcon icon="shield-alt" />
                  </div>
                  <div className="text">{t('products.lunts.features.safety.title')}</div>
                </FeatureItem>

                <FeatureItem>
                  <div className="icon">
                    <FontAwesomeIcon icon="calendar" />
                  </div>
                  <div className="text">{t('products.lunts.features.events.title')}</div>
                </FeatureItem>
              </LuntsFeatures>
            </LuntsContent>
          </LuntsShowcase>
        </Container>
      </ProductsSection>
    </ProductsContainer>
  );
};

export default Products;
