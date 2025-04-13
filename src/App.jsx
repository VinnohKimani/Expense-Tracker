import { useState } from "react";
import "./App.css";
import { ExpenseCard } from "./Components/ExpenseCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className=" bg-gray-100 ml-30 h-200 ">
      <div className="ml-5">
        <h1 className="text-6xl font-semibold font-serif">Expense Tracker</h1>
        <h2 className="text-1xl font-sans">
          Start taking control of your finances, life. Record,
          <br /> categorize and analyze your spending
        </h2>
        <ExpenseCard />
      </div>
    </main>
  );
}

export default App;
