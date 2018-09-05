import { FETCHING_RACERS, FETCHING_RACERS_SUCCESS } from '../actions';

const initialState = {
  racers: [],
  fetchingRacers: false,
};

export const racerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_RACERS:
      return {
        ...state,
        fetchingRacers: true,
      };
    case FETCHING_RACERS_SUCCESS:
      return {
        ...state,
        fetchingRacers: false,
        racers: [...action.payload],
      };
    default:
      return state;
  }
};
