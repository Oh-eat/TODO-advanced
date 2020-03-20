import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  height: 40rem;
  overflow-y: auto;
`;

const TodoList = ({
  todos,
  onUpdate,
  onRemove,
  onReverseSelected,
  onReverseDone,
}) => {
  return (
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdate={() => onUpdate(todo)}
          onRemove={e => {
            e.stopPropagation();
            onRemove(todo.id);
          }}
          onReverseSelected={() => onReverseSelected(todo.id)}
          onReverseDone={() => onReverseDone(todo.id)}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
