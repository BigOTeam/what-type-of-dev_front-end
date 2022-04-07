import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

interface LinkSectionProps {
  headText: string;
  description: string;
  linkButtonText: string;
  linkUrl: string;
  imgUrl: string;
  isReversed: boolean;
  backgroundColor: string;
}

interface ContainerProps {
  backgroundColor: string;
}

interface WrapperProps {
  isReversed: boolean;
}

const LinkSection: React.FC<LinkSectionProps> = ({
  headText,
  description,
  linkButtonText,
  linkUrl,
  imgUrl,
  isReversed,
  backgroundColor,
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <Wrapper isReversed={isReversed}>
        <ImgWrapper>
          <ImgBox>
            <CharacterImg src={imgUrl} alt={`${headText} 이미지`} />
          </ImgBox>
        </ImgWrapper>
        <Box>
          <Head>{headText}</Head>
          <Description>{description}</Description>
          <LinkWrapper>
            <LinkButton to={linkUrl}>{linkButtonText}</LinkButton>
          </LinkWrapper>
        </Box>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section<ContainerProps>`
  padding: 120px 16px;
  background-color: ${(props) => props.backgroundColor};
  box-sizing: border-box;

  @media (max-width: 991px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

const Wrapper = styled.div<WrapperProps>`
  overflow: hidden;
  display: flex;
  flex-direction: ${(props) => (props.isReversed ? 'row-reverse' : 'row')};
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 991px) {
    margin-bottom: 32px;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 333px;
  background-color: white;
  border-radius: 20px;

  @media (max-width: 991px) {
    width: 460px;
    height: 280px;
  }
`;

const CharacterImg = styled.img`
  overflow: hidden;
  width: 390px;
  // height: 333px;
  height: auto;

  @media (max-width: 991px) {
    width: auto;
    height: 260px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Head = styled.h1`
  font-size: 42px;
  font-weight: 600;
  color: #1d87da;

  @media (max-width: 991px) {
    font-size: 38px;
  }
  @media (max-width: 575px) {
    font-size: 34px;
  }
`;

const Description = styled.p`
  margin: 40px 0;
  font-size: 24px;
  font-weight: 500;
  color: #333;

  @media (max-width: 991px) {
    margin: 32px 0;
    font-size: 22px;
  }
  @media (max-width: 575px) {
    margin: 28px 0;
    font-size: 18px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkButton = styled(Link)`
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

  @media (max-width: 991px) {
    width: 180px;
    height: 48px;
    font-size: 18px;
  }
`;

export default LinkSection;
