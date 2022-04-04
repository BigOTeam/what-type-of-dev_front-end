/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ProgressHeaderProps {
  pageNo: number;
}

const ProgressHeader: React.FC<ProgressHeaderProps> = ({ pageNo }) => {
  return (
    <Header>
      <Wrapper>
        <ProgressCount>
          <p>{pageNo}/8</p>
        </ProgressCount>
        <ProgressBar pageNo={pageNo}>
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
  box-sizing: border-box;
  transition: all ease 0.3s;
`;

const ProgressCount = styled.div`
  margin-bottom: 20px;

  & p {
    font-size: 16px;
    font-weight: 600;
  }
`;

const ProgressBar = styled.div<ProgressHeaderProps>`
  border-radius: 6px;
  height: 16px;
  position: relative;
  margin: 0 auto;
  background-color: #593137;

  & .bar__fill {
    position: absolute;
    width: ${(props) => `${props.pageNo * 12.5}%`};
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
