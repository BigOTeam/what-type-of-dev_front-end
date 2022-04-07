import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import SurveyService from '../../services/SurveyService';
import { JobListResponseType } from '../../types/SurveyType';

import { Backdrop, Fade, Modal } from '@mui/material';

interface ResultButtonSectionProps {
  isStatistics: boolean;
}

const ResultButtonSection: React.FC<ResultButtonSectionProps> = ({
  isStatistics,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [jobList, setJobList] = useState<JobListResponseType>();

  // 통신 에러 처리
  useEffect(() => {
    SurveyService.getJobs().then((response) => setJobList(response));
  }, []);

  const handleLinkButtonClick = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const handleJobClick = () => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  };

  const handleRetryButtonClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <Container>
      <LinkButton to="/" onClick={handleRetryButtonClick}>
        테스트 다시 하기
      </LinkButton>
      <LinkButton to="#" onClick={handleLinkButtonClick}>
        전체 분야 보기
      </LinkButton>
      {isStatistics ? null : (
        <LinkButton to="/statistics">통계 보기</LinkButton>
      )}
      <Modal
        open={open}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <TotalJobBox>
            <TotalJobBoxTitle>전체 분야</TotalJobBoxTitle>
            <JobList>
              {jobList !== undefined
                ? jobList.jobList.map((job) => (
                    <JobWrapper
                      key={job.jobId}
                      to={`/jobs/${job.jobId}`}
                      onClick={handleJobClick}
                    >
                      <JobImage src={job.jobImg} alt={job.jobName} />
                      <JobName>{job.jobName}</JobName>
                    </JobWrapper>
                  ))
                : null}
            </JobList>
          </TotalJobBox>
        </Fade>
      </Modal>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-around;

  width: 100%;
  padding: 20px 0 40px;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const LinkButton = styled(Link)`
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
  transition: all ease 0.3s;

  cursor: pointer;

  &:hover {
    color: #fefefe;
    background-color: #5bb1f8;
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
export default ResultButtonSection;
