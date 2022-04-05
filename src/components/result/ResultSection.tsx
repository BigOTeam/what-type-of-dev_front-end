import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import SurveyService from '../../services/SurveyService';
import {
  RootState,
  SurveyResult,
  JobListResponseType,
} from '../../types/SurveyType';

import ResultItem from './ResultItem';
import ShareSection from './ShareSection';
import { Backdrop, Box, Fade, Modal } from '@mui/material';

const ResultSection: React.FC = () => {
  const surveyResult = useSelector<RootState, SurveyResult[] | null>(
    (state) => state.survey.surveyResult,
  );

  const [open, setOpen] = useState<boolean>(false);
  const [jobList, setJobList] = useState<JobListResponseType>();

  useEffect(() => {
    SurveyService.sendSurvey({ surveyResult: surveyResult });
    SurveyService.getJobs().then((response) => setJobList(response));
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Wrapper>
        <MainTitle>당신이 개발자라면?!</MainTitle>
        <ResultItemSection>
          <FirstRankSection>
            <ResultItem
              width={600}
              rank={1}
              name="Web"
              description="웹 개발(web development)은 인터넷(월드 와이드 웹)이나 인트라넷(사설망)을 위한 웹사이트를 개발하는 일을 가리킨다. 웹 개발은 가장 단순한 단일 정적 문서의 플레인 텍스트에서부터 가장 복잡한 웹 기반 인터넷 애플리케이션, 전자 비즈니스, 소셜 네트워크 서비스에 이르기까지 개발 범위가 다양하다. 일반적으로 웹 개발이라 부를 때는 웹 프로그래밍뿐만 아니라 더 포괄적인 작업인 웹 디자인, 웹 콘텐츠 개발, 클라이언트 사이드/서버 사이드 스크립트 작업, 웹 서버 및 네트워크 보안 구성, 전자 상업 개발을 아우른다. 더 큰 조직과 사업 공간에서 웹 개발 팀은 수백 명의 사람(웹 개발자)들을 이룰 수 있다. 크기가 작은 조직은 하나의 영구적인 웹마스터라든지 그래픽 디자이너 및 정보 시스템 기술자 등을 필요로 할 수 있다. 
            웹 개발은 특정 부서의 분야라기 보다는 부서 간 협업의 노력으로 볼 수 있다."
              imgUrl="/images/Web.png"
            />
          </FirstRankSection>
          <SecondThirdRankSection>
            <ResultItem
              width={400}
              rank={2}
              name="DB"
              imgUrl="/images/DB.png"
            />
            <ResultItem
              width={400}
              rank={3}
              name="Infra"
              imgUrl="/images/Infra.png"
            />
          </SecondThirdRankSection>
        </ResultItemSection>
        <ButtonSection>
          <Button to="/">테스트 다시 하기</Button>
          <Button to="#" onClick={handleOpen}>
            전체 유형 보기
          </Button>
          <Button to="/statistics">통계 보기</Button>
          <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <TotalJobBox>
                <TotalJobBoxTitle>전체 유형 보기</TotalJobBoxTitle>
                <JobList>
                  {jobList !== undefined
                    ? jobList.jobList.map((job) => {
                        return (
                          <JobWrapper to={`/jobs/${job.jobId}`}>
                            <JobImage src={job.jobImg} alt={job.jobName} />
                            <JobName>{job.jobName}</JobName>
                          </JobWrapper>
                        );
                      })
                    : null}
                </JobList>
              </TotalJobBox>
            </Fade>
          </Modal>
        </ButtonSection>
        {/* <ShareSection /> */}
      </Wrapper>
    </Container>
  );
};

const Container = styled.main`
  background-color: #e7f4fd;
  box-sizing: border-box;
  transition: all ease 0.3s;
`;

const Wrapper = styled.div`
  max-width: 900px;
  padding: 0 16px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const MainTitle = styled.h1`
  text-align: center;

  padding: 60px 0px;

  font-size: 54px;
  font-weight: bold;

  box-sizing: border-box;
`;

const ResultItemSection = styled.section`
  /* border: 2px solid #fff;
  border-radius: 14px;
  background-color: #fff; */
`;

const FirstRankSection = styled.section``;

const SecondThirdRankSection = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px 40px 0px;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 260px;
  height: 80px;

  background-color: #fff;
  border: 2px solid #313a59;
  border-radius: 14px;

  color: #313a59;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: -0.02em;
  line-height: 1.2em;

  cursor: pointer;

  :hover {
    color: #fefefe;
    background-color: #5bb1f8;
    transition: all ease 0.3s;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: calc(100px * 0.9);
    margin-bottom: 16px;
  }
`;

const TotalJobBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-y: auto;

  position: absolute;
  top: 50%;
  left: 50%;

  width: 1200px;
  height: 600px;

  padding: 10px;

  background-color: #fff;
  border: 2px solid #313a59;
  border-radius: 14px;
  box-shadow: 24;
  transform: translate(-50%, -50%);

  @media (max-width: 991px) {
    width: 100%;
    height: calc(600px * 0.9);
  }

  @media (max-width: 767px) {
    width: 100%;
    height: calc(800px * 0.9);
  }
`;

const TotalJobBoxTitle = styled.h2`
  text-align: center;

  width: 240px;
  padding: 10px 0px;

  background-color: #637ad4;
  border-radius: 14px;

  color: #fdfdfd;
  font-size: 28px;
  font-weight: bold;

  box-sizing: border-box;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const JobList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-y: auto;
`;

const JobWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 30px;
`;

const JobImage = styled.img`
  width: 200px;
  margin-bottom: 10px;
`;

const JobName = styled.h2`
  color: #313a59;
  font-size: 20px;
  font-weight: bold;
`;

export default ResultSection;
