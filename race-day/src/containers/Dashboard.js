import React from 'react';
import { connect } from 'react-redux';
import { fetchRacers } from '../actions';
import RacerList from '../components/RacerList';
import StatBox from '../components/StatBox';
import Button from '../components/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 65px;
  left: 138px;
  width: calc(100% - 138px);
  height: calc(100% - 125px);
  margin: 0;
  padding: 35px 10px;
  display: flex;
`;

const LeftCol = styled.div`
  flex: 0 0 27%;
  max-width: 27%;
  margin: 0 15px;
`;

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchRacers();
  }
  render() {
    return (
      <Wrapper>
        <LeftCol>
          <RacerList racers={this.props.racers} />
          <Button title="Check In" />
        </LeftCol>
        <StatBox />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  racers: state.racerReducer.racers,
  fetchingRacers: state.racerReducer.fetchingRacers,
});

export default connect(
  mapStateToProps,
  { fetchRacers },
)(Dashboard);
