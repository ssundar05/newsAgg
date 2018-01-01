import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_SELECTED_SOURCES';
const SETPOL = 'SET_POL'
const SETSPO = 'SET_SPORTS'
const SETFIN = 'SET_FINANCIAL'
const SETENT = 'SET_ENTERTAINMENT'
const SETTECH = 'SET_TECHNOLOGY'

const initSelectedSources = selectedSources => ({ type: INITIALIZE, selectedSources });
const setPol = selectedPol => ({ type: SETPOL, selectedPol })
const setSpo = selectedSpo => ({ type: SETSPO, selectedSpo })
const setFin = selectedFin => ({ type: SETFIN, selectedFin })
const setEnt = selectedEnt => ({ type: SETENT, selectedEnt })
const setTech = selectedTech => ({ type: SETTECH, selectedTech })

export default function reducer(selectedSources = [], action) {
  switch (action.type) {

    case INITIALIZE:
      return action.selectedSources;

    case SETPOL:
      return [Object.assign({}, selectedSources[0], { politics: action.selectedPol }), selectedSources[1]];

      case SETSPO:
      return [Object.assign({}, selectedSources[0], { sports: action.selectedSpo }), selectedSources[0]];

      case SETFIN:
      return [Object.assign({}, selectedSources[0], { financial: action.selectedFin }), selectedSources[0]];

      case SETENT:
      return [Object.assign({}, selectedSources[0], { entertainment: action.selectedEnt }), selectedSources[0]];

      case SETTECH:
      return [Object.assign({}, selectedSources[0], { technology: action.selectedTech }), selectedSources[0]];

    default:
      return selectedSources;
  }
}

export const findSelectedSources = (email) => dispatch => {

  axios.put('/api/selectedSources', email)
    .then(res => dispatch(initSelectedSources(res.data)));
};


export const setPolitics = (name) => dispatch => {
  axios.put('/api/selectedSources/polSelect', name)
    .then(res => {
     return dispatch(setPol(res.data))
    }
    )
    
  };

  export const setSports = (name) => dispatch => {
     axios.put('/api/selectedSources/sportsSelect', name)
      .then(res =>{
       return dispatch(setSpo(res.data))
      }
      )
    };

    export const setFinancial = (name) => dispatch => {
       axios.put('/api/selectedSources/financialSelect', name)
        .then(res =>{
         return dispatch(setFin(res.data))
        }
        )
      };

      export const setEntertainment = (name) => dispatch => {
         axios.put('/api/selectedSources/entertainmentSelect', name)
          .then(res =>{
           return dispatch(setEnt(res.data))
          }
          )
        };

        export const setTechnology = (name) => dispatch => {
           axios.put('/api/selectedSources/technologySelect', name)
            .then(res =>{
             return dispatch(setTech(res.data))
            }
            )
          };
