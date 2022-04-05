/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const ShareSection: React.FC = () => {
  return (
    <Container>
      <ShareTitle>결과 공유하기</ShareTitle>
      <ShareButtonSection>
        <ShareButton>페이스북</ShareButton>
        <ShareButton>카카오톡</ShareButton>
        <ShareButton>인스타그램</ShareButton>
      </ShareButtonSection>
    </Container>
  );
};

const Container = styled.section`
  padding: 40px 0px;
`;

const ShareTitle = styled.h1`
  text-align: center;

  margin-bottom: 20px;

  font-size: 28px;
  font-weight: bold;
`;

const ShareButtonSection = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ShareButton = styled.button`
  padding: 10px 0px;
  box-sizing: border-box;
`;

export default ShareSection;
