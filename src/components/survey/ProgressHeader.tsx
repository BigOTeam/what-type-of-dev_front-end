/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ProgressHeader: React.FC = () => {
  return (
    <Header>
      <Wrapper>
        <ProgressCount>
          <p>1/7</p>
        </ProgressCount>
        <ProgressBar>
          <div className="bar__fill"></div>
        </ProgressBar>
      </Wrapper>
    </Header>
  );
};

const Header = styled.header`
  margin: 20px 0;
  transition: all ease 0.3s;
`;

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  transition: all ease 0.3s;
`;

const ProgressCount = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;

  & p {
    font-size: 16px;
    font-weight: 600;
  }
`;

const ProgressBar = styled.div`
  border-radius: 6px;
  height: 16px;
  position: relative;
  margin: 0 auto;
  background-color: #593137;

  & .bar__fill {
    position: absolute;
    width: 10%;
    height: 100%;
    background-color: #ff9fbf;
    border-radius: 6px;
    transition: all ease 0.3s;
  }

  & .bar__fill::before {
    content: '';
    background-image: url(/images/ribbit.png);
    width: 60px;
    height: 60px;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: -25px;
    right: -25px;
  }
`;

export default ProgressHeader;
