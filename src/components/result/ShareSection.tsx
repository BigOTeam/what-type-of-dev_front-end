/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface ShareSectionProps {
  name: string;
  imgUrl: string;
}

const ShareSection: React.FC<ShareSectionProps> = ({ name, imgUrl }) => {
  const handleKakaoShare = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '당신이 개발자라면?',
        description: name,
        imageUrl: imgUrl,
        link: {
          mobileWebUrl: 'http://j6a205.p.ssafy.io',
          androidExecutionParams: 'test',
        },
      },
    });
  };

  return (
    <Container>
      <ShareTitle>결과 공유하기</ShareTitle>
      <ShareButtonSection>
        {/* <ShareButton>페이스북</ShareButton> */}
        <ShareButton
          src="/images/common/kakao-logo.png"
          alt="카카오 공유 버튼"
          onClick={handleKakaoShare}
        />
        {/* <ShareButton>인스타그램</ShareButton> */}
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

const ShareButton = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 100%;
    height: calc(100px * 0.9);
    margin-bottom: 16px;
  }
`;

export default ShareSection;
