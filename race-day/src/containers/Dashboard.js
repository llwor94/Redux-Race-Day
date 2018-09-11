import React from 'react';
import { connect } from 'react-redux';
import { checkedInRacers } from '../selectors';
import { fetchRacers, fetchDistances, fetchAgeGroups } from '../actions';
import RacerList from '../components/RacerList';
import { Link } from 'react-router-dom';
import Box from '../components/Box';
import Countdown from '../components/Countdown';
import RaceProgress from '../components/RaceProgress';
import ProgressCircle from '../components/ProgressCircle';
import Graph from '../components/Graph';
import Button from '../components/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 65px;
  left: 138px;
  width: calc(100% - 138px);
  height: calc(100vh - 95px);
  margin: 0;
  max-width: 1300px;
  max-height: 800px;
  padding: 35px 10px;
  display: flex;
`;

const Col = styled.div`
  background: #e5e5e5;
  display: flex;
  height: 100%;
  ${'' /* padding: 9px; */} flex-direction: column;
  margin: 0 7px;
`;

const LeftCol = styled(Col)`
  flex: 0 0 27%;
  max-width: 27%;
  background: #fafafa;
  padding: 0;
`;

const Row = styled.div`
  display: flex;
`;
const FirstRow = styled(Row)`
  flex-basis: 0;
  flex-grow: 1;
`;

const ButtonWrapper = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 0;
`;

const SecondRow = styled(Row)`
  flex: 0 0 70%;
  max-width: 70%:
`;

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchRacers();
    this.props.fetchDistances();
    this.props.fetchAgeGroups();
  }
  render() {
    console.log(this.props.checkedInRacers.length / this.props.racers.length);
    return (
      <Wrapper>
        <LeftCol>
          <RacerList racers={this.props.racers} />

          <Link to="/checkin" style={{ width: '100%' }}>
            <Button title="Check In" />
          </Link>
        </LeftCol>
        <Col>
          <FirstRow>
            <Box size="27%">
              <Countdown />
            </Box>
            <Box>
              <RaceProgress />
            </Box>
          </FirstRow>
          <SecondRow>
            <Box>
              <Graph groups={this.props.ageGroups} />
            </Box>
            <Box size="37%">
              <ProgressCircle
                name="Total Signed Up Racers"
                percent={Math.ceil(
                  (this.props.checkedInRacers.length /
                    this.props.racers.length) *
                    100,
                )}
              />
            </Box>
          </SecondRow>
        </Col>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  racers: state.racerReducer.racers,
  ageGroups: state.ageGroupReducer.ageGroups,
  checkedInRacers: checkedInRacers(state),
  fetchingRacers: state.racerReducer.fetchingRacers,
});

export default connect(
  mapStateToProps,
  { fetchRacers, fetchDistances, fetchAgeGroups },
)(Dashboard);
