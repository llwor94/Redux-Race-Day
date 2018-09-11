import React from 'react';
import { connect } from 'react-redux';
import {
  fetchRacers,
  fetchDistances,
  fetchAgeGroups,
  checkInRacer,
  selectRacer,
} from '../actions';
import RacerList from '../components/RacerList';
import SearchBar from '../components/SearchBar';
import RacerProfile from '../components/RacerProfile';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 65px;
  left: 138px;
  width: calc(100% - 138px);
  height: calc(100% - 95px);
  margin: 0;
  max-width: 1300px;
  max-height: 800px;
  padding: 35px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #fafafa;
`;

class SearchContainer extends React.Component {
  state = {
    value: '',
    filteredRacers: [],
    // currentRacer: '',
  };

  componentDidMount() {
    this.props.fetchRacers();
    this.props.fetchDistances();
    this.props.fetchAgeGroups();
  }

  filterRacers = e => {
    const filtered = this.props.racers.filter(racer =>
      racer.name.toLowerCase().includes(e.target.value.toLowerCase()),
    );

    this.setState({ value: e.target.value, filteredRacers: filtered });
  };

  selectRacer = racer => {
    this.props.selectRacer(racer);
  };

  render() {
    return (
      <Wrapper>
        <SearchBar value={this.state.value} handleChange={this.filterRacers} />
        {!this.props.currentRacer ? (
          <RacerList
            racers={
              this.state.filteredRacers.length
                ? this.state.filteredRacers
                : this.props.racers
            }
            big={true}
            handleClick={this.selectRacer}
          />
        ) : (
          <RacerProfile
            racer={this.props.currentRacer}
            handleSubmit={() =>
              this.props.checkInRacer(this.props.currentRacer)
            }
          />
        )}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  currentRacer: state.racerReducer.currentRacer,
  racers: state.racerReducer.racers,
  ageGroups: state.ageGroupReducer.ageGroups,
  fetchingRacers: state.racerReducer.fetchingRacers,
});

export default connect(
  mapStateToProps,
  { fetchRacers, fetchDistances, fetchAgeGroups, checkInRacer, selectRacer },
)(SearchContainer);
