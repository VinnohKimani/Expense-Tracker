import { useState } from "react";

export function ExpenseCard({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(formData);
    setFormData({
      name: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    //this is to update the values while still preserving the previous inputed values
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="bg-white rounded-xl mt-10">
      <h3 className="text-2xl font-semibold p-2">Add Expense</h3>
      <form onSubmit={handleSubmit}>
        <div className="p-2">
          <h4>Enter your expense details below</h4>

          <div className="grid grid-rows-1 place-content-between gap-2 pb-2">
            <input
              type="text"
              id="name"
              placeholder="Enter Expense Name"
              className="border-2 rounded-sm"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="description"
              placeholder="Enter Expense Description"
              className="border-2 rounded-sm"
              value={formData.description}
              onChange={handleChange}
            />
            <input
              type="text"
              id="category"
              placeholder="Enter Expense Category"
              className="border-2 rounded-sm"
              value={formData.category}
              onChange={handleChange}
            />
            <input
              type="number"
              id="amount"
              placeholder="Enter Expense Amount"
              className="border-2 rounded-sm"
              value={formData.amount}
              onChange={handleChange}
              required
              step="0.01"
            />
            <input
              type="date"
              id="date"
              className="border-2 rounded-sm"
              value={formData.date}
              onChange={handleChange}
            />
            <button type="submit" className="bg-black text-blue-50 rounded-sm">
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
