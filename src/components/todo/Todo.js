import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import dateToString from '../../lib/dateToString';
import { unloadTodo } from '../../modules/todo';
import { useDispatch } from 'react-redux';
import Spacer from '../common/Spacer';
import Input, { TextArea } from '../common/Inputs';
import TodoActionButtons from './TodoActionButtons';

const TodoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleDate = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Foot = styled.div`
  display: flex;

  .error {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    width: 70%;
    color: red;
  }
`;

const Todo = ({
  todo,
  onShow,
  onChangeTitle,
  onChangeBody,
  onInsert,
  onUpdate,
  match,
  history,
}) => {
  const dispatch = useDispatch();
  const { action } = match.params;
  const [inputError, setInputError] = useState({ title: false, dDay: false });

  useEffect(() => {
    if (!(action === 'update' || action === 'add')) {
      alert('비정상적인 접근입니다.');
      history.push('/');
    }
    if (action === 'update' && !todo.id) {
      alert('비정상적인 접근입니다.');
      history.push('/');
    }
    return () => dispatch(unloadTodo());
  }, [action, history, todo.id, dispatch]);

  return (
    <TodoBlock>
      <TitleDate>
        <Input
          error={inputError.title}
          width="47.5%"
          name="제목"
          value={todo.title}
          onChange={onChangeTitle}
          maxLength="24"
        />
        <Input
          error={inputError.dDay}
          width="47.5%"
          name="날짜"
          value={dateToString(todo.dDay)}
          onClick={onShow}
          readOnly={true}
        />
      </TitleDate>
      <Spacer height="1.5rem" />
      <TextArea
        name="내용"
        rows="20"
        value={todo.body}
        onChange={onChangeBody}
        maxLength="1000"
      />
      <Spacer height="1.5rem" />
      <Foot>
        <div className="error">
          {(inputError.title || inputError.dDay) &&
            '제목과 날짜를 반드시 입력하세요'}
        </div>
        <TodoActionButtons
          todo={todo}
          onInsert={onInsert}
          onUpdate={onUpdate}
          setInputError={setInputError}
        />
      </Foot>
    </TodoBlock>
  );
};

export default withRouter(Todo);
