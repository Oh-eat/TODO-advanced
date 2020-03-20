import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { TiCalendar } from 'react-icons/ti';
import palette from '../../lib/palette';
import dateToString from '../../lib/dateToString';
import Button from '../common/Button';
import Spacer from '../common/Spacer';

const TodoItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: ${palette.gray[1]};

  &:nth-child(even) {
    background: ${palette.gray[2]};
  }

  ${props =>
    props.done &&
    css`
      background: ${palette.green[3]};

      &:nth-child(even) {
        background: ${palette.green[5]};
      }
    `}
`;

const TodoItemHeadBlock = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 4rem;
  font-size: 1.5rem;

  .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1rem;
    cursor: pointer;
  }

  .title {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const TodoItemDetailBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  max-height: 200px;
  font-size: 1.25rem;

  .dDay {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .body {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
    width: auto;
    max-height: 200px;
    overflow-y: auto;
  }
`;

const TodoItem = ({
  todo,
  onUpdate,
  onRemove,
  onReverseSelected,
  onReverseDone,
}) => {
  const [buttonVisible, setButtonVisible] = useState(false);
  const [detail, setDetail] = useState(false);

  const onSetDetail = useCallback(() => setDetail(state => !state), []);
  const onHover = useCallback(() => setButtonVisible(true), []);
  const onLeave = useCallback(() => setButtonVisible(false), []);

  return (
    <TodoItemBlock
      done={todo.done}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onContextMenu={e => {
        e.preventDefault();
        onReverseDone();
      }}
    >
      <TodoItemHeadBlock onClick={onSetDetail}>
        <div
          className="checkbox"
          onClick={e => {
            e.stopPropagation();
            onReverseDone();
          }}
        >
          {todo.done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
        <div className="title">{todo.title}</div>
        {(buttonVisible || detail) && (
          <div className="buttons">
            <Button to="/todo/update" isvoid="true" onClick={onUpdate}>
              <FaEdit size="1.25rem" />
            </Button>
            <Button isvoid="true" onClick={onRemove}>
              <FaTrash size="1.25rem" />
            </Button>
          </div>
        )}
      </TodoItemHeadBlock>
      {detail && (
        <TodoItemDetailBlock>
          <div className="dDay">
            <TiCalendar size="1.25rem" />
            <Spacer width="0.5rem" />
            {dateToString(todo.dDay)}
          </div>
          <Spacer height="0.75rem" />
          <div className="body">{todo.body}</div>
          <Spacer />
        </TodoItemDetailBlock>
      )}
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
