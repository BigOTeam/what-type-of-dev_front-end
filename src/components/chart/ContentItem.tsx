import styled from '@emotion/styled';

import { ChartResultContentsType } from '../../types/chartTypes';

interface ContentItemProps {
  contentData: ChartResultContentsType;
}

const ContentItem: React.FC<ContentItemProps> = ({ contentData }) => {
  return (
    <Card key={contentData.partId}>
      <Title>{contentData.title}</Title>
      <NavList>
        {contentData.contentsInfo.map((contentInfo) => (
          <NavItem key={contentInfo.questionId}>
            <NavLink
              href={
                '#' +
                String(contentData.partId) +
                '-' +
                String(contentInfo.questionId)
              }
            >
              {contentInfo.question}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </Card>
  );
};

const Card = styled.li`
  width: calc(50% - 8px);
  padding: 40px 24px 48px;
  border: 1px solid #d7e2eb;
  border-radius: 25px;
  box-sizing: border-box;

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

// 세부 목차의 소제목
const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 767px) {
    margin: 40px 0px 16px;
    font-size: 28px;
  }
  @media (max-width: 575px) {
    margin: 32px 0px 16px;
    font-size: 24px;
  }
`;

// 세부 목차 내용 리스트
const NavList = styled.ul`
  @media (max-width: 767px) {
  }
  @media (max-width: 575px) {
  }
`;

// 세부 목차 내용 하나
const NavItem = styled.li`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.009em;
  list-style: none;

  &::before {
    content: '\\2022';
    font-size: 20px;
    text-align: left;
    display: inline-block;
    padding-right: 2px;
  }
`;

const NavLink = styled.a`
  &:hover {
    color: #3396f4;
  }
`;

export default ContentItem;
