import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <BrandWrapper>
          <Brand to="/">
            <LogoWrapper>
              <Logo
                src="/images/common/brand-logo.png"
                alt="'당신이 개발자라면' 로고"
              />
            </LogoWrapper>
            <BrandName>당신이 개발자라면</BrandName>
          </Brand>
        </BrandWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.header`
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: #0d161c;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 6px 16px;
  box-sizing: border-box;
`;

const BrandWrapper = styled.div`
  height: 34px;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  height: inherit;
`;

const LogoWrapper = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #fff;
`;

const Logo = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 auto;
`;

const BrandName = styled.span`
  margin-left: 6px;
  padding-top: 1px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
`;

export default Header;
