import styled from '@emotion/styled';

import { ChartHeaderType } from '../../types/chartTypes';

interface ChartTitleProps {
  headerData: ChartHeaderType;
}

const START_DATE = '2022/04/07';
const FONT_COLOR = '#45494b';

const Header: React.FC<ChartTitleProps> = ({ headerData }) => {
  return (
    <Container>
      <Wrapper>
        <Head>당신이 개발자라면 설문 통계</Head>
        <Period>
          설문 조사 기간 : {START_DATE} ~ {headerData.endDate}
        </Period>
        <TitleInfo>
          {`${headerData.userCount}명의 응답자(현업 개발자: ${headerData.careerCount}명, 비개발자: ${headerData.newCount}명)가
          답변을 했습니다. 다른 사람들의 의견을 구경하고 내 답변과 비교해보세요!`}
        </TitleInfo>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.section`
  text-align: center;
  color: ${FONT_COLOR};
  background: #e8f4fd;
  // background: url(/images/chart/title.png);
  // opacity: 0.55;
`;

const Wrapper = styled.div`
  padding: 32px 48px;
  opacity: 1;

  @media (max-width: 767px) {
    padding: 32px 48px 28px;
  }
  @media (max-width: 575px) {
    padding: 32px 48px 24px;
  }
`;

const Head = styled.h1`
  margin: 20px 0 28px;
  font-size: 52px;
  font-weight: 700;

  @media (max-width: 767px) {
    margin-bottom: 24px;
    font-size: 44px;
  }
  @media (max-width: 575px) {
    font-size: 32px;
  }
`;

const Period = styled.h2`
  padding-top: 8px;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 767px) {
    padding-top: 4px;
  }
  @media (max-width: 575px) {
    font-size: 18px;
  }
`;

const TitleInfo = styled.h2`
  margin: 24px 32px 16px;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;

  @media (max-width: 767px) {
    margin: 24px 20px 16px;
  }
  @media (max-width: 575px) {
    margin: 16px 16px 16px;
    font-size: 14px;
  }
`;
