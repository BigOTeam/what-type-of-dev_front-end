import styled from '@emotion/styled';

import Skeleton from '@mui/material/Skeleton';

const SkeletonChartItem: React.FC = () => {
  return (
    <ChartItem>
      <ChartItemBox>
        <ChartStatisticContentWrapper />
      </ChartItemBox>
    </ChartItem>
  );
};

const ChartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartItemBox = styled.div`
  width: 60%;
  height: 240px;
  padding: 0px 48px;
  //   border-radius: 25px;
  //   border:1px solid #d7e2eb;
  background-color: #ffffff;

  @media (max-width: 767px) {
    width: 90%;
  }
`;

const ChartStatisticContentWrapper = styled(Skeleton)`
  variant="rectangular";
  width: 100%;
  height: 100%;
`;

export default SkeletonChartItem;
