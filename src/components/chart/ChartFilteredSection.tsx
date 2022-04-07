import { useState } from 'react';

import styled from '@emotion/styled';

import { GENDER_LIST, AGE_LIST } from '../../data/chartSearchData';

import { ChartInfoType } from '../../types/chartTypes';

import useChartSearchList from '../../hooks/useChartSearchList';

import BarChart from './BarChart';
import SkeletonChartItem from './skeletonUI/SkeletonChartItem';

const FONT_COLOR = '#45494b';

const ChartFilteredSection: React.FC = () => {
  const [gender, setGender] = useState<string>('전체');
  const [age, setAge] = useState<string>('전체');

  const { isLoading, data, isError, errorMessage } = useChartSearchList({
    gender,
    age,
  });

  const handleGenderChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setGender(event.target.value);
  };

  const handleAgeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setAge(event.target.value);
  };

  const renderChart = (data: ChartInfoType) => {
    let totalCount = data.count.reduce(function add(sum: number, cur: number) {
      return sum + cur;
    }, 0);
    if (totalCount === 0) {
      return (
        <ErrorMessage>
          위의 조건에 해당하는 응답자 중 현업 개발자가 없습니다.
          <br />
          다른 조건으로 검색해주세요. ٩( ᐛ )و
        </ErrorMessage>
      );
    } else {
      return (
        <>
          <ChartHead>참여한 현업 개발자</ChartHead>
          <BarChart
            id={1}
            indexAxis="y"
            chartLabelDataInfo={data}
            labelName="현업 개발자"
          />
        </>
      );
    }
  };

  return (
    <Container>
      <Wrapper>
        <FilterList>
          <FilterSelect name="gender" onChange={handleGenderChange}>
            <FilterOption value="전체">전체 성별</FilterOption>
            {GENDER_LIST.map((gender) => (
              <FilterOption key={gender.id} value={gender.value}>
                {gender.name}
              </FilterOption>
            ))}
          </FilterSelect>
          <FilterSelect name="age" onChange={handleAgeChange}>
            <FilterOption value="전체">전체 연령대</FilterOption>
            {AGE_LIST.map((age) => (
              <FilterOption key={age.id} value={age.value}>
                {age.name}
              </FilterOption>
            ))}
          </FilterSelect>
        </FilterList>
        {isLoading ? (
          <SkeletonChartItem />
        ) : (
          <ChartWrapper>
            {isError ? (
              <ErrorMessage>
                {errorMessage}에러가 발생했습니다. 다른 조건으로 검색해주세요.
              </ErrorMessage>
            ) : !data ? (
              <ErrorMessage>
                위의 조건에 해당하는 응답자 중 현업 개발자가 없습니다. 다른
                조건으로 검색해주세요.
              </ErrorMessage>
            ) : (
              <ChartItem>{renderChart(data)}</ChartItem>
            )}
          </ChartWrapper>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  margin: 40px 0 24px;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const FilterList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  @media (max-width: 575px) {
    margin-bottom: 0;
    flex-direction: column;
    align-items: center;
  }
`;

const FilterSelect = styled.select`
  width: 100%;
  height: 42px;
  padding: 0 28px;
  border: 1px solid #d7e2eb;
  border-radius: 8px;
  box-sizing: border-box;
  background-position: calc(100% - 0.8rem) 49%;
  background-size: 0.625rem 0.3125rem;
  background-color: #fbfbfd;
  background-image: url(/images/common/toggle-black.png);
  background-repeat: no-repeat;
  transition: color 0.08s ease-in-out;
  font-size: 16px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-weight: 400;
  line-height: 1.6;
  color: ${FONT_COLOR};
  appearance: none;
  cursor: pointer;

  &:hover {
    border: 1px solid #3396f4;
    box-shadow: inset 0 0 0 1px #3396f4;
  }
  &:focus {
    border: 1px solid #3396f4;
    box-shadow: inset 0 0 0 1px #3396f4;
    background-color: #fff;
    color: #495057;
  }
  &:first-of-type {
    margin-right: 8px;
  }

  @media (max-width: 575px) {
    max-width: 100%;
    height: 38px;
    margin-bottom: 8px;
    font-size: 14px;

    &:first-of-type {
      margin-right: 0;
    }
  }
`;

const FilterOption = styled.option``;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 40px 0;
  border: 1px solid #d7e2eb;
  border-radius: 14px;
  background-color: #fff;
`;

const ChartHead = styled.div`
  margin-bottom: 8px;
  color: ${FONT_COLOR};
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

const ErrorMessage = styled.div`
  color: #6a6d6f;
  font-weight: 500;
  text-align: center;
  line-height: 1.5;

  br {
    @media (max-width: 767px) {
      display: none;
    }
  }

  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;

const ChartItem = styled.div`
  width: 60%;

  @media (max-width: 767px) {
    width: 80%;
  }
  @media (max-width: 575px) {
    width: 95%;
  }
`;

export default ChartFilteredSection;
