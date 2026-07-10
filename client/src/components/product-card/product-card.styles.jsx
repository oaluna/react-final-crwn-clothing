import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 300px;
  height: 400px;
  background: var(--color-primary);
  color: var(--text-dark);
  
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ImageContainer = styled.div`

  width: 100%;
  background-position: center;
padding: -10vh 20px 30vh 20px;
  background-repeat: no-repeat;
  background-size: cover;
  position:relative;
  margin-top: 0vh;
  img {
  z-index: 0;
    height: 300px;
    width: 100%;
    object-fit: contain;
}
`;

export const Tag = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background: var(--color-highlight);
  color: var(--text-dark);
  padding: 5px 10px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 3px;
  letter-spacing: 1px;
`;

export const PriceTag = styled.div`
  position: absolute;
  bottom: -20px;
  right: 20px;
  background: var(--bg-dark);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 10;
  
  span {
    font-size: 12px;
    margin-right: 2px;
    margin-top: -5px;
  }
`;

export const ContentArea = styled.div`
  padding: 30px 20px 20px;
`;

export const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 22px;
  font-weight: 700;
  color: var(--text-dark);
  z-index: 222;
`;

export const Subtitle = styled.p`
  margin: 0 0 20px;
  font-size: 14px;
  color: var(--text-dark);
  line-height: 1.5;
`;

export const ColorSelectors = styled.div`
  display: flex;
  gap: 8px;
`;

export const ColorDot = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${props => props.selected ? 'var(--text-dark)' : 'transparent'};
  background-color: ${props => props.color};
  cursor: pointer;
  padding: 0;
  outline: none;
  box-shadow: inset 0 0 0 2px var(--color-primary);
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--text-dark);
  }
`;

export const SizeSelect = styled.select`
  appearance: none;
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 5px 25px 5px 10px;
  font-size: 13px;
  font-family: inherit;
  font-weight: 500;
  color: var(--text-dark);
  cursor: pointer;
  outline: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23999%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 8px auto;

  &:focus {
    border-color: #aaa;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  border-top: 1px solid #eee;
  margin: 100% -20px -20px; /* Pull to edges */
`;

export const ActionButton = styled.button`
  flex: ${props => props.primary ? '2' : '1'};
  background: ${props => props.primary ? 'var(--color-accent)' : '#c7ac92'};
  color: ${props => props.primary ? 'var(--text-light)' : 'var(--text-dark)'};
  border: none;
  padding: 15px 0;
  font-size: ${props => props.primary ? '13px' : '18px'};
  font-weight: 700;
  text-transform: ${props => props.primary ? 'uppercase' : 'none'};
  letter-spacing: ${props => props.primary ? '1px' : 'normal'};
  cursor: pointer;
  transition: all 0.2s ease;
  border-right: ${props => props.primary ? 'none' : '1px solid #eee'};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${props => props.primary ? 'var(--color-success)' : '#f9f9f9'};
    color: ${props => props.primary ? 'var(--text-light)' : 'var(--color-accent)'};
  }
  
  &:last-child {
    border-right: none;
  }
`;