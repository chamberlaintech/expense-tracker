import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from "../redux/actions";
import { FaTrash } from "react-icons/fa";

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => {
          return (
            <li key={expense.id}>
              <p className="item-name">
                <span className="expense-list-detail">
                  {expense.description} - {expense.amount}${" "}
                </span>
                ({expense.category})
              </p>
              <button
                onClick={() => handleDelete(expense.id)}
                className="delete-btn"
                type="button"
              >
                <FaTrash />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExpenseList;
