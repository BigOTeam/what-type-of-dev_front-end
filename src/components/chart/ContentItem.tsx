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

// 세부 목차 하나
const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(50% - 16px);
  border-radius: 25px;
  border: solid #d7e2eb;
  border-width: 1px;
  background-color: #ffffff;
  line-height: 130%;

  @media (max-width: 767px) {
    width: 100%;
    margin: 8px 0px;
    padding: 0px;
  }
`;

// 세부 목차의 소제목
const Title = styled.h2`
  margin: 40px 0px 24px;
  padding: 24px 0px 0px 40px;
  font-size: 32px;
  font-weight: bold;

  @media (max-width: 767px) {
    margin: 40px 0px 16px;
    padding: 12px 0px 0px 40px;
    font-size: 28px;
  }
  @media (max-width: 575px) {
    margin: 32px 0px 16px;
    font-size: 24px;
  }
`;

// 세부 목차 내용 리스트
const NavList = styled.ul`
  // margin-top: 24px;
  padding: 16px 32px 28px;
  list-style-position: inside;

  @media (max-width: 767px) {
    margin-top: 0px;
    padding: 12px 40px 32px;
  }
  @media (max-width: 575px) {
    padding: 0px 40px 32px;
  }
`;

// 세부 목차 내용 하나
const NavItem = styled.li`
  margin-top: 10px;
  font-size: 16px;
  // vertical-align: middle;

  &::before {
    content: '\\2022';
    font-size: 20px;
    text-align: left;
    display: inline-block;
    padding-right: 2px;
  }
`;

const NavLink = styled.a``;

export default ContentItem;
