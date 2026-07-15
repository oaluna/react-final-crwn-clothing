import styled from 'styled-components';
import { colors, fonts, media, flexColumn } from '../../styles/theme';

export const CollectionPreviewContainer = styled.div`
  ${flexColumn}
  padding: 14px;

  &:hover {
    cursor: pointer;
    & .background-image {
      overflow: visible;
      transform: scale(1.1);
      transition: transform 2.2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      left: 5em;
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

  ${media.tabletLarge`
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
  `}
`;

export const TitleContainer = styled.h1`
  width: 100%;
  font-size: 36px;
  font-weight: 100;
  margin-bottom: 25px;
  margin-left: 60px;
  padding: 5px 5em;
  box-sizing: border-box;
  cursor: pointer;
  font-family: ${fonts.header};
  height: 2px;
  background: linear-gradient(
    245deg,
    black 5%,
    rgba(136, 110, 107, 0) 95%
  );
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: ${colors.black};

  &:hover {
    color: ${colors.black};
  }

  ${media.tabletLarge`
    flex-direction: column;
    align-items: flex-start;
    margin: 3em;
    justify-content: flex-start;
    padding: 0 3em;
  `}
`;

export const PreviewContainer = styled.div`
  max-width: 80vw;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 15px 15px;
  margin: 5px auto;

  ${media.tabletLarge`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  `}
`;
