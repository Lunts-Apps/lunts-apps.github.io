import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, Container, Button, SectionTitle } from '../styles/global-styles';
import Carousel from '../components/ui/carousel';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding-top: 70px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #000000 0%, ${colors.bitsquid.primary} 30%, ${colors.bitsquid.secondary} 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

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
`;

const HeroContent = styled(Container)`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
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
  margin-bottom: 2rem;
  color: ${colors.bitsquid.neutral};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const HeroHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 2rem 0;
  }
`;

const HighlightCard = styled.div`
  background: rgba(155, 93, 229, 0.1);
  border: 1px solid rgba(155, 93, 229, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(155, 93, 229, 0.2);
  }
`;

const HighlightIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${colors.bitsquid.accent1};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.2rem;
  color: white;
`;

const HighlightTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${colors.bitsquid.contrast};
`;

const HighlightText = styled.p`
  font-size: 0.9rem;
  color: ${colors.bitsquid.neutral};
  line-height: 1.5;
`;

const HeroStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 2rem 0 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 2rem;
    margin: 1.5rem 0 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: ${colors.bitsquid.accent1};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${colors.bitsquid.neutral};
  text-transform: uppercase;
  letter-spacing: 1px;
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
  position: relative;
  overflow: hidden;

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
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  position: relative;
  z-index: 1;
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
  const navigate = useNavigate();

  // Function to handle navigation with scroll to top
  const handleNavigateWithScroll = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

const carouselItems = [
    {
      id: 1,
      title: '',
      description: '',
      buttonText: '',
      buttonAction: () => handleNavigateWithScroll(`/${lang}/products`),
      background: `url(${import.meta.env.BASE_URL}assets/bitsquid-banner.png)`,
      isBanner: true,
    },
    {
      id: 2,
      title: t('home.carousel.bitsquid.title'),
      description: t('home.carousel.bitsquid.description'),
      buttonText: t('home.carousel.bitsquid.button'),
      buttonAction: () => handleNavigateWithScroll(`/${lang}/products`),
      background: `linear-gradient(135deg, ${colors.bitsquid.primary}, #1a1a1a)`,
    },
    {
      id: 3,
      title: t('home.carousel.lunts.title'),
      description: t('home.carousel.lunts.description'),
      buttonText: t('home.carousel.lunts.button'),
      buttonAction: () => handleNavigateWithScroll(`/${lang}/products/lunts`),
      background: `linear-gradient(135deg, ${colors.lunts.primary}, ${colors.lunts.secondary})`,
    },
    {
      id: 4,
      title: t('home.carousel.technology.title'),
      description: t('home.carousel.technology.description'),
      buttonText: t('home.carousel.technology.button'),
      buttonAction: () => handleNavigateWithScroll(`/${lang}/products`),
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
          
          <HeroHighlights>
            <HighlightCard onClick={() => handleNavigateWithScroll(`/${lang}/products/lunts`)}>
              <HighlightIcon>
                <FontAwesomeIcon icon="mobile-alt" />
              </HighlightIcon>
              <HighlightTitle>Aplicaciones Móviles</HighlightTitle>
              <HighlightText>Desarrollamos apps innovadoras que conectan personas y transforman experiencias digitales</HighlightText>
            </HighlightCard>
            
            <HighlightCard onClick={() => handleNavigateWithScroll(`/${lang}/products/lunts`)}>
              <HighlightIcon>
                <FontAwesomeIcon icon="heart" />
              </HighlightIcon>
              <HighlightTitle>Lunts Dating</HighlightTitle>
              <HighlightText>Nuestra app estrella para citas universitarias con beneficios exclusivos para estudiantes</HighlightText>
            </HighlightCard>
            
            <HighlightCard onClick={() => handleNavigateWithScroll(`/${lang}/products/lunts`)}>
              <HighlightIcon>
                <FontAwesomeIcon icon="globe" />
              </HighlightIcon>
              <HighlightTitle>Alcance Global</HighlightTitle>
              <HighlightText>Creando soluciones para usuarios en todo el mundo con tecnología de vanguardia</HighlightText>
            </HighlightCard>
          </HeroHighlights>

          <HeroStats>
            <StatItem>
              <StatNumber>2023</StatNumber>
              <StatLabel>Fundada</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>1+</StatNumber>
              <StatLabel>Aplicaciones</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>100%</StatNumber>
              <StatLabel>Innovación</StatLabel>
            </StatItem>
          </HeroStats>

          <Button onClick={() => handleNavigateWithScroll(`/${lang}/products`)}>
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
        <Container style={{ position: 'relative', zIndex: 1 }}>
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
