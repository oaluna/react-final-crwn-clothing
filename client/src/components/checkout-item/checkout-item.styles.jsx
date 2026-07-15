import styled from 'styled-components';
import { colors, softShadow } from '../../styles/theme';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 100px;
  border-bottom: 1px solid ${colors.black};
  color: ${colors.black};

  padding: 15px 0px;
  font-size: 20px;
  align-items: center;
  & .removeLabel {
    opacity: 0;
    & :hover {
      color: ${colors.gray};
      font-size: 8px;
      opacity: 1;
      z-index: 1;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 20%;
  padding-right: 25px;
  margin-left: -2em;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  width: 20%;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
width: 20%;
  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  margin-right: 5%;
  padding: 0 4px;
  cursor: pointer;
  color: ${colors.white};
  text-align: right;
  background: ${colors.gray};
  border-radius: 50%;
  font-size: 12px;
  ${softShadow('3px')}
`;