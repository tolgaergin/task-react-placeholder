import React from 'react';
import { StyledTitle } from './style';

function Title(props) {

  return (
    <StyledTitle>{props.title}</StyledTitle>
  );
};

export default Title;
