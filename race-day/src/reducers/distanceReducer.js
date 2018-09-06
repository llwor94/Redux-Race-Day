import { FETCHING_DISTANCES, FETCHING_DISTANCES_SUCCESS } from '../actions';

const initialState = {
  distances: [],
  fetchingDistances: false,
};

export const distanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DISTANCES:
      return {
        ...state,
        fetchingDistances: true,
      };
    case FETCHING_DISTANCES_SUCCESS:
      return {
        ...state,
        distances: [...action.payload],
        fetchingDistances: false,
      };
    default:
      return state;
  }
};
