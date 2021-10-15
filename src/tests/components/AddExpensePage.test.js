import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
// import toJSON from "enzyme-to-json";
import expenses from "../fixtures/expenses";

// if tests have the same base data we can set it up one...
// time so they can be used globally
let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
});

test("should render AddExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenCalledWith("/");
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
