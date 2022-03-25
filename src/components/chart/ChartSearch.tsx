import styled from '@emotion/styled';

import { GENDER_LIST, CAREER_LIST, AGE_LIST } from '../../data/chartSearchData';

import BarChart from './BarChart';

const ChartSearch: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <FilterList>
          <FilterSelect name="career">
            <option value="all">전체 개발자</option>
            {CAREER_LIST.map((career) => (
              <option key={career.id} value={career.value}>
                {career.name}
              </option>
            ))}
          </FilterSelect>
          <FilterSelect name="gender">
            <option value="all">전체 성별</option>
            {GENDER_LIST.map((gender) => (
              <option key={gender.id} value={gender.value}>
                {gender.name}
              </option>
            ))}
          </FilterSelect>
          <FilterSelect name="age">
            <option value="all">전체 연령대</option>
            {AGE_LIST.map((age) => (
              <option key={age.id} value={age.value}>
                {age.name}
              </option>
            ))}
          </FilterSelect>
        </FilterList>
        <ChartWrapper>
          {/* <BarChart
            id={1}
            indexAxis="y"
            chartAnswerInfo={}
          /> */}
        </ChartWrapper>
      </Wrapper>
    </Container>
  );
};

export default ChartSearch;

const Container = styled.section`
  max-width: 900px;
  margin: 40px auto 24px;
  padding: 0 16px;
  box-sizing: border-box;
`;

const Wrapper = styled.div``;

const FilterList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  @media (max-width: 767px) {
    margin-bottom: 0px;
    flex-direction: column;
    align-items: center;
  }
`;

const FilterSelect = styled.select`
  width: 100%;
  max-width: 378px;
  height: 42px;
  padding: 0 14px;
  border: 1px solid #d7e2eb;
  border-radius: 4px;
  box-sizing: border-box;
  background-position: calc(100% - 0.8rem) 49%;
  background-size: 0.625rem 0.3125rem;
  background-color: #fbfbfd;
  //   background-image: url(/images/common/toggle-black.png);
  background-repeat: no-repeat;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #263747;
  appearance: none;
  transition: color 0.08s ease-in-out, background-color 0.08s ease-in-out,
    border-color 0.08s ease-in-out, box-shadow 0.08s ease-in-out;
  cursor: pointer;

  &:hover {
    border: 1px solid #3396f4;
    box-shadow: inset 0 0 0 1px#3396f4;
  }
  &:focus {
    border: 1px solid #3396f4;
    box-shadow: inset 0 0 0 1px #3396f4;
    background-color: #fff;
    color: #495057;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    height: 38px;
    margin-bottom: 8px;
    font-size: 14px;
  }
`;

const ChartWrapper = styled.div``;
