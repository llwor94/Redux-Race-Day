import React from 'react';
import styled from 'styled-components';
import logo from '../assets/endurancescout.png';

const Wrapper = styled.div`
  width: 100%;
  height: 65px;
  left: 0px;
  top: 0px;
  background: #292929;
`;

const Title = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 34px;
  line-height: 65px;
  text-align: left;
  padding: 0 150px;
  color: #fafafa;
`;

const Header = () => (
  <Wrapper>
    <Title>Master Race</Title>
  </Wrapper>
);

export default Header;
