import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  height: 800px;
  background-color: transparent;
  padding: 32px;  
  margin: 0 auto;  
`;

export const Main = styled.div`  
  background-color: var(--ns-background-color);
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 1184px;
  margin-top: 20px;
  margin-left: 96px;
  /* background: var(--ns-background-color); */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 12px;
  padding: 8px 0;
  padding-right: 16px;
  margin-bottom: 16px; */
  /* border-bottom: 1px solid black; */
`;

export const WrapLogo = styled.div`
  /* width: 100%; */
`;

export const Logo = styled.p`
  width: 164px;
  height: 28px;
  font-family: inherit;
  color: var(--ns-text-color);
  /* background-color: transparent; */
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  transition: color 0.5s ease-in-out;
  text-transform: uppercase;
  font-weight: 900;
  margin-right: 487px;
  /* margin-left: 96px; */
  justify-content: flex-start;

  &:hover {
    color: #a61732;
  }
`;


export const NavBlock = styled.ul`
  display: flex;
`;

export const NavBlockButton = styled.button`
  /* padding: 8px 16px;
  border-radius: 4px; */
  border-radius: 30px;
  padding: 14px 40px;
  /* width: 168px;
  height: 48px; */
  margin-right: 8px;
  text-decoration: none;
  color: var(--ns-text-color);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;

  &:active {
    background-color: var(--ns-button-background-color);
  }

  &:hover {
    border: 1px solid rgba(251, 251, 251, 0.4);
  }
`;