import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import ConfigureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { startSetExpenses } from './actions/expenses';
import './styles/styles.scss';
import './firebase/firebase';

const store = ConfigureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
