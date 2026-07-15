import styled from 'styled-components';
import { colors, media, flexCenter, flexColumnCenter } from '../../styles/theme';

export const MenuItemContainer = styled.div`
  min-width: 350px;
  height: 600px;
  overflow: hidden;
  flex: 1 1 auto;
  ${flexCenter}
  border: none;
  margin: 0 7.5px 15px;
  padding: 15px;
  box-shadow: 0px 2px 3.8px rgba(0, 0, 0, 0.23);
  background: ${colors.white}; /* fallback for browsers without gradient support */
  background: -webkit-linear-gradient(
    183deg,
    rgba(118, 50, 89, 0.11) 15%,
    rgba(175, 193, 149, 0.06) 92%
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    183deg,
    rgba(118, 50, 89, 0.11) 15%,
    rgba(175, 193, 149, 0.06) 92%
  );
  &:hover {
    box-shadow: 0px 2px 4.5px rgba(0, 0, 0, 0.3);
    overflow: visible;
    cursor: pointer;
    & .background-image {
      transform: scale(1.5);
      transition: transform 0.4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
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
    height: ${({ size }) => (size ? '380px' : '240px')};
    min-width: 50%;

    flex: 1 1 auto;
    ${flexCenter}
    border: none;
    margin: 0 7.5px 15px;
    &:hover {
      cursor: pointer;
      & .background-image {
        transform: scale(2);
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

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 0;
  background-size: cover;
  background-position: center;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
`;

export const ContentContainer = styled.div`
  height: 90px;
  width: ${({ size }) => (size ? '380px' : '240px')};
  padding: 0 25px;
  ${flexColumnCenter}
  border: 1px solid ${colors.black};
  opacity: 0.7;
  position: absolute;
  &:hover {
    background: linear-gradient(
      138deg,
      rgba(118, 50, 89, 0.61) 15%,
      rgba(175, 193, 149, 0.56) 92%
    );
  }

  ${media.tabletLarge`
    opacity: 1;
  `}
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  text-shadow: 1px 0px 10px ${colors.bgDark};
  font-size: 22px;
  color: ${colors.white};
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  text-shadow: 1px 0px 10px ${colors.bgDark};
  font-size: 16px;
  color: ${colors.white};
`;
