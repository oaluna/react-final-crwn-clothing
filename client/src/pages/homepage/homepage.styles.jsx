import styled from 'styled-components';
import { media, flexColumn } from '../../styles/theme';

export const HomePageContainer = styled.div`
  ${flexColumn}
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;

  ${media.tablet`
    margin-left: 0;
  `}
`;

export const HomeProductGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin: 24px 8vw;
<<<<<<< HEAD

  ${media.tablet`
    ${flexColumn}
    align-items: center;
    margin: 24px 0;
  `}
`;
=======
  @media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0vw;
  }
`;
>>>>>>> refs/remotes/origin/master
