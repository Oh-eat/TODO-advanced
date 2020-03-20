import React, { useCallback } from 'react';
import Todo from '../components/todo/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { setTodo } from '../modules/todo';
import { insert, update } from '../modules/todolist';

const TodoContainer = ({ onShow }) => {
  const dispatch = useDispatch();
  const { todo } = useSelector(({ todo }) => ({ todo: todo.todo }));

  const onInsert = useCallback(todo => dispatch(insert(todo)), [dispatch]);
  const onUpdate = useCallback(todo => dispatch(update(todo)), [dispatch]);
  const onChangeTitle = useCallback(
    e => {
      dispatch(setTodo({ type: 'title', value: e.target.value }));
    },
    [dispatch],
  );
  const onChangeBody = useCallback(
    e => dispatch(setTodo({ type: 'body', value: e.target.value })),
    [dispatch],
  );

  return (
    <Todo
      todo={todo || { id: null, title: '', body: '', dDay: null }}
      onShow={onShow}
      onChangeTitle={onChangeTitle}
      onChangeBody={onChangeBody}
      onInsert={onInsert}
      onUpdate={onUpdate}
    />
  );
};

export default TodoContainer;
