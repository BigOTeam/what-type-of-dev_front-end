import { useParams } from 'react-router-dom';

import Header from '../components/common/Header';
import TypeDetailSection from '../components/typeDetail/TypeDetailSection';
import Footer from '../components/common/Footer';

type Params = {
  id: string;
};

const JobTypeDetailPage: React.FC = () => {
  const { id } = useParams<Params>();

  return (
    <>
      <Header />
      <TypeDetailSection id={Number(id)} />
      <Footer />
    </>
  );
};

export default JobTypeDetailPage;
