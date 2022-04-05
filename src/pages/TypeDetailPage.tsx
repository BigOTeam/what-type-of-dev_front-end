import { Link } from 'react-router-dom';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const TypeDetailPage: React.FC = () => {
  return (
    <>
      <Header />
      <Link to={{ pathname: '/detail', id: 1 }}>1번 타입</Link>
      <Link to={{ pathname: '/detail', id: 2 }}>2번 타입</Link>
      <Footer />
    </>
  );
};

export default TypeDetailPage;
