import React from 'react';
import styled from 'styled-components';

const TemplateBlock = styled.div`
  width: auto;
  height: 100%;
  margin: 1rem;
`;

const Template = ({ children }) => {
  return <TemplateBlock>{children}</TemplateBlock>;
};

export default Template;
