import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, ContainerLimited } from '../../styles/global-styles';

const TermsContainer = styled.div`
  min-height: 100vh;
  padding-top: 70px;
  background: ${colors.lunts.background};
  color: ${colors.lunts.text};
`;

const HeaderSection = styled.section`
  background: linear-gradient(135deg, ${colors.lunts.primary} 0%, ${colors.lunts.secondary} 100%);
  padding: 3rem 0;
  color: white;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeaderSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;

const ContentSection = styled.section`
  padding: 4rem 0;
`;

const ContentContainer = styled(ContainerLimited)`
  max-width: 800px;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.lunts.primary};
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border: 2px solid ${colors.lunts.primary};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.lunts.primary};
    color: white;
  }
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${colors.lunts.primary};
`;

const SectionContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: ${colors.lunts.text};
`;

const ContactInfo = styled.div`
  background: ${colors.lunts.accent};
  padding: 2rem;
  border-radius: 12px;
  margin-top: 3rem;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: ${colors.lunts.text};
  }

  p {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${colors.lunts.text};
  }
`;

const LuntsTermsConditions: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  return (
    <TermsContainer>
      <HeaderSection>
        <ContainerLimited>
          <HeaderTitle>{t('legal.termsConditions.title')}</HeaderTitle>
          <HeaderSubtitle>{t('legal.termsConditions.lastUpdated')}</HeaderSubtitle>
        </ContainerLimited>
      </HeaderSection>

      <ContentSection>
        <ContentContainer>
          <BackLink to={`/${lang}/products/lunts`}>
            <FontAwesomeIcon icon="arrow-left" />
            Back to Lunts
          </BackLink>

          <Section>
            <SectionContent>
              {t('legal.termsConditions.intro')}
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>{t('legal.termsConditions.sections.useOfApp.title')}</SectionTitle>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              {(t('legal.termsConditions.sections.useOfApp.content', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionTitle>{t('legal.termsConditions.sections.registration.title')}</SectionTitle>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              {(t('legal.termsConditions.sections.registration.content', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionTitle>{t('legal.termsConditions.sections.userConduct.title')}</SectionTitle>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              {(t('legal.termsConditions.sections.userConduct.content', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionTitle>{t('legal.termsConditions.sections.userContent.title')}</SectionTitle>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              {(t('legal.termsConditions.sections.userContent.content', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionTitle>{t('legal.termsConditions.sections.intellectualProperty.title')}</SectionTitle>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              {(t('legal.termsConditions.sections.intellectualProperty.content', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionTitle>{t('legal.termsConditions.sections.advertising.title')}</SectionTitle>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              {(t('legal.termsConditions.sections.advertising.content', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionTitle>{t('legal.termsConditions.sections.premiumAccount.title')}</SectionTitle>
            <SectionContent>
              {t('legal.termsConditions.sections.premiumAccount.description')}
            </SectionContent>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              {(t('legal.termsConditions.sections.premiumAccount.content', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionTitle>{t('legal.termsConditions.sections.modifications.title')}</SectionTitle>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              {(t('legal.termsConditions.sections.modifications.content', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionTitle>{t('legal.termsConditions.sections.liability.title')}</SectionTitle>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              {(t('legal.termsConditions.sections.liability.content', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionTitle>{t('legal.termsConditions.sections.applicableLaw.title')}</SectionTitle>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              {(t('legal.termsConditions.sections.applicableLaw.content', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionContent>
              {t('legal.termsConditions.contact.agreement')}
            </SectionContent>
          </Section>

          <ContactInfo>
            <h3>{t('legal.termsConditions.contact.title')}</h3>
            <p>{t('legal.termsConditions.contact.content')}</p>
            <p>
              <FontAwesomeIcon icon="envelope" />
              lunts.info@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon="building" />
              Bitsquid Corp - NIT: 901713594
            </p>
            <p>
              <FontAwesomeIcon icon="map-marker-alt" />
              Colombia
            </p>
          </ContactInfo>
        </ContentContainer>
      </ContentSection>
    </TermsContainer>
  );
};

export default LuntsTermsConditions;
