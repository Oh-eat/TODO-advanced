import React from 'react';
import styled, { css } from 'styled-components';

const SpacerBlock = styled.div`
  width: 100%;
  height: 1rem;

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;

const Spacer = ({ children, ...props }) => {
  return <SpacerBlock {...props} />;
};

export default Spacer;
