import { useState } from "react";
import "./App.css";
import { ExpenseCard } from "./Components/ExpenseCard";
import { SearchBar } from "./Components/SearchBar";
import { SummaryOfExpensesCard } from "./Components/SummaryOfExpensesCard";

function App() {
  const [expenses, setExpenses] = useState([
    /*{
      id: 1,
      name: "Groceries",
      description: "Weekly shopping",
      amount: 150.0,
      category: "Food",
      date: "2023-05-15",
    },
    {
      id: 2,
      name: "Internet",
      description: "Monthly bill",
      amount: 65.0,
      category: "Utilities",
      date: "2023-05-01",
    },*/
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addExpense = (newExpense) => {
    setExpenses([
      ...expenses,
      {
        ...newExpense,
        id: expenses.length + 1,
        amount: parseFloat(newExpense.amount),
      },
    ]);
  };
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-gray-100 ml-30 h-178">
      <div className="ml-5">
        <h1 className="text-6xl font-semibold font-serif">Expense Tracker</h1>
        <h2 className="text-1xl font-sans">
          Start taking control of your finances, life. Record,
          <br /> categorize and analyze your spending
        </h2>
        <div className="flex flex-row gap-8">
          <div className="w-[30%]">
            <ExpenseCard onAddExpense={addExpense} />
          </div>
          <div className="flex-1">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <SummaryOfExpensesCard
              expenses={filteredExpenses}
              onDeleteExpense={deleteExpense}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
