import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.scss";
import React, { useState } from "react";
import Header from "../src/components/Header/Header";
import Footer from "./components/Footer/Footer";

const base_Expenses = [
  {
    id: "e1",
    title: "Car Payment",
    amount: 472.19,
    date: new Date(2020, 7, 7),
  },
  {
    id: "e2",
    title: "Insurance",
    amount: 130.45,
    date: new Date(2021, 2, 21),
  },
  {
    id: "e3",
    title: "Rent",
    amount: 425,
    date: new Date(2021, 3, 28),
  },
  {
    id: "e4",
    title: "Netflix",
    amount: 16.99,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(base_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div className="App">
      <Header />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <Footer />
    </div>
  );
}

export default App;
