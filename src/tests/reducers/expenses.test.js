import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses]);
});

test('should add an expense', () => {
  const expense = {
    id: '109',
    description: 'Coffee',
    note: '',
    amount: 200,
    createdAt: 0,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const updates = { description: 'New value' };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(updates.description);
});

test('should not edit expense if id not found', () => {
  const updates = { description: 'New value' };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).not.toBe(updates.description);
});
