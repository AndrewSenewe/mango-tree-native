import { combineReducers } from 'redux';

import tree_reducer from './tree_reducer';
import nav_reducer from './nav_reducer';

export default combineReducers({
  tree: tree_reducer,
  nav: nav_reducer
})
