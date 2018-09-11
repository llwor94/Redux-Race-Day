import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 55px;
  background: ${props => (props.main ? '#fafafa' : '#00897b')};
  border: 3px solid #00897b;
  font-family: Lato;
  font-weight: 600;
  line-height: 22px;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.12em;
  color: ${props => (props.main ? '#00897b' : '#fafafa')};
  display: block;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    text-underline: none;
  }
`;

const Button = ({ title, main, handleClick }) => (
  <StyledButton main={main} onClick={handleClick}>
    {title}
  </StyledButton>
);

export default Button;
