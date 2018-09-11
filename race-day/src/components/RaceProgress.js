import React, { Fragment } from 'react';
import { connect } from 'react-redux';
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
        {this.props.distances.map(distance => (
          <ProgressCircle
            key={distance.id}
            name={distance.distance}
            percent={Math.ceil((distance.checkedIn / distance.total) * 100)}
            small={true}
          />
        ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  distances: state.distanceReducer.distances,
});

export default connect(mapStateToProps)(RaceProgress);
