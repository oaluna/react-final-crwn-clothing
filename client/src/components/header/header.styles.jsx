import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, media } from '../../styles/theme';

export const HeaderContainer = styled.nav`
  max-width: 100%;
  height: auto;
  padding: 2vh 8vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.gray};

  ${media.tabletLarge`
    padding: 0 4vw;
  `}

  ${media.mobile`
    flex-direction: column;
    padding: 2vh 2vw;
    height: auto;
  `}
`;

export const HeaderTitle = styled.h2`
  text-shadow: 1px 0px 10px ${colors.black};
  font-weight: 600;
  font-size: 18px;
  padding: 0;
  margin: 0;
  &:hover {
    color: ${colors.gray};
  }
`;

export const LogoContainer = styled.span`
  object-fit: cover;
  ${media.mobile`
    display: flex;
  `}
`;

export const LogoComponent = styled.img`
  width: 84px;
  height: 84px;
  margin-left: 8vw;
`;

export const OptionsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: flex-end;
  list-style: none;
  margin-right: 8vw;
  padding: 0;
  gap: 45px; /* Adds space between option links and the cart icon */

  ${media.mobile`
    width: 100%;
    justify-content: space-evenly; /* Centers the row on mobile screens */
    flex-wrap: nowrap; /* Forces elements to stay in a single row */
    gap: 5px; /* Tighter spacing for smaller screens */
  `}
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  list-style: none;
  position: relative;

  font-weight: bold;
  color: ${colors.link};
  &:hover {
    color: ${colors.gray};
  }

  ${media.mobile`
    font-size: 12px;
  `}
`;
