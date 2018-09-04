import React from 'react';
import RacerList from '../components/RacerList';
import StatBox from '../components/StatBox';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

const Wrapper = styled(Row)`
  position: absolute;
  top: 80px;
  left: 138px;
  width: calc(100% - 138px);
  height: calc(100% - 80px);
  margin: 0;
  padding: 35px 20px;
`;

const Button = styled.button`
  width: 100%:
  height: 55px;
  background: #00897b;
  font-family: Lato;
  font-weight: 600;
  line-height: 22px;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.12em;
  color: #FAFAFA;
  display: block;
  padding: 10px 20px;
`;

export default class Dashboard extends React.Component {
  render() {
    return (
      <Wrapper fluid={true}>
        <Col sm="3">
          <RacerList />
          <Button>CHECK IN</Button>
        </Col>
        <StatBox />
      </Wrapper>
    );
  }
}
