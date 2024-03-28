import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  /* height: 800px; */
  background-color: transparent;
  padding: 32px;  
  margin: 0 auto;  
`;

export const Header = styled.header`
  width: 1184px;  
  margin-left: 96px;
  display: flex;
  /* align-items: center;
  justify-content: space-between; */
  position: fixed; /* Fixed heder */
  top: 52px; 
  left: 0;
   z-index: 999;
   
`;

export const ContentHeader = styled.div`
  width: 1184px;
  /* margin-left: auto;
  margin-right: auto; */
  margin-left: 96px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed; /* Fixed heder */
  top: 52px;
  left: 0;
  z-index: 999;
`;

export const WrapLogo = styled.div`
  /* width: 100%; */
`;

export const Logo = styled.p`
  width: 164px;
  height: 28px;
  font-family: inherit;
  color: var(--ns-text-color);
  
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  transition: color 0.5s ease-in-out;
  text-transform: uppercase;
  font-weight: 900;
  margin-right: 487px;
  
  justify-content: flex-start;

  &:hover {
    color: #a61732;
  }
`;


export const NavBlock = styled.ul`
  display: flex;
`;

export const NavBlockButton = styled.button`
  
  border-radius: 30px;
  padding: 14px 40px;
  
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