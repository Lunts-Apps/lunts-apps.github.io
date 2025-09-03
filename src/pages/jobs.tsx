import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, Container, SectionTitle } from '../styles/global-styles';

const JobsContainer = styled.div`
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 80px;
  background: linear-gradient(135deg, ${colors.bitsquid.primary} 0%, ${colors.bitsquid.secondary} 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 60px;
  }
`;

const JobsContent = styled(Container)`
  text-align: center;
  color: ${colors.bitsquid.contrast};
  max-width: 800px;
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

const IconContainer = styled.div`
  margin-bottom: 3rem;
  position: relative;
`;

const MainIcon = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, ${colors.bitsquid.accent1}, ${colors.bitsquid.accent2});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 3rem;
  color: white;
  animation: ${float} 3s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(155, 93, 229, 0.3);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }
`;

const FloatingIcon = styled.div<{ delay: number; top: string; left: string }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: 40px;
  height: 40px;
  background: rgba(155, 93, 229, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.bitsquid.accent1};
  font-size: 1.2rem;
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  z-index: 1;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
`;

const JobsTitle = styled(SectionTitle)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  animation: ${pulse} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const JobsMessage = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${colors.bitsquid.accent1};

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const JobsDescription = styled.p`
  font-size: 1.3rem;
  line-height: 1.7;
  color: ${colors.bitsquid.neutral};
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const StayTunedText = styled.p`
  font-size: 1.1rem;
  color: ${colors.bitsquid.accent2};
  font-weight: 500;
  margin-top: 2rem;
  animation: ${pulse} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactInfo = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(155, 93, 229, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(155, 93, 229, 0.2);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${colors.bitsquid.contrast};
  }

  p {
    font-size: 1.1rem;
    color: ${colors.bitsquid.neutral};
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const Jobs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <JobsContainer>
      <JobsContent>
        <IconContainer>
          <MainIcon>
            <FontAwesomeIcon icon="briefcase" />
          </MainIcon>
          
          <FloatingIcon delay={0} top="10%" left="20%">
            <FontAwesomeIcon icon="rocket" />
          </FloatingIcon>
          
          <FloatingIcon delay={1} top="30%" left="80%">
            <FontAwesomeIcon icon="lightbulb" />
          </FloatingIcon>
          
          <FloatingIcon delay={2} top="70%" left="15%">
            <FontAwesomeIcon icon="users" />
          </FloatingIcon>
          
          <FloatingIcon delay={1.5} top="60%" left="85%">
            <FontAwesomeIcon icon="code" />
          </FloatingIcon>
        </IconContainer>

        <JobsTitle>{t('jobs.title')}</JobsTitle>
        
        <JobsMessage>{t('jobs.noPositions')}</JobsMessage>
        
        <JobsDescription>
          {t('jobs.description')}
        </JobsDescription>

        <StayTunedText>
          ✨ {t('jobs.stayTuned')} ✨
        </StayTunedText>

        <ContactInfo>
          <h3>{t('jobs.getInTouch')}</h3>
          <p>
            <FontAwesomeIcon icon="envelope" />
            bitsquidcorp@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon="building" />
            NIT: 901713594
          </p>
        </ContactInfo>
      </JobsContent>
    </JobsContainer>
  );
};

export default Jobs;
