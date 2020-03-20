import React from 'react';
import styled from 'styled-components';
import { IoMdKey } from 'react-icons/io';
import { MdArrowBack } from 'react-icons/md';
import Button from '../common/Button';
import { withRouter } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';

const AuthModalActionButtonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`;

const AuthModalActionButtons = ({ type, onHide }) => {
  return (
    <AuthModalActionButtonBlock>
      <Button radius="true" width="60px" height="3rem" onClick={onHide}>
        <MdArrowBack size="1.5rem" />
      </Button>
      <Button radius="true" width="170px" height="3rem" onClick={onHide}>
        {type === 'login' ? (
          <IoMdKey size="2rem" />
        ) : (
          <FaUserPlus size="1.75rem" />
        )}
      </Button>
    </AuthModalActionButtonBlock>
  );
};

export default withRouter(AuthModalActionButtons);
