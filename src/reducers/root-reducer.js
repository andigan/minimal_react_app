import { combineReducers } from 'redux';
import configReducer from './config-reducer';
import starWarsReducer from './star-wars-reducer';

export default combineReducers({
  config: configReducer,
  starWars: starWarsReducer
});
