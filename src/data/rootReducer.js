import { combineReducers } from 'redux';

import characters from './characters';

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  characters: characters.reducer,
});

export default rootReducer;
