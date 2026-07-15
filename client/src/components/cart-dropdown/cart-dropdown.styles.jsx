import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';
import { colors, softShadow, flexColumn } from '../../styles/theme';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 540px;
  ${flexColumn}
  background-color: ${colors.tan};

  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  top: 90px;
  right: 40px;
  z-index: 5;
<<<<<<< HEAD
  color: ${colors.black};
  ${softShadow()}
=======
  color: black;
  box-shadow: 0px 1.5px 5px rgba(0,0,0,0.3)
>>>>>>> refs/remotes/origin/master
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 100%;
  ${flexColumn}
  overflow: scroll;
`;