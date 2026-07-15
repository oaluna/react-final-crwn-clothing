import styled from 'styled-components';
import { colors, media, flexColumn } from '../../styles/theme';
import CustomButton from '../custom-button/custom-button.component';

export const ContactFormContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0;

  form {
    width: 60%;
    max-width: 100%;
  }

  ${media.down(720)`
    flex-direction: column;
    align-items: center;
  `}
`;

export const StyledContactForm = styled.div`
  ${flexColumn}
  width: 100%;

  position: relative;
  align-items: center;
  justify-content: center;

`;
export const ContactFormTitle = styled.h2`
  margin: 10px 0;
`;

export const SendMessageButton = styled(CustomButton)`
  background: ${colors.black};
  margin: 0 auto;
`;