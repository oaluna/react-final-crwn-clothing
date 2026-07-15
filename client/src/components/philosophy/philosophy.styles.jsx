import styled from 'styled-components';
import { colors, fonts, media, flexColumn, flexColumnCenter, softShadow } from '../../styles/theme';

export const PhilosophyContainer = styled.div`
 min-height: 100%;
 max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  ${media.down(767)`
    padding: 20px 8px;
    width: 100%;
    ${flexColumn}
    align-items: center;
    position: relative;
    flex-wrap: nowrap;
  `}
`;

export const PhilosophyMain = styled.main`
  border-radius: 15px;
`;

export const PhilosophyTitle = styled.h1`
  position: relative;
  text-align: center;
`;

export const ExploreRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ExploreButton = styled.button`
  color: ${colors.black};
  padding: 15px 25px;
`;

/* Main Content Grid */
export const PhilosophyText = styled.div`
display: flex;
flex-direction: row;


  .text-section {
    max-width: 50%;
    font-size: 16px;
    line-height: 1.5;
  }

  ${media.tabletUp`
    grid-template-columns: 1r 1fr;
    gap: 60px;

    .text-section {
      max-width: 500px;
    }
  `}

  ${media.small`
    ${flexColumnCenter}
    position: relative;
    margin: 0 8px;
    flex-wrap: nowrap;
    text-align: left;
  `}
`;

export const PhilosophyLeft = styled.div`
  font-family: ${fonts.header};
  color: ${colors.rust};
  font-size: 32px;
  margin-bottom: 20px;
  margin-right: 30vw;
  background: ${colors.grayBorder};
  padding: 20px 12px;
  border-radius: 15px;
  ${softShadow()};
  width: 1200px;
  position: relative;
  align-items: center;
  margin-top: -40vh;

  .vision-body {
    font-family: ${fonts.body};
    color: ${colors.grayDark};
    line-height: 1.2;
    font-size: 16px;
    text-align: left;
  width: 100%;
    ${flexColumn}
    align-items: flex-start;
  }

  .icon-pair {
    margin-top: 20px;
    color: ${colors.rust};
  }

  ${media.tablet`
    font-size: 42px;
    margin-bottom: 30px;

    .icon-pair {
      margin-top: 30px;
    }
  `}

  ${media.down(350)`
    ${flexColumnCenter}
    width: 100%;
    position: relative;
    flex-wrap: nowrap;
    padding: 20px 12px;
  `}
`;

export const PhilosophyImg = styled.div`
${flexColumn}
align-self: stretch;
  background: ${colors.gray};
  position: relative;
 max-width: 50%;
  
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const SignatureText = styled.div`
  font-family: ${fonts.header};
  font-style: italic;
  font-size: 24px;
  color: ${colors.textMedium};
  user-select: none;

  ${media.tabletUp`
    font-size: 28px;
  `}
`;

export const ArtistImage = styled.img`
width: 100%;
  transition: transform 0.7s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;