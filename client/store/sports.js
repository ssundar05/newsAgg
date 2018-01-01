import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_SPORTS';

const initSports  = sportsSources => ({ type: INITIALIZE, sportsSources});

export default function reducer ( sportsSources = [], action) {
    switch (action.type) {
  
      case INITIALIZE:
        return action.sportsSources;
  
      default:
        return sportsSources;
    }
  }

  export const fetchSports = () => dispatch => {
      console.log(3)
    axios.get('/api/sports')
         .then(res => dispatch(initSports(res.data)));
  };