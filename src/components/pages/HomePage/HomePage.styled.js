import { Link } from 'react-router-dom';
import styled from 'styled-components';

import banner from '../../img/Rectangle_1.png';

export const WelcomeTitle = styled.div`
  width: 1376px;
  height: 736px;  
  background: transparent;
`;

export const ArticleHomePage = styled.div`
  width: 50%;
  height: 100%;
  background: url(${banner});  
  background-repeat: no-repeat;
  background-size: cover;
  top: 32px;
  right: 32px;
  z-index: -20;
  position: absolute;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const DivTitleBlock = styled.div`
  position: absolute;
  bottom: 0;  
  text-shadow: 4px 3px 0 var(--pr-button-background-color);
  width: 50%;
  height: 100%;
  background: var(--ns-background-color);  
  top: 32px;
  left: 32px;
  z-index: -20;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export const DivTitle = styled.div`
  width: 517px;
  height: 322px;
  margin-top: 251px;
  margin-left: 96px;

  border: 1px solid rgba(251, 251, 251, 0.4);
`;

export const BlockTitle = styled.span`
  display: block;
  font-weight: 500;
  font-size: 70px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #fbfbfb;
  margin-bottom: 28px;
`;

export const BlockText = styled.span`
  display: block;
  font-weight: 400;
  font-size: 28px;
  line-height: 107%;
  letter-spacing: -0.02em;
  color: #fbfbfb;
  margin-bottom: 82px;
`;

export const HomeBlockButton = styled(Link)`
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  padding: 18px 50px;
  width: 230px;
  height: 60px;
  text-decoration: none;
  color: var(--ns-text-color);
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.01em;
  cursor: pointer;
`;
