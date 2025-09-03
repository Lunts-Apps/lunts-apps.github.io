import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, Button } from '../../styles/global-styles';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
  background: string;
  isBanner?: boolean;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`;

const CarouselTrack = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.currentIndex * 100}%);
`;

const CarouselSlide = styled.div<{ background: string; isBanner?: boolean }>`
  min-width: 100%;
  height: 400px;
  background: ${props => props.background};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.isBanner ? 'transparent' : 'rgba(0, 0, 0, 0.2)'};
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 350px;
    padding: 2rem;
  }
`;

const SlideContent = styled.div`
  text-align: center;
  color: white;
  position: relative;
  z-index: 2;
  max-width: 600px;
`;

const SlideTitle = styled.h2<{ isBanner?: boolean }>`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  ${props => props.isBanner && `
    font-size: 4rem;
    font-weight: 300;
    letter-spacing: 0.2em;
    text-transform: lowercase;
    margin-bottom: 0;
    filter: blur(1px);
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6);
    animation: glow 3s ease-in-out infinite alternate;
    
    @keyframes glow {
      from {
        filter: blur(1px);
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6);
      }
      to {
        filter: blur(2px);
        text-shadow: 0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 0.8);
      }
    }
  `}

  @media (max-width: 768px) {
    font-size: ${props => props.isBanner ? '3rem' : '2rem'};
    margin-bottom: 1rem;
  }
`;

const SlideDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const SlideButton = styled(Button)`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  backdrop-filter: blur(10px);

  &:hover {
    background: white;
    color: ${colors.bitsquid.primary};
    transform: translateY(-2px);
  }
`;

const CarouselControls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: 3;
  transform: translateY(-50%);
`;

const ControlButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: white;
    color: ${colors.bitsquid.primary};
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.8rem;
  z-index: 3;
`;

const Indicator = styled.button<{ isActive: boolean }>`
  width: ${props => props.isActive ? '24px' : '8px'};
  height: 8px;
  border-radius: 4px;
  border: none;
  background: ${props => props.isActive ? 'white' : 'rgba(255, 255, 255, 0.4)'};
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    background: white;
    transform: scale(1.1);
    
    &::before {
      transform: translateX(100%);
    }
  }

  ${props => props.isActive && `
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
  `}
`;

const Carousel: React.FC<CarouselProps> = ({ 
  items, 
  autoPlay = true, 
  autoPlayInterval = 10000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length]);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselContainer>
      <CarouselTrack currentIndex={currentIndex}>
        {items.map((item) => (
          <CarouselSlide key={item.id} background={item.background} isBanner={item.isBanner}>
            <SlideContent>
              <SlideTitle isBanner={item.isBanner}>{item.title}</SlideTitle>
              {!item.isBanner && <SlideDescription>{item.description}</SlideDescription>}
              {!item.isBanner && (
                <SlideButton onClick={item.buttonAction}>
                  {item.buttonText}
                </SlideButton>
              )}
            </SlideContent>
          </CarouselSlide>
        ))}
      </CarouselTrack>

      <CarouselControls>
        <ControlButton onClick={goToPrevious}>
          <FontAwesomeIcon icon="chevron-left" />
        </ControlButton>
        <ControlButton onClick={goToNext}>
          <FontAwesomeIcon icon="chevron-right" />
        </ControlButton>
      </CarouselControls>

      <CarouselIndicators>
        {items.map((_, index) => (
          <Indicator
            key={index}
            isActive={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </CarouselIndicators>
    </CarouselContainer>
  );
};

export default Carousel;
