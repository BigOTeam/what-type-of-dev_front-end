import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const SurveyStartSection: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <MainCharacterImg
            src="/images/common/self-introduction_character.png"
            alt="메인 케릭터 이미지"
          />
        </ImgWrapper>
        <ButtonWrapper>
          <SurveyStartLink to="#">테스트 시작</SurveyStartLink>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  padding: 40px 0;
`;

const Wrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  max-width: 900px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainCharacterImg = styled.img`
  overflow: hidden;
  max-width: 500px;
  height: 333px;
  border-radius: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const SurveyStartLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border: 2px solid #2196f3;
  border-radius: 25px;
  background-color: #fff;
  font-size: 20px;
  font-weight: 600;
  color: #2196f3;
  cursor: pointer;
  transition: 0.08s all ease-in-out;

  &:hover {
    background-color: #2196f3;
    color: #fff;
  }
`;

export default SurveyStartSection;
