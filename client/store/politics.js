import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_POLITICS';

const initPol  = polSources => ({ type: INITIALIZE, polSources});

export default function reducer ( polSources = [], action) {
    switch (action.type) {
  
      case INITIALIZE:
        return action.polSources;
  
      default:
        return polSources;
    }
  }

  export const fetchPolitics = () => dispatch => {
    axios.get('/api/politics')
         .then(res => dispatch(initPol(res.data)));
  };