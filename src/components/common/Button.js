import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../lib/palette';

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  background: ${palette.gray[6]};
  border: none;
  outline: none;

  &:hover {
    background: ${palette.gray[4]};
  }

  & + & {
    margin-left:0.5rem;
  }

  ${props =>
    props.radius &&
    css`
      border-radius: 5px;
    `}

  ${props =>
    props.dark &&
    css`
      background: ${palette.gray[8]};
    `}

    ${props =>
      props.isvoid &&
      css`
        background: transparent;

        &:hover {
          background: transparent;
          color: ${palette.gray[8]};
        }
      `}

    ${props =>
      props.whiteFont &&
      css`
        color: white;
      `}
    
    ${props =>
      props.height &&
      css`
        height: ${props.height};
      `}

    ${props =>
      props.width &&
      css`
        width: ${props.width};
      `}

    ${props =>
      props.fluid &&
      css`
        width: 100%;
      `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle};
`;

const Button = ({ children, ...props }) => {
  return props.to ? (
    <StyledLink {...props}>{children}</StyledLink>
  ) : (
    <StyledButton {...props}>{children}</StyledButton>
  );
};

export default Button;
