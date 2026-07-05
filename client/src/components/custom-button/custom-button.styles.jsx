import styled, { css } from 'styled-components';

const buttonStyles = css`
  background: linear-gradient(to right, var(--button-primary), var(--button-secondary));
  color: var(--text-dark);
  border: none;

  &:hover {
    background: linear-gradient(to right, var(--button-secondary), var(--button-primary));
    color: var(--text-dark);
  }
`;

const invertedButtonStyles = css`
  background-color: var(--text-light);
  color: var(--text-dark);
  border: 1px solid var(--text-dark);

  &:hover {
    background-color: var(--text-dark);
    color: var(--text-light);
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
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
