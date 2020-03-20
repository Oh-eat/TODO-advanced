import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';
import { MdArrowBack } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Button from '../common/Button';

const ActionButtonsBlock = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  align-items: center;
`;

const TodoActionButtons = ({
  match,
  history,
  todo,
  onInsert,
  onUpdate,
  setInputError,
}) => {
  const { action } = match.params;

  const onCancel = () => history.goBack();
  const onConfirm = () => {
    const titleError = todo.title.trim() === '';
    const dDayError = !todo.dDay;
    const isError = titleError || dDayError;

    if (isError) {
      setInputError({ title: titleError, dDay: dDayError });
      return;
    }

    if (action === 'add') {
      onInsert(todo);
    } else {
      onUpdate(todo);
    }
    history.push('/');
  };

  return (
    <ActionButtonsBlock>
      <Button radius="true" width="47.5%" height="2.5rem" onClick={onCancel}>
        <MdArrowBack size="1.5rem" />
      </Button>
      <Button radius="true" width="47.5%" height="2.5rem" onClick={onConfirm}>
        {action === 'add' ? <GoPlus size="1.5rem" /> : <FaEdit size="1.5rem" />}
      </Button>
    </ActionButtonsBlock>
  );
};

export default withRouter(TodoActionButtons);
