import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INUT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found ", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "11",
    description: "New Car",
    note: "",
    amount: 150500,
    createdAt: 25000,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit expense", () => {
  const description = "New Truck";
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      description,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description);
});

test("should not edit expense if expense not found", () => {
  const note = "This is a note";
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      note,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]],
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
