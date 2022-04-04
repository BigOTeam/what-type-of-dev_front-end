import { useParams } from 'react-router-dom';

import Header from '../components/common/Header';
import TypeDetailSection from '../components/typeDetail/TypeDetailSection';
import Footer from '../components/common/Footer';

type Params = {
  jobId: string;
};

const JobTypeDetailPage: React.FC = () => {
  const { jobId } = useParams<Params>();

  return (
    <>
      <Header />
      <TypeDetailSection jobId={jobId} />
      <Footer />
    </>
  );
};

export default JobTypeDetailPage;
