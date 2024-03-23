import React from 'react';
import styled from 'styled-components';
import closeIcon from '../img/x.png';

const ModalWrapper = styled.div`
  /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 9999;  
  display: ${props => (props.isOpen ? 'block' : 'none')}; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
`;

const ModalContent = styled.div`
  position: relative;
  width: 566px;  
  background-color: white;  
  min-height: 490px;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);  
`;

const ModalCloseButton = styled.button`
  
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;  
  color: #333;
`;

const CloseIcon = styled.img`
  width: 32px; 
  height: 32px;
`;

const ModalContainer = ({ isOpen, handleClose, children }) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <ModalCloseButton onClick={handleClose}>
          <CloseIcon src={closeIcon} alt="Close" />
        </ModalCloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalContainer;
