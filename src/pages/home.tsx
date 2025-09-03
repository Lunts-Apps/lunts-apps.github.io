import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, Container, ContainerLimited, Button, SectionTitle } from '../styles/global-styles';
import Carousel from '../components/ui/carousel';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding-top: 70px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${colors.bitsquid.primary} 0%, ${colors.bitsquid.secondary} 100%);
  padding: 4rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    animation: float 20s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
`;

const HeroContent = styled(Container)`
  position: relative;
  z-index: 1;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: ${colors.bitsquid.contrast};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: ${colors.bitsquid.neutral};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 3rem;
  color: ${colors.bitsquid.neutral};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const CarouselSection = styled.section`
  padding: 4rem 0;
  background: ${colors.bitsquid.secondary};
`;

const AboutSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, ${colors.bitsquid.secondary} 0%, ${colors.bitsquid.primary} 100%);
`;

const AboutContent = styled(Container)`
  text-align: center;
  max-width: 800px;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${colors.bitsquid.neutral};
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 0;
  background: ${colors.bitsquid.primary};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  background: ${colors.bitsquid.secondary};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(155, 93, 229, 0.2);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(155, 93, 229, 0.3);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${colors.bitsquid.accent1};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: white;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${colors.bitsquid.contrast};
`;

const FeatureDescription = styled.p`
  color: ${colors.bitsquid.neutral};
  line-height: 1.6;
`;

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const carouselItems = [
    {
      id: 1,
      title: '',
      description: '',
      buttonText: '',
      buttonAction: () => window.location.href = `/${lang}/products`,
      background: `url('/src/assets/bitsquid-banner.png')`,
      isBanner: true,
    },
    {
      id: 2,
      title: t('home.carousel.bitsquid.title'),
      description: t('home.carousel.bitsquid.description'),
      buttonText: t('home.carousel.bitsquid.button'),
      buttonAction: () => window.location.href = `/${lang}/products`,
      background: `linear-gradient(135deg, ${colors.bitsquid.primary}, #1a1a1a)`,
    },
    {
      id: 3,
      title: t('home.carousel.lunts.title'),
      description: t('home.carousel.lunts.description'),
      buttonText: t('home.carousel.lunts.button'),
      buttonAction: () => window.location.href = `/${lang}/products/lunts`,
      background: `linear-gradient(135deg, ${colors.lunts.primary}, ${colors.lunts.secondary})`,
    },
    {
      id: 4,
      title: t('home.carousel.technology.title'),
      description: t('home.carousel.technology.description'),
      buttonText: t('home.carousel.technology.button'),
      buttonAction: () => window.location.href = `/${lang}/products`,
      background: `linear-gradient(135deg, ${colors.bitsquid.secondary}, ${colors.bitsquid.accent1})`,
    },
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>{t('home.welcome')}</HeroTitle>
          <HeroSubtitle>{t('home.subtitle')}</HeroSubtitle>
          <HeroDescription>{t('home.description')}</HeroDescription>
          <Button onClick={() => window.location.href = `/${lang}/products`}>
            {t('home.cta')}
          </Button>
        </HeroContent>
      </HeroSection>

      <CarouselSection>
        <Container>
          <SectionTitle>{t('home.sections.innovation.title')}</SectionTitle>
          <Carousel items={carouselItems} />
        </Container>
      </CarouselSection>

      <AboutSection>
        <AboutContent>
          <SectionTitle>{t('home.sections.about.title')}</SectionTitle>
          <AboutText>
            {t('home.sections.about.description1')}
          </AboutText>
          <AboutText>
            {t('home.sections.about.description2')}
          </AboutText>
        </AboutContent>
      </AboutSection>

      <FeaturesSection>
        <Container>
          <SectionTitle>{t('home.sections.whyChoose.title')}</SectionTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>
                <FontAwesomeIcon icon="rocket" />
              </FeatureIcon>
              <FeatureTitle>{t('home.sections.whyChoose.features.innovation.title')}</FeatureTitle>
              <FeatureDescription>
                {t('home.sections.whyChoose.features.innovation.description')}
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FontAwesomeIcon icon="users" />
              </FeatureIcon>
              <FeatureTitle>{t('home.sections.whyChoose.features.userCentered.title')}</FeatureTitle>
              <FeatureDescription>
                {t('home.sections.whyChoose.features.userCentered.description')}
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FontAwesomeIcon icon="shield-alt" />
              </FeatureIcon>
              <FeatureTitle>{t('home.sections.whyChoose.features.security.title')}</FeatureTitle>
              <FeatureDescription>
                {t('home.sections.whyChoose.features.security.description')}
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>
    </HomeContainer>
  );
};

export default Home;
