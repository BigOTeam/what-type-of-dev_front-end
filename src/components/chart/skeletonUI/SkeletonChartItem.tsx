import styled from '@emotion/styled';

import Skeleton from '@mui/material/Skeleton';

const SkeletonChartItem: React.FC = () => {
  return (
    <Wrapper>
      <SkeletonItem variant="rectangular" animation="wave" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 332px;
  margin-top: 20px;
  border-radius: 25px;
  border: 1px solid #d7e2eb;
  background-color: #ffffff;

  @media (max-width: 767px) {
    height: 284px;
  }
  @media (max-width: 575px) {
    height: 248px;
  }
`;

const SkeletonItem = styled(Skeleton)`
  width: 60%;
  height: 100%;

  @media (max-width: 767px) {
    width: 90%;
  }
`;

export default SkeletonChartItem;
