import React from 'react';
import styled from 'styled-components';
import Spacer from './Spacer';

const Fullscreen = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 768px;
  border-radius: 5px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Modal = ({ children }) => {
  return (
    <Fullscreen>
      <ModalBlock>
        <Spacer height="2rem" />
        {children}
        <Spacer height="2rem" />
      </ModalBlock>
    </Fullscreen>
  );
};

export default Modal;
