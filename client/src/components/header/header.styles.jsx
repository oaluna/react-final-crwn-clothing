import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.nav`
max-width: 100%;
height: 120px;
padding: 0 8vw;
margin: 0 auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
@media screen and (max-width: 400px){
padding: 0 2vw;
}
`;

export const HeaderTitle = styled.h2`
  display: flex;

  width: 100%;

  text-shadow: 1px 0px 10px #000;
  font-weight: 600;
  font-size: 18px;
  padding: 0;
  margin: 0;
  &:hover {
    color: crimson;
  }
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const LogoContainer = styled.span`
display: flex;
align-items: center;
gap: 8vw;
padding: 2vh 2vw;
  }
`;

export const OptionsContainer = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
    justify-content: flex-end;

  align-items: center;
  margin: 2em 0 0 auto;
  padding: auto;
  &:hover {
    color: crimson;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    width: 100%;
position: relative;
    margin-left: -4em;
    margin-top: 0;
  }
`;

export const OptionLink = styled(Link)`

  text-decoration: none;
list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 2vw;
  font-weight: bold;
  color: #333;
  &:hover {
    color: crimson;

  }
  @media screen and (max-width: 800px) {
  font-size: 12px;
  }

`;
