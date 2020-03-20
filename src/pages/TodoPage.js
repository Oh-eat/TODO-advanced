import React, { useState } from 'react';
import Spacer from '../components/common/Spacer';
import TodoContainer from '../containers/TodoContainer';
import DateModalContainer from '../containers/DateModalContainer';

const TodoPage = () => {
  const [modal, setModal] = useState(false);

  const onShow = () => setModal(true);
  const onHide = () => setModal(false);

  return (
    <>
      <Spacer height="1.5rem" />
      <TodoContainer onShow={onShow} />
      {modal && <DateModalContainer onHide={onHide} />}
    </>
  );
};

export default TodoPage;
