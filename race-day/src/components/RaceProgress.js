import React from 'react';
import { Row, Col } from 'reactstrap';
import ProgressCircle from './ProgressCircle';
import styled from 'styled-components';

class RaceProgress extends React.Component {
  render() {
    return (
      <Row>
        <ProgressCircle name="2 Mile" percent="50" small={true} />
        <ProgressCircle name="5 Mile" percent="20" small={true} />
        <ProgressCircle name="8 Mile" percent="68" small={true} />
      </Row>
    );
  }
}

export default RaceProgress;
