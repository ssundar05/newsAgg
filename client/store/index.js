import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import  politics from './politics'
import  sports from './sports'
import  financial from './financial'
import  technology from './technology'
import  entertainment from './entertainment'
import  sourcesSelect from './sourcesSelect'

const reducer = combineReducers({user, politics, sourcesSelect, sports, technology, entertainment, financial})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './politics'
export * from './sourcesSelect'
export * from './sports'
export * from './financial'
export * from './technology'
export * from './entertainment'