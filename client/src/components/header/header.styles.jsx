import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.nav`
  max-width: 100%;
  height: auto;
  padding: 0 8vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  poisition: relative;

  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-dark);
  color: var(--text-light);

  @media screen and (max-width: 800px) {
    padding: 0 4vw;
  }

  @media screen and (max-width: 540px) {
    flex-direction: column;
    padding: 2vh 2vw;
    height: auto;
  }
`;

export const HeaderTitle = styled.h2`
  text-shadow: 1px 0px 10px #000;
  font-weight: 600;
  font-size: 18px;
  padding: 0;
  margin: 0;
  &:hover {
    color: var(--color-accent);
  }
`;

export const LogoContainer = styled.span`

  padding: 1vh 1vw;
  @media (max-width: 540px) {
    width: 64px;
    height: auto;
    margin: 10px auto;

  }
`;

export const OptionsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;/* Aligns to the right for tablet & desktop */
  list-style: none;
  margin: 0;
  padding: 0;
  height: 15%;
  width: 100%;
  gap: 15px; /* Adds space between option links and the cart icon */

  @media screen and (max-width: 540px) {
    width: 100%;
    justify-content: center; /* Centers the row on mobile screens */
    flex-wrap: nowrap; /* Forces elements to stay in a single row */
    gap: 5px; /* Tighter spacing for smaller screens */
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  list-style: none;
  position: relative;

  font-weight: bold;
  color: var(--text-light);
  &:hover {
    color: var(--color-accent);
  }

  @media (max-width: 540px) {
    font-size: 12px;
    padding: 10px 5px;
  }
`;