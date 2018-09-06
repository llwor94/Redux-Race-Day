import axios from 'axios';

export const FETCHING_RACERS = 'FETCHING_RACERS';
export const FETCHING_RACERS_SUCCESS = 'FETCHING_RACERS_SUCCESS';
export const FETCHING_CHECKED_IN = 'FETCHING_CHECKED_IN';
export const FETCHING_CHECKED_IN_SUCCESS = 'FETCHING_CHECKED_IN_SUCCESS';
export const FETCHING_DISTANCES = 'FETCHING_DISTANCES';
export const FETCHING_DISTANCES_SUCCESS = 'FETCHING_DISTANCES_SUCCESS';
export const FETCHING_AGE_GROUPS = 'FETCHING_AGE_GROUPS';
export const FETCHING_AGE_GROUPS_SUCCESS = 'FETCHING_AGE_GROUPS_SUCCESS';

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
//   dispatch({ type: FETCHING_RACERS });
//   axios.get(`${URL}/checkedin`).then(response => {
//     dispatch({
//       type: FETCHING_RACERS_SUCCESS,
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
