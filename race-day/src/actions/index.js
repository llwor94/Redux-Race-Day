import axios from 'axios';

export const FETCHING_RACERS = 'FETCHING_RACERS';
export const FETCHING_RACERS_SUCCESS = 'FETCHING_RACERS_SUCCESS';
export const FETCHING_CHECKED_IN = 'FETCHING_CHECKED_IN';
export const FETCHING_CHECKED_IN_SUCCESS = 'FETCHING_CHECKED_IN_SUCCESS';
export const FETCHING_DISTANCES = 'FETCHING_DISTANCES';
export const FETCHING_DISTANCES_SUCCESS = 'FETCHING_DISTANCES_SUCCESS';
export const FETCHING_AGE_GROUPS = 'FETCHING_AGE_GROUPS';
export const FETCHING_AGE_GROUPS_SUCCESS = 'FETCHING_AGE_GROUPS_SUCCESS';
export const CHECK_IN_RACER = 'CHECK_IN_RACER';
export const CHECK_IN_RACER_SUCCESS = 'CHECK_IN_RACER_SUCCESS';
export const SELECT_RACER = 'SELECT_RACER';

const URL = 'http://localhost:3500/api/racers';
const dURL = 'http://localhost:3500/api/distances';
const agURL = 'http://localhost:3500/api/ages';

export const fetchRacers = () => dispatch => {
  dispatch({ type: FETCHING_RACERS });
  axios.get(URL).then(response => {
    dispatch({
      type: FETCHING_RACERS_SUCCESS,
      payload: response.data,
    });
  });
};

// export const fetchCheckedIn = () => dispatch => {
//   dispatch({ type: FETCHING_CHECKED_IN });
//   axios.get(`${URL}/checkedin`).then(response => {
//     dispatch({
//       type: FETCHING_CHECKED_IN_SUCCESS,
//       payload: response.data,
//     });
//   });
// };

export const fetchDistances = () => dispatch => {
  dispatch({ type: FETCHING_DISTANCES });
  axios.get(dURL).then(response => {
    dispatch({
      type: FETCHING_DISTANCES_SUCCESS,
      payload: response.data,
    });
  });
};

export const fetchAgeGroups = () => dispatch => {
  dispatch({ type: FETCHING_AGE_GROUPS });
  axios.get(agURL).then(response => {
    dispatch({
      type: FETCHING_AGE_GROUPS_SUCCESS,
      payload: response.data,
    });
  });
};

export const checkInRacer = racer => dispatch => {
  dispatch({ type: CHECK_IN_RACER });
  axios.post(`${URL}/checkin`, racer).then(response => {
    dispatch({ type: CHECK_IN_RACER_SUCCESS, payload: response.data });
  });
};

export const selectRacer = racer => ({
  type: SELECT_RACER,
  payload: racer,
});
