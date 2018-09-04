import React from 'react';
import styled from 'styled-components';
import RaceProgress from './RaceProgress';
import ProgressCircle from './ProgressCircle';
import Graph from './Graph';
import { Row, Col } from 'reactstrap';

const Wrapper = styled(Col)`
  background: #e5e5e5;
  padding: 9px;
  max-width: 950px;
  height: 700px;
`;

const Box = styled(Col)`
  margin: 7px;
  padding: 7px 10px;
  background: #fafafa;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
`;

const TimeBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledRow = styled(Row)`
  margin: 0;
`;

const SecondRow = styled(Row)`
  margin: 0;
  height: 67%;
`;

const Time = styled.h3`
  font-size: 80px;
  font-family: 'Lato', sans-serif;
  color: #00897b;
`;

const StatBox = params => (
  <Wrapper>
    <StyledRow>
      <TimeBox sm="3">
        <Time>5:13</Time>
        <span>til race time</span>
      </TimeBox>
      <Box>
        <RaceProgress />
      </Box>
    </StyledRow>
    <SecondRow>
      <Box>
        <Graph />
      </Box>
      <Box sm="4">
        <ProgressCircle name="Total Signed Up Racers" percent="40" />
      </Box>
    </SecondRow>
  </Wrapper>
);

export default StatBox;
