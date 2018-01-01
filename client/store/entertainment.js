import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_ENTERTAINMENT';

const initEntertainment  = entertainmentSources => ({ type: INITIALIZE, entertainmentSources});

export default function reducer ( entertainmentSources = [], action) {
    switch (action.type) {
  
      case INITIALIZE:
        return action.entertainmentSources;
  
      default:
        return entertainmentSources;
    }
  }

  export const fetchEntertainment = () => dispatch => {
    axios.get('/api/entertainment')
         .then(res => dispatch(initEntertainment(res.data)));
  };