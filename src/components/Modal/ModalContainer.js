import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const ModalContent = styled.div`
  position: relative;
  width: 400px;
  max-width: 90%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ModalContainer = ({ isOpen, handleClose, children }) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <ModalCloseButton onClick={handleClose}>Close</ModalCloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalContainer;
