import React from 'react';
import styled from 'styled-components';
import RaceProgress from './RaceProgress';
import ProgressCircle from './ProgressCircle';
import Graph from './Graph';

const Wrapper = styled.div`
  background: #e5e5e5;
  padding: 9px;
  max-width: 950px;
  height: 700px;
  flex-basis: 0;
  flex-grow: 1;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  margin: 7px;
  padding: 7px 10px;
  background: #fafafa;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
  flex-basis: 0;
  flex-grow: 1;
`;

const TimeBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 27%;
  max-width: 27%;
`;

const ProgressBox = styled(Box)`
  flex: 0 0 37%;
  max-width: 37%;
`;

const StyledRow = styled.div`
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
`;

const SecondRow = styled.div`
  display: flex;
  margin: 0;
  flex: 0 0 70%;
`;

const Time = styled.h3`
  font-size: 80px;
  font-family: 'Lato', sans-serif;
  color: #00897b;
`;

const StatBox = params => (
  <Wrapper>
    <StyledRow>
      <TimeBox>
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
      <ProgressBox>
        <ProgressCircle name="Total Signed Up Racers" percent="40" />
      </ProgressBox>
    </SecondRow>
  </Wrapper>
);

export default StatBox;
