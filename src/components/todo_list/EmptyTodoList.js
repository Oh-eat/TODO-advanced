import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { GoPlus } from 'react-icons/go';
import Spacer from '../common/Spacer';
import { Link } from 'react-router-dom';

const EmptyTodoListBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
`;

const EmptyTodoList = () => {
  return (
    <EmptyTodoListBlock>
      <Link to="/todo/add">
        <h1>새로운 TODO를 추가하세요!</h1>
        <Spacer height="2rem" />
      </Link>
      <Button to="/todo/add" isvoid="true">
        <GoPlus size="4rem" />
      </Button>
    </EmptyTodoListBlock>
  );
};

export default EmptyTodoList;
