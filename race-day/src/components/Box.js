import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  margin: 7px;
  padding: 7px 10px;
  background: #fafafa;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
  flex-basis: 0;
  flex-grow: 1;
  border-radius: 3px;
`;

const SizedBox = styled(StyledBox)`
  flex: ${props => '0 0 ' + props.size};
  max-width: ${props => props.size};
`;

const Box = props => {
  if (props.size) {
    return <SizedBox size={props.size}>{props.children}</SizedBox>;
  } else {
    return <StyledBox>{props.children}</StyledBox>;
  }
};

export default Box;
