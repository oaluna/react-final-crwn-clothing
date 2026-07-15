import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';
import { colors, media, softShadow, flexColumn } from '../../styles/theme';

export const CollectionItemContainer = styled.div`
  width: 350px;
  ${flexColumn}
  height: 600px;
  align-items: center;
  position: relative;
<<<<<<< HEAD
  color: ${colors.black};
  background-color: ${colors.tan};
  ${softShadow('4px')}
=======
  color: black;
  background-color: #c7ac92;
  box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.3);
>>>>>>> refs/remotes/origin/master
  margin: 15px;
  padding: 15px;
  cursor: pointer;
  font-size: 24px;
  overflow: visible;
.CollectionFooter {
   opacity: 0;
   height:125px;
   padding-top:15px;
}
  &:hover {
    box-shadow: 0px 1.5px 8px rgba(0, 0, 0, 0.45);
    .image {
      opacity: 1;
      transform: scale(1.5);
      transition: 0.2s ease-in;
      position: relative;
      z-index: 2;
      margin-bottom: 5em;
    }

    button {
      opacity: 1;
      display: flex;
    }
    .CollectionFooter {



        opacity: 1;

        transition: 0.3s ease-in;
        background: linear-gradient(235deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.06) 84%);
        backdrop-filter: blur(22px);
        z-index: 200;
        margin-top: 5em;
        border: 1px solid rgba(0,0,0,0.2);
      }

    }
  }

  ${media.tabletLarge`
    width: 100%;

    &:hover {
      .image {
        opacity: 1;
      }

      button {
        opacity: 1;
        color: ${colors.gold};
      }
    }
  `}
`;

export const AddButton = styled(CustomButton)`
  width: 100%;
  opacity: 0.7;
  position: absolute;
  top: 100%;
  color: ${colors.white};
  border: none;
<<<<<<< HEAD
  background: ${colors.gray};

  ${media.tabletLarge`
=======
background; gray;
  @media screen and (max-width: 800px) {
>>>>>>> refs/remotes/origin/master
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  `}
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 80%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  position: relative;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 50%;
  ${flexColumn}
  align-items: flex-start;
  text-align: left;
  position: absolute;
  margin: 5px 0 0 0;
  bottom: 0;
`;

export const NameContainer = styled.span`
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 5px;
  text-align: left;
`;

export const NameContainerRow = styled(NameContainer)`
  flex-direction: row;
  align-items: flex-start;
`;

export const PriceContainer = styled.span`
  font-size: 20px;
  text-align: right;
  float: right;
  font-weight: 700;
  color: ${colors.white};
`;

export const DescriptionContainer = styled.span`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  position: absolute;
<<<<<<< HEAD
  color: ${colors.black};
  ${flexColumn}
=======
  color:black;
  flex-direction: column;
>>>>>>> refs/remotes/origin/master
  align-items: flex-start;
  text-align: left;
  padding: 5px;
`;