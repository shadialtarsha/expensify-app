import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export const EditExpensePage = props => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Edit Expense</h1>
      </div>
    </div>
    <div className="content-container">
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.startEditExpense(props.expense.id, expense);
          props.history.push('/');
        }}
      />
      <button
        className="button button--secondary"
        onClick={() => {
          props.startRemoveExpense({ id: props.expense.id });
          props.history.push('/');
        }}
      >
        Remove Expense
      </button>
    </div>
  </div>
);

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
