import styled from '@emotion/styled';

import Skeleton from '@mui/material/Skeleton';

const SkeletonJobTypeDetail: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <Title variant="rectangular" animation="wave" />
          <SkeletonImg variant="rectangular" animation="wave" />
        </ImgWrapper>
        <Card>
          <Title variant="rectangular" animation="wave" />
          <SkeletonBox variant="rectangular" animation="wave" />
        </Card>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 20px 16px 0;
`;

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  margin: 20px 0;

  @media (max-width: 767px) {
    height: 400px;
  }
  @media (max-width: 575px) {
    height: 300px;
  }
`;

const Title = styled(Skeleton)`
  width: 120px;
  height: 50px;
  margin-bottom: 20px;
`;

const SkeletonImg = styled(Skeleton)`
  width: 60%;
  height: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 400px;
  margin-bottom: 28px;
  padding: 50px;
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

const SkeletonBox = styled(Skeleton)`
  width: 80%;
  height: 100%;

  @media (max-width: 767px) {
    width: 90%;
  }
`;

export default SkeletonJobTypeDetail;
