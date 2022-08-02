import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  height: 600px;
  align-items: center;
  position: relative;
  color: black;
  box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.3);
  margin: 15px 25px;
  padding: 15px;
  cursor: pointer;
  font-size: 24px;
  overflow: visible;

  &:hover {
    .image {
      opacity: 1;
      transform: scale(1.5);
      transition: 0.2s ease-in;

      z-index: 2;
    }

    button {
      opacity: 1;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: 1;
      }

      button {
        opacity: 1;
        color: goldenrod;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 100%;
  opacity: 0.7;
  position: absolute;
  top: 100%;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 80%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  position: relative;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  margin:5px 0;
  bottom: 0;
`;

export const NameContainer = styled.span`
  margin: 14px;
  width:100%;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align:left;
`;

export const PriceContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content:space-between;
  position: relative;

  text-align: right;
  float: right;
  font-weight: 700;
  color: crimson;
`;

export const DescriptionContainer = styled.span`
  max-width: 100%;
  font-size: 12px;
  line-height: 1.5;
  margin: 60% 15px 15px 15px;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  text-align:left;
  padding: 15px 0px;
  @media (max-width: 768px) {
    overflow-y: scroll;
    height: 50px;
  }
`;
