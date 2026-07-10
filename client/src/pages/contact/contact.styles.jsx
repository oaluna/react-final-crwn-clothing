import styled from 'styled-components'

export const ContactContainer = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;

  @media and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
    img {
    max-width: 50%;
    position: relative;
  }
`;