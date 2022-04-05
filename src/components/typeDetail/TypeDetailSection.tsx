import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import SurveyService from '../../services/SurveyService';

interface TypeDetailSectionProps {
  id: number;
}

const FONT_COLOR = '#45494b';

const TypeDetailSection: React.FC<TypeDetailSectionProps> = ({ id }) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    SurveyService.getJobDetail(id).then((res) => {
      setData(res);
    });
  }, []);

  return (
    <Container>
      <Wrapper>
        {!data ? (
          <>데이터가 없습니다</>
        ) : (
          <>
            <HeaderSection>
              <Title>
                <TitleHead>당신이 개발자라면</TitleHead>
                당신에게 어울리는 분야는 바로
              </Title>
              <JobTypeHead>{data.jobName}</JobTypeHead>
              <JobTypeImg
                src={`${data.jobImgUrl}`}
                alt={`${data.jobName} 대표 캐릭터 이미지`}
              />
            </HeaderSection>
            <DescriptionSection>
              <Card>
                <JobTypeSub>{data.jobName}</JobTypeSub>
                <JDescription>{data.jobDescription}</JDescription>
              </Card>
            </DescriptionSection>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  padding: 0 16px;
  box-sizing: border-box;
  word-break: keep-all;
`;

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin-top: 16px;
  box-sizing: border-box;
  text-align: center;
`;

const Title = styled.h2`
  width: fit-content;
  margin-bottom: 12px;
  border-radius: 25px;
  color: ${FONT_COLOR};
  font-size: 26px;
  font-weight: 700;

  line-height: 1.4;

  @media (max-width: 767px) {
  }
  @media (max-width: 575px) {
    font-size: 20px;
  }
`;

const TitleHead = styled.div`
  width: fit-content;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 18px;
    left: 0;
    bottom: 1px;
    z-index: -1;
    background-color: #cbe6fa;
  }
`;

const JobTypeHead = styled.h1`
  width: fit-content;
  padding: 12px 20px;
  margin-bottom: 8px;
  border-radius: 50px;
  background-color: #97cdf5;
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 767px) {
    padding: 10px 18px;
    font-size: 40px;
  }
  @media (max-width: 575px) {
    padding: 8px 16px;
    font-size: 36px;
  }
`;

const JobTypeImg = styled.img`
  width: 100%;
`;

const DescriptionSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  color: ${FONT_COLOR};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 28px;
  padding: 60px;
  box-sizing: border-box;
  border-radius: 14px;
  border: 1px solid #d7e2eb;

  @media (max-width: 767px) {
    padding: 52px;
  }
  @media (max-width: 575px) {
    padding: 48px 40px;
  }
`;

const JobTypeSub = styled.div`
  width: fit-content;
  margin-bottom: 28px;
  position: relative;
  font-size: 44px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 36px;
  }
  @media (max-width: 575px) {
    font-size: 32px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 24px;
    left: 0;
    bottom: 1px;
    z-index: -1;
    background-color: #cbe6fa;
  }
`;

const JDescription = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;

  @media (max-width: 767px) {
    font-size: 20px;
  }
  @media (max-width: 575px) {
    font-size: 18px;
  }
`;

export default TypeDetailSection;
