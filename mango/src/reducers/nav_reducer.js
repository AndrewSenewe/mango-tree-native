import AppNavigator from '../config/router';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Welcome'));

const nav_reducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default nav_reducer
