import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;

  @media screen and (max-width: 800px) {
    height: 70px;
    padding: auto;
    margin-left: 60px;
    justify-content: space-evenly;
  }
`;

export const HeaderTitle = styled.h2`
  display: flex;

  width: 100%;

  text-shadow: 1px 0px 10px #000;
  font-weight: 600;
  font-size: 18px;
  padding: 0 auto;
  margin: 0 auto;
  &:hover {
    color: crimson;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const LogoContainer = styled.span`

padding: auto;
& img {
    margin: 0 0 0 15em;
    height: auto;
    max-width: 300px;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 2em auto 0 auto;
  padding: auto;
  &:hover {
    color: crimson;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  color: black;
  padding: 25px;
  height: 100%;
  font-size: 18px;

  font-weight: 300;
  cursor: pointer;
  &:hover {
    color: crimson;
  }
`;
