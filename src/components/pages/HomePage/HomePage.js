

import {
  WelcomeTitle,
  ArticleHomePage,
  DivTitleBlock,
  DivTitle,
  BlockTitle,
  BlockText,
  HomeBlockButton,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <WelcomeTitle>
      <DivTitleBlock>
        <DivTitle>
          <BlockTitle>Make Life Easier for the Family:</BlockTitle>

          <BlockText>Find Babysitters Online for All Occasions</BlockText>
          <HomeBlockButton to="/catalog">
            Get started
          </HomeBlockButton>
        </DivTitle>
      </DivTitleBlock>
      <ArticleHomePage></ArticleHomePage>
    </WelcomeTitle>
  );
};

export default HomePage;
