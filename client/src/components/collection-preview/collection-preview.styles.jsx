import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
padding: 14px;

  &:hover {
    cursor: pointer;
    & .background-image {
      overflow: visible;
      transform: scale(1.1);
      transition: transform 2.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .content {
      transition: transform 2.2s;
      opacity: 1;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    align-items: center;
    &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.1);
      transition: transform 2.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .content {
      transition: transform 2.2s;
      opacity: 1;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  }
  }
`;

export const TitleContainer = styled.h1`
  width: 100vw;
  font-size: 36px;
  font-weight: 100;
  margin-bottom: 25px;
  margin-left: 60px;
  padding: 5px 5em;
  cursor: pointer;
  font-family: 'Yellowtail', cursive;

  background: linear-gradient(245deg, #763259 0%, #886e6b 84%);
  color: white;
  &:hover {
    color: pink;
  }
`;

export const PreviewContainer = styled.div`
  max-width: 80vw;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 15px 15px;
  margin: 5px auto;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;
