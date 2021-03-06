import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import toJSON from "enzyme-to-json";
import expenses from "../fixtures/expenses";

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      history={history}
      startRemoveExpense={startRemoveExpense}
      expense={expenses[2]}
    />
  );
});

test("should render EditExpensePage correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should handle startEditExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]);
  // Spies
  expect(history.push).toHaveBeenCalledWith("/");
  expect(startEditExpense).toHaveBeenLastCalledWith(
    expenses[2].id,
    expenses[2]
  );
});

test("should handle startRemoveExpense", () => {
  wrapper.find("button").simulate("click");
  // Spies
  expect(history.push).toHaveBeenCalledWith("/");
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[2].id,
  });
});
