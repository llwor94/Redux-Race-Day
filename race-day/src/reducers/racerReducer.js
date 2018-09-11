import {
  FETCHING_RACERS,
  FETCHING_RACERS_SUCCESS,
  CHECK_IN_RACER,
  CHECK_IN_RACER_SUCCESS,
  SELECT_RACER,
  DESELECT_RACER,
} from '../actions';

const initialState = {
  racers: [],
  currentRacer: '',
  checkedInRacers: [],
  checkingInRacer: false,
  fetchingCheckedIn: false,
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
        checkedInRacers: action.payload.filter(racer => racer.checked_in),
      };
    case SELECT_RACER:
      return {
        ...state,
        currentRacer: action.payload,
      };
    case CHECK_IN_RACER:
      return {
        ...state,
        checkingInRacer: true,
      };
    case CHECK_IN_RACER_SUCCESS:
      return {
        ...state,
        currentRacer: action.payload,
        checkingInRacer: false,
      };
    case DESELECT_RACER:
      return {
        ...state,
        currentRacer: '',
      };
    default:
      return state;
  }
};
