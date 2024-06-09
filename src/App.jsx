import "./App.css";
import CategoryChart from "./components/Chart";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleFormSubmit = () => {
    setIsVisible(true);
  };
  return (
    <div className="app-container">
      <h1 className="app-title">Expense Tracker</h1>
      <ExpenseForm onFormSubmit={handleFormSubmit} />
      {isVisible && (
        <>
          <div className="details-container">
            <ExpenseList />
            <CategoryChart />
          </div>
          <div className="summary-container">
            <Summary />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
