import React from 'react';
import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';
import Button from '../common/Button';

const ActionButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.5rem;

  .left {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .right {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;

const TodoListActionButtons = () => {
  return (
    <ActionButtonsBlock>
      <div className="left"></div>
      <div className="right">
        <Button to="/todo/add" isvoid="true">
          <GoPlus size="1.5rem" />
        </Button>
      </div>
    </ActionButtonsBlock>
  );
};

export default TodoListActionButtons;
