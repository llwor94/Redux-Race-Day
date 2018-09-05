import axios from 'axios';

export const FETCHING_RACERS = 'FETCHING_RACERS';
export const FETCHING_RACERS_SUCCESS = 'FETCHING_RACERS_SUCCESS';

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
