import useDocumentTitle from '../hooks/useDocumentTitle';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const HomePage: React.FC = () => {
  useDocumentTitle('당신이 개발자라면');

  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default HomePage;
