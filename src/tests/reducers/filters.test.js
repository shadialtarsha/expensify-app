import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toEqual('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toEqual('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'bill' });
  expect(state.text).toEqual('bill');
});

test('should set startDate filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0).add(4, 'days') });
  expect(state.startDate).toEqual(moment(0).add(4, 'days'));
});

test('should set endDate filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0).add(20, 'days') });
  expect(state.endDate).toEqual(moment(0).add(20, 'days'));
});
