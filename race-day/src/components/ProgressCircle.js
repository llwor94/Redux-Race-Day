import React from 'react';
import { Col } from 'reactstrap';
import CircularProgressbar from 'react-circular-progressbar';
import styled from 'styled-components';

const Wrapper = styled(Col)`
  max-width: ${props => (props.sm ? '30%' : '100%')};
  max-height: 75%;
  p {
    text-align: center;
    margin-bottom: ${props => (props.sm ? '5px' : '30px')};
    color: ${props => (props.sm ? '#c4c4c4' : '#00897b')};
    font-weight: ${props => (props.sm ? 'bold' : 'semi-bold')};
    font-family: 'Lato', sans-serif;
    font-size: ${props => (props.sm ? '16px' : '32px')};
  }

  svg {
    height: 100%;
  }
`;

const ProgressCircle = ({ name, percent, small }) => (
  <Wrapper sm={small}>
    <p>{name}</p>
    <CircularProgressbar
      strokeWidth="11"
      styles={{
        height: '75%',
        path: { stroke: small ? '#292929' : '#67bfb1', strokeLinecap: 'butt' },
        text: { fill: small ? '#00897b' : '#67BFB1' },
        trail: { stroke: '#eee' },
      }}
      percentage={percent}
      text={`${percent}%`}
    />
  </Wrapper>
);

export default ProgressCircle;
