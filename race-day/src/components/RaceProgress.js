import React, { Fragment } from 'react';
import ProgressCircle from './ProgressCircle';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
`;
class RaceProgress extends React.Component {
  render() {
    return (
      <Wrapper>
        <ProgressCircle name="2 Mile" percent="50" small={true} />
        <ProgressCircle name="3 Mile" percent="20" small={true} />
        <ProgressCircle name="8 Mile" percent="68" small={true} />
      </Wrapper>
    );
  }
}

export default RaceProgress;
