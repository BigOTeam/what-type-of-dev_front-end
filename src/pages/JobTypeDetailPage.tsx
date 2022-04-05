import { useParams } from 'react-router-dom';

import Header from '../components/common/Header';
import JobTypeDetailSection from '../components/typeDetail/JobTypeDetailSection';
import Footer from '../components/common/Footer';

type Params = {
  id: string;
};

const JobTypeDetailPage: React.FC = () => {
  const { id } = useParams<Params>();

  return (
    <>
      <Header />
      <JobTypeDetailSection id={Number(id)} />
      <Footer />
    </>
  );
};

export default JobTypeDetailPage;
