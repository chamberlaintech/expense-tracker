import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ExpenseForm = ({ onFormSubmit }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const dispatch = useDispatch();

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    if (value.length > 20) {
      setDescriptionError("Maximum 20 characters");
    } else {
      setDescriptionError("");
      setDescription(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.length > 20) {
      setDescriptionError("Maximum 20 characters");
      return;
    }

    if (category === "") {
      alert("Please select a valid category");
      return;
    }

    const newExpense = {
      id: new Date().getTime().toString(),
      description,
      amount,
      category,
    };
    dispatch({ type: "ADD_EXPENSE", payload: newExpense });
    setDescription("");
    setAmount("");
    setCategory("");
    onFormSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a transaction"
          value={description}
          onChange={handleDescriptionChange}
          className="input-desc"
          maxLength="20"
          required
        />
        {descriptionError && <p className="error">{descriptionError}</p>}
        <input
          type="number"
          placeholder="Price"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-amount"
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-selector"
          required
        >
          <option value="" disabled>
            Choose category
          </option>
          <option value="Electronics">Electronics</option>
          <option value="Bills">Bills</option>
          <option value="Debt">Debt</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Household">Household</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Groceries">Groceries</option>
          <option value="Activities">Activities</option>
          <option value="Transport">Transport</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="button-container">
        <button type="submit" className="submit-btn">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
