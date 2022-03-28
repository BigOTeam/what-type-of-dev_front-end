import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <BrandWrapper>
          <Brand to="/">
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
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 18px 16px;
  box-sizing: border-box;
`;

const BrandWrapper = styled.div`
  height: 100%;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  height: inherit;
`;

const BrandName = styled.span`
  margin-left: 6px;
  padding-top: 1px;
  font-size: 18px;
  font-weight: 700;
  color: #333;
`;

export default Header;
