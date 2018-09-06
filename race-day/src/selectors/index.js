import { createSelector } from 'reselect';

const racersSelector = state => state.racerReducer.racers;
const distanceSelector = (state, props) =>
  state.distanceReducer.distances.find(distance => distance === props.distance);

export const checkedInRacers = createSelector([racersSelector], racers => {
  return racers.filter(racer => {
    console.log(racer.checkedIn !== 0);
    return racer.checkedIn !== 0;
  });
});

export const racersPerDistance = createSelector([distanceSelector]);
