/** @jsxImportSource @emotion/react */
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
`;

const Wrapper = styled.div`
  max-width: 600px;
  box-sizing: border-box;
`;

const ProgressCount = styled.div`
  margin-bottom: 20px;

  & p {
    font-size: 16px;
    font-weight: 600;
  }
`;

const ProgressBar = styled.div<ProgressHeaderProps>`
  position: relative;
  height: 16px;
  margin: 0 auto;
  border-radius: 6px;
  background-color: #593137;

  & .bar__fill {
    position: absolute;
    width: ${(props) => `${props.pageNo * 12.5}%`};
    height: 100%;
    background-color: #ff9fbf;
    border-radius: 6px;
    transition: all ease 0.3s;
  }
`;

export default ProgressHeader;
