import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_FINANCIAL';

const initFinancial  = financialSources => ({ type: INITIALIZE, financialSources});

export default function reducer ( financialSources = [], action) {
    switch (action.type) {
  
      case INITIALIZE:
        return action.financialSources;
  
      default:
        return financialSources;
    }
  }

  export const fetchFinancial = () => dispatch => {
      console.log(3)
    axios.get('/api/financial')
         .then(res => dispatch(initFinancial(res.data)));
  };