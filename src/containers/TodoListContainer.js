import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reverseTodo, remove } from '../modules/todolist';
import { setEntireTodo } from '../modules/todo';
import TodoList from '../components/todo_list/TodoList';
import EmptyTodoList from '../components/todo_list/EmptyTodoList';

const TodoListContainer = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector(({ todolist }) => ({
    todos: todolist.todos.filter(todo => todo.state !== 'remove'),
  }));

  const onUpdate = todo => dispatch(setEntireTodo(todo));
  const onRemove = id => dispatch(remove(id));
  const onReverseSelected = id =>
    dispatch(reverseTodo({ id, name: 'selected' }));
  const onReverseDone = id => dispatch(reverseTodo({ id, name: 'done' }));

  return (
    <>
      {todos.length > 0 && (
        <TodoList
          todos={todos}
          onUpdate={onUpdate}
          onRemove={onRemove}
          onReverseSelected={onReverseSelected}
          onReverseDone={onReverseDone}
        />
      )}
      {todos.length === 0 && <EmptyTodoList />}
    </>
  );
};

export default TodoListContainer;
