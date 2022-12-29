import {
  mdiAlertCircleOutline,
  mdiAlertOutline,
  mdiCheckboxMarkedCircleOutline,
  mdiClose,
  mdiInformationOutline,
} from '@mdi/js';
import Icon from '@mdi/react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SmallTitle } from '../typography';

export interface AlertProps {
  severity: 'error' | 'warning' | 'info' | 'success';
  message: string;
  onClose?: () => void;
}

const THEME = {
  error: {
    backgroundColor: '#FF6C6C',
    fontColor: '#ffffff',
    icon: <Icon path={mdiAlertCircleOutline} size={1} color="#ffffff" />,
  },
  warning: {
    backgroundColor: '#EDEB92',
    fontColor: '#000000',
    icon: <Icon path={mdiAlertOutline} size={1} color="#000000" />,
  },
  info: {
    backgroundColor: '#9AC8EB',
    fontColor: '#000000',
    icon: <Icon path={mdiInformationOutline} size={1} color="#000000" />,
  },
  success: {
    backgroundColor: '#8FD59A',
    fontColor: '#000000',
    icon: (
      <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#000000" />
    ),
  },
};

const animate = {
  initial: { opacity: 0, scale: 0.2 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    default: {
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
    },
    scale: {
      type: 'spring',
      damping: 20,
      stiffness: 80,
      restDelta: 0.001,
    },
  },
};

const Container = styled(motion.div)<{
  severity: AlertProps['severity'];
}>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  min-height: 60px;
  box-shadow: 0px 4px 6px #0000002f;

  ${SmallTitle} {
    line-height: 24px;
    font-size: 14px;
    margin-right: auto;
    color: ${(props) => THEME[props.severity].fontColor};
  }

  background: ${(props) => THEME[props.severity].backgroundColor};
`;

const IconContainer = styled.div`
  cursor: pointer;
`;

export const Alert = ({ severity, message, onClose }: AlertProps) => {
  return (
    <Container severity={severity} {...animate}>
      <IconContainer>{THEME[severity].icon}</IconContainer>
      <SmallTitle>{message}</SmallTitle>
      {onClose && (
        <IconContainer onClick={onClose} data-testid="close-icon">
          <Icon path={mdiClose} size={1} color={THEME[severity].fontColor} />
        </IconContainer>
      )}
    </Container>
  );
};
