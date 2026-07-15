import styled from 'styled-components';
import { media } from '../../styles/theme';

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${media.laptop`
    flex-direction: column;
    align-items: center;
  `}

  img {
    max-width: 50%;
    position: relative;
  }
`;