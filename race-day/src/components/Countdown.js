import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Time = styled.h3`
  font-size: 80px;
  font-family: 'Lato', sans-serif;
  color: #00897b;
`;

const Countdown = () => (
  <Wrapper>
    <Time>5:13</Time>
    <p>til race time</p>
  </Wrapper>
);

export default Countdown;
