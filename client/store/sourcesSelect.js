import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_SELECTED_SOURCES';

const initSelectedSources  = selectedSources => ({ type: INITIALIZE, selectedSources});

export default function reducer ( selectedSources = [], action) {
    switch (action.type) {
  
      case INITIALIZE:
        return action.selectedSources;
  
      default:
        return selectedSources;
    }
  }

  export const findSelectedSources = (email) => dispatch => {
    axios.put('/api/selectedSources', email)
         .then(res => dispatch(initSelectedSources(res.data)));
  };