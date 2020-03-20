import React from 'react';
import styled, { css } from 'styled-components';

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  width: 100%;

  input,
  textarea {
    margin-top: 0.75rem;
    padding: 0.5rem;
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    font-size: 1.5rem;

    &:hover,
    &:focus {
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
    }
  }

  textarea {
    resize: none;
  }

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${props =>
    props.error &&
    css`
      input,
      textarea {
        box-shadow: 0px 0px 10px rgba(255, 0, 0, 0.3);
      }
    `}
`;

export const TextArea = ({ name, maxLength, ...rest }) => {
  return (
    <InputBlock>
      <div className="inputName">{name}</div>
      <textarea {...rest} maxLength={maxLength || '1000'} />
    </InputBlock>
  );
};

const Input = ({
  password,
  error,
  width,
  name,
  maxLength,
  readOnly,
  ...rest
}) => {
  return (
    <InputBlock error={error} width={width || false}>
      <div className="inputName">{name}</div>
      <input
        {...rest}
        type={password ? 'password' : 'textbox'}
        maxLength={maxLength || '24'}
        readOnly={readOnly || false}
      />
    </InputBlock>
  );
};

export default Input;
