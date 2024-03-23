import React from 'react';
import {
  ModalWindow,
  BlockOne,
  BlockOneH2,
  BlockOneText,
  BlockTwo,
  BlockButton,
} from './ModalLogin.styled';

const ModalLogin = ({ handleClose }) => {
  return (
    <ModalWindow>
      <BlockOne>
        <BlockOneH2>Log In</BlockOneH2>
        <BlockOneText>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </BlockOneText>
      </BlockOne>
      <BlockTwo>Input</BlockTwo>

      <BlockButton>Log In</BlockButton>
    </ModalWindow>
  );
};

export default ModalLogin;
