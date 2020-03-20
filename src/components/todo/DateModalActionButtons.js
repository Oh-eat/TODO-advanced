import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { MdArrowBack } from 'react-icons/md';
import { GoCheck } from 'react-icons/go';

const DateModalActionButtonsBlock = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
`;

const DateModalActionButtons = ({ nextDate, onHide, onConfirm }) => {
  return (
    <DateModalActionButtonsBlock>
      <Button onClick={onHide} width="47.5%" height="2rem" radius="true">
        <MdArrowBack />
      </Button>
      <Button
        onClick={() => onConfirm(nextDate)}
        width="47.5%"
        height="2rem"
        radius="true"
      >
        <GoCheck />
      </Button>
    </DateModalActionButtonsBlock>
  );
};

export default DateModalActionButtons;
