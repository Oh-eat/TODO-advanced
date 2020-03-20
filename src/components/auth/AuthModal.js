import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import Input from '../common/Inputs';
import Spacer from '../common/Spacer';
import AuthModalActionButtons from './AuthModalActionButtons';
import Button from '../common/Button';

const InputBlock = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthModal = ({ auth, onHide, onChangeField, onInitialize }) => {
  const [type, setType] = useState('login');

  return (
    <Modal>
      <InputBlock>
        <h2>{type === 'login' ? '로그인' : '등록'}</h2>
        <Spacer height="1.5rem" />
        <Input
          name="계정"
          value={auth[type].username}
          onChange={e =>
            onChangeField({ type, key: 'username', value: e.target.value })
          }
          width="250px"
        />
        <Spacer height="1.5rem" />
        <Input
          password={true}
          name="비밀번호"
          value={auth[type].password}
          onChange={e =>
            onChangeField({ type, key: 'password', value: e.target.value })
          }
          width="250px"
        />
        <Spacer height="1.5rem" />
        {type === 'register' && (
          <>
            <Input
              password={true}
              name="비밀번호 확인"
              value={auth[type].passwordConfirm}
              onChange={e =>
                onChangeField({
                  type,
                  key: 'passwordConfirm',
                  value: e.target.value,
                })
              }
              width="250px"
            />
            <Spacer height="1.5rem" />
          </>
        )}
        <AuthModalActionButtons type={type} onHide={onHide} />
        <Spacer />
        {type === 'login' ? (
          <Button
            isvoid={true}
            onClick={() => {
              onInitialize(type);
              setType('register');
            }}
          >
            계정 등록
          </Button>
        ) : (
          <Button
            isvoid={true}
            onClick={() => {
              onInitialize(type);
              setType('login');
            }}
          >
            로그인
          </Button>
        )}
      </InputBlock>
    </Modal>
  );
};

export default AuthModal;
