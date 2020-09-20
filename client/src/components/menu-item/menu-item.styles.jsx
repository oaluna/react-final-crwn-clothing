import styled from 'styled-components'

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? '380px' : '240px')};
  min-width: 30%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
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

  @media screen and (max-width: 800px) {
    height: ${({ size }) => (size ? '380px' : '240px')};
    min-width: 50%;
    overflow: hidden;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
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
`

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: linear-gradient(45deg, #03ffdb 0%, #d1f 100%);
  opacity: 0.7;
  position: absolute;

  @media screen and (max-width: 800px) {
    opacity: 1;
  }
`

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  text-shadow: 1px 0px 10px #000;
  font-size: 22px;
  color: white;
`

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  text-shadow: 1px 0px 10px #000;
  font-size: 16px;
  color: white;
`
