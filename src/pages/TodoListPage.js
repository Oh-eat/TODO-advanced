import React from 'react';
import TodoListContainer from '../containers/TodoListContainer';
import TodoListActionButtons from '../components/todo_list/TodoListActionButtons';
import Spacer from '../components/common/Spacer';

const TodoListPage = () => {
  return (
    <>
      <TodoListActionButtons />
      <Spacer height="1.5rem" />
      <TodoListContainer />
    </>
  );
};

export default TodoListPage;
