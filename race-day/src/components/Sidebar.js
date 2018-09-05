import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  width: 138px;
  height: 100%;
  background: #efefef;
  position: absolute;
  left: 0px;
  top: 65px;
  padding: 30px 15px;
`;

const Link = styled(NavLink)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 19px;
  line-height: 35px;
  color: #00897b;
  float: right;

  &:hover {
    color: #00897b;
  }
`;

const Sidebar = () => (
  <Wrapper>
    <Link exact to="/" activeStyle={{ color: 'black' }}>
      Dashboard
    </Link>
    <Link to="/checkin" activeStyle={{ color: 'black' }}>
      Check In
    </Link>
    <Link to="/settings" activeStyle={{ color: 'black' }}>
      Settings
    </Link>
  </Wrapper>
);

export default Sidebar;
