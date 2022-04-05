import styled from '@emotion/styled';

import { ChartContentsType } from '../../types/chartTypes';

interface ChartTitleSummaryProps {
  data: ChartContentsType;
}

const FONT_COLOR = '#45494b';

const ChartTitleSummary: React.FC<ChartTitleSummaryProps> = ({ data }) => {
  return (
    <Wrapper>
      <Card>
        <TitleImg
          src={data.groupImg}
          alt={`${data.groupName} 대표 캐릭터 이미지`}
        />
        <Head>{data.groupName}</Head>
        <Description>{data.description}</Description>
      </Card>
      <Card>
        <Head>요약</Head>
        <SummaryList>
          {data.summaryInfos.map((summary, index) => (
            <SummaryItem key={index}>{summary}</SummaryItem>
          ))}
        </SummaryList>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: calc(50% - 8px);
  margin-bottom: 14px;
  padding: 40px;
  border-radius: 14px;
  border: 1px solid #d7e2eb;
  background-color: #ffffff;
  box-sizing: border-box;
  color: ${FONT_COLOR};

  @media (max-width: 767px) {
    width: 100%;
  }
  @media (max-width: 575px) {
    padding: 24px;
  }
`;

const TitleImg = styled.img`
  width: fit-content;
  height: 72px;
  margin-bottom: 16px;

  @media (max-width: 575px) {
    width: 72px;
    height: auto;
  }
`;

const Head = styled.h2`
  margin-bottom: 12px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.6;

  @media (max-width: 575px) {
    font-size: 24px;
  }
`;

const Description = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #6a6d6f;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const SummaryList = styled.ul`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #6a6d6f;

  @media (max-width: 575px) {
    font-size: 18px;
  }
`;

const SummaryItem = styled.li`
  margin-bottom: 16px;
  padding-left: 3px;

  &::marker {
    content: '\\2022';
    display: inline-block;
    padding-right: 3px;
    font-size: 20px;
    text-align: left;
  }
`;

export default ChartTitleSummary;
