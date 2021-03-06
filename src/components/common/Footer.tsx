// import { Link } from 'react-router-dom';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  const handleKakaoShare = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '당신이 개발자라면?',
        description: '개발자 유형 테스트',
        imageUrl: 'https://ifh.cc/g/GOk4sw.png',
        link: {
          mobileWebUrl: 'https://j6a205.p.ssafy.io',
          androidExecutionParams: 'test',
        },
      },
    });
  };

  return (
    <Container>
      <Wrapper>
        <MenuSection>
          <MenuGroup>
            <MenuListHead>서비스</MenuListHead>
            <MenuList>
              <MenuItem>
                <PageLink href="https://ifyoudev.notion.site/13054c90526f473ab2217b0842c5e4d0">
                  서비스 소개
                </PageLink>
              </MenuItem>
              <MenuItem>
                <PageLink href="https://ifyoudev.notion.site/13054c90526f473ab2217b0842c5e4d0">
                  개발팀 소개
                </PageLink>
              </MenuItem>
            </MenuList>
          </MenuGroup>
          <ShareGroup>
            <MenuListHead>서비스 공유</MenuListHead>
            <ShareItem>
              <ShareLink onClick={handleKakaoShare}>
                카카오톡으로 공유하기
              </ShareLink>
            </ShareItem>
          </ShareGroup>
        </MenuSection>
        <FooterAddress>
          <p>What type of dev / 당신이 개발자라면</p>
        </FooterAddress>
        <FooterOthers>
          <SubMenuList>
            {/* <SubMenuItem>
              <PageLink to="#">개인정보 처리방침</PageLink>
            </SubMenuItem>
            <SubMenuItem>
              <PageLink to="#">이용약관</PageLink>
            </SubMenuItem> */}
          </SubMenuList>
          <SnsList>
            <SnsItem
              href="https://github.com/BigOTeam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon css={snsIcon} />
            </SnsItem>
            <SnsItem href="#" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon css={snsIcon} />
            </SnsItem>
            {/* <SnsItem href="#" target="_blank" rel="noopener noreferrer">
              <FacebookIcon css={snsIcon} />
            </SnsItem>
            <SnsItem href="#" target="_blank" rel="noopener noreferrer">
              <InstagramIcon css={snsIcon} />
            </SnsItem> */}
          </SnsList>
        </FooterOthers>
      </Wrapper>
    </Container>
  );
};

const Container = styled.footer`
  border-top: 1px solid #f1f1f1;
  background-color: #f9f9f9;
`;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 48px 16px;
  box-sizing: border-box;

  @media (max-width: 575px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const MenuSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;

  @media (max-width: 991px) {
    flex-direction: column;
    margin-bottom: 36px;
  }
`;

const MenuGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterAddress = styled.address`
  margin-bottom: 24px;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  color: #98a8b9;
  cursor: default;

  p:nth-of-type(1) {
    margin-bottom: 6px;
    font-weight: 600;
  }
`;

const FooterOthers = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const MenuList = styled.ul`
  margin-right: 40px;

  @media (max-width: 991px) {
    margin-right: 0;
    margin-bottom: 32px;
  }
`;

const MenuListHead = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.8;
  color: #44576c;

  @media (max-width: 767px) {
    margin-bottom: 8px;
  }
`;

const MenuItem = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.8;
  color: #98a8b9;
`;

const SubMenuList = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
  @media (max-width: 349px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

// const SubMenuItem = styled.li`
//   font-size: 13px;
//   line-height: 1.6;
//   color: #98a8b9;

//   &:nth-of-type(1) {
//     color: #44576c;
//   }
//   &:not(:last-of-type) {
//     &:after {
//       content: '';
//       display: inline-block;
//       width: 1px;
//       height: 10px;
//       margin: 0 8px;
//       background-color: #98a8b9;
//     }
//   }

//   @media (max-width: 349px) {
//     margin-bottom: 4px;

//     &:not(:last-of-type) {
//       &:after {
//         content: none;
//       }
//     }
//   }
// `;

const SnsList = styled.div`
  display: flex;
`;

const SnsItem = styled.a`
  margin-left: 10px;

  &:first-of-type {
    margin-left: 0;
  }
`;

// const PageLink = styled(Link)`
const PageLink = styled.a`
  transition: color 0.08s ease-in-out;

  &:hover {
    color: #3396f4;
  }
`;

// const PageOuterLink = styled.a`
//   transition: color 0.08s ease-in-out;

//   &:hover {
//     color: #3396f4;
//   }
// `;

const ShareGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShareItem = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.8;
  color: #98a8b9;
`;

const ShareLink = styled.div`
  transition: color 0.08s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #3396f4;
  }
`;

const snsIcon = css`
  font-size: 26px;
  color: #98a8b9;
  transition: color 0.08s ease-in-out;

  &:hover {
    color: #3396f4;
  }
`;

export default Footer;
