import styled from 'styled-components';

export const RevealContainer = styled.div`
  transition-property: opacity, transform;
  transition-duration: 1000ms;
  transition-timing-function: ease-out;
  transition-delay: ${({ delay }) => delay}ms;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)'};
`;