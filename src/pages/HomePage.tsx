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
      <TestStartSection />
      <StatisticsSection />
      <Footer />
    </>
  );
};

export default HomePage;
