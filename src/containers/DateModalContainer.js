import React from 'react';
import DateModal from '../components/todo/DateModal';
import { useSelector, useDispatch } from 'react-redux';
import { setTodo } from '../modules/todo';

const DateModalContainer = ({ onHide }) => {
  const dispatch = useDispatch();
  const { dDay } = useSelector(({ todo }) => ({ dDay: todo.todo.dDay }));

  const onConfirm = date => {
    const { year, month, day, hour, minute } = date;
    const nextDate = new Date(year, month - 1, day, hour, minute);
    dispatch(setTodo({ type: 'dDay', value: nextDate }));
    onHide();
  };

  return <DateModal dDay={dDay} onHide={onHide} onConfirm={onConfirm} />;
};

export default DateModalContainer;
