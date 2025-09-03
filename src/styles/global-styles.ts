import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'League Spartan', sans-serif;
    background-color: #0B0C10;
    color: #F9F9F9;
    line-height: 1.6;
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .App {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  ul, ol {
    list-style: none; 
  }

  ul li::marker {
    content: "♦ ";       
    color: #489B7D;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

// Brand Colors
export const colors = {
  // Bitsquid Brand Colors
  bitsquid: {
    primary: '#0B0C10',      // Obsidian Black
    secondary: '#1F2A44',    // Midnight Indigo
    accent1: '#9B5DE5',      // Neon Violet
    accent2: '#FF4B5C',      // Cyber Red
    neutral: '#B0B3C2',      // Ash Gray
    contrast: '#F9F9F9',     // Crystal White
  },
  // Lunts Brand Colors
  lunts: {
    primary: '#FF6F4A',      // Sunset Orange
    secondary: '#489B7D',    // Jade Green
    secondaryDark: '#008F68', // Emerald Green
    accent: '#FFAA99',       // Soft Coral
    text: '#333333',         // Charcoal Gray
    background: '#FAFAF9',   // Ivory White
  }
};

// Common styled components
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const ContainerLimited = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'lunts' }>`
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;

  ${props => {
    switch (props.variant) {
      case 'lunts':
        return `
          background: ${colors.lunts.primary};
          color: white;
          &:hover {
            background: ${colors.lunts.secondaryDark};
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 111, 74, 0.3);
          }
        `;
      case 'secondary':
        return `
          background: transparent;
          color: ${colors.bitsquid.contrast};
          border-color: ${colors.bitsquid.accent1};
          &:hover {
            background: ${colors.bitsquid.accent1};
            color: ${colors.bitsquid.primary};
            transform: translateY(-2px);
          }
        `;
      default:
        return `
          background: ${colors.bitsquid.accent1};
          color: ${colors.bitsquid.contrast};
          &:hover {
            background: ${colors.bitsquid.accent2};
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(155, 93, 229, 0.3);
          }
        `;
    }
  }}

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: ${colors.bitsquid.contrast};

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

export const Card = styled.div`
  background: ${colors.bitsquid.secondary};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(155, 93, 229, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;
