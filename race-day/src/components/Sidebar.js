import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 138px;
  height: 100%;
  background: #efefef;
  position: absolute;
  left: 0px;
  top: 80px;
  padding: 30px 15px;
`;

const Link = styled.p`
  font-family: Roboto;
  font-weight: 500;
  font-size: 19px;
  line-height: 35px;
  color: #00897b;
  float: right;
`;

const Sidebar = () => (
  <Wrapper>
    <Link>Dashboard</Link>
    <Link>Settings</Link>
    <Link>Check In</Link>
  </Wrapper>
);

export default Sidebar;
