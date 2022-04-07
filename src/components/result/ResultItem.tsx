import styled from '@emotion/styled';

interface ResultItemProps {
  width: number;
  rank: number;
  name: string;
  description?: string;
  imgUrl: string;
}

interface WrapperProps {
  width: number;
}

const ResultItem: React.FC<ResultItemProps> = ({
  width,
  rank,
  name,
  description,
  imgUrl,
}) => {
  return (
    <Container>
      <RankTitleWrapper>
        <RankTitle>{`${rank}위`}</RankTitle>
      </RankTitleWrapper>
      <RankResultWrapper>
        <InnerWrapper width={width}>
          <ResultImageWrapper>
            <ResultImage src={imgUrl} />
          </ResultImageWrapper>
          <JobName>{name}</JobName>
          {description !== undefined ? (
            <Description>{description}</Description>
          ) : null}
        </InnerWrapper>
      </RankResultWrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 900px;
  margin-bottom: 20px;
`;

const InnerWrapper = styled.div<WrapperProps>`
  max-width: ${(props) => `${props.width}px`};
  height: 100%;

  margin: 0 auto;
  padding: 20px;

  box-sizing: border-box;
`;

const ResultImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ResultImage = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
    width: 300px;
    height: 100%;
  }
`;

const RankTitleWrapper = styled.div`
  position: relative;
  top: 25px;
  margin: 0 auto;
  width: 100px;
`;

const RankTitle = styled.h2`
  text-align: center;

  width: 100%;
  padding: 10px 0px;

  background-color: #637ad4;
  border-radius: 14px;

  color: #fdfdfd;
  font-size: 32px;
  font-weight: bold;

  box-sizing: border-box;

  @media (max-width: 767px) {
    font-size: 28px;
  }
`;

const RankResultWrapper = styled.div`
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 14px;
`;

const JobName = styled.h3`
  text-align: center;
  margin-bottom: 12px;

  color: #313a59;
  font-size: 28px;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  width: 100%;
  margin-bottom: 40px;

  color: #313a59;
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export default ResultItem;
