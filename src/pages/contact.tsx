import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';
import { colors, ContainerLimited, Button, SectionTitle } from '../styles/global-styles';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding-top: 70px;
  background: linear-gradient(135deg, ${colors.bitsquid.primary} 0%, ${colors.bitsquid.secondary} 100%);
`;

const ContactContent = styled(ContainerLimited)`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 0;
  }
`;

const ContactInfo = styled.div`
  color: ${colors.bitsquid.contrast};

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${colors.bitsquid.neutral};
    margin-bottom: 3rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
  }
`;

const InfoCard = styled.div`
  background: rgba(155, 93, 229, 0.1);
  border: 1px solid rgba(155, 93, 229, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: ${colors.bitsquid.contrast};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: ${colors.bitsquid.neutral};
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const ContactForm = styled.form`
  background: ${colors.bitsquid.secondary};
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${colors.bitsquid.contrast};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.bitsquid.contrast};
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(155, 93, 229, 0.3);
  border-radius: 8px;
  background: ${colors.bitsquid.primary};
  color: ${colors.bitsquid.contrast};
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.bitsquid.accent1};
    box-shadow: 0 0 0 3px rgba(155, 93, 229, 0.1);
  }

  &::placeholder {
    color: ${colors.bitsquid.neutral};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(155, 93, 229, 0.3);
  border-radius: 8px;
  background: ${colors.bitsquid.primary};
  color: ${colors.bitsquid.contrast};
  font-size: 1rem;
  font-family: inherit;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.bitsquid.accent1};
    box-shadow: 0 0 0 3px rgba(155, 93, 229, 0.1);
  }

  &::placeholder {
    color: ${colors.bitsquid.neutral};
  }
`;

const SubmitButton = styled(Button)<{ isLoading?: boolean }>`
  width: 100%;
  margin-top: 1rem;
  position: relative;
  
  ${props => props.isLoading && `
    opacity: 0.7;
    cursor: not-allowed;
  `}
`;

const StatusMessage = styled.div<{ type: 'success' | 'error' }>`
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
  
  ${props => props.type === 'success' && `
    background: rgba(72, 155, 125, 0.2);
    border: 1px solid rgba(72, 155, 125, 0.3);
    color: #4CAF50;
  `}
  
  ${props => props.type === 'error' && `
    background: rgba(255, 75, 92, 0.2);
    border: 1px solid rgba(255, 75, 92, 0.3);
    color: #FF4B5C;
  `}
`;

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      // EmailJS configuration - You'll need to set up your EmailJS account
      // For now, this is a simulation
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      // Uncomment and configure when EmailJS is set up:
      /*
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'bitsquidcorp@gmail.com'
        },
        'YOUR_PUBLIC_KEY'
      );
      */

      setStatus({
        type: 'success',
        message: t('contact.form.success')
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: t('contact.form.error')
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactContainer>
      <ContactContent>
        <ContactInfo>
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>

          <InfoCard>
            <h3>
              <FontAwesomeIcon icon="envelope" />
              {t('contact.info.email')}
            </h3>
            <p>
              <FontAwesomeIcon icon="paper-plane" />
              bitsquidcorp@gmail.com
            </p>
          </InfoCard>

          <InfoCard>
            <h3>
              <FontAwesomeIcon icon="building" />
              Company Information
            </h3>
            <p>
              <FontAwesomeIcon icon="id-card" />
              {t('contact.info.nit')}: 901713594
            </p>
            <p>
              <FontAwesomeIcon icon="map-marker-alt" />
              Colombia
            </p>
          </InfoCard>

          <InfoCard>
            <h3>
              <FontAwesomeIcon icon="clock" />
              Response Time
            </h3>
            <p>
              <FontAwesomeIcon icon="reply" />
              We typically respond within 24-48 hours
            </p>
          </InfoCard>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>Send us a Message</FormTitle>
          
          <FormGroup>
            <Label htmlFor="name">{t('contact.form.name')}</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contact.form.name')}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">{t('contact.form.email')}</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contact.form.email')}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">{t('contact.form.message')}</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contact.form.message')}
              required
            />
          </FormGroup>

          <SubmitButton type="submit" isLoading={isLoading} disabled={isLoading}>
            {isLoading ? (
              <>
                <FontAwesomeIcon icon="spinner" spin /> {t('contact.form.sending')}
              </>
            ) : (
              <>
                <FontAwesomeIcon icon="paper-plane" /> {t('contact.form.send')}
              </>
            )}
          </SubmitButton>

          {status && (
            <StatusMessage type={status.type}>
              {status.message}
            </StatusMessage>
          )}
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
