import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_TECHNOLOGY';

const initTechnology  = technologySources => ({ type: INITIALIZE, technologySources});

export default function reducer ( technologySources = [], action) {
    switch (action.type) {
  
      case INITIALIZE:
        return action.technologySources;
  
      default:
        return technologySources;
    }
  }

  export const fetchTechnology = () => dispatch => {
      console.log(3)
    axios.get('/api/technology')
         .then(res => dispatch(initTechnology(res.data)));
  };