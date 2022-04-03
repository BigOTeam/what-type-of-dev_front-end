import styled from '@emotion/styled';

import { QuestionInfoType } from '../../types/chartTypes';

interface ContentItemProps {
  groupId: number;
  groupName: string;
  questionInfo: QuestionInfoType[];
}

const ContentItem: React.FC<ContentItemProps> = ({
  groupId,
  groupName,
  questionInfo,
}) => {
  return (
    <Card key={groupId}>
      <Title>{groupName}</Title>
      <NavList>
        {questionInfo.map((question) => (
          <NavItem key={question.id}>
            <NavLink href={'#' + String(groupId) + '-' + String(question.id)}>
              {question.question}
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

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 767px) {
    margin: 40px 0 16px;
    font-size: 28px;
  }
  @media (max-width: 575px) {
    margin-top: 32px;
    font-size: 24px;
  }
`;

const NavList = styled.ul``;

const NavItem = styled.li`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.009em;
  list-style: none;

  &::marker {
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
