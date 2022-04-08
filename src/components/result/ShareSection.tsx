/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface ShareSectionProps {
  name: string;
  imgUrl: string;
  id: number;
}

const ShareSection: React.FC<ShareSectionProps> = ({ name, imgUrl, id }) => {
  const handleKakaoShare = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '당신이 개발자라면?',
        description: name,
        imageUrl: imgUrl,
        link: {
          webUrl: `https://j6a205.p.ssafy.io/jobs/${id}`,
          mobileWebUrl: `https://j6a205.p.ssafy.io/jobs/${id}`,
          androidExecutionParams: 'test',
        },
      },
    });
  };

  return (
    <Container>
      <Wrapper>
        <ShareTitle>1위 유형 공유하기</ShareTitle>
        <ShareButtonSection>
          <ShareButton
            src="/images/common/kakao-logo.png"
            alt="카카오 공유 버튼"
            onClick={handleKakaoShare}
          />
        </ShareButtonSection>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;

  padding-bottom: 20px;
`;

const Wrapper = styled.div`
  max-width: 900px;
`;

const ShareTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;

const ShareButtonSection = styled.div`
  display: flex;
  width: 64px;
  height: 64px;

  margin: 14px auto 0;
  box-sizing: border-box;
`;

const ShareButton = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export default ShareSection;
