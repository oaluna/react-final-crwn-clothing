import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.nav`
  max-width: 100%;
  height: auto;
  padding: 0 8vw;
  margin: 0 auto;
  display: flex;
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
  display: flex;
    width: 64px;
    height: 64px;
  align-items: center;
  gap: 2vw;
  padding: 1vh 1vw;
  @media (max-width: 540px) {
  width: 96px;
  height: 96px;

    margin: 10px auto;
    gap: 1vw;
  }
`;

export const OptionsContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: flex-end;

  @media screen and (max-width: 540px) {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px 15px;
 
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  list-style: none;
  
  font-weight: bold;
  color: var(--text-light);
  &:hover {
    color: var(--color-accent);
  }

  @media (max-width: 540px) {
  li{
text-decoration: none;
color: #333;
    font-size: 12px;
    padding: 10px 5px;
}
  }
`;
