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
      <Wrapper>
        <ShareTitle>당신에게 어울리는 개발자 유형을 공유해보세요!</ShareTitle>
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
  padding-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  max-width: 900px;
`;

const ShareTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 28px;
  font-weight: bold;
`;

const ShareButtonSection = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 10px;
`;

const ShareButton = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export default ShareSection;
