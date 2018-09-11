import React, { Fragment } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 5px 8px;
  border-radius: 3px;
  border: 2px solid gray;
  margin-bottom: 30px;

  &:focus {
    outline-color: #00897b;
  }
`;

const SearchBar = ({ value, handleChange }) => (
  <Fragment>
    <Input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Start typing..."
    />
  </Fragment>
);

export default SearchBar;
