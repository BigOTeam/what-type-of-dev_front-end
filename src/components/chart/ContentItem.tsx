import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

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
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== '') {
      window.location.href = `${location.pathname}${location.hash}`;
    }
  }, []);

  return (
    <Card key={groupId}>
      <Title>{groupName}</Title>
      <NavList>
        {questionInfo.map((question) => (
          <NavItem key={question.id}>
            <NavLink href={`#${String(groupId)}-${String(question.id)}`}>
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
  padding: 40px;
  border: 1px solid #d7e2eb;
  border-radius: 14px;
  box-sizing: border-box;
  background-color: #fff;

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
    margin-bottom: 16px;
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
  padding-left: 3px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #6a6d6f;
  list-style: none;

  &::marker {
    content: '\\2022';
    display: inline-block;
    padding-right: 2px;
    font-size: 20px;
    text-align: left;
  }
`;

const NavLink = styled.a`
  transition: color 0.08s ease-in-out;

  &:hover {
    color: #3396f4;
  }
`;

export default ContentItem;
