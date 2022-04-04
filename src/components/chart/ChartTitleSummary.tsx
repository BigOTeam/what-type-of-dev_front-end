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
          src={data.imgUrl}
          alt={`${data.groupName} 대표 캐릭터 이미지`}
        />
        <TitleHead>{data.groupName}</TitleHead>
        <Description>{data.description}</Description>
      </Card>
      <Card>
        <SummaryHead>요약</SummaryHead>
        <SummaryList>
          {data.summaryInfo.map((summary, index) => (
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
  margin-bottom: 12px;
  padding: 64px;
  box-sizing: border-box;
  border-radius: 25px;
  border: 1px solid #d7e2eb;
  background-color: #ffffff;
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

const TitleHead = styled.h2`
  margin-bottom: 12px;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.6;

  @media (max-width: 767px) {
    font-size: 28px;
  }
  @media (max-width: 575px) {
    font-size: 24px;
  }
`;

const Description = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.6;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const SummaryHead = styled.div`
  margin-bottom: 12px;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.6;

  @media (max-width: 767px) {
    font-size: 24px;
  }
  @media (max-width: 575px) {
    font-size: 20px;
  }
`;

const SummaryList = styled.ul`
  font-size: 20px;
  letter-spacing: -0.009em;
  font-weight: 700;
  line-height: 1.6;

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
