import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';
import { IoMdKey } from 'react-icons/io';

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  user-select: none;

  h1 {
    font-size: 3rem;
  }
`;

const HeaderSpacer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 20%;
`;

const Header = ({ onShow }) => {
  return (
    <HeaderBlock>
      <HeaderSpacer />
      <Link to="/">
        <h1>TODO-LIST</h1>
      </Link>
      <HeaderSpacer>
        <Button isvoid="true" onClick={onShow}>
          <IoMdKey size="1.5rem" />
        </Button>
      </HeaderSpacer>
    </HeaderBlock>
  );
};

export default Header;
