import styled, { css } from 'styled-components';

const buttonStyles = css`
  background: linear-gradient(
    245deg,
    rgba(118, 50, 89, 1) 0%,
    rgba(136, 110, 107, 1) 85%
  );
  color: white;
  border: none;

  &:hover {
    color: black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
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
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
