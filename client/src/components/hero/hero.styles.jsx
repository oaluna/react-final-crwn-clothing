import styled from 'styled-components';
import { colors, fonts, media, flexColumn } from '../../styles/theme';

export const StyledHero = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  font-family: ${fonts.header};
  ${flexColumn}
  align-items: center;
  justify-content: center;
  text-align: center;

  ${media.mobile`
    margin: 0;
    height: 100vh;
  `}
`;
export const HeroMask = styled.span`
  width: 100%;
  height: 100%;
  -webkit-mask-image: -webkit-gradient(linear, left 0%, left bottom, from(rgb(255, 255, 255)), to(rgba(0,0,0,0)));
`;

export const HeaderHeroImg = styled.img`
  width: 100%;
  height: 100%;
 clip-path: inset(0 0 60% 0);
  overflow: hidden;
  

  z-index: 1;
  position:relative;

`;

export const HeroText = styled.h1`
  font-size: 48px;
  position: absolute;
  left: 8vw;
  top: 20vh;
  color: ${colors.white};
`;

export const HeroDescription = styled.span`
  width: 100%;
  height: auto;
  background: ${colors.rust};
  top: 0;
  opacity: 1;
  z-index: 100;

  p {
    color: ${colors.white};
  }
`;

export const ShopNowButton = styled.button`
  position: absolute;
  top: 40vh;
  left: 20vw;
  color: ${colors.white};
  background: ${colors.primary};
  z-index: 100;
`;