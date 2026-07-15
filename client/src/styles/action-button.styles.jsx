// Shared "primary / secondary" action button used on the product page and
// product card. Both call sites toggle the same primary/secondary look via
// the `primary` prop; only spacing and idle colors differ per context.
import styled from 'styled-components';
import { colors, transitionDefault } from './theme';

export const ActionButton = styled.button`
  flex: ${(props) => (props.primary ? '2' : '1')};
  background: ${(props) => (props.primary ? colors.black : props.secondaryBg || colors.gray)};
  color: ${(props) => (props.primary ? colors.gray : colors.black)};
  border: none;
  border-radius: ${(props) => props.borderRadius || '0'};
  padding: ${(props) => props.padding || '15px 0'};
  font-size: ${(props) => (props.primary ? '13px' : '18px')};
  font-weight: 700;
  text-transform: ${(props) => (props.primary ? 'uppercase' : 'none')};
  letter-spacing: ${(props) => (props.primary ? '1px' : 'normal')};
  cursor: pointer;
  ${transitionDefault}
  border-right: ${(props) => (props.primary ? 'none' : `1px solid ${props.secondaryBorder || colors.grayBorderLight}`)};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${(props) => (props.primary ? colors.highlight : props.secondaryHoverBg || colors.graySurface)};
    color: ${(props) => (props.primary ? colors.gray : props.secondaryHoverColor || colors.gray)};
  }

  &:last-child {
    border-right: none;
  }
`;