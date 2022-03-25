import styled from '@emotion/styled';

import useDocumentTitle from '../hooks/useDocumentTitle';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SurveyStartSection from '../components/home/SurveyStartSection';

const HomePage: React.FC = () => {
  useDocumentTitle('당신이 개발자라면');

  return (
    <>
      <Header />
      <Container>
        <SurveyStartSection />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.main`
  padding: 0 16px;
  background-color: #e8f4fd;
`;

export default HomePage;
