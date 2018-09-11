import React from 'react';
import { connect } from 'react-redux';
import {
  fetchRacers,
  fetchDistances,
  fetchAgeGroups,
  checkInRacer,
  selectRacer,
  deselectRacer,
} from '../actions';
import RacerList from '../components/RacerList';
import SearchBar from '../components/SearchBar';
import RacerProfile from '../components/RacerProfile';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 138px);
  margin: 0;
  max-width: 1300px;
  height: calc(100vh - 65px);
  padding: 35px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
            handleClose={this.props.deselectRacer}
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
  {
    fetchRacers,
    fetchDistances,
    fetchAgeGroups,
    checkInRacer,
    selectRacer,
    deselectRacer,
  },
)(SearchContainer);
