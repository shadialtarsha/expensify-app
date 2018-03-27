import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import expensesReducer from './../reducers/expenses';
import filtersReducer from './../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    }),
    // applyMiddleware(thunk) but we need the chrome extension so we cannot add this line here
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
