import styled from '@emotion/styled';

import useDocumentTitle from '../hooks/useDocumentTitle';

import Header from '../components/common/Header';
import TestStartSection from '../components/home/TestStartSection';
import StatisticsSection from '../components/home/StatisticsSection';
import Footer from '../components/common/Footer';

const HomePage: React.FC = () => {
  useDocumentTitle('당신이 개발자라면');

  return (
    <>
      <Header />
      <Container>
        <TestStartSection />
        <StatisticsSection />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.main`
  padding: 0 16px;
`;

export default HomePage;
