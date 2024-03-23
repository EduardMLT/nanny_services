import styled from 'styled-components';

export const ModalWindow = styled.div`
  left: calc((100% - 541px) / 2);
  width: 566px;
  height: 516px;
  border-radius: 30px;
`;

export const BlockOne = styled.div`
  width: 438px;
  height: 128px;
  margin-top: 64px;
  margin-left: 64px;
`;

export const BlockOneH2 = styled.h2`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #11101c;
`;

export const BlockOneText = styled.span`
  display: grid;
  width: 438px;
  height: 60px;
  margin-top: 20px;
`;

export const BlockTwo = styled.div`
  width: 438px;
  height: 192px;
  margin-top: 40px;
  margin-left: 64px;
`;

export const BlockButton = styled.button`
  width: 438px;
  height: 52px;
  margin-top: 40px;
  margin-left: 64px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  background-color: var(--ns-button-background-color);
  border-radius: 30px;
`;
