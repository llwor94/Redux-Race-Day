import React from 'react';
import styled from 'styled-components';
import logo from '../assets/endurancescout.png';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  left: 0px;
  top: 0px;
  background: #292929;
`;

const Title = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 47px;
  line-height: 80px;
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
