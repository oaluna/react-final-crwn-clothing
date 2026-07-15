import styled, { css } from 'styled-components';
import { colors, fonts } from '../../styles/theme';

const buttonStyles = css`
<<<<<<< HEAD
  background: linear-gradient(to right, ${colors.bgDark}, ${colors.bgLight});
  color: ${colors.black};
=======
  background: linear-gradient(to right, peach, mauve);
  color: black;
>>>>>>> refs/remotes/origin/master
  border: none;
  opacity: 1;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.21);
  &:hover {
<<<<<<< HEAD
    background: linear-gradient(to right, ${colors.bgLight}, ${colors.bgLight});
    color: ${colors.black};
=======
    background: linear-gradient(to right, mauve, peach);
    color: black;
>>>>>>> refs/remotes/origin/master
  }
`;

const invertedButtonStyles = css`
  background-color: ${colors.white};
  color: ${colors.black};
  border: 1px solid ${colors.black};

  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: ${colors.googleBlue};
  color: ${colors.white};

  &:hover {
    background-color: ${colors.googleBlueHover};
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: ${fonts.body};
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;