import axios from 'axios';

export const FETCHING_RACERS = 'FETCHING_RACERS';
export const FETCHING_RACERS_SUCCESS = 'FETCHING_RACERS_SUCCESS';
export const FETCHING_CHECKED_IN = 'FETCHING_CHECKED_IN';
export const FETCHING_CHECKED_IN_SUCCESS = 'FETCHING_CHECKED_IN_SUCCESS';

const URL = 'http://localhost:3500/api/racers';

export const fetchRacers = () => dispatch => {
  dispatch({ type: FETCHING_RACERS });
  axios.get(URL).then(response => {
    dispatch({
      type: FETCHING_RACERS_SUCCESS,
      payload: response.data,
    });
  });
};

export const fetchCheckedIn = () => dispatch => {
  dispatch({ type: FETCHING_RACERS });
  axios.get(`${URL}/checkedin`).then(response => {
    dispatch({
      type: FETCHING_RACERS_SUCCESS,
      payload: response.data,
    });
  });
};
