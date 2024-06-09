import React from "react";
import { useSelector } from "react-redux";

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses);

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => {
          return (
            <li key={expense.id}>
              <p>
                <span className="expense-list-detail">
                  {expense.description} - {expense.amount}${" "}
                </span>
                ({expense.category})
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExpenseList;
