import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0vh auto;
  overflow: hidden;
  padding: 0;
  form {
  width: 60%;
  max-width: 100%;
  }

  @media (max-width: 720px) {
  flex-direction: column;
  align-items: center;
  }
`;

export const StyledContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  position: relative;
  align-items: center;
  justify-content: center;

`;
export const ContactFormTitle = styled.h2`
  margin: 10px 0;
`;
