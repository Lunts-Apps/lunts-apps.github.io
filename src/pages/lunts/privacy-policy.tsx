import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, Container } from '../../styles/global-styles';

const PrivacyContainer = styled.div`
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

const ContentContainer = styled(Container)`
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

const LuntsPrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  return (
    <PrivacyContainer>
      <HeaderSection>
        <Container>
          <HeaderTitle>{t('legal.privacyPolicy.title')}</HeaderTitle>
          <HeaderSubtitle>{t('legal.privacyPolicy.lastUpdated')}</HeaderSubtitle>
        </Container>
      </HeaderSection>

      <ContentSection>
        <ContentContainer>
          <BackLink to={`/${lang}/products/lunts`}>
            <FontAwesomeIcon icon="arrow-left" />
            Back to Lunts
          </BackLink>

          <Section>
            <SectionContent>
              {t('legal.privacyPolicy.intro')}
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>{t('legal.privacyPolicy.sections.informationWeCollect.title')}</SectionTitle>
            {(t('legal.privacyPolicy.sections.informationWeCollect.items', { returnObjects: true }) as any[]).map((item: any, index: number) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <SectionContent>
                  <strong>{item.title}</strong> {item.content}
                </SectionContent>
              </div>
            ))}
          </Section>

          <Section>
            <SectionTitle>{t('legal.privacyPolicy.sections.useOfInformation.title')}</SectionTitle>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              {(t('legal.privacyPolicy.sections.useOfInformation.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionTitle>{t('legal.privacyPolicy.sections.sharingInformation.title')}</SectionTitle>
            <SectionContent>
              {t('legal.privacyPolicy.sections.sharingInformation.intro')}
            </SectionContent>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              {(t('legal.privacyPolicy.sections.sharingInformation.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionTitle>{t('legal.privacyPolicy.sections.informationSecurity.title')}</SectionTitle>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              {(t('legal.privacyPolicy.sections.informationSecurity.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionTitle>{t('legal.privacyPolicy.sections.internationalTransfers.title')}</SectionTitle>
            <SectionContent>
              {t('legal.privacyPolicy.sections.internationalTransfers.content')}
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>{t('legal.privacyPolicy.sections.minors.title')}</SectionTitle>
            <SectionContent>
              {t('legal.privacyPolicy.sections.minors.content')}
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>{t('legal.privacyPolicy.sections.reportingModeration.title')}</SectionTitle>
            <SectionContent>
              {t('legal.privacyPolicy.sections.reportingModeration.content')}
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>{t('legal.privacyPolicy.sections.childSafety.title')}</SectionTitle>
            <SectionContent>
              {t('legal.privacyPolicy.sections.childSafety.intro')}
            </SectionContent>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              {(t('legal.privacyPolicy.sections.childSafety.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionTitle>{t('legal.privacyPolicy.sections.contact.title')}</SectionTitle>
            <SectionContent>
              {t('legal.privacyPolicy.sections.contact.content')}
            </SectionContent>
          </Section>

          <Section>
            <SectionContent>
              {t('legal.privacyPolicy.agreement')}
            </SectionContent>
          </Section>

          <ContactInfo>
            <h3>{t('legal.privacyPolicy.contact.title')}</h3>
            <p>{t('legal.privacyPolicy.contact.content')}</p>
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
    </PrivacyContainer>
  );
};

export default LuntsPrivacyPolicy;
