import React, {  useState } from 'react';

import {
  WelcomeTitle,
  ArticleHomePage,
  DivTitleBlock,
  DivTitle,
  BlockTitle,
  BlockText,
  HomeBlockButton,
} from './HomePage.styled';

import {
  ContentHeader,
  Logo,
  WrapLogo,
  NavBlock,
  NavBlockButton,
} from '../../AppLayout.styled';

import { Nav } from '../../Nav';

import ModalContainer from '../../Modal/ModalContainer';
import ModalLogin from '../../authorized/ModalLogin';
import ModalRegistration from '../../authorized/ModalRegistration';

const HomePage = () => {
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
    <>
      <ContentHeader>
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
              <NavBlockButton onClick={handleRegistrationClick}>
                Registration
              </NavBlockButton>
            </li>
          </NavBlock>
        </nav>
      </ContentHeader>

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

      <WelcomeTitle>
        <DivTitleBlock>
          <DivTitle>
            <BlockTitle>Make Life Easier for the Family:</BlockTitle>

            <BlockText>Find Babysitters Online for All Occasions</BlockText>
            <HomeBlockButton  to="/catalog">
              Get started
            </HomeBlockButton>
          </DivTitle>
        </DivTitleBlock>
        <ArticleHomePage></ArticleHomePage>
      </WelcomeTitle>
    </>
  );
};

export default HomePage;
