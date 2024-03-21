import React, { useState } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Nav } from './Nav';
import ModalContainer from './Modal/ModalContainer'; 
import ModalLogin from './authorized/ModalLogin';
import ModalRegistration from './authorized/ModalRegistration';
import { Loader } from './LoaderSpinner/LoaderSpinner';
import {
  Container,
  Header,
  Logo,
  WrapLogo,
  NavBlock,
  NavBlockButton,
} from './AppLayout.styled';

export const AppLayout = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleRegistrationClick = () => {
    setShowRegistrationModal(true);
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  const handleRegistrationModalClose = () => {
    setShowRegistrationModal(false);
  };

  return (
    <Container>
      <Header>
        <WrapLogo>
          <Logo>Nanny.Services</Logo>
        </WrapLogo>
        <Nav />
        <nav>
          <NavBlock>
            <li>
              <NavBlockButton onClick={handleLoginClick}>Login</NavBlockButton>
            </li>
            <li>
              <NavBlockButton onClick={handleRegistrationClick}>Registration</NavBlockButton>
            </li>
          </NavBlock>
        </nav>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

     
      <ModalContainer
        isOpen={showLoginModal}
        handleClose={handleLoginModalClose}
      >
        <ModalLogin />
      </ModalContainer>

      
      <ModalContainer
        isOpen={showRegistrationModal}
        handleClose={handleRegistrationModalClose}
      >
        <ModalRegistration />
      </ModalContainer>

      <Toaster />
    </Container>
  );
};