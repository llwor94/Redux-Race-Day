import { FETCHING_AGE_GROUPS, FETCHING_AGE_GROUPS_SUCCESS } from '../actions';

const initialState = {
  ageGroups: [],
  fetchingGroups: false,
};

export const ageGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_AGE_GROUPS:
      return {
        ...state,
        fetchingGroups: true,
      };
    case FETCHING_AGE_GROUPS_SUCCESS:
      return {
        ...state,
        ageGroups: [...action.payload],
        fetchingGroups: false,
      };
    default:
      return state;
  }
};
