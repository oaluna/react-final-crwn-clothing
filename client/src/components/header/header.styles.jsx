import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0 8vw;
  box-sizing: border-box;

  @media screen and (max-width: 800px) {
    height: 70px;
    padding: auto;
    margin-left: 8vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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
  padding: auto;
  & img {
    margin: 0;
    height: auto;
    max-width: 300px;
    display: flex;
    align-items: flex-start;
  }
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction:column;
    width: 100%;
    align-items: flex-start;
    
padding-top: 35px;
    text-align: center;
    transform: scale(1.2);
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
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    width: 100%;
    justify-content: space-evenly;
position: relative;
    margin-left: -4em;
    margin-top: 0;
  }
`;

export const OptionLink = styled(Link)`
  color: black;
  padding: 25px;
  height: 100%;
  font-size: 18px;

  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: rgba(118, 50, 89, 1);
  }
  @media and (max-width:800px) {
    padding: 0;
  }
`;
