import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_SELECTED_SOURCES';
const SETPOL = 'SET_POL'

const initSelectedSources = selectedSources => ({ type: INITIALIZE, selectedSources });
const setPol = selectedPol => ({ type: SETPOL, selectedPol })

export default function reducer(selectedSources = [], action) {
  switch (action.type) {

    case INITIALIZE:
      return action.selectedSources;

    case SETPOL:
      return [Object.assign({}, selectedSources[0], { politics: action.selectedPol }), selectedSources[1]];

    default:
      return selectedSources;
  }
}

export const findSelectedSources = (email) => dispatch => {

  axios.put('/api/selectedSources', email)
    .then(res => dispatch(initSelectedSources(res.data)));
};

// export function fetchOffers() {
//   return dispatch => 
//     axios
//       .get('/API/offers')
//       .then((response) => {
//         dispatch({ type: FETCH_OFFERS, payload: response.data });
//       })
//       .catch((err) => {
//         console.error(err);
//       });
// }
export const setPolitics = (name) => dispatch => {
  return axios.put('/api/selectedSources/polSelect', name)
    .then(res =>{
     return dispatch(setPol(res.data))
    }
    )
    
  };

