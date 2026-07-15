import styled from 'styled-components';
import { colors, flexColumnCenter } from '../../styles/theme';

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  ${flexColumnCenter}
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: ${colors.teal};
`;