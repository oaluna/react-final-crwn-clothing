import styled from 'styled-components';
import { media } from '../../styles/theme';

export const SignInAndSignUpContainer = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  ${media.laptop`
    flex-direction: column;
    align-items: center;
  `}
`;
