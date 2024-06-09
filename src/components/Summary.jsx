import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const expenses = useSelector((state) => state.expenses);

  const totalExpenses = expenses.length;
  const totalAmount = expenses.reduce((total, expense) => {
    return total + parseFloat(expense.amount);
  }, 0);

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>
        Total Expenses: <b>{totalExpenses}</b>
      </p>
      <p>
        Total Amount Spent: <b>${totalAmount.toFixed(2)}</b>
      </p>
    </div>
  );
};

export default Summary;
