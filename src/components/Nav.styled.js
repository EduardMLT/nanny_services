import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 0px 10px;
  border-radius: 8px;
  color: var(--ns-text-color);
  font-weight: 500;
  position: relative;
  margin-right: 25px;

  &:hover {
    border: 1px solid rgba(251, 251, 251, 0.4);
  }

  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: var(--ns-background-color);
    border-radius: 50%;
    top: 4px;
    right: 33%;
    transform: translateY(200%);
    display: none;
  }

  &.active::after {
    display: block;
  }
`;

export const NavBlock = styled.ul`
  display: flex;
  
`;
