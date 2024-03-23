import React from 'react';
import {
  ModalWindow,
  BlockOne,
  BlockOneH2,
  BlockOneText,
  BlockTwo,
  BlockButton,
} from './ModalRegistration.styled';

const ModalRegistration = ({ handleClose }) => {
  return (
    <ModalWindow>
      <BlockOne>
        <BlockOneH2>Registration</BlockOneH2>
        <BlockOneText>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </BlockOneText>
      </BlockOne>
      <BlockTwo>Input</BlockTwo>

      <BlockButton>Registration</BlockButton>
    </ModalWindow>
  );
};

export default ModalRegistration;
