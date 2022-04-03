import { useState, useEffect } from 'react';

import useDocumentTitle from '../hooks/useDocumentTitle';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import LinkSection from '../components/home/LinkSection';
import surveyService from '../services/surveyService';

const HomePage: React.FC = () => {
  const [responseUserCount, setResponseUserCount] = useState<number>();

  useDocumentTitle('당신이 개발자라면');

  useEffect(() => {
    const getResponseUserCount = async () => {
      const count = await surveyService.getNumberOfParticipants();

      setResponseUserCount(count);
    };

    getResponseUserCount();
  }, []);

  return (
    <>
      <Header />
      <LinkSection
        headText={'당신이 개발자라면?'}
        description={`누적 테스트 응답자 수 ${responseUserCount}명`}
        linkButtonText={'테스트 시작'}
        linkUrl={'/surveys'}
        imgUrl={'/images/common/self-introduction_character.png'}
        isReversed={false}
        backgroundColor={'#e8f4fd'}
      />
      <LinkSection
        headText={'테스트 종합 통계'}
        description={'흥미로운 통계 결과를 확인해보세요.'}
        linkButtonText={'통계 보러가기'}
        linkUrl={'#'}
        imgUrl={'/images/common/web_character.png'}
        isReversed={true}
        backgroundColor={'#bcdffb'}
      />
      <Footer />
    </>
  );
};

export default HomePage;
